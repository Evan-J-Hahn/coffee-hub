import { API_BASE_URL, API_BEARER_TOKEN } from './config'
import queryString from 'query-string'

export const get = (path, queryParams) => {
	const query = queryString.stringify(queryParams)

	return fetch(`${API_BASE_URL}${path}?${query}`, {
		headers: {
			Authorization: `Bearer ${API_BEARER_TOKEN}`,
			Origin: 'localhost',
			withCredentials: true,
		},
	})
}
