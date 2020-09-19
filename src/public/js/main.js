var baseUrl = "http://localhost:5055";

const socket = io()


 $("#login").submit(function(e) {
  e.preventDefault();

  var bodyFormData =  $(this).serializeArray();
  bodyFormData = getFormData(bodyFormData)
  
  axios({
    method: 'post',
    url: baseUrl+'/auth/login',
    data: bodyFormData,
    headers: {'Content-Type': 'application/json' }
    })
    .then(function (response) {
      console.log(response.data)
        // //handle success
        // console.log(response);
          // alert("Success")
        alert("Login Succesfully")
        localStorage.setItem('token',response.data.token)
        window.location.href = "userprofile.html";

    })
    .catch(function (response) {
        //handle error
        console.log(response);
        alert("Email or Password Incoreect")
    })

  });




  function getFormData(unindexed_array){
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}


$("#logout").click(function(e) {
  e.preventDefault();

  axios({
    method: 'get',
    url: baseUrl+'/auth/logout',
    headers: {'Content-Type': 'application/json' , 'Authorization': 'Bearer '+localStorage.getItem('token') }
    })
    .then(function (response) {
        //handle success
        // console.log(response);
        // alert("Success")
          alert("Logout Successfully")
          localStorage.removeItem('token')
        
        window.location.href = "index.html";
    })
    .catch(function (response) {
        //handle error
        alert("Please Login First")
        console.log(response);
    })


})



$("#register").submit(function(e) {
  e.preventDefault();

  var bodyFormData =  $(this).serializeArray();
  bodyFormData = getFormData(bodyFormData)
  
  axios({
    method: 'post',
    url: baseUrl+'/auth/register',
    data: bodyFormData,
    headers: {'Content-Type': 'application/json' ,'Authorization': 'Bearer '+localStorage.getItem('token')}
    })
    .then(function (response) {
        // //handle success
        // console.log(response);
          // alert("Success")
          socket.emit('userRegister',(result)=>{
           console.log("USMAN")
           
            })
          
            
        alert("User Created ")

    
    })
    .catch(function (response) {
        //handle error
        console.log(response);
        alert("Somthing Worng")
    })

  });


  $("#createNewUser").click(function(e) {
    e.preventDefault();
    window.location.href = "register.html";

  });


  $("#showUsers").click(function(e) {  
    axios({
      method: 'get',
      url: baseUrl+'/showUsers',
      
      headers: {'Content-Type': 'application/json'}
      })
      .then(function (response) {
        var len = response.data.length;
        for(var i=0; i<len; i++){
        //     var id = response.data[i].id;
      
            var name = response.data[i].name;
            var email = response.data[i].email;
            var role = response.data[i].role;

            var tr_str = "<tr>" +
                "<td align='center'>" + (i+1) + "</td>" +
              
                "<td align='center'>" + name + "</td>" +
                "<td align='center'>" + email + "</td>" +
                "<td align='center'>" + role + "</td>" +
                "</tr>";
                $("#userTable tbody").append(tr_str);
        }
          // //handle success
           console.log(response.data);
            // alert("Success")
           //alert(response.data)
      
        }).catch(function (response) {
          //handle error
          console.log(response);
          alert("Somthing Worng")
      })
  
    });


  //**sockets */

  const $messages = document.querySelector('#messages')
  const messageTemplate = document.querySelector('#message-template').innerHTML
  

socket.on('message', (message) => {
  console.log('Message obj: ',message)
  const html = Mustache.render(messageTemplate, {
       
      message
      
  })
  $messages.insertAdjacentHTML('beforeend', html)
})

document.querySelector('#login').addEventListener('submit', (e) => {
    e.preventDefault()

    const loginUserEmail = e.target.elements.email.value

    socket.emit('sendMessage', loginUserEmail)
})







