import React, {useState} from "react"
import Nav from "../../Nav/Nav";
import CreateRating from "../CreateRating/CreateRating";
import MultiStepForm from "../MultiStepForm/MultiStepForm";


const Flow = () => {
    const [clicked, setClicked] = useState(false);

    return <>
        <Nav currentOpen={'rating'} bgColor={'blue'}/>
        {!clicked ?
            <div className="container sm:h-screen sm:w-screen">
                <CreateRating onClick={() => setClicked(true)}/>
            </div>
            :
            <MultiStepForm/>
        }
    </>
}

export default Flow;