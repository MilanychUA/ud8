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
import { useContext } from "react";
import ItemsData from "../../store/items-context";
import TableRowItem from "./TableRowItem";

const AllItems = () => {
  const itemsCtx = useContext(ItemsData);
  const onAdd = (item) => {
    itemsCtx.addItemToCart(item)
};
  return (
    <Container maxWidth="false" sx={{ width: 700 }}>
      <Box sx={{ bgcolor: "#cfe8fc" }} mt={5}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Brand</TableCell>
                <TableCell align="right">Amount in base</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Sale</TableCell>
                <TableCell align="right">Button</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {itemsCtx.items.map((it) => (
                <TableRowItem
                  key={it.id}
                  id={it.id}
                  title={it.title}
                  brand={it.brand}
                  amount={it.amount}
                  isSale={it.isSale}
                  price={it.price}
                  onAdd={onAdd}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default AllItems;
