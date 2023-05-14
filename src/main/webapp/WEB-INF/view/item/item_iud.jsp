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
    <title>품목 관리</title>
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
<p>기준정보 > 품목등록</p>
<div>
    <button onclick="New()" >초기화</button>
    <button onclick="Save()" >저장</button>
    <button onclick="Delete()" >삭제</button>
</div>
<table>

    <tr>
        <th>품목코드:</th>
        <td><input type="text" id="itemCd"></td>

        <th>품목명:</th>
        <td><input type="text" id="itemNm"></td>

        <th>화주사:</th>
        <td>
            <select id="customer">
            </select>
        </td>
    </tr>

    <tr>
        <th>품목 약식 명칭:</th>
        <td><input type="text" id="itemSnm"></td>

        <th>공급사:</th>
        <td>
            <select id="supplier">
            </select>
        </td>

        <th>품목 활성화 상태:</th>
        <td><input type="checkbox" id="status" ></td>
    </tr>

    <tr>
        <th>품목 설명:</th>
        <td><input type="text" id="description"></td>

        <th>제조일자 사용:</th>
        <td><input type="checkbox" id="isMakeDay" ></td>
        <th>제조일로부터 00일:</th>
        <%--<td><input type="int" id="fromMakeDay" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="fromMakeDay" ></td>
    </tr>

    <tr>
        <th>대표 로케이션:</th>
        <td><input type="text" id="location"></td>

        <th>유통기한 임박 기준일:</th>
        <%--<td><input type="int" id="nearExpDay" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="nearExpDay" ></td>

        <th>세트 여부:</th>
        <td><input type="checkbox" id="isSet" ></td>
    </tr>

    <tr>
        <th>출고 불가 기준일:</th>
        <%--<td><input type="int" id="nonDeliverDay" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="nonDeliverDay" ></td>

        <th>안전재고량:</th>
        <%--<td><input type="int" id="safeStockQty" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="safeStockQty" ></td>
    </tr>

    <tr>
        <td><label>EA 정보</label></td>
    </tr>
    <tr>
        <th>품목 바코드:</th>
        <td><input type="text" id="itemBarcode"></td>


        <th>무게:</th>
        <%--<td><input type="int" id="itemWeight" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="itemWeight" ></td>
    </tr>

    <tr>

        <th>넓이:</th>
        <%--<td><input type="int" id="itemWidth" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="itemWidth" ></td>
        <th>깊이:</th>
        <%--<td><input type="int" id="itemDepth" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="itemDepth" ></td>

        <th>높이:</th>
        <%-- <td><input type="int" id="itemHeight" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="itemHeight" ></td>

    </tr>

    <tr>
        <td><label>CASE 정보</label></td>
    </tr>
    <tr>

        <th>CASE 바코드:</th>
        <td><input type="text" id="caseBarcode"></td>

        <th>CASE 입수량:</th>
        <%--<td><input type="int" id="caseEaQty" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="caseEaQty" ></td>

        <th>CASE 무게:</th>
        <%--<td><input type="int" id="caseWeight" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="caseWeight" ></td>
    </tr>


    <tr>
        <th>CASE 넓이:</th>
        <%--<td><input type="int" id="caseWidth" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="caseWidth" ></td>

        <th>CASE 깊이:</th>
        <%--<td><input type="int" id="caseDepth" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="caseDepth" ></td>

        <th>CASE 높이:</th>
        <%--<td><input type="int" id="caseHeight" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="caseHeight" ></td>
    </tr>


    <tr>
        <td><label>BOX 정보</label></td>
    </tr>
    <tr>
        <th>BOX 바코드:</th>
        <td><input type="text" id="boxBarcode"></td>

        <th>BOX 입수량:</th>
        <%--<td><input type="int" id="boxEaQty" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="boxEaQty" ></td>

        <th>BOX 무게:</th>
        <%--<td><input type="int" id="boxWeight" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="boxWeight" ></td>
    </tr>

    <tr>
        <th>BOX 넓이:</th>
        <%--<td><input type="int" id="boxWidth" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="boxWidth" ></td>

        <th>BOX 깊이:</th>
        <%--<td><input type="int" id="boxDepth" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="boxDepth" ></td>

        <th>BOX 높이:</th>
        <%--<td><input type="int" id="boxHeight" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="boxHeight" ></td>

    </tr>

    <tr>
        <td><label>PALLET 정보</label></td>
    </tr>
    <tr>

        <th>PALLET 바코드:</th>
        <td><input type="text" id="palletBarcode"></td>

        <th>PALLET 입수량:</th>
        <%--<td><input type="int" id="palletEaQty" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="palletEaQty" ></td>

        <th>PALLET 넓이:</th>
        <%--<td><input type="int" id="palletWidth" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="palletWidth" ></td>
    </tr>


    <tr>
        <th>PALLET 깊이:</th>
        <%--<td><input type="int" id="palletDepth" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="palletDepth" ></td>

        <th>PALLET 높이:</th>
        <%--<td><input type="int" id="palletHeight" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="palletHeight" ></td>

        <th>PALLET 무게:</th>
        <%--<td><input type="int" id="palletWeight" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>--%>
        <td><input type="number" id="palletWeight" ></td>
    </tr>

</table>



</body>

<script type="text/javascript" src="/mst/item/item_iud.js?vs=<%=nowDatetime%>"></script>
</html>
