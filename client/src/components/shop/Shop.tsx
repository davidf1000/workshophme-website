import { shopDataDummy } from "../../dummydata/shop.data";
import ArticleCard from "../article/ArticleCard";
import Footer from "../Footer";
import NavBar from "../Navbar";
import ShopCard from "./ShopCard";

const Shop = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen justify-start bg-ws-orange">
      <NavBar selected="shop" />
      <div className="flex  h-full w-full mb-auto">
        <div className="flex flex-col max-w-7xl justify-start mx-auto px-6">
          <h1 className="font-sans text-4xl font-semibold text-gray-800 mx-auto mt-4 mb-4">
            WS Shop
          </h1>
          <p className="font-sans text-lg text-gray-800 text-justify max-w-3xl mx-auto">
            Workshop HME menyediakan aneka komponen serta kit elektronik dengan harga yang terjangkau dan kualitas barang yang terjamin.
          </p>
          <div className="flex flex-wrap justify-center w-full items-center mb-8 mt-10">
            {shopDataDummy.map(product => (
              <ShopCard product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
