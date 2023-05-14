let dataProvider, dataProvider2, gridView, gridView2, grid, clickData;
let current;


let inboundCancelField = [
    {
        "fieldName" : "inboundNo",
        "dataType" : "text"
    },
    {
        "fieldName" : "inboundDt",
        "dataType" : "text"
    },
    {
        "fieldName" : "inboundReqDt",
        "dataType" : "text"
    },
    {
        "fieldName" : "inboundReqNo",
        "dataType" : "number"
    },
    {
        "fieldName" : "inboundExpDt",
        "dataType" : "text"
    },
    {
        "fieldName" : "customerCd",
        "dataType" : "text"
    },
    {
        "fieldName" : "customerNm",
        "dataType" : "text"
    },
    {
        "fieldName" : "remark",
        "dataType" : "text"
    }
]

let inboundCancel2Field = [
    {
        "fieldName" : "inboundReqSeq",
        "dataType" : "text"
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
        "fieldName": "expDt",
        "dataType": "text",
        "datetimeFormat":"yyyy-MM-dd"
    },
    {
        "fieldName" : "makeLotNo",
        "dataType" : "text"
    },
    {
        "fieldName": "makeDt",
        "dataType": "text",
        "datetimeFormat":"yyyy-MM-dd"
    },
    {
        "fieldName" : "qty",
        "dataType" : "number"
    },
    {
        "fieldName" : "supplierCd",
        "dataType" : "text"
    },
    {
        "fieldName": "supplierNm",
        "dataType": "text",
    },
    {
        "fieldName" : "subRemark",
        "dataType" : "text"
    }
]


let inboundCancelColumn =[
    {
        "name" : "inboundNo",
        "fieldName" : "inboundNo",
        "type" :"data",
        "width" : "110",
        "header" :{
            "text" : "입고순번",
        },
        visible:false //임시
    },
    {
        "name" : "inboundDt",
        "fieldName" : "inboundDt",
        "type" :"data",
        "width" : "110",
        "header" :{
            "text" : "입고순번",
        },
        visible:false //임시
    },
    {
        "name" : "inboundReqDt",
        "fieldName" : "inboundReqDt",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "입고요청일자",
        }
    },
    {
        "name" : "inboundReqNo",
        "fieldName" : "inboundReqNo",
        "type" :"data",
        "width" : "80",
        "header" :{
            "text" : "입고요청번호",
        }
    },
    {
        "name" : "inboundExpDt",
        "fieldName" : "inboundExpDt",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "입고예정일",
        }
    },
    {
        "name" : "customerCd",
        "fieldName" : "customerCd",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "화주사코드",
        }
    },
    {
        "name" : "customerNm",
        "fieldName" : "customerNm",
        "type" :"data",
        "width" : "150",
        "header" :{
            "text" : "화주사명",
        }
    },
    {
        "name" : "remark",
        "fieldName" : "remark",
        "type" :"data",
        "width" : "150",
        "header" :{
            "text" : "비고",
        }
    }
]

