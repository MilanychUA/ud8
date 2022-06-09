import { TableRow, TableCell,Button } from "@mui/material";
const CartRow = ({title, amount, brand, price, onStock}) => {
  return (
    <TableRow>
      <TableCell>{title}</TableCell>
      <TableCell align="right">{brand}</TableCell>
      <TableCell align="right">{amount !== 0 ? amount : "finished"}</TableCell>
      <TableCell align="right">{price}</TableCell>
      <TableCell align="right">
        <Button>Add</Button>
      </TableCell>
    </TableRow>
  );
};

export default CartRow;
