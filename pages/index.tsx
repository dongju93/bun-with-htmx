import React from "react";

function Components(props: { message: string }) {
    return (
        <body>
            <h1 style={{ color: "red" }}>{props.message}</h1>
        </body>
    );
}

console.log(<Components message="Hello world" />);
