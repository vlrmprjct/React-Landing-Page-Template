import React from "react";

export const Header = (props) => {
    return (
        <header id="header">
            <div className="overlay">
                <div className="container intro-text">
                    <h1>
                        {props.data ? props.data.title : "Loading"}
                        <span></span>
                    </h1>
                    <p>{props.data ? props.data.paragraph : "Loading"}</p>
                    <a
                        href="#features"
                        className="btn btn-custom btn-lg"
                    >
                        Learn More
                    </a>
                </div>
            </div>
            <img src="assets/img/intro-bg.jpg" />
        </header>
    );
};
