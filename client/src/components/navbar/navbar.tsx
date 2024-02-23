import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
export default function NavBar(){
   const location = useLocation()
    return (
        <Navbar expand="lg" className="justify-content-between bg-light  py-2 border-bottom border-1 align-items-center font-sans"  sticky="top"  >
        <Container fluid className="px-5">
          <Navbar.Brand href="#">JOBNEST</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse >
          <Nav activeKey="/" className="mx-auto gap-4 fw-normal lh-lg ">
             <Nav.Link href="/" className={location.pathname === "/" ? "text-primary" : "text-black"}>Home</Nav.Link>
             <Nav.Link href="#" className="text-black">About</Nav.Link>
             <Nav.Link href="/jobs" className={location.pathname === "/jobs" ? "text-primary" : "text-black"}>Jobs</Nav.Link>
             <Nav.Link href="#" className="text-black">Blog</Nav.Link>
             <Nav.Link href="/contact" className={location.pathname === "/contact" ? "text-primary" : "text-black"}>Contact</Nav.Link>
          </Nav>
           {(location.pathname === '/employer' || location.pathname === '/apply') ? <Button href="/" className="button">Logout <i className="bi bi-box-arrow-right"></i></Button> :
          <Button href="/employer" className="rounded-pill button">Post A Job</Button>}
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}