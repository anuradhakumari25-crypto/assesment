// import React, { useState } from 'react'

// function GreadeCalculater() {
//     const[hardness,setHardness]=useState("");
//     const[carbon,setCarbon]=useState("");
//     const[tensile,setTensile]=useState("");
//     const[grade,setGrade]=useState("")

//     const calculateGreade = (e)=>{
//         e.preventDefault();
//         const h = Number(hardness);
//         const c = Number(carbon);
//         const t = Number(tensile);


//         const condition1 = h > 50;
//         const condition2 = c > 0.7;
//         const condition3 = t > 5600;

//         if(condition1 && condition2 && condition3){
//             setGrade("Grade 10");
//         }else if (condition1 && condition2){
//             setGrade("Grade 9")
//         }else if (condition2 && condition3){
//             setGrade("Grade 8")
//         }else if (condition1 && condition3){
//             setGrade("Grade 7")
//         }else{
//             setGrade("Grade 0")
//         }
//     }
//   return (
//     <div>
//         <h1>
//             Steel Grade calculator
//         </h1>

//         <form onSubmit={calculateGreade}>
//             <div>
//                 <label>Rockwell Hardness</label>
//                 <input
//                 type='number'
//                 value={hardness}
//                 onChange={(e)=>setHardness(e.target.value)}/>
//                 </div>

//                 <div>
//                 <label>Carbon Content</label>
//                 <input
//                 type='number'
//                 step= "0.1"
//                 value={carbon}
//                 onChange={(e)=>setCarbon(e.target.value)}/>
//                 </div>


//                  <div>
//                 <label>Tensile Strength</label> 
//                 <input
//                 type='number'
//                 value={tensile}
//                 onChange={(e)=>setTensile(e.target.value)}/>
//                 </div>
//                 <button type='submit'>Calculate Grade</button>
//         </form>

//         {grade &&(
//             <h2>
//                 Result:{grade}
//             </h2>
//         )}
//     </div>
//   )
// }

// export default GreadeCalculater