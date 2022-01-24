import { useEffect, useState } from "react"
import axios from "axios"

const { REACT_APP_RAPID_API_KEY: apiKey } = process.env

const useArticles = () => {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    var options = {
      method: "GET",
      url: "http://localhost:8000/news",
    }

    axios
      .request(options)
      .then(function (response) {
        setArticles(response.data.slice(0, 7) || response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  return articles
}

export default useArticles
