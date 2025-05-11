import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function HowItWorks() {
    return (
        <div className="howIt min-h-[30vh] text-center mt-12 px-4 border-b-2 border-b-gray-500 ">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex justify-center items-center gap-2">
                How It Works? <HomeRepairServiceIcon fontSize="large" />
            </h2>

            <div className="images flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="image flex flex-col items-center">
                    <InsertDriveFileIcon fontSize="large" className="text-blue-600" />
                    <p className="mt-2 font-medium">Upload License</p>
                </div>

                <div className="hidden md:block text-3xl"><ArrowCircleRightIcon /></div>

              
                <div className="image flex flex-col items-center">
                    <FactCheckIcon fontSize="large" className="text-blue-600" />
                    <p className="mt-2 font-medium">Get Valuation</p>
                </div>

                <div className="hidden md:block text-3xl"><ArrowCircleRightIcon /></div>

                
                <div className="image flex flex-col items-center">
                    <CurrencyRupeeIcon fontSize="large" className="text-blue-600" />
                    <p className="mt-2 font-medium">Get Paid</p>
                </div>
            </div>
        </div>
    );
}
