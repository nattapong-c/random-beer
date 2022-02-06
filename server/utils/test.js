const axios = require("axios")
const t = async () => {
    for(let i = 1; i <= 100; i++) {

        let x = await axios("https://random-data-api.com/api/beer/random_beer")
        console.log(x.data)
    }
}

t()