import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

const HooksCakeContainer = () => {
  // redux state의 number of cakes에 접근한다 그리고 저장한다 numOfCakes라는 변수로
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);

  // dispatch hook은 레퍼런스를 리턴한다 dispatch function으로 redux store로부터
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Numer of cakes -{numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}> Buy Cake </button>
    </div>
  );
};

export default HooksCakeContainer;
