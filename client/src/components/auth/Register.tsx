import TopCover from "../dashboard/TopCover";

const Register = (): JSX.Element => {
  return (<div className="flex flex-col h-screen justify-between">
    <TopCover title='Admin Register' desc='Register page for admin account' />
    <div className="bg-white h-full">
      <h1 className="font-sans text-4xl font-bold font-black animate-in slide-in-from-left">
        Register Page
      </h1>
    </div>
  </div>);
}
export default Register;
