import { useLocation, useNavigate } from "react-router-dom";
import DisplayMovie from "./DisplayMovie";


function PreviewPage({ state }) {
    let imageSrc = false;

    const location = useLocation();
    if (location.state) {
        state = location.state;
        imageSrc = true;
        console.log(state);
    }

    const navigate = useNavigate();

    function gotoHome() {
        navigate("/");
    }
    function gotoUpoad() {
        navigate("/upload");
    }

    return (<>
        <DisplayMovie imageSrc={imageSrc} state={state} />
        <button onClick={gotoHome}>Home</button>
        <button onClick={gotoUpoad}>Upload</button>
    </>)
}

export default PreviewPage;