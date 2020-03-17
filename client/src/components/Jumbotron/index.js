import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>Google Books</h1>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.googleapis.com/books/v1/volumes?q="
      >
        Powered by Booky Bookman
      </a>
    </div>
  );
}

export default Jumbotron;
