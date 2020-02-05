import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import StarIcon from "@material-ui/icons/Star";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import Grid from "@material-ui/core/Grid";
import formatStars from "utils/formatStars";
import Header from "layout/Header";
import {
  Breadcrumbs,
  DetailsCard,
  OwnerContainer,
  OwnerAvatar,
  OwnerName
} from "./Details.styled";

function Details({ getRepository, repository }) {
  const { owner, repo } = useParams();

  useEffect(() => {
    getRepository({ owner, repository: repo });
  }, [getRepository, owner, repo]);

  return (
    <Container maxWidth={false} disableGutters>
      <Header />
      <Container>
        <Grid container>
          <Breadcrumbs page={repository && repository.name} />
          <Grid container justify="center">
            {repository && (
              <DetailsCard>
                <Typography variant="h4" component="h2">
                  {repository.full_name}
                </Typography>
                <Typography variant="caption">
                  {repository.description}
                </Typography>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="left">Owner</TableCell>
                      <TableCell align="left">Number of stars</TableCell>
                      <TableCell align="left">Primary language</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {repository.name}
                      </TableCell>
                      <TableCell align="left">
                        {repository.owner && (
                          <OwnerContainer>
                            <OwnerAvatar
                              alt={repository.owner.login}
                              src={repository.owner.avatar_url}
                            />
                            <OwnerName>{repository.owner.login}</OwnerName>
                          </OwnerContainer>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <Grid container align="center">
                          <StarIcon />
                          <Typography>
                            {formatStars(repository.stargazers_count)}
                          </Typography>
                        </Grid>
                      </TableCell>
                      <TableCell align="left">{repository.language}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </DetailsCard>
            )}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Details;
