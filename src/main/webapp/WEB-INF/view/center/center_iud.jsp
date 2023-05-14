<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%--
  Created by IntelliJ IDEA.
  User: seano
  Date: 2023-03-12
  Time: 오후 11:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>센터 관리</title>
    <%
        Date now = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String nowDatetime = formatter.format(now);
    %>

    <link href="/bsrp/css/base-style.css" rel="stylesheet" >
    <script type="text/javascript" src="/libs/jquery-3.4.0.min.js"></script>
    <script type="text/javascript" src="/libs/jquery-splitter.js"></script>


</head>
<body>

<p>기준정보 > 센터등록</p>

<button onclick="Save()" id="Save">저장</button>
<button onclick="Delete()" id="Delete2">삭제</button>
<button onclick="New()" >초기화</button>

<table>
    <tr>
        <th>센터 코드:</th>
        <td><input type="text" id="centerCd"></td>

        <th>센터명:</th>
        <td><input type="text" id="centerNm"></td>
    </tr>

    <tr>
        <th>우편번호:</th>
        <td><input type="text" id="zipNo"></td>

        <th>주소:</th>
        <td><input type="text" id="zipAddr1"></td>
    </tr>

    <tr>
        <th>상세 주소:</th>
        <td><input type="text" id="zipAddr2"></td>

        <th>비고:</th>
        <td><input type="text" id="remark"></td>
    </tr>

</table>


</body>
<script type="text/javascript" src="/mst/center/center_iud.js?vs=<%=nowDatetime%>"></script>
</html>
