import  React from "react";
import "./Contact.css";

export default function Contact() {
    return (
        <div className="contact-wrapper">
            <h1 className="contact-heading">Kontakt</h1>
            <form className="email-box">
                <div className="input-box">
                    <input type="text" name="name" required="required"/>
                    <span>Name</span>
                </div>
                <div className="input-box">
                    <input type="text" name="user_email" required="required"/>
                    <span>Email</span>
                </div>
                <div className="input-box">
                    <textarea name="message" required="required"></textarea>
                    <span>Message</span>
                </div>
                <div className="input-box">
                    <input type="submit" value="send"/>
                </div>

            </form>
        </div>
    )

}

