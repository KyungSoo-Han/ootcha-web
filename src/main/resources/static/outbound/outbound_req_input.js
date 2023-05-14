let dataProvider, gridView;
let current;


let outboundReqField = [
    {
        "fieldName" : "outboundReqSeq",
        "dataType" : "number"
    },
    {
        "fieldName" : "itemCd",
        "dataType" : "text"
    },
    {
        "fieldName" : "itemNm",
        "dataType" : "text"
    },
    {
        "fieldName" : "qty",
        "dataType" : "number"
    },
    {
        "fieldName" : "price",
        "dataType" : "number"
    },
    /*  {
          "fieldName" : "amount",
          "dataType" : "number"
      },*/
    {
        "fieldName": "expDt",
        "dataType": "text",
        "datetimeFormat":"yyyy-MM-dd"
    },
    {
        "fieldName": "makeDt",
        "dataType": "text",
        "datetimeFormat":"yyyy-MM-dd"
    },
    {
        "fieldName" : "makeLotNo",
        "dataType" : "text"
    },
    {
        "fieldName" : "subRemark",
        "dataType" : "text"
    }
]


let outboundReqColumn =[
    {
        "name" : "outboundReqSeq",
        "fieldName" : "outboundReqSeq",
        "type" :"data",
        "width" : "50",
        "header" :{
            "text" : "순번",
        },
        "visible" :false,
        numberFormat: "#,##0",
        styleCallback: function(grid, dataCell){
            let ret = {}
            ret.editable = false;
            ret.styleName = "readonly-column";
            return ret;
        }
    },{
        "name" : "itemCd",
        "fieldName" : "itemCd",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "품목코드",
        },
        button: "action",
        buttonVisibility: "always",
        styleCallback: function(grid, dataCell){
            let ret = {}

            if(dataCell.item.rowState == 'created' || dataCell.item.itemState == 'appending' || dataCell.item.itemState == 'inserting'){
                ret.editable = true;
            } else {
                ret.editable = false;
                ret.styleName = "readonly-column";
            }

            return ret;
        }
    },
    {
        "name" : "itemNm",
        "fieldName" : "itemNm",
        "type" :"data",
        "width" : "150",
        "header" :{
            "text" : "품목명",
        },
        styleCallback: function(grid, dataCell){
            let ret = {}
            ret.editable = false;
            ret.styleName = "readonly-column";

            return ret;
        },
        styleName: 'left-align-column'
    },
    {
        "name" : "qty",
        "fieldName" : "qty",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "수량",
        },
        "numberFormat" : "#,###.00"
    },
    {
        "name" : "price",
        "fieldName" : "price",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "단가",
        },
        "numberFormat" : "#,###.00"
    },
    /*   {
           "name" : "amount",
           "fieldName" : "amount",
           "type" :"data",
           "width" : "100",
           "header" :{
               "text" : "공급가",
           },
           "numberFormat" : "#,###.00",
           styleCallback: function(grid, dataCell){
               let ret = {}
               ret.editable = false;
               ret.styleName = "readonly-column";
               return ret;
           }
       },*/
    {
        "name" : "expDt",
        "fieldName" : "expDt",
        "width" : "100",
        "header" :{
            "text" : "유통기한",
        },
        "editor": {
            "type": "date",
            "datetimeFormat": "yyyy-MM-dd",
            "commitOnSelect": true,
            "dropDownWhenClick":true,
            "showButtons": false,
            "mask": {
                "editMask": "9999-99-99",
                "includedFormat": true
            },
            "defaultShowDate": "today"
        }
    },
    {
        "name" : "makeDt",
        "fieldName" : "makeDt",
        "width" : "100",
        "header" :{
            "text" : "생산일자",
        },
        "editor": {
            "type": "date",
            "datetimeFormat": "yyyy-MM-dd",
            "commitOnSelect": true,
            "dropDownWhenClick":true,
            "showButtons": false,
            "mask": {
                "editMask": "9999-99-99",
                "includedFormat": true
            },
            "defaultShowDate": "today"
        }
    },
    {
        "name" : "makeLotNo",
        "fieldName" : "makeLotNo",
        "type" :"data",
        "width" : "150",
        "header" :{
            "text" : "생산LOT",
        }
    },
    {
        "name" : "subRemark",
        "fieldName" : "subRemark",
        "type" :"data",
        "width" : "150",
        "header" :{
            "text" : "비고",
        },
        styleName: 'left-align-column'
    }
]
function createGrid(container) {
    dataProvider = new RealGrid.LocalDataProvider();
    dataProvider.setFields(outboundReqField );
    dataProvider.setOptions({
        softDeleting: false                 // 행 삭제 시 실제로 삭제 됨, true: 삭제되지 않고 상태를 보여줌
    })

    gridView = new RealGrid.GridView(container);
    gridView.setEditOptions({
        insertable          : true,          // 행 삽입 가능 여부
        deleteable          : true,          // 행 삭제 가능 여부
        commitByCell        : true,
        commitWhenExitLast  : true,
        commitWhenLeave     : true
    });
    gridView.header.height = 30;
    gridView.footer.height = 30;
    gridView.stateBar.width = 16;

    gridView.pasteOptions.checkReadOnly = true; //readOnly이거나 editable이 false인 Column은 paste대상에서 제외
    gridView.displayOptions.rowHeight = 23;
    gridView.pasteOptions.numberChars = [',']   //***숫자 필드에 '1,000'을 붙여넣기 할때 ','문자로 인해 1 붙여넣기 될때
    gridView.sortMode = 'explicit';         // 셀 입력중 그리드에 정렬이 설정되어 있을 경우 정렬이 자동으로 적용되지 않음
    gridView.filterMode = 'explicit';

    gridView.setDataSource(dataProvider);
    gridView.setColumns(outboundReqColumn);

    /**
     * 셀 버튼 클릭 이벤트
     * @param grid
     * @param cell
     * @param col
     */
    gridView.onCellButtonClicked = function(grid, cell, col) {

        let rowState = dataProvider.getRowState(cell.itemIndex);
        if(rowState == 'updated' || rowState == 'none' )
            return;

        if(document.getElementById('customerCd').value == '')
        {
            alert('화주사를 선택해야합니다.');
            return;
        }
        current = gridView.getCurrent();
        SearchModal('item','');     // 모달 열기
    };
    /**
     * 셀 로우 데이터 변경 이벤트
     * @param grid
     * @param itemIndex
     * @param dataRow
     * @param field
     * @param oldValue
     * @param newValue
     */
    gridView.onEditRowChanged = function (grid, index, dataRow, field, oldValue, newValue) {
        let v = 0;
        console.log(field);
        if(field == 4){         // 수량 변경시
            v = grid.getValue(index, "item_qty");
            grid.setValue(index, "supply_amt", v * newValue);
        }
        else if(field == 3){    // 단가 변경시
            v = grid.getValue(index, "price_amt");
            grid.setValue(index, "supply_amt", v * newValue);
        }
    };
    /**
     * 셀 키 입력시
     * @param grid
     * @param event
     */
    gridView.onKeyDown= function (grid, event) {

        if((event.key == "Enter") && gridView.getCurrent().column == 'item_cd'){
            if(document.getElementById('customerCd').value == '')
            {
                alert('화주사를 선택해야합니다.');
                return;
            }
            current = gridView.getCurrent();
            SearchModal('item',gridView.getEditValue() );
            //gridView.setCurrent({dataRow:current.dataRow}); // 수동 포커스 이동
        }
    }

};

