import { all } from 'redux-saga/effects';
import { sagaHome } from '../js/Home';

export default function* () {
  yield all([
    sagaHome(),
  ]);
}