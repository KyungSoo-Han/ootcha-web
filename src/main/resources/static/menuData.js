let menuData = [
    /*{
        menu_cd: "MST_0000",
        menu_nm: "기준정보",
        menu_location: "#",
        parent_yn: "Y",
        parent_cd: ""
    },{
        menu_cd: "MST_0001",
        menu_nm: "사업장관리",
        menu_location: "/mst/biz",
        parent_yn: "N",
        parent_cd: "MST_0000"
    }, {
        menu_cd: "MST_0002",
        menu_nm: "센터관리",
        menu_location: "/mst/center",
        parent_yn: "N",
        parent_cd: "MST_0000"
    },*/
/*    {
        menu_cd: "MST_0001",
        menu_nm: "품목등록",
        menu_location: "./views/Item.html",
        parent_yn: "N",
        parent_cd: "MST_0000"
    },*/
   

    {
        menu_cd: "MST_0000",
        menu_nm: "기준정보",
        menu_location: "#",
        parent_yn: "Y",
        parent_cd: "",
        level: 1
    },

    /*{
        menu_cd: "MST_0001",
        menu_nm: "사업장관리",
        menu_location: "/biz/biz_iud",
        parent_yn: "N",
        parent_cd: "MST_0000"
    },*/

    {
        menu_cd: "MST_0006",
        menu_nm: "사업장 관리",
        menu_location: "/biz/biz_list",
        parent_yn: "N",
        parent_cd: "MST_0000",
        level: 2
    },

    {
        menu_cd: "MST_0012",
        menu_nm: "센터관리",
        menu_location: "/center/center_list",
        parent_yn: "N",
        parent_cd: "MST_0000",
        level: 2
    },
    {
        menu_cd: "MST_0014",
        menu_nm: "존관리",
        menu_location: "/zone/zone_list",
        parent_yn: "N",
        parent_cd: "MST_0000",
        level: 2
    },
    {
        menu_cd: "MST_0015",
        menu_nm: "로케이션 관리",
        menu_location: "/location/location_list",
        parent_yn: "N",
        parent_cd: "MST_0000",
        level: 2
    },
    /*{
        menu_cd: "MST_0002",
        menu_nm: "화주사관리",
        menu_location: "/customer/customer_iud",
        parent_yn: "N",
        parent_cd: "MST_0000"
    },*/
    {
        menu_cd: "MST_0007",
        menu_nm: "화주사관리",
        menu_location: "/customer/customer_list",
        parent_yn: "N",
        parent_cd: "MST_0000",
        level: 2
    },

    /*{
        menu_cd: "MST_0003",
        menu_nm: "공급사관리",
        menu_location: "/supplier/supplier_iud",
        parent_yn: "N",
        parent_cd: "MST_0000"
    },*/

    {
        menu_cd: "MST_0008",
        menu_nm: "공급사관리",
        menu_location: "/supplier/supplier_list",
        parent_yn: "N",
        parent_cd: "MST_0000",
        level: 2
    },

    /*{
        menu_cd: "MST_0004",
        menu_nm: "배송지관리",
        menu_location: "/destination/destination_iud",
        parent_yn: "N",
        parent_cd: "MST_0000"
    },*/
    {
        menu_cd: "MST_0009",
        menu_nm: "배송지관리",
        menu_location: "/destination/destination_list",
        parent_yn: "N",
        parent_cd: "MST_0000",
        level: 2
    },


    /*{
        menu_cd: "MST_0005",
        menu_nm: "품목관리",
        menu_location: "/item/item_iud",
        parent_yn: "N",
        parent_cd: "MST_0000"
    },*/
    {
        menu_cd: "MST_0010",
        menu_nm: "품목관리",
        menu_location: "/item/item_list",
        parent_yn: "N",
        parent_cd: "MST_0000",
        level: 2
    },
    /*{
        menu_cd: "MST_0011",
        menu_nm: "센터관리",
        menu_location: "/center/center_iud",
        parent_yn: "N",
        parent_cd: "MST_0000"
    },*/
    {
        menu_cd: "INBOUND_0000",
        menu_nm: "입고관리",
        menu_location: "#",
        parent_yn: "Y",
        parent_cd: "",
        level: 1
    },  {
        menu_cd: "INBOUND_0001",
        menu_nm: "입고요청",
        menu_location: "#",
        parent_yn: "Y",
        parent_cd: "INBOUND_0000",
        level: 2
    },{
        menu_cd: "INBOUND_0001_01",
        menu_nm: "입고요청등록",
        menu_location: "/inbound/inbound_req_input",
        parent_yn: "N",
        parent_cd: "INBOUND_0001",
        level: 3
    },{
        menu_cd: "INBOUND_0001_02",
        menu_nm: "입고요청현황",
        menu_location: "/inbound/inbound_req_list",
        parent_yn: "N",
        parent_cd: "INBOUND_0001",
        level: 3
    },
    {
        menu_cd: "INBOUND_0001_03",
        menu_nm: "입고요청승인",
        menu_location: "/inbound/inbound_req_appr",
        parent_yn: "N",
        parent_cd: "INBOUND_0001",
        level: 3
    },

    {
        menu_cd: "INBOUND_0004",
        menu_nm: "입고작업",
        menu_location: "#",
        parent_yn: "Y",
        parent_cd: "INBOUND_0000",
        level: 2
    },
    {
        menu_cd: "INBOUND_0004_01",
        menu_nm: "입고등록",
        menu_location: "/inbound/inbound",
        parent_yn: "N",
        parent_cd: "INBOUND_0004",
        level: 3
    },
    {
        menu_cd: "INBOUND_0004_02",
        menu_nm: "입고취소",
        menu_location: "/inbound/inbound_cancel",
        parent_yn: "N",
        parent_cd: "INBOUND_0004",
        level: 3
    },

    {
        menu_cd: "INBOUND_0006",
        menu_nm: "입고검사",
        menu_location: "#",
        parent_yn: "Y",
        parent_cd: "INBOUND_0000",
        level: 2
    },
    {
        menu_cd: "INBOUND_0006_01",
        menu_nm: "입고검사등록",
        menu_location: "/inbound/inbound_inspect",
        parent_yn: "N",
        parent_cd: "INBOUND_0006",
        level: 3
    },
    {
        menu_cd: "INBOUND_0006_02",
        menu_nm: "입고검사취소",
        menu_location: "/inbound/inbound_inspect_cancel",
        parent_yn: "N",
        parent_cd: "INBOUND_0006",
        level: 3
    },
    {
        menu_cd: "INBOUND_0008",
        menu_nm: "적치작업",
        menu_location: "#",
        parent_yn: "Y",
        parent_cd: "INBOUND_0000",
        level: 2
    },
    {
        menu_cd: "INBOUND_0008_01",
        menu_nm: "적치작업",
        menu_location: "/inbound/inbound_pileup",
        parent_yn: "N",
        parent_cd: "INBOUND_0008",
        level: 3
    },
    {
        menu_cd: "INBOUND_0008_02",
        menu_nm: "적치취소",
        menu_location: "/inbound/inbound_pileup_cancel",
        parent_yn: "N",
        parent_cd: "INBOUND_0008",
        level: 3
    },
    {
        menu_cd: "INBOUND_0010",
        menu_nm: "입고확정",
        menu_location: "/inbound/inbound_confirm",
        parent_yn: "N",
        parent_cd: "INBOUND_0000",
        level: 2
    },


    {
        menu_cd: "OUTBOUND_0000",
        menu_nm: "출고요청",
        menu_location: "#",
        parent_yn: "Y",
        parent_cd: "",
        level: 1
    }, {
        menu_cd: "OUTBOUND_0001",
        menu_nm: "출고요청등록",
        menu_location: "/outbound/outbound_req_input",
        parent_yn: "N",
        parent_cd: "OUTBOUND_0000",
        level: 2
    },{
        menu_cd: "OUTBOUND_0002",
        menu_nm: "출고요청현황",
        menu_location: "/outbound/outbound_req_list",
        parent_yn: "N",
        parent_cd: "OUTBOUND_0000",
        level: 2
    },
    {
        menu_cd: "OUTBOUND_0003",
        menu_nm: "출고요청승인",
        menu_location: "/outbound/outbound_req_appr",
        parent_yn: "N",
        parent_cd: "OUTBOUND_0000",
        level: 2
    },


    {
        menu_cd: "TEST_01",
        menu_nm: "TEST 1",
        menu_location: "/test/test",
        parent_yn: "N",
        parent_cd: "",
        level: 1
    } /*,
    {
        menu_cd: "TEST_02",
        menu_nm: "TEST 2",
        menu_location: "./views/buy/inbound.jsp",
        parent_yn: "N",
        parent_cd: "menuList"
    },*/
]

