import { FormContext } from "../updateprofile"
import { CustomInput } from "../../../components"
import { useContext } from "react"
export default function BasicInfo() {
    const  formik  = useContext(FormContext)
    return (
        <div>
        <CustomInput {...formik?.formik.getFieldProps('fullname')} label="Full Name"/>
        <CustomInput {...formik?.formik.getFieldProps('email')} label="Email"/>
        <CustomInput {...formik?.formik.getFieldProps('phone')} label="Phone"/>
        <CustomInput {...formik?.formik.getFieldProps('address')} label="Address"/>
        <CustomInput {...formik?.formik.getFieldProps('website')} label="Website e.g. portfolio, github, linkedin"/>
        <CustomInput {...formik?.formik.getFieldProps('about')} label="About" as="textarea" placeholder="write a brief description about yourself..." rows={5}/>
        </div>   
    )
}


 {/* <CustomInput label="Cover Letter"/>
        <CustomInput type="file" label="Resume (Max 5Mb):"/>
        <span className="text-muted fs-6 search">Allowed file types are(.doc, .docx, .pdf)</span><br/> */}
      