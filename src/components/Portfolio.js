import { Container } from "react-bootstrap";
import Project from "./Project";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import starwars from '../data/img/starwars.jpg'
import memori from '../data/img/memori.jpg'
import memori3 from '../data/img/memori3.jpg'




function Portfolio() {
    return (

        <Container fluid className="portfolio text-center mt-5">
            <Row>
                <Col> <div className="text-white"><h1 className="poppinsTitle">Mes Projets</h1></div></Col>
            </Row>
            <Row>
                <Col> <div className="text-white"><p className="poppinsText">Voici les projets réalisés au cours de ma formation de développeur web</p></div></Col>
            </Row>

            <Row className="justify-content-center m-2 mt-5">
                <Project title="Star wars" text="Découverte de REACT et des API" img={starwars} gtlink={"https://github.com/AxelDuval/star_wars"} website={"https://github.com/AxelDuval/star_wars"} />
                <Project title="Memori Game" text="Création d'un jeu de Memory dans le cadre de l'apprentissage du Javascript" img={memori3} />
                <Project title="Memori Game" text="Création d'un jeu de Memory dans le cadre de l'apprentissage du Javascript" img={memori} />
                <Project title="Memori Game" text="Création d'un jeu de Memory dans le cadre de l'apprentissage du Javascript" img={memori} />
                <Project title="Memori Game" text="Création d'un jeu de Memory dans le cadre de l'apprentissage du Javascript" img={memori} />
                <Project title="Memori Game" text="Création d'un jeu de Memory dans le cadre de l'apprentissage du Javascript" img={memori} />
            </Row>

        </Container>
    )
}

export default Portfolio;