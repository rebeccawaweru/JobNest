import { Container, Row, Col, Form, FormControl, Button} from "react-bootstrap";
import { AuthWrapper } from "../../wrapper";
import { ContactItem} from "../../components";

export default function Contact(){
    return (
    <AuthWrapper bg="auth-bg-contact" title="Contact Us" caption="JobNest // Enquiry">
    <Container fluid className="bg-white p-5">
    <Row className="d-grid d-lg-flex  d-md-flex">
    <Col>
    <div>
    <p className="text-primary ">GET IN TOUCH</p>
    <p className="fs-3 fw-bold topic">Don't hesitate to contact us for more information</p>
    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    </div>
    <hr className="w-75"></hr>
    <div className="d-grid gap-3">
    <ContactItem icon="bi bi-geo-alt-fill" title="Head Office" desc="Jalan Cempaka Wangi No 22" desc2="Jakarta - Indonesia"/>   
    <ContactItem icon="bi bi-envelope-fill" title="Email Us" desc="support@jobnest.com" desc2="info@jobnest.com"/>
    <ContactItem icon="bi bi-telephone-fill" title="Call Us" desc="Phone : +6221.2002.2012" desc2="Fax : +6221.2002.2013"/>      
    </div>
    </Col>
    <Col className="bg-light p-5 rounded-3">
    <p className="text-primary">SEND US A MESSAGE</p>
    <Form>
    <Form.Group className="mb-4">
    <Form.Label>Name <span className="text-danger fw-bold">*</span></Form.Label>
    <Form.Control placeholder="enter your name"/>
    <FormControl.Feedback type="invalid"></FormControl.Feedback>
    </Form.Group>
    <Form.Group className="mb-4">
    <Form.Label>Email <span className="text-danger fw-bold">*</span></Form.Label>
    <Form.Control type="email" placeholder="example@gmail.com"/>
    <FormControl.Feedback type="invalid"></FormControl.Feedback>
    </Form.Group>
    <Form.Group className="mb-4">
    <Form.Label>Phone <span className="text-danger fw-bold">*</span></Form.Label>
    <Form.Control type="phone" placeholder="07 **** ****"/>
    <FormControl.Feedback type="invalid"></FormControl.Feedback>
    </Form.Group>
    <Form.Group className="mb-4">
    <Form.Label>Subject</Form.Label>
    <Form.Control placeholder="optional"/>
    <FormControl.Feedback type="invalid"></FormControl.Feedback>
    </Form.Group>
    <Form.Group className="mb-4">
    <Form.Label>Message <span className="text-danger fw-bold">*</span></Form.Label>
    <Form.Control as="textarea" rows={4} placeholder="write..."/>
    <FormControl.Feedback type="invalid"></FormControl.Feedback>
    </Form.Group>
    <Button className="rounded-pill button" variant="primary">Send Message</Button>
    </Form>
    </Col>
    </Row>
    </Container>
    </AuthWrapper>
    )
}