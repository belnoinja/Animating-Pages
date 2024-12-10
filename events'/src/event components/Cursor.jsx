import  { useEffect } from "react";
import "../Events.css";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    const blur = document.querySelector("#cursor-blur");

    document.addEventListener("mousemove", (event) => {
      cursor.style.left = event.pageX + 30 + "px";
      cursor.style.top = event.pageY + "px";
      blur.style.left = event.pageX - 200 + "px";
      blur.style.top = event.pageY - 200 + "px";
    });
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-blur"></div>
    </>
  );
};

export default Cursor;
