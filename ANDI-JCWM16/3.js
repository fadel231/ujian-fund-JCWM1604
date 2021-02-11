var nameUser = [
    { No: 1,Username: "alee@gmail.com",Role: admin},
    { No: 2,Username: "jenniebp@gmail.com",Role: user},
    { No: 3,Username: "elsa@disney.com",Role: user}
];

var arrRole = ["Admin","User"]

var indexEdit = -1

const Printdata=(user) =>{

    let result = user.map((val,index)=>{
        if(indexedit== index){
            return ` <tr>
                <td>${val.No}</td>
                <td><input type="text" placeholder="username" value="${val.Username}" /></td>
                <td><input type="text" placeholder="email" value="${val.Email}" /></td>
                <td><input type="text" placeholder="role" value="${val.Role}" /></td>
                <td><input type="button" value=Save" onclick="onEditSaveClick(${val.no})"></td>
                <td><input type="button" value="Cancel" onclick="onCancelEditClick()"></td>`
            }
            return `<tr>
            <td>${val.No}</td>
            <td>${val.Username}</td>
            <td>${val.Email}</td>
            <td>${val.Role}</td>
            
            <td>
            <input type="button" value="Delete" onclick="onDeleteClick(${val.no})">
            <input type="button" value="Edit" onclick="onEditClick(${index})">
            </td>
            </tr>`
            )}
     
     document.getElementById('renderData').innerHTML=result.join('')
    const printRole=()=>{
        let result=arrRole.map((val,index)=>{
            return `<option value=${index}>${val}</option>`
        })
        document.getElementById('role').innerHTML=result.join('')
    }
    const prinInputRole=()=>{
        let result=arrRole.map((val,index)=>{
            if(index==0){
                return `<option value="" hidden selected>role</option>`
            }else{
                return `<option value=${index}>${val}</option>`
    
            }
        })
        document.getElementById('inputRole').innerHTML=result.join('')
    }
    const formUser=()=>{
        var inputUsername=document.getElementById('inputUsername').value
        var inputEmail=document.getElementById('inputEmail').value
        var inputRole=document.getElementById('inputRole').value
        if(inputUsername && inputEmail){
            var inputUser={No: No, Role: arrRole[inputRole],username: inputUsername,email: inputEmail}
            nameUser.push(inputUser)
            Printdata(nameUser)
        }else{
            alert('Please enter a username or email')
        }
    }


