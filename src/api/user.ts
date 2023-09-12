import axios from 'axios'

export default class User {
	url: string
	constructor(url: string) {
		this.url = url
	}
	async get() {
		const { data } = await axios.get(this.url)
		console.log(data)
		return data
	}
}