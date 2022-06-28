import { useState } from "react";
import { Article } from "../../article/article.types";
import AdminFooter from "../basiccomponent/AdminFooter";
import NavAdmin from "../basiccomponent/NavAdmin";
import SearchBar from "../basiccomponent/SearchBar";
import TopCover from "../basiccomponent/TopCover";
import { CSVLink } from "react-csv";

const headers = [
  { label: "First Name", key: "firstname" },
  { label: "Last Name", key: "lastname" },
  { label: "Email", key: "email" }
];

const ArticleTable = (): JSX.Element => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [wordSearch, setWordSearch] = useState<string>('');

  return (<div className="flex flex-col h-screen justify-between">
    <div className="flex flex-col">
      <NavAdmin selected='pickup' />
      <TopCover title='Article' desc='List of Articles from WS medium' />
    </div>
    <div className="bg-white h-full mx-auto">
      <SearchBar wordSearch={wordSearch} setWordSearch={setWordSearch} placeholder={"Cari Artikel"} />
      <div className="flex w-full justify-center items-center">
        <button className=" bg-green-400 text-slate-700 hover:bg-green-200 font-bold py-2 px-4 rounded-lg w-auto">
          <CSVLink data={articles} headers={headers}>
            Export CSV
          </CSVLink>
        </button>
      </div>

    </div>
    <AdminFooter />
  </div>);
};

export default ArticleTable;
