import React from 'react';
import { useBreakpoint } from '../Context/BreakpointsContext';

export const Cols = ({ xsPadding, smPadding, mdPadding, lgPadding }) => {
	const breakpoints = useBreakpoint();

	const breakpointPadding = () => {
		if (breakpoints.xs) {
			return xsPadding;
		} else if (breakpoints.sm) {
			return smPadding;
		} else if (breakpoints.md) {
			return mdPadding;
		} else if (breakpoints.lg) {
			return lgPadding;
		}
	};

	return (
		<section
			style={{
				height: '100%',
				display: 'grid',
				alignItems: 'top',
				justifyContent: 'center',
				gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
				gridGap: '1rem',
				padding: ` 0 ${breakpointPadding()}`,
				textAlign: 'center',
			}}
		>
			<article style={{ width: '100%' }}>
				<h1>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, error!
				</h1>
			</article>
			<article>
				<h1>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odit
					laudantium temporibus modi rerum vero facilis deleniti dicta id ab.
				</h1>
			</article>
			<article>
				<h1>Lorem ipsum dolor sit.</h1>
			</article>
			<article>
				<h1>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, odio?
				</h1>
			</article>
		</section>
	);
};
