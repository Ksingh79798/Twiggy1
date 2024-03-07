import about from "../assets/about.jpg";
import Footer from "../components/Footer"
const About = () => {
  return (
    // <div className="">
    //   <div className="mt-[10vw] flex flex-col justify-between md:mt-[8vh] bg-blue-400 md:mb-[16vw] lg:mb-[14vw] md:grid grid-cols-12">
    //     <div className=" font-bold col-start-2 col-span-5 flex ml-5 flex-col">
    //       <span className="bg-red-300 w-fi p-2 text-5xl font-serif  text-gray-700 ">
    //         Welcome to <br /> The world of
    //       </span>
    //       <span className="bg-orange-400  w-fit justify-center text-white mt-4 rounded-xl p-2 shadow-md  text-5xl">
    //         Tasty & Fresh Food
    //       </span>

    //       <span className="text-gray-600 p-2 text-lg italic">
    //         {`"Better you will feel if you eat a`}{" "}
    //         <span className="text-orange-600">The Spicy Meal</span>{" "}
    //         {`healthy food"`}
    //       </span>
    //     </div>

    //     <div className=" flex justify-center md:ml-2 mt-2 md:m-0 col-span-5 ">
    //       <img
    //         src={about}
    //         alt="TastyFoodImage"
    //         className=" md:h-[25vw] rounded-xl shadow-md"
    //       />
    //     </div>
    //   </div>
    //   <div>
    //     <Footer />
    //   </div>
    // </div>

    <div className="mt-10">
      <div className="flex flex-wrap flex-col md:flex-row justify-evenly items-center h-[70vh] lg:h-[62vh]">
        <div className=" font-bold w-[250px] sm:w-[300px] md:w-[330px] lg:w-[380px] flex flex-col">
          <h1 className="font-serif w-fit text-gray-700 text-[35px] sm:text-[45px] md:text-[50px]">
            Welcome to <br /> The world of
          </h1>
          <h1 className="bg-orange-500  text-[35px] sm:text-[45px] md:text-[50px]  w-fit justify-center text-white  rounded-xl p-2 shadow-md">
            Tasty & Fresh Food
          </h1>

          <h3 className="text-gray-600 p-2  italic">
            {`"Better you will feel if you eat a`}{" "}
            <span className="text-orange-500">The Spicy Meal</span>{" "}
            {`healthy food"`}
          </h3>
        </div>

        <div className=" flex flex-wrap items-center justify-center col-span-5 ">
          <img
            src={about}
            alt="TastyFoodImage"
            className="  w-[250px] sm:w-[300px] md:w-[330px] lg:w-[380px] xl:w-[500px]"
          />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};
export default About;
