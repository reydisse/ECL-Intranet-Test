import { call, put, takeEvery, all, fork } from "redux-saga/effects"

// Crypto Redux States
import { GET_TOP_SELLING_PRODUCT, GET_EARNING_DATA } from "./actionType"
import { DashboardSaasapiSuccess, DashboardSaasapiFail } from "./actions"

//Include Both Helper File with needed methods
import {
  topprojectData as topprojectDataApi,
  getEarningChartsData as getEarningChartsDataApi,
} from "../../helpers/fakebackend_helper"

function* getprojectData({ payload: month }) {
  try {
    var response = yield call(topprojectDataApi, month)
    yield put(DashboardSaasapiSuccess(GET_TOP_SELLING_PRODUCT, response))
  } catch (error) {
    yield put(DashboardSaasapiFail(GET_TOP_SELLING_PRODUCT, error))
  }
}

function* getEarningChartsData({ payload: month }) {
  try {
    var response = yield call(getEarningChartsDataApi, month)
    yield put(DashboardSaasapiSuccess(GET_EARNING_DATA, response))
  } catch (error) {
    yield put(DashboardSaasapiFail(GET_EARNING_DATA, error))
  }
}

export function* watchGetprojectData() {
  yield takeEvery(GET_TOP_SELLING_PRODUCT, getprojectData)
}

export function* watchGetEarningChartsData() {
  yield takeEvery(GET_EARNING_DATA, getEarningChartsData)
}

function* dashboardSaasSaga() {
  yield all(
    [fork(watchGetprojectData)],
    yield all([fork(watchGetEarningChartsData)])
  )
}

export default dashboardSaasSaga
