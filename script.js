function generateInputs() {
  let subjectNum = document.getElementById("subject-number").value;
  let inputContainer = document.getElementById("input-container");
  let inputContainerCH = document.getElementById("input-containerCH");
  let endHeading = document.getElementById("end_heading");
  inputContainer.innerHTML = "";
  inputContainerCH.innerHTML = "";

  for (let i = 1; i <= subjectNum; i++) {
    // let label = document.createElement("label");
    // label.innerHTML = "Gpa of " + i + " Subject";
    // inputContainer.appendChild(label);

    let input = document.createElement("input");
    input.type = "number";
    input.placeholder = "Gpa of " + i + " Subject"
    input.className = "gpa";
    inputContainer.appendChild(input);
  }

  for (let i = 1; i <= subjectNum; i++) {
    // let label = document.createElement("label");
    // label.innerHTML = "Credit Hour of " + i + " Subject";
    // inputContainerCH.appendChild(label);

    let input = document.createElement("input");
    input.type = "number";
    input.placeholder = "Credit Hour of " + i + " Subject";
    input.className = "credit-hour";
    inputContainerCH.appendChild(input);
  }

}

function calculate() {
  let gpas = document.getElementsByClassName("gpa");
  let creditHours = document.getElementsByClassName("credit-hour");
  let totalCreditHours = 0;
  let weightedGpa = 0;

  for (let i = 0; i < gpas.length; i++) {
    let gpa = parseFloat(gpas[i].value);
    let creditHour = parseFloat(creditHours[i].value);
    totalCreditHours += creditHour;
    weightedGpa += gpa * creditHour;
  }

  let result = document.getElementById("result");
  result.innerHTML = "GPA: "+(weightedGpa / totalCreditHours).toFixed(2);
}