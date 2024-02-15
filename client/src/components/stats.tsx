import { Col } from "react-bootstrap"
interface propObject {
    num:string,
    title:string,
    custom:string
}
export default function Stats(props:propObject){
    const {num, title, custom} = props
    return(
        <Col className={`${custom} h-100 d-flex align-items-center justify-content-center  text-center fs-3`}>
        <p className='d-grid'>{num} <span className="fs-5">{title}</span></p>
      </Col>
    )
}