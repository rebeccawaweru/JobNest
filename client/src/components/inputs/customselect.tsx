import React from "react";
import { Form, FormControl} from "react-bootstrap";
interface propObject {
    children:React.ReactNode,
    label?:string,
    errormessage?:string,
    props:any,
}
export default function CustomSelect({children,label,errormessage, props}:propObject) {
    return (
    <Form.Group className="mb-3 ">
    <Form.Label className="text-secondary fs-6">{label}</Form.Label>
    <div>
    <select {...props} className="bg-white w-100 border p-2 rounded-1">
    {children}
    </select>
    </div>

    <FormControl.Feedback type="invalid">{errormessage}</FormControl.Feedback>
    </Form.Group>
    )
}