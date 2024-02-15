
interface propObject {
    title:string,
    caption:string,
    display:string,
    icon:string,
}
export default function Step(props:propObject){
    const {title, caption, display, icon} = props;
    return (
        <div className='d-grid text-center step'>

        <div className="d-inline-flex justify-content-center ">
        <div className='rounded-circle text-primary mb-2 fs-3 icon-bg d-flex align-items-center justify-content-center text-center'>
          <i className={icon}></i>
        </div>
        <div className={`${display} connector border-2 mt-4 h-25  border-primary`}></div>
        </div>

        <p className="fs-5 topic">{title}</p>
        <p className="fs-6 text-muted">{caption}</p>
      </div>
    )
}