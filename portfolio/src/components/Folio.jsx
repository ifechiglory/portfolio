import React from "react";
import './Folio.css'
import { AiOutlineGithub } from 'react-icons/ai'

const Folio = () => {
    return(
        <div className="container-fluid">
            <div className="row header justify-content-evenly">
                <div className="col-6">
                    <h3>ifechukwumax-oti</h3>
                </div>

                <div className="col-6">
                    <span><AiOutlineGithub fontSize={30}/></span>
                </div>
            </div>
        </div>
    )
}

export default Folio;