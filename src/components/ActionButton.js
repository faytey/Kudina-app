export default function ActionButton({iconType, actionButtonColor, actionButtonText}){

    return(
        <a href="/" className={`btn w-100 rounded ${actionButtonColor} text-start p-2 text-white`}>
            <i className={`d-block bi-${iconType} mb-2`}></i>
            <p>{actionButtonText}</p>
        </a>
    )
}