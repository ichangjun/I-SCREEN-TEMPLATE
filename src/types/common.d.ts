/**
 * @description Axios Request返回体
 * @param {number} code 错误码
 * @param {string} message 提示信息
 * @param {any} data 返回数据
 */
export type THttpResponse<T = TDict> = {
	code: number
	message: string
	data: T
}
/**
 * Data 列表返回体
 */
export type THttpDataResponse<T> = {
	records: Array<T>
	total: number
	size: number
	current: number
}

export type THttpDataResponseByCode<T> = {
	rows: never[]
	code: number
	records: Array<T>
	total: number
	size: number
	current: number
}
