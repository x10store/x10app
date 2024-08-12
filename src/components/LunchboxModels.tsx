// // // import React from 'react'
// // // import GLBViewer from './GLBViewer'

// // // type Props = {}

// // // const PartsModels = (props: Props) => {
// // //     return (
// // //         <div className='m-[5%] h-screen'>
// // //             <div className='text-3xl bold text-black font-sans text-center'>Parts of the X10 Container.</div>
// // //             <div className='grid grid-cols-3 h-full w-full gap-2'>
// // //                 <div className='flex h-full w-full justify-center border-[#aaa]  border rounded-lg border-4'>
// // //                     <GLBViewer
// // //                         modelPath="/360-base.glb"
// // //                         scale={[3, 3, 3]}
// // //                     />
// // //                 </div>
// // //                 <div className='flex h-full w-full justify-center border-[#aaa]  border rounded-lg border-4'>
// // //                     <GLBViewer
// // //                         modelPath="/360-casing.glb"
// // //                         scale={[3, 3, 3]}
// // //                     />
// // //                 </div>
// // //                 <div className='flex h-full w-full justify-center border-[#aaa]  border rounded-lg border-4'>
// // //                     <GLBViewer
// // //                         modelPath="/360-cbase.glb"
// // //                         scale={[3, 3, 3]}
// // //                     />
// // //                 </div>
// // //                 <div className='flex h-full w-full justify-center border-[#aaa]  border rounded-lg border-4'>
// // //                     <GLBViewer
// // //                         modelPath="/360-cextender.glb"
// // //                         scale={[3, 3, 3]}
// // //                     />
// // //                 </div>
// // //                 <div className='flex h-full w-full justify-center border-[#aaa]  border rounded-lg border-4'>
// // //                     <GLBViewer
// // //                         modelPath="/360-container.glb"
// // //                         scale={[3, 3, 3]}
// // //                     />
// // //                 </div>
// // //                 <div className='flex h-full w-full justify-center border-[#aaa]  border rounded-lg border-4'>
// // //                     <GLBViewer
// // //                         modelPath="/360-cseperator.glb"
// // //                         scale={[3, 3, 3]}
// // //                     />
// // //                 </div>
// // //                 <div className='flex h-full w-full justify-center border-[#aaa]  border rounded-lg border-4'>
// // //                     <GLBViewer
// // //                         modelPath="/360-lunchbox.glb"
// // //                         scale={[3, 3, 3]}
// // //                     />
// // //                 </div>
// // //                 <div className='flex h-full w-full justify-center border-[#aaa]  border rounded-lg border-4'>
// // //                     <GLBViewer
// // //                         modelPath="/360-seperator.glb"
// // //                         scale={[3, 3, 3]}
// // //                     />
// // //                 </div>
// // //                 <div className='flex h-full w-full justify-center border-[#aaa]  border rounded-lg border-4'>
// // //                     <GLBViewer
// // //                         modelPath="/360extender.glb"
// // //                         scale={[3, 3, 3]}
// // //                     />
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     )
// // // }

// // // export default PartsModels

// // import React, { useState, useRef, useEffect } from 'react';
// // import GLBViewer from './GLBViewer';
// // import { motion } from 'framer-motion';
// // import { FaChevronRight } from "react-icons/fa";
// // import { FaChevronLeft } from "react-icons/fa";

// // const models = [
// //   { path: "/360-base.glb", name: "Base" },
// //   { path: "/360-casing.glb", name: "Casing" },
// //   { path: "/360-cbase.glb", name: "C-Base" },
// //   { path: "/360-cextender.glb", name: "C-Extender" },
// //   { path: "/360-container.glb", name: "Container" },
// //   { path: "/360-cseperator.glb", name: "C-Separator" },
// //   { path: "/360-lunchbox.glb", name: "Lunchbox" },
// //   { path: "/360-seperator.glb", name: "Separator" },
// //   { path: "/360extender.glb", name: "Extender" },
// // ];

// // const PartsModels = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const containerRef = useRef(null);

// //   useEffect(() => {
// //     const container = containerRef.current;
// //     if (container) {
// //       const scrollPosition = currentIndex * (container.offsetWidth / 3);
// //       container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
// //     }
// //   }, [currentIndex]);

// //   const handlePrev = () => setCurrentIndex(prev => Math.max(0, prev - 1));
// //   const handleNext = () => setCurrentIndex(prev => Math.min(models.length - 1, prev + 1));

