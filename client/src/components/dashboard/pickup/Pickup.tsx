import AdminFooter from "../basiccomponent/AdminFooter";
import NavAdmin from "../basiccomponent/NavAdmin";
import TopCover from "../basiccomponent/TopCover";

const Pickup = (): JSX.Element => {
  return (<div className="flex flex-col h-screen justify-between">
    <div className="flex flex-col">
      <NavAdmin selected='pickup' />
      <TopCover title='Pickup' desc='List of rents that are ready to be picked up' />
    </div>
    <div className="bg-white h-full">
      <h1 className="font-sans text-4xl font-bold font-black animate-in slide-in-from-left">
        Pickup Page
      </h1>
    </div>
    <AdminFooter />
  </div>);
};

export default Pickup;
