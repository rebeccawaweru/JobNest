import { Container, Button, Form, Col, Row,  Badge} from "react-bootstrap";
import { HomeWrapper } from "../../wrapper";
import { MultiStep } from "../../components";
import { BasicInfo, Education, Experience, Skills, Others } from "./components";
import { useReducer, createContext } from "react";
import * as Yup from 'yup'
import { useFormik } from "formik";
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
            type:"",
            description:"",
            startdate2:"",
            endate2:"",
            skills:"",
            certname:"",
            org:"",
            cid:""
        },
        validationSchema:Yup.object({
            fullname: Yup.string().required('Full Name is required'),
            email:Yup.string().email("Invalid email").required("Email is required"),
            phone:Yup.string().required("Phone number is required"),
            // about:Yup.string().required("Short description is required")
        }),
        onSubmit:async(values)=>{
          console.log(values)
        }
    })
    const expertise:Array<string> = JSON.parse(localStorage.getItem('skills') ?? '[]') 
    return <FormContext.Provider value={{ formik }}><HomeWrapper>
    <Container className="px-5 py-3" fluid>
     {state.count <= 5 ? 
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
    <Form onSubmit={(event) => {
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
     : <div>
    <div className="job-bg d-flex flex-column text-white text-center align-items-center justify-content-center">
    <h2>{formik.values.fullname}</h2>
    <p>JobNest // profile</p>
    </div>
      <Row className="mt-4 bg-white p-4">
        <Col sm={4} className=" bg-light rounded-1 p-3">
          <div className="d-flex mb-3 justify-content-center gap-4 align-items-center">
            <div className="bg-white shadow-sm profile rounded-circle"></div>
             <div className="d-grid">
             <span className="mt-2">{formik.values.fullname}</span>
             <a href="" onClick={()=>dispatch({type:"Reset"})}>Update Profile</a>
             </div>
          </div>
          <div className="d-flex justify-content-between">
          <p className="text-muted">Email:</p>
          <p>{formik.values.email}</p>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between">
          <p className="text-muted">Phone:</p>
          <p>{formik.values.phone}</p>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between">
          <p className="text-muted">Address:</p>
          <p>{formik.values.address}</p>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between">
          <p className="text-muted">Website:</p>
          <a href="">{formik.values.website}</a>
          </div>
          <hr></hr>
          <div>
            <p>Skills</p>
              {expertise.length > 0 && expertise?.map((e)=>{
                return <Badge key={e} bg="success">{e}</Badge>
              })}
          </div>
          {/* <Button className="mt-2 rounded-pill button">Generate Resume</Button> */}
        </Col>
        <Col sm={8} className="">
        <div className="d-flex justify-content-end">
        <Button href="/resume" variant="success" className="">Generate CV</Button>
        </div>
     
        <div>
            <h3 className="topic">About</h3>
            <p className="text-muted">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.
            </p>
        </div>

        <div>
            <p className="topic">Education</p>
            <div className="d-flex gap-2">
                    <span className="item p-3 rounded-circle d-flex text-center align-items-center justify-content-center border border-primary">
                    01</span>

                    <div>
                    <div>{formik.values.school}</div>
                    {/* <span>Software engineering</span> */}
                    <div>{formik.values.level} {formik.values.field} ({formik.values.startdate}-{formik.values.endate})</div>
                    <div>Grade: {formik.values.grade}</div>
                    <div className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.</div>
                    </div>
                    </div>
        </div>

        <div className="mt-3">
            <p className="topic">Experience</p>
            <div className="d-flex gap-2">
                    <span className="item p-3 rounded-circle d-flex text-center align-items-center justify-content-center border border-primary">
                    01</span>

                    <div>
                    <div>{formik.values.company} - {formik.values.type}</div>
                    {/* <span>Software engineering</span> */}
                    <div>{formik.values.title} ({formik.values.startdate2}-{formik.values.endate2})</div>
                    <div>{formik.values.location}</div>
                    <div className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.</div>
                    </div>
             </div>
        </div>

        <div className="mt-3">
            <p className="topic">Certifications/Licenses</p>       
            <div className="d-flex gap-2">
                    <span className="item p-3 rounded-circle d-flex text-center align-items-center justify-content-center border border-primary">
                    01</span>

                    <div>
                    <div>{formik.values.certname}</div>
                    {/* <span>Software engineering</span> */}
                    <div>{formik.values.org}</div>
                    <div>Credential ID: <span className="text-primary">{formik.values.cid}</span></div>
                    <div className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.</div>
                    </div>
             </div>  
                   
        </div>
        </Col>
      </Row>
    </div>}

    </Container>
    </HomeWrapper>
    </FormContext.Provider> 
}