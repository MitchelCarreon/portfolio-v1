import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y6sgkvb",
        "template_ipdw2i9",
        form.current,
        "3bNsIzQDwlYyjO79Y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <form onSubmit={sendEmail} ref={form}>
          <input type="text" name="name" placeholder="Full name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            placeholder="Your message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary" style={{alignSelf: 'end', borderRadius: '3rem'}}>
            Send message
          </button>
        </form>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>miggycarreon2@gmail.com</h5>
            <a href="mailto:miggycarreon2@gmail.com">Send a message</a>
          </article>
          <article className="contact__option filler">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>miggycarreon2@gmail.com</h5>
            <a href="mailto:miggycarreon2@gmail.com">Send a message</a>
          </article>
          <article className="contact__option filler">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>miggycarreon2@gmail.com</h5>
            <a href="mailto:miggycarreon2@gmail.com">Send a message</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
