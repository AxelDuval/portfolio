import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Project.css'



function Project() {
    return (
        <Card className="col-xl-3 col-md-4 col-sm-12 m-3">
            <Card.Img variant="top" src="https://picsum.photos/400/400/" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Project;