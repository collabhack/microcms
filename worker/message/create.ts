import * as gracely from "gracely"
import * as isoly from "isoly"
import * as model from "@collabhack/model-microcms"
import * as http from "cloudly-http"
import { Context } from "../Context"
import { router } from "../router"
export async function create(request: http.Request, context: Context): Promise<http.Response.Like | any> {
	let result: gracely.Result
	let message = await request.body
	const kv = context.kv
	const feed = request.parameter.feed
	if (gracely.Error.is(kv))
		result = kv
	else if (!request.header.authorization)
		result = gracely.client.unauthorized()
	else if (!feed)
		result = gracely.client.invalidPathArgument("feed", "feed", "string", "Path is invalid.")
	else if (!model.Creatable.is(message))
		result = gracely.client.invalidContent("Message", "Body is not a valid message.")
	else {
		message = model.Message.create(message)
		await kv.set(`m|${feed}|${isoly.DateTime.invert(message.created)}|${message.id}`, message)
		result = gracely.success.created(message)
	}
	return result
}
router.add("POST", "/:feed/message", create)
