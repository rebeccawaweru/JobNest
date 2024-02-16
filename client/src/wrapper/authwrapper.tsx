import { HomeWrapper } from ".";
import { Container } from "react-bootstrap";
export default function AuthWrapper({children,title,caption}:any){
    return (
    <HomeWrapper>
    <Container className="auth-bg d-flex flex-column text-white justify-content-center align-items-center" fluid>
    <h2>{title}</h2>
    <p className="fs-4">{caption}</p>
    </Container>
    {children}
    </HomeWrapper>
    )
}