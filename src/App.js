import "./App.css";

import "@fortawesome/fontawesome-svg-core/styles.css";

import Sidebar from "./Componant/Sidebar/Sidebar/Sidebar";
import 'primereact/resources/themes/lara-light-indigo/theme.css'    //theme
import 'primereact/resources/primereact.min.css'                    //core css
import 'primeicons/primeicons.css'    
import AdminTableCate from "./Componant/AdminTables/AdminTableCate";                         
                       
 
//import  "./Componant/Sidebar/Sidebar.css";


import Mainbody from "./Componant/Mainbody/Mainbody";
import NavBar from "./Componant/NavBar/NavBar";





function App() {
  return (
    <>
    <NavBar/>
      <Mainbody />
    
    
     
    </>
  );
}

export default App;
