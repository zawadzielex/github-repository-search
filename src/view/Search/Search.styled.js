import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import LinearProgress from "@material-ui/core/LinearProgress";

export const SearchInput = styled(InputBase)`
  flex: 1;
  margin-left: 15px;
`;

export const SearchContainer = styled(Paper)`
  display: flex;
  width: 480px;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const SearchProgress = styled(LinearProgress)`
  width: 100%;
`;
