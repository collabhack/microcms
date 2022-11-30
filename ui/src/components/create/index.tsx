import { Component, h, Prop, State } from "@stencil/core"
import * as isoly from "isoly"
import "smoothly"
import * as model from "@collabhack/model-microcms"
import * as http from "cloudly-http"

@Component({
	tag: "microcms-create",
	styleUrl: "style.css",
	shadow: true,
})
export class MicroCmsCreate {
	@Prop() feed: string
	private form?: HTMLFormElement

	readonly baseUrl = "http://127.0.0.1:8788"

	private async submit() {
		console.log("Click", this.form)
	}

	render() {
		return (
			<form ref={form => (this.form = form)}>
				<smoothly-input type="text" name="title">
					title
				</smoothly-input>
				<smoothly-input type="text" name="content">
					content
				</smoothly-input>
				<input type="file" name="image" />
				<smoothly-submit onSubmit={this.submit.bind(this)}>Submit to the frontend</smoothly-submit>
			</form>
		)
	}
}
