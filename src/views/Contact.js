import React from 'react';

const Contact = () => {
    return(
    <>
        <h3 className="contact-title">Contact</h3>
        <form class="form" action="https://formspree.io/xqkybken" method="post">
            <div class="form-item">
            <label for="fullname" 
                >Full name <span>*</span>
                <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="First and surname"
                required
                />
            </label>
            </div>
        
            <div class="line-item mail form-item">
            <label for="emailAddress"
                >Email
                <span>*</span>
                <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                placeholder="firstname.surname@mail.com"
                required
                />
            </label>
            </div>
        
            <div class="line-item tel form-item">
            <label for="telephone"
                >Telephone
                <input
                type="tel"
                id="telephone"
                name="telephone"
                placeholder="Ex: 123456789"
                pattern="[0-9]{9}"
                />
            </label>
            </div>
        
            <div class="form-item">
            <label for="comments" 
                >Message: <span>*</span>
                <textarea
                id="comments"
                name="comments"
                rows="8"
                cols="35"
                placeholder="Message..."
                required
                ></textarea>
            </label>
            </div>
            <div class="form-item">
            <button class="button" type="submit" value="Send">
                Send
            </button>
            </div>
        </form>
    </>)
}

export default Contact;