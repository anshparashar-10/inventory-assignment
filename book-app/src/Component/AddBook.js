import React, { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
  MenuItem,
  Select,
  InputAdornment,
} from "@mui/material";
// import { addUser } from "../Service/api";
import { useNavigate } from "react-router-dom";
import "./Style/styles.css";

import { adddata } from "../Service/api";

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;
const initialVal = {
  Icode: "",
  OpStock: "",
  LoStock: "",
  price: "",
  category: "",
  unit: "",
};
const AddBook = () => {
  const [item, setItem] = useState(initialVal);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    await adddata(item);
    navigate("/");
  };
  return (
    <Container>
      <Typography variant="h4">Add Item</Typography>
      <br />
      <Typography variant="h5">General Details </Typography>
      <FormControl>
        <InputLabel>Item Name</InputLabel>
        <Input name="Iname" onChange={(e) => onValueChange(e)} />
      </FormControl>

      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Category</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          name="category"
          onChange={(e) => onValueChange(e)}
        >
          <MenuItem value="Panel">Panel</MenuItem>
          <MenuItem value="Inverter">Inverter</MenuItem>
          <MenuItem value="Wire">Wire</MenuItem>
          <MenuItem value="MC4 Connector">MC4 Connector</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Item Code</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Icode" type="number" />
      </FormControl>

      <br />
      <Typography variant="h5">Stock Details </Typography>

      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Unit</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          name="unit"
          onChange={(e) => onValueChange(e)}
        >
          <MenuItem value="FEET">FEET(FT)</MenuItem>
          <MenuItem value="INCHES">INCHES(IN)</MenuItem>
          <MenuItem value="UNITS">UNITS(UNT)</MenuItem>
          <MenuItem value="PIECES">PIECES(PCS)</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Opening Stock</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="OpStock"
          type="number"
        />
      </FormControl>
      <FormControl>
        <InputLabel>LOW Stock Warning </InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="LoStock"
          type="number"
        />
      </FormControl>

      <FormControl>
        <InputLabel>Purchase Price </InputLabel>
        <Input
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          onChange={(e) => onValueChange(e)}
          name="price"
        />
      </FormControl>

      <FormControl>
        <Button variant="contained" onClick={() => handleCreate()}>
          Add Item
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddBook;
