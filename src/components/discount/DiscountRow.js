import { TableRow, TableCell } from "@mui/material";

const DiscountRow = ({brand, discount, expdate}) => {
  return (
    <TableRow>
      <TableCell align="left">{brand}</TableCell>
      <TableCell align="center">{discount}</TableCell>
      <TableCell align="center">{expdate}</TableCell>
    </TableRow>
  );
};

export default DiscountRow;
