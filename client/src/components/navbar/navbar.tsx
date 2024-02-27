import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../../reducers/userSlice";
import { AppDispatch, RootState } from "../../store";
export default function NavBar(){
   const location = useLocation()
   const token = localStorage.getItem('token')
   const {user} = useSelector((state:RootState) => state.user)
   const id:any = localStorage.getItem('id');
   const dispatch = useDispatch<AppDispatch>()
   const handleUser = () => dispatch(getUser(id))
    return (
        <Navbar expand="lg" className="justify-content-between bg-light  py-2 border-bottom border-1 align-items-center font-sans"  sticky="top"  >
        <Container fluid className="px-5">
          <Navbar.Brand href="#">JOBNEST</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse >
          <Nav activeKey="/" className="mx-auto gap-4 fw-normal lh-lg ">
             <Nav.Link as={Link} to="/" className={location.pathname === "/" ? "text-primary" : "text-black"}>Home</Nav.Link>
             <Nav.Link as={Link} to="/" className="text-black">About</Nav.Link>
             <Nav.Link as={Link}  to="/jobs" className={location.pathname === "/jobs" ? "text-primary" : "text-black"}>Jobs</Nav.Link>
             <Nav.Link as={Link}  to="/" className="text-black">Blog</Nav.Link>
             <Nav.Link as={Link}  to="/contact" className={location.pathname === "/contact" ? "text-primary" : "text-black"}>Contact</Nav.Link>
          </Nav>
           {token && <Link onClick={handleUser} to={user.type === 'candidate' ? '/apply' : user.type === 'employer' ? '/employer' : '/'} className={(location.pathname == '/apply' || location.pathname === '/employer') ? 'text-primary mx-5' : 'text-black mx-5 text-decoration-none' }>Profile</Link>}
           {token ? <Button onClick={()=>dispatch(logout())} href="/" className="button">Logout <i className="bi bi-box-arrow-right"></i></Button> :
          <Button href="/login" className="rounded-pill button">Get Started</Button>}
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}