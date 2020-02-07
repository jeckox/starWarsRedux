import 'isomorphic-fetch';
import * as URL from '../../constants/Urls';
const getPeople = async theURL => {
	var misCabeceras = new Headers();
	var miInit = {
		method: 'GET',
		headers: misCabeceras,
		mode: 'cors',
		cache: 'default'
	};
	const url = `${URL.CHARACTER}${theURL}/`;

	const response = await fetch(
		url, miInit
	);

	if (!response.ok) {
		return {error: {code: response.status}};
	}
	const json = await response.json();

	return {data: json};
};

export default getPeople;
