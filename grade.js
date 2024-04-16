
const gradeSubmit = document.getElementById('grade-submit');
const result = document.getElementById('result');

gradeSubmit.addEventListener('click', getResults);

result.style.display = 'none'; 

function getResults(){
  const numSubjects = parseInt(document.getElementById('numSubjects').value);
  let marks = [];
  
  for (let i = 0; i < numSubjects; i++) {
    let subMark = parseInt(prompt(`Enter marks for Subject ${i+1}:`));
    marks.push(subMark); // Storing subject marks in an array
  }

  let msg = "";
  for (let i = 0; i < numSubjects; i++) {
    let grade = "";
    if(marks[i] >= 90){
      grade = "A";
    } else if(marks[i] >= 80){
      grade = "B";
    } else if(marks[i] >= 70){
      grade = "C";
    } else if(marks[i] >= 60){
      grade = "D";
    } else if(marks[i] >= 50){
      grade = "E";
    } else {
      grade = "F";
    }
    msg += `Your mark for Subject ${i+1} is ${marks[i]} and your grade for this subject is ${grade}<br>`;
  }
  
  result.style.display = 'block';
  result.innerHTML = msg;
}