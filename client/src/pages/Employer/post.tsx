import { Badge, Button, Col, Container, Form, Row } from "react-bootstrap";
import { HomeWrapper } from "../../wrapper";
import { CustomInput } from "../../components";
import { useFormik } from "formik";
import { useState } from "react";
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
    <CustomInput {...formik.getFieldProps("company")} label="Company Name *"/>
    <CustomInput {...formik.getFieldProps("title")} label="Job Title *"/>
    <span className="text-secondary fs-6">Category *</span>
        <select {...formik.getFieldProps("category")} className="bg-white  mb-4 w-100 border p-2 rounded-1">
            <option value="Accounting">Accounting</option>
            <option value="Commercial">Commercial</option>
            <option value="IT & Technology">IT & Technology</option>
            <option value="Engineering">Engineering</option>
            <option value="Sales & Marketing">Sales & Marketing</option>
            <option value="Hotel & Catering">Hotel & Catering</option>
        </select>
    <span className="text-secondary fs-6 mt-3">Location *</span>
        <select {...formik.getFieldProps("location")} className="bg-white mb-4 w-100 border p-2 rounded-1">
            <option value="Remote">Remote</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Mombasa">Mombasa</option>
            <option value="Kisumu">Kisumu</option>
            <option value="Nyeri">Nyeri</option>
            <option value="Nakuru">Nakuru</option>
            <option value="Nanyuki">Nanyuki</option>
            <option value="Machakos">Machakos</option>
        </select>
        <span className="text-secondary fs-6 mt-3">Job Type *</span>
        <select {...formik.getFieldProps("type")} className="bg-white  mb-4 w-100 border p-2 rounded-1">
            <option value="Full Time">Full Time</option>
            <option value="Freelance">Freelance</option>
            <option value="Part Time">Part Time</option>
            <option value="Hybrid">Hybrid</option>
        </select>
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
      
        <CustomInput {...formik.getFieldProps("about")} label="About *" as="textarea" rows={8}/>
        <CustomInput {...formik.getFieldProps("education")} label="Education & Experience *" as="textarea" rows={8}/>
        <CustomInput {...formik.getFieldProps("responsibilities")} label="Responsibilities *" as="textarea" rows={8}/>
        <CustomInput {...formik.getFieldProps("deadline")} type="date" label="Deadline *"/>
       <Button type="submit">Submit</Button>
       
    </Form>
    </div> 
    </Container>
    </HomeWrapper>
}