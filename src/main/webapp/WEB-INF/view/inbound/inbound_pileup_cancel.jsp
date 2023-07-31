<%--
  Created by IntelliJ IDEA.
  User: hanks
  Date: 2023-01-27
  Time: 오후 2:26
--%>

<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>적치취소</title>
    <%
        Date now = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String nowDatetime = formatter.format(now);
    %>
    <link rel="stylesheet" href="/bsrp/css/realgrid-sky-blue.css?vs=<%=nowDatetime%>"/>
    <link rel="stylesheet" href="/inbound/inbound_req_modal.css?vs=<%=nowDatetime%>"/>
    <script type="text/javascript" src="/libs/realgrid-lic.js?vs=<%=nowDatetime%>"></script>
    <script type="text/javascript" src="/libs/realgrid.2.6.3.min.js"></script>
    <script type="text/javascript" src="/libs/jquery-3.4.0.min.js" ></script>
    <script type="text/javascript" src="/inbound/inbound_pileup_cancel.js?vs=<%=nowDatetime%>"></script>
    <script type="text/javascript" src="/inbound/inbound_req_modal.js?vs=<%=nowDatetime%>"></script>
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
    <p>입고 > 적치취소</p>

    <button id="searchBtn" onclick="Search()">조회</button>
    <button id="PileupCancel" onclick="PileupCancel()">적치취소</button>
    <div>
        <table>
            <tr>
                <th><label>입고번호</label></th>
                <td><input type="text" id="inboundNo" ></td>

                <th><label>입고예정일</label></th>
                <td><input type="date" id="inboundReqFromDt"  > ~ <input type="date" id="inboundReqToDt"></td>
            </tr>
        </table>
    </div>
    <br>
    <div id="inboundPileCancel"  style ="width: 100%; height:400px"></div>

</body>
<script>
    let nowDate = new Date();	// 현재 날짜 및 시간
    let fdate = new Date(nowDate.setMonth(nowDate.getMonth() - 1));	// 한달 전

    window.addEventListener('DOMContentLoaded', function () {

        createGrid("inboundPileCancel")

        document.getElementById("inboundReqFromDt").value = inboundReqFromDt.toISOString().slice(0,10);
        document.getElementById("inboundReqToDt").value = inboundReqToDt.toISOString().slice(0,10);
    });

    customerCd.addEventListener("keyup", function (event) {
        customerNm.value = '';
        let supplierCd = document.getElementById('supplierCd');
        let supplierNm = document.getElementById('supplierNm');

        if(event.key=="Enter")
            SearchModal('customer',customerCd.value);
    })
    supplierCd.addEventListener("keyup", function (event) {
        supplierNm.value = '';

        if(event.key=="Enter")
            SearchModal('supplier',supplierCd.value);
    })

    let code = document.getElementById('code');
    code.addEventListener("keyup", function (event) {
        console.log(event.key);
        if(event.key=="Enter")
            SearchModal('item','');
    })

    let name = document.getElementById('name');
    name.addEventListener("keyup", function (event) {
        console.log(event.key);
        if(event.key=="Enter")
            SearchModal('item','');
    })

</script>
</html>