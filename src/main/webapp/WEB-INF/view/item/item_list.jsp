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
    <title>품목 현황</title>
    <%
        Date now = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String nowDatetime = formatter.format(now);
    %>

    <link rel="stylesheet" href="/bsrp/css/realgrid-sky-blue.css?vs=<%=nowDatetime%>"/>
    <script type="text/javascript" src="/libs/jquery-3.4.0.min.js"></script>
    <script type="text/javascript" src="/libs/jquery-splitter.js"></script>
    <script type="text/javascript" src="/libs/jszip.min.js"></script>
    <script type="text/javascript" src="/libs/realgrid-lic.js"></script>
    <script type="text/javascript" src="/libs/realgrid.2.6.3.min.js"></script>
    <script type="text/javascript" src="/libs/realgrid-utils.js?vs=<%=nowDatetime%>"></script>

</head>
<body>
<p>기준정보 > 품목관리</p>

<div>
    <table>
        <tr>
            <th>화주사 코드:</th>
            <td>
                <%--<select id="customer" style="width: 400px;"></select>--%>
                <input type="text" id="customerCd">
            </td>
            <td>
                <button onclick="Search()" id="Search">조회</button>
                <button onclick ="popUp3('/item/item_iud','item_iud','1000','1000')">추가</button>
                <button onclick ="popUp3('/item/item_iud','item_iud','1000','1000')">변경</button>
            </td>
        </tr>
    </table>
</div>
<br>
<div id="itemList" style="width: 100%; height:650px"></div>
</body>

<script>
    let nowDate = new Date();	// 현재 날짜 및 시간

    window.addEventListener('DOMContentLoaded', function () {

        createGrid("itemList")

    });
</script>
<script type="text/javascript" src="/mst/item/item_list.js?vs=<%=nowDatetime%>"></script>
</html>
