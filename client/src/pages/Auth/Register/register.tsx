import { Button, Container, Form, Row, Col} from "react-bootstrap";
import { AuthWrapper } from "../../../wrapper";
import { Input, Select } from "../../../components";
export default function Register(){
    return (
    <AuthWrapper bg="auth-bg" title="Registration" caption="JobNest // Register">
    <Container className="bg-white p-5" fluid>
    <div className="border  my-5 p-5">
    <p className="topic fw-bold fs-5 ">User Info</p>
    <hr></hr>
    <Form className="">
    <Select label="UserType" errormessage="hey">
    <option value="candidate">I'm a candidate</option>
    <option value="employer">I'm an employer/recruiter</option>
    </Select>
    <Input placeholder="enter your fullname" label="Full Name" errormessage="hey"/>
    <Input placeholder="enter preferred username" label="User Name" errormessage="hey"/>
    <Input placeholder="example@gmail.com" label="Email Address" errormessage="hey"/>
    <Input placeholder="********" label="Password" type="password" errormessage="hey"/>
    <Input placeholder="********" label="Confirm Password" type="password" errormessage="hey"/>
    <Row>
    <Col sm={4}></Col>
    <Col sm={8}>
    <div className="d-grid d-lg-flex d-md-flex justify-content-between">
    <Form.Check defaultChecked label="I have read & accept the Terms & Conditions"/>
    <a href="/login" className="">Already have account?</a>
    </div> 
    <Button variant="primary rounded-pill px-3 button mt-4">Register</Button>
    </Col>
    </Row>
    </Form>
    </div>
    </Container>
    </AuthWrapper>
    )
}