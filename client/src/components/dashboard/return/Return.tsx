import AdminFooter from "../AdminFooter";
import NavAdmin from "../NavAdmin";
import TopCover from "../TopCover";

const Return = (): JSX.Element => {
  return (<div className="flex flex-col h-screen justify-between">
    <div className="flex flex-col">
      <NavAdmin selected='return' />
      <TopCover title='Return' desc='List of rents that have been picked up and are ready to be returned' />
    </div>
    <div className="bg-white h-full">
      <h1 className="font-sans text-4xl font-bold font-black animate-in slide-in-from-left">
        Return Page
      </h1>
    </div>
    <AdminFooter />
  </div>);
}

export default Return;
