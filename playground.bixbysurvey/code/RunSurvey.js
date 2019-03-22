module.exports.function = function runSurvey (surveyNumber, surveyRatingText) {
  var rating = 5;
  if(surveyRatingText.includes("five") || surveyRatingText.includes("good"))
    rating = 5;
  if(surveyRatingText.includes("1") || surveyRatingText.includes("crappy"))
    rating = 1;
  
  var runningValue = window.document.surveyNumber
  var newValue = (currentValue + rating)/2; //just our rating system.
  document.window.surveyNumber = newValue;
  
  return {
    runningValue : document.window.surveyNumber
  }
}
