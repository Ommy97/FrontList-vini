import React from "react";
import "./modal.css";

 
export default function Modal({closeModal, immagine, titolo, denominazione, vitigno, stato, regione, produttore}) {
  return (
   <div className="modalBackground" >
   <div className="modalContainer">
    <div className="titleCloseBtn">
   <button onClick={()=>closeModal(false)}>X</button>
   </div>
   <div className="body">
    <div className="self-center">
  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg">
    <img className=" w-30 h-40 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={immagine} alt="" />
    <div className="p-10 flex flex-col justify-start">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{titolo}</h5>
      <p className="text-gray-600 text-base mb-3">{produttore}</p>
      <hr></hr>
      <p className="text-gray-700 text-base mb-2 mt-2">Provenienza: {stato}</p>
      <p className="text-gray-700 text-base mb-2">Regione: {regione}</p>
      <p className="text-gray-700 text-base mb-2">Denominazione: {denominazione}</p>
      <p className="text-gray-700 text-base mb-2">Vitigno: {vitigno}</p>
    </div>
    </div>
   </div>
  </div>
  </div>
  </div>
   
  );
}