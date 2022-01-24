import React from "react"
import useArticles from "../hooks/useArticles"

const NewsFeed = () => {
  const articles = useArticles()

  return (
    <div className="news-feed">
      <h2>News Feed</h2>
      {articles?.map(({ title, url }, index) => (
        <div key={index}>
          <a href={url}>
            <p>{title}</p>
          </a>
        </div>
      ))}
    </div>
  )
}

export default NewsFeed
