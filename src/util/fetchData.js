const BASE_URL = 'https://youtube-v2.p.rapidapi.com'





export const SearchVidoes = (query) => {
    const res = fetch(`${BASE_URL}/${query}`, {
        method: "GET",
        headers: {
            'x-rapidapi-key': 'de303d536fmsh71acbd2831d4e68p1db2eejsn43d6daf710e2',
		'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
        }
    })

    const result = res.json();
    return result;
}