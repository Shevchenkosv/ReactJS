import React from "react";

function Message({ props }) {
    alert(props.author);
    return (
        <div className="message">
            <h1 className="author">Oт:{props.author}</h1>
            <p className="text">{props.text}</p>
        </div >
    );
};

export default Message;
