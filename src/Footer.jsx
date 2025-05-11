import { LinkedIn, Twitter, Email, ArrowUpward } from '@mui/icons-material';

 export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-600 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
  
        <div className="text-lg font-semibold mb-4 md:mb-0">
          SoftSell © {new Date().getFullYear()}
        </div>

       
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-gray-200">Privacy Policy</a>
          <a href="#" className="hover:text-gray-200">Terms</a>
          <a href="#" className="hover:text-gray-200">Contact</a>
        </div>

     
        <div className="flex space-x-4 items-center">
          <a href="#" className="hover:text-gray-200">
            <LinkedIn fontSize="small" />
          </a>
          <a href="#" className="hover:text-gray-200">
            <Twitter fontSize="small" />
          </a>
          <a href="mailto:info@softsell.com" className="hover:text-gray-200">
            <Email fontSize="small" />
          </a>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="bg-white text-blue-600 p-1 rounded-full hover:bg-gray-100 transition"
            title="Back to top"
          >
            <ArrowUpward fontSize="small" />
          </button>
        </div>
      </div>
    </footer>
  );
}


