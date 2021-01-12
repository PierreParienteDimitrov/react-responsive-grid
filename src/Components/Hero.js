import React from 'react';

export const Hero = ({
	url,
	height,
	desktopWidth,
	mobileWidth,
	img,
	isMobile,
}) => {
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
				style={
					isMobile
						? {
								width: `${mobileWidth}`,
						  }
						: {
								height: '100%',
								display: 'grid',
								width: `${desktopWidth}`,
								alignItems: 'center',
								gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
						  }
				}
			>
				<article>
					<h1>This is the title</h1>
					<h4>{isMobile}</h4>
					<button>This is the CTA</button>
				</article>

				<article>
					<img src={`${img}`} alt='' />
				</article>
			</section>
		</header>
	);
};
