import React from 'react'
import './Folio.css'
import { TbBrandHtml5, TbBrandVite, TbBrandCss3, TbBrandBootstrap, TbWriting, TbBrandNextjs } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'

const Skills = () =>{
    return(
        <div className='row p-5 justify-content-evenly'>
            <h3 className='text-decoration-underline p-2'>Skills</h3>

            <div className='col-12 col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-3 text-center'>
                <div className='card m-auto'>
                    <div className='card-body'>
                        <h2 className='card-title'><TbBrandHtml5 color='#e44d26' fontSize={80}/></h2>
                        <h6 className='card-subtitle'>HTML 5</h6>
                        <p className='card-text'> 3+ years</p>
                    </div>
                </div>
            </div>

            <div className='col-12 col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-3 text-center'>
                <div className='card m-auto'>
                    <div className='card-body'>
                        <h2 className='card-title'><TbBrandCss3 color='#264de4' fontSize={80}/></h2>
                        <h6 className='card-subtitle'>CSS</h6>
                        <p className='card-text'> 3+ years</p>
                    </div>
                </div>
            </div> 
            
            <div className='col-12 col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-3 text-center'>
                <div className='card m-auto'>
                    <div className='card-body'>
                        <h2 className='card-title'><IoLogoJavascript color='#e8d44d' fontSize={80}/></h2>
                        <h6 className='card-subtitle'>JavaScript</h6>
                        <p className='card-text'> 3+ years</p>
                    </div>
                </div>
            </div>
            
            <div className='col-12 col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-3 text-center'>
                <div className='card m-auto'>
                    <div className='card-body'>
                        <h2 className='card-title'><FaReact color='#61dbfb' fontSize={80}/></h2>
                        <h6 className='card-subtitle'>React</h6>
                        <p className='card-text'> 1 year</p>
                    </div>
                </div>
            </div>

            <div className='col-12 col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-3 text-center'>
                <div className='card m-auto'>
                    <div className='card-body'>
                        <h2 className='card-title'><TbBrandVite color='#68a0ff' fontSize={80}/></h2>
                        <h6 className='card-subtitle'>Vite</h6>
                        <p className='card-text'> 1 year</p>
                    </div>
                </div>
            </div>

            <div className='col-12 col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-3 text-center'>
                <div className='card m-auto'>
                    <div className='card-body'>
                        <h2 className='card-title'><AiFillGithub color='#f7f7f7' fontSize={80}/></h2>
                        <h6 className='card-subtitle'>Git</h6>
                        <p className='card-text'> 3+ years</p>
                    </div>
                </div>
            </div>

            <div className='col-12 col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-3 text-center'>
                <div className='card m-auto'>
                    <div className='card-body'>
                        <h2 className='card-title'><TbBrandBootstrap color='#8112FA' fontSize={80}/></h2>
                        <h6 className='card-subtitle'>Bootstrap</h6>
                        <p className='card-text'> 3+ years</p>
                    </div>
                </div>
            </div>

            <div className='col-12 col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-3 text-center'>
                <div className='card m-auto'>
                    <div className='card-body'>
                        <h2 className='card-title'><TbWriting color='#f4f4f4' fontSize={80}/></h2>
                        <h6 className='card-subtitle'>Technical Writing</h6>
                        <p className='card-text'> 3+ years</p>
                    </div>
                </div>
            </div>

            <div className='col-12 col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-3 text-center'>
                <div className='card m-auto'>
                    <div className='card-body'>
                        <h2 className='card-title'><TbBrandNextjs color='#000000' fontSize={80}/></h2>
                        <h6 className='card-subtitle'>Next JS</h6>
                        <p className='card-text'>1 year</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;