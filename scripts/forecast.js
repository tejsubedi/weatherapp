const key = "";

//Get weather information
const getWeather = async (id) => {
    const base = '';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];
};

//Get city information
const getCity = async (city) => {
    const base = '';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

getCity('Toronto')
    .then(data => {
        return getWeather(data.Key)
    }).then((data) => {
        console.log(data);
    }) 
    .catch(err => console.log(err));