function addRow() {
    dataProvider.addRow({});
}
function Search(){
    if(outboundReqDt.value == ''){
        alert('입고요청일자를 입력후 조회하세요.');
        return;
    }
    if(outboundReqNo.value == ''){
        alert('입고요청번호를 입력후 조회하세요.');
        return;
    }
    let searchCondition = new Object();
    searchCondition.bizCd = sessionStorage.getItem('bizCd')
    searchCondition.centerCd = sessionStorage.getItem('centerCd');
    searchCondition.outboundReqNo = document.getElementById('outboundReqNo').value;    // 신규 입력시 공백,
    searchCondition.outboundReqDt = document.getElementById('outboundReqDt').value;

    gridView.showLoading();
    $.ajax({
        method : "POST",
        url : sessionStorage.getItem("serverUrl")+"/api/outboundReq/get",
        contentType: 'application/json',
        data: JSON.stringify(searchCondition),
        success: function(data) {
            if (data.data.length > 0) {
                document.getElementById('outboundReqNo').readOnly = true;                   // 전표 텍스트박스 readOnly
                document.getElementById('outboundReqDt').value = data.data[0].outboundReqDt;
                document.getElementById('outboundExpDt').value = data.data[0].outboundExpDt;
                document.getElementById('customerCd').value = data.data[0].customerCd;
                document.getElementById('customerNm').value = data.data[0].customerNm;
                document.getElementById('destinationCd').value = data.data[0].destinationCd;
                document.getElementById('destinationNm').value = data.data[0].destinationNm;
                document.getElementById('remark').value = data.data[0].remark;

                dataProvider.fillJsonData(data.data, {});   // 결과 데이터 그리드에 채워 넣기
            }
            gridView.closeLoading();                    // 로딩창 닫기

        }, error: function (data) {
            gridView.closeLoading();
        }
    });
}
function Save(){

    let data = new Array();
    let jsonData = null;

    gridView.showLoading();

    //let createData = dataProvider.getStateRows('created');
    //let createData = dataProvider.getAllStateRows();
    let getSaveData = [ ...dataProvider.getAllStateRows().updated, ...dataProvider.getAllStateRows().created];
    console.log(getSaveData);
    let saveData = getSaveData.map(e=>{
        return e
    });

    if(saveData.length > 0) {
        for (let i in saveData) {

            jsonData = dataProvider.getJsonRow(saveData[i]);        // 그리드의 값으로 json 데이터 생성
            jsonData.bizCd = sessionStorage.getItem('bizCd');
            jsonData.centerCd = sessionStorage.getItem('centerCd');
            jsonData.outboundReqNo = document.getElementById('outboundReqNo').value;    // 신규 입력시 공백,
            jsonData.outboundReqDt = document.getElementById('outboundReqDt').value;
            jsonData.destinationCd = document.getElementById('destinationCd').value;
            jsonData.customerCd = document.getElementById('customerCd').value;
            jsonData.outboundExpDt = document.getElementById('outboundExpDt').value;
            jsonData.remark = document.getElementById('remark').value;
            jsonData.createId = 'hanks';

            if (jsonData.itemCd === undefined)
                continue;

            data.push(jsonData);
        }
    }
    else {
        jsonData = new Object() ;
        jsonData.bizCd = sessionStorage.getItem('bizCd');
        jsonData.centerCd = sessionStorage.getItem('centerCd');
        jsonData.outboundReqNo = document.getElementById('outboundReqNo').value;    // 신규 입력시 공백,
        jsonData.outboundReqDt = document.getElementById('outboundReqDt').value;
        jsonData.destinationCd = document.getElementById('destinationCd').value;
        jsonData.customerCd = document.getElementById('customerCd').value;
        jsonData.outboundExpDt = document.getElementById('outboundExpDt').value;
        jsonData.remark = document.getElementById('remark').value;
        jsonData.createId = 'hanks';

        data.push(jsonData);
    }
    console.log(data);

    $.ajax({
        method : "POST",
        url : sessionStorage.getItem("serverUrl")+"/api/outboundReq/save",
        contentType: 'application/json',
        data: JSON.stringify (data),
        success: function(data) {
            console.log(data);
            dataProvider.fillJsonData(data.data, {});   // 결과 데이터 그리드에 채워 넣기
            dataProvider.clearRowStates();              // 추가 & 수정 상태 초기화
            gridView.closeLoading();                    // 로딩창 닫기

            document.getElementById('outboundReqNo').value = data.data[0].outboundReqNo;       // 채번된 전표번호 입력
            document.getElementById('outboundReqNo').readOnly  = true;                   // 전표 텍스트박스 readOnly

        }, error: function (data) {
            gridView.closeLoading();
        }
    });
}
function New(){
    document.getElementById('outboundReqNo').readOnly  = false;

    let inputs = document.getElementsByTagName('input');
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].type.toLowerCase() == 'text') {
            inputs[i].value = "";
        }
    }
    let textareas = document.getElementsByTagName('textarea');
    textareas[0].value = "";

    dataProvider.clearRows();
}

