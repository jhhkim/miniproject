//https://ktae23.tistory.com/192

$(document).ready(function(){
     // 자바스크립트에서 타임리프 변수를 사용하기 위해 CData 태그를 주석처리한채로 사용한다.
        /*<![CDATA[*/
            let categoryTypeArray = new Array();
            let categoryTypeObject;
            let categoryNameArray = new Array();
            let categoryNameObject;

            // model에서 넘겨 받은 리스트를 하나씩 꺼내 View에서만 사용 할 객체를 만들어 리스트에 담아 준다.
    // 대분류 카테고리에는 대분류만 넣어 준다.
        /*[# th:each="ct : ${categoryList}"]*/
        sidoObject = new Object();
        sidoObject.sido = /*[[${ct.mainCategory}]]*/
                sidoArray.push(sidoObject);
    /*[/]*/

// 소분류 카테고리에는 비교용 대분류와 소분류 값을 넣어 준다.
    /*[# th:each="ct : ${categoryList}"]*/
    gunguObject = new Object();
    gunguObject.gungu = /*[[${ct.subCategory}]]*/
    gunguObject.sido = /*[[${ct.mainCategory}]]*/
                gunguArray.push(gunguObject);
    /*[/]*/

    let sidoSelectBox = $("select[name='sido']");

        for (let i = 0; i < categoryTypeArray.length; i++) {
            categoryTypeSelectBox.append("<option value='" + sidoArray[i].sido
                                         + "'>" + sidoArray[i].sido + "</option>");
        }

        $(document).on("change", "select[name='sido']", function () {

            let gunguSelectBox = $("select[name='gungu']");
            //기존 리스트 삭제
            gunguSelectBox.children().remove(); 

            $("option:selected", this).each(function () {
                let selectValue = $(this).val(); //
                for (let i = 0; i < gunguArray.length; i++) {
                    // 대분류가 같은 소분류만 카테고리에 넣어 준다.           
                    if (selectValue == gunguArray[i].sido) {

                        gunguSelectBox.append("<option value='" + gunguArray[i].gungu
                                                    + "'>" + gunguArray[i].gungu + "</option>");

                    }
                }
            });

        });
});