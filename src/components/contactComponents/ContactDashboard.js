import React, { useRef } from "react";
import "../../styles/Contact.css";
import emailjs from "emailjs-com";
//import { init } from "emailjs-com";

export default function ContactDashboard() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.init(process.env.EMAILJS_USER_ID);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
        // "service_z5us6c2",
        // "template_uhotaje",
        // form.current,
        // "user_iPuY9WZcg0NL5HKxcmeIO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactContainer">
      <h1 className="contactTitle">Work with Me</h1>
      <div className="contactForm">
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <label className="contactFormLabel">Name</label>
          <input className="inputBox" type="text" name="name" />
          <label className="contactFormLabel">Email</label>
          <input className="inputBox" type="email" name="email" />
          <label className="contactFormLabel">Message</label>
          <textarea className="inputBox" name="message" />
          <input type="submit" value="Send Message" name="message" />
        </form>
      </div>
    </div>
  );
}
