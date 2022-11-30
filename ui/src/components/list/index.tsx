import { Component, ComponentWillLoad, h, Prop } from "@stencil/core"
import * as model from "@collabhack/model-microcms"
import * as http from "cloudly-http"

@Component({
	tag: "microcms-list",
	styleUrl: "style.css",
	shadow: true,
})
export class MicroCmsList implements ComponentWillLoad {
	@Prop() feed: string
	readonly baseUrl= "http://127.0.0.1:8788"

	componentWillLoad(): void | Promise<void> {
		http.fetch(`${this.baseUrl}/${this.feed}/message`)
	}

	render() {
		return <div>Hello, World! I'm {model.Message.is("")}</div>
	}
}
