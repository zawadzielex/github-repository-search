import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUser } from "core/actions/userAction";
import { getRepositories } from "core/actions/repositoriesAction";
import Search from "./Search";

const mapStateToProps = state => {
  const { user, logged } = state.user;
  const { repositories, isLoading, isLoaded, isError } = state.repositories;
  return {
    user,
    logged,
    repositories,
    isLoading,
    isLoaded,
    isError
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getUser, getRepositories }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
