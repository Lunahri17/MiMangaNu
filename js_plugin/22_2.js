var S22 = {
chapterInit: 	function (cw, mw) {
			pipe = '|';
			var data = nav.get(mw, '');
			rTo = /-token" content="([^"]+)/gm;
			var token = '_token=' + rTo.exec(data)[1];
			r64 = /ta-_[A-Za-z0-9]+="([A-Za-z0-9]{32})"/gm;
			var b64 = r64.exec(data)[1];
			cw =  cw.substr(cw.lastIndexOf("/")+1);
			data = nav.postM("https://tmofans.com/goto/" + b64 + "/" + cw, 'Referer|' + mw, token);
			rId =/\/viewer\/([^/]+)/gm;
			var id = rId.exec(data)[1];
			src = nav.get("https://tmofans.com/viewer/" + id + "/cascade", 'Referer|' + cw);
			rImg = /<img src="(https:\/\/img1.tmofans.com\/[^"]+)/gm;
			oImg = "https://tmofans.com/viewer/" + id + "/cascade";
			do {
				i = rImg.exec(src);
				if (i) {
					oImg = oImg + pipe + i[1];
				}
			} while (i);
			return oImg;
		},
cre1: 		function(){
			return "<div class=\"col-10 text-truncate\"[$s$S]+?(<.+?</a>)[$s$S]+?data-_[^=]+=\"([^\"]+)";
		},
cre2: 		function(){
			return "<div class=\"col-4 col-md-6 text-truncate\">([^']+)</span>[$s$S]+?data-_[^=]+=\"([^\"]+)";
		},
};