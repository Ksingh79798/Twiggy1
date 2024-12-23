import { FaHeart } from "react-icons/fa";
import { FcCopyright } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="bg-gray-300    my-1 mx-1 flex-col sm:flex-row sm:bg-pink-300  md:bg-green-400 lg:bg-blue-400  xl:bg-yellow-400   shadow-md flex justify-center rounded-lg h-[8vh] sm:h-[10vh]">
      <span className="flex justify-center items-center mt-2 sm:mt-0 ">
        <span className="flex items-center justify-center">Created By</span>
        <span className="text-red-500 m-1">
          <FaHeart />
        </span>
        <span className="font-bold flex items-center justify-center text-gray-700">
          Karan Singh
        </span>
        <span className="m-1">
          <FcCopyright />
        </span>
        <span>2024 </span>
      </span>

      <span className="font-bold  sm:pl-2 flex justify-center items-center text-xl">
        The <span className="m-1 text-orange-600 text-xl">Spicy</span>
        Meal
      </span>
    </div>
  );
};

export default Footer;
