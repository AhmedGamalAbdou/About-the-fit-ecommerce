import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Thumb } from "./EmblaCarouselThumb";
import "./css/embla.css";

const EmblaCarousel = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    selectedClass: "",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={mainViewportRef}>
          <div className="embla__container w-[500px] h-[500px]">
            {images &&
              images.map((image, index) => (
                <div className="embla__slide " key={index}>
                  <div className="">
                    <LazyLoadImage
                      className=" w-[450px] h-[450px] object-contain mx-auto"
                      src={image}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="embla embla--thumb">
        <div className="embla__viewport" ref={thumbViewportRef}>
          <div className="embla__container embla__container--thumb">
            {images &&
              images.map((image, index) => (
                <Thumb
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  imgSrc={image}
                  key={index}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
