import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/Study.json";
const Studies = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <>
            <section className="py-10 bg-gray-50 ">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 lg:items-stretch md:grid-cols-2 gap-y-8 gap-x-12 xl:gap-x-20">
                        <div className="lottie-container">
                            <Lottie options={defaultOptions} />
                        </div>

                        <div className="flex flex-col justify-between md:py-5">
                            <h2 className="sm:text-4xl text-2xl font-bold  text-black underline underline-offset-3 decoration-8 decoration-amber-400 text-center sm:text-inherit">
                                Studies
                            </h2>
                            <p className="sm:text-2xl text-xl text-center sm:text-inherit pt-4">
                                "Here's what I did in my studies"
                            </p>
                            <ol className="relative border-l border-black-200 m-8 max-w-screen-xl mx-auto  px-4  lg:px-8 text-start">
                                <li className="mb-10 ml-6">
                                    <span className="absolute flex items-center  justify-center w-6 h-6 bg-amber-100 rounded-full -left-3 ring-8 ring-white  ">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-amber-600 "
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                        </svg>

                                    </span>
                                    <h3 className="flex items-center mb-1 text-black sm:text-2xl text-xl  leading-relaxed font-bold ">
                                        Lovely Professional University
                                    </h3>
                                    <time className="block mb-2 text-lg  leading-none text-black">
                                        From 2016-2019
                                    </time>
                                    <p className="mb-4 text-black ">
                                        Bachelor of Computer Applications
                                    </p>
                                </li>
                                <li className="mb-10 ml-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-amber-100 rounded-full -left-3 ring-8 ring-white  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-amber-600 "
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                        </svg>
                                    </span>
                                    <h3 className="mb-1 text-black sm:text-2xl text-xl  leading-relaxed font-bold ">
                                        Bal Vidya Mandir Sr. Sec. School
                                    </h3>
                                    <time className="block mb-2 text-lg  leading-none text-black">
                                        From 2014-2016
                                    </time>
                                    <p className="  text-black ">10+2</p>
                                </li>
                                <li className="ml-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-amber-100 rounded-full -left-3 ring-8 ring-white  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-amber-600 "
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                        </svg>
                                    </span>
                                    <h3 className="mb-1 text-black sm:text-2xl text-xl  leading-relaxed font-bold ">
                                        Bal Vidya Mandir Sr. Sec. School
                                    </h3>
                                    <time className="block mb-2 text-lg  leading-none text-black">
                                        From 2013-2014
                                    </time>
                                    <p className="  text-black ">10</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className="mx-auto text-center">
            <h2 className="sm:text-4xl text-2xl font-bold text-white underline underline-offset-3 decoration-8 decoration-amber-400">
                Studies
            </h2>
            <p className="mx-auto mt-4 sm:text-2xl text-xl leading-relaxed text-amber-400">
                Here's what I did in my studies
            </p>
        </div>
            <h1></h1>
            <ol className="relative border-l border-black-200 m-8 max-w-screen-xl mx-auto  px-4  lg:px-8 text-center sm:text-start">
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-amber-100 rounded-full -left-3 ring-8 ring-white  ">
                        <svg className="w-2.5 h-2.5 text-amber-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-black sm:text-2xl text-xl  leading-relaxed font-bold ">Lovely Professional University <span className="bg-amber-100 text-amber-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded   ml-3">Latest</span></h3>
                    <time className="block mb-2 text-lg  leading-none text-black">From 2016-2019</time>
                    <p className="mb-4 text-black ">Bachelor of Computer Applications</p>

                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-amber-100 rounded-full -left-3 ring-8 ring-white  ">
                        <svg className="w-2.5 h-2.5 text-amber-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 className="mb-1 text-black sm:text-2xl text-xl  leading-relaxed font-bold ">Bal Vidya Mandir Sr. Sec. School</h3>
                    <time className="block mb-2 text-lg  leading-none text-black">From 2014-2016</time>
                    <p className="  text-black ">10+2</p>
                </li>
                <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-amber-100 rounded-full -left-3 ring-8 ring-white  ">
                        <svg className="w-2.5 h-2.5 text-amber-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 className="mb-1 text-black sm:text-2xl text-xl  leading-relaxed font-bold ">Bal Vidya Mandir Sr. Sec. School</h3>
                    <time className="block mb-2 text-lg  leading-none text-black">From 2013-2014</time>
                    <p className="  text-black ">10</p>
                </li>
            </ol> */}
        </>
    );
};

export default Studies;
