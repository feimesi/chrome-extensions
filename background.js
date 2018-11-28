//-------------------- 右键菜单演示 ------------------------//
chrome.contextMenus.create({
	title: "メニューテスト",
	onclick: function(){alert('メニューをクリックします！');}
});

/* ----------------------------------------
只有当选中文字时才会出现此右键菜单<br>
%s表示选中的文字<br>
----------------------------------------*/ 
chrome.contextMenus.create({
	contexts: ['selection'], 
	title: '沪江小Dで「%s」を検索', 
	onclick: function(params)
	{
		chrome.tabs.create({url: 'https://dict.hjenglish.com/jp/jc/' + encodeURI(params.selectionText)});
	}
});
