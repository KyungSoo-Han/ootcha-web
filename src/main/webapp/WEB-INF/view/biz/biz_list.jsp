<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%--
  Created by IntelliJ IDEA.
  User: seano
  Date: 2023-03-24
  Time: 오전 11:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>사업장현황</title>
  <%
    Date now = new Date();
    SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
    String nowDatetime = formatter.format(now);
  %>

  <link rel="stylesheet" href="/bsrp/css/realgrid-sky-blue.css?vs=<%=nowDatetime%>"/>
  <link href="/bsrp/css/base-style.css" rel="stylesheet" >
  <script type="text/javascript" src="/libs/jquery-3.4.0.min.js"></script>
  <script type="text/javascript" src="/libs/jquery-splitter.js"></script>
  <script type="text/javascript" src="/libs/jszip.min.js"></script>
  <script type="text/javascript" src="/libs/realgrid-lic.js"></script>
  <script type="text/javascript" src="/libs/realgrid.2.6.3.min.js"></script>
  <script type="text/javascript" src="/libs/realgrid-utils.js?vs=<%=nowDatetime%>"></script>

  <style>
    .left-align-column{
      text-align: left;
    }
    input:read-only{
      background-color: #f3ebdb;
    }
  </style>

</head>
<body>

  <p>사업장관리 > 사업장관리</p>

  <div>
    <button onclick="Search()" >조회</button>
    <button onclick ="popUp('/biz/biz_iud','biz_iud','1000','500')">추가</button>
    <button onclick ="popUp('/biz/biz_iud','biz_iud','1000','500')">변경/삭제</button>
  </div>

  <div id="bizList" style="width: 100%; height:650px"></div>

</body>

<script>
  let nowDate = new Date();	// 현재 날짜 및 시간

  window.addEventListener('DOMContentLoaded', function () {

    createGrid("bizList")

  });
</script>
<script type="text/javascript" src="/mst/biz/biz_list.js?vs=<%=nowDatetime%>"></script>
</html>