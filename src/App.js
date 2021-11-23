import React, { lazy, Suspense } from "react";
import { Provider } from 'react-redux';
import Loading from "./components/Loading/Loading";
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './store/reducers'
import { rootSaga } from './store/sagas'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)


const Layout = lazy(() => import("./pages/Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const Genre = lazy(() => import("./pages/Genre/Genre"));
const Movie = lazy(() => import("./pages/Movie/Movie"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <Router>
          <Switch>

            <Layout>
              <Route path="/" exact component={Home} />
              <Route path="/genre" exact component={Genre} />
              <Route path="/movie" exact component={Movie} />
            </Layout>
          </Switch>
        </Router>
      </Provider>
    </Suspense>
  );
}

export default App;
