import { Form, FormGroup, FormControl } from "react-bootstrap"
export default function CustomInput(props:any){
    return <FormGroup className="mb-3  ">
    <Form.Label className="text-secondary fs-6">{props.label}</Form.Label>
    <Form.Control {...props} className="bg-white"/>
    <FormControl.Feedback type="invalid">{props.errormessage}</FormControl.Feedback>
 </FormGroup>
}