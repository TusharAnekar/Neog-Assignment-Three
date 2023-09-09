// Create a React component that fetches products data from an API endpoint using useEffect hook and display tweets (content, likes, views) as a list on the screen using the useState hook. Add a button on top, on click of which it displays only the tweets with more than 50 likes.

import { useEffect, useState } from "react";
import { fakeFetch } from "../6-Tweets/fakeFetch";

export function Tweets() {
  const [tweets, setTweets] = useState([]);
  const [filteredTweets, setFilteredTweets] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  async function getTweets() {
    try {
      const { status, data } = await fakeFetch(
        "https://example.com/api/usertweets"
      );
      if (status === 200) {
        setTweets(data);
        setFilteredTweets(data);
      }
    } catch (error) {}
  }

  useEffect(() => {
    getTweets();
  }, []);

  function getTweetsMoreThan50Likes() {
    if (!isClicked) {
      setIsClicked(true);
      setFilteredTweets(tweets.filter(({ likes }) => likes > 50));
    } else {
      setIsClicked(false);
      setFilteredTweets(tweets);
    }
  }

  return (
    <>
      <h2>Tweets</h2>
      <button onClick={getTweetsMoreThan50Likes}>
        {isClicked ? "Show all tweets" : "Show tweets with more than 50 likes"}
      </button>

      {!tweets.length && <p>Loading...</p>}

      {filteredTweets.map(({ id, content, likes, views }) => (
        <li
          key={id}
          style={{
            listStyleType: "none",
            border: "2px solid aqua",
            margin: "10px"
          }}
        >
          <h3>{content}</h3>
          <span style={{ marginRight: "10px" }}>Likes: {likes}</span>
          <span>Views: {views}</span>
        </li>
      ))}
    </>
  );
}
