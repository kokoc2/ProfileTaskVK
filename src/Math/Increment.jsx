import React from "react";
import "../App.css";
import { useState } from "react";
import App from "../App";

const Increment = ({ setCount, count }) => {
  const buttText = document.getElementById("buttLikeText");
  const loadingSpinner = document.getElementById("loadingSpinner");
  buttText.classList.add("hidden");
  loadingSpinner.classList.remove("hidden");
  setTimeout(() => {
    if (this.count < 99) {
      this.setCount(this.count + 1);
    } else if (String(this.count).length < 3) {
      this.setCount(this.count + "+");
    }
    buttText.classList.remove("hidden");
    loadingSpinner.classList.add("hidden");
  }, 1000);
};
export default Increment;
