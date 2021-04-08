// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let eForm = document.querySelector('form');
//let eTable = document.getElementById('table');
let eTable = document.getElementById('employees');
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let eCount = 0;
document.querySelector('#empCount').innerHTML = parseInt(eCount);


// ADD EMPLOYEE
eForm.addEventListener('submit', (e) => {
    e.preventDefault();// PREVENT FORM SUBMISSION

    // GET THE VALUES FROM THE TEXT BOXES
        let Eid = eForm.querySelector('#id').value;
        //console.log(Eid);
        let Ename = eForm.querySelector('#name').value;
        //console.log(Ename);
        let Eext = eForm.querySelector('#extension').value;
        //console.log(Eext);
        let Eemail = eForm.querySelector('#email').value;
        //console.log(Eemail);
        let Edept = eForm.querySelector('#department').value;
        //console.log(Edept);
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
        let newRow = eTable.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
        let idCell = newRow.insertCell();
        let nameCell = newRow.insertCell();
        let nextCell = newRow.insertCell();
        let mailCell = newRow.insertCell();
        let deptCell = newRow.insertCell();
        let delCell = newRow.insertCell();
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    idCell.appendChild(document.createTextNode(Eid));
    nameCell.appendChild(document.createTextNode(Ename));
    nextCell.appendChild(document.createTextNode(Eext));
    mailCell.appendChild(document.createTextNode(Eemail));
    deptCell.appendChild(document.createTextNode(Edept));
    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm  delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.id="erase";
    deleteBtn.onclick = function(){ // DELETE EMPLOYEE
        if (confirm(`Are you sure want to delete this employee?`)) {
                            eTable.deleteRow(e.target.parentNode.parentNode.rowIndex);
                            eCount--;
                            document.querySelector('#empCount').innerHTML = parseInt(eCount);
                            console.log(eCount);
                        }
     };
    delCell.appendChild(deleteBtn);
    // RESET THE FORM
    document.getElementById('addForm').reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById("id").focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    eCount++; 
    document.querySelector('#empCount').innerHTML = parseInt(eCount);
    //console.log(eCount);
});


// console.log(document.querySelector('#erase'));

//     let delButt = document.querySelector('#erase');
//     delButt.addEventListener('click',  (e)=> {
//             if (confirm(`Are you sure want to delete this employee?`)) {
//                 eTable.deleteRow(e.target.parentElement);
//                 eCount--;
//                 document.querySelector('#empCount').innerHTML = parseInt(eCount);
//                 console.log(eCount);
//             }
//         });
    