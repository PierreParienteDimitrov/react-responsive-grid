import React from 'react';
import './App.css';
import { Hero } from './Components/Hero';
import { Cols } from './Components/Cols';

function App() {
	return (
		<>
			<Hero
				url={'https://picsum.photos/200/300'}
				height={'100vh'}
				xsWidth={'95%'}
				smWidth={'90%'}
				mdWidth={'90%'}
				lgWidth={'70%'}
				img={'https://picsum.photos/200'}
			/>

			<Cols
				xsPadding={'2rem'}
				smPadding={'5rem'}
				mdPadding={'2rem'}
				lgPadding={'6rem'}
			/>
		</>
	);
}

export default App;
