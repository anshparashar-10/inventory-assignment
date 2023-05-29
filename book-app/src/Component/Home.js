import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Button,
  styled,
} from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { getData, deleteData } from "../Service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    let response = await getData();
    setProducts(response.data);
    console.log(response.data);
  };

  const deleteProductDetails = async (id) => {
    await deleteData(id);
    getAllData();
  };

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Item Name</TableCell>
          <TableCell>Item Code</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Stock Quantity</TableCell>
          <TableCell>Stock Value</TableCell>
          <TableCell>Price</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TRow key={product._id}>
            <TableCell>{product.Iname}</TableCell>
            <TableCell>{product.Icode}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.OpStock}</TableCell>
            <TableCell>{product.OpStock * product.price}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>
              {product.LoStock > product.OpStock ? <ReportProblemIcon /> : null}
            </TableCell>
            <TableCell>
              <Button
                color="primary"
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${product._id}`}
              >
                Edit
              </Button>{" "}
              <Button
                color="secondary"
                variant="contained"
                style={{ marginRight: 10 }}
                onClick={() => deleteProductDetails(product._id)}
              >
                Delete
              </Button>{" "}
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default Home;
