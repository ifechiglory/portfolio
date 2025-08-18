import { useRef } from 'react';
import './Folio.css'
import { AiOutlineGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa'

const Header = () => {
    return (
      <header className="row header justify-content-between p-3 shadow-lg sticky-top">
        <section className="col-6">
          <p className="fw-bold fs-3 github-link">
            <a href='#hero' className='hero'>&lt;/&gt;</a>
          </p>
        </section>

        <nav className="col-6 text-end">
          <a
            className="github-link"
            href="https://github.com/ifechiglory"
            target="_blank"
          >
            <AiOutlineGithub fontSize={40} />
          </a>

          <a
            className="linkedin-link"
            href="https://www.linkedin.com/in/ifechukwumax-oti/"
            target="_blank"
          >
            <FaLinkedin fontSize={40} />
          </a>
        </nav>
      </header>
    );
}

export default Header;