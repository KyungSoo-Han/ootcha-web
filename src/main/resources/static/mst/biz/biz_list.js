    let dataProvider, gridView;
    let current;

    let bizListField = [

        {
            "fieldName" : "bizCd",
            "dataType" : "text"
        },
        {
            "fieldName" : "bizNm",
            "dataType" : "text"
        },
        {
            "fieldName" : "bizEnm",
            "dataType" : "text"
        },
        {
            "fieldName" : "bizNo",
            "dataType" : "text"
        },
        {
            "fieldName" : "ownerNm",
            "dataType" : "text"
        },
        {
            "fieldName" : "bizItem",
            "dataType" : "text"
        },
        {
            "fieldName" : "bizType",
            "dataType" : "text"
        },
        {
            "fieldName" : "zipNo",
            "dataType" : "text"
        },
        {
            "fieldName" : "zipAddr1",
            "dataType" : "text"
        },
        {
            "fieldName" : "zipAddr2",
            "dataType" : "text"
        },
    ]

    let bizListColumn = [
        {
            "name" : "bizCd",
            "fieldName" : "bizCd",
            "type" :"data",
            "width" : "120",
            "header" :{
                "text" : "사업장 코드",
            }
        },

        {
            "name" : "bizNm",
            "fieldName" : "bizNm",
            "type" :"data",
            "width" : "120",
            "header" :{
                "text" : "사업장 명",
            }
        },

        {
            "name" : "bizEnm",
            "fieldName" : "bizEnm",
            "type" :"data",
            "width" : "120",
            "header" :{
                "text" : "사업장 영문명",
            }
        },

        {
            "name" : "bizNo",
            "fieldName" : "bizNo",
            "type" :"data",
            "width" : "120",
            "header" :{
                "text" : "사업자 번호",
            }
        },

        {
            "name" : "ownerNm",
            "fieldName" : "ownerNm",
            "type" :"data",
            "width" : "120",
            "header" :{
                "text" : "대표자",
            }
        },

        {
            "name" : "bizItem",
            "fieldName" : "bizItem",
            "type" :"data",
            "width" : "120",
            "header" :{
                "text" : "종목",
            }
        },

        {
            "name" : "bizType",
            "fieldName" : "bizType",
            "type" :"data",
            "width" : "120",
            "header" :{
                "text" : "업태",
            }
        },

        {
            "name" : "zipNo",
            "fieldName" : "zipNo",
            "type" :"data",
            "width" : "120",
            "header" :{
                "text" : "우편번호",
            }
        },

        {
            "name" : "zipAddr1",
            "fieldName" : "zipAddr1",
            "type" :"data",
            "width" : "120",
            "header" :{
                "text" : "주소",
            }
        },

        {
            "name" : "zipAddr2",
            "fieldName" : "zipAddr2",
            "type" :"data",
            "width" : "120",
            "header" :{
                "text" : "상세주소",
            }
        },
    ]

function createGrid(container) {
    dataProvider = new RealGrid.LocalDataProvider();
    dataProvider.setFields(bizListField);
    dataProvider.setOptions({
        softDeleting: false                 // 행 삭제 시 실제로 삭제 됨, true: 삭제되지 않고 상태를 보여줌
    })

    gridView = new RealGrid.GridView(container);
    gridView.setEditOptions({
        commitByCell: true,
        commitWhenExitLast: true,
        commitWhenLeave: true
    });
    gridView.setStateBar({
        visible: false
    });
    //편집 가능,불가능 그리드
    gridView.editOptions.editable = false;
    //readOnly이거나 editable이 false인 Column은 paste대상에서 제외
    gridView.pasteOptions.checkReadOnly = true;
    gridView.groupPanel.visible = true;

    gridView.header.height = 30;
    gridView.footer.height = 30;
    gridView.stateBar.width = 16;
    gridView.displayOptions.rowHeight = 23;
    gridView.sortMode = "explicit";         // 셀 입력중 그리드에 정렬이 설정되어 있을 경우 정렬이 자동으로 적용되지 않음


    gridView.setDataSource(dataProvider);
    gridView.setColumns(bizListColumn)
    gridView.onContextMenuPopup = function (grid, x, y, elementName) {
        // realgrid-utils.js 기본 팝업 메뉴 생성
        setContextMenu(gridView);
    };
    gridView.onContextMenuItemClicked = onContextMenuClick;
}

    function Search(){

        let bizCd = sessionStorage.getItem("bizCd");

            let searchCondition = new Object();
            searchCondition.bizCd = bizCd;


            $.ajax({
                method: "GET",
                url: sessionStorage.getItem("serverUrl")+"/api/biz/list?"+"bizCd="+bizCd+"",
                contentType: 'application/json',
                datatype: JSON,
                success: function(data) {
                    if (data != null) {
                        dataProvider.fillJsonData(data.data, {});   // 결과 데이터 그리드에 채워 넣기
                        gridView.closeLoading();                    // 로딩창 닫기
                    } else {
                        window.alert("조회하신 내역이 없습니다.")
                    }
                }
            });
    }

    function excelExport() {

        if (dataProvider.getRowCount() == 0){
            alert("조회된 목록이 없습니다.");
            return;
        }
        let now = new Date();
        let tempTime = now.YYYYMMDDHHMMSS();
        gridView.exportGrid({
            type: "excel",
            target: "local",
            fileName: "입고요청현황" + +"_"+tempTime +".xlsx",
            applyDynamicStyles: true,
            done: function () {
                // 엑셀 받기 완료 후
                /* alert("done excel export")*/
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

    function popUp(url, title, w, h) {
        var screenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
        var screenTop = window.screenTop != undefined ? window.screenTop : screen.top;

        width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        var left = ((width / 2) - (w / 2)) + screenLeft;
        var top = ((height / 2) - (h / 2)) + screenTop;

        window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    }