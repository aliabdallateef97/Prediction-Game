import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CustomedTypography } from "@/core/components";
import { Stack } from "@mui/material";
import * as Icons from "@/core/config/import/icons";
import { StyledTableCell, StyledTableRow } from "@/core/styles";
import { useSelector } from "react-redux";
import * as selectors from "@/core/config/import/selectors";
import { Container } from "./style";

function createData(no: string, name: string, score: number | string) {
  return { no, name, score };
}

export default function Part3() {
  const start = useSelector(selectors.start);

  let rows = [
    createData("1", "-", "-"),
    createData("2", "-", "-"),
    createData("3", "-", "-"),
    createData("4", "-", "-"),
    createData("5", "-", "-"),
  ];
  if (start) {
    rows = [
      createData("1", "CPU1", 6.0),
      createData("2", "CPU3", 9.0),
      createData("3", "YOU", 16.0),
      createData("4", "CPU2", 16.0),
      createData("5", "CPU4", 16.0),
    ];
  }

  return (
    <Container>
      <Stack flexDirection={"row"} marginTop={"6px"}>
        <Icons.BarChartIcon />
        <CustomedTypography variant="h4" colorprops="white">
          Ranking
        </CustomedTypography>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Score</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.no}>
                <StyledTableCell component="th" scope="row">
                  {row.no}
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.score}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
