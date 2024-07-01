"use client";

import { useState } from "react";

import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
  selectStatus,
} from "@/redux/features/counter/counterSlice";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectStatus);
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          className="ml-[4px] mr-[4px]"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span aria-label="Count" className={''}>
          {count}
        </span>
        <button
          className={''}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={''}>
        <input
          className={''}
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={(e) => {
            setIncrementAmount(e.target.value);
          }}
        />
        <button
          className={''}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={''}
          disabled={status !== "idle"}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={''}
          onClick={() => {
            dispatch(incrementIfOdd(incrementValue));
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};