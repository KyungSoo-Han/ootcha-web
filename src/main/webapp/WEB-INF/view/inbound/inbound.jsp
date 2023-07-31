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
    <title>입고현황</title>
    <%
        Date now = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String nowDatetime = formatter.format(now);
    %>
    <link rel="stylesheet" href="/bsrp/css/realgrid-sky-blue.css?vs=<%=nowDatetime%>"/>
    <link rel="stylesheet" href="/inbound/inbound_modal.css?vs=<%=nowDatetime%>"/>
    <script type="text/javascript" src="/libs/realgrid-lic.js?vs=<%=nowDatetime%>"></script>
    <script type="text/javascript" src="/libs/realgrid.2.6.3.min.js"></script>
    <script type="text/javascript" src="/libs/jquery-3.4.0.min.js" ></script>
    <script type="text/javascript" src="/inbound/inbound.js?vs=<%=nowDatetime%>"></script>
    <script type="text/javascript" src="/inbound/inbound_modal.js?vs=<%=nowDatetime%>"></script>
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
    <p>입고 > 입고작업</p>

    <button id="searchBtn" onclick="Search()">조회</button>
    <button id="inbound" onclick="Inbound()">입고</button>
    <div>
        <table>
            <tr>
                <th><label>입고요청번호</label></th>
                <td><input type="text" id="inboundReqNo" ></td>

                <th><label>입고예정일</label></th>
                <td><input type="date" id="inboundExpFromDt"  > ~ <input type="date" id="inboundExpToDt"></td>
            </tr>
            <tr>
                <th><label>화주사코드</label></th>
                <td>
                    <input type="text" id="customerCd">
                    <button type="button" onclick="SearchModal('customer','')">찾기</button>
                </td>

                <th><label>화주사명</label></th>
                <td><input type="text" id="customerNm" readonly ></td>

                <th><label>공급사코드</label></th>
                <td>
                    <input type="text" id="supplierCd">
                    <button type="button" onclick="SearchModal('supplier','')">찾기</button>
                </td>

                <th><label>공급사명</label></th>
                <td><input type="text" id="supplierNm" readonly></td>
            </tr>
        </table>
    </div>
    <br>
    <div id="inbound1"  style ="width: 100%; height:260px"></div>
<%--    <button id="newBtn" onclick="addRow()">추가</button>
    <button id="saveBtn" onclick="AddInboundReqItem()">저장</button>--%>
    <div id="inbound2"  style ="width: 100%; height:400px"></div>

    <div id="modalWrap" >
        <div id="modalBody" >
            <div style ="width: 100%; height:20px; padding-top:5px; padding-bottom:5px" >
                <label>코드</label><input type="text" id="code" >
                <label>명칭</label><input type="text" id="name" >
            </div>
            <div id="selectGrid"  style ="width: 100%; height:490px">
            </div>
            <div  style ="width: 100%; height:70px">
                <label id="modal_param"></label>
                <button id="searchModalBtn" onclick="SearchModal('','')">조회</button>
                <button id="selectBtn" onclick="btnSelect()">선택</button>
                <button id="closeBtn" onclick="closeModal()">닫기</button>
            </div>
        </div>
    </div>
</body>
<script>
    let nowDate = new Date();	// 현재 날짜 및 시간
    let fdate = new Date(nowDate.setMonth(nowDate.getMonth() - 1));	// 한달 전

    window.addEventListener('DOMContentLoaded', function () {

        createGrid("inbound1")
        createGrid2("inbound2")
        createModalGrid("selectGrid")

        document.getElementById("inboundExpFromDt").value = fdate.toISOString().slice(0,10);
        document.getElementById("inboundExpToDt").value = new Date().toISOString().slice(0,10);
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