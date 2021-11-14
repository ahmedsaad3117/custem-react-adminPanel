import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../Sidebar/Sidebar/Sidebar";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Sidebar />
          <Navbar.Brand href="#home">Admin</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Summary</Nav.Link>
            <Nav.Link href="#features">Settings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
