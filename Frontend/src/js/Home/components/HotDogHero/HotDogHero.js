import { HotDogHero } from './HotDogHero.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";


const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch =>
  bindActionCreators({

    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HotDogHero)