import React from "react";
import "./App.css";

export default function Category({finalCategory, setCatName}) {
 let cat = finalCategory.map((v,i)=>{
  return(
    <li onClick={()=>setCatName(v)} key={i} className="bg-[#ccc] p-[7px] cursor-pointer font-serif font-semibold mb-2">
          {v.name}
        </li>
  )

 })
  return (
    <div className="catMain">
      <h3 className="proCat text-[25px] font-[500] p-[10px]">Product Category</h3>

      <ul >
        {cat}
        
      </ul>
    </div>
  );
  
}
