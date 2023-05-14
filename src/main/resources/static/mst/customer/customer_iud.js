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

    document.getElementById('customerCd').value = '';
    document.getElementById('customerNm').value = '';
    document.getElementById('customerEnm').value = '';
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


    if(document.getElementById('customerCd').value == "") {return window.alert("화주사 코드를 적어주세요");}
    if(document.getElementById('customerNm').value == "") {return window.alert("화주사명을 적어주세요");}

        let forSave = new Object();
        forSave.bizCd = bizCd;
        forSave.customerCd = document.getElementById('customerCd').value;
        forSave.customerNm = document.getElementById('customerNm').value;
        forSave.customerEnm = document.getElementById('customerEnm').value;
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
            url: sessionStorage.getItem("serverUrl")+"/api/customer/save",
            contentType: 'application/json',
            data: JSON.stringify(forSave),
            success: function(data) {

                New();
            },error: function (err) {
                console.log(err);
            }
        });
}

function Delete() {

    if(document.getElementById('customerCd').value == "") {return window.alert("화주사 코드를 적어주세요");}


        let forSave2 = new Object();
        forSave2.bizCd = bizCd;
        forSave2.customerCd = document.getElementById('customerCd').value;
        if (confirm("삭제하시겠습니까?")) {
            $.ajax({
                method: "POST",
                url: sessionStorage.getItem("serverUrl")+"/api/customer/delete",
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

function popUp(url, title, w, h) {
    var screenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var screenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + screenLeft;
    var top = ((height / 2) - (h / 2)) + screenTop;

    window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
}