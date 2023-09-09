// Create a React component that fetches chats from an API endpoint using useEffect hook and display chat data (chat message) as a list on the screen using the useState hook. Display "You: " before every odd message and "user: " at every even message.

import { useEffect, useState } from "react";
import { fakeFetch } from "./fakefetch";

export function ChatRoom() {
  const [chats, setChats] = useState([]);

  async function getChats() {
    try {
      const { status, data } = await fakeFetch(
        "https://example.com/api/userchats"
      );
      if (status === 200) setChats(data);
    } catch (error) {}
  }

  useEffect(() => {
    getChats();
  }, []);

  return (
    <>
      <h2>Chat Room</h2>
      {!chats.length && "Loading..."}
      {chats.map((message, index) => (
        <li style={{ listStyleType: "none", textAlign: "left" }}>
          {index % 2 ? <span>You: </span> : <span>User: </span>}
          {message}
        </li>
      ))}
    </>
  );
}
