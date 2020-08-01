import React, { Component } from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import "./bootstrap.min.css";
import "./App.css";

function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the auth shown</p>
      </div>
    </div>
  );
}
function Book({ title, onClick }) {
  return (
    <div
      class="answer"
      onClick={() => {
        onClick(title);
      }}
    >
      <h4>{title}</h4>
    </div>
  );
}
function Turn({ author, books, highlight, onAnswerSelected }) {
  function highlightTheBackgroundColor(highlight) {
    const mapping = { none: "", correct: "green", wrong: "red" };
    return mapping[highlight];
  }
  return (
    <div
      className="row turn"
      style={{
        backgroundColor: highlightTheBackgroundColor(highlight),
      }}
    >
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorImage" alt="author"></img>
      </div>
      <div className="col-6">
        {books.map((title) => (
          <Book title={title} key={title} onClick={onAnswerSelected}></Book>
        ))}
      </div>
    </div>
  );
}
function Continue() {
  return <div></div>;
}
function Footer() {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from{" "}
          <a href="https://commons.wikimedia.org/wiki/Main_Page">wikimedia</a>{" "}
          and available on public
        </p>
      </div>
    </div>
  );
}
function AuthorQuiz({ turnData, highlight, onAnswerSelected }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn
        {...turnData}
        highlight={highlight}
        onAnswerSelected={onAnswerSelected}
      />
      <Continue />
      <p><Link to= "/add"> Add an Author</Link></p>
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
