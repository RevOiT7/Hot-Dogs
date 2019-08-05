import { Home } from './Home.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {

    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
