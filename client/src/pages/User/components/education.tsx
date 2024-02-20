import { CustomInput} from "../../../components"
import { useContext } from "react"
import { FormContext } from "../updateprofile"
export default function Education(){
    const formik = useContext(FormContext)
    return (
        <>
        {/* <p>+ Add</p> */}
        <CustomInput {...formik?.formik.getFieldProps('school')} label="School"/>
        <CustomInput {...formik?.formik.getFieldProps('level')} label="Level"/>
        <CustomInput {...formik?.formik.getFieldProps('field')} label="Field of study"/>
        <CustomInput {...formik?.formik.getFieldProps('startdate')} type="date" label="Start date"/>
        <CustomInput {...formik?.formik.getFieldProps('endate')} type="date" label="End date"/>
        {/* <Row>
            <Col><CustomSelect {...formik?.formik.getFieldProps('startdate')} label="Start Date"><option>Month</option></CustomSelect></Col>
            <Col className="mt-2"><CustomSelect><option>Year</option></CustomSelect></Col>
        </Row> */}
        <CustomInput {...formik?.formik.getFieldProps('grade')} label="Grade"/>
        <CustomInput label="Activities and societies" as="textarea" placeholder="" rows={5}/>
        </>   
    )
}