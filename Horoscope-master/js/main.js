//make a horoscope checker for all 12 of the zodiacs when the user submits their birthdate
//declare variable for user's zodiac result
//event listener for clicking button to run function
document.getElementById('sendBirthDate').onclick = checkZodiac;//run input function
//create a function for input value variable to identify to a range of birth dates
function checkZodiac(){
  //declare variable for input value
  var month = document.getElementById('enterMonth').value;
  var day = parseInt(document.getElementById('enterDay').value);
  var zodiacSign;
  var zodiacColor;
  //make if else statement for each zodiac range to match up to input value variable, one for month and day
  if((month==="March" || month==="march" || month==="Mar" || month==="mar")&& (day >=21 && day <=31) || (month==="April" || month==="april" || month==="apr" || month==="Apr")&&(day >=1 && day<=19)){
    zodiacSign= "Passionate Aries";
    zodiacColor="rgba(178,34,30,0.7 )";
  }
  else if((month ==="April" || month==="april" || month==="apr" || month==="Apr")&& (day >=20 && day <=30) || (month==="May" || month==="may")&&(day >=1 && day<=20)){
    zodiacSign="Persistent Taurus";
    zodiacColor="rgba(247, 171, 199, 0.7)";
  }
  else if((month =="May" || month==="may")&& (day >=21 && day <=31) || (month==="June" || month==="june")&&(day >=1 && day<=20)){
    zodiacSign="Witty Gemini";
    zodiacColor="rgba(170, 220, 4, 0.7)";
  }
  else if((month==="June" || month==="june")&& (day >=21 && day <=30) || (month==="July" || month==="july")&&(day >=1 && day<=22)){
    zodiacSign="Emotional Cancer";
    zodiacColor="rgba(107, 177, 209, 0.7)";
  }
  else if((month ==="July" || month==="july")&& (day >=23 && day <=31) || (month==="August" || month==="august" || month==="aug" || month==="Aug")&&(day >=1 && day<=22)){
    zodiacSign="Confident Leo";
    zodiacColor="rgba(250, 222, 10, 0.7)";
  }
  else if((month ==="August" || month==="august" || month==="aug" || month==="Aug")&& (day >=23 && day <=31) || (month==="September" || month==="september" || month==="sept" || month==="Sept")&&(day >=1 && day<=22)){
    zodiacSign="Analytical Virgo";
    zodiacColor="rgba(21, 165, 13, 0.7)";
  }
  else if((month==="September" || month==="September" || month==="september" || month==="sept" || month==="Sept")&& (day >=23 && day <=31) || (month==="October" || month==="october" || month==="Oct" || month==="oct")&&(day >=1 && day<=22)){
    zodiacSign="Charming Libra";
    zodiacColor="rgba(93, 247, 85, 0.7)";
  }
  else if((month==="October" || month==="october" || month==="Oct" || month==="oct")&& (day >=23 && day <=31) || (month==="November" || month==="november" || month==="Nov" || month==="nov")&&(day >=1 && day<=21)){
    zodiacSign="Passionate Scorpio";
    zodiacColor="rgba(127, 6, 6, 0.7)";
  }
  else if((month==="November" || month==="november" || month==="Nov" || month==="nov")&& (day >=22 && day <=30) || (month==="December" || month==="december" || month==="Dec" || month==="dec")&&(day >=1 && day<=21)){
    zodiacSign="Adventurous Sagittarius";
    zodiacColor="rgba(163, 0, 144, 0.7)";
  }
  else if((month==="December" || month==="december" || month==="Dec" || month==="dec")&& (day >=22 && day <=31) || (month==="January" || month==="january" || month==="Jan" || month==="jan")&&(day >=1 && day<=19)){
    zodiacSign="Wise Capricorn";
    zodiacColor="rgba(11, 117, 43, 0.7)";
  }
  else if((month==="January" || month==="january" || month==="Jan" || month==="jan")&& (day >=20 && day <=31) || (month=="February" || month==="february" || month==="feb" || month==="Feb")&&(day >=1 && day<=18)){
    zodiacSign="Inventive Aquarius";
    zodiacColor="rgba(0, 235, 215, 0.7)";
  }
  else if((month==="February" || month==="february" || month==="feb" || month==="Feb")&& (day >=19 && day <=29) || (month=="March" || month=="march" || month=="Mar" || month=="mar")&&(day >=1 && day<=20)){
    zodiacSign="Selfless Pisces";
    zodiacColor="rgba(20, 255, 165, 0.7)";
  }
  else{
    alert("At least try to blend in, outer lifeform.");
  }
  displayZodiac(zodiacSign, zodiacColor);
}
function displayZodiac(userZodiac, zodiacColor){
  document.getElementById('zodiacType').innerHTML = userZodiac;
  document.getElementsByTagName('section')[0].style.background = zodiacColor;
}
//print input value variable into dom h2 tag
