import { useState } from 'react';
import { getCurrentDateFormatted } from '../../actions/utils';
import Footer from '../Footer';
import NavBar from '../Navbar';
import { RentFormData, RentFormError } from './rent.types';
import Step1 from './rentforms/Step1';
import Step2 from './rentforms/Step2';
import Step3 from './rentforms/Step3';
import Step4 from './rentforms/Step4';
import StepFinished from './rentforms/StepFinished';
import StepRent from './StepRent';
import moment from 'moment';

const Rent = (): JSX.Element => {
  const [step, setStep] = useState<number>(0);
  const [formError, setFormError] = useState<RentFormError>({
    name: '',
    nim: '',
    organisation: '',
    phone: '',
    line: '',
    pickupDate: '',
    returnDate: '',
    tools: '',
  });
  const [formData, setFormData] = useState<RentFormData>({
    name: '',
    nim: '',
    organisation: '',
    phone: '',
    line: '',
    pickupDate: moment(getCurrentDateFormatted()).format('YYYY-MM-DD'),
    pickupHour: 6,
    pickupMinute: 0,
    returnDate: moment(getCurrentDateFormatted()).format('YYYY-MM-DD'),
    returnHour: 6,
    returnMinute: 0,
    tools: [],
    totalPrice: 0,
  });
  const submitForm = () => {
    console.log('Submit Form');
    console.log(formData);
    // if success
    setStep(4);
  };
  const nextStep = () => {
    if (step === 3) {
      submitForm();
    }
    setStep((step) => (step < 3 ? step + 1 : step));
  };
  const prevStep = () => {
    setStep((step) => (step > 0 ? step - 1 : step));
  };
  return (
    <>
      <div className="flex flex-col min-h-screen justify-start bg-ws-orange">
        <NavBar selected="rent" />
        <div className="flex  h-full w-full mb-auto">
          <div className="flex flex-col max-w-7xl justify-start mx-auto px-6">
            <h1 className="font-sans text-4xl font-semibold text-gray-800 mx-auto mt-4 mb-4">
              Rent
            </h1>
            <p className="font-sans text-lg text-gray-800 text-justify max-w-3xl mx-auto">
              Workshop HME menyediakan berbagai macam peralatan untuk melengkapi
              kebutuhan kegiatan maupun acara anda.
            </p>
            <div className="container max-w-7xl bg-slate-50 rounded-lg my-4">
              <div className="flex flex-col justify-start items-center my-4 relative w-full bg-slate-100">
                <h2 className="font-sans font-semibold text-gray-800 text-xl">
                  Form Peminjaman Alat
                </h2>
                {step === 4 ? (
                  <StepFinished />
                ) : (
                  <>
                    <div className="flex ml-10 mr-8 mb-4 mt-10">
                      <StepRent step={step} />
                    </div>
                    <hr />
                    <div className="flex flex-col justify-between items-center mb-2 w-full bg-slate-200">
                      {step === 0 && (
                        <Step1
                          formData={formData}
                          setFormData={setFormData}
                          error={formError}
                          setError={setFormError}
                        />
                      )}
                      {step === 1 && (
                        <Step2
                          formData={formData}
                          setFormData={setFormData}
                          error={formError}
                          setError={setFormError}
                        />
                      )}
                      {step === 2 && (
                        <Step3
                          formData={formData}
                          setFormData={setFormData}
                          error={formError}
                          setError={setFormError}
                        />
                      )}
                      {step === 3 && (
                        <Step4
                          formData={formData}
                          setFormData={setFormData}
                          error={formError}
                          setError={setFormError}
                        />
                      )}
                    </div>
                  </>
                )}

                {step !== 4 && (
                  <>
                    <div className="flex flex-row justify-center items-end my-2 gap-7">
                      <button
                        onClick={() => {
                          prevStep();
                        }}
                        className={`${
                          step === 0 && 'invisible '
                        } bg-ws-orange text-gray-800 hover:text-gray-50 font-bold py-2 px-4 rounded-lg`}
                      >
                        Previous
                      </button>
                      <button
                        onClick={() => {
                          nextStep();
                        }}
                        className={` bg-ws-orange text-gray-800 hover:text-gray-50 font-bold py-2 px-4 rounded-lg`}
                      >
                        {step === 3 ? 'Submit' : 'Next'}
                      </button>
                    </div>
                    <div className="flex justify-center items-end mt-2">
                      <button className=" bg-gray-300 text-gray-800 hover:text-gray-100 font-bold py-2 px-4 rounded-lg">
                        Panduan Peminjaman
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Rent;
