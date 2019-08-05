import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { path } from "../../root/axiosConfig";
import actionType from '../../root/actionType';
import { setHotDogs, getHotDogs } from '../Home/actionHome'

function* getHotDogsSaga() {
 try {
  const response = yield call([axios, axios.get], `${path}/hotdog`);
  if (response.status === 200) {
   yield put(setHotDogs(response.data));
  }
 } catch (e) {
  console.log(e)
 }
}

function* fetchHotDogs(action) {
 const newHotDog = action.payload;
 const { name, _id } = newHotDog.param;
 const { status} = newHotDog;

 const header = {
  headers: {
   'Content-Type': 'application/x-www-form-urlencoded',
  }
 };

 const param = new URLSearchParams();

 try {
  if (status === 'post') {
   param.set('name', name);
   const response = yield call([axios, axios.post], `${path}/hotdog`, param, header);
   if (response.status === 200) {
    yield put(getHotDogs());
   }
  } else if (status === 'delete') {
   const data = new URLSearchParams();
   data.set('id', _id);
   const response = yield call([axios, axios.delete], `${path}/hotdog`, {
    data,
    ...header
   });
  } else if (status === 'put') {
    const data = new URLSearchParams();
    data.set('id', _id);
    data.set('name', name);
   const response = yield call([axios, axios.put], `${path}/hotdog`, data, header);
  }
 } catch (e) {
   throw new Error('Database Error');
 }
}

export function* sagaHome() {
  yield takeEvery(actionType.GET_ALL_HOT_DOGS, getHotDogsSaga);
  yield takeEvery(actionType.FETCH_HOT_DOG_REQUEST, fetchHotDogs);

}
