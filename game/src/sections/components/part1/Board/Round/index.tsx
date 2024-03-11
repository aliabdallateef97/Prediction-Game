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


function createData(name: string, points: number, multiparts: number) {
  return { name, points, multiparts };
}

const rows = [
  createData("YOU", 159, 6.0),
  createData("CPU 1", 237, 9.0),
  createData("CPU 2", 262, 16.0),
  createData("CPU 3", 305, 3.7),
  createData("CPU 4", 356, 16.0),
];

export default function CustomizedTables() {
  return (
    <>
      <Stack flexDirection={"row"} marginTop={"6px"}>
        <Icons.EmojiEventsIcon />
        <CustomedTypography variant="h4" colorprops="white">
          Current Round
        </CustomedTypography>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Points</StyledTableCell>
              <StyledTableCell align="right">MultiParts</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => ( 
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.points}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.multiparts}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
