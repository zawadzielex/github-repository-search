import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "./Header";
import { getUser } from "core/actions/userAction";

const mapStateToProps = state => {
  const { user, logged } = state.user;
  return {
    user,
    logged
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
