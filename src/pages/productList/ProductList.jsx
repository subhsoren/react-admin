import React, {useState} from 'react';
import './ProductList.css';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import {DeleteOutline, Edit} from '@mui/icons-material';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [data, setData] = useState(productRows);
     const handleDelte = (id) => {
    setData(data.filter(item => item.id !== id))
  }
      const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'product', headerName: 'Product', width: 130, renderCell: (params)=> { 
      return (
          <div className="productListItem">
              <img src={params.row.img} alt="" className="productListImg" />
              {params.row.name}
          </div>
      )
  } },
  { field: 'stock', headerName: 'Stock', width: 190 },
  {
    field: 'status',
    headerName: 'Status',
    width: 90,
  },
  {
    field: 'price',
    headerName: 'Price Volume',
    width: 190,
  },
  { 
      field: 'action',
      headerName: 'Action',
      width:150,
      renderCell: (params) => {
        return (
          <>
              <Link to = {"/product/"+params.row.id}>
                  {/* <button className="userListEdit">Edit</button> */}
                  <Edit className="productListEdit" />

              </Link>

             
              <DeleteOutline className="productListDelete" onClick = {() => handleDelte(params.row.id)} />
          </>
        )
      }
  }

];
    return (
        <div className="productList">
                    <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
            
        </div>
    )
}

export default ProductList