for(i in menuData){

    if(menuData[i].level == 1) {
        if (menuData[i].parent_yn == "Y") {
            $("#menuList").append(`
              <li class="nav-item">
                <a href="${menuData[i].menu_location}" class="nav-link">
                  <i class="fas fa-circle nav-icon"></i>
                      <p>${menuData[i].menu_nm}
                        <i class="fas fa-angle-left right"></i>
                      </p>
                </a>
                <ul class="nav nav-treeview" id="${menuData[i].menu_cd}">
                </ul>
              </li>`)

            console.log("== 1 ==");
            console.log(i);
        }
    }
    else {
        if (menuData[i].parent_yn == "Y") {
            $("#" + menuData[i].parent_cd).append(`
              <li class="nav-item">
                <a href="${menuData[i].menu_location}" class="nav-link">
                  <i class="fas fa-dot-circle nav-icon"></i>
                      <p>${menuData[i].menu_nm}
                        <i class="fas fa-angle-left right"></i>
                      </p>
                </a>
                <ul class="nav nav-treeview" id="${menuData[i].menu_cd}">
                </ul>
              </li>`)

            console.log("== !1 ==");
            console.log(i);
        } else {
            $("#" + menuData[i].parent_cd).append(`
            <li class="nav-item" ">
              <a href="${menuData[i].menu_location}" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>${menuData[i].menu_nm}</p>
              </a>
            </li>
        `)
        }
    }
}