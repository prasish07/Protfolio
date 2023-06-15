import React from "react";
import styles from "../style";
import { useState } from "react";
import "./contact.css";
import Button from "../components/Button";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <div className={`${styles.flexStart} ${styles.paddingX}`}>
      <div
        className={`${styles.boxWidth} flex justify-center items-center h-[100vh]`}
      >
        <div className="container">
          <div className="text">Contact us</div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-data">
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <div className="underline"></div>
                <label>First Name</label>
              </div>
              <div className="input-data">
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <div className="underline"></div>
                <label>Last Name</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="underline"></div>
                <label>Email Address</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <input
                  type="phone"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="underline"></div>
                <label>Phone number</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data textarea">
                <textarea
                  rows="8"
                  cols="80"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <br />
                <div className="underline"></div>
                <label>Write your message</label>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <Button
                styles="bg-blue-200 w-[150px] h-[40px] flex justify-center items-center"
                text="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
