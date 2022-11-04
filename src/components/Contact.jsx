import React from "react";
import { useState } from "react";
import "../styles/contact.scss";

const Contact = () => {
  const name = "Mayorhack";
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    checked: false,
    submitted: false,
  });
  const handleChange = function (e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "checked") {
      setFormData((prev) => {
        return {
          ...prev,
          [name]: e.target.checked,
        };
      });
    } else {
      setFormData((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  };
  const onsubmit = function (e) {
    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email ||
      !formData.message ||
      !formData.checked
    ) {
      e.preventDefault();
      setFormData((prev) => {
        return {
          ...prev,
          submitted: true,
        };
      });
    } else {
      alert("Form submitted successfuly");
    }
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form onSubmit={onsubmit}>
        <div className="names">
          <div className="form_input">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Enter your first name"
              value={formData.first_name}
              onChange={handleChange}
              className={
                formData.submitted && !formData.first_name ? "error_input" : ""
              }
            />
            {formData.submitted && !formData.first_name ? (
              <p className="error">Please enter your first name</p>
            ) : (
              ""
            )}
          </div>
          <div className="form_input">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Enter your last name"
              value={formData.last_name}
              onChange={handleChange}
              className={
                formData.submitted && !formData.last_name ? "error_input" : ""
              }
            />
            {formData.submitted && !formData.last_name ? (
              <p className="error">Please enter your last name</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="form_input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="yourname@email.com"
            value={formData.email}
            onChange={handleChange}
            className={
              formData.submitted && !formData.last_name ? "error_input" : ""
            }
          />
          {formData.submitted && !formData.email ? (
            <p className="error">Please enter your email</p>
          ) : (
            ""
          )}
        </div>
        <div className="form_input">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            value={formData.message}
            onChange={handleChange}
            className={
              formData.submitted && !formData.message ? "error_input" : ""
            }
          />
          {formData.submitted && !formData.message ? (
            <p className="error">Please enter a message</p>
          ) : (
            ""
          )}
        </div>
        <div className="flex">
          <input
            type="checkbox"
            name="checked"
            id=""
            value={formData.checked}
            onChange={handleChange}
            className={
              formData.submitted && !formData.last_name ? "error_input" : ""
            }
          />
          <span>
            You agree to providing your data to {name} who may contact you.
          </span>
          {formData.submitted && !formData.checked ? (
            <p className="error">Please checked the box</p>
          ) : (
            ""
          )}
        </div>
        <button type="submit" id="btn__submit" className="submit_button">
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
