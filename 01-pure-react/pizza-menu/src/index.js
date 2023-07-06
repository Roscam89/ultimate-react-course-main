import React from "react";
import ReactDOM from "react-dom/client";
//import { pizzaData } from "../public/data";

function App() {
  console.log("src=data.js");
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza inc.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu:</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  return <footer>We are currently open 24h</footer>;
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/salamino.jpg" alt="salamino" />
      <h2>Pizza Salamino</h2>
      <p>Tomato, mozarella, and pepperoni</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
