import { useEffect, useState } from 'react';
import { toolsData } from '../../../dummydata/tools.data';
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
  const [toolsFetch, setToolsFetch] = useState<Tool[]>([]);
  useEffect(() => {
    console.log('formData date changed, fetching new tool stock !');
    console.log('Checking between new tools and current formData.tools');
    setToolsFetch(
      toolsData.filter((item) => item.totalStock > 0 && item.activated),
    );
    // fetch new tools
    // deepcopy formdata.tools
    // Using filter on formdata.tools
    // if formData.tools qty > (tool.stock - availibility) -> qty = (tool.stock - availibility)
    // if formData.tools qty < 1, remove the object
  }, [
    formData.pickupDate,
    formData.pickupHour,
    formData.pickupMinute,
    formData.returnDate,
    formData.returnHour,
    formData.returnMinute,
  ]);
  return (
    <>
      <div className="flex flex-wrap justify-center items-start w-full px-4">
        {error.tools && (
          <div
            className="bg-red-100 border mb-3 mx-2 border-red-400 text-red-700 px-4 py-3 rounded relative w-full"
            role="alert"
          >
            <span className="block text-center">{error.tools}</span>
          </div>
        )}
        {toolsFetch.map((item) => (
          <ToolCard tool={item} formData={formData} setFormData={setFormData} />
        ))}
      </div>
    </>
  );
};

export default Step3;
