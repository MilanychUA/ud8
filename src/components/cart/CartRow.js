import { TableRow, TableCell, IconButton } from "@mui/material";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { useContext } from "react";
import ItemsData from "../../store/items-context";

const CartRow = ({
  title,
  timeOfAdd,
  amount,
  brand,
  price,
  id,
  removeItemFromCart,
  addItemFromCart,
  isBtValid,
}) => {
  const discountCtx = useContext(ItemsData);

  let dis = "-";
  let disDate;
  const res = discountCtx.discounts.findIndex((d) => d.idItem === brand);
  if (res !== -1) {
    dis = discountCtx.discounts[res].discount;
    disDate = discountCtx.discounts[res].expdate;
    disDate = new Date(disDate)
    disDate = disDate.toLocaleString("en-GB", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
    console.log(disDate);
  }

  const costs = price - (price * dis) / 100;

  const onRemoveHandler = () => {
    const itemId = id;
    removeItemFromCart(itemId, brand, price);
  };
  const onAddHandler = () => {
    const itemId = id;
    addItemFromCart(itemId, brand, price);
  };

  const imeOfAdd = timeOfAdd.toLocaleString("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  console.log(imeOfAdd-disDate)

  return (
    <TableRow>
      <TableCell>{title}</TableCell>
      <TableCell align="right">{brand}</TableCell>
      <TableCell align="right">{amount !== 0 ? amount : "finished"}</TableCell>
      <TableCell align="right">{price}</TableCell>
      <TableCell align="center">{dis}%</TableCell>
      <TableCell align="center">{imeOfAdd}</TableCell>
      <TableCell align="center">
        <IconButton color="primary" onClick={onRemoveHandler}>
          <RemoveCircleOutlineRoundedIcon />
        </IconButton>
        <IconButton
          color="primary"
          onClick={onAddHandler}
          disabled={!isBtValid}
        >
          <AddCircleOutlineRoundedIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CartRow;
