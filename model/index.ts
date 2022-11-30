import * as isoly from "isoly"
import * as cryptly from "cryptly"


export interface Message extends Creatable {
	id: cryptly.Identifier
	created: isoly.DateTime
}
export interface Creatable {
	title: string
	content: string
}
export namespace Message {
	export function is(value: any | Message): value is Message {
		return value && typeof value == "object" &&
		 isoly.DateTime.is(value.created) && cryptly.Identifier.is(value.id) && Creatable.is(value)
	}
	export function create(value: Creatable): Message {
		return {...value, id: cryptly.Identifier.generate(4), created: isoly.DateTime.now()}
	}
}
	export namespace Creatable {
		export function is(value: any | Creatable){
			return value && typeof value == "object" && typeof value.title == "string" &&
			 typeof value.content == "string"
		}

	}
