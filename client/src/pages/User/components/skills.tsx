import {  Button, Badge} from "react-bootstrap"
import { CustomInput} from "../../../components"
import { useContext,useState } from "react";
import { FormContext } from "../updateprofile";
export default function Skills() {
    const formik = useContext(FormContext)
    const [skills, setSkills] = useState<string[]>([])

    // or const skills: string[] = ['React', 'Typescript', 'Backend'];
    const handleClick = () => {
       setSkills([...skills, formik?.formik.values.skills])
       formik?.formik.setFieldValue('skills', '')
       localStorage.setItem('skills', JSON.stringify(skills))
    }
    return (
        <>
        {/* <Button variant="outline-primary" className="button">+ New Skill</Button> */}
        <div className="d-flex flex-wrap gap-2 my-2">
        {skills.map((s)=>{
            return <Badge key={s} className="p-2" bg="success">{s}</Badge>
        })}
        </div>
        <CustomInput {...formik?.formik.getFieldProps('skills')} label="Skill"/>
        <Button onClick={()=>handleClick()} variant="outline-primary" className="button">+ Add</Button>
        </>   
    )
}