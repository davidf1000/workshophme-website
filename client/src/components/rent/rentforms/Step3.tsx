import { toolsData } from '../../../dummydata/toolsdata';
import { StepProps } from '..//rent.types';
import ToolCard from './ToolCard';

// TODO
//  1. Take 1 card, test create card
//  2. Test for flexwrap multiple card
//  3. Test state of adding and removing item
//  4. Test final formData

const tool = toolsData[0];

const Step3 = ({
  formData,
  setFormData,
  error,
  setError,
}: StepProps): JSX.Element => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-start w-full bg-amber-50">
        <ToolCard tool={tool} />
        <ToolCard tool={tool} />
        <ToolCard tool={tool} />
        {/* <ToolCard tool={tool} />
        <ToolCard tool={tool} />
        <ToolCard tool={tool} />
        <ToolCard tool={tool} /> */}
      </div>
    </>
  );
};

export default Step3;
