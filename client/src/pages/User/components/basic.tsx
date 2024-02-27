import { FormContext } from "../updateprofile"
import { CustomInput } from "../../../components"
import { useContext } from "react"
export default function BasicInfo() {
    const  formik  = useContext(FormContext)

    return (
        <div>
        <CustomInput {...formik?.formik.getFieldProps('fullname')}  label="Full Name *"/>
        <CustomInput {...formik?.formik.getFieldProps('email')} label="Email *"/>
        <CustomInput {...formik?.formik.getFieldProps('phone')} isValid={formik?.formik.touched.phone && !formik?.formik.errors.phone} isInvalid={!!formik?.formik.errors.phone && formik.formik.touched.phone} errormessage={formik?.formik.touched.phone && formik?.formik.errors.phone} label="Phone *"/>
        <CustomInput {...formik?.formik.getFieldProps('address')} isValid={formik?.formik.touched.address && !formik?.formik.errors.address} isInvalid={!!formik?.formik.errors.address && formik.formik.touched.address} errormessage={formik?.formik.touched.address && formik?.formik.errors.address} label="Address *"/>
        <CustomInput {...formik?.formik.getFieldProps('tagline')}  label="Tag Line *"/>
        <CustomInput {...formik?.formik.getFieldProps('website')} label="Website e.g. portfolio, github, linkedin"/>
        <CustomInput {...formik?.formik.getFieldProps('about')} isValid={formik?.formik.touched.about && !formik?.formik.errors.about} isInvalid={!!formik?.formik.errors.about && formik.formik.touched.about} errormessage={formik?.formik.touched.about && formik?.formik.errors.about} label="About *" as="textarea" placeholder="write a brief description about yourself..." rows={5}/>
        </div>   
    )
}


 {/* <CustomInput label="Cover Letter"/>
        <CustomInput type="file" label="Resume (Max 5Mb):"/>
        <span className="text-muted fs-6 search">Allowed file types are(.doc, .docx, .pdf)</span><br/> */}
      