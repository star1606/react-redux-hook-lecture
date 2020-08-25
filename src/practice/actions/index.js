const redux = require("redux");

const combineReducers = redux.combineReducers;
const reduxLogger = require("redux-logger");
// combineReducer로 reducer를 합친 다음에
// applyMiddleware를 사용
const applyMiddleware = redux.applyMiddleware;

const logger = reduxLogger.createLogger();
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
// action creator
// 액션함수를 액션객체를 return 함
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action", // property
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
  };
}

// (pervious, action) => newState

// state 초기화
// 객체임(key : value)
const initialCakeState = {
  numberofCakes: 10,
};

const initialIcecreamState = {
  numberofIcecreams: 20,
};

const cakereducer = (state = initialCakeState, action) => {
  switch (action.type) {
    // return을 초기화한 state를 변화시킨 state가 들어감
    // 객체로
    case BUY_CAKE:
      return {
        ...state, // 스프레드 연산자 써줘야함 처음에
        numberofCakes: state.numberofCakes - 1,
      };

    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    // return을 초기화한 state를 변화시킨 state가 들어감
    // 객체로
    case BUY_ICECREAM:
      return {
        ...state, // 스프레드 연산자 써줘야함 처음에
        numberofIcecreams: state.numberofIcecreams - 1,
      };

    default:
      return state;
  }
};

// combineReducer 함수 인자에는 객체들어간다
// cake, icecream 키가 들어가고 그 값은 그에 따른 reducers들이다
const rootReudcer = combineReducers({
  cake: cakereducer,
  icecream: icecreamReducer,
});
const store = redux.createStore(rootReudcer, applyMiddleware(logger));
// reduxStore가 application state를 낚아챈다
// 두번째 인자로 미들웨어 적용이 들어감(logger 부분에 여러개 들어갈 수 있음)
// logger 라이브러리 쓰면 console.log 안 써도 됨
// Allows access to state via getState()
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {});
// dispatch안에는 action을 넣는데 action 함수는 action을 return 하니까
// action함수 넣으면 된다
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();

// 처음에 intial state 나오고
// dispatch 할 때 마다 update되서 updateState로그 찍힘
