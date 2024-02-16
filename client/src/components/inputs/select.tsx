import { Col, Form, FormControl, Row} from "react-bootstrap";
export default function Select({children}:any, props:any){

    return (
    <Form.Group className="my-5 " as={Row}>
    <Form.Label  column sm="4">User Type<span className="text-danger fw-bold mx-1">*</span></Form.Label>
    <Col sm="8">
    <Form.Select {...props} className="inputbg  rounded-pill border-1  px-4 py-3 ">
    {children}
    </Form.Select>
    <FormControl.Feedback type="invalid">{props.errormessage}</FormControl.Feedback>
    </Col>
    </Form.Group>
    )
}