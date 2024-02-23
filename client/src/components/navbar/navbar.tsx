import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../reducers/userSlice";
export default function NavBar(){
   const location = useLocation()
   const token = localStorage.getItem('token')
   const dispatch = useDispatch()
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
          
           {token ? <Button onClick={()=>dispatch(logout())} href="/" className="button">Logout <i className="bi bi-box-arrow-right"></i></Button> :
          <Button href="/login" className="rounded-pill button">Get Started</Button>}
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}