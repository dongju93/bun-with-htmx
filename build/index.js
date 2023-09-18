// src/index.tsx
var Components = function(props) {
  return jsxDEV("body", {
    children: jsxDEV("h1", {
      style: { color: "red" },
      children: props.message
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
};
import {
jsxDEV
} from "react/jsx-dev-runtime";
console.log(jsxDEV(Components, {
  message: "Hello world"
}, undefined, false, undefined, this));
