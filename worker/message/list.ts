import * as gracely from "gracely"
import * as model from "@collabhack/model-microcms"
import * as http from "cloudly-http"
import { Context } from "../Context"
import { router } from "../router"

export async function list(request: http.Request, context: Context): Promise<http.Response.Like | any> {
	let result: (model.Message | undefined)[] | gracely.Error
	const kv = context.kv
	const feed = request.parameter.feed
	if (gracely.Error.is(kv))
		result = kv
	else {
		result = (await kv.list({ prefix: `m|${feed}`, limit: 2, values: true })).map(item => item.value)
	}

	return result
}
router.add("GET", "/:feed/message", list)
