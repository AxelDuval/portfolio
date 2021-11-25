import './animations.css';
import { Container, Tab } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from 'react-bootstrap';
import profil from '../data/img/profil.jpg'
import TabsArea from './TabsArea';


function Bio() {

    return (

        <Container fluid className="bio text-center mt-5">

            <Row >
                <Col lg={4}><div className="profil mb-4"><Image id="profil-img" src={profil} fluid /></div></Col>
                <Col lg={8}> <div className="text-white px-2">
                    <div className="text-white"><h1 className="tracking-in-expand poppinsTitle align-left">A propos</h1></div>
                    <p className="poppinsText align-left light-grey">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum enim non odio pulvinar ullamcorper. Fusce facilisis erat risus, in auctor dui porttitor et. Praesent dui nibh, euismod sit amet mattis at, fringilla eu risus. Ut sit amet tortor at sem posuere dictum. Aliquam odio diam, dignissim nec maximus non, bibendum ac nibh. Suspendisse lacus libero, ultricies ut felis sed, porta laoreet nibh. Suspendisse sapien justo, egestas non tempor nec, vehicula cursus mi. Phasellus dignissim ultrices erat, vitae ultricies massa imperdiet quis. Curabitur sagittis sapien ut sem faucibus feugiat.
                    </p>
                    </div>


                    <Row className=" mt-5 scale-up-bottom tabs-area">
                        <TabsArea />
                    </Row>
                </Col>

            </Row>



        </Container>
    )
}

export default Bio;