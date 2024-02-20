import { Button} from "react-bootstrap"
import { CustomInput } from "../../../components"
import { useContext } from "react"
import { FormContext } from "../updateprofile"
export default function Education(){
    const formik = useContext(FormContext)
    return (
        <div className="d-grid gap-2">
        <div className="d-flex gap-2">
        <Button variant="outline-primary buttton">+ Certifications</Button>
        </div>
        <div className="my-2">
        <CustomInput {...formik?.formik.getFieldProps('certname')} label="Name * " placeholder="e.g. Cloud solutions architect"/>
        <CustomInput {...formik?.formik.getFieldProps('org')} label="Issuing organization *" placeholder="e.g. AWS"/>
        <CustomInput {...formik?.formik.getFieldProps('cid')} type="password" label="Credential ID *"/>
        <Button>Add</Button>
        </div>   
        </div>
     
    )
}