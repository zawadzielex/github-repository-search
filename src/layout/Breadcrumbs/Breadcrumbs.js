import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

function AppBreadcrumbs({ page, className }) {
  return (
    <Breadcrumbs aria-label="breadcrumb" className={className}>
      <Link color="inherit" href="/search">
        Search
      </Link>
      {page && <Typography color="textPrimary">{page}</Typography>}
    </Breadcrumbs>
  );
}

export default AppBreadcrumbs;
