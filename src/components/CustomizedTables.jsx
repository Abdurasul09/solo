import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { admimContext } from "../contexts/AdminContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Phone } from "@mui/icons-material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const { getProducts, products, deleteProduct, getProductToEdit } =
    React.useContext(admimContext);

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell style={{ backgroundColor: "darkmagenta" }}>
                  Картинка
                </StyledTableCell>
                <StyledTableCell
                  style={{ backgroundColor: "darkmagenta" }}
                  align="right"
                >
                  Цена
                </StyledTableCell>
                <StyledTableCell
                  style={{ backgroundColor: "darkmagenta" }}
                  align="right"
                >
                  Бренд
                </StyledTableCell>
                <StyledTableCell
                  style={{ backgroundColor: "darkmagenta" }}
                  align="right"
                >
                  Название
                </StyledTableCell>
                <StyledTableCell
                  style={{ backgroundColor: "darkmagenta" }}
                  align="right"
                >
                  Описание
                </StyledTableCell>
                <StyledTableCell
                  style={{ backgroundColor: "darkmagenta" }}
                  align="right"
                >
                  #
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <StyledTableRow key={product.id}>
                  <StyledTableCell component="th" scope="row">
                    <img width="100" src={product.image} alt="" />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {product.price}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {product.brand}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {product.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {product.description}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Link to={`/admin/edit/${product.id}`}>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "green", minWidth: "89px" }}
                      >
                        Edit
                      </Button>
                    </Link>
                    <br />
                    <Button
                      variant="contained"
                      style={{ marginTop: "5px", backgroundColor: "red" }}
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
