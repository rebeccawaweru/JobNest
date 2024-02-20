import { Stack } from "react-bootstrap"
interface propObject {
    icon:string, title:string, active:boolean
}
export default function MultiStep(prop:propObject){
    const {icon, title, active} = prop
    return (
        <Stack className={active ? 'text-primary' : 'text-muted'} direction="horizontal" gap={2}>
        <span><i className={`${icon} fs-3`}></i></span>
        <p className="mt-3 d-none d-lg-block d-md-block">{title}</p>
        </Stack>
    )
}