import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import GppGoodIcon from '@mui/icons-material/GppGood';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import Button from '@mui/material/Button';

export default function WhyChooseUS() {
  return (
    <div className="why-choose min-h-[40vh] flex flex-col justify-center bg-gray-50 items-center px-4 py-12 border-b-2 border-b-black">
      
      {/* Heading */}
      <div className="heading text-center mb-8">
        <h3 className="text-2xl md:text-4xl font-semibold border-b-2 border-b-black inline-block pb-2">
          Why Choose Us
        </h3>
      </div>

      {/* Cards */}
      <div className="cards flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 max-w-4xl">
        
        {/* First Button */}
        <div className="button">
          <Button 
            size="large" 
            variant="outlined" 
            startIcon={<AssuredWorkloadIcon fontSize="large" />} 
            className="min-w-[200px]"
          >
            Maximize Returns
          </Button>
        </div>

        {/* Second Button */}
        <div className="button">
          <Button 
            size="large" 
            variant="outlined" 
            startIcon={<GppGoodIcon fontSize="large" />} 
            className="min-w-[200px]"
          >
            Secure Transactions
          </Button>
        </div>

        {/* Third Button */}
        <div className="button">
          <Button 
            size="large" 
            variant="outlined" 
            startIcon={<PersonOutlineIcon fontSize="large" />} 
            className="min-w-[200px]"
          >
            Expert Support
          </Button>
        </div>

        {/* Fourth Button */}
        <div className="button">
          <Button 
            size="large" 
            variant="outlined" 
            startIcon={<HeadsetMicIcon fontSize="large" />} 
            className="min-w-[200px]"
          >
            Call Support
          </Button>
        </div>

      </div>
    </div>
  );
}
