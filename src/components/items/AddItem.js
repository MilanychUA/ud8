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
  TextField,
  Button,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useContext } from "react";
import ItemsData from "../../store/items-context";

const AddItem = () => {
  const addCtx = useContext(ItemsData);
  const [erTitle, setErTitle] = useState(false);
  const [erAmount, setErAmount] = useState(false);
  const [erPrice, setErPrice] = useState(false);
  const [erBrand, setErBrand] = useState(false);
  const [isSale, setIsSale] = useState(true);


  const [brand, setBrand] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  const handleChangeTitle = (event) => {
    if (event.target.value.length === 0) {setErTitle(true);setTitle(event.target.value)} else {setTitle(event.target.value);setErTitle(false)}
  };
  const handleChangeSale = (event) => {setIsSale(event.target.value);};
  const handleChangeBrand = (event) => {setBrand(event.target.value);};
  const handleChangeAmount = (event) => { if (event.target.value < 0) {setErAmount(true)} else {setAmount(event.target.value);setErAmount(false)}
  };
  const handleChangePrice = (event) => {
    if (event.target.value < 0) {setErPrice(true)} else {setPrice(event.target.value);setErPrice(false)}  };

  const addToBase = () => {
    if (!erTitle && !erAmount && !erPrice && !erBrand ) {
      const item = {
        brand: brand,
        isSale: isSale,
        id: Math.random(),
      };
      addCtx.addItemToBase(item);
    }
  };

  return (
    <div>
      <Container maxWidth="lg" sx={{ width: 900 }}>
        <Box sx={{ bgcolor: "#cfe8fc" }} mt={5}>
          <h1>Add new item form</h1>

          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="center">Brand</TableCell>
                  <TableCell align="center">Amount in base</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Sale</TableCell>
                  <TableCell align="right">Button</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <TextField
                      value={title}
                      size="small"
                      error={erTitle}
                      label="Title"
                      variant="outlined"
                      onChange={handleChangeTitle}
                    />
                  </TableCell>
                  <TableCell>
                    <FormControl>
                      <Select
                        value={brand}
                        onChange={handleChangeBrand}
                        size="small"
                        error={erBrand}
                      >
                        <MenuItem value="Adidas">Adidas</MenuItem>
                        <MenuItem value="Nike">Nike</MenuItem>
                        <MenuItem value="Puma">Puma</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={amount}
                      error={erAmount}
                      size="small"
                      label="amount"
                      variant="standard"
                      type="number"
                      onChange={handleChangeAmount}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={price}
                      error={erPrice}
                      size="small"
                      label="price"
                      variant="standard"
                      type="number"
                      onChange={handleChangePrice}
                    />
                  </TableCell>
                  <TableCell>
                    <FormControl>
                      <Select
                        value={isSale}
                        onChange={handleChangeSale}
                        size="small"
                      >
                        <MenuItem value={true}>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <Button onClick={addToBase}>Add</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </div>
  );
};

export default AddItem;
