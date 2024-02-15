import { Col } from "react-bootstrap"
interface propObject {
    num:string,
    title:string
}
export default function Stats(props:propObject){
    const {num,title} = props
    return(
        <Col className='h-100 d-flex align-items-center justify-content-center stat text-center fs-3'>
        <p className='d-grid'>{num} <span className="fs-5">{title}</span></p>
      </Col>
    )
}