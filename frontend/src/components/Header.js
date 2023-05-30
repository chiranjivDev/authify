import { Navbar, Nav, Container } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="transparent" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/" className="brand">Authify</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/dashboard">
                <i className="fas fa-user"></i> &nbsp;Dashboard
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fa fa-sign-in"></i> &nbsp;Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
