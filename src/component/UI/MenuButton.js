import { useEffect, useState } from "react";

import classes from "./MenuButton.module.css";

const MenuButton = (props) => {
  const [showTitle, setShowTitle] = useState(false);
  const [item, setItem] = useState(0);
  const items = ["home", "about", "skills", "portfolio", "contact"];

  const itemHandler = (element) => {
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

    const indexOfItemOnView = coordinateItems.findIndex((i, index) => {
      if (top >= coordinateItems[coordinateItems.length - 1]) {
        return i === coordinateItems[coordinateItems.length - 1];
      } else return i <= top && top < coordinateItems[index + 1];
    });
    setItem(indexOfItemOnView);
  };

  window.addEventListener("scroll", scrollHandling);

  return (
    <button
      className={
        !showTitle
          ? classes["menu-button"]
          : `${classes["menu-button"]} ${classes.stretch}`
      }
      onMouseEnter={() => setShowTitle(true)}
      onMouseLeave={() => setShowTitle(false)}
      onClick={() => itemHandler(props.title)}
      data-id={props.title}
    >
      <div className={classes.icon}>{props.icon}</div>
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
