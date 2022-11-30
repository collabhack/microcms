import { Context } from "./Context"
import { Environment } from "./Environment"

import "./item"
import "./version"
import "./message"

export default {
	async fetch(request: Request, environment: Environment) {
		return await Context.handle(request, environment)
	},
}
