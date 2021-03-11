function clearText()  {

var proceed = confirm("Are you sure you want to reset?");
if (proceed) {
    document.getElementById('name').value = "";
    document.getElementById('surname').value = "";
    document.getElementById('city').value = "";
} else {
  
}
}