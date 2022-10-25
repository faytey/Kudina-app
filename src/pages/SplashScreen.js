import ofafa from "../assets/ofafa.png"
export default function SplashScreen(){
    
    return(
        <div className="h-100 w-100 bg-green d-flex flex-column justify-content-center align-items-center">
            <img src={ofafa} alt="" className="img-responsive w-25 h-25 d-block" />
            <p className="pt-3 text-secondary fs-3">Ofafa</p>
        </div>
    )
}