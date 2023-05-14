let bizCd = sessionStorage.getItem("bizCd");

$.ajax({
    method : "GET",
    url : sessionStorage.getItem("serverUrl")+"/api/select/customer/"+ bizCd,
    contentType: 'application/json',
    success: function(data) {
        console.log(data);
        for(let i = 0; i < data.length; i ++){
            console.log(data[i].code);
            $("#customer").append("<option value=" + data[i].code + ">" + data[i].name +"</option>");
        }

        GetSupplier(document.getElementById('customer').value);

    }, error: function (data) {
        console.log(data);
    }
});
function GetSupplier(customerCd){

    $("#supplier").empty();

    $.ajax({
        method : "GET",
        url : sessionStorage.getItem("serverUrl")+"/api/select/supplier/"+ bizCd +"/" +customerCd,
        contentType: 'application/json',
        success: function(data) {
            console.log(data);
            for(let i = 0; i < data.length; i ++){
                console.log(data[i].code);
                $("#supplier").append("<option value=" + data[i].code + ">" + data[i].name +"</option>");
            }
        }, error: function (data) {
            console.log(data);
        }
    });

}
function New() {
    document.getElementById('itemCd').value = '';
    document.getElementById('itemNm').value = '';
    document.getElementById('itemSnm').value = '';
    document.getElementById('supplier').value = '';
    document.getElementById('description').value = '';
    document.getElementById('fromMakeDay').value = '';
    document.getElementById('isMakeDay').value = '';
    document.getElementById('isSet').value = '';
    document.getElementById('location').value = '';
    document.getElementById('nearExpDay').value = '';
    document.getElementById('nonDeliverDay').value = '';
    document.getElementById('safeStockQty').value = '';
    document.getElementById('itemBarcode').value = '';
    document.getElementById('itemWidth').value = '';
    document.getElementById('itemDepth').value = '';
    document.getElementById('itemHeight').value = '';
    document.getElementById('itemWeight').value = '';
    document.getElementById('caseBarcode').value = '';
    document.getElementById('caseEaQty').value = '';
    document.getElementById('caseWidth').value = '';
    document.getElementById('caseDepth').value = '';
    document.getElementById('caseHeight').value = '';
    document.getElementById('caseWeight').value = '';
    document.getElementById('boxBarcode').value = '';
    document.getElementById('boxEaQty').value = '';
    document.getElementById('boxWidth').value = '';
    document.getElementById('boxDepth').value = '';
    document.getElementById('boxHeight').value = '';
    document.getElementById('boxWeight').value = '';
    document.getElementById('palletBarcode').value = '';
    document.getElementById('palletEaQty').value = '';
    document.getElementById('palletWidth').value = '';
    document.getElementById('palletDepth').value = '';
    document.getElementById('palletHeight').value = '';
    document.getElementById('palletWeight').value = '';
    document.getElementById('status').checked = false;

}

function Save() {

    if(document.getElementById('customer').value == "") {return window.alert("화주사를 선택해주세요");}
    if(document.getElementById('supplier').value == "") {return window.alert("공급사를 선택해주세요");}
    if(document.getElementById('itemCd').value == "") {return window.alert("품목 코드를 입력해주세요");}
    if(document.getElementById('itemNm').value == "") {return window.alert("품목명을 입력해주세요");}

    let saveData = new Object();
    saveData.bizCd = bizCd;
    saveData.customerCd = document.getElementById('customer').value;
    saveData.itemCd = document.getElementById('itemCd').value;
    saveData.itemNm = document.getElementById('itemNm').value;
    saveData.itemSnm = document.getElementById('itemSnm').value;
    saveData.supplierCd = document.getElementById('supplier').value;
    saveData.description = document.getElementById('description').value;
    saveData.fromMakeDay = document.getElementById('fromMakeDay').value;
    if(document.getElementById('isMakeDay').checked == true) {
        saveData.isMakeDay = 'Y';
    } else{
        saveData.isMakeDay = 'N';
    }
    if(document.getElementById('isSet').checked == true){
        saveData.isSet = 'Y';
    }else {
        saveData.isSet = 'N';
    }
    saveData.location = document.getElementById('location').value;
    saveData.nearExpDay = document.getElementById('nearExpDay').value;
    saveData.nonDeliverDay = document.getElementById('nonDeliverDay').value;
    saveData.safeStockQty = document.getElementById('safeStockQty').value;
    saveData.itemBarcode = document.getElementById('itemBarcode').value;
    saveData.itemWidth = document.getElementById('itemWidth').value;
    saveData.itemDepth = document.getElementById('itemDepth').value;
    saveData.itemHeight = document.getElementById('itemHeight').value;
    saveData.itemWeight = document.getElementById('itemWeight').value;
    saveData.caseBarcode = document.getElementById('caseBarcode').value;
    saveData.caseEaQty = document.getElementById('caseEaQty').value;
    saveData.caseWidth = document.getElementById('caseWidth').value;
    saveData.caseDepth = document.getElementById('caseDepth').value;
    saveData.caseHeight = document.getElementById('caseHeight').value;
    saveData.caseWeight = document.getElementById('caseWeight').value;
    saveData.boxBarcode = document.getElementById('boxBarcode').value;
    saveData.boxEaQty = document.getElementById('boxEaQty').value;
    saveData.boxWidth = document.getElementById('boxWidth').value;
    saveData.boxDepth = document.getElementById('boxDepth').value;
    saveData.boxHeight = document.getElementById('boxHeight').value;
    saveData.boxWeight = document.getElementById('boxWeight').value;
    saveData.palletBarcode = document.getElementById('palletBarcode').value;
    saveData.palletEaQty = document.getElementById('palletEaQty').value;
    saveData.palletWidth = document.getElementById('palletWidth').value;
    saveData.palletDepth = document.getElementById('palletDepth').value;
    saveData.palletHeight = document.getElementById('palletHeight').value;
    saveData.palletWeight = document.getElementById('palletWeight').value;

    if(document.getElementById('status').checked == true)
        saveData.status = 'Y';
    else
        saveData.status = 'N';

    console.log(JSON.stringify(saveData));
    $.ajax({
        method: "POST",
        url: sessionStorage.getItem("serverUrl")+"/api/item/save",
        contentType: 'application/json',
        data: JSON.stringify(saveData),
        success: function(data) {
            console.log(data);
            New();
        },
        error: function (err) {
            console.log(err);
        }
    });

}

function Delete() {

    if(document.getElementById('customer').value == "") {return window.alert("화주사를 선택해주세요");}
    if(document.getElementById('supplier').value == "") {return window.alert("공급사를 선택해주세요");}
    
    let deleteData = new Object();
    deleteData.bizCd = bizCd;
    deleteData.customer = document.getElementById('customer').value;
    deleteData.itemCd = document.getElementById('itemCd').value;

    if (confirm("삭제하시겠습니까?")) {
        $.ajax({
            method: "POST",
            url: sessionStorage.getItem("serverUrl")+"/api/item/delete",
            contentType: 'application/json',
            data: JSON.stringify(deleteData),
            success: function (data) {

                console.log(data);
                New();
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
}


$("#customer").on('change', () => {
    GetSupplier(document.getElementById('customer').value);
});