// //   return (
// //     <div className="h-screen bg-gray-100 p-8">
// //       <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
// //         Parts of the X10 Container
// //       </h1>
// //       <div className="relative h-3/4">
// //         <div
// //           ref={containerRef}
// //           className="flex overflow-x-hidden h-full"
// //         >
// //           {models.map((model, index) => (
// //             <motion.div
// //               key={model.path}
// //               className="flex-none w-1/3 px-4"
// //               initial={{ opacity: 0.5, scale: 0.8 }}
// //               animate={{
// //                 opacity: index === currentIndex ? 1 : 0.5,
// //                 scale: index === currentIndex ? 1 : 0.8,
// //               }}
// //               transition={{ duration: 0.3 }}
// //             >
// //               <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden">
// //                 <GLBViewer modelPath={model.path} scale={[3, 3, 3]} />
// //                 <div className="p-4 bg-gray-800 text-white text-center">
// //                   <h2 className="text-xl font-semibold">{model.name}</h2>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //         <button
// //           onClick={handlePrev}
// //           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
// //           disabled={currentIndex === 0}
// //         >
// //           <FaChevronLeft className="h-6 w-6 text-gray-800" />
// //         </button>
// //         <button
// //           onClick={handleNext}
// //           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
// //           disabled={currentIndex === models.length - 1}
// //         >
// //           <FaChevronRight className="h-6 w-6 text-gray-800" />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PartsModels;

// import React, { useState, useRef, useEffect } from 'react';
// import GLBViewer from './GLBViewer';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaChevronRight } from "react-icons/fa";
// import { FaChevronLeft } from "react-icons/fa";

// const models = [
//   { path: "/360-base.glb", name: "Base" },
//   { path: "/360-casing.glb", name: "Casing" },
//   { path: "/360-cbase.glb", name: "C-Base" },
//   { path: "/360-cextender.glb", name: "C-Extender" },
//   { path: "/360-container.glb", name: "Container" },
//   { path: "/360-cseperator.glb", name: "C-Separator" },
//   { path: "/360-lunchbox.glb", name: "Lunchbox" },
//   { path: "/360-seperator.glb", name: "Separator" },
//   { path: "/360extender.glb", name: "Extender" },
// ];

// const PartsModels = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => setCurrentIndex(prev => (prev - 1 + models.length) % models.length);
//   const handleNext = () => setCurrentIndex(prev => (prev + 1) % models.length);

//   return (
//     <div className="h-screen p-8 flex flex-col">
//       <h1 className="text-4xl font-bold text-sky-800 text-center mb-8">
//         Parts of the X10 Container
//       </h1>
//       <div className="flex-grow flex items-center justify-center">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             className="bg-white rounded-xl shadow-lg w-[60%] h-[70%]"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.3 }}
//           >
//             <GLBViewer 
//               modelPath={models[currentIndex].path} 
//               scale={[5, 5, 5]} 
//               isActive={true}
//             />
//             <div className="p-4 bg-sky-800 text-white text-center rounded-md">
//               <h2 className="text-xl font-semibold">{models[currentIndex].name}</h2>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//         <button
//           onClick={handlePrev}
//           className="absolute left-4 bg-white p-2 rounded-full shadow-lg hover:bg-sky-100 transition-colors"
//         >
//           <FaChevronLeft className="h-8 w-8 text-sky-800" />
//         </button>
//         <button
//           onClick={handleNext}
//           className="absolute right-4 bg-white p-2 rounded-full shadow-lg hover:bg-sky-100 transition-colors"
//         >
//           <FaChevronRight className="h-8 w-8 text-sky-800" />
//         </button>
//       </div>
//       <div className="flex justify-center mt-8">
//         {models.map((_, index) => (
//           <div
//             key={index}
//             className={`w-3 h-3 rounded-full mx-1 ${
//               index === currentIndex ? 'bg-sky-600' : 'bg-sky-300'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PartsModels;

import React from 'react';
import GLBViewer from './GLBViewer';
import { Navigate, useNavigate } from 'react-router-dom';

const models = [
  { path: "/360-base.glb", name: "Base" },
  { path: "/360extender.glb", name: "Extender" },
  { path: "/360-seperator.glb", name: "Separator" },
  { path: "/360-seperator.glb", name: "Top Cover" },
  { path: "/360-casing.glb", name: "Holder" },
  // { path: "/360-cextender.glb", name: "Extender" },
  // { path: "/360-cbase.glb", name: "C-Base" },
  // { path: "/360-container.glb", name: "Container" },
  // { path: "/360-cseperator.glb", name: "C-Separator" },
];

const LunchboxModels = () => {

  const navigate = useNavigate();

  return (
    <div className="select-none min-h-screen bg-gradient-to-br from-sky-100 to-indigo-100 p-8">
      <button
        onClick={() => navigate("/")}
        className='bg-black text-white w-fit px-4 py-2 rounded-md font-semibold'>Back</button>

      <h1 className="text-3xl font-bold text-sky-800 text-center mb-6">
        Parts of Lunchbox
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {models.map((model, index) => (
          <div
            key={model.path}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <div className="h-64 lg:h-72">
              <GLBViewer
                modelPath={model.path}
                scale={[3, 3, 3]}
                isActive={true}
              />
            </div>
            <div className="p-4 bg-sky-800 text-white">
              <h2 className="text-xl font-semibold text-center">{model.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LunchboxModels;