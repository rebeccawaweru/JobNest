import { Col, Form, FormControl, Row} from "react-bootstrap";
export default function Input(props:any){
    return (
        <Form.Group className="my-5 " as={Row}>
        <Form.Label  column sm="4">{props.label}<span className="text-danger fw-bold mx-1">*</span></Form.Label>
        <Col sm="8">
        <Form.Control {...props} className="inputbg  rounded-pill border-1  px-4 py-3 "/>
        <FormControl.Feedback type="invalid">{props.errormessage}</FormControl.Feedback>
        </Col>
        </Form.Group>
    )
}