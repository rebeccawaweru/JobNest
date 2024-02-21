import { Button, Container, Form, Row, Col} from "react-bootstrap";
import { AuthWrapper } from "../../../wrapper";
import { Input} from "../../../components";
import { useFormik } from "formik";
import * as Yup from 'yup';
export default function Register(){
    const formik = useFormik({
        initialValues:{
            type:"candidate",
            fullname:"",
            username:"",
            email:"",
            password:"",
            confirmpassword:""
        }, 
        //in the userModel, the above initialValues should each be a field apart from confirmpassword. Make sure they are all required
        //also add these fields(make sure this additional fields are not required in the model): phone, address, website, about, education (type should be array), experience (type should be array), skills (type should be array), certifications (type should be array), updated (should be boolean).
        validationSchema:Yup.object({
           type:Yup.string().required("User type is required"),
           fullname:Yup.string().required("Full name is required"),
           username:Yup.string().required("Username is required"),
           email:Yup.string().email("Invalid email").required("Email is required"),
           password:Yup.string().trim().min(6, "Password should contain 6 or more characters").required("Password is required"),
           confirmpassword:Yup.string().equals([Yup.ref('password'), null], "Passwords do not match!").required("Please confirm your password")
        }),
        onSubmit:async(values) => {
            console.log(values)
        }
    })
    return (
    <AuthWrapper bg="auth-bg" title="Registration" caption="JobNest // Register">
    <Container className="bg-white p-5" fluid>
    <div className="border  my-5 p-5">
    <p className="topic fw-bold fs-5 ">User Info</p>
    <hr></hr>
    <Form  onSubmit={(event)=>{
       event.preventDefault();
       formik.handleSubmit(event)
    }} noValidate >
    <Row>
      <Col sm={4}><span className="text-secondary fs-6 *">User Type</span></Col>
      <Col sm={8}> 
    <select className="inputbg w-100 rounded-pill px-4 py-3 " {...formik.getFieldProps('type')}>
    <option value="candidate">I'm a candidate</option>
    <option value="employer">I'm an employer/recruiter</option>
    </select>
    {formik.touched.type && <p className="text-danger mx-2">{formik.touched.type && formik.errors.type}</p>}
    </Col>

    </Row>
    <Input {...formik.getFieldProps("fullname")} placeholder="enter your fullname" label="Full Name" isValid={formik.touched.fullname && !formik.errors.fullname}  isInvalid={!!formik.errors.fullname && formik.touched.fullname}  errormessage={formik.touched.fullname && formik.errors.fullname}/>
    <Input {...formik.getFieldProps("username")} placeholder="enter preferred username" label="User Name" isValid={formik.touched.username && !formik.errors.username}  isInvalid={!!formik.errors.username && formik.touched.username}  errormessage={formik.touched.username && formik.errors.username}/>
    <Input {...formik.getFieldProps("email")} placeholder="example@gmail.com" label="Email Address" isValid={formik.touched.email && !formik.errors.email}  isInvalid={!!formik.errors.email && formik.touched.email}  errormessage={formik.touched.email && formik.errors.email}/>
    <Input {...formik.getFieldProps("password")} placeholder="********" label="Password" type="password" isValid={formik.touched.password && !formik.errors.password}  isInvalid={!!formik.errors.password && formik.touched.password}  errormessage={formik.touched.password && formik.errors.password}/>
    <Input {...formik.getFieldProps("confirmpassword")} placeholder="********" label="Confirm Password" type="password" isValid={formik.touched.confirmpassword && !formik.errors.confirmpassword}  isInvalid={!!formik.errors.confirmpassword && formik.touched.confirmpassword}  errormessage={formik.touched.confirmpassword && formik.errors.confirmpassword}/>
    <Row>
    <Col sm={4}></Col>
    <Col sm={8}>
    <div className="d-grid d-lg-flex d-md-flex justify-content-between">
    <Form.Check defaultChecked label="I have read & accept the Terms & Conditions"/>
    <a href="/login" className="">Already have account?</a>
    </div> 
    <Button type="submit" variant="primary rounded-pill px-3 button mt-4">Register</Button>
    </Col>
    </Row>
    </Form>
    </div>
    </Container>
    </AuthWrapper>
    )
}