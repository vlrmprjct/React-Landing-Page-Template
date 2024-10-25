import React from "react";

export const Features = (props) => {
    return (
        <section id="features" className="section-gray">
            <div className="container text-center">
                <h2 className="section-title">Features</h2>
                <div className="row">
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                                <i className={`${d.icon} fa-2x`}></i>
                                <h3>{d.title}</h3>
                                <p>{d.text}</p>
                            </div>
                        ))
                        : "Loading..."}
                </div>
            </div>
        </section>
    );
};
