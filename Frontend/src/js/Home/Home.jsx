import React, { Component } from 'react';
import styles from './Home.scss';
import { HotDogList, HotDogHero } from './components';

export class Home extends Component {
  render() {
    return (
      <main className={styles.main_wrap}>
        <HotDogHero/>
        <HotDogList/>
      </main>
    );
  }
}
