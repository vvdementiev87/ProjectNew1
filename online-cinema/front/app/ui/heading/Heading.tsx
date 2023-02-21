import cn from 'classnames';
import React from 'react';

type Props = {
	title: string;
	className?: string;
};

const Heading = ({ title, className }: Props) => {
	return (
		<h1
			className={cn(
				'text-white text-opacity-80 font-semibold',
				className?.includes('xl') ? '' : 'text-3xl',
				className
			)}
		>
			{title}
		</h1>
	);
};

export default Heading;
