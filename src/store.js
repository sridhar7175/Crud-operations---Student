import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { studentReducer } from "./redux/Reducers/studentreducer";
import { signInUsers } from "./redux/Reducers/signinreducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["studentReducer", "signInUsers"],
};
const rootStore = combineReducers({
  studentReducer,
  signInUsers,
});
const persistedReducer = persistReducer(persistConfig, rootStore);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
let persistor = persistStore(store);
export { store, persistor };
