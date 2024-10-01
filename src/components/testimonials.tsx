import React from "react";

export const Testimonials = (props) => {
    return (
        <div id="testimonials">
            <div className="container text-center">
                <h2 className="section-title">What our clients say</h2>
                <div className="row">
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className="col-md-4">
                                <div className="testimonial">
                                    <div className="testimonial-image">
                                        <img src={d.img} alt="" />
                                    </div>
                                    <div className="testimonial-content text-start">
                                        <p>"{d.text}"</p>
                                        <div className="testimonial-meta"> - {d.name} </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        : "loading"}
                </div>
            </div>
        </div>
    );
};
