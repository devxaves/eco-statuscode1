
import FeatureSection from "./FeatureSection";


import '../App.css';
import '../index.css'
function Landing(props) {
    // useEffect(() => {
    //   AOS.init({
    //     duration: 2000
    //   });
    // }, []);
  
    return (
   <div className="h-max">   
      {/*  <div className="flex flex-col items-center mt-6 lg:mt-20 text-white">
//           <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
//             <b>Art</b>
//             <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
//               {" "}
//               <b>Chain</b>
//             </span>
//           </h1>
//           <p className="mt-10 text-3xl text-center text-white max-w-4xl">
//             Reviving India's Ancient Art and Textile Heritage
//           </p>
  
//           <div className="flex justify-center my-10">
//     <a
//       href="#"
//       className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:from-orange-600 hover:to-orange-900 duration-300"
//       data-aos="fade-right"
//       data-aos-offset="300"
//       data-aos-easing="ease-in-sine"
//       onClick={props.connectMetamask}
//     >
//       Donate to the Artist Community
//     </a> 
    <a
//       href="#"
//       className="py-3 px-4 mx-3 rounded-md border hover:bg-gray-900 hover:border-orange-500 duration-300"
//       // data-aos="fade-left"
//       // data-aos-offset="300"
//       // data-aos-easing="ease-in-sine"
//     >
//       Get Original & Verified Artworks
//     </a>
//   </div>
  
  
//           <div className="flex mt-10 justify-center" data-aos="fade-up">
//             <video
//               autoPlay
//               loop
//               muted
//               className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 mr-10"
//             >
//               <source src="" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//             <video
//               autoPlay
//               loop
//               muted
//               className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 ml-10"
//             >
//               <source src="" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
  
//         <div className="flex flex-col items-center mt-6 lg:mt-20">
//           <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide">
//             <span className="explor1 bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
//               <b>Explore</b>
//             </span>
//           </h1>
//         </div>
  
        
  
        {/* <div className="max-w-7xl mx-auto pt-10 px-6">
          <FeatureSection />
          <Workflow />
          <Testimonials />
        </div> */}<FeatureSection/>
      </div>
    );
  }

export default Landing