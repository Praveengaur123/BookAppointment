
function userDetail(event)
{
    event.preventDefault()
  const username=event.target.username.value
  const phone=event.target.phone.value
  const email=event.target.email.value
  
  const obj={
    username,
    phone,
    email
  };
  // localStorage.setItem(obj.email,JSON.stringify(obj))
  //showUser()
  axios.post("http://localhost:8080/user/add-user",obj)
  .then((response)=>{
    console.log("Response from server",response.data)
    showUser(response.data.newUserDetail)
    event.target.username.value=''
  event.target.email.value=''
  event.target.phone.value=''
  })
  .catch((err)=>{
    console.log("Invalid response format",err)
    document.body.innerHTML=document.body.innerHTML+"<h3>something went wrong</h3>";
    
  })
  
  }
  
    function showUser(obj){
      console.log("this is the data sent by backend: "+obj.id)
      if(!obj||!obj.id){
        console.log("user object is missing id",obj);
        return;
      }
      const userList=document.getElementById('userList')

      const list=document.createElement('li')
      list.textContent=`${obj.username}--${obj.phone}--${obj.email}`
  
      const deleteBtn=document.createElement('input')
      deleteBtn.type="button"
      deleteBtn.value="Delete"
      deleteBtn.onclick=()=>{
        console.log("deleting user with id: "+obj.id)
        axios.delete(`http://localhost:8080/user/delete-user/${obj.id}`)
        .then((response)=>{
          console.log("User deleted successfully")
          userList.removeChild(list)
        })
        .catch((err)=>{
          console.log("Error in deleting User"+err)
        })
      }
          list.appendChild(deleteBtn)
          userList.appendChild(list)
    }
    window.addEventListener("DOMContentLoaded",()=>{
    console.log("page gets reloaded")
    axios.get("http://localhost:8080/user/get-user")
    .then((response)=>{
      console.log(response);
      const allusers=response.data.allNewUser
      for(let i=0;i<allusers.length;i++){
        showUser(allusers[i])
    }
    })
    .catch((err)=>{
      console.log(err)
    })
  })