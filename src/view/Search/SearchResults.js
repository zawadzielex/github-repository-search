import React from "react";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import TableContainer from "@material-ui/core/TableContainer";
import formatStars from "utils/formatStars";

function SearchResults({ repository }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Owner</TableCell>
            <TableCell align="center">Number of stars</TableCell>
            <TableCell align="center">Primary language</TableCell>
            <TableCell align="center">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repository &&
            repository.items &&
            repository.items.map(item => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.full_name}
                </TableCell>
                <TableCell align="left">{item.owner.login}</TableCell>
                <TableCell align="center">
                  <Grid container align="center">
                    <StarIcon />
                    <Typography>
                      {formatStars(item.stargazers_count)}
                    </Typography>
                  </Grid>
                </TableCell>
                <TableCell align="center">{item.language}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="default"
                    href={`/details/${item.full_name}`}
                  >
                    Detalis
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SearchResults;
