function calculateGrade() { 
  let mark1 = parseFloat(document.getElementById("mark1").value);
  let mark2 = parseFloat(document.getElementById("mark2").value);
  let mark3 = parseFloat(document.getElementById("mark3").value);
  let average = (mark1 + mark2 + mark3) / 3;
  let grade;
if (average > 79) {
  grade = "A";
} else if (average >= 60 && average < 79) {
  grade = "B";
} else if (average >= 50 && average < 59) {
  grade = "C";
} else if (average >= 40 && average < 49) {
  grade = "D";
} else {
  grade = "E";
}
document.getElementById ("results").innerHTML = "your average grade is:" + grade;

}














