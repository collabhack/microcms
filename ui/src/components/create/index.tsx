import { Component, Event, EventEmitter, h, Prop } from "@stencil/core"
import { Notice } from "smoothly"

@Component({
	tag: "microcms-create",
	styleUrl: "style.css",
	scoped: true,
})
export class MicroCmsCreate {
	@Event() notice: EventEmitter<Notice>
	formElement?: HTMLFormElement
	@Prop() feed?: string
	readonly baseUrl = "http://127.0.0.1:8788"

	async submit() {
		if (this.formElement) {
			this.notice.emit(
				Notice.execute("Uploading...", async () => {
					const data = new FormData(this.formElement)
					this.formElement.reset()
					const response = await fetch(`${this.baseUrl}/${this.feed}/message`, {
						headers: { Authorization: "Basic" },
						method: "POST",
						body: data,
					})
					return response.status < 300 ? [true, "File successfully submitted."] : [false, "File failed to upload."]
				})
			)
		}
	}
	render() {
		return [
			<form ref={element => (this.formElement = element)}>
				<smoothly-input name="title" type="text">
					title
				</smoothly-input>
				<smoothly-input name="content" type="text">
					content
				</smoothly-input>
				<smoothly-input-file name="image" mode="file"></smoothly-input-file>
				<smoothly-submit expand="block" color="success" prevent onSubmit={this.submit.bind(this)}>
					Upload
				</smoothly-submit>
			</form>,
		]
	}
}
