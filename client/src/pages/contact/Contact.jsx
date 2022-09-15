import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div class="page" id="contact-page">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
      </div>
      <div class="jumbotron">
        <h1>Contact me</h1>
      </div>
      <div className="contactInfo">
        <a
          href="https://www.linkedin.com/in/parthdarji8825/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a
          className="git"
          href="https://github.com/Parth8825"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
      <div className="mailId">
        <a href="mailto: parthdarji20@gmail.com">parthdarji20@gmail.com</a>
      </div>
    </div>
  );
}
