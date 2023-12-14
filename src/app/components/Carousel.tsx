import React, { useCallback, ReactNode } from "react";
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaCarouselType,
} from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";

type EmblaCarouselProps = {
  numOfShownElements: number;
  children: ReactNode;
  elementWidth: number;
  options?: EmblaOptionsType;
};

const SPACING = "1rem";

const EmblaCarousel: React.FC<EmblaCarouselProps> = (props) => {
  const { elementWidth, options, numOfShownElements, children } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const { autoplay } = emblaApi.plugins();
    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onButtonClick);
  return (
    <div className="embla">
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <div className="embla__viewport" ref={emblaRef}>
        <div
          className="embla__container"
          style={{
            marginLeft: `calc(${SPACING} * -1);`,
            maxWidth: `calc(${
              elementWidth * numOfShownElements
            }px + ${numOfShownElements} * ${SPACING})`,
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              className="embla__slide"
              style={{
                paddingLeft: SPACING,
                flex: `0 0 ${(1 / numOfShownElements) * 100}%`,
              }}
              key={index}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </div>
  );
};

export default EmblaCarousel;
