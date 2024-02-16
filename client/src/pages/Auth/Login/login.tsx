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
    <div className="d-flex justify-content-between">
    <Form.Check defaultChecked label="Remember Me"/>
    <p className="text-primary">Forgot Password?</p>
    </div>
    <Button variant="primary rounded-pill px-3 button mt-4">Submit</Button>
    </Col>
    </Row>
    </Form>
    </div>
    </Container>
    </AuthWrapper>
    )
}