export default function SearchBar(){

    return(
        <div className="mt-3">
            <p className="fw-bold">Search for User</p>
            <div className="input-group mb-3">
                <span className="input-group-text border-none" id="basic-addon1"><i className="bi-search text-secondary"></i></span>
                <input type="text" className="form-control" placeholder="Enter Phone Number" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        </div>
    )
}