import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Ann() {
  const [data, setdata] = useState([]);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    const fet = () => {
      axios
        .get("http://localhost:5000/find")
        .then((response) => {
          setdata(response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    };
    fet();
  }, []);

  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "anoc", headerName: "Announcements", width: 974 },
    { field: "time", headerName: "Time", width: 120 },
  ];
  let rows = [...data];
  return(
    <div style={{ height: 400, position: "relative" }} className='datagrid'>
    <DataGrid
      sx={{ color: "black" }}
      rows={rows}
      getRowId={(rows) => rows._id}
      columns={columns}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[5, 10, 20, 30]}
      pagination      
      {...data}
    />
  </div>
  )
}

export default Ann;
