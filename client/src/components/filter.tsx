import { Stack } from "react-bootstrap"

interface propObject {
    title:string,
    caption:string
}
export default function Filter(props:propObject){
    const {title, caption} = props
    return (
        <div className='filter'>
        <p className='text-muted'>{caption}</p>
         <Stack className="w-100 d-flex justify-content-between" direction='horizontal' gap={5}>
          <p>{title}</p>
          <p><i className="bi bi-chevron-down"></i></p>
         </Stack>
       </div>
    )
}