import React, { useCallback, useEffect, ReactNode } from "react";
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

type EmblaCarouselEntry = {
  node: ReactNode;
};

type EmblaCarouselProps = {
  numOfShownElements: number;
  maxElementWidth: number;
  contents: EmblaCarouselEntry[];
  onSlidesInViewChange?: (
    inViewNodes: Element[],
    notInViewNodes: Element[]
  ) => void;
  viewportPadding?: string;
  options?: EmblaOptionsType;
};

const SPACING = "16px";

const EmblaCarousel: React.FC<EmblaCarouselProps> = (props) => {
  const {
    maxElementWidth,
    options,
    numOfShownElements,
    onSlidesInViewChange,
    viewportPadding,
    contents,
  } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { ...options, inViewThreshold: 0.5 },
    [Autoplay()]
  );

  const callOnSlidesInViewChange = useCallback(() => {
    if (!emblaApi || !onSlidesInViewChange) {
      return;
    }

    const inViewIndices = emblaApi.slidesInView();
    const notInViewIndices = emblaApi.slidesNotInView();

    const inViewChildren = emblaApi
      .slideNodes()
      .filter((_, index) => inViewIndices.includes(index))
      .map((parentNode) => parentNode.children[0]);
    const notInViewChildren = emblaApi
      .slideNodes()
      .filter((_, index) => notInViewIndices.includes(index))
      .map((parentNode) => parentNode.children[0]);
    onSlidesInViewChange(inViewChildren, notInViewChildren);
  }, [emblaApi, onSlidesInViewChange]);

  // Call to handle slide initialization
  callOnSlidesInViewChange();

  const removeOnSlidesInViewChangeListeners = useCallback(() => {
    if (!emblaApi || !onSlidesInViewChange) {
      return;
    }
    emblaApi.off("slidesInView", callOnSlidesInViewChange);
  }, [emblaApi, onSlidesInViewChange, callOnSlidesInViewChange]);

  useEffect(() => {
    if (emblaApi && onSlidesInViewChange) {
      emblaApi.on("slidesInView", callOnSlidesInViewChange);
    }

    return () => {
      removeOnSlidesInViewChangeListeners();
    };
  }, [
    emblaApi,
    callOnSlidesInViewChange,
  ]);

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
      <div
        className="embla__viewport"
        ref={emblaRef}
        style={{
          padding: viewportPadding,
          maxWidth: `calc(${
            maxElementWidth * numOfShownElements
          }px + ${numOfShownElements} * ${SPACING})`,
        }}
      >
        <div className="embla__container">
          {
            // Wrap each child in the Embla Carousel Slide wrapper
            contents.map((child, index) => (
              <div
                className="embla__slide"
                style={{
                  padding: `calc(${SPACING} / 2)`,
                  // This CSS rule sets the flex-basis such that `numOfShownElement` amount of items are shown
                  flex: `0 0 ${(1 / numOfShownElements) * 100}%`,
                }}
                key={index}
              >
                {child.node}
              </div>
            ))
          }
        </div>
      </div>
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </div>
  );
};

export default EmblaCarousel;
