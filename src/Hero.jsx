import Button from '@mui/material/Button';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

export default function Hero() {
    return (
        <div className="heroContent min-h-[60vh] bg-sky-500 flex flex-col justify-center items-center text-center px-4 py-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-4">Sell Your Unused</h1>
            <p className="text-3xl md:text-5xl font-bold text-white mt-2">Software Licenses</p>
            <p className="text-white mt-4 text-sm md:text-base max-w-xl">
                Get instant valuation and cash for your old licenses
            </p>
            <div className="mt-6">
                <Button variant="contained" endIcon={<RequestQuoteIcon />}>
                    Get a Quote
                </Button>
            </div>
        </div>
    );
}

