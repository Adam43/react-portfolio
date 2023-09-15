import { } from 'react';
import { data } from "../data/data.js";
// import { data2 } from "../data/data2.js";

const Work = () => {

  // projects file
  const majorProjects = data;
  {/*const minorProjects = data2;*/}
  //setProject(data);

  return (
  <div name='work'>
    <div className='work w-full lg:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </h2>
          <p className='py-6 line-thru'>-// Check out some of my recent work</p>
          <span className='text-yellow-400 font-bold'> ⚠️ STILL UNDER CONSTRUCTION ⚠️</span>
          <h3 className='pt-12 font-bold text-2xl flex justify-center'>Major Projects</h3>
        </div>


        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          {/* Gird Item */}
          {majorProjects.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                  <a href={item.docs} target="_blank" rel="noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                        bg-red-500 text-gray-700 font-bold text-lg"
                    >
                      Tech Docs
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>


        </div>
        </div>
        </div>
      );
    };   
    export default Work;

        // {/*Minor Project Section */}
        // <p className='py-12 font-bold text-2xl flex justify-center'>Minor Projects</p>
        // {/* container for projects */}
        // <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

        //   {/* Gird Item */}
        //   {minorProjects.map((item, index) => (
        //     <div
        //       key={index}
        //       style={{ backgroundImage: `url(${item.image})` }}
        //       className="shadow-lg shadow-[#040c16] group container rounded-md 
        //       flex justify-center text-center items-center mx-auto content-div"
        //     >
        //       {/* Hover effect for images */}
        //       <div className="opacity-0 group-hover:opacity-100 ">
        //         <span className="text-2xl font bold text-white tracking-wider ">
        //           {item.name}
        //         </span>
        //         <div className="pt-8 text-center ">
        //           {/* eslint-disable-next-line */}
        //           <a href={item.github} target="#">
        //             <button
        //               className="text-center rounded-lg px-4 py-3 m-2
        //               bg-red-500 text-gray-700 font-bold text-lg"
        //             >
        //               Code
        //             </button>
        //           </a>
        //           {/* eslint-disable-next-line */}
        //           <a href={item.live} target="#">
        //             <button
        //               className="text-center rounded-lg px-4 py-3 m-2
        //               bg-red-500 text-gray-700 font-bold text-lg"
        //             >
        //               Live
        //             </button>
        //           </a>
        //           <a href={item.docs} target="#" rel="noreferrer">
        //             <button
        //               className="text-center rounded-lg px-4 py-3 m-2
        //                 bg-red-500 text-gray-700 font-bold text-lg"
        //             >
        //             Tech Docs
        //             </button>
                  
        //           </a>
        //         </div>
        //       </div>
        //     </div>
        //   ))}


        // </div>


    
