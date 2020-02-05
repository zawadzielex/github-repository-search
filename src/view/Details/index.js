import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUser } from "core/actions/userAction";
import { getRepository } from "core/actions/repositoryAction";
import Details from "./Details";

const mapStateToProps = state => {
  const { user, logged } = state.user;
  const { repository, isLoading, isLoaded, isError } = state.repository;
  return {
    user,
    logged,
    repository,
    isLoading,
    isLoaded,
    isError
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getUser, getRepository }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);
