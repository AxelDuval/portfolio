import { ButtonGroup, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './Project.css'



function Project(props) {
    return (

        <div className="flip col-xl-3 col-md-4 col-sm-12 m-3 mb-5">
            <div className="front" style={{ backgroundImage: `url(${props.img})` }}>
                <h1 className="text-shadow">{props.title}</h1>
            </div>
            <div className="back">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <Row>
                    <Col>
                        <ButtonGroup className="mt-3">
                            <a href={props.gtlink} target="_blank"><Button className="btn-outline-warning mx-1">GitHub</Button></a>
                            <a href={props.website} target="_blank"> <Button className="btn btn-outline-info">Voir le site</Button></a>
                        </ButtonGroup>
                    </Col>
                </Row>

            </div>
        </div >
    )
}

export default Project;