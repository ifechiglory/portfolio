import React, { useRef }from 'react'
import './Folio.css'
import emailjs from '@emailjs/browser';
import { CiLocationOn, CiMail } from 'react-icons/ci'
import { AiOutlineGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

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
            
            console.log(result);
        }, (error) => {
            console.log(error.text);
        });
    };


    return(
        <div className='row p-3 justify-content-between'>
            <div className='col-12 col-xl-6 col-lg-6 col-md-6 col-sm-4 p-4'>
                <h1 className='text-decoration-underline'>Contact me</h1>
                <p className='py-4'>You made it this far! Yaay.<br></br> I'd love to hear about your project and how I could help.</p>

              
                <div className='row'> 
                    <div className='col'>
                        <p className='m-2'> <CiLocationOn color='#4ee29f'/> Calabar - Nigeria</p>
                        <p className='m-2'><CiMail color='#4ee29f'/> ifechiglory@gmail.com</p>
                       <p className='links'>
                            <a className='github-link' href='https://github.com/ifechiglory' target='_blank'>
                                <AiOutlineGithub fontSize={20}/>
                            </a> 
                            <a className='linkedin-link' href='https://www.linkedin.com/in/ifechukwumax-oti/' target='_blank'>
                            <FaLinkedin fontSize={20}/>
                            </a>
                        </p> 

                        
                    </div>
                </div>
                
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