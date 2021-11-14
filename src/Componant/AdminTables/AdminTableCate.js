import { DataTable   } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { useEffect, useState } from 'react';
import axios from "axios";



const AdminTableCate = () => {
    const [category, setCategory] = useState([]);
 
  useEffect(() => {
    
    axios({
      method: "GET",
      url: "http://localhost:3000/api/v1/categories",
      withCredentials: false,
    })
      .then((res) => {
        console.log("category")
        setCategory(res.data.data.data);
        console.log(category)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);



    return (
      <div>
        {(category.length==0)?<h1>Wating Data</h1>:
        <DataTable value={category}>
            <Column field="name" header="name"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
        }
        </div>
    );

}
export default AdminTableCate;