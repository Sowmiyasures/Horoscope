const txt1 = document.getElementById("name");
const btn1 = document.getElementById("send");
const out1 = document.getElementById("greeting");
const error_wrap = document.getElementById("errors");
const error_name = document.getElementById("name-error");
const error_consent = document.getElementById("consent-error");
const consent = document.getElementById("consent");

function fun1(e) {
  const text_has_value = txt1.value.length > 0;
  const consent_checked = consent.checked;

  if (e.target.id === "name") {
    consent.checked = false;
  }

  if (!text_has_value || !consent_checked) {
    error_wrap.style.display = "block";
  } else {
    error_wrap.style.display = "none";
  }

  if (!text_has_value) {
    error_name.style.display = "block";
  } else {
    error_name.style.display = "none";
  }

  if (!consent_checked) {
    error_consent.style.display = "block";
  } else {
    error_consent.style.display = "none";
  }

  if (text_has_value && consent_checked) {
    btn1.disabled = false;
  } else {
    btn1.disabled = true;
  }

  if (text_has_value && consent_checked && e.target.id === "send") {
    error_wrap.style.display = "none";
    error_name.style.display = "none";
    error_consent.style.display = "none";
    out1.textContent =
      "We have now permission to send our newsletter to " + txt1.value + "!";
  } else {
    out1.textContent = "";
  }
}

btn1.disabled = true;
error_wrap.style.display = "block";

consent.addEventListener("change", fun1);
txt1.addEventListener("input", fun1);
btn1.addEventListener("click", fun1);
