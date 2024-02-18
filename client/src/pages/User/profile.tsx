import { Container, Button, Form } from "react-bootstrap";
import { HomeWrapper } from "../../wrapper";
import { CustomInput } from "../../components";
export default function Profile(){
    return <HomeWrapper>
    <Container className="px-5" fluid>
    <h4 className="my-4">Update Your Profile</h4>
    <div className="d-flex justify-content-between">
    <p className="text-primary"><span><i className="bi bi-1-circle-fill"></i></span> Basic Information</p>
    <p className="text-muted"><span><i className="bi bi-2-circle-fill"></i></span> Education</p>
    <p><span><i className="bi bi-3-circle-fill"></i></span> Experience</p>
    <p><span><i className="bi bi-4-circle-fill"></i></span> Skills</p>
    <p><span><i className="bi bi-5-circle-fill"></i></span> Referees</p>
    </div>
    <Form>
    <CustomInput label="About" as="textarea" placeholder="write a brief description about yourself..." rows={5}/>
    <CustomInput label="Full Name"/>
    <CustomInput label="Email"/>
    <CustomInput label="Phone"/>
    {/* <CustomInput label="Cover Letter"/>
    <CustomInput type="file" label="Resume (Max 5Mb):"/>
    <span className="text-muted fs-6 search">Allowed file types are(.doc, .docx, .pdf)</span><br/> */}
    <div className="d-flex justify-content-end my-2 gap-3">
    <Button disabled><i className="bi bi-chevron-double-left"></i>Prev</Button>
    <Button>Next<i className="bi bi-chevron-double-right"></i></Button>
    </div>

    </Form>   
    </Container>
    </HomeWrapper>
}