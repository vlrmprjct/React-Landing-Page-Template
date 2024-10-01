import React from "react";
import { Image } from "./image";

export const Gallery = (props) => {
    return (
        <section id="portfolio">
            <div className="container text-center">
                <h2 className="section-title">Gallery</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                    dapibus leonec.
                </p>
                <div className="row g-1 portfolio-items">
                    {props.data
                        ? props.data.map((d, i) => (
                            <div
                                key={`${d.title}-${i}`}
                                className="col-sm-6 col-md-4 col-lg-4"
                            >
                                <Image
                                    title={d.title}
                                    largeImage={d.largeImage}
                                    smallImage={d.smallImage}
                                />
                            </div>
                        ))
                        : "Loading..."}
                </div>
            </div>
        </section>
    );
};
