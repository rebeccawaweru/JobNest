interface propObjects {
    icon:string, title:string, desc:string, desc2:string
}
export default function ContactItem(props:propObjects){
    const {icon, title, desc, desc2} = props;
    return (
    <div className="d-block">
    <p className="text-primary fs-4"><i className={icon}></i> {title}</p>
    <p className="text-muted">{desc}</p>
    <p className="text-muted">{desc2}</p>
    </div>
    )
}