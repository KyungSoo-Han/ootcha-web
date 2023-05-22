let bizCd = "1";// document.getElementById("bizCd").value;
let centerCd = "1";// document.getElementById("bizCd").value;

const isLocalhost = window.location.hostname === 'localhost';
const serverUrl = isLocalhost ? 'http://localhost:81' : 'http://api.ootcha.com:81';

const token = sessionStorage.getItem("token");
const userName = sessionStorage.getItem("userName");
const username = document.getElementById("username");
const logoutStr = document.getElementById("logout-str");
const loginLink = document.getElementById("login-link");
const signupLink = document.getElementById("signup-link");

if (token != null) {
    username.textContent = userName + '님 반갑습니다.';
    logoutStr.textContent = "로그아웃";
} else {
    loginLink.textContent = "로그인";
    signupLink.textContent= "회원가입";
}

function logout(){
    sessionStorage.clear();
    location.reload();
}

sessionStorage.setItem("bizCd", bizCd);
sessionStorage.setItem('centerCd', centerCd);
sessionStorage.setItem("serverUrl", serverUrl);