import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Buttons from '../Filters/filters';



function List ({getData, open}){
    const [data, setData] = useState([]);
    const [filter, setFilter] =useState([]);
    const [selectedFilter, setSelectedFilter]= useState(false)
   
  useEffect(() => {
    loadUserData()
  },[filter]);

  const loadUserData = async () =>{
    return await axios.get(`http://localhost:3001/vini?q=${filter}`)
    .then((response)=> setData(response.data))
    .catch((err)=>console.log(err));
  };

  const denominazioneCategoryData = () =>{
    return [... new Set(data.map((i) =>i.denominazione))]
  }

  const regioneCategoryData = () =>{
    return [... new Set(data.map((i) =>i.regione))]
  }

  const vitignoCategoryData = () =>{
    return [... new Set(data.map((i) =>i.vitigno))]
  }

  const handleFilter= async (value)=>{
  setFilter(value)
  setSelectedFilter(true)
  };


    return(
       <>
        <div> 
          <Buttons 
            handleFilter={handleFilter} 
            denominazione={denominazioneCategoryData()} 
            regione={regioneCategoryData()} 
            vitigno={vitignoCategoryData()} /> 
        </div>
          {selectedFilter && <div className='"mt-5 mb-5 flex items-center justify-center'>
          <button type="button" className="inline-block px-4 py-1.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
           onClick={()=>{setFilter([]); setSelectedFilter(false)}}>
            {filter}
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline ml-1" fill="none" viewBox="1 1 26 26" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>
          </button>
        </div>}
        <div className="bg-white italic">
         <div className="max-w-2xl bg-gray-100 mx-auto px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
           {data.length=== 0 ?(<div> Data not Found</div>): (
            data.map((item,index) => ( 
            <div key={index} className="w-full grid grid-cols-4 grid-rows-1 h-60 bg-white border-solid border-1 border-grey-100 rounded-md  mb-10 cursor-pointer " >
              <div className='col-span-1 grid justify-items-center' >
              <img className="h-40 w-30 self-center " src= {item.immagine} alt=""/>
              </div>
              <div className="grid grid-cols-1 gap-2  justify-items-start content-center">
                <div className="text-gray-900 text-xl font-medium">{item.titolo}</div>
                <div className="text-gray-900 text-lg font-medium">{item.produttore}</div>
                <hr></hr>
                <div className="text-gray-700 text-base ">{item.denominazione}</div>
                <div className="px-4 py-1.5 mt-3 bg-gray-500 text-white font-medium text-xs leading-tight rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"> {item.prezzo} €</div>
              </div>
              <div className='col-span-2 mt-3 mr-3'>
              <button type="button" className="inline-block px-6 py-2.5 bg-gray-500 text-white font-medium text-xs leading-tight rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out float-right"
               onClick={()=>{getData(item.titolo, item.immagine,item.vitigno,item.denominazione,item.stato, item.regione,item.produttore); open()}}>Vedi informazioni</button>
              </div>
            </div>
            ))
           )}
          </div>
          </div>
 
      </>
 

    )
}

export default List;