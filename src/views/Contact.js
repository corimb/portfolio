import React, { useState} from 'react';
import '../styles/Contact.scss';

const Contact = () => {
    
    const [data, setData] = useState({fullname:"",
    emailAddress:"",
    telephone: "",
    comments: ""});

    const handleChange = event => {
        setData({
          ...data,
          [event.target.name]: event.target.value,
        });
    };


    const submit = async (event) => {
        event.preventDefault(event)
        const queryString = Object.keys(data).map(key => key + '=' + data[key]).join('&');
        const response = await fetch('https://formspree.io/xqkybken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: queryString
        });
        console.log(response)
    }
    
    return(
    <>
        <h3 className="contact-title">Contact</h3> 
        <form className="form">
            <div className="form-item">
            <label htmlFor="fullname" 
                >Full name <span>*</span>
                <input
                type="text"
                name="fullname"
                value={data.fullname}
                onChange={handleChange}
                placeholder="First and surname"
                required
                />
            </label>
            </div>
        
            <div className="line-item mail form-item">
            <label htmlFor="emailAddress"
                >Email <span>*</span>
                <input
                type="email"
                name="emailAddress"
                value={data.emailAddress}
                onChange={handleChange}
                placeholder="firstname.surname@mail.com"
                required
                />
            </label>
            </div>
        
            <div className="line-item tel form-item">
            <label htmlFor="telephone"
                >Telephone
                <input
                type="tel"
                name="telephone"
                value={data.telephone}
                onChange={handleChange}
                placeholder="Ex: 123456789"
                pattern="[0-9]{9}"
                />
            </label>
            </div>
        
            <div className="form-item">
            <label htmlFor="comments" 
                >Message: <span>*</span>
                <textarea
                name="comments"
                value={data.comments}
                onChange={handleChange}
                rows="8"
                cols="35"
                placeholder="Message..."
                required
                ></textarea>
            </label>
            </div>
            <div className="form-item">
                <button className="button-send" value="Send" onClick={submit}>
                    Send
                </button>
            </div>
        </form>
    </>)
}

export default Contact;