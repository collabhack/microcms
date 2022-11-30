import * as isoly from "isoly"

export interface Message {
	title: string
	content: string
	created: isoly.DateTime
}
export namespace Message {
	export function is(value: any | Message): value is Message {
		return value && typeof value == "object" && typeof value.title == "string" &&
		 typeof value.content == "string"&& isoly.DateTime.is(value.created)  
	}
}
