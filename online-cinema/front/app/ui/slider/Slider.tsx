import React, { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

import SlideArrow from './SlideArrow/SlideArrow';
import SlideItem from './SlideItem';
import styles from './Slider.module.scss';
import { ISlide } from './slider.interface';
import { useSlider } from './useSlider';

interface ISlider {
	slides: ISlide[];
	buttonTitle?: string;
}

const Slider: FC<ISlider> = ({ slides, buttonTitle }) => {
	console.log(slides.length);
	const { handleClick, index, isNext, isPrec, slideIn } = useSlider(
		slides.length
	);
	return (
		<div className={styles.slider}>
			<CSSTransition
				in={slideIn}
				className="slide-animation"
				timeout={300}
				unmountOnExit
			>
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>
			{isPrec && (
				<SlideArrow variant="left" clickHandler={() => handleClick('prev')} />
			)}

			{isNext && (
				<SlideArrow variant="right" clickHandler={() => handleClick('next')} />
			)}
		</div>
	);
};

export default Slider;
