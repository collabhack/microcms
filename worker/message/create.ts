import * as gracely from "gracely"
import * as model from "@collabhack/model-microcms"
import * as http from "cloudly-http"
import { Context } from "../Context"
import { router } from "../router"

export async function create(request: http.Request, context: Context): Promise<http.Response.Like | any> {
	let result: gracely.Result
	const message = await request.body
	if (!request.header.authorization)
		result = gracely.client.unauthorized()
	else if (!model.Message.is(message))
		result = gracely.client.invalidContent("Message", "Body is not a valid message.")
	else
		result = gracely.success.created(message)
	return result
}
router.add("POST", "/:site/message", create)
