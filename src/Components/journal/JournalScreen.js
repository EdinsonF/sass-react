import AddNewEntry from "./AddNewEntry"
import NothingSelect from "./NothingSelect"
import Sidebar from "./Sidebar"

const JournalScreen = () => {
  return ( 
   
      <>
      <div className="journal_container">
      <Sidebar/>

      <div className="main_container">

        {/* cUANDO VA AGREGAR UNA NOTA */}
        <AddNewEntry/>
        {/* CUANDO HAY ALGO SELECIONADO */}

        {/* CUANDO NO HAY NADA SELECCIONADO */}
        {/* <NothingSelect/> */}
      </div>
      </div>
      </>
     );
  
}
 
export default JournalScreen;