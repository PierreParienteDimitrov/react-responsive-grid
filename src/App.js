import React from 'react';
import './App.css';
import { Hero } from './Components/Hero';
import { IsMobile } from './Utils/MediaQueries';

function App() {
	const isMobile = IsMobile();

	return (
		<Hero
			url={'https://picsum.photos/200/300'}
			height={'80vh'}
			desktopWidth={'70%'}
			mobileWidth={'90%'}
			img={'https://picsum.photos/200'}
			isMobile={isMobile}
		/>
	);
}

export default App;
