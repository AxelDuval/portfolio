import { Container } from "react-bootstrap";
import Project from "./Project";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";


function Portfolio() {
    return (



        <Container fluid className="portfolio text-center mt-5">
            <Row>
                <Col> <div className="text-white"><h1>Mes projets</h1></div></Col>
            </Row>
            <Row className="justify-content-center m-2">
               <Project />
               <Project />
               <Project />
               <Project />
               <Project />
               <Project />




            </Row>

        </Container>
    )
}

export default Portfolio;