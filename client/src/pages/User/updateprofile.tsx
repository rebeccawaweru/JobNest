import { Container, Button, Form} from "react-bootstrap";
import { HomeWrapper } from "../../wrapper";
import { MultiStep } from "../../components";
import { BasicInfo, Education, Experience, Skills} from "./components";
import { useReducer, createContext, useState} from "react";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { CandidateDashboard } from "..";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Swal from "sweetalert2";
// import { updateUser } from "../../reducers/userSlice";
import client from "../../api/client";

interface FormContextType {
    formik: ReturnType<typeof useFormik>;
    skills:Array<string>;
}
// Create your FormContext
export const FormContext = createContext<FormContextType | null>(null);
// interface FormValues {
//     fullname: string;
//     // Add other fields as needed
// }
export default function UpdateProfile() {
    const user = useSelector((state:RootState) => state.user)
    const [updated, setUpdated] = useState(user.user.updated)
    const expertise:Array<string> = JSON.parse(localStorage.getItem('skills') ?? '[]') 
    
    const initialState= {
        count:1,
    }
    const reducer = (state=initialState, action:any) =>{
          switch(action.type) {
            case 'Next':
                 return {
                    ...state, count:state.count + 1
                 };
            case 'Prev':
                return {
                    ...state, count:state.count - 1
                }
            case 'Reset':
                return {
                    ...state, count:1
                }
            default: 
                return initialState
          }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const formik:any = useFormik({
        initialValues:{
            fullname:user.user.fullname,
            email:user.user.email,
            phone:user.user.phone,
            website:user.user.website,
            address:user.user.address,
            about:user.user.about,
            school:"",
            level:"",
            field:"",
            startdate:"",
            endate:"",
            grade:"",
            company:"",
            industry:"",
            title:"",
            location:"",
            type:"Full Time",
            description:"",
            startdate2:"",
            endate2:"",
            skills:"",
            skillArray:[],
            certname:"",
            org:"",
            cid:""
        },
        validationSchema:Yup.object({
            // phone:Yup.string().required("Phone number is required"),
            // address:Yup.string().required("Address is required"),
            // about:Yup.string().required("Short description about yourself is required"),
            // school:Yup.string().required("School is required"),
            // level:Yup.string().required("Level/Degree is required"),
            // field:Yup.string().required("Field of study is required"),
            // startdate:Yup.string().required("Start Date is required"),
            // endate:Yup.string().required("End Date is required"),
            // company:Yup.string().required("Company is required"),
            // industry:Yup.string().required("Industry is required"),
            // title:Yup.string().required("Job title is required"),
            // location:Yup.string().required("Location is required"),
            // startdate2:Yup.string().required("Start Date is required"),
            // endate2:Yup.string().required("End Date is required"),
        }),
        onSubmit:async(values)=>{
            // dispatch(updateUser({id:user.user.user._id, ...values}, ))
            client.put('/users/'+user.user._id, {
                fullname : values.fullname || user.user.fullname,
                email: values.email || user.user.email,
                phone : values.phone || user.user.phone,
                address : values.address || user.user.address,
                website : values.website || user.user.website,
                about : values.about || user.user.about,
                education : [
                    {
                        school:values.school,
                        level:values.level,
                        field:values.field,
                        startdate:values.startdate,
                        endate:values.endate,
                        grade:values.grade
                    }
                ] || user.user.education,
                experience : [
                    {
                        company:values.company,
                        industry:values.industry,
                        title:values.title,
                        location:values.location,
                        startdate:values.startdate2,
                        endate:values.endate2,
                        description:values.description
                    }
                ] || user.user.experience,
                skills : skills || user.user.skills,
                certifications : [
                    {
                        certname:values.certname,
                        org:values.org,
                        cid:values.cid
                    }
                ] || user.user.certifications,
                updated : true
            }).then((response)=>{
                console.log(response.data)
                setUpdated(true)
                Swal.fire('Success', 'Profile Updated Successfully', 'success')
            }).catch((err)=>{
                console.log(err)
            })

        }
    })
    const [skills, setSkills] = useState<string[]>([])
    // or const skills: string[] = ['React', 'Typescript', 'Backend'];
    const handleClick = () => {
       setSkills(prev => [...prev, formik.values.skills])
        formik.setFieldValue('skills', '')
    }

    return <FormContext.Provider value={{ formik, skills }}><HomeWrapper>
     {updated ? <CandidateDashboard formik={formik} expertise={expertise} handleClick={()=>setUpdated(false)}/> :
    <Container className="px-5 py-3" fluid>
    <div className="bg-white rounded-2 p-5 shadow-sm">
    <h4 className="text-primary">Update Your Profile</h4>
    <hr/>
    <div className="d-flex justify-content-between">
    <MultiStep active={state.count === 1} title="Basic Information" icon="bi bi-1-circle-fill"/>
    <MultiStep active={state.count === 2}  title="Education" icon="bi bi-2-circle-fill"/>
    <MultiStep active={state.count === 3} title="Experience" icon="bi bi-3-circle-fill"/>
    <MultiStep active={state.count === 4}  title="Skills/Certifications" icon="bi bi-4-circle-fill"/>

    </div>
    <Form noValidate onSubmit={(event)=>{
        event.preventDefault()
        formik.handleSubmit()
    }}>
    {state.count === 1 && user && <BasicInfo/>}
    {state.count === 2 && <Education/>}
    {state.count === 3 && <Experience/>}
    {state.count === 4 && <Skills handleClick={handleClick}/>}
    <div className="d-flex justify-content-end my-2 gap-3">
        <Button onClick={()=>dispatch({type:"Prev"})} disabled={state.count === 1}><i className="bi bi-chevron-double-left"></i>Prev</Button>
        {state.count < 4 ? <Button type="button" onClick={()=>dispatch({type:"Next"})}>Next<i className="bi bi-chevron-double-right"></i></Button> 
        :<Button type="submit" variant="success">Finish<i className="bi bi-chevron-double-right"></i></Button>}
    </div>
    </Form>
    </div>
    </Container>
   }

    </HomeWrapper>
    </FormContext.Provider> 
}