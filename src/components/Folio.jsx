import React, {useRef} from 'react'
import './Folio.css'
import Header from './Header'
import Profile from '../assets/me.png'
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';


const Folio = () => {
    const ref = useRef(null);
    
    const handleCLick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }
    return(
        <div className='container-fluid'>
            <Header/>

            <div className='row justify-content-center border-bottom'>
                <div className='header-text col-12 col-xl-5 col-lg-5 col-md-6 col-sm-7 pt-xl-5 pt-lg-5 pt-md-5 text-center'>
                    <h1>Nice to meet you!</h1>
                    <h1>I'm <span className='text-decoration-underline underline'>Ifechukwu Max-Oti</span>.</h1>

                    <p className='fs-6 mt-xl-4 mt-lg-4 mt-md-4'>Based in Nigeria, I'm a front-end developer passionate <br></br> about building asssessible web apps that users love.</p>

                    <a href='#contact'>
                        <button className='btn btn-outline contact-btn my-3 my-lg-5' onClick={handleCLick()}>Contact Me</button>
                    </a>

                  <a href='../../Ifechukwu Max-Oti CV.pdf' download='Ifechukwu Max-Oti_CV'>
                    <button className='btn btn-outine contact-btn m-lg-5 m-3'>Resume</button>
                  </a>
                </div>

                <div className='col-12 col-xl-5 col-lg-5 col-md-6 col-sm-3'>
                    <img className='img-fluid text-center' alt='headshot of me' src={Profile}></img>
                </div>
            </div>

            <div className='border-bottom'>
                <Skills/>
            </div>
            <div>
                <Projects/>
            </div>
            <div className='row contact' id='contact' ref={ref}>
                <Contact/>
            </div>
            <Header/>
        </div>
    )
} 

export default Folio;