import { Container } from "react-bootstrap";
import Project from "./Project";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import starwars from '../data/img/starwars.jpg'
import memori3 from '../data/img/memori3.jpg'
import bank from '../data/img/bank02.jpg'
import ystory from '../data/img/ystory03.PNG'
import normandy from '../data/img/norimmo.jpg'
import shifumi from '../data/img/shifumi.jpg'





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
                <Project title="API Swapi" text="Exploitation d'une API via React" img={starwars} gtlink={"https://github.com/AxelDuval/star_wars"} website={"https://axelduval.github.io/memory/"} />
                <Project title="Memori Game" text="Création d'un jeu de Memory dans le cadre de l'apprentissage du Javascript" img={memori3} />
                <Project title="Ma banque" text="Création d'une application de gestion de comptes bancaires" img={bank} />
                <Project title="Ystory" text="Site de contenus multumédias historiques, basé sur la géolocalisation" img={ystory} />
                <Project title="Shifumi" text="Création d'un jeu de Memory dans le cadre de l'apprentissage du Javascript" img={shifumi} />
                <Project title="Nor'Immo" text="Création d'un jeu de Memory dans le cadre de l'apprentissage du Javascript" img={normandy} />

            </Row>

        </Container>
    )
}

export default Portfolio;