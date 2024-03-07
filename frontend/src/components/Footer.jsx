import { FaHeart } from "react-icons/fa";
import { FcCopyright } from "react-icons/fc";


const Footer = () => {
  return (
    <div className="bg-gray-200  shadow-md flex justify-center rounded-lg h-[10vh]">
      <span className="flex justify-center items-center">
        <span>Created By</span>
        <span className="text-red-500 m-1">
          <FaHeart />
        </span>
        <span className="font-bold text-gray-700">Karan Singh</span>
        <span className="m-1">
          <FcCopyright />
        </span>
        <span>2024 </span>
        <span className="font-bold m-1 text-xl">
          The <span className="m-1 text-orange-600 text-xl">Spicy</span>
          Meal
        </span>
      </span>
    </div>
  );
};

export default Footer;
