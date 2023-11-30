import React from "react";
import Message from "../icons/Message";

export default function End() {
  return (
    <div className="end">
      <div>
        <div className="message1">
          <Message />
        </div>
        <input
          type="text"
          name="name"
          id="name"
          className="name-wrapper"
          placeholder="Enter Name"
          required
        />
      </div>

      <div>
        <div className="message2">
          <Message />
        </div>
        <input
          type="text"
          name="email"
          id="email"
          class="email-wrapper"
          placeholder="Enter Email Address"
          required
        />
      </div>
      {/* <div className="name-wrapper">
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
      </div> */}
      <div className="contact">Contact Me</div>
      <div className="end-note">
        Hello Name, Your message has been sent to your email: Email address
      </div>
    </div>
  );
}
