import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

export const AppTitle = styled(Typography)`
  flex-grow: 1;
`;

export const UserAvatar = styled(Avatar)`
  width: 20px;
  height: 20px;
  margin: 14px 0;
`;

export const UserContainer = styled.div`
  display: flex;
`;

export const UserName = styled(Typography)`
  margin: 14px 10px;
  display: block;
`;
