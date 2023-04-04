import React, { useEffect, useState, useMemo } from "react";
import { 
    Box, 
    Container, 
    Stack,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell 
} from "@mui/material";
import { Fetch } from "./Fetch.js";
import ListBody from "./ListBody.js";
import Header from "./Header.js";
import Footer from "./Footer.js"; 


import "./Main.css";  

const Main = () => {
  const [lists, setLists] = useState([]);

  //Defining Header Columns
  const columns = [
    { field: "fundName", headerName: "Fund Name", width: 200},
    { field: "fundUnits", headerName: "Units", width: 200},
  ];

  //Fetching List using API
  const fetchMethod = async () => {
    setLists(await Fetch());
  }

  useEffect(() => {
    fetchMethod(); 
  }, []);
  

  return (
    <>
        <Header />

        <Container className="container">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {
                                columns.map((ele) => (
                                    <TableCell key={ele.field}>
                                        {ele.headerName}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>

                    <TableBody>
                      <ListBody lists={lists}/>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>

        <Footer />
    </>
  )
}

export default Main;
