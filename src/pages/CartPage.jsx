import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { clientContext } from "../contexts/ClientContext";
import { TextField } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CartPage() {
  const { getCart, cart, changeCountProductIncart } =
    React.useContext(clientContext);

  React.useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="cart-page">
      {cart ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ПРОДУКТ</TableCell>
                <TableCell align="right">ЦЕНА</TableCell>
                <TableCell align="right">КОЛИЧЕСТВО</TableCell>
                <TableCell align="right">СУММА</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.products.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={item.image} alt="" /> {item.name}
                  </TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="right">
                    <TextField
                      id="filled-number"
                      label="Count"
                      type="number"
                      value={item.count}
                      onChange={(e) =>
                        changeCountProductIncart(e.target.value, item.id)
                      }
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="filled"
                    />
                  </TableCell>
                  <TableCell align="right">{item.subPrice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}
