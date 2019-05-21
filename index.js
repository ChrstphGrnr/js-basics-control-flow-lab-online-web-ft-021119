function scuberGreetingForFeet(distance){
  // Write your code here!
  let response;
  if ( distance > 2500) {
      response = "No can do.";
    }
    else if ( distance <= 400 ) {
      response = "This one is on me!";
    }
    else if ( distance > 2000 ) {
      response = "I will gladly take your thirty bucks.";
    }
    return response
}

function ternaryCheckCity(city){
  // Write your code here!
  let response;
  if (city === "NYC") {
    response = "Ok, sounds good."
  } else {
    response = "No go."
  }
  return response
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response;
  if (tip === 'generous') {
    response = 'Thank you so much.';
  }
  else if (tip === 'not as generous') {
    response = 'Thank you.';
  }
  else {
    response = 'Bye.';
  }
  return response
}
