import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";


function Header() {

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto p-3">
                        <Nav.Link href="#home">Accueil</Nav.Link>
                        <Nav.Link href="#bio">Biographie</Nav.Link>
                        <Nav.Link href="#contact">Me contacter</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


        // <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <div class="container-fluid">
        //         <a class="navbar-brand" href="#">Axel Duval</a>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarNav">
        //             <ul class="navbar-nav">
        //                 <li class="nav-item">
        //                     <a class="nav-link active" aria-current="page" href="#">Home</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">Features</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">Pricing</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

    )

}

export default Header;