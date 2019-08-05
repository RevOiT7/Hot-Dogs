import React, { Component } from "react";
import styles from "./App.scss";
import Home from "./js/Home/Home"
import { getHotDogs } from "./js/Home/actionHome";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';


class App extends Component {
  componentDidMount() {
    const { getHotDogs,  } = this.props;
    getHotDogs();
  }

  render() {
    return (
      <div className={styles.main_wrap}>
        <Home />
      </div>

    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { getHotDogs },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

