import { Component, Event, EventEmitter, h, State } from "@stencil/core"
import { Notice } from "smoothly"

@Component({
	tag: "microcms-create",
	styleUrl: "style.css",
	scoped: true,
})
export class MicroCmsCreate {
	@State() fileCount = 1
	@Event() notice: EventEmitter<Notice>
	formElement?: HTMLFormElement
	async submit() {
		if (this.formElement) {
			this.notice.emit(
				Notice.execute("Uploading...", async () => {
					const data = new FormData(this.formElement)
					this.formElement.reset()
					this.fileCount = 1
					const response = await fetch(
						`https://inbound.binotype.com/message/${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiaW5vdHlwZSIsImlhdCI6MTY0MzkzMDc3NiwidGl0bGUiOiJPbmJvYXJkIFVwbG9hZCIsInNsYWNrIjp7InNlY3JldCI6InRTTm9xeFZkaG1Uc19nQmN1WjQtbGlkcmNsTzBfQng2NGhzbXJDcW1Tbkh2X2hoX0UtNW42RGRxNVVDNVpVWFQ5WEFPZU1oSjVROUtCNlUiLCJjaGFubmVsIjoiQzAzMUQwUzZGQVMifSwidG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGMzTWlPaUppYVc1dmRIbHdaU0lzSW1saGRDSTZNVFkwTXpreU5EWTNNeXdpZEdsMGJHVWlPaUpQYm1KdllYSmtJRlZ3Ykc5aFpDSXNJbkpsZEhWeWJpSTZleUp6ZFdOalpYTnpJam9pYUhSMGNITTZMeTl2Ym1KdllYSmtMbkJoZURKd1lYa3VZMjl0TDNWd2JHOWhaQzl6ZFdOalpYTnpJaXdpWm1GcGJIVnlaU0k2SW1oMGRIQnpPaTh2YjI1aWIyRnlaQzV3WVhneWNHRjVMbU52YlM5MWNHeHZZV1F2Wm1GcGJIVnlaU0o5TENKemJHRmpheUk2ZXlKelpXTnlaWFFpT2lKcU5rTlJkazQwT1VSTWFGZG5TRFZETUVGMlNtdHVUbGhwUm1Ga1EwdFZXSFl3WTBNdGNYWnFkbDkwV0RWUFdtTndWVGhaY1ZGSVYwOVRlbWRUVVd4a1JEQlBlVVZ1TldkSmFtSm9ialJ6SWl3aVkyaGhibTVsYkNJNklrTXdNekZFTUZNMlJrRlRJbjE5LllhZlhUc2JBX3AwbTJwQ1k2VFlkRDRXaWJCQzdXNHBYMzBpTW91VlE5OUEifQ.wk76fCnvov6lVqv8GGyPx8Su_WhhP-0ANPI5VvmcjiQ"}`,
						{
							method: "POST",
							body: data,
						}
					)
					return response.status < 300 ? [true, "File successfully submitted."] : [false, "File failed to upload."]
				})
			)
		}
	}
	render() {
		return [
			<section>
				<smoothly-icon name="lock-closed" size="large"></smoothly-icon>
				<h1>Secure Upload</h1>
				<p>Use the below form to securely upload your onboarding documents to Pax2Pay.</p>
			</section>,
			<form ref={element => (this.formElement = element)}>
				<smoothly-input name="company" type="text">
					company
				</smoothly-input>
				<smoothly-input name="description" type="text">
					description
				</smoothly-input>
				{[...Array(this.fileCount).keys()].map(index => (
					<smoothly-input-file name={`file${index.toString().padStart(2, "0")}`} mode="file"></smoothly-input-file>
				))}
				<a
					href=""
					onClick={(event: MouseEvent) => {
						event.preventDefault()
						this.fileCount += 1
					}}>
					upload more files
				</a>
				<smoothly-submit expand="block" color="success" prevent onSubmit={this.submit.bind(this)}>
					Upload
				</smoothly-submit>
			</form>,
		]
	}
}
