import React, { useContext } from "react";
import {
  Box,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,TableBody
} from "@mui/material";
import ItemsData from "../../store/items-context";
import DiscountRow from "./DiscountRow";

const Discounts = () => {
  const discCtx = useContext(ItemsData);

  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: "#cfe8fc" }} mt={5}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Brand</TableCell>
                <TableCell align="center">Discount</TableCell>
                <TableCell align="center">Date of exp</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {discCtx.discounts.map((ds) => (
                <DiscountRow
                  key={ds.id}
                  id={ds.id}
                  brand={ds.idItem}
                  discount={ds.discount}
                  expdate={ds.expdate}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Discounts;
