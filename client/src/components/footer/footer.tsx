import { Stack, Form, Button,InputGroup, Container } from "react-bootstrap";

export default function Footer(){
    return (
    <footer>
    <Container fluid className="d-grid px-5 gap-4 gap-lg-0 gap-md-0 d-lg-flex d-md-flex justify-content-center  pt-2 align-items-center text-left  text-white">
      
      <div className="jobnest ">
         <p className="fs-2">JOBNEST</p>
         <p className="text-secondary">It is a long established fact that is  the read will been distractend there and readable an important content.</p>
         <p>Find Us On:</p>
         <Stack direction="horizontal" gap={2}>
         <i className="bi bi-twitter icn d-flex  rounded-circle p-2"></i>
         <i className="bi bi-facebook d-flex icn rounded-circle p-2"></i>
         <i className="bi bi-linkedin d-flex icn rounded-circle p-2"></i>
         <i className="bi bi-instagram d-flex icn rounded-circle p-2"></i>
         </Stack>
      </div>

      <div className="d-flex  group">

      <div className=" mx-0 mx-lg-2 mx-md-2 ">
      <p className="fs-5">Quick Links</p>
      <div className="d-grid gap-2">
        <li><i className="bi bi-chevron-double-right"></i> Job Packages</li>
        <li><i className="bi bi-chevron-double-right"></i> Job Listing</li>
        <li><i className="bi bi-chevron-double-right"></i> Job Packages</li>
        <li><i className="bi bi-chevron-double-right"></i> Job Packages</li>
        <li><i className="bi bi-chevron-double-right"></i> Job Packages</li>
      </div>
      </div>

      <div className=" ">
      <p className="fs-5">For Candidates</p>
      <div className="d-grid gap-2">
        <li><i className="bi bi-chevron-double-right"></i> User Dashboard</li>
        <li><i className="bi bi-chevron-double-right"></i> Candidates Listing</li>
        <li><i className="bi bi-chevron-double-right"></i> Candidates Grid</li>
        <li><i className="bi bi-chevron-double-right"></i> CV Packages</li>
        <li><i className="bi bi-chevron-double-right"></i> Candidates Login</li>
      </div>
      </div>
      </div>

      <div className="mt-5">
      <p className="fs-5">Get In Touch</p>
      <p className="text-secondary">Fusce varius, dolor tempor interdum tristiquei bibendum service life.</p>
      <InputGroup className=" mb-3 border rounded-pill text-center p-2  ">
      <Form.Control className=" border-0 bg-transparent input " type="text" placeholder="Your email address" />
        <InputGroup.Text className="bg-transparent border-0 border-none text-white" id="basic-addon2"><i className="bi bi-envelope"></i></InputGroup.Text>
      </InputGroup>
      <Button className="rounded-pill p-3 button" variant="primary">Subscribe Now<i className="bi bi-chevron-double-right"></i></Button>
      </div>
    </Container>
    <hr className="border"/>
    <Container fluid className="d-grid px-5 d-lg-flex d-md-flex justify-content-center justify-content-lg-between justify-content-md-between text-secondary ">
        <p>JobNest | Developed by: alx-students</p>
        <p>© JobNest 2024 | All Right Reserved</p>
    </Container>
    </footer>
    )
}