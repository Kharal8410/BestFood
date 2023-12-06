import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchForm from "../Search";

function NavbarComponent() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="bg-yellow-900 fixed-top px-5  justify-evenly "
    >
      <Navbar.Brand href="/" className="ms-3 font-bold text-white ">
        BestFood
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto  me-3 my-2 my-lg-0 text-light" navbarScroll>
          <SearchForm />
          <Nav.Link
            href="/"
            className="text-light text-decoration-none text-lg"
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="/aboutus"
            className="text-light text-decoration-none text-lg"
          >
            About
          </Nav.Link>

          <Nav.Link
            href="/dashboard"
            className="text-light text-decoration-none text-lg"
          >
            Menu
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
