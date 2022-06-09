import { TableRow, TableCell, Button } from "@mui/material";

const TableRowItem = ({ id, title, amount, price, brand, onStock,onAdd }) => {
  const onAddHandler = () => {
    const item = {
      id,
      title,
      price,
      brand,
      amount: 1,
    };
    onAdd(item);
  };

  return (
    <TableRow>
      <TableCell>{title}</TableCell>
      <TableCell align="right">{brand}</TableCell>
      <TableCell align="right">{amount!==0 ? amount : "finished" }</TableCell>
      <TableCell align="right">{price}</TableCell>
      <TableCell align="right">{onStock && amount ? "yes" : "no"}</TableCell>
      <TableCell align="right">
        <Button onClick={onAddHandler}>Add</Button>
      </TableCell>
    </TableRow>
  );
};

export default TableRowItem;
