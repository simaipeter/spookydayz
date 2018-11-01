i = document.createElement("link");
i.rel = 'stylesheet';
i.href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" ;
document.head.appendChild(i) ;
var jq = document.createElement('script');

jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type (or see below for non wait option)
jQuery.noConflict();
ju = document.createElement('script' );
ju.src = "https://code.jquery.com/ui/1.12.1/jquery-ui.js";
document.head.appendChild(ju);


setTimeout("init()",2000);


function init() {

	spoky = document.createElement("div");
	spoky.id = "spookylogger";
	$("body").append(spoky); 
	spoky1 = document.createElement("div");
	spoky1.id = "spookyi";
	$("#spookylogger").append(spoky1);
	//$("#spookyi").css({"width":"343px", "height":"44px","font-size":"9pt", "background":"#d2a990","color":"white","position":"absolute","top":"185px" }) ;
	//$("#spookylogger").css({"width":"341px", "height":"162.1px", "background":"#e79153","color":"white", "position":" absolute", "top":"22px", "left":"2px", "z-index":"1", "opacity":"0.6", "overflow-x":"hidden", "overflow-y":"scroll "}) ;

setTimeout("spookylogger()",1000)
setInterval("spookylogger()",122);
	
$("#spookyi").html("Made by SPL, összes: "+ossz+", állapot: <a id='spookylogo' style='color:#ea672d; opacity:"+spooky1+"; '>Spooky! </a >  <div id='klikk'> Klikk: "+klik+"</ div> Hangjelzés: <input type='checkbox' id='hang' "+jelolt+" />");
$( function() {
    $( "#spookylogger" ).dialog()
});

}

uj = 0;
ossz = 0;
iranya = -0.2;
spooky1 = 1;
jelolt = " checked ";
klik = 0;


function spookylogger() {
	
	if ( spooky1 < 0.1 ) {
		
		iranya = 0.1;
	}
	if ( spooky1 > 1.2 ) {
		iranya = -0.1;	
	}
	
	spooky1 = spooky1+iranya;

	if ( $("#spo0kyD").html() && uj == 0  ) {
	$("#spookylogger").append("new\n"); 
	klik = Math.random()*2333;
        setTimeout('klikk();', klik);
	$("#spookyi").html("Made by SPL, összes: "+ossz+", állapot: <a id='spookylogo' style='color:#ea672d; opacity:"+spooky1+"; '>Spooky! </a >  <div id='klikk'> Klikk: "+klik+"</div>  Hangjelzés: <input type='checkbox' id='hang' "+jelolt+" />");
	uj = 1;
		ossz++;
	
	}
	
	if ( $("#spo0kyD p").html() && uj == 1 ) {
		
		$("#spookylogger").append( $("#spo0kyD").html()+"\n" );
		uj = -1;
	}

	if ( !  $("#spo0kyD").html()  ) {

		uj = 0;

	}

	if ( klik > 0 ) {
		klik=klik-100;
	}
	else {
		klik = -1;
	}
	
	if ( $("#hang:checked") ) {
		jelolt = " checked  ";
	}
	else {
		jelolt = "";
	}
	
	$("#spookylogo").css("opacity",spooky1);
	$("#klikk").html( "Klikk: "+klik+" ms ");
	
} 

function klikk() {
	$("#spo0kyD img").trigger ("click" ); 
}

function log() {
	$('#spookylogger').append($('#spo0kyD').html()) ;
	
}

