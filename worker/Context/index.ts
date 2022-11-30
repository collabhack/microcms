import * as gracely from "gracely"
import * as model from "@collabhack/model-microcms"
import * as http from "cloudly-http"
import * as storage from "cloudly-storage"
import { router } from "../router"
import { Environment } from "./Environment"
export class Context {
	constructor(public readonly environment: Environment) {}
	async authenticate(request: http.Request): Promise<"admin" | undefined> {
		return this.environment.adminSecret && request.header.authorization == `Basic ${this.environment.adminSecret}`
			? "admin"
			: undefined
	}
	static async handle(request: Request, environment: Environment): Promise<Response> {
		let result: http.Response
		try {
			result = await router.handle(http.Request.from(request), new Context(environment))
		} catch (e) {
			const details = (typeof e == "object" && e && e.toString()) || undefined
			result = http.Response.create(gracely.server.unknown(details, "exception"))
		}
		return http.Response.to(result)
	}
	#kv?: storage.KeyValueStore<model.Message> | gracely.Error
	get kv(): storage.KeyValueStore<model.Message> | gracely.Error {
		return (
			this.#kv ??
			(this.#kv = this.environment.messageStore
				? storage.KeyValueStore.Json.create(this.environment.messageStore)
				: gracely.server.misconfigured("kvStore", "KeyValueNamespace missing."))
		)
	}
}
