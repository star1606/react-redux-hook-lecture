const redux = require("redux");

const BUY_CAKE = "BUY_CAKE";

// action creator
// 액션함수를 액션객체를 return 함
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action", // property
  };
}

// (pervious, action) => newState

// state 초기화
// 객체임(key : value)
const initialState = {
  numberofCakes: 10,
};

const reducer = (state = initialState, action) => {
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

const store = redux.createStore(reducer);
// reduxStore가 application state를 낚아챈다

// Allows access to state via getState()
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

// dispatch안에는 action을 넣는데 action 함수는 action을 return 하니까
// action함수 넣으면 된다
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();

// 처음에 intial state 나오고
// dispatch 할 때 마다 update되서 updateState로그 찍힘


