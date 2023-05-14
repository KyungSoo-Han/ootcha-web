<%--
  Created by IntelliJ IDEA.
  User: hanks
  Date: 2022-12-29
  Time: 오후 1:43
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Title</title>
    <script type="text/javascript" src="/libs/jquery-3.4.0.min.js"></script>
    <script type="text/javascript" src="/libs/jquery-splitter.js"></script>
    <link rel="stylesheet" href="/bsrp/css/jquery-splitter.css">

    <script>
        jQuery(function($) {
            // 좌우div(or상하div)를 감싸는 div에 splitter를 정의한다.
            $('#widget').width(700).height(700).split({orientation:'horizontal', limit:100});

            /*// 다음과 같이 해도 된다.
            const splitterParentOffset = $("#tab_instr_content").offset();
            const splitterParentHeight = window.innerHeight - (splitterParentOffset.top+10);
            // 크기조절분리선(splitter)설정
            var splitter = $('#widget').height(splitterParentHeight).split({
                orientation: 'vertical',  // 세로분할,가로분할 선택
                limit: 100, 			  // 최소한도 px
                position: '50%', 		  // splitter의 위치 if there is no percentage it interpret it as pixels
                onDrag: function(event) { // 크기조절 분리선(splitter)을 드래그 할 때의 해야할 작업 정의
                    map.updateSize();
                }
            }); */

        });
    </script>
</head>
<body>
<div id="widget">
    <div class="2">foo   </div> <!-- end of #foo -->
    <div id = "TEST'">foo   </div> <!-- end of #foo -->
    <div >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed dolor nisl, in suscipit justo. Donec a enim et est porttitor semper at vitae augue. Proin at nulla at dui mattis mattis. Nam a volutpat ante. Aliquam consequat dui eu sem convallis ullamcorper. Nulla suscipit, massa vitae suscipit ornare, tellus est consequat nunc, quis blandit elit odio eu arcu. Nam a urna nec nisl varius sodales. Mauris iaculis tincidunt orci id commodo. Aliquam non magna quis tortor malesuada aliquam eget ut lacus. Nam ut vestibulum est. Praesent volutpat tellus in eros dapibus elementum. Nam laoreet risus non nulla mollis ac luctus felis dapibus. Pellentesque mattis elementum augue non sollicitudin. Nullam lobortis fermentum elit ac mollis. Nam ac varius risus. Cras faucibus euismod nulla, ac auctor diam rutrum sit amet. Nulla vel odio erat, ac mattis enim.
    </div>
</div>
<div >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed dolor nisl, in suscipit justo. Donec a enim et est porttitor semper at vitae augue. Proin at nulla at dui mattis mattis. Nam a volutpat ante. Aliquam consequat dui eu sem convallis ullamcorper. Nulla suscipit, massa vitae suscipit ornare, tellus est consequat nunc, quis blandit elit odio eu arcu. Nam a urna nec nisl varius sodales. Mauris iaculis tincidunt orci id commodo. Aliquam non magna quis tortor malesuada aliquam eget ut lacus. Nam ut vestibulum est. Praesent volutpat tellus in eros dapibus elementum. Nam laoreet risus non nulla mollis ac luctus felis dapibus. Pellentesque mattis elementum augue non sollicitudin. Nullam lobortis fermentum elit ac mollis. Nam ac varius risus. Cras faucibus euismod nulla, ac auctor diam rutrum sit amet. Nulla vel odio erat, ac mattis enim.
</div>
</body>
</html>