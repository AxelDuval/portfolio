import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';




function Footer() {
  return (

      <footer className="bg-dark text-center text-white mt-5">

        <div className="container p-4 pb-2">

          <section className="mb-4">

            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>

          </section>
        </div>

      </footer>


  )
}

export default Footer;