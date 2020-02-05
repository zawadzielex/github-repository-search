import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import BreadcrumbsSource from "layout/Breadcrumbs";

export const Breadcrumbs = styled(BreadcrumbsSource)`
  padding: 15px 0;
`;

export const DetailsCard = styled(Card)`
  padding: 15px;
  width: 100%;
`;

export const OwnerContainer = styled.div`
  display: flex;
`;

export const OwnerAvatar = styled(Avatar)`
  width: 20px;
  height: 20px;
  margin: 14px 0;
`;

export const OwnerName = styled(Typography)`
  margin: 14px 10px;
  display: block;
`;
