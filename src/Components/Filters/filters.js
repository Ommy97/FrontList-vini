import React from "react";
import { Fragment, useState} from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

function Buttons(props){
const [openFilter, setOpenFilter]= useState(false);
const [openAccordion, setOpenAccordion]= useState(0);

const handleOpen = (value) => {
    setOpenAccordion(openAccordion === value ? 0 : value);
  };

const onButtonClick=()=>{
    setOpenFilter(true)
};


    return(
        <div className="mt-3 flex items-center justify-center">
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg className="inline w-4 h-4  dark:text-white" fill="none" stroke="currentColor" viewBox="1 1 26 26" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
TORNA</button>

        <button onClick={()=>onButtonClick()} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "> <svg className=" inline w-4 h-4" fill="none" stroke="currentColor" viewBox="1 1 26 26" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>FILTRI</button>

        {openFilter && (
       <Transition.Root show={openFilter} as={Fragment}>
       <Dialog as="div" className="relative z-10" onClose={setOpenFilter}>
         <Transition.Child
           as={Fragment}
           enter="ease-in-out duration-500"
           enterFrom="opacity-0"
           enterTo="opacity-100"
           leave="ease-in-out duration-500"
           leaveFrom="opacity-100"
           leaveTo="opacity-0"
         >
           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
         </Transition.Child>
 
         <div className="fixed inset-0 overflow-hidden">
           <div className="absolute inset-0 overflow-hidden">
             <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
               <Transition.Child
                 as={Fragment}
                 enter="transform transition ease-in-out duration-500 sm:duration-700"
                 enterFrom="translate-x-full"
                 enterTo="translate-x-0"
                 leave="transform transition ease-in-out duration-500 sm:duration-700"
                 leaveFrom="translate-x-0"
                 leaveTo="translate-x-full"
               >
                 <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                   <Transition.Child
                     as={Fragment}
                     enter="ease-in-out duration-500"
                     enterFrom="opacity-0"
                     enterTo="opacity-100"
                     leave="ease-in-out duration-500"
                     leaveFrom="opacity-100"
                     leaveTo="opacity-0"
                   >
                     <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                       <button
                         type="button"
                         className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                         onClick={() => setOpenFilter(false)}
                       >
                         <span className="sr-only">Close panel</span>
                         <XIcon className="h-6 w-6" aria-hidden="true" />
                       </button>
                     </div>
                   </Transition.Child>
                   <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                     <div className="px-4 sm:px-6">
                       <Dialog.Title className="text-lg font-medium text-gray-900"> Filtra Per </Dialog.Title>
                     </div>
                     <div className="relative mt-6 flex-1 px-4 sm:px-6">
                       {/* Replace with your content */}
                       <Fragment>
      <Accordion open={openAccordion === 1} onClick={() => handleOpen(1)}>
        <AccordionHeader>Regione</AccordionHeader>
        <AccordionBody>
        {props.regione.map((regione) =>(
             <div className="text-lg font-medium text-gray-600" ><button onClick={ ()=> {props.handleFilter(regione);setOpenFilter(false)}}>{regione}</button></div>
        ))}
         
        </AccordionBody>
      </Accordion>
      <Accordion open={openAccordion === 2} onClick={() => handleOpen(2)}>
        <AccordionHeader>Vitigno</AccordionHeader>
        <AccordionBody>  
        {props.vitigno.map((vitigno) =>(
             <div className="text-lg font-medium text-gray-600" ><button onClick={ ()=> {props.handleFilter(vitigno);setOpenFilter(false)}}>{vitigno}</button></div>
        ))} 
        </AccordionBody>
      </Accordion>
      <Accordion open={openAccordion === 3} onClick={() => handleOpen(3)}>
        <AccordionHeader>Denominazione</AccordionHeader>
        <AccordionBody>
        {props.denominazione.map((denominazione) =>(
             <div className="text-lg font-medium text-gray-600" ><button onClick={ ()=> {props.handleFilter(denominazione);setOpenFilter(false)}}>{denominazione}</button></div>
        ))}
        </AccordionBody>
      </Accordion>
    </Fragment>
                       {/* /End replace */}
                     </div>
                   </div>
                 </Dialog.Panel>
               </Transition.Child>
             </div>
           </div>
         </div>
       </Dialog>
     </Transition.Root>
      )}
        </div>
    )
}

export default Buttons;

