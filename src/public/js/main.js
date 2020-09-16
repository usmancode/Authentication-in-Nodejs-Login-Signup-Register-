var baseUrl = "http://localhost:5000";


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
        alert("User Created")
    
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
