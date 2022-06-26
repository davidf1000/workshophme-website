import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StepFinished = (): JSX.Element => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            <svg
                className="w-24 text-green-400 mt-16 mb-6 animate-bounce fill-mode-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <path
                    fill="currentcolor"
                    d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"
                />
            </svg>
            <h2 className="font-sans font-semibold text-gray-800 text-xl mt-10">
                Pendaftaran peminjaman alat berhasil !
            </h2>
            <p className="text-lg text-gray-800 my-1 mb-36">
                Terimakasih telah menggunakan layanan peminjaman Workshop HME.
            </p>
            <br />
            <p className="text-md font-semibold">Redirecting soon.....</p>
        </>
    );
};

export default StepFinished;