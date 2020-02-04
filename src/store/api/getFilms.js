import 'isomorphic-fetch';
const getFilms = async(films) => {
	var misCabeceras = new Headers();
	var miInit = {
		method: 'GET',
		headers: misCabeceras,
		mode: 'cors',
		cache: 'default'
	};

	const response = await fetch(
		'https://swapi.co/api/films/', miInit
	);

	if (!response.ok) {
		return {error: {code: response.status}};
	}
	const json = await response.json();

	return {data: json.results};
};

export default getFilms;
