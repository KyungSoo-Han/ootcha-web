
function Search() {
    let id = document.getElementById('id').value;
    let password = document.getElementById('password').value;
    let requestBody = new Object();
    requestBody.id = id;
    requestBody.password = password;

    $.ajax({
        method : "POST",
        url : sessionStorage.getItem("serverUrl") + "/api/user/login", //?" +"gbn=DETAIL&biz_cd=10001&center_cd="+ srh_center_nm +"",
        contentType: 'application/json',
        data:JSON.stringify(requestBody),
        success: function(data) {
            console.log(data);
            sessionStorage.setItem("token", data.data.token);
            sessionStorage.setItem("userName",data.data.username );
            window.location.replace("/");


        }, error: function (data) {
            console.log(data);
        }
    });
}