import { AuthWrapper } from "../../../wrapper";
import { Container, Form, Col, Row, Button} from "react-bootstrap";
import { Input, CustomLoader } from "../../../components";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { login,getUser } from "../../../reducers/userSlice";
import { AppDispatch } from "../../../store";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

interface DecodeType {
    _id:string
    iat:number
    exp:number
  }
export default function Login(){
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const [loading,isLoading] = useState<boolean>(false)
    const formik = useFormik({
        initialValues:{
            username:"",
            password:""
        },
        validationSchema:Yup.object({
            username:Yup.string().required("Username is required"),
            password:Yup.string().trim().min(6, "Password should contain 6 or more characters").required("Password is required"),
        }),
        onSubmit:async(values) =>{
          isLoading(true)
          dispatch(login({...values})).then((response)=>{
          
             const decode:DecodeType = jwtDecode(response.payload.userToken)
             localStorage.setItem('token', response.payload.userToken);
             localStorage.setItem('id', decode._id)
             dispatch(getUser(decode._id)).then(()=>{
             
                if (response.payload.user.type === "candidate") {
                    navigate('/apply')
                } else if (response.payload.user.type === "employer") {
                    navigate('/employer')
                }
             })
             isLoading(false)
          })
    
      
            // await client.post('/user/login', values).then((response)=>{
            // if (response.data.token){
       
            //     localStorage.setItem('fullname', response.data.user.fullname)
         
            // }
            // })
        }
    })
    return (
    <AuthWrapper bg="auth-bg" title="My Account" caption="JobNest // Login">
    <Container className="bg-white p-5" fluid>
    <div className="border  my-5 p-5">
    <p className="topic fw-bold fs-5 ">User Info</p>
    <hr></hr>
    <Form onSubmit={formik.handleSubmit}>
    <Input {...formik.getFieldProps("username")} placeholder="Username" label="User Name" isValid={formik.touched.username && !formik.errors.username} isInvalid={!!formik.errors.username && formik.touched.username} errormessage={formik.touched.username && formik.errors.username}/>
    <Input {...formik.getFieldProps("password")} placeholder="********" label="Password" type="password" isValid={formik.touched.password && !formik.errors.password} isInvalid={!!formik.errors.password && formik.touched.password} errormessage={formik.touched.password && formik.errors.password}/>
    <Row>
    <Col sm={4}></Col>
    <Col sm={8}>
    <div className="d-grid d-lg-flex d-md-flex justify-content-between">
    <Form.Check defaultChecked label="Remember Me"/>
    <a href="/login" className="text-primary">Forgot Password?</a>
    </div>
    {loading ? <CustomLoader/> :
    <div className="d-flex gap-2 mt-4">
   <Button disabled={loading} type="submit"  className="rounded-pill px-3 button">Login</Button>
    <Button href="/register" variant="success" className="rounded-pill px-2 button">Register</Button>
    </div>}
    </Col>
    </Row>
    </Form>
    </div>
    </Container>
    </AuthWrapper>
    )
}