import NavAdmin from "../NavAdmin";
import TopCover from "../TopCover";

const Pickup = (): JSX.Element => {
  return (<div className="flex flex-col h-screen justify-between">
    <NavAdmin selected='pickup' />
    <TopCover title='Pickup' desc='List of rents that are ready to be picked up' />
    <div className="bg-white h-full">
      <h1 className="font-sans text-4xl font-bold font-black animate-in slide-in-from-left">
        Pickup Page
      </h1>
    </div>
  </div>);
};

export default Pickup;
