import AdminFooter from "../basiccomponent/AdminFooter";
import NavAdmin from "../basiccomponent/NavAdmin";
import TopCover from "../basiccomponent/TopCover";

const Tool = (): JSX.Element => {
  return (<div className="flex flex-col h-screen justify-between">
    <div className="flex flex-col">
      <NavAdmin selected='tool' />
      <TopCover title='Tools' desc='List of renting tools' />
    </div>

    <div className="bg-white h-full">
      <h1 className="font-sans text-4xl font-bold font-black animate-in slide-in-from-left">
        Tool Page
      </h1>
    </div>
    <AdminFooter />
  </div>);
}

export default Tool;
