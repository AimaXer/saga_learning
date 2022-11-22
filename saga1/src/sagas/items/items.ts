import { all } from 'redux-saga/effects';
import { call, takeLatest } from 'typed-redux-saga';
import { getAllItemsAction, getAllItemsSuccess } from '../../reducers/items/items.actions';
import { GetAllItemsAction } from '../../reducers/items/types';

export const GetAllItemsAPI = async () => {
  return new Promise<Array<{name: string}>>((resolve) =>
    setTimeout(() => resolve([{ name: 'item' }]), 500)
  );
}

export function* getAllItemsSaga({} : GetAllItemsAction) {
  try {
    const items = yield* call(GetAllItemsAPI);
    getAllItemsSuccess(items);
  } catch (error) {
    console.log(error);
  } finally {}
}

export function* watchItems() {
  yield all([
    takeLatest(getAllItemsAction, getAllItemsSaga),
  ]);
}
