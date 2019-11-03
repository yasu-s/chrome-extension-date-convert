const txtDate = document.getElementById("txtDate");

txtDate.addEventListener('keyup', function(){
  const result = document.getElementById("txtDateResult");
  const date = moment(txtDate.value).toDate();
  result.value = date.getTime().toString();
});
