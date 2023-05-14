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

    }, error: function (data) {
        console.log(data);
    }
});

function New() {

    document.getElementById('supplierCd').value = '';
    document.getElementById('supplierNm').value = '';
    document.getElementById('supplierEnm').value = '';
    document.getElementById('ownerNm').value = '';
    document.getElementById('bizNo').value = '';
    document.getElementById('bizItem').value = '';
    document.getElementById('bizType').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telNo').value = '';
    document.getElementById('faxNo').value = '';
    document.getElementById('zipNo').value = '';
    document.getElementById('zipAddr1').value = '';
    document.getElementById('zipAddr2').value = '';
    document.getElementById('homepage').value = '';
    document.getElementById('status').checked = true;
}

function Save() {

    if(document.getElementById('supplierCd').value == "") {
        window.alert("공급사코드를 적어주세요")
    }else {


        let forSave = new Object();
        forSave.bizCd = bizCd;
        forSave.customerCd = $("#customer option:selected").val();
        forSave.supplierCd = document.getElementById('supplierCd').value;
        forSave.supplierNm = document.getElementById('supplierNm').value;
        forSave.supplierEnm = document.getElementById('supplierEnm').value;
        forSave.ownerNm = document.getElementById('ownerNm').value;
        forSave.bizNo = document.getElementById('bizNo').value;
        forSave.bizItem = document.getElementById('bizItem').value;
        forSave.bizType = document.getElementById('bizType').value;
        forSave.email = document.getElementById('email').value;
        forSave.telNo = document.getElementById('telNo').value;
        forSave.faxNo = document.getElementById('faxNo').value;
        forSave.zipNo = document.getElementById('zipNo').value;
        forSave.zipAddr1 = document.getElementById('zipAddr1').value;
        forSave.zipAddr2 = document.getElementById('zipAddr2').value;
        forSave.homepage = document.getElementById('homepage').value;
        if(document.getElementById('status').checked == true){
            forSave.status = 'Y';
        } else{
            forSave.status = 'N';
        }

        $.ajax({
            method: "POST",
            url: sessionStorage.getItem("serverUrl")+"/api/supplier/save",
            contentType: 'application/json',
            data: JSON.stringify(forSave),
            success: function(data) {
                New();
            },error: function (err) {
                console.log(err);
            }
        });
    }
}

function Delete() {

    if(document.getElementById('supplierCd').value == "") {
        window.alert("공급사 코드를 적어주세요")
    }else {
        let forSave2 = new Object();
        forSave2.bizCd = bizCd;
        forSave2.customerCd = $("#customer option:selected").val();
        forSave2.supplierCd = document.getElementById('supplierCd').value;

        if (confirm("삭제하시겠습니까?")) {
            $.ajax({
                method: "POST",
                url: sessionStorage.getItem("serverUrl")+"/api/supplier/delete",
                contentType: 'application/json',
                data: JSON.stringify(forSave2),
                success: function (data) {
                    New();
                },error: function (err) {
                    console.log(err);s
                }
            });
        }
    }
}