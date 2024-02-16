import { Container } from "react-bootstrap";
import { Job } from "../../components";
import { HomeWrapper } from "../../wrapper";
export default function Jobs(){
    return (
        <HomeWrapper>
        <Container className="bg-white shadow-md d-flex rounded-3 shadow-md justify-content-between align-items-center my-2 p-4">
            <p>Categories</p>
            <p>Categories</p>
            <p>Categories</p>
        </Container>
        <Container fluid className="px-5 d-flex flex-wrap">
         <Job/>
         <Job/>
         <Job/>
         <Job/>
        </Container>

        </HomeWrapper>
    )
}