export default function ButtonComp({text, disabled}){
    return(
        <button type="submit" className={disabled ?"btn btn-secondary w-100 text-white disabled" :"btn btn-success w-100 text-white"}>{text}</button>
    )
}