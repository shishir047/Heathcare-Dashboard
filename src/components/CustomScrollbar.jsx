import React, { useRef, useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

const CustomScrollbar = ({ children, height = "100%", width = "100%" }) => {
  const scrollbarRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      if (scrollbarRef.current) {
        const { scrollHeight, clientHeight } = scrollbarRef.current.getValues();
        setIsScrollable(scrollHeight > clientHeight);
      }
    };

    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    return () => window.removeEventListener("resize", checkScrollable);
  }, []);

  return (
    <Scrollbars
      ref={scrollbarRef}
      style={{ width, height }}
      autoHide
      onScroll={() => {
        if (scrollbarRef.current) {
          const { scrollHeight, clientHeight } = scrollbarRef.current.getValues();
          setIsScrollable(scrollHeight > clientHeight);
        }
      }}
      renderThumbVertical={(props) => (
        <div
          {...props}
          style={{
            backgroundColor: "#000000",
            borderRadius: "5px",
            width: "5px",
          }}
        />
      )}
      renderTrackVertical={(props) =>
        isScrollable ? (
          <div
            {...props}
            style={{
              backgroundColor: "#E3E4E6",
              borderRadius: "5px",
              width: "5px",
              height: "100%",
              right: "0px",
              position: "absolute",
            }}
          />
        ) : (
          <div {...props} style={{ display: "none" }} />
        )
      }
      thumbSize={70}
    >
      {children}
    </Scrollbars>
  );
};

export default CustomScrollbar;
