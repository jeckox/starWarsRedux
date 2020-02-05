import 'isomorphic-fetch';
const getFilms = async(films) => {
	const headers = new Headers();
	const miInit = {
		method: 'GET',
		headers,
		mode: 'cors',
		cache: 'default'
	};

	const url = 'https://swapi.co/api/films/' + (films || '');

	const response = await fetch(
		url, miInit
	);

	if (!response.ok) {
		return {error: {code: response.status}};
	}
	const json = await response.json();

	return {data: films ? json : json.results};
};

export default getFilms;
