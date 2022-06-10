import Discounts from '../discount/Discounts'
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
  Grid,
} from "@mui/material";
import { Fragment, useContext } from "react";
import ItemsData from "../../store/items-context";
import TableRowItem from "./TableRowItem";
import AddItem from './AddItem';
import Cart from '../cart/Cart';

const AllItems = () => {
  const itemsCtx = useContext(ItemsData);
  const onAdd = (item) => {
    itemsCtx.addItemToCart(item);
  };

  return (<Fragment>
    {itemsCtx.isShowAddNewItem && <AddItem/>}
    <Grid
      container
      direction="row-reverse"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxWidth="lg" sx={{ width: 700 }}>
        <Box sx={{ bgcolor: "#cfe8fc" }} mt={5}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
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
      {itemsCtx.isShowDiscount && (
        <Container  sx={{ width: 400 }}>
            <Discounts />
        </Container>
      )}
    </Grid>
    </Fragment>
  );
};

export default AllItems;
