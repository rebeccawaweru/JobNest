import { AuthWrapper } from "../../../wrapper";
import { Container, Form, Col, Row, Button} from "react-bootstrap";
import { Input } from "../../../components";
export default function Login(){
    return (
    <AuthWrapper bg="auth-bg" title="My Account" caption="JobNest // Login">
    <Container className="bg-white p-5" fluid>
    <div className="border  my-5 p-5">
    <p className="topic fw-bold fs-5 ">User Info</p>
    <hr></hr>
    <Form>
    <Input placeholder="Username" label="User Name" errormessage="hey"/>
    <Input placeholder="********" label="Password" type="password" errormessage="hey"/>
    <Row>
    <Col sm={4}></Col>
    <Col sm={8}>
    <div className="d-grid d-lg-flex d-md-flex justify-content-between">
    <Form.Check defaultChecked label="Remember Me"/>
    <a href="/login" className="text-primary">Forgot Password?</a>
    </div>
    <div className="d-flex gap-2 mt-4">
    <Button href="/apply" className="rounded-pill px-3 button">Login</Button>
    <Button href="/register" variant="success" className="rounded-pill px-2 button">Register</Button>
    </div>
    </Col>
    </Row>
    </Form>
    </div>
    </Container>
    </AuthWrapper>
    )
}