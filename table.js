// variable declaration
var company = document.getElementById("companyInput").value;
var year = document.getElementById("yearInput").value;
var description = document.getElementById("descriptionInput").value;
var errorMessage = document.getElementById("errorMessage");
var buttonData = document.getElementById("databtn");

// button click event listner
buttonData.addEventListener("click", addDataToTable);
function addDataToTable() {
  // Validation
  if (company === "" || year === "" || description === "") {
    errorMessage.classList.add("error");
    errorMessage.innerHTML = "Please enter all fields";
  } else {
    var table = document
      .getElementById("workTable")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = company;
    cell2.innerHTML = year;
    cell3.innerHTML = description;

    // Clear input fields
    document.getElementById("companyInput").value = "";
    document.getElementById("yearInput").value = "";
    document.getElementById("descriptionInput").value = "";

    // clear error message
    errorMessage.classList.remove("error");
    errorMessage.innerHTML = "";
  }
}
