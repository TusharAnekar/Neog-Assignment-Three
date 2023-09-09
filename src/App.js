import { NavLink, Routes, Route } from "react-router-dom";

import { Tabs } from "./1-Tabs";
import { GroceryList } from "./2-GroceryList";
import { Card } from "./3-Card";
import { SetBackground } from "./4-SetBackground";
import { ChatRoom } from "./5-ChatRoom/ChatRoom";
import { Tweets } from "./6-Tweets/Tweets";
import { Movies } from "./7-Movies/Movies";
import "./styles.css";

export default function App() {
  const getActiveStyle = ({ isActive }) => ({
    margin: "5px",
    color: isActive ? "red" : ""
  });

  return (
    <div className="App">
      <h1>Assignment Three</h1>

      <nav>
        <NavLink to="/q1" style={getActiveStyle}>
          Q1
        </NavLink>
        <NavLink to="/q2" style={getActiveStyle}>
          Q2
        </NavLink>
        <NavLink to="/q3" style={getActiveStyle}>
          Q3
        </NavLink>
        <NavLink to="/q4" style={getActiveStyle}>
          Q4
        </NavLink>
        <NavLink to="/q5" style={getActiveStyle}>
          Q5
        </NavLink>
        <NavLink to="/q6" style={getActiveStyle}>
          Q6
        </NavLink>
        <NavLink to="/q7" style={getActiveStyle}>
          Q7
        </NavLink>
      </nav>

      <Routes>
        <Route path="/q1" element={<Tabs />}></Route>
        <Route path="/q2" element={<GroceryList />}></Route>
        <Route path="/q3" element={<Card />}></Route>
        <Route path="/q4" element={<SetBackground />}></Route>
        <Route path="/q5" element={<ChatRoom />}></Route>
        <Route path="/q6" element={<Tweets />}></Route>
        <Route path="/q7" element={<Movies />}></Route>
      </Routes>
    </div>
  );
}
