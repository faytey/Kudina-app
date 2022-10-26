export default function AgentCard({userBalance, userAmount}){

    return(
        <div className="card mt-3 border-0 p-5 rounded">
            <div className="d-flex justify-content-between">
                <div>
                    <p>Wallet Balance</p>
                    <p className="fs-2">{userBalance}</p>
                </div>
                <div>
                    <i className="bi-eye fs-3"></i>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <div>
                    <p>Ofafa Payment - <span className="fw-bold">{userAmount}</span> </p>
                </div>
                <div>
                    <button className="btn btn-success">Pay Now</button>
                </div>
            </div>
        </div>
    )
}