import { Container, Navbar, Nav, Button } from "react-bootstrap";
export default function NavBar(){
    return (
        <Navbar expand="lg" className="justify-content-between bg-light  py-2 border-bottom border-1 align-items-center font-sans"  sticky="top"  >
        <Container fluid className="px-5">
          <Navbar.Brand href="#">JOBNEST</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse >
          <Nav activeKey="/" className="mx-auto gap-4 fw-normal lh-lg ">
             <Nav.Link href="/" className="text-primary">Home</Nav.Link>
             <Nav.Link href="#" className="text-black">About</Nav.Link>
             <Nav.Link href="/jobs" className="text-black">Jobs</Nav.Link>
             <Nav.Link href="#" className="text-black">Blog</Nav.Link>
             <Nav.Link href="/contact" className="text-black">Contact</Nav.Link>
          </Nav>
          <Button href="/login" className="rounded-pill button">Post A Job</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}