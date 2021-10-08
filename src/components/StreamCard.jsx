import React from "react";
import { useHistory } from "react-router-dom";
import Img from "./Img";


const StreamCard = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/view-stream/48343948");
    };
    return (
        <React.Fragment>
            x`
        </React.Fragment>
    );
};

export default StreamCard;
