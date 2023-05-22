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
    <title>센터현황</title>
    <%
        Date now = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String nowDatetime = formatter.format(now);
    %>

    <link href="/bsrp/css/base-style.css" rel="stylesheet" >
    <link rel="stylesheet" href="/bsrp/css/realgrid-sky-blue.css?vs=<%=nowDatetime%>"/>
    <script type="text/javascript" src="/libs/jquery-3.4.0.min.js"></script>
    <script type="text/javascript" src="/libs/jquery-splitter.js"></script>
    <script type="text/javascript" src="/libs/jszip.min.js"></script>
    <script type="text/javascript" src="/libs/realgrid-lic.js"></script>
    <script type="text/javascript" src="/libs/realgrid.2.6.0.min.js"></script>
    <script type="text/javascript" src="/libs/realgrid-utils.js?vs=<%=nowDatetime%>"></script>


</head>
<body>
<p>기준정보 > 센터관리</p>
<button onclick="Search()" id="Search">조회</button>
<button onclick ="popUp1('/center/center_iud','center_iud','1000','500')">추가</button>
<button onclick ="popUp1('/center/center_iud','center_iud','1000','500')">변경/삭제</button>

<div id="centerList" style="width: 100%; height:650px"></div>

</body>

<script>
    let nowDate = new Date();	// 현재 날짜 및 시간

    window.addEventListener('DOMContentLoaded', function () {

        createGrid("centerList")

    });
</script>
<script type="text/javascript" src="/mst/center/center_list.js?vs=<%=nowDatetime%>"></script>
</html>
