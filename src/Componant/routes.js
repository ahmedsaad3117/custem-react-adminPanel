import { Route } from "react-router-dom";
import AdminTableCate from "./AdminTables/AdminTableCate";
import Mainbody from "./Mainbody/Mainbody";



export const Routes = () => {
  return (
    <div>
      <Route pathname="/" exact component={AdminTableCate} />
    
    </div>
  );
};
