import React, {useState} from 'react';
import List from '../Items/list';
import Header from '../Header/header';
import Modal from '../Modal/modal';


function FrontList() {
   const [openModal, setOpenModal]= useState(false);
   const [tempdata, setTempdata]= useState([]);

   const getData = (immagine,titolo,denominazione,vitigno,stato,regione,produttore)=>{
    let tempData=[immagine,titolo,denominazione,vitigno,stato,regione,produttore]
    setTempdata(item=>[1, ...tempData]);
  }

  const getOpen=()=>{
    return(
      setOpenModal(true)
      )
    }
    

  
  return (
   <div>
    {openModal && <Modal  
            closeModal={setOpenModal}
            titolo={tempdata[1]}
            immagine={tempdata[2]}
            vitigno={tempdata[3]}
            denominazione={tempdata[4]}
            stato={tempdata[5]}
            regione={tempdata[6]}
            produttore={tempdata[7]}/>}
    <Header cliente='https://www.ristoranteleviedelgusto.com/immagini/le-vie-del-gusto-ristorante-guastalla.png'/>
   <List getData={getData} open={getOpen} />
   </div>
   
  )
}

export default FrontList;