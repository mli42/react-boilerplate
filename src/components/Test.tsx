import React, { FC } from 'react';

interface Props {
	className?: string;
}

const Test: FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<p>This is test component</p>
		</div>
	);
};

export default Test;
