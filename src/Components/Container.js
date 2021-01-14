import React from 'react';
import { useBreakpoint } from '../Context/BreakpointsContext';

export const Container = ({
	xsPadding,
	smPadding,
	mdPadding,
	lgPadding,
	children,
}) => {
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
		<div
			style={{
				width: `${breakpointPadding()}`,
				alignItems: 'top',
				justifyContent: 'center',
				gridTemplateColumns: '1fr',
			}}
		>
			{children}
		</div>
	);
};
