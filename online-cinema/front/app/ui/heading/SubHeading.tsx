import React from 'react';

type Props = {
	title: string;
};

const SubHeading = ({ title }: Props) => {
	return <h2 className={`text-white text-xl mb-5 font-semibold`}>{title}</h2>;
};

export default SubHeading;
