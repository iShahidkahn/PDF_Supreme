import React from 'react';

const HeroProtect = (props) => {
    const { heading, subHeading } = props;
    return (
        <section className="hero-wrap hero-wrap-2">
            <div className="overlay" />
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-9 pt-5 text-center">
                        <div className="d-flex align-items-center justify-content-center">
                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z"
                                    fill=""
                                />
                                <path
                                    d="M15.7888 7.61318L16 7.534L16.2112 7.61318L17.2307 7.99551L20.3244 9.15566L23.4182 10.3158L24.4377 10.6981L24.4943 10.7194C24.3596 16.4023 22.2126 19.8326 20.1128 21.85C19.0361 22.8844 17.9634 23.5551 17.1626 23.9662C16.7624 24.1716 16.4311 24.3117 16.2027 24.3997C16.1259 24.4292 16.0608 24.4528 16.0087 24.4711C15.9558 24.4507 15.8896 24.4243 15.8113 24.3914C15.5818 24.295 15.2494 24.143 14.848 23.9242C14.0447 23.4864 12.9691 22.7833 11.8899 21.7261C9.78492 19.6641 7.64168 16.2331 7.50585 10.7193L7.56228 10.6981L8.58181 10.3158L11.6756 9.15566L14.7693 7.99551L15.7888 7.61318Z"
                                    stroke="white"
                                />
                            </svg>
                            <h2 className="mb-0 bread protect-h">{heading}</h2>
                        </div>
                        <p className="breadcrumbs ms-4">
                            {subHeading}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroProtect