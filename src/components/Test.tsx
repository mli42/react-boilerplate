import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '~/hooks/redux';
import { decrement, increment } from '~/redux/counterSlice';

interface Props {
	className?: string;
}

const Test: FC<Props> = ({ className }) => {
	const { value } = useAppSelector((state) => state.counter);
	const dispatch = useAppDispatch();

	return (
		<div className={className}>
			<p>This is test component</p>
			<p>Counter: {value}</p>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
		</div>
	);
};

export default Test;
