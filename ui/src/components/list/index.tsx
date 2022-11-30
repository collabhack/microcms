import { Component, ComponentWillLoad, h, Prop, State } from "@stencil/core"
import * as isoly from "isoly"
import * as model from "@collabhack/model-microcms"
import * as http from "cloudly-http"

@Component({
	tag: "microcms-list",
	styleUrl: "style.css",
	shadow: true,
})
export class MicroCmsList implements ComponentWillLoad {
	@Prop() feed?: string
	@State() private messages?: readonly model.Message[]
	readonly baseUrl = "http://127.0.0.1:8788"

	async componentWillLoad(): Promise<void> {
		try {
			const response = await http.fetch(`${this.baseUrl}/${this.feed}/message`)
			this.messages = await response?.body
		} catch (e) {
			console.error("Failed to fetch data", e)
		}
	}

	render() {
		return (
			this.messages?.map(message => (
				<article>
					<header>
						<h1>{message.title}</h1>
						<p class="created">{isoly.DateTime.localize(isoly.DateTime.truncate(message.created, "minutes"))}</p>
					</header>
					<aside>
						<img src="http://placekitten.com/g/200/300" />
					</aside>
					<main>
						<p>{message.content}</p>
					</main>
				</article>
			)) ?? <div class="error">Failed to fetch the data</div>
		)
	}
}
