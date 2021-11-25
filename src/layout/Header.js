
import { useLocation } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import logo from '../data/logos/logo280.png'


function Header() {
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (

        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img id="logo"
                        alt="logo"
                        src={logo}
                     
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto p-3">
                        <Nav.Link className={splitLocation[1] === "" ? "active" : ""} href="/">Accueil</Nav.Link>
                        <Nav.Link className={splitLocation[1] === "Bio" ? "active" : ""} href="/Bio">Biographie</Nav.Link>
                        <Nav.Link className={splitLocation[1] === "Contact" ? "active" : ""} href="/Contact">Me contacter</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Header;