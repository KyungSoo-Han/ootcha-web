let bizCd = sessionStorage.getItem("bizCd");
    function New() {

        document.getElementById('centerCd').value = '';
        document.getElementById('centerNm').value = '';
        document.getElementById('zipNo').value = '';
        document.getElementById('zipAddr1').value = '';
        document.getElementById('zipAddr2').value = '';
        document.getElementById('remark').value = '';
    }
function Save() {

    if(document.getElementById('centerCd').value == "") {return window.alert("센터 코드를 적어주세요");}

        let forSave = new Object();
        forSave.bizCd = bizCd;
        forSave.centerCd = document.getElementById('centerCd').value;
        forSave.centerNm = document.getElementById('centerNm').value;
        forSave.zipNo = document.getElementById('zipNo').value;
        forSave.zipAddr1 = document.getElementById('zipAddr1').value;
        forSave.zipAddr2 = document.getElementById('zipAddr2').value;
        forSave.remark = document.getElementById('remark').value;

        $.ajax({
            method: "POST",
            url: sessionStorage.getItem("serverUrl")+"/api/center/save",
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

        let forSave2 = new Object();
        forSave2.bizCd = bizCd;

        if (confirm("삭제하시겠습니까?")) {
            $.ajax({
                method: "POST",
                url: sessionStorage.getItem("serverUrl")+"/api/center/delete",
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