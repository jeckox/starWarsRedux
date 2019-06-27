import "isomorphic-fetch";
const getPeople = async id => {
    var misCabeceras = new Headers();
    var miInit = {
        method: 'GET',
        headers: misCabeceras,
        mode: 'cors',
        cache: 'default'
    };
    const url = id;
    const response = await fetch(
        url, miInit
    );
    if (!response.ok) {
        return { error: { code: response.status } };
    }
    const json = await response.json();
    return { data: json };
}
export default getPeople;