import ActionButton from "./ActionButton";

export default function QuickAction(){
    return(
        <div className="mt-5">
            <p>Quick Actions</p>
            <div className="row">
                <div className="col">
                    <ActionButton iconType="person-plus" actionButtonColor="bg-success"
                    actionButtonText="Add New User" />
                </div>
                <div className="col">
                <ActionButton iconType="cash-stack text-white" actionButtonColor="bg-primary"
                    actionButtonText="Collect New Payment" />
                </div>
            </div>
        </div>
    )
}