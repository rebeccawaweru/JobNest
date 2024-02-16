import { Container, Form} from "react-bootstrap";
import { HomeWrapper } from "../../../wrapper";
import { Input } from "../../../components";
export default function Register(){
    return (
        <HomeWrapper>
            <Container className="auth-bg d-flex flex-column text-white justify-content-center align-items-center" fluid>
              <h2>Registration</h2>
              <p className="fs-4">JobNest // Register</p>
            </Container>
            <Container className="bg-white p-5" fluid>
             <div className="border  my-5 p-5">
              <p className="topic fw-bold fs-5 mb-0">User Info</p>
              <hr></hr>

              <Form className="mt-4">
             <Input placeholder="I am a candidate" label="UserType" errorMessage="hey"/>
             <Input placeholder="enter your fullname" label="Full Name" errorMessage="hey"/>
             <Input placeholder="enter preferred username" label="User Name" errorMessage="hey"/>
             <Input placeholder="example@gmail.com" label="Email Address" errorMessage="hey"/>

             <Input placeholder="" label="Password" errorMessage="hey"/>
              </Form>

             </div>
            </Container>
        </HomeWrapper>
    )
}