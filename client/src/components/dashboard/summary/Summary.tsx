import NavAdmin from "../NavAdmin";
import TopCover from "../TopCover";

const Summary = (): JSX.Element => {
  return (<div className="flex flex-col h-screen justify-between">
    <NavAdmin selected='summary' />
    <TopCover title='Summary' desc='Summary and Visualization of rent data' />
    <div className="bg-white h-full">
      <h1 className="font-sans text-4xl font-bold font-black animate-in slide-in-from-left">
        Summary Page
        </h1>
    </div>
  </div>);
};

export default Summary;
