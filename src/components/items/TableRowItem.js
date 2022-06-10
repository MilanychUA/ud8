import { useState } from "react";
import { TableRow, TableCell, Button, Box } from "@mui/material";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const TableRowItem = ({ id, title, amount, price, brand, isSale, onAdd }) => {
  const [count, setCount] = useState(1);
  const onAddHandler = () => {
    const item = {
      id,
      title,
      price,
      brand,
      amount: count,
      timeOfAdd: new Date(),
    };
    onAdd(item);
  };
  const btStatus = amount ? false : true;
  return (
    <TableRow>
      <TableCell>{title}</TableCell>
      <TableCell align="right">{brand}</TableCell>
      <TableCell align="right">{amount !== 0 ? amount : "finished"}</TableCell>
      <TableCell align="right">{price}</TableCell>
      <TableCell align="right">{isSale && amount ? "yes" : "no"}</TableCell>

      <TableCell align="right">
        <Box display="flex">
          <ButtonGroup>
            <Button variant="text" 
              onClick={() => {
                setCount(Math.max(count - 1, 0));
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Button variant="text" 
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
          <Badge color="secondary" badgeContent={count}>
            <Button onClick={onAddHandler} variant="contained" disabled={btStatus}>
              Add
            </Button>
          </Badge>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default TableRowItem;
