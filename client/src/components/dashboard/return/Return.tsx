import AdminFooter from "../basiccomponent/AdminFooter";
import NavAdmin from "../basiccomponent/NavAdmin";
import TopCover from "../basiccomponent/TopCover";
import { CSVLink } from "react-csv";
import { useEffect, useState } from "react";
import SearchBar from "../basiccomponent/SearchBar";
import AlertCard from "../basiccomponent/AlertCard";
import { Rent, Tool } from "../../rent/rent.types";
import { toolsData } from "../../../dummydata/tools.data";
import { rentsDataPickup, rentsDataReturn } from "../../../dummydata/rents.data";
import { AlertData } from "../basiccomponent/basic.types";
import { calculateBetweenTwoDate } from "../../../actions/utils";
import ReturnTable from "./ReturnTable";
import ReturnEditModal from "./modals/ReturnEditModal";


const Return = (): JSX.Element => {
  useEffect(() => {
    refreshData()
  }, [])
  const [loadRender, setLoadRender] = useState<boolean>(false);
  const [rents, setRents] = useState<Rent[]>([]);
  const [tools, setTools] = useState<Tool[]>([]);
  const [filteredRents, setFilteredRents] = useState<Rent[]>([]);
  const [wordSearch, setWordSearch] = useState<string>('');
  const [alert, setAlert] = useState<null | AlertData>(null);
  const [formData, setFormData] = useState<Rent>(formReset)

  const [addModal, setAddModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const onWordSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setWordSearch(wordSearch => e.target.value);
    setFilteredRents(rents.filter(x => wordSearch === '' ? true : x.rentName.toLowerCase().includes(e.target.value.toLowerCase())))
  };

  const setAdd = () => {
    setFormData(formReset);
    setAddModal(true);
  }
  const setEdit = (data: Rent) => {
    setFormData(data);
    setEditModal(true);
  }
  const setDelete = (data: Rent) => {
    setFormData(data);
    setDeleteModal(true);
  }

  const refreshData = async (): Promise<any> => {
    setLoadRender(true);
    // gql fetch all articles
    await new Promise(r => setTimeout(r, 250));
    setTools(toolsData);
    // set articles and filtered articles
    const rentsWaiting = structuredClone(rentsDataReturn).filter(x => x.status === 'waiting_pickup');
    // Check the late condition 
    rentsWaiting.forEach((rent, idx) => {
      let fine = 0
      let status = rent.status
      const [days, hours] = calculateBetweenTwoDate(rent.expectedReturnDate, new Date());
      if (days === 0 && hours === 0) {
        fine = 0
      }
      else {
        status = `Terlambat ${days} Hari ${hours - 1} Jam`
        fine = 0
        rent.tools.forEach(x => {
          const tool = tools.find(y => y.id === x.toolId);
          if (tool) {
            let totalHour = x.quantity * tool.priceHour * (hours - 1);
            if (totalHour > tool.priceDay) {
              totalHour = tool.priceDay
            }
            let totalDay = x.quantity * tool.priceDay * days;
            fine += totalHour + totalDay;
          }
        })
      }
      rent.status = status;
      rent.fine = fine;
      // Save fine and status
    })
    setRents(rentsWaiting);
    setFilteredRents(rentsWaiting);
    setWordSearch('');
    setLoadRender(false);
  }
  return (<div className="flex flex-col min-h-screen justify-between overflow-hidden absolute">
    {alert && <AlertCard data={alert} onClose={setAlert} />}

    <div className="flex flex-col">
      <NavAdmin selected='return' />
      <TopCover title='Return' desc='List of rents that have been picked up and are ready to be returned' />
    </div>
    <div className="h-full flex flex-col mx-auto">
      {editModal && <ReturnEditModal formData={formData} setFormData={setFormData} setShowModal={setEditModal} setActionResult={setAlert} refreshData={refreshData} />}
      {
        loadRender ?
          <svg className='w-10 text-ws-orange animation animate-spin' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill='currentColor' d="M304 48C304 74.51 282.5 96 256 96C229.5 96 208 74.51 208 48C208 21.49 229.5 0 256 0C282.5 0 304 21.49 304 48zM304 464C304 490.5 282.5 512 256 512C229.5 512 208 490.5 208 464C208 437.5 229.5 416 256 416C282.5 416 304 437.5 304 464zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM512 256C512 282.5 490.5 304 464 304C437.5 304 416 282.5 416 256C416 229.5 437.5 208 464 208C490.5 208 512 229.5 512 256zM74.98 437C56.23 418.3 56.23 387.9 74.98 369.1C93.73 350.4 124.1 350.4 142.9 369.1C161.6 387.9 161.6 418.3 142.9 437C124.1 455.8 93.73 455.8 74.98 437V437zM142.9 142.9C124.1 161.6 93.73 161.6 74.98 142.9C56.24 124.1 56.24 93.73 74.98 74.98C93.73 56.23 124.1 56.23 142.9 74.98C161.6 93.73 161.6 124.1 142.9 142.9zM369.1 369.1C387.9 350.4 418.3 350.4 437 369.1C455.8 387.9 455.8 418.3 437 437C418.3 455.8 387.9 455.8 369.1 437C350.4 418.3 350.4 387.9 369.1 369.1V369.1z" />
          </svg> :
          <>
            <SearchBar wordSearch={wordSearch} onChange={onWordSearchChange} placeholder={"Cari Nama"} />

            <div className="overflow-x-auto w-screen px-4">
              <ReturnTable data={filteredRents} header={headers.map(x => x.label)} onReturn={setEdit} tools={tools} />
            </div>
          </>
      }
    </div>
    <AdminFooter />
  </div>);
}

export default Return;

const headers = [
  { label: "Nama", key: "rentName" },
  { label: "NIM", key: "rentNim" },
  { label: "Phone", key: "rentPhone" },
  { label: "Line ID", key: "rentLineId" },
  { label: "Organisation", key: "organisation" },
  { label: "Rent", key: "tools" },
  { label: "From", key: "fromDate" },
  { label: "Until", key: "expectedReturnDate" },
  { label: "Biaya", key: "totalPrice" },
  { label: "Status", key: "status" },
  { label: "Denda", key: "fine" }
];

const formReset: Rent = {
  id: 0,
  tools: [{ toolId: 2, quantity: 1 }, { toolId: 4, quantity: 1 }],
  rentName: "John Doe",
  rentNim: "13218000",
  rentPhone: "087743872830",
  rentLineId: "LineIDEXample123",
  organisation: "Workshop HME ITB",
  fromDate: new Date("June 8, 2022"),
  expectedReturnDate: new Date("June 13, 2022"),
  totalPrice: 120000,
  status: "waiting_pickup",
  fine: 0,
  pickupName: 'david fauzi',
  pickupNim: '13218043',
  returnName: '',
  returnNim: '',
  returnDate: null,
}