function Delete(){

    if (!confirm("삭제하시겠습니까?")) {
        return;
    }
    let jsonData = new Object() ;
    jsonData.bizCd = sessionStorage.getItem('bizCd');
    jsonData.outboundReqNo = document.getElementById('outboundReqNo').value;    // 신규 입력시 공백,
    jsonData.outboundReqDt = document.getElementById('outboundReqDt').value;

    $.ajax({
        method : "DELETE",
        url : sessionStorage.getItem("serverUrl")+"/api/outboundReq/delete",
        contentType: 'application/json',
        data: JSON.stringify (jsonData),
        success: function(data) {
            if(data.status = 'OK'){
                alert('삭제되었습니다.');
                New();
            }
            else{
                alert(data.message);
            }
            gridView.closeLoading();                    // 로딩창 닫기

        }, error: function (data) {
            gridView.closeLoading();
        }
    });
}

function DeleteItem(){
    let deleteData = gridView.getCheckedRows();
    let data = new Array();
    let jsonData = null;

    gridView.showLoading();

    for (let i in deleteData) {

        jsonData = dataProvider.getJsonRow(deleteData[i]);        // 그리드의 값으로 json 데이터 생성
        jsonData.biz_cd = '10001';
        jsonData.center_cd = '01';
        jsonData.outboundReqNo = document.getElementById('outboundReqNo').value;    // 신규 입력시 공백,
        jsonData.outboundReqDt = document.getElementById('outboundReqDt').value;
        jsonData.destinationCd = document.getElementById('destinationCd').value;
        jsonData.customerCd = document.getElementById('customerCd').value;
        jsonData.outboundExpDt = document.getElementById('outboundExpDt').value;
        jsonData.remark = document.getElementById('remark').value;
        jsonData.user_id = 'hanks';

        if (jsonData.item_cd === undefined)
            continue;

        data.push(jsonData);

    }
    if(data.length == 0){
        dataProvider.removeRows(deleteData);
        gridView.closeLoading();
        return;
    }

    $.ajax({
        method : "DELETE",
        url : sessionStorage.getItem("serverUrl")+"/api/outboundReq/delete",
        contentType: 'application/json',
        data: JSON.stringify (data),
        success: function(data) {
            dataProvider.removeRows(deleteData);
            gridView.closeLoading();                    // 로딩창 닫기

            let rowCount = dataProvider.getRowCount();
            if(rowCount==0)
                New();
        }, error: function (data) {
            gridView.closeLoading();
        }
    });
}
function Test(){
    //console.log(dataProvider.getAllStateRows());
    console.log(gridView.getCheckedItems());
}

