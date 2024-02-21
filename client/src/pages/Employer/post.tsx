import { Badge, Button, Col, Container, Form, Row } from "react-bootstrap";
import { HomeWrapper } from "../../wrapper";
import { CustomInput } from "../../components";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
export default function PostJob(){
    const [skills, setSkills] = useState<string[]>([]);
    const [skill, setSkill] = useState('')
    const handleSkill = () =>{
         setSkills(prev => [...prev, skill])
         setSkill('')
    }
    const formik = useFormik({
        initialValues:{
            poster:"",
            logo:"",
            company:"",
            title:"",
            category:"",
            location:"",
            type:"",
            about:"",
            education:"",
            responsibilities:"",
            currency:"",
            salary:"",
            deadline:"",
        },
        validationSchema:Yup.object({
            company:Yup.string().required("Company is required"),
            title:Yup.string().required("Job Title is required"),
            category:Yup.string().required("Category is required"),
            location:Yup.string().required("Location is required"),
            type:Yup.string().required("Job type is required"),
            about:Yup.string().required("Job description is required"),
            education:Yup.string().required("Education and experience is required"),
            responsibilities:Yup.string().required("Responsibilities are required"),
            deadline:Yup.string().required("Application deadline is required")
        }),
        onSubmit:async(values)=>{
          //in the job model add each of the initialValues above as fields, 
          //also add a field called: skills (this field should have a type of an array)
          //also make sure that the labels in this form that have * contain required option in the corresponding field in the model
          console.log(values, skills)
        }
    })
    return <HomeWrapper>
    <Container fluid className="px-5 py-3">
    <div className="bg-white rounded-2 p-5 shadow-sm">
    <h4 className="text-primary"><i className="bi bi-briefcase-fill"></i> Post A Job</h4>
    <hr/>
    <Form onSubmit={(event)=>{
        event.preventDefault();
        formik.handleSubmit(event);
    }}>
    <CustomInput type="file" label="Company logo"/>
    <CustomInput isValid={formik.touched.company && !formik.errors.company} isInvalid={!!formik.errors.company && formik.touched.company} errormessage={formik.touched.company && formik.errors.company} {...formik.getFieldProps("company")} label="Company Name *"/>
    <CustomInput isValid={formik.touched.title && !formik.errors.title} isInvalid={!!formik.errors.title && formik.touched.title} errormessage={formik.touched.title && formik.errors.title}  {...formik.getFieldProps("title")} label="Job Title *"/>
    <span className="text-secondary fs-6">Category *</span>
        <select  {...formik.getFieldProps("category")} className="bg-white w-100 border p-2 rounded-1">
            <option value="Accounting">Accounting</option>
            <option value="Commercial">Commercial</option>
            <option value="IT & Technology">IT & Technology</option>
            <option value="Engineering">Engineering</option>
            <option value="Sales & Marketing">Sales & Marketing</option>
            <option value="Hotel & Catering">Hotel & Catering</option>
        </select>
        {formik.touched.category && <p className="text-danger">{formik.touched.category && formik.errors.category}</p>}
    
    <div className="mt-4">
    <span className="text-secondary fs-6">Location *</span>
        <select {...formik.getFieldProps("location")} className="bg-white  w-100 border p-2 rounded-1">
            <option value="Remote">Remote</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Mombasa">Mombasa</option>
            <option value="Kisumu">Kisumu</option>
            <option value="Nyeri">Nyeri</option>
            <option value="Nakuru">Nakuru</option>
            <option value="Nanyuki">Nanyuki</option>
            <option value="Machakos">Machakos</option>
        </select>
        {formik.touched.location && <p className="text-danger">{formik.touched.location && formik.errors.location}</p>}
        </div>     

        <div className="mt-4">
        <span className="text-secondary fs-6 ">Job Type *</span>
        <select {...formik.getFieldProps("type")} className="bg-white  mb-4 w-100 border p-2 rounded-1">
            <option value="Full Time">Full Time</option>
            <option value="Freelance">Freelance</option>
            <option value="Part Time">Part Time</option>
            <option value="Hybrid">Hybrid</option>
        </select>
        {formik.touched.type && <p className="text-danger">{formik.touched.type && formik.errors.type}</p>}
        </div>

        <span className="text-secondary fs-6 mt-3">Salary</span>
        <Row>
            <Col sm={4}><CustomInput {...formik.getFieldProps("currency")} label="Currency" placeholder="e.g. KES"/></Col>
            <Col sm={8}><CustomInput {...formik.getFieldProps("salary")} label="Amount"/></Col>
        </Row>
         <Row>
         <Col sm={8}><label className="text-muted">Add Preferred Skills</label><input value={skill} onChange={(e)=>setSkill(e.target.value)} type="text" className="w-100"/></Col>
         <Col sm={4}><Button type="button" onClick={()=>handleSkill()} variant="outline-primary button" className="mt-4">+ Add</Button></Col>
         </Row>
        <div className="d-flex gap-2 flex-wrap my-2">
        {skills.length > 0 && skills.map((s)=>{
            return <Badge key={s} bg="success">{s}</Badge>
        })}
        </div>
      
        <CustomInput isValid={formik.touched.about && !formik.errors.about} isInvalid={!!formik.errors.about && formik.touched.about} errormessage={formik.touched.about && formik.errors.about}  {...formik.getFieldProps("about")} label="About *" as="textarea" rows={8}/>
        <CustomInput isValid={formik.touched.education && !formik.errors.education} isInvalid={!!formik.errors.education && formik.touched.education} errormessage={formik.touched.education && formik.errors.education}  {...formik.getFieldProps("education")} label="Education & Experience *" as="textarea" rows={8}/>
        <CustomInput isValid={formik.touched.responsibilities && !formik.errors.responsibilities} isInvalid={!!formik.errors.responsibilities && formik.touched.responsibilities} errormessage={formik.touched.responsibilities && formik.errors.responsibilities}  {...formik.getFieldProps("responsibilities")} label="Responsibilities *" as="textarea" rows={8}/>
        <CustomInput isValid={formik.touched.deadline && !formik.errors.deadline} isInvalid={!!formik.errors.deadline && formik.touched.deadline} errormessage={formik.touched.deadline && formik.errors.deadline}  {...formik.getFieldProps("deadline")} type="date" label="Deadline *"/>
       <Button type="submit">Submit</Button>
    </Form>
    </div> 
    </Container>
    </HomeWrapper>
}