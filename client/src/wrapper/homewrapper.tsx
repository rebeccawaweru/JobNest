import { Container } from "react-bootstrap"
import { NavBar, Footer } from "../components"
export default function HomeWrapper({children}:any){
    return (
    <Container className='bg-light p-0' fluid>
    <NavBar/>
    <div className='d-block gap-4 overflow-hidden '>
    {children}
    <Footer/>
    </div>
    </Container> 
    )
}