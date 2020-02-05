import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_USER,
  GET_USER_SUCCEEDED,
  GET_USER_FAILED
} from "core/actions/userAction";
import { LOGIN_SUCCEEDED, LOGIN_FAILED, LOGIN } from "core/actions/authAction";
import {
  GET_REPOSITORY,
  GET_REPOSITORY_SUCCEEDED,
  GET_REPOSITORY_FAILED
} from "core/actions/repositoryAction";
import {
  GET_REPOSITORIES,
  GET_REPOSITORIES_SUCCEEDED,
  GET_REPOSITORIES_FAILED
} from "core/actions/repositoriesAction";
import { userApi, githubAuthApi } from "core/api/authorization";
import { repositoryApi } from "core/api/repository";
import { repositoriesApi } from "core/api/repositories";

function* fetchUser(action) {
  try {
    const user = yield call(userApi);
    yield put({ type: GET_USER_SUCCEEDED, user });
  } catch (e) {
    yield put({ type: GET_USER_FAILED });
  }
}

function* getOAuthToken(action) {
  try {
    const { logged } = yield call(githubAuthApi, action.data);
    logged
      ? yield put({ type: LOGIN_SUCCEEDED, logged })
      : yield put({ type: LOGIN_FAILED, logged });
  } catch (e) {
    yield put({ type: LOGIN_FAILED, message: e.message });
  }
}

function* getRepository(action) {
  try {
    const repository = yield call(repositoryApi, action.data);
    yield put({ type: GET_REPOSITORY_SUCCEEDED, repository });
  } catch (e) {
    yield put({ type: GET_REPOSITORY_FAILED });
  }
}

function* getRepositories(action) {
  try {
    const repositories = yield call(repositoriesApi, action.data);
    yield put({ type: GET_REPOSITORIES_SUCCEEDED, repositories });
  } catch (e) {
    yield put({ type: GET_REPOSITORIES_FAILED });
  }
}

function* mySaga() {
  yield takeLatest(GET_USER, fetchUser);
  yield takeLatest(LOGIN, getOAuthToken);
  yield takeLatest(GET_REPOSITORY, getRepository);
  yield takeLatest(GET_REPOSITORIES, getRepositories);
}

export default mySaga;
