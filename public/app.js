window.addEventListener('DOMContentLoaded',()=>{
    loadUser();
})
// add user
document.addEventListener('DOMContentLoaded',()=>{
document.getElementById('userForm').addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log("form submitted")

    const username=document.getElementById('username').value
    const email=document.getElementById('email').value
    const phone=document.getElementById('phone').value

    axios.post('/admin/add-user',{username,email,phone})
    .then(()=>{
        loadUser()
    })
    .catch(err=>console.log(err))
})
loadUser();
})
// Load users
function loadUser(){
    const userList=document.getElementById('userList')
    userList.innerHTML=''
    axios.get('/admin/users')
    .then(result=>{
        const users=result.data;
        users.forEach(user => {
            const li=document.createElement('li')
            li.textContent=`${user.username}-${user.email}-${user.phone}`;
            const deleteBtn=document.createElement('button')
            deleteBtn.textContent='Delete'
            deleteBtn.addEventListener('click',()=>deleteUser(user.id))
            li.appendChild(deleteBtn)
            userList.appendChild(li)
        });
    })
    .catch(err=>console.log(err))
}

// delete user 
function deleteUser(userID){
    axios.delete(`/admin/delete-user/${userID}`)
    .then(()=>loadUser())
    .catch(err=>console.log(err))
}
loadUser();