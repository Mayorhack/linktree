import React from "react";
import "../styles/contact.scss";

const Contact = () => {
  const name = "Sodipo Mayowa";
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form action="">
        <div className="names">
          <div className="form_input">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Enter your first name"
            />
          </div>
          <div className="form_input">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="form_input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="yourname@email.com"
          />
        </div>
        <div className="form_input">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          />
        </div>
        <div className="flex">
          <input type="checkbox" name="" id="" />
          <span>
            You agree to providing your data to {name} who may contact you.
          </span>
        </div>
        <button type="submit" id="btn__submit" className="submit_button">
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
