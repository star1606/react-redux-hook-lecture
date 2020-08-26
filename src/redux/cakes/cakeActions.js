import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
    // payload reducer에 추가적인 정보를 보내줌
  };
};
