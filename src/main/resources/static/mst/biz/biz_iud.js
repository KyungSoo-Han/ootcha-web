
    function New() {
        document.getElementById('bizCd').value = '';
        document.getElementById('bizNm').value = '';
        document.getElementById('bizEnm').value = '';
        document.getElementById('bizNo').value = '';
        document.getElementById('ownerNm').value = '';
        document.getElementById('bizItem').value = '';
        document.getElementById('bizType').value = '';
        document.getElementById('zipNo').value = '';
        document.getElementById('zipAddr1').value = '';
        document.getElementById('zipAddr2').value = '';
    }
function Save() {

    if(document.getElementById('bizCd').value == "") {return window.alert("사업자 코드를 적어주세요");}
    if(document.getElementById('bizNm').value == "") {return window.alert("사업장명을 적어주세요");}
    if(document.getElementById('bizNo').value == "") {return window.alert("사업자 번호를 적어주세요");}

        let forSave = new Object();
        forSave.bizCd = document.getElementById('bizCd').value;
        forSave.bizNm = document.getElementById('bizNm').value;
        forSave.bizEnm = document.getElementById('bizEnm').value;
        forSave.bizNo = document.getElementById('bizNo').value;
        forSave.ownerNm = document.getElementById('ownerNm').value;
        forSave.bizItem = document.getElementById('bizItem').value;
        forSave.bizType = document.getElementById('bizType').value;
        forSave.zipNo = document.getElementById('zipNo').value;
        forSave.zipAddr1 = document.getElementById('zipAddr1').value;
        forSave.zipAddr2 = document.getElementById('zipAddr2').value;

        $.ajax({
            method: "POST",
            url: sessionStorage.getItem("serverUrl")+"/api/biz/save",
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

        if(document.getElementById('bizCd').value == "") {return window.alert("사업자 코드를 적어주세요");}

        let forSave2 = new Object();
        forSave2.bizCd = document.getElementById('bizCd').value;

        if (confirm("삭제하시겠습니까?")) {
            $.ajax({
                method: "POST",
                url: sessionStorage.getItem("serverUrl")+"/api/biz/delete",
                contentType: 'application/json',
                data: JSON.stringify(forSave2),
                success: function (data) {

                    New();
                    
                },error: function (err) {
                    console.log(err);
                }
            });
        }
}