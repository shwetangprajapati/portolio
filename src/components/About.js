import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../lotties/about.json';
const About = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <section>
            <div
                className="m-8 max-w-screen-xl mx-auto  px-4  lg:px-8 text-center sm:text-start"
            >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div
                        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                    >
                        <div className="lottie-container">
                            <Lottie options={defaultOptions} />
                        </div>
                    </div>

                    <div className="lg:py-24">
                        <h2 className="sm:text-4xl text-2xl font-bold  text-black underline underline-offset-3 decoration-8 decoration-amber-400 ">About Me</h2>

                        <p className="mt-4 text-black sm:text-2xl text-xl  leading-relaxed">
                            I am Shwetang Prajapati from Lucknow. I hold a Bachelor's degree in Computer Applications from Lovely Professional University and have <strong className="bg-amber-200">2 years of experience</strong> in <strong className="bg-amber-200">web development</strong>. Currently, I am working at <em className="text-amber-400">“SAS ONE PRIVATE LIMITED”</em> in Lucknow, Uttar Pradesh, India.</p>
                        <p className="mt-4 text-black sm:text-2xl text-xl  leading-relaxed"> My journey in web development started in 2021 and has been thriving ever since. I am passionate about creating exceptional digital experiences and continuously strive to stay updated with the latest trends in the industry.</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About