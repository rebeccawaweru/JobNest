import { Container, Navbar, Nav, Button } from "react-bootstrap";
export default function NavBar(){
    return (
        <Navbar expand="lg" className="justify-content-between bg-white font-sans"  sticky="top"  >
        <Container>
          <Navbar.Brand href="#">JOBNEST</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse >
          <Nav activeKey="/" className="mx-auto gap-4 fw-normal lh-lg ">
             <Nav.Link href="/" className="text-primary">Home</Nav.Link>
             <Nav.Link href="#" className="text-black">About</Nav.Link>
             <Nav.Link href="#" className="text-black">Jobs</Nav.Link>
             <Nav.Link href="#" className="text-black">Blog</Nav.Link>
             <Nav.Link href="#" className="text-black">Contact</Nav.Link>
          </Nav>
          <Button variant="primary rounded-pill fw-bold button">Post A Job</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}