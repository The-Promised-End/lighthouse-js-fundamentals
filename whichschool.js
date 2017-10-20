function whichSchool(age) {
  if (age < 13) {
    return ("Elementary School");
  }
  else if (age > 12 && age < 19) {
    return ("Secondary School");
  }
  else if (age >= 19 && age <= 100) {
    return ("Lighthouse Labs")
  }
}