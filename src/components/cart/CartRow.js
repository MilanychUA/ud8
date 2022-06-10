import { TableRow, TableCell, IconButton } from "@mui/material";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
const CartRow = ({ title, amount, brand, price, id,removeItemFromCart,addItemFromCart,isBtValid }) => {

  const onRemoveHandler = () => {
    const itemId = id
    removeItemFromCart(itemId)
  }
  const onAddHandler = () => {
    const itemId = id
    addItemFromCart(itemId)
  }


  
  return (
    <TableRow>
      <TableCell>{title}</TableCell>
      <TableCell align="right">{brand}</TableCell>
      <TableCell align="right">{amount !== 0 ? amount : "finished"}</TableCell>
      <TableCell align="right">{price}</TableCell>
      <TableCell align="center"> - </TableCell>
      <TableCell align="center">
        <IconButton color="primary" onClick={onRemoveHandler}>
          <RemoveCircleOutlineRoundedIcon />
        </IconButton>
        <IconButton color="primary" onClick={onAddHandler} disabled={!isBtValid}>
          <AddCircleOutlineRoundedIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CartRow;
