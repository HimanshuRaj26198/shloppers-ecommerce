import { useRef } from 'react'
import './NewsLetter.css'

const NewsLetter = () => {

    const email = useRef('');

    const sendEmailData = (e) => {
        e.preventDefault();
        let bodyEl = JSON.stringify({ email: email.current.value });
        console.log(email.current.value);
        if (email !== '') {
            fetch("http://localhost:4000/send_welcome_email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: bodyEl
            }).then(res => console.log(res)).catch(err => console.log(err))
        } else {
            console.log("Empty email!")
        }
    }

    return <div className="newsletter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Suscribe to our newsletter and stay updated</p>
        <div>
            <form onSubmit={sendEmailData} style={{ display: "flex" }} >
                <input ref={email} type='email' placeholder='Your Email id' />
                <button type='submit' >Subscribe</button>
            </form>
        </div>

    </div>
}

export default NewsLetter;