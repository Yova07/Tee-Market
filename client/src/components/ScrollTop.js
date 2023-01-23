import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";

const ScrollTop = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
}

export default ScrollTop;