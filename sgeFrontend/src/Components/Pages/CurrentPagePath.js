import { useLocation } from "react-router-dom";
function CurrentPagePath(){

    let location = useLocation();
        return location = location.pathname.toUpperCase();

}

export default CurrentPagePath;