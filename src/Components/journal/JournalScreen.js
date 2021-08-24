import NothingSelect from "./NothingSelect"
import Sidebar from "./Sidebar"

const JournalScreen = () => {
  return ( 
   
      <>
      <div className="journal_container">
      <Sidebar/>

      <div className="main_container">
        <NothingSelect/>
      </div>
      </div>
      </>
     );
  
}
 
export default JournalScreen;