import {call, put, takeEvery} from 'redux-saga/effects';

import {ShopActionType} from './shop.types';
import {convertCollectionsSnapshotToMap, firestore} from '../../firebase/firebase.util';
import {fetchCollectionsFailure, fetchCollectionsSuccess} from './shop.actions';

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);

    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message()));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(ShopActionType.FETCH_COLLECTIONS_START, fetchCollectionAsync);
}
