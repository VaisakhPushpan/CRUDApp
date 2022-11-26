let data =[];  //store all data in this array
const table = document.querySelector("tbody");


function submitForm(e){
    e.preventDefault();
    let formElement = e.target;
    let formData = new FormData(formElement);
    data.push({
      fname : formData.get("fname"),
      lname : formData.get("lname"),
      phone : formData.get("phone"),
      bgroup : formData.get("bgroup")
    })
    formElement.reset()
    populateTable()
}

function populateTable(){
  table.innerHTML = ""
  data.forEach((item,index)=>{
    table.innerHTML += `
    <tr>
    <td>${index+1}</td>
    <td>${item.fname + " " + item.lname}</td>
    <td>${item.phone}</td>
    <td>${item.bgroup}</td>
    <td><i class="fa fa-pencil-square-o mx-2" onclick="edit(${index})" aria-hidden="true"></i><i class="fa fa-trash-o" onclick="delte(${index})" aria-hidden="true"></i></td>
    `
  })
  
}

function delte(i){
   data.splice(i,1);
   populateTable();
}
function edit(i){
  document.querySelector('[name="fname"]').value = data[i].fname;
  document.querySelector('[name="lname"]').value = data[i].lname;
  document.querySelector('[name="phone"]').value = data[i].phone;
  document.querySelector('[name="bgroup"]').value = data[i].bgroup;
  populateTable();
}
  





 
