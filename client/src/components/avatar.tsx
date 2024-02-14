export default function Avatar(props:any){
    const {color} = props
    return (
    <div className={`${color} rounded-circle avatar`}></div>
    )
}