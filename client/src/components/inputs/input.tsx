import { Col, Form, FormControl, Row} from "react-bootstrap";
export default function Input(props:any){
    return (
        <Form.Group className="my-5" as={Row}>
        <Form.Label  column sm="4">{props.label}<span className="text-danger fw-bold mx-1">*</span></Form.Label>
        <Col sm="8">
        <Form.Control {...props} className="rounded-pill border-1 border-secondary px-4 py-2 bg-light"/>
        <FormControl.Feedback type="invalid">{props.errorMessage}</FormControl.Feedback>
        </Col>
        </Form.Group>
    )
}