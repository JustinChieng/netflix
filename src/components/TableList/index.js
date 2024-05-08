import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function TableList(props) {
  const { rows = [], genres = [], genre = "all", setGenre, sort, setSort } = props;
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ marginTop: "8px", marginBottom: "8px" }}>
          <FormControl style={{ width: "300px" }}>
            <InputLabel id="demo-simple-select-label">Genre</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              label="Genre"
              id="demo-simple-select"
              value={genre}
              onChange={(event) => {
                setGenre(event.target.value);
              }}
            >
              <MenuItem value="all">All Genres</MenuItem>
              {genres.map((genre) => {
                return (
                  <MenuItem key={genre} value={genre}>
                    {genre}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div style={{ marginTop: "8px", marginBottom: "8px" }}>
          <FormControl style={{ width: "300px" }}>
            <InputLabel id="demo-simple-select-label">Sorting</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Title"
              value = {sort}
              onChange = {(event) => {
                setSort(event.target.value);
              }}
            >
              <MenuItem value={"title"}>Title</MenuItem>
              <MenuItem value={"rating"}>Rating</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Genre</TableCell>
              <TableCell align="right">Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="center">{row.genre}</TableCell>
                <TableCell align="right">{row.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