let inboundCancel2Column =[
    {
        "name" : "inboundSeq",
        "fieldName" : "inboundSeq",
        "type" :"data",
        "width" : "110",
        "header" :{
            "text" : "입고순번",
        },
      visible:false
    },
    {
        "name" : "itemCd",
        "fieldName" : "itemCd",
        "type" :"data",
        "width" : "110",
        "header" :{
            "text" : "품목 코드",
        }
    },
    {
        "name" : "itemNm",
        "fieldName" : "itemNm",
        "type" :"data",
        "width" : "180",
        "header" :{
            "text" : "품목 명",
        },
    },
    {
        "name" : "expDt",
        "fieldName" : "expDt",
        "width" : "100",
        "type" :"data",
        "header" :{
            "text" : "유통기한",
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
        "name" : "makeDt",
        "fieldName" : "makeDt",
        "width" : "100",
        "type" :"data",
        "header" :{
            "text" : "생산일자",
        }
    },
    {
        "name" : "qty",
        "fieldName" : "qty",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "수량",
        },
        "numberFormat" : "#,###.00",
        footer: {
            text: "",
            numberFormat : "#,###.00",
            expression: "sum",
        }
    },
    {
        "name" : "supplierCd",
        "fieldName" : "supplierCd",
        "type" :"data",
        "width" : "110",
        "header" :{
            "text" : "공급사 코드",
        }
    },
    {
        "name" : "supplierNm",
        "fieldName" : "supplierNm",
        "type" :"data",
        "width" : "180",
        "header" :{
            "text" : "공급사 명",
        }
    },
    {
        "name" : "subRemark",
        "fieldName" : "subRemark",
        "type" :"data",
        "width" : "150",
        "header" :{
            "text" : "상세 비고",
        }
    }
]

    function createGrid(container) {
        dataProvider = new RealGrid.LocalDataProvider();
        dataProvider.setFields(inboundCancelField);
        dataProvider.setOptions({
            softDeleting: false                 // 행 삭제 시 실제로 삭제 됨, true: 삭제되지 않고 상태를 보여줌
        })

        gridView = new RealGrid.GridView(container);
        gridView.setEditOptions({
            insertable: true,          // 행 삽입 가능 여부
            deleteable: true,          // 행 삭제 가능 여부
            commitByCell: true,
            commitWhenExitLast: true,
            commitWhenLeave: true
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
        gridView.setColumns(inboundCancelColumn);

        /**
         * 셀 버튼 클릭 이벤트
         * @param grid
         * @param cell
         * @param col
         */
        gridView.onCellButtonClicked = function (grid, cell, col) {

            let rowState = dataProvider.getRowState(cell.itemIndex);
            if (rowState == 'updated' || rowState == 'none')
                return;

            if (document.getElementById('customerCd').value == '') {
                alert('화주사를 선택해야합니다.');
                return;
            }
            current = gridView.getCurrent();
            SearchModal('item', '');     // 모달 열기
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

    function createGrid2(container) {
        dataProvider2 = new RealGrid.LocalDataProvider();
        dataProvider2.setFields(inboundCancel2Field);
        dataProvider2.setOptions({
            softDeleting: false                 // 행 삭제 시 실제로 삭제 됨, true: 삭제되지 않고 상태를 보여줌
        })

        gridView2 = new RealGrid.GridView(container);
        gridView2.setEditOptions({
            insertable: true,          // 행 삽입 가능 여부
            deleteable: true,          // 행 삭제 가능 여부
            commitByCell: true,
            commitWhenExitLast: true,
            commitWhenLeave: true
        });
        gridView2.header.height = 30;
        gridView2.footer.height = 30;
        gridView2.stateBar.width = 16;

        gridView2.pasteOptions.checkReadOnly = true; //readOnly이거나 editable이 false인 Column은 paste대상에서 제외
        gridView2.displayOptions.rowHeight = 23;
        gridView2.pasteOptions.numberChars = [',']   //***숫자 필드에 '1,000'을 붙여넣기 할때 ','문자로 인해 1 붙여넣기 될때
        gridView2.sortMode = 'explicit';         // 셀 입력중 그리드에 정렬이 설정되어 있을 경우 정렬이 자동으로 적용되지 않음
        gridView2.filterMode = 'explicit';

        gridView2.setDataSource(dataProvider2);
        gridView2.setColumns(inboundCancel2Column);

        /**
         * 셀 버튼 클릭 이벤트
         * @param grid
         * @param cell
         * @param col
         */
        gridView2.onCellButtonClicked = function (grid, cell, col) {

            let rowState = dataProvider2.getRowState(cell.itemIndex);
            if (rowState == 'updated' || rowState == 'none')
                return;

            if (document.getElementById('customerCd').value == '') {
                alert('화주사를 선택해야합니다.');
                return;
            }
            current = gridView2.getCurrent();
            SearchModal('item', '');     // 모달 열기
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
        gridView2.onEditRowChanged = function (grid, index, dataRow, field, oldValue, newValue) {
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
        gridView2.onKeyDown= function (grid, event) {

            if((event.key == "Enter") && gridView2.getCurrent().column == 'item_cd'){
                if(document.getElementById('customerCd').value == '')
                {
                    alert('화주사를 선택해야합니다.');
                    return;
                }
                current = gridView2.getCurrent();
                SearchModal('item',gridView2.getEditValue() );
                //gridView.setCurrent({dataRow:current.dataRow}); // 수동 포커스 이동
            }
        }

    };

function addRow() {
    dataProvider2.addRow({});
}

function Search(){

    gridView.showLoading();

    let searchCondition = new Object();
    searchCondition.bizCd = sessionStorage.getItem('bizCd')
    searchCondition.centerCd = sessionStorage.getItem('centerCd');
    searchCondition.inboundReqNo = document.getElementById('inboundReqNo').value;    // 신규 입력시 공백,
    searchCondition.inboundReqFromDt = document.getElementById('inboundReqFromDt').value;
    searchCondition.inboundReqToDt = document.getElementById('inboundReqToDt').value;

    $.ajax({
        method : "POST",
        url : sessionStorage.getItem("serverUrl")+"/api/inboundReq/list",
        contentType: 'application/json',
        data: JSON.stringify(searchCondition),
        success: function(data) {

            dataProvider.fillJsonData(data.data, {});   // 결과 데이터 그리드에 채워 넣기
            gridView.closeLoading();                    // 로딩창 닫기

        }, error: function (data) {
            gridView.closeLoading();
        }
    });
}

Date.prototype.YYYYMMDDHHMMSS = function () {
    let yyyy = this.getFullYear().toString();
    let MM = pad(this.getMonth() + 1,2);
    let dd = pad(this.getDate(), 2);
    let hh = pad(this.getHours(), 2);
    let mm = pad(this.getMinutes(), 2)
    let ss = pad(this.getSeconds(), 2)

    return yyyy +  MM + dd+  hh + mm + ss;
};

function pad(number, length) {
    let str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}


function Cancel(){

    let data = new Array();
    let jsonData = null;

    gridView.showLoading();

    let getSaveData = gridView.getCheckedRows();
    console.log(getSaveData);
    let saveData = getSaveData.map(e=>{
        return e
    });

    if(saveData.length > 0) {
        for (let i in saveData) {

            jsonData = dataProvider.getJsonRow(saveData[i]);        // 그리드의 값으로 json 데이터 생성
            jsonData.bizCd = sessionStorage.getItem('bizCd');
            data.push(jsonData);
        }
    }
    console.log(data);

    $.ajax({
        method : "POST",
        url : sessionStorage.getItem("serverUrl")+"/api/inboundReq/Inspectcancel",
        contentType: 'application/json',
        data: JSON.stringify (data),
        success: function(data) {
            console.log(data);
            dataProvider.clearRowStates();              // 추가 & 수정 상태 초기화
            dataProvider2.clearRowStates();              // 추가 & 수정 상태 초기화
            gridView.closeLoading();                    // 로딩창 닫기

        }, error: function (data) {
            gridView.closeLoading();
        }
    });
}

function InspectCancel(){

    let data = new Array();
    let jsonData = null;
    let jsonData2 = null;

    gridView.showLoading();

    let getSaveData = gridView.getCheckedRows();
    console.log(getSaveData);
    let saveData = getSaveData.map(e=>{
        return e
    });

    if(saveData.length > 0) {
        for (let i in saveData) {

            jsonData = dataProvider.getJsonRow(saveData[i]);        // 그리드의 값으로 json 데이터 생성
            jsonData2 = dataProvider2.getJsonRow(saveData[i]);        // 그리드의 값으로 json 데이터 생성
            jsonData.bizCd = sessionStorage.getItem('bizCd');
            data.push(jsonData);
            data.push(jsonData2);
        }
    }
    console.log(data);

    $.ajax({
        method : "POST",
        url : sessionStorage.getItem("serverUrl")+"/api/inboundReq/InspectDelete",
        contentType: 'application/json',
        data: JSON.stringify (data),
        success: function(data) {
            console.log(data);
            dataProvider2.clearRowStates();              // 추가 & 수정 상태 초기화
            gridView.closeLoading();                    // 로딩창 닫기

        }, error: function (data) {
            gridView.closeLoading();
        }
    });
}

$(function() {
    gridView.onCellClicked = function (grid, clickData) {
        gridView.showLoading();
        dataProvider2.clearRows();

        let searchCondition = new Object();
        searchCondition.bizCd = sessionStorage.getItem('bizCd')
        searchCondition.centerCd = sessionStorage.getItem('centerCd');
        searchCondition.inboundReqNo = document.getElementById('inboundReqNo').value;    // 신규 입력시 공백,
        searchCondition.inboundReqFromDt = document.getElementById('inboundReqFromDt').value;
        searchCondition.inboundReqToDt = document.getElementById('inboundReqToDt').value;
        searchCondition.status = 2;

        $.ajax({
            method: "POST",
            url: sessionStorage.getItem("serverUrl") + "/api/inboundReq/list",
            contentType: 'application/json',
            data: JSON.stringify(searchCondition),
            success: function (data) {

                dataProvider2.fillJsonData(data.data, {});   // 결과 데이터 그리드에 채워 넣기
                gridView2.closeLoading();
                gridView.closeLoading(); // 로딩창 닫기

            }, error: function (data) {
                gridView2.closeLoading();
                gridView.closeLoading(); // 로딩창 닫기
            }
        });
    };
});


