import {applyMiddleware,combineReducers,compose,legacy_createStore,} from "redux";
  import thunk from "redux-thunk"
  import reducer from "./auth/reducer"
import productsreducer from "./products/reducer";
const reducers=combineReducers({
   auth:reducer,
   data:productsreducer
  })
  
  export const store = legacy_createStore(reducers,compose(applyMiddleware(thunk)));