var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 
// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

//주소 받아서 좌표변환 후 위치 표시
// // 주소-좌표 변환 객체를 생성합니다
// var geocoder = new kakao.maps.services.Geocoder();

// // 주소로 좌표를 검색합니다
// geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', function(result, status) {

//     // 정상적으로 검색이 완료됐으면 
//      if (status === kakao.maps.services.Status.OK) {

//         var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

//         // 결과값으로 받은 위치를 마커로 표시합니다
//         var marker = new kakao.maps.Marker({
//             map: map,
//             position: coords
//         });
//         marker.setMap(map);

//         // 인포윈도우로 장소에 대한 설명을 표시합니다
//         var infowindow = new kakao.maps.InfoWindow({
//             content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
//         });
//         infowindow.open(map, marker);

//         // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
//         map.setCenter(coords);
//     } 
//});    

//마커 여러개 표시
// var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
//     mapOption = { 
//         center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
//         level: 3 // 지도의 확대 레벨
//     };

// var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
// // 마커를 표시할 위치와 title 객체 배열입니다 
// var positions = [
//     {
//         title: '카카오', 
//         latlng: new kakao.maps.LatLng(33.450705, 126.570677)
//     },
//     {
//         title: '생태연못', 
//         latlng: new kakao.maps.LatLng(33.450936, 126.569477)
//     },
//     {
//         title: '텃밭', 
//         latlng: new kakao.maps.LatLng(33.450879, 126.569940)
//     },
//     {
//         title: '근린공원',
//         latlng: new kakao.maps.LatLng(33.451393, 126.570738)
//     }
// ];

// // 마커 이미지의 이미지 주소입니다
// var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
// for (var i = 0; i < positions.length; i ++) {
    
//     // 마커 이미지의 이미지 크기 입니다
//     var imageSize = new kakao.maps.Size(24, 35); 
    
//     // 마커 이미지를 생성합니다    
//     var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
//     // 마커를 생성합니다
//     var marker = new kakao.maps.Marker({
//         map: map, // 마커를 표시할 지도
//         position: positions[i].latlng, // 마커를 표시할 위치
//         title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
//         image : markerImage // 마커 이미지 
//     });
// }

//마커 여러개 이벤트(갖다대면 커지고, 클릭하면 색 변함, 다른마커 클릭하면 클릭한 마커 색 변하고 이전마커는 원래 색으로)
// var MARKER_WIDTH = 33, // 기본, 클릭 마커의 너비
//     MARKER_HEIGHT = 36, // 기본, 클릭 마커의 높이
//     OFFSET_X = 12, // 기본, 클릭 마커의 기준 X좌표
//     OFFSET_Y = MARKER_HEIGHT, // 기본, 클릭 마커의 기준 Y좌표
//     OVER_MARKER_WIDTH = 40, // 오버 마커의 너비
//     OVER_MARKER_HEIGHT = 42, // 오버 마커의 높이
//     OVER_OFFSET_X = 13, // 오버 마커의 기준 X좌표
//     OVER_OFFSET_Y = OVER_MARKER_HEIGHT, // 오버 마커의 기준 Y좌표
//     SPRITE_MARKER_URL = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markers_sprites2.png', // 스프라이트 마커 이미지 URL
//     SPRITE_WIDTH = 126, // 스프라이트 이미지 너비
//     SPRITE_HEIGHT = 146, // 스프라이트 이미지 높이
//     SPRITE_GAP = 10; // 스프라이트 이미지에서 마커간 간격

// var markerSize = new kakao.maps.Size(MARKER_WIDTH, MARKER_HEIGHT), // 기본, 클릭 마커의 크기
//     markerOffset = new kakao.maps.Point(OFFSET_X, OFFSET_Y), // 기본, 클릭 마커의 기준좌표
//     overMarkerSize = new kakao.maps.Size(OVER_MARKER_WIDTH, OVER_MARKER_HEIGHT), // 오버 마커의 크기
//     overMarkerOffset = new kakao.maps.Point(OVER_OFFSET_X, OVER_OFFSET_Y), // 오버 마커의 기준 좌표
//     spriteImageSize = new kakao.maps.Size(SPRITE_WIDTH, SPRITE_HEIGHT); // 스프라이트 이미지의 크기

// var positions = [  // 마커의 위치
//         new kakao.maps.LatLng(33.44975, 126.56967),
//         new kakao.maps.LatLng(33.450579, 126.56956),
//         new kakao.maps.LatLng(33.4506468, 126.5707)
//     ],
//     selectedMarker = null; // 클릭한 마커를 담을 변수

// var mapContainer = document.getElementById('map'), // 지도를 표시할 div
//     mapOption = { 
//         center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
//         level: 3 // 지도의 확대 레벨
//     };

