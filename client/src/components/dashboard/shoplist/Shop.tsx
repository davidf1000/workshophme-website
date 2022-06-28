import AdminFooter from "../basiccomponent/AdminFooter";
import NavAdmin from "../basiccomponent/NavAdmin";
import TopCover from "../basiccomponent/TopCover";

const ShopTable = (): JSX.Element => {
  return (<div className="flex flex-col h-screen justify-between">
    <div className="flex flex-col">
      <NavAdmin selected='shop' />
      <TopCover title='Shop' desc='List of products from tokopedia' />
    </div>
    <div className="bg-white h-full">
      <h1 className="font-sans text-4xl font-bold font-black animate-in slide-in-from-left">
        Shop Page
      </h1>
    </div>
    <AdminFooter />
  </div>);
};

export default ShopTable;
