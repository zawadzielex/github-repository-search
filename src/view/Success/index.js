import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login } from "core/actions/authAction";
import Success from "./Success";

const mapStateToProps = state => {
  const { isLoaded, logged } = state.auth;
  return {
    isLoaded,
    logged
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Success);
