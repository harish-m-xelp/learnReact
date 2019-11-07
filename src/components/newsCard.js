import React from "react";
import Media from "react-media";
import styles from "./newCard.module.css";

function Newscard(props) {
  const { articles } = props.newsFeed;

  return (
    <div>
      {articles &&
        articles.map(feed => {
          const { author, urlToImage, title, content } = feed;

          return (
            <Media query="(min-width:1024px)">
              <div className={styles.deskContainer}>
                <img className={styles.deskimage} src={urlToImage} />
                <div className={styles.header}>
                  <h2>{title}</h2>

                  <p>{content}</p>
                  <div className={styles.author}>{author}</div>
                </div>
                <br />
                <br />
              </div>
            </Media>
          );
        })}
    </div>
  );
}

export default Newscard;
