import React from "react";

export const Team = (props) => {
    return (
        <section id="team">
            <div className="container text-center">
                <h2 className="section-title">Meet the Team</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                    dapibus leonec.
                </p>
                <div className="row">
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className="col-lg-3 col-md-3 col-sm-6">
                                <figure className="thumbnail">
                                    {" "}
                                    <img src={d.img} alt="..." className="img-fluid" />
                                    <figcaption>
                                        <h4>{d.name}</h4>
                                        <p>{d.job}</p>
                                    </figcaption>
                                </figure>
                            </div>
                        ))
                        : "loading"}
                </div>
            </div>
        </section>
    );
};
