import React, { useRef }from 'react'
import './Folio.css'
import { CiLocationOn, CiMail } from 'react-icons/ci'
import { AiOutlineGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {

    return(
        <>
            <section className='row justify-content-between p-4'>
            
            <h1 className='text-decoration-underline'>Contact me</h1>
                <section className='col col-12 col-xl-5 col-lg-5 col-md-6 col-sm-7'>
                <p className='py-4'>You made it this far! Yaay.<br></br> I'd love to hear about your project and how I could help.</p>
                </section>

                <section className='col col-12 col-xl-5 col-lg-5 col-md-6 col-sm-7'> 
                        <p className='m-2'> <CiLocationOn color='#4ee29f'/> Enugu - Nigeria</p>
                        <p className='m-2'><CiMail color='#4ee29f'/> <a className='a' href='mailto:ifechiglory@gmail.com'>ifechiglory@gmail.com</a></p>
                       <p className='links'>
                            <a className='github-link' href='https://github.com/ifechiglory' target='_blank'>
                                <AiOutlineGithub fontSize={20}/>
                            </a> 
                            <a className='linkedin-link' href='https://www.linkedin.com/in/ifechukwumax-oti/' target='_blank'>
                            <FaLinkedin fontSize={20}/>
                            </a>
                        </p> 

                        
                </section>
                
            </section>
        </>
    )
}

export default Contact;