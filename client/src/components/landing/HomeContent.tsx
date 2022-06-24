import DisplayCarousel from "./component/DisplayCarousel";

const HomeContent = (): JSX.Element => {
    return (
        <main>
            <div className="flex flex-col bg-white h-screen justify-start">
                <section id='services' className="container bg-amber-100 max-w-none mx-auto ">
                    <DisplayCarousel />
                </section>
                <section id='aboutus' className="container bg-amber-100 max-w-7xl mx-auto ">
                    <div className="container">
                        <h1 className="font-sans text-4xl font-bold font-black animate-in slide-in-from-left">
                            About Us
                        </h1>
                    </div>
                </section>
                <section id='services' className="container bg-amber-100 max-w-7xl mx-auto ">
                    <div className="container">
                        <h1 className="font-sans text-4xl font-bold font-black animate-in slide-in-from-left">
                            Our Services
                        </h1>
                    </div>
                </section>
                <section id='commitment' className="container bg-amber-100 max-w-7xl mx-auto ">
                    <div className="container">
                        <h1 className="font-sans text-4xl font-bold font-black animate-in slide-in-from-left">
                            Our Commitment
                        </h1>
                    </div>
                </section>
                <section id='project' className="container bg-amber-100 max-w-7xl mx-auto ">
                    <div className="container">
                        <h1 className="font-sans text-4xl font-bold font-black animate-in slide-in-from-left">
                            Project CTA
                        </h1>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default HomeContent;