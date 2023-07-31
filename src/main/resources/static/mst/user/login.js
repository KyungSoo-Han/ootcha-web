

function Search() {
    let id = document.getElementById('id').value;
    let password = document.getElementById('password').value;
    let requestBody = new Object();
    requestBody.id = id;
    requestBody.password = password;

    console.log(sessionStorage.getItem("serverUrl"));

    const isLocalhost = window.location.hostname === 'localhost';
    const serverUrl = isLocalhost ? 'http://localhost:81' : 'http://api.ootcha.com:81';

    $.ajax({
        method : "POST",
        url : serverUrl + "/api/user/login", //?" +"gbn=DETAIL&biz_cd=10001&center_cd="+ srh_center_nm +"",
        contentType: 'application/json',
        data:JSON.stringify(requestBody),
        success: function(data) {
            console.log(data);
            sessionStorage.setItem("token", data.data.token);
            sessionStorage.setItem("userName",data.data.username );
            window.location.replace("/");

            sessionStorage.setItem("userId", id);

        }, error: function (data) {
            console.log(data);
        }
    });
}