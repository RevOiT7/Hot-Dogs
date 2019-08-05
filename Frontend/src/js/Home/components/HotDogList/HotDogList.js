import { HotDogList } from './HotDogList.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { fetchHotDogRequest } from '../../actionHome';


const mapStateToProps = state => ({
    hotDods: state.reducerHome.hotDods,
})
const mapDispatchToProps = dispatch =>
  bindActionCreators({
          fetchHotDogRequest
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HotDogList)