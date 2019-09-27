const key = "";

const getCity = async (city) => {
    const base = '';
    const query = `?apikey=${key}&q=${city}`;


    const response = await fetch(base + query);
    const data = await response.json();

    console.log(data[0]);
}

getCity('Toronto')
    .then(data => console.log(data))
    .catch(err => console.log(err));