import chroma from "chroma-js";
import { useEffect, useRef, useState } from "react";

import classes from "./Sphere.module.css";

const Sphere = (props) => {
  const [show, setShow] = useState(false);
  const { top, left } = props;

  const colors = [
    chroma(props.color).brighten(3.5),
    chroma(props.color).brighten(2),
    chroma(props.color).darken(1),
    chroma(props.color).darken(5),
  ];

  const textColor = props.color.split(",");
  textColor.pop();
  textColor.push(" 1)");
  const mainColor = textColor.toString();

  const sphereRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let skillsOffsetTop = sphereRef.current.getBoundingClientRect().top;

      if (window.pageYOffset > skillsOffsetTop) {
        setShow(true);
      }
    });
  }, []);

  useEffect(() => {
    if (show) {
      sphereRef.current.style.top = top;
      sphereRef.current.style.left = left;
    }
  }, [top, left, show]);

  return (
    <section
      className={classes.stage}
      ref={sphereRef}
      style={{
        height: `${props.size}px`,
        width: `${props.size}px`,
        top: "50%",
        left: "50%",
      }}
    >
      <figure
        className={`${classes.ball} ${classes.bubble}`}
        id="bubble"
        style={{
          background: `radial-gradient(circle at 20% 15%,
            ${colors[0]},
            ${colors[1]} 10%,
            ${colors[2]} 70%,
            ${colors[3]} 80%
        )`,
        }}
      >
        <span
          className={classes.text}
          id="text"
          style={{
            fontSize: `${Math.ceil(props.size / 6)}px`,
            color: chroma(mainColor).darken(2),
          }}
        >
          {props.text}
        </span>
      </figure>
    </section>
  );
};
export default Sphere;
