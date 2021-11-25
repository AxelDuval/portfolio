import './animations.css';
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
                <Col> <div className="text-white"><h1 className="tracking-in-expand poppinsTitle">Mes Projets</h1></div></Col>
            </Row>
            <Row>
                <Col> <div className="text-white"><p className="tracking-in-expand poppinsText">Voici les projets réalisés au cours de ma formation de développeur web</p></div></Col>
            </Row>

            <Row className="justify-content-center m-2 mt-5 scale-up-bottom ">
                <Project title="API Swapi" text="Exploitation d'une API via React" img={starwars} gtlink={"https://github.com/AxelDuval/star_wars"} website={"https://axelduval.github.io/memory/"} />
                <Project title="Memori Game" text="Création d'un jeu de Memory dans le cadre de l'apprentissage du Javascript" img={memori3} gtlink={"https://github.com/AxelDuval/memory"} website={"https://axelduval.github.io/memory/"} />
                <Project title="Ma banque" text="Création d'une application de gestion de comptes bancaires" img={bank} gtlink={"https://github.com/AxelDuval/application_bancaire"} website={"https://axelduval.github.io/application_bancaire/"} />
                <Project title="Ystory" text="Site de contenus multumédias historiques, basé sur la géolocalisation" img={ystory} gtlink={""} website={"https://ystory.fr/"} />
                <Project title="Shifumi" text="Création d'un jeu de Memory dans le cadre de l'apprentissage du Javascript" img={shifumi} gtlink={"https://github.com/AxelDuval/shifumi"} website={"https://axelduval.github.io/shifumi/"} />
                <Project title="Nor'Immo" text="Création d'un jeu de Memory dans le cadre de l'apprentissage du Javascript" img={normandy} gtlink={"https://github.com/AxelDuval/NorImmo"} website={"https://axelduval.github.io/NorImmo/"} />

            </Row>

        </Container>
    )
}

export default Portfolio;