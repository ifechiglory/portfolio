import React from 'react'
import './Projects.css'
import Roots from '../assets/roots.png'
import Spefind from '../assets/spefind.png'
import Portfolio from '../assets/portfolio.png'
import Lexicon from '../assets/lexicon.png'

const Projects = () =>{
    return(
        <div className='row pt-5'>
            <div className='row'>
                <h3 className='px-5 text-decoration-underline'>Projects</h3>
            </div>
    
            <div className='row justify-content-evenly'>
                <div className='col-6 col-xl-3 col-lg-3 col-md-6 col-sm-6 card-holder px-4'>
                    <div className='card'>
                        <a href='https://lexicon-two.vercel.app'><img className='card-img-top' alt='roots' src={Portfolio}></img></a>
                        <div className='card-body'>
                            <p className='card-text'>Personal Portfolio Website</p>
                            <span className='me-2'>HTML</span>
                            <span className='me-2'>CSS</span>
                            <span>JS</span>
                        </div>
                    </div>
                </div>


                <div className='col-6 col-xl-3 col-lg-3 col-md-6 col-sm-6 card-holder px-4'>
                    <div className='card'>
                        <a href='https://lexicon-two.vercel.app'><img className='card-img-top' alt='roots' src={Lexicon}></img></a>
                        <div className='card-body'>
                            <p className='card-text'>Dictionary Web App</p>
                            <span className='me-2'>HTML</span>
                            <span className='me-2'>CSS</span>
                            <span>JS</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row justify-content-evenly'>
                <div className='col-6 col-xl-3 col-lg-3 col-md-6 col-sm-6 card-holder px-4'>
                
                    <div className='card'>
                        <a href='https://spefind.vercel.app'>
                            <img className='card-img-top' alt='roots' src={Spefind}></img>
                        </a>
                            <div className='card-body'>
                                <p className='card-text'>Online Event Speaker Finder</p>
                                <span className='me-2'>HTML</span>
                                <span className='me-2'>CSS</span>
                                <span>JS</span>
                            </div>
                        </div>
                </div>

                <div className='col-6 col-xl-3 col-lg-3 col-md-6 col-sm-6 card-holder px-4'>
                    <div className='card'>
                        <a href='https://roots-landing-page.vercel.app'>
                            <img className='card-img-top' alt='roots' src={Roots}></img>
                        </a>
                        <div className='card-body'>
                            <p className='card-text'>E-learning Language Platform</p>
                            <span className='me-2'>HTML</span>
                            <span className='me-2'>CSS</span>
                            <span>JS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;