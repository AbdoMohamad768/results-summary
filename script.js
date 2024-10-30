"use strict";

const result_label = document.querySelector(".final-result");
const summaryList = document.querySelector(".summary ul");

fetch("/public/data.json")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    let totalScore = 0;

    data.forEach((test) => {
      const html = `
        <li>
          <span class="test-category">
            <img src='${test.icon}' alt>
            ${test.category}
          </span>
          <span class="test-score">${test.score} <span>/ 100</span></span>
        </li>
      `;

      summaryList.insertAdjacentHTML("beforeend", html);

      totalScore += test.score;
    });

    result_label.textContent = Math.floor(totalScore / data.length);
  })
  .catch((err) => {
    console.error(err);
  });
