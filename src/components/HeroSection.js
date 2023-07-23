import React from "react";

const HeroSection = () => {
    return (
        <section className=" bg-amber-400  2xl:bg-white mb-8 max-w-screen-xl mx-auto">
            <div className="px-4 mx-auto rounded-md custom-radial-gradient max-w-7xl sm:px-6 lg:px-8">
                <div className="2xl:pl-24">
                    <div className="grid grid-cols-1 sm:gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
                        <div className="text-center md:py-16 xl:py-24 md:text-left">
                            <blockquote>
                                <p className="text-2xl font-semibold leading-relaxed text-white ">
                                    “Programmer with hands-on experience in
                                    website design, adaptation, and maintenance. Eager to leverage
                                    an extensive knowledge base and background in frontend
                                    development to drive forward and optimize online presence,
                                    ultimately propelling organizational growth and success.”
                                </p>
                            </blockquote>
                            <div className="mt-6 sm:flex sm:items-baseline sm:justify-center md:justify-start">
                                <p className="text-xl font-bold text-black animate-bounce">
                                    Shwetang Prajapati
                                </p>
                                <em className="mt-2  text-black sm:mt-0 sm:ml-2">
                                    Programmer at SAS ONE Private Limited
                                </em>
                            </div>

                            <a
                                href={"./Resume.pdf"}
                                download="myResume"
                                rel="noopener noreferrer"
                                className=" inline-flex  items-center justify-center rounded m-1 bg-black px-8 py-3 text-sm font-medium text-white transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring "
                            >
                                Download Resume
                            </a>
                        </div>

                        <div className="relative">
                            <img
                                className="md:absolute md:bottom-0 md:scale-110 md:origin-bottom-right lg:scale-75 2xl:scale-100 2xl:-mt-20"
                                src="./ProfilePic.png"
                                alt="Profile Pic"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
