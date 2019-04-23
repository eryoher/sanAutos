import { all, call, fork, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';

import { SEARCH_COMPANIES, CREATE_COMPANY, GET_COMPANY, GET_COMPANIES } from '../constants/ActionsTypes';

import {    
    searchCompanies, 
    createCompany,  
    getCompany,
    getCompanies 
} from '../api/Companies';

import { searchCompaniesSuccess, createCompanySuccess, getCompanySuccess, getCompaniesSuccess } from '../actions/Companies';


function* searchCompaniesRequest({payload}) {
    try {
        const response = yield call(searchCompanies, payload);
        yield put( searchCompaniesSuccess(response) );
    } catch (error) {
        
    }
}

function* createCompanyRequest({payload}) {
    try {
        const response = yield call(createCompany, payload);
        yield put( createCompanySuccess(response) );
    } catch (error) {
        
    }
}

function* getCompanyRequest({payload}) {
       
    try {
        const company = yield call(getCompany, payload.companyId);
        yield put( getCompanySuccess(company) );
    } catch (error) {
        
    }
}

function* getCompaniesRequest() {       
    try {
        const companies = yield call(getCompanies);
        yield put( getCompaniesSuccess(companies) );
    } catch (error) {
        
    }
}

export function* searchCompaniesSaga() {
    yield takeLatest(SEARCH_COMPANIES, searchCompaniesRequest);
}

export function* createCompanySaga() {
    yield takeLatest(CREATE_COMPANY, createCompanyRequest);
}

export function* getCompanySaga() {
    yield takeLatest(GET_COMPANY, getCompanyRequest);
}

export function* getCompaniesSaga() {
    yield takeLatest(GET_COMPANIES, getCompaniesRequest);
}

export default function* rootSaga() {
    yield all([
        fork(searchCompaniesSaga),  
        fork(createCompanySaga),        
        fork(getCompanySaga),       
        fork(getCompaniesSaga),       
    ]);
}