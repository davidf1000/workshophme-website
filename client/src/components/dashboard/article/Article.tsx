import NavAdmin from "../NavAdmin";
import TopCover from "../TopCover";

const ArticleTable = (): JSX.Element => {
  return (<div className="flex flex-col h-screen justify-between">
    <NavAdmin selected='pickup' />
    <TopCover title='Article' desc='List of Articles from WS medium' />
    <div className="bg-white h-full">
      <h1 className="font-sans text-4xl font-bold font-black animate-in slide-in-from-left">
        Article Page
      </h1>
    </div>
  </div>);
};

export default ArticleTable;
