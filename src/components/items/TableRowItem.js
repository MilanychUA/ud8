import { TableRow, TableCell, Button } from "@mui/material";

const TableRowItem = ({ id, title, amount, price, brand, isSale,onAdd }) => {
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
const btStatus = amount ? false : true
  return (
    <TableRow>
      <TableCell>{title}</TableCell>
      <TableCell align="right">{brand}</TableCell>
      <TableCell align="right">{amount!==0 ? amount : "finished" }</TableCell>
      <TableCell align="right">{price}</TableCell>
      <TableCell align="right">{isSale && amount ? "yes" : "no"}</TableCell>
      <TableCell align="right">
        <Button onClick={onAddHandler} disabled={btStatus}>Add</Button>
      </TableCell>
    </TableRow>
  );
};

export default TableRowItem;
