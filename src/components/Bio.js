import './animations.css';
import './Bio.css';

import { Container, Tab } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from 'react-bootstrap';
import profil from '../data/img/profil3.jpg'
import TabsArea from './TabsArea';


function Bio() {

    return (

        <Container fluid className="bio text-center mt-5">

            <Row >
                <Col lg={4}><div className="profil mb-4"><Image id="profil-img" src={profil} fluid /></div></Col>
                <Col lg={8}> <div className="bio-txt text-white px-2 mt-4">
                    <div className="text-white"><h1 className="tracking-in-expand poppinsTitle align-left">A propos</h1></div>
                    <p className="poppinsText align-left light-grey">
                    Hello, je m’appelle Axel, développeur Web junior & passionné de musique ! <br/>
                    Après avoir travaillé pendant une dizaine d'années en tant que webmaster en entreprise et en freelance, j'ai choisi me spécialiser dans le domaine du développement web.
                    </p>
                    </div>


                    <Row className="mt-5 scale-up-bottom tabs-area">
                        <TabsArea />
                    </Row>
                </Col>

            </Row>



        </Container>
    )
}

export default Bio;