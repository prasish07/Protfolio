import React from "react";
import styles from "../style";
import { useState } from "react";
import "./contact.css";
import Button from "../components/Button";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for contacting me!!!");
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
              <button
                type="submit"
                className={`py-4 px-6 font-poppins font-medium text-[18px] outline-none bg-black rounded-xl text-white`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
