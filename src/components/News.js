import React from "react";

const News = ({ articles }) => {
  const AllArticles = articles.map((article) => {
    return (
      <div
        className="article"
        onClick={(e) => window.open(article.url, "_blank")}
      >
        <div className="img">
          <img src={article.urlToImage}></img>
        </div>
        <div className="title">
          <p>{article.title}</p>
        </div>
        <div className="content">
          <p>{article.content}</p>
        </div>
      </div>
    );
  });

  return <div className="news">{AllArticles}</div>;
};

export default News;
