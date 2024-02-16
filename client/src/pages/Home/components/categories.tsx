import { Container } from "react-bootstrap"
import { JobCard } from "../../../components"
export default function Categories(){
    return (
     <>
    <Container fluid className='d-flex justify-content-between px-5 align-items-center'>
    <p className='fs-3 topic d-none d-lg-block d-md-block'>Most demanding category</p>
    <p className='text-decoration-underline text-primary fw-bold'>Explore All Fields
    <i className="bi bi-chevron-double-right"></i>
    </p>
    </Container>
    <Container fluid  className='d-grid gap-2 d-lg-flex px-5 d-md-block align-items-center '>
    <JobCard icon='bi bi-briefcase-fill' title='Accounting' jobs={4}/>
    <JobCard icon='bi bi-stack' title='Commercial' jobs={4}/>
    <JobCard icon='bi bi-database-fill' title='IT & Technology' jobs={4}/>
    <JobCard icon='bi bi bi-headphones' title='Support Service' jobs={4}/>
    </Container>
    </>
    )
}