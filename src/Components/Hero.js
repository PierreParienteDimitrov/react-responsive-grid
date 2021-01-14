import React from 'react';
import { useBreakpoint } from '../Context/BreakpointsContext';

export const Hero = ({
	url,
	height,
	xsWidth,
	smWidth,
	mdWidth,
	lgWidth,
	img,
}) => {
	const breakpoints = useBreakpoint();
	console.log(breakpoints);

	const breakpointWidth = () => {
		if (breakpoints.xs) {
			return xsWidth;
		} else if (breakpoints.sm) {
			return smWidth;
		} else if (breakpoints.md) {
			return mdWidth;
		} else if (breakpoints.lg) {
			return lgWidth;
		}
	};

	return (
		<header
			style={{
				background: `url(${url})`,
				backgroundSize: 'cover',
				height: `${height}`,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<section
				style={{
					height: '100%',
					display: 'grid',
					width: `${breakpointWidth()}`,
					alignItems: 'center',
					gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
				}}
			>
				<article style={breakpoints.sm ? { order: '2' } : { order: '1' }}>
					<h1>This is the title cool</h1>
					<h4>{breakpoints.sm}</h4>
					<button>This is the CTA</button>
				</article>

				<article style={breakpoints.sm ? { order: '1' } : { order: '2' }}>
					<img src={`${img}`} alt='' />
				</article>
			</section>
		</header>
	);
};
