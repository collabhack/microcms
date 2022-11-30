import * as gracely from "gracely"
import * as model from "@collabhack/model-microcms"
import * as http from "cloudly-http"
import { Context } from "../Context"
import { router } from "../router"

export async function list(request: http.Request, context: Context): Promise<http.Response.Like | any> {
	let result: model.Message[] | gracely.Error
	result = messages
	return result
}
router.add("GET", "/:site/message", list)

const messages: model.Message[] = [
	{
		title: "first post",
		content: "best content",
		created: "2022-01-02T12:00:00.001Z",
	},
	{
		title: "second post",
		content: "best content",
		created: "2022-01-02T12:00:00.001Z",
	},
	{
		title: "third post",
		content: "best content",
		created: "2022-01-02T12:00:00.001Z",
	},
]
