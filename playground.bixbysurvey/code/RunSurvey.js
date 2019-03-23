module.exports.function = function runSurvey (SurveyNumber, SurveyRating, SurveyUser) {

  if (!SurveyUser)
    SurveyUser = "Me"
    // return "Rating: " + SurveyRating + "\nFor " + SurveyNumber + "\nFrom: " + SurveyUser
  return "Rating: " + SurveyRating + " For: " + SurveyNumber + " From: " + SurveyUser //simulator test
}
