import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepRentProps } from './rent.types';

const steps = [
    'Data diri',
    'Waktu peminjaman',
    'Barang yang dipinjam',
    'Konfirmasi peminjaman',
];

const StepRent = ({ step }: StepRentProps): JSX.Element => {
    return (
        <>
            <Stepper activeStep={step} alternativeLabel
                sx={{
                    width: "auto",
                    "& .MuiStepConnector-line": {
                        marginTop: "5px",
                        borderTopWidth: "4px",
                    },
                    "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
                        borderColor: "#f4c800",
                    },
                    "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
                        borderColor: "#f4c800",
                    },
                    "& .MuiStepIcon-root.Mui-active": {
                        color: "#f4c800",
                        fontSize: "35px",
                    },
                    "& .MuiStepIcon-root.Mui-completed": {
                        color: "#f4c800",
                        fontSize: "35px",
                    },
                    "& .MuiStepIcon-root": {
                        color: "gray",
                        fontSize: "35px",
                    },
                }}
            >
                {steps.map((label) => (
                    <Step className="" key={label}>
                        <StepLabel >
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </>
    )
}


export default StepRent;