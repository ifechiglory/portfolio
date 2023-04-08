import React, { useRef }from 'react'
import './Folio.css'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_9klyu7v', 
        'template_1sufq66', 
        form.current, 
        'v_GGaBjw1GuguLxLs')
        .then((result) => {
            
            console.log('message sent');
        }, (error) => {
            console.log(error.text);
        });
    };


    return(
        <div className='row p-3 justify-content-between'>
            <div className='col-12 col-xl-6 col-lg-6 col-md-6 col-sm-4 p-4'>
                <h1>Contact</h1>
                <p>You made it this far! Yaay. I'd love to hear about your project and how I could help. Please fil the form and I will get in touch as soon a possible.</p>
            </div>

            <div className='col-12 col-xl-6 col-lg-6 col-md-6 col-sm-8 p-4'>

                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Name</label>
                        <input type="text" className="form-control border-bottom" id="fullname" aria-describedby="fullname" name='user_name'/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control border-bottom" id="email" name='user_email'/>
                    </div>

                    <div className="form-floating">
                        <textarea className="form-control border-bottom" placeholder="Leave a comment here" id="message" name='message'></textarea>
                        <label htmlFor="message">Message</label>
                    </div>

                    <button className='btn btn-outline contact-btn mt-5 align-self-end d-block' onClick={sendEmail}>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;