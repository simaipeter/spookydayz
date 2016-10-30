;var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type (or see below for non wait option)
jQuery.noConflict();

setTimeout("init()",2000);

function init() {

	spoky = document.createElement("div");
	spoky.id = "spookylogger";
	$("body").append(spoky); 
	spoky = document.createElement("div");
	spoky.id = "spookyi";
	$("body").append(spoky);
	$("#spookyi").css({"width":"26%", "height":"3%", "background":"#d2a990","color":"white", "position":" absolute", "top":"22px", "left":"2px", "z-index":"1", "opacity":"0.6", "overflow-x":"hidden", "overflow-y":"scroll "}) ;
	$("#spookylogger").css({"width":"26%", "height":"17%", "background":"#e79153","color":"white", "position":" absolute", "top":"22px", "left":"2px", "z-index":"1", "opacity":"0.6", "overflow-x":"hidden", "overflow-y":"scroll "}) ;

setTimeout("spookylogger()",1000)
setInterval("spookylogger()",1000);


}

uj = 0;
ossz = 0;
iranya = 0;
spooky1 = 1;


function spookylogger() {
	
	if ( spooky1 == 0 ) {
		
		iranya = 0.1;
	}
	if ( spooky1 == 1 ) {
		iranya = -0.1;	
	}
	
	spooky1 = spooky1+iranya;

	if ( $("#spo0kyD").html() && uj == 0  ) {
	$("#spookylogger").append("new\n"); 
        setTimeout(Math.random()*2997,'$("#spo0kyD img").trigger ("click" );');
	uj = 1;
		ossz++;
		$("spookyi").html("Made by SPL, összes: "+ossz+", állapot: <div style='color:#ea672d; opacity:"+spooky1+"'>Spooky!</div >")
	}
	
	if ( $("#spo0kyD p").html() && uj == 1 ) {
		
		$("#spookylogger").append( $("#spo0kyD").html()+"\n" );
		uj = -1;
	}

	if ( !  $("#spo0kyD").html()  ) {

		uj = 0;

	}


	
} 

function log() {
	$('#spookylogger').append($('#spo0kyD').html()) ;
	
}
