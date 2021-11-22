import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';




function Footer() {
    return (
      
        <div className="my-5">
        
          <footer className="bg-dark text-center text-white mb-0">

          <div className="container p-4 pb-0">

            <section className="mb-4">        

            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>


            </section>

          </div>

        

          <div className="text-center p-3 bgBlack">
            Crédits
          </div>
        </footer>
          
        </div>


    )
}

export default Footer;