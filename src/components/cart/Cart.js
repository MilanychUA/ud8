import {
  Box,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import React, { useContext } from "react";
import ItemsData from "../../store/items-context";
import CartRow from "./CartRow";

const Cart = () => {
  const cartCtx = useContext(ItemsData);
  return (
    <Container maxWidth="false" sx={{ width: 700 }}>
      <Box sx={{ bgcolor: "#cfe8fc" }} mt={5}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Brand</TableCell>
                <TableCell align="right">Amount in cart</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">
                  <b>Discount</b>
                </TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartCtx.cart.map((ct) => (
                <CartRow
                  key={ct.id}
                  id={ct.id}
                  title={ct.title}
                  brand={ct.brand}
                  amount={ct.amount}
                  price={ct.price}
                  removeItemFromCart={cartCtx.removeItemFromCart}
                  addItemFromCart={cartCtx.addItemFromCart}
                  isBtValid={cartCtx.isBtValid}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Cart;
