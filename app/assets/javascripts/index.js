//아이디 기억
$(document).ready(function(){
	// 저장된 쿠키값을 가져와서 ID 칸에 넣어준다. 없으면 공백으로 들어감.
	var userId = getCookie("userId");
	$("input[name='userId']").val(userId);  
	
	if($("input[name='userId']").val() != ""){ // 그 전에 ID를 저장해서 처음 페이지 로딩 시, 입력 칸에 저장된 ID가 표시된 상태라면,
		$("#checkbox").attr("checked", true); // ID 저장하기를 체크 상태로 두기.
	}
	
	$("#checkbox").change(function(){ // 체크박스에 변화가 있다면,
		if($("#checkbox").is(":checked")){ // ID 저장하기 체크했을 때,
			var userId = $("input[name='userId']").val();
			setCookie("userId", userId, 7); // 7일 동안 쿠키 보관
		}else{ // ID 저장하기 체크 해제 시,
			deleteCookie("userId");
		}
	});
	
	// ID 저장하기를 체크한 상태에서 ID를 입력하는 경우, 이럴 때도 쿠키 저장.
	$("input[name='userId']").keyup(function(){ // ID 입력 칸에 ID를 입력할 때,
		if($("#checkbox").is(":checked")){ // ID 저장하기를 체크한 상태라면,
			var userId = $("input[name='userId']").val();
			setCookie("userId", userId, 7); // 7일 동안 쿠키 보관
		}
	});
});

//cookiename, value, exdays 설정해야될듯.

function setCookie(cookieName, value, exdays){
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
	document.cookie = cookieName + "=" + cookieValue;
}

function deleteCookie(cookieName){
	var expireDate = new Date();
	expireDate.setDate(expireDate.getDate() - 1);
	document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}

function getCookie(cookieName) {
	cookieName = cookieName + '=';
	var cookieData = document.cookie;
	var start = cookieData.indexOf(cookieName);
	var cookieValue = '';
	if(start != -1){
		start += cookieName.length;
		var end = cookieData.indexOf(';', start);
		if(end == -1)end = cookieData.length;
		cookieValue = cookieData.substring(start, end);
	}
	return unescape(cookieValue);
}

//아이디 기억 END - http://zero-gravity.tistory.com/m/post/245
















//nav bar scrolling