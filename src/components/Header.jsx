import React from 'react'
import './Folio.css'
import { AiOutlineGithub } from 'react-icons/ai';

const Header = () => {
    return (
        <div className='row header justify-content-between p-5'>
            <div className='col-8'>
                <p className='fw-bold'>efay</p>
            </div>

            <div className='col-2 text-end'>
                <a className='github-link' href='https://github.com/ifechiglory' target='_blank'>
                    <AiOutlineGithub fontSize={40}/>
                </a>  
            </div>
        </div>
    )
}

export default Header;