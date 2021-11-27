import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';




function Footer() {
  return (

      <footer className="text-center text-white mt-5">

        <div className="container p-4 pb-2">

          <section className="mb-4">

            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/axel-duval-b2715b76" target="_blank" rel="noopener noreferrer" role="button"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/AxelDuval" target="_blank" rel="noopener noreferrer" role="button"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
            <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/AxelDUVAL13" target="_blank" rel="noopener noreferrer" role="button"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>

          </section>
        </div>

      </footer>


  )
}

export default Footer;