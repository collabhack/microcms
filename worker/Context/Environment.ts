export interface Environment extends Record<string, undefined | string | KVNamespace> {
	adminSecret?: string
	messageStore: KVNamespace
}
