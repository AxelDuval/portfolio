import './animations.css';
import './Bio.css';

import { Container, Tab } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from 'react-bootstrap';

function Contact() {
    return (
        <Container fluid className="portfolio text-center mt-5">
            <Row>
                <Col> <div className="text-white"><h1 className="tracking-in-expand poppinsTitle">Me contacter</h1></div></Col>
            </Row>
            <Row>
                <Col> <div className="text-white mt-3">
                    <p className="tracking-in-expand poppinsText"> Pour m'envoyer un petit message c'est par ici !
                    </p>
                    <div>
                        <a className="text-white tracking-in-expand poppinsText" HREF="mailto:axel.duval@gmail.com">axel.duval@gmail.com</a>
                    </div>

                </div>
                </Col>
            </Row>

        </Container>
    )
}

export default Contact;