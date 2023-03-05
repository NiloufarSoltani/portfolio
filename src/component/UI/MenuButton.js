import { useEffect, useState } from "react";

import classes from "./MenuButton.module.css";

const MenuButton = (props) => {
  const [showTitle, setShowTitle] = useState(false);
  const [item, setItem] = useState(0);
  const items = ["home", "about", "skills", "portfolio", "contact"];

  const getOffset = (element, horizontal = false) => {
    if (!element) return 0;
    return (
      getOffset(element.offsetParent, horizontal) +
      (horizontal ? element.offsetLeft : element.offsetTop)
    );
  };

  const itemHandler = (element) => {
    props.func && props.func();
    if (props.topNav) {
      const topOfElement = document.getElementById(element).offsetTop;
      window.scrollTo({top: topOfElement - 72, behavior: 'smooth'})
    } else
      document.getElementById(element).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.getElementById("home").classList.add("active");
  }, []);

  useEffect(() => {
    if (item >= 0) {
      [...document.getElementsByClassName(classes.active)].map((e) =>
        e.classList.remove(classes.active)
      );

      [...document.getElementsByClassName(classes["menu-button"])]
        .filter((i) => i.dataset.id === items[item])[0]
        .classList.add(classes.active);
    }
  }, [item]);

  const scrollHandling = () => {
    const top = window.pageYOffset + 1;

    const coordinateItems = items.map(
      (i) => document.getElementById(i).offsetTop
    );

    const elementsHeight = items.map(
      (i) => document.getElementById(i).offsetHeight
    );

    const indexOfItemOnView = coordinateItems.findIndex((i, index) => {
      return i <= top && top < elementsHeight[index] + i;
    });
    setItem(indexOfItemOnView);
  };

  window.addEventListener("scroll", scrollHandling);

  return (
    <button
      className={classes["menu-button"]}
      onMouseEnter={() => {if(props.icon){setShowTitle(true)}}}
      onMouseLeave={() => {if(props.icon){setShowTitle(false)}}}
      onClick={() => itemHandler(props.title)}
      data-id={props.title}
    >
      {props.icon && <div className={classes.icon}>{props.icon}</div>}
      <div
        className={
          !showTitle ? classes["title"] : `${classes["title"]} ${classes.show}`
        }
      >
        {props.title}
      </div>
    </button>
  );
};
export default MenuButton;
