const PORT = 8000
const express = require("express")
const cors = require("cors")
const axios = require("axios")
require("dotenv").config()

const { REACT_APP_RAPID_API_KEY: apiKey } = process.env

const app = express()

app.use(cors())

app.get("/", (req, res) => {
  res.json("test")
})

app.get("/convert", (req, res) => {
  const { to_currency, from_currency } = req.query

  const options = {
    method: "GET",
    url: "https://alpha-vantage.p.rapidapi.com/query",
    params: {
      from_currency,
      function: "CURRENCY_EXCHANGE_RATE",
      to_currency,
    },
    headers: {
      "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
      "x-rapidapi-key": apiKey,
    },
  }

  return axios
    .request(options)
    .then((response) => {
      res.json(
        response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
      )
    })
    .catch((error) => console.error(error))
})

app.get("/news", (req, res) => {
  const options = {
    method: "GET",
    url: "https://crypto-news-live3.p.rapidapi.com/news",
    headers: {
      "x-rapidapi-host": "crypto-news-live3.p.rapidapi.com",
      "x-rapidapi-key": apiKey,
    },
  }

  axios
    .request(options)
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
