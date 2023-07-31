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
    <title>공급사 관리</title>
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
    <script type="text/javascript" src="/libs/realgrid.2.6.3.min.js"></script>
    <script type="text/javascript" src="/libs/realgrid-utils.js?vs=<%=nowDatetime%>"></script>


</head>
<body>

<p>기준정보 > 공급사등록</p>

<button onclick="Save()" id="Save">저장</button>
<button onclick="Delete()" id="Delete2">삭제</button>
<button onclick="New()" >초기화</button>


<table>
    <tr>
        <th>화주사:</th>
        <td><select id="customer"></select></td>

        <th>공급사 코드:</th>
        <td><input type="text" id="supplierCd"></td>
    </tr>

    <tr>
        <th>공급사명:</th>
        <td><input type="text" id="supplierNm"></td>

        <th>공급사 영문명:</th>
        <td><input type="text" id="supplierEnm"></td>
    </tr>

    <tr>
        <th>대표자:</th>
        <td><input type="text" id="ownerNm"></td>

        <th>사업자번호:</th>
        <td><input type="text" id="bizNo"></td>
    </tr>

    <tr>
        <th>종목:</th>
        <td><input type="text" id="bizItem"></td>

        <th>업태:</th>
        <td><input type="text" id="bizType"></td>
    </tr>

    <tr>
        <th>이메일:</th>
        <td><input type="text" id="email"></td>

        <th>전화번호:</th>
        <td><input type="text" id="telNo"></td>
    </tr>

    <tr>
        <th>팩스번호:</th>
        <td><input type="text" id="faxNo"></td>

        <th>우편번호:</th>
        <td><input type="text" id="zipNo"></td>
    </tr>

    <tr>
        <th>주소:</th>
        <td><input type="text" id="zipAddr1"></td>

        <th>상세주소:</th>
        <td><input type="text" id="zipAddr2"></td>
    </tr>

    <tr>
        <th>홈페이지:</th>
        <td><input type="text" id="homepage"></td>

        <th>상태:</th>
        <td><input type="checkbox" id="status"></td>
    </tr>
</table>


</body>
<script type="text/javascript" src="/mst/supplier/supplier_iud.js?vs=<%=nowDatetime%>"></script>
</html>
