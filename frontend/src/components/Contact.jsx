import Footer from "./Footer";
import { SiNetlify } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="sm:mt-[65vh] mt-[70vh]  xl:mt-[55vh] lg:mt-[60vh]">
      {/* <div className="flex h-[65vh] sm:h-[61vh] md:h-[58vh] lg:h-[56vh] xl:h-[52vh]  items-center justify-center">
        <Link
          to="paste here G-Drive link"
          target="_blank"
        >
          <button className="font-bold shadow-xl text-[35px] sm:text-[45px] md:text-[50px] text-white bg-red-500 rounded-md p-2 m-2">
            Download Resume
          </button>
        </Link>
      </div> */}
      <div className="flex  text-[60px] flex-wrap justify-evenly items-center m-2">
        <Link to="https://mail.ksingh79798@gmail.com" target="_blank">
          <CgMail />
        </Link>

        <Link to="https://github.com/Ksingh79798" target="_blank">
          <FaSquareGithub />
        </Link>
        <Link
          to="https://www.linkedin.com/in/karan-singh-b861471a4"
          target="_blank"
        >
          <FaLinkedin className="text-[#0059c1]" />
        </Link>

        <Link
          to="https://app.netlify.com/teams/ksingh79798/sites"
          target="_blank"
        >
          <SiNetlify className="text-[#4bc0c0]" />
        </Link>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
