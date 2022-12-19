import React, { FC } from 'react';
import Test from '~/src/components/Test';

const Home: FC = () => {
	return (
		<React.Fragment>
			<div>
				<p>This is Home View</p>
				<Test />
			</div>
		</React.Fragment>
	);
};

export default Home;
