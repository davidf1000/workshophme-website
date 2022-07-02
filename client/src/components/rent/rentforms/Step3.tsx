import { useQuery } from '@apollo/client';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { toolsData } from '../../../dummydata/tools.data';
import { GET_RENTS } from '../../../graphql/rentQuery';
import { GetRentsResponse } from '../../../graphql/rentQuery.types';
import { GetShopsResponse } from '../../../graphql/shopQuery.types';
import { GetToolsResponse } from '../../../graphql/toolQuery.types';
import { GET_TOOLS } from '../../../graphql/toolsQuery';
import AlertCard from '../../dashboard/basiccomponent/AlertCard';
import Spinner from '../../Spinner';
import { StepProps, Tool } from '..//rent.types';
import ToolCard from './ToolCard';

// TODO
//  1. Take 1 card, test create card [OK]
//  2. Test for flexwrap multiple card [OK]
//  3. Test state of adding and removing item [OK]
//  4. Test final formData [OK]


const Step3 = ({
  formData,
  setFormData,
  error,
  setError,
}: StepProps): JSX.Element => {
  const { loading: gqlToolsLoading, error: gqlToolsError, data: gqlToolsData } = useQuery<GetToolsResponse>(GET_TOOLS);
  const { loading: gqlRentsLoading, error: gqlRentsError, data: gqlRentsData } = useQuery<GetRentsResponse>(GET_RENTS);
  const [showAlert, setShowAlert] = useState<boolean>(true);

  const [toolsFetch, setToolsFetch] = useState<Tool[]>([]);
  useEffect(() => {
    console.log("Refreshed !");
  }, [
  ]);
  return (
    <>
      {showAlert && gqlToolsError && <AlertCard data={{
        title: 'ERROR',
        desc: gqlToolsError.message,
        type: 'error'
      }} onClose={setShowAlert} />}
      {showAlert && gqlRentsError && <AlertCard data={{
        title: 'ERROR',
        desc: gqlRentsError.message,
        type: 'error'
      }} onClose={setShowAlert} />}

      <div className="flex flex-wrap justify-center items-start w-full px-4">
        {gqlToolsLoading && gqlRentsLoading ? <Spinner /> : <>
          {
            gqlToolsData?.tools.filter((item) => item.totalStock > 0 && item.activated).map((item) => {
              let updatedStock = item.totalStock;
              // count overlap from rents rentPickupDate<pickupDate<rentReturnDate or rentPickupDate<returnDate<rentReturnDate 
              let overlap = 0
              const { pickupDate, pickupHour, pickupMinute, returnDate, returnHour, returnMinute } = formData;
              const pickupDateFull = new Date(pickupDate);
              pickupDateFull.setHours(pickupHour);
              pickupDateFull.setMinutes(pickupMinute);
              const returnDateFull = new Date(returnDate);
              returnDateFull.setHours(returnHour);
              returnDateFull.setMinutes(returnMinute);

              gqlRentsData?.rents.forEach(rent => {
                if (moment(pickupDateFull).isBetween(rent.fromDate, rent.expectedReturnDate) ||
                  moment(returnDateFull).isBetween(rent.fromDate, rent.expectedReturnDate)) {
                  overlap += 1;
                }
              });
              // item.totalStock = totalStock - overlap
              updatedStock -= overlap;
              // find formData with itemId, if quantity > item.totalStock, quantity = item.totalStock
              const indexToolToRent = formData.tools.findIndex((x) => (x.toolId === item.id));
              if (indexToolToRent !== -1) {
                const lastQty = formData.tools[indexToolToRent].quantity
                const tempForm = structuredClone(formData);
                if (lastQty > updatedStock) {
                  tempForm.tools[indexToolToRent].quantity = updatedStock
                  setFormData(tempForm);
                }
                // if quantity < 1 , delete the object from array 
                if (lastQty < 1) {
                  tempForm.tools.splice(indexToolToRent, 1);
                  setFormData(tempForm);
                }
              }
              return (
                {
                  ...item,
                  totalStock: updatedStock
                }
              )
            }).map(item => <ToolCard tool={item} formData={formData} setFormData={setFormData} />)
          }
        </>}

      </div>
      {error.tools && (
        <div
          className="bg-red-100 border mb-3 mx-2 border-red-400 text-red-700 px-4 py-3 rounded relative w-full"
          role="alert"
        >
          <span className="block text-center">{error.tools}</span>
        </div>
      )}
    </>
  );
};

export default Step3;
