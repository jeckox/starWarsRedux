export const getLinkEpisode = (id) => `/Episodes/${id}/`;
export const getLinkCharacter = (id) => `/Character/${id}/`;
export const getIdFromURL = (url) =>{
	let elements = url.split('/');
	const lastItem = elements.pop();

	return lastItem !== '' ? lastItem : elements.pop();
};
