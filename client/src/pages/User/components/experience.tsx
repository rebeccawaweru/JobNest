import { CustomInput } from "../../../components"
import { useContext } from "react"
import { FormContext } from "../updateprofile"
export default function Experience(){
    const formik = useContext(FormContext)
    return (
        <>
         {/* <p>+ Add</p> */}
        <CustomInput {...formik?.formik.getFieldProps('company')} label="Company *"/>
        <span className="text-secondary fs-6">Industry *</span>
        <select {...formik?.formik.getFieldProps("industry")} className="bg-white  mb-4 w-100 border p-2 rounded-1">
            <option value="Accounting">Accounting</option>
            <option value="Commercial">Commercial</option>
            <option value="IT & Technology">IT & Technology</option>
            <option value="Engineering">Engineering</option>
            <option value="Sales & Marketing">Sales & Marketing</option>
            <option value="Hotel & Catering">Hotel & Catering</option>
        </select>
        <CustomInput {...formik?.formik.getFieldProps('title')} label="Job Title *"/>
        <CustomInput {...formik?.formik.getFieldProps('location')} label="Location *"/>
        <span className="text-secondary fs-6">Employment Type</span>
        <select className="bg-white w-100 border p-2 rounded-1" {...formik?.formik.getFieldProps('type')}>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
            <option value="Seasonal">Seasonal</option>
        </select>
        {/* <CustomSelect {...formik?.formik.getFieldProps('type')} label='Employement Type'>
    
        </CustomSelect> */}
        <CustomInput {...formik?.formik.getFieldProps('description')} label="Description" as="textarea" placeholder="" rows={5}/>
        <CustomInput {...formik?.formik.getFieldProps('startdate2')} type="date" label="Start date"/>
        <CustomInput {...formik?.formik.getFieldProps('endate2')} type="date" label="End date"/>
        {/* <Row>
            <Col><CustomSelect {...formik?.formik.getFieldProps('startdate2')} label="Start Date"><option>Month</option></CustomSelect></Col>
            <Col className="mt-2"><CustomSelect><option>Year</option></CustomSelect></Col>
        </Row>
        <Row>
            <Col><CustomSelect {...formik?.formik.getFieldProps('endate2')} label="End Date"><option>Month</option></CustomSelect></Col>
            <Col className="mt-2"><CustomSelect ><option>Year</option></CustomSelect></Col>
        </Row> */}
        </>   
    )
}