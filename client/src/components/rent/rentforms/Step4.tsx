import moment from 'moment';
import { useEffect, useState } from 'react';
import { calculateBetweenTwoDate, calculatePrices } from '../../../actions/utils';
import { toolsData } from '../../../dummydata/tools.data';
import { StepProps, Tool } from '..//rent.types';


const Step4 = ({
  formData,
  setFormData,
  error,
  setError,
}: StepProps): JSX.Element => {
  const [toolsFetch, setToolsFetch] = useState<Tool[]>([]);

  useEffect(() => {
    console.log("Fetch Tools Data");
    setToolsFetch(
      toolsFetch => (toolsData.filter((item) => item.totalStock > 0 && item.activated))
    );
    setFormData({ ...formData, totalPrice: calculatePrices(formData.tools, toolsFetch, days, hours) })
  }, [])

  const pickupDate = new Date(formData.pickupDate);
  pickupDate.setHours(formData.pickupHour);
  pickupDate.setMinutes(formData.pickupMinute);
  const returnDate = new Date(formData.returnDate);
  returnDate.setHours(formData.returnHour);
  returnDate.setMinutes(formData.returnMinute);
  const [days, hours] = calculateBetweenTwoDate(pickupDate, returnDate);
  const totalPrice = calculatePrices(formData.tools, toolsFetch, days, hours);
  return <>
    {error.totalPrice && (
      <div
        className="bg-red-100 border mb-3 mx-2 border-red-400 text-red-700 px-4 py-3 rounded relative w-80"
        role="alert"
      >
        <span className="block text-center">{error.totalPrice}</span>
      </div>
    )}
    <div className="overflow-x-auto px-4">
      <table className="items-center w-full bg-transparent border-collapse mb-4">
        <thead>
          <tr>
            <th className="w-full px-2 text-gray-800 align-middle border-b border-solid border-ws-orange py-1 text-md whitespace-nowrap font-bold text-left">
              Information
            </th>
            <th className="w-2 px-2 text-gray-800 align-middle border-b border-solid border-ws-orange py-1 text-md whitespace-nowrap font-bold text-left">
            </th>
            <th className="w-40 px-2 text-gray-800 align-middle border-b border-solid border-ws-orange py-1 text-md whitespace-nowrap font-bold text-right">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          <tr key="name">
            <th key="nameInfo" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-left">
              Name
            </th>
            <th key="nameColon" className="border-b border-ws-orange align-middle font-bold text-md whitespace-nowrap px-2 py-2 text-left">
              :
            </th>
            <th key="nameValue" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-right">
              {formData.name}
            </th>
          </tr>
          <tr key="nim">
            <th key="nimInfo" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-left">
              NIM
            </th>
            <th key="nimColon" className="border-b border-ws-orange align-middle font-bold text-md whitespace-nowrap px-2 py-2 text-left">
              :
            </th>
            <th key="nimValue" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-right">
              {formData.nim}
            </th>
          </tr>
          <tr key="organisation">
            <th key="organisationInfo" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-left">
              Organisation
            </th>
            <th key="organisationColon" className="border-b border-ws-orange align-middle font-bold text-md whitespace-nowrap px-2 py-2 text-left">
              :
            </th>
            <th key="organisationValue" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-right">
              {formData.organisation}
            </th>
          </tr>
          <tr key="phone">
            <th key="phoneInfo" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-left">
              Phone
            </th>
            <th key="phoneColon" className="border-b border-ws-orange align-middle font-bold text-md whitespace-nowrap px-2 py-2 text-left">
              :
            </th>
            <th key="phoneValue" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-right">
              {formData.phone}
            </th>
          </tr>
          <tr key="line">
            <th key="lineInfo" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-left">
              Line ID
            </th>
            <th key="lineColon" className="border-b border-ws-orange align-middle font-bold text-md whitespace-nowrap px-2 py-2 text-left">
              :
            </th>
            <th key="lineValue" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-right">
              {formData.line}
            </th>
          </tr>
          <tr key="pickupDate">
            <th key="pickupInfo" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-left">
              Waktu Pengambilan
            </th>
            <th key="pickupColon" className="border-b border-ws-orange align-middle font-bold text-md whitespace-nowrap px-2 py-2 text-left">
              :
            </th>
            <th key="pickupValue" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-right">
              {moment(pickupDate).format("DD-MM-YYYY hh:mm A")}
            </th>
          </tr>
          <tr key="returnDate">
            <th key="returnInfo" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-left">
              Waktu Pengembalian
            </th>
            <th key="returnColon" className="border-b border-ws-orange align-middle font-bold text-md whitespace-nowrap px-2 py-2 text-left">
              :
            </th>
            <th key="returnValue" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-right">
              {moment(returnDate).format("DD-MM-YYYY hh:mm A")}
            </th>
          </tr>
          <tr key="duration">
            <th key="durationInfo" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-left">
              Durasi Peminjaman
            </th>
            <th key="durationColon" className="border-b border-ws-orange align-middle font-bold text-md whitespace-nowrap px-2 py-2 text-left">
              :
            </th>
            <th key="durationValue" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-right">
              {`${days} Hari ${hours} Jam `}
            </th>
          </tr>
          <tr key="tools">
            <th key="toolsInfo" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-left">
              Barang
            </th>
            <th key="toolsColon" className="border-b border-ws-orange align-middle font-bold text-md whitespace-nowrap px-2 py-2 text-left">
              :
            </th>
            <th key="toolsValue" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-right">
              <ul>
                {formData.tools.map(tool => {
                  const findTool = toolsFetch.find(x => x.id === tool.toolId)
                  if (!findTool) {
                    return <></>
                  }
                  return (<li className='w-auto' key={tool.toolId}>
                    {findTool.name.length > 24 ? findTool.name.substring(0, 24) + '..'
                      : findTool.name}{" "}
                    <span className='font-bold'>
                      {tool.quantity}</span>{" pcs"}</li>)
                })}
              </ul>
            </th>
          </tr>
          <tr key="price">
            <th key="priceInfo" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-left">
              Harga Total
            </th>
            <th key="priceColon" className="border-b border-ws-orange align-middle font-bold text-md whitespace-nowrap px-2 py-2 text-left">
              :
            </th>
            <th key="priceValue" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-right">
              {totalPrice}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </>;
};

export default Step4;
