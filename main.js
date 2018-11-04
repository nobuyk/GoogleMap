//-------------------------------------------------------------------
// グローバル変数
//-------------------------------------------------------------------
var gLat; // クリックした緯度を保存
var gLng; // クリックした経度を保存
var gMarker = null; // マーカーを設置
var gMap; // Google Map インスタンス
//-------------------------------------------------------------------
// Googleマップ初期化
//-------------------------------------------------------------------
function initMap() {
	'use strict';
	// HTML の表示位置 ID
	var target = document.getElementById("map_canvas");
	// Googleマップの初期表示座標
	var tokyo = {
		lat: 35.681167,
		lng: 139.767052
	};
	// 表示オプション
	var mapOpts = {
		zoom: 11,
		center: tokyo,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	// Googleマップ表示
	gMap = new google.maps.Map(target, mapOpts);
	// クリックイベントを追加
	gMap.addListener('click', function (e) {
		getClickLatLng(e.latLng);
	});
}
//-------------------------------------------------------------------
// クリック処理
//-------------------------------------------------------------------
function getClickLatLng(latlng) {
	//緯度を取得
	var ClickLat = latlng.lat();
	console.log(ClickLat);
	// クリックした緯度を保存
	gLat = ClickLat;
	//経度を取得
	var ClickLng = latlng.lng();
	console.log(ClickLng);
	// クリックした経度を保存
	gLng = ClickLng;
	//位置座標を文字列に変換して取得
	console.log(latlng.toString());

	// gMarker を判断し、初回表示で無い場合は、
	// 前回に表示したマーカを削除する。
	if (gMarker != null) {
		gMarker.setMap(null);
	}

	// マーカーを設置
	gMarker = new google.maps.Marker({
		position: latlng,
		map: gMap
	});
	// 座標の中心をずらす
	gMap.panTo(latlng);
}
