const sign_buttons = document.querySelectorAll(".sign-button");

sign_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    getData(button.dataset.sign, "today");
  });
});
//API ----> https://aztro.sameerkumar.website/?sign=aries&day=today

function getData(sign, date) {
  fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=${date}`, {
    method: "POST",
  })
    .then((data) => {
      return data.json();
    })
    .then((completedata) => {
      render(completedata, sign);
    });
}

function render(data, sign) {
  const result_wrap = document.querySelector(".result");
  const result_sign = document.querySelector(".result .picked-sign");
  const result_color = document.querySelector(".result .color");
  const result_comp = document.querySelector(".result .compatibility");
  const result_date = document.querySelector(".result .current-date");
  const result_date_range = document.querySelector(".result .date-range");
  const result_desc = document.querySelector(".result .description");
  const result_l_num = document.querySelector(".result .lucky-number");
  const result_l_time = document.querySelector(".result .lucky-time");
  const result_mood = document.querySelector(".result .mood");

  result_wrap.style.display = "block";
  result_sign.innerHTML = sign;
  result_color.innerHTML = data.color;
  result_comp.innerHTML = data.compatibility;
  result_date.innerHTML = data.current_date;
  result_date_range.innerHTML = data.date_range;
  result_desc.innerHTML = data.description;
  result_l_num.innerHTML = data.lucky_number;
  result_l_time.innerHTML = data.lucky_time;
  result_mood.innerHTML = data.mood;
}