// var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// // 지도 위에 마커를 표시합니다
// for (var i = 0, len = positions.length; i < len; i++) {
//     var gapX = (MARKER_WIDTH + SPRITE_GAP), // 스프라이트 이미지에서 마커로 사용할 이미지 X좌표 간격 값
//         originY = (MARKER_HEIGHT + SPRITE_GAP) * i, // 스프라이트 이미지에서 기본, 클릭 마커로 사용할 Y좌표 값
//         overOriginY = (OVER_MARKER_HEIGHT + SPRITE_GAP) * i, // 스프라이트 이미지에서 오버 마커로 사용할 Y좌표 값
//         normalOrigin = new kakao.maps.Point(0, originY), // 스프라이트 이미지에서 기본 마커로 사용할 영역의 좌상단 좌표
//         clickOrigin = new kakao.maps.Point(gapX, originY), // 스프라이트 이미지에서 마우스오버 마커로 사용할 영역의 좌상단 좌표
//         overOrigin = new kakao.maps.Point(gapX * 2, overOriginY); // 스프라이트 이미지에서 클릭 마커로 사용할 영역의 좌상단 좌표
        
//     // 마커를 생성하고 지도위에 표시합니다
//     addMarker(positions[i], normalOrigin, overOrigin, clickOrigin);
// }

// // 마커를 생성하고 지도 위에 표시하고, 마커에 mouseover, mouseout, click 이벤트를 등록하는 함수입니다
// function addMarker(position, normalOrigin, overOrigin, clickOrigin) {

//     // 기본 마커이미지, 오버 마커이미지, 클릭 마커이미지를 생성합니다
//     var normalImage = createMarkerImage(markerSize, markerOffset, normalOrigin),
//         overImage = createMarkerImage(overMarkerSize, overMarkerOffset, overOrigin),
//         clickImage = createMarkerImage(markerSize, markerOffset, clickOrigin);
    
//     // 마커를 생성하고 이미지는 기본 마커 이미지를 사용합니다
//     var marker = new kakao.maps.Marker({
//         map: map,
//         position: position,
//         image: normalImage
//     });

//     // 마커 객체에 마커아이디와 마커의 기본 이미지를 추가합니다
//     marker.normalImage = normalImage;

//     // 마커에 mouseover 이벤트를 등록합니다
//     kakao.maps.event.addListener(marker, 'mouseover', function() {

//         // 클릭된 마커가 없고, mouseover된 마커가 클릭된 마커가 아니면
//         // 마커의 이미지를 오버 이미지로 변경합니다
//         if (!selectedMarker || selectedMarker !== marker) {
//             marker.setImage(overImage);
//         }
//     });

//     // 마커에 mouseout 이벤트를 등록합니다
//     kakao.maps.event.addListener(marker, 'mouseout', function() {

//         // 클릭된 마커가 없고, mouseout된 마커가 클릭된 마커가 아니면
//         // 마커의 이미지를 기본 이미지로 변경합니다
//         if (!selectedMarker || selectedMarker !== marker) {
//             marker.setImage(normalImage);
//         }
//     });

//     // 마커에 click 이벤트를 등록합니다
//     kakao.maps.event.addListener(marker, 'click', function() {

//         // 클릭된 마커가 없고, click 마커가 클릭된 마커가 아니면
//         // 마커의 이미지를 클릭 이미지로 변경합니다
//         if (!selectedMarker || selectedMarker !== marker) {

//             // 클릭된 마커 객체가 null이 아니면
//             // 클릭된 마커의 이미지를 기본 이미지로 변경하고
//             !!selectedMarker && selectedMarker.setImage(selectedMarker.normalImage);

//             // 현재 클릭된 마커의 이미지는 클릭 이미지로 변경합니다
//             marker.setImage(clickImage);
//         }

//         // 클릭된 마커를 현재 클릭된 마커 객체로 설정합니다
//         selectedMarker = marker;
//     });
// }

// // MakrerImage 객체를 생성하여 반환하는 함수입니다
// function createMarkerImage(markerSize, offset, spriteOrigin) {
//     var markerImage = new kakao.maps.MarkerImage(
//         SPRITE_MARKER_URL, // 스프라이트 마커 이미지 URL
//         markerSize, // 마커의 크기
//         {
//             offset: offset, // 마커 이미지에서의 기준 좌표
//             spriteOrigin: spriteOrigin, // 스트라이프 이미지 중 사용할 영역의 좌상단 좌표
//             spriteSize: spriteImageSize // 스프라이트 이미지의 크기
//         }
//     );
    
//     return markerImage;
// }