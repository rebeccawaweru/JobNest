import { CustomInput} from "../../../components"
import { useContext } from "react"
import { FormContext } from "../updateprofile"
export default function Education(){
    const formik = useContext(FormContext)
    return (
        <>
        {/* <p>+ Add</p> */}
        <CustomInput {...formik?.formik.getFieldProps('school')} label="School"/>
        <span className="text-secondary fs-6">Level/Degree *</span>
        <select className="bg-white w-100 border mb-3 p-2 rounded-1" {...formik?.formik.getFieldProps('level')}>
            <option value="PHD">PHD</option>
            <option value="Masters">Masters</option>
            <option value="Bsc">Bsc</option>
            <option value="Diploma">Diploma</option>
            <option value="Certificate">Certificate</option>
            <option value="HighSchool/GED">High School/GED</option>
        </select>
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