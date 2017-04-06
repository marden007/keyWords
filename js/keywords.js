var game = 'minecraft';
var Keywords = ['free', 'download', 'load'];
var Device = ['android', 'mobile', 'computer'];
var Version = ['ver1','ver2','ver3'];
var Release_Date = ['date1','date2','date3'];
var arr = new Array();
var set = new Array();
var keywords = new Array();

arr.push(Keywords);
arr.push(Device);
arr.push(Version);
arr.push(Release_Date)

set.push(Array(game));

arr.forEach(function (itemi, i){
	for(el in itemi){
		set.push(Array(game, itemi[el]))
	}
	arr.forEach(function (itemj, j) {
		if(i<j){
			for(x in itemi){
				for(y in itemj){
					set.push(Array(game, itemi[x], itemj[y]))
				}
			}
		}
		arr.forEach(function (itemk, k) {
			if(i<j&&j<k){
				for(x in itemi){
					for(y in itemj){
						for(z in itemk){
							set.push(Array(game, itemi[x], itemj[y], itemk[z]))
						}
					}
				}
			}
			arr.forEach(function (iteml, l) {
				if(i<j&&j<k&&k<l){
					for(x in itemi){
						for(y in itemj){
							for(z in itemk){
								for(p in iteml){
									set.push(Array(game, itemi[x], itemj[y], itemk[z], iteml[p]))
								}
							}
						}
					}
				}
			})
		})
	})
})

for (i in set) {
	keywords = keywords.concat(perm(set[i]));
}

function print_keywords() {
	for (i in keywords) {
	document.write(i+")  "+keywords[i].join(' '));
	document.write('<br>');
	}
}

function return_kw_h1(i){
	var str = keywords[i].join(' ');
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function return_kw_title(i){
  var str = keywords[i].join(' ') + " super game";
  return str.charAt(0).toUpperCase() + str.slice(1);
}  
function display_links(i) {
	var mass = new Array();
	for (var k = 1; k < 16; k++) {
		 if(i<keywords.length){
		 	var str = keywords[i+k].join(' ');
		 	var path = keywords[i+k].join('_')
		 	mass.push('<li><a href="'+path+'" onclick="update_page('+(i+k)+')">'+(i+k)+' '+str+'</a></li>');
		 }
		 else{
		 	i=0;
		 }
	}
	return mass.join(' ');
}

function f1() {
	// body...
	//event.preventDefault();
	//if (!document.getElementById) location = "staticpage.html";
	//history.pushState("/Users/wtf/Desktop/keyWords/index.html", "Title", "#link");
}
function display_pic(){
	var pictures = ['https://wallpaperscraft.ru/image/drift_nissan_sport_nissan_avtomobili_dym_drift_81217_320x240.jpg',
'https://wallpaperscraft.ru/image/nissan_skyline_gtr_drift_drift_r34_96268_320x240.jpg',
'https://wallpaperscraft.ru/image/dym_zanos_drift_nissan_370z_drift_nissan_81219_320x240.jpg',
'https://wallpaperscraft.ru/image/auto_cars_nissan_gtr_nissan_gtr_chernyy_79697_320x240.jpg',
'https://wallpaperscraft.ru/image/railroad_skyline_r34_nissan_gtr_chernyj_vid_sboku_93349_320x240.jpg',
'https://wallpaperscraft.ru/image/nissan_gt_r_r35_nissan_belyj_peredok_dym_96416_320x240.jpg',
'https://wallpaperscraft.ru/image/nissan_avto_mashina_avtomobili_mashiny_otrazhenie_79750_320x240.jpg',
'https://wallpaperscraft.ru/image/nissan_avto_mashina_avtomobili_mashiny_belyy_79751_320x240.jpg',
'https://wallpaperscraft.ru/image/nissan_350z_tyuning_nissan_avtomobil_94660_320x240.jpg',
'https://wallpaperscraft.ru/image/aston_martin_dbr9_2005_zelenyy_vid_speredi_stil_aston_martin_sport_mashiny_trassa_gonka_24086_320x240.jpg'];
	for (var i = 0; i < 4; i++) {
		var rand = Math.floor(Math.random() * pictures.length)
		document.write("<div class = 'col-md-3'>"+
		"<img src="+pictures[rand]+">"
		+"</div>");
		pictures.splice(rand,1);
	}
}

function display_video(){
var videos =['https://www.youtube.com/embed/BwBRhgZPruo',
'https://www.youtube.com/embed/9GyeDWlrF04',
'https://www.youtube.com/embed/bXZZDIDCTd8',
'https://www.youtube.com/embed/scOp0DxY-v0',
'https://www.youtube.com/embed/QJtBIo3wCoc',
'https://www.youtube.com/embed/fcTP0SwJxkE',
'https://www.youtube.com/embed/THo2RIaYkfE',
'https://www.youtube.com/embed/qM_NNW4Uf5c',
'https://www.youtube.com/embed/qLa0Vca1j8M',
'https://www.youtube.com/embed/7KRbk_lRYlU'];
	for (var i = 0; i < 2; i++) {
		var rand = Math.floor(Math.random() * videos.length)
		document.write('<iframe class="col-md-6" id="myvideo" width="450" height="253" '
		+"src="+videos[rand]+' frameborder="0" allowfullscreen>'
      	+"</iframe>");
		videos.splice(rand,1);
	}
}

window.ytplayer = null;

function onYouTubePlayerReady() {
      ytplayer = document.getElementById("myvideo");
    }

function play() {
  if (ytplayer) {
    ytplayer.playVideo();
  }
}
function perm(arr) {
    if (arr.length > 1) {
        var beg = arr[0];
        var arr1 = perm(arr.slice(1));
        var arr2 = [];
        var l =  arr1[0].length;
        for(var i=0; i < arr1.length; i++) {
            for(var j=0; j <= l; j++){	                
            	arr2.push(arr1[i].slice(0, j).concat(beg, arr1[i].slice(j)));
            } 
		}
        return arr2;
    } else return [arr];
}