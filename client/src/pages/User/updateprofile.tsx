import { Container, Button, Form} from "react-bootstrap";
import { HomeWrapper } from "../../wrapper";
import { MultiStep } from "../../components";
import { BasicInfo, Education, Experience, Skills, Others } from "./components";
import { useReducer, createContext } from "react";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { CandidateDashboard } from "..";
interface FormContextType {
    formik: ReturnType<typeof useFormik>;
}
// Create your FormContext
export const FormContext = createContext<FormContextType | null>(null);
// interface FormValues {
//     fullname: string;
//     // Add other fields as needed
// }
export default function UpdateProfile() {
    const expertise:Array<string> = JSON.parse(localStorage.getItem('skills') ?? '[]') 
    const initialState= {
        count:6,
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
            fullname:"",
            email:"",
            phone:"",
            website:"",
            address:"",
            about:"",
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
          console.log(values, expertise)
        }
    })

    return <FormContext.Provider value={{ formik }}><HomeWrapper>
     {state.count <= 5 ? 
    <Container className="px-5 py-3" fluid>
    <div className="bg-white rounded-2 p-5 shadow-sm">
    <h4 className="text-primary">Update Your Profile</h4>
    <hr/>
    <div className="d-flex justify-content-between">
    <MultiStep active={state.count === 1} title="Basic Information" icon="bi bi-1-circle-fill"/>
    <MultiStep active={state.count === 2}  title="Education" icon="bi bi-2-circle-fill"/>
    <MultiStep active={state.count === 3} title="Experience" icon="bi bi-3-circle-fill"/>
    <MultiStep active={state.count === 4}  title="Skills" icon="bi bi-4-circle-fill"/>
    <MultiStep active={state.count === 5}  title="Other" icon="bi bi-5-circle-fill"/>
    </div>
    <Form noValidate onSubmit={(event) => {
    event.preventDefault(); // Prevent default form submission behavior
    formik.handleSubmit(event); // Call Formik's handleSubmit function
    }}>
    {state.count === 1 && <BasicInfo/>}
    {state.count === 2 && <Education/>}
    {state.count === 3 && <Experience/>}
    {state.count === 4 && <Skills/>}
    {state.count === 5 && <Others/>}
    <div className="d-flex justify-content-end my-2 gap-3">
        <Button onClick={()=>dispatch({type:"Prev"})} disabled={state.count === 1}><i className="bi bi-chevron-double-left"></i>Prev</Button>
        {state.count === 5 ? <Button onClick={()=>dispatch({type:"Next"})} variant="success">Finish<i className="bi bi-chevron-double-right"></i></Button> :  <Button onClick={()=>dispatch({type:"Next"})}>Next<i className="bi bi-chevron-double-right"></i></Button> }
    </div>
    </Form>
    </div>
        </Container>
     : 
     <CandidateDashboard formik={formik} expertise={expertise} handleClick={()=>dispatch({type:"Reset"})}/> }

    </HomeWrapper>
    </FormContext.Provider> 
}