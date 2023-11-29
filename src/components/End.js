import React from "react";
import Message from "../icons/Message";

export default function End() {
  return (
    <div className="end">
      <div className="name-wrapper">
        <div className="message">
          <Message />
        </div>
        <div className="name">Enter name</div>
      </div>

      <div className="email-wrapper">
        <div className="message">
          <Message />
        </div>
        <div className="name">Enter Email Address</div>
      </div>

      <div className="contact">Contact Me</div>

      <div className="end-note">
        Hello Name, Your message has been sent to your email: Email address
      </div>
    </div>
  );
}
