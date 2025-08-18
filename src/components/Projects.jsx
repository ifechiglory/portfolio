import React from 'react'
import './Projects.css'
import AW from '../assets/aw.png'
import Spefind from '../assets/spefind.png'
import Lexicon from '../assets/lexicon.png'
import Quizard from '../assets/quizard.png'
import Songbird from '../assets/songbird.png'

const Projects = () =>{
    return(
        <div className='row pt-5'>
            <div className='row'>
                <h3 className='px-5 text-decoration-underline'>Projects</h3>
            </div>
    
            <div className='row justify-content-evenly'>
                <div className='col-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 card-holder rounded p-4'>
                    <div className='card'>
                        <a href='https://aromaworshippers.com/' target='_blank'>
                            <img className='card-img-top' alt='AW' src={AW}></img>
                        </a>
                        <div className='card-body mt-2'>
                            <p className='card-text'>Aroma Worshippers Music Ministry Landing Page</p>
                            <span className='me-2'>HTML</span>
                            <span className='me-2'>CSS</span>
                            <span>React</span>
                        </div>
                    </div>
                </div>


                <div className='col-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 card-holder rounded p-4'>
                    <div className='card'>
                        <a href='https://lexicon-two.vercel.app' target='_blank'>
                            <img className='card-img-top' alt='lexicon' src={Lexicon}></img>
                        </a>
                        <div className='card-body mt-2'>
                            <p className='card-text'>Dictionary Web App</p>
                            <span className='me-2'>HTML</span>
                            <span className='me-2'>CSS</span>
                            <span className='me-2'>React</span>
                            <span>Dictionary API</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row justify-content-evenly'>
                <div className='col-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 card-holder rounded p-4'>
                
                    <div className='card'>
                        <a href='https://spefind.vercel.app' target='_blank'>
                            <img className='card-img-top' alt='spefind' src={Spefind}></img>
                        </a>
                            <div className='card-body mt-2'>
                                <p className='card-text mt-3'>Online Event Speaker Finder</p>
                                <span className='me-2'>HTML</span>
                                <span className='me-2'>CSS</span>
                                <span>React</span>
                            </div>
                        </div>
                </div>

               
            </div>

            <div className='row justify-content-evenly'>
                <div className='col-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 card-holder rounded p-4'>
                    <div className='card'>
                        <a href='https://songbird-manager.vercel.app/' target='_blank'>
                            <img className='card-img-top' alt='songbird' src={Songbird}></img>
                        </a>
                            <div className='card-body mt-2'>
                                <p className='card-text mt-3'>Tool for formatting lyrics</p>
                                <span className='me-2'>HTML</span>
                                <span className='me-2'>CSS</span>
                                <span>React</span>
                            </div>
                        </div>
                </div>

                <div className='col-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 card-holder rounded p-4'>
                    <div className='card'>
                        <a href='https://quizard-teal.vercel.app/' target='_blank'>
                            <img className='card-img-top' alt='quizard' src={Quizard}></img>
                        </a>
                        <div className='card-body mt-2'>
                            <p className='card-text'>Frontend quiz Platform</p>
                            <span className='me-2'>HTML</span>
                            <span className='me-2'>CSS</span>
                            <span>React</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;