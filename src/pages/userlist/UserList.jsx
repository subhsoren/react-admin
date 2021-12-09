import React, { useState } from 'react';
import './UserList.css';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import {DeleteOutline, Edit} from '@mui/icons-material';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';


const UserList = () => {
  const [data, setData] = useState(userRows);
  const handleDelte = (id) => {
    setData(data.filter(item => item.id !== id))
  }
    const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'user', headerName: 'User', width: 130, renderCell: (params)=> { 
      return (
          <div className="userListUser">
              <img src={params.row.avatar} alt="" className="userListImg" />
              {params.row.username}
          </div>
      )
  } },
  { field: 'email', headerName: 'Email', width: 190 },
  {
    field: 'status',
    headerName: 'Status',
    width: 90,
  },
  {
    field: 'transaction',
    headerName: 'Transaction Volume',
    width: 190,
  },
  { 
      field: 'action',
      headerName: 'Action',
      width:150,
      renderCell: (params) => {
        return (
          <>
              <Link to = {"/user/"+params.row.id}>
                  {/* <button className="userListEdit">Edit</button> */}
                  <Edit className="userListEdit" />

              </Link>

             
              <DeleteOutline className="userListDelete" onClick = {() => handleDelte(params.row.id)} />
          </>
        )
      }
  }

];


    return (
        <div className="userList">
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

export default UserList
