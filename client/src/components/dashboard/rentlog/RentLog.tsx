import AdminFooter from "../basiccomponent/AdminFooter";
import NavAdmin from "../basiccomponent/NavAdmin";
import TopCover from "../basiccomponent/TopCover";

const RentLog = (): JSX.Element => {
  return (<div className="flex flex-col h-screen justify-between">
    <div className="flex flex-col">
      <NavAdmin selected='log' />
      <TopCover title='Rent Logs' desc='List of all rent logs' />
    </div>
    <div className="bg-white h-full">
      <h1 className="font-sans text-4xl font-bold font-black animate-in slide-in-from-left">
        Logs Page
      </h1>
    </div>
    <AdminFooter />
  </div>);
}

export default RentLog;
