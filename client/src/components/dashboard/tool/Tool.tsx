import NavAdmin from "../NavAdmin";
import TopCover from "../TopCover";

const Tool = (): JSX.Element => {
  return (<div className="flex flex-col h-screen justify-between">
    <NavAdmin selected='tool' />
    <TopCover title='Tools' desc='List of renting tools' />
    <div className="bg-white h-full">
      <h1 className="font-sans text-4xl font-bold font-black animate-in slide-in-from-left">
        Tool Page
      </h1>
    </div>
  </div>);
}

export default Tool;
