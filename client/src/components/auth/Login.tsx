import TopCover from "../dashboard/TopCover";

const Login = (): JSX.Element => {
  return (<div className="flex flex-col h-screen justify-between">
    <TopCover title='Admin Login' desc='Login page for admin dashboard' />
    <div className="bg-white h-full">
      <h1 className="font-sans text-4xl font-bold font-black animate-in slide-in-from-left">
        Login Page
      </h1>
    </div>
  </div>);
}
export default Login;
