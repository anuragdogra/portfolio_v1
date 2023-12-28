import MyImage from "../Assets/pic1.jpg"
const Home = ()=>{
  return (
    
    <div name = "home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg min-w-screen-sm mx-auto flex flex-col items-center justify-center h-full px-2 md:flex-row space-x-4">
            <div className="flex flex-col justify-center h-full mx-auto     ">
                <h2 className="text-4xl font-Heading sm:text-7xl text-white">
                    I'm a Software Developer
                </h2>
                <p className="text-gray-500 py-4 max-w-md text-justify" >
                A versatile software engineer with expertise in HTML, React.js, Tailwind CSS, and C++. Successfully completed projects in C++ and demonstrated proficiency in utilizing Google Test for effective software testing. Proven ability to excel under pressure

                </p>
                <div>
                    <button className=" group  animate-border  rounded-md text-white bg-white bg-gradient-to-r from-red-300 via-purple-500 to-blue-500 bg-[length:400%_400%] px-4 py-2 my-1">
                        Portfolio
                        <span className="px-3   "><i className="fa-solid group-hover:rotate-90 duration-300 fa-angle-right"></i>
                        </span>     
                    </button>
                </div>
            </div>
            <div className="items-center  " >
                <img className="rounded-2xl  overflow-hidden mx-auto  w-1/2 transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg  " src={MyImage} alt="myImage"/>
            </div>
        </div>
    </div>
  )
}
export default Home;