/*Teresa Rodriguez Perez*/

/*$(document).ready(function(evt) {
   $('.effect').click(function() {
   		 var $this = $(this);
		 var targetID = ($this.parents('#textHolder').length==1) ? '#cabezaDelante' : '#photo';
		 var target = $(targetID);
		 var action = $this.attr('title');
		 switch (action) {
			case 'slideToggle' :
				target.slideToggle();
				break;
			case 'fadeTo':
				varFadeValue = (targetID=='#cabezaDelante') ? $('#textFade').val() :  $('#photoFade').val();
				target.fadeTo('slow',varFadeValue);
				break;
		 }
		 setButtonState(targetID);
	});

	setButtonState('#text');
	setButtonState('#photo');

}); // end ready*/

/*    if(e.target != document.getElementById('fa1')) {
        document.getElementById('fa1').style.display="none";
    } else {
      document.getElementById('fa1').style.display="block";
    }
}4 ba*/

<!--
//Funcion que muestra el div en la posicion del mouse

function showdiv1(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa1').style.top = (tempY+margin);
	document.getElementById('fa1').style.left = (tempX+margin);
	document.getElementById('fa1').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv2(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa2').style.top = (tempY+margin);
	document.getElementById('fa2').style.left = (tempX+margin);
	document.getElementById('fa2').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv3(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa3').style.top = (tempY+margin);
	document.getElementById('fa3').style.left = (tempX+margin);
	document.getElementById('fa3').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv4(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa4').style.top = (tempY+margin);
	document.getElementById('fa4').style.left = (tempX+margin);
	document.getElementById('fa4').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv5(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa5').style.top = (tempY+margin);
	document.getElementById('fa5').style.left = (tempX+margin);
	document.getElementById('fa5').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv6(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa6').style.top = (tempY+margin);
	document.getElementById('fa6').style.left = (tempX+margin);
	document.getElementById('fa6').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv7(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa7').style.top = (tempY+margin);
	document.getElementById('fa7').style.left = (tempX+margin);
	document.getElementById('fa7').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv8(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa8').style.top = (tempY+margin);
	document.getElementById('fa8').style.left = (tempX+margin);
	document.getElementById('fa8').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv9(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa9').style.top = (tempY+margin);
	document.getElementById('fa9').style.left = (tempX+margin);
	document.getElementById('fa9').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv10(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa10').style.top = (tempY+margin);
	document.getElementById('fa10').style.left = (tempX+margin);
	document.getElementById('fa10').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv11(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa11').style.top = (tempY+margin);
	document.getElementById('fa11').style.left = (tempX+margin);
	document.getElementById('fa11').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv12(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa12').style.top = (tempY+margin);
	document.getElementById('fa12').style.left = (tempX+margin);
	document.getElementById('fa12').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv13(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa13').style.top = (tempY+margin);
	document.getElementById('fa13').style.left = (tempX+margin);
	document.getElementById('fa13').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv14(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa14').style.top = (tempY+margin);
	document.getElementById('fa14').style.left = (tempX+margin);
	document.getElementById('fa14').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv15(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa15').style.top = (tempY+margin);
	document.getElementById('fa15').style.left = (tempX+margin);
	document.getElementById('fa15').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv16(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa16').style.top = (tempY+margin);
	document.getElementById('fa16').style.left = (tempX+margin);
	document.getElementById('fa16').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv17(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa17').style.top = (tempY+margin);
	document.getElementById('fa17').style.left = (tempX+margin);
	document.getElementById('fa17').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv18(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa18').style.top = (tempY+margin);
	document.getElementById('fa18').style.left = (tempX+margin);
	document.getElementById('fa18').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv19(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa19').style.top = (tempY+margin);
	document.getElementById('fa19').style.left = (tempX+margin);
	document.getElementById('fa19').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv20(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa20').style.top = (tempY+margin);
	document.getElementById('fa20').style.left = (tempX+margin);
	document.getElementById('fa20').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv21(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa21').style.top = (tempY+margin);
	document.getElementById('fa21').style.left = (tempX+margin);
	document.getElementById('fa21').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv22(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa22').style.top = (tempY+margin);
	document.getElementById('fa22').style.left = (tempX+margin);
	document.getElementById('fa22').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv23(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa23').style.top = (tempY+margin);
	document.getElementById('fa23').style.left = (tempX+margin);
	document.getElementById('fa23').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv24(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa24').style.top = (tempY+margin);
	document.getElementById('fa24').style.left = (tempX+margin);
	document.getElementById('fa24').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv25(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa25').style.top = (tempY+margin);
	document.getElementById('fa25').style.left = (tempX+margin);
	document.getElementById('fa25').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv26(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa26').style.top = (tempY+margin);
	document.getElementById('fa26').style.left = (tempX+margin);
	document.getElementById('fa26').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv27(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa27').style.top = (tempY+margin);
	document.getElementById('fa27').style.left = (tempX+margin);
	document.getElementById('fa27').style.display='block';
	return;
}

//Funcion que muestra el div en la posicion del mouse
function showdiv28(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa28').style.top = (tempY+margin);
	document.getElementById('fa28').style.left = (tempX+margin);
	document.getElementById('fa28').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv29(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa29').style.top = (tempY+margin);
	document.getElementById('fa29').style.left = (tempX+margin);
	document.getElementById('fa29').style.display='block';
	return;
}
-->

function showdiv30(event)
{
  //determina un margen de pixels del div al raton
  margin=5;

  //La variable IE determina si estamos utilizando IE
  var IE = document.all?true:false;
  //Si no utilizamos IE capturamos el evento del mouse
  if (!IE) document.captureEvents(Event.MOUSEMOVE)

  var tempX = 0;
  var tempY = 0;

  if(IE)
  { //para IE
    tempX = event.clientX + document.body.scrollLeft;
    tempY = event.clientY + document.body.scrollTop;
  }else{ //para netscape
    tempX = event.pageX;
    tempY = event.pageY;
  }
  if (tempX < 0){tempX = 0;}
  if (tempY < 0){tempY = 0;}

  //modificamos el valor del id posicion para indicar la posicion del mouse
  //document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

  document.getElementById('fa30').style.top = (tempY+margin);
  document.getElementById('fa30').style.left = (tempX+margin);
  document.getElementById('fa30').style.display='block';
  return;
}
-->

  //Funcion que muestra el div en la posicion del mouse
  function showdiv31(event)
  {
  	//determina un margen de pixels del div al raton
  	margin=5;

  	//La variable IE determina si estamos utilizando IE
  	var IE = document.all?true:false;
  	//Si no utilizamos IE capturamos el evento del mouse
  	if (!IE) document.captureEvents(Event.MOUSEMOVE)

  	var tempX = 0;
  	var tempY = 0;

  	if(IE)
  	{ //para IE
  		tempX = event.clientX + document.body.scrollLeft;
  		tempY = event.clientY + document.body.scrollTop;
  	}else{ //para netscape
  		tempX = event.pageX;
  		tempY = event.pageY;
  	}
  	if (tempX < 0){tempX = 0;}
  	if (tempY < 0){tempY = 0;}

  	//modificamos el valor del id posicion para indicar la posicion del mouse
  	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

  	document.getElementById('fa31').style.top = (tempY+margin);
  	document.getElementById('fa31').style.left = (tempX+margin);
  	document.getElementById('fa31').style.display='block';
  	return;
  }
  -->

  //Funcion que muestra el div en la posicion del mouse
  function showdiv32(event)
  {
  	//determina un margen de pixels del div al raton
  	margin=5;

  	//La variable IE determina si estamos utilizando IE
  	var IE = document.all?true:false;
  	//Si no utilizamos IE capturamos el evento del mouse
  	if (!IE) document.captureEvents(Event.MOUSEMOVE)

  	var tempX = 0;
  	var tempY = 0;

  	if(IE)
  	{ //para IE
  		tempX = event.clientX + document.body.scrollLeft;
  		tempY = event.clientY + document.body.scrollTop;
  	}else{ //para netscape
  		tempX = event.pageX;
  		tempY = event.pageY;
  	}
  	if (tempX < 0){tempX = 0;}
  	if (tempY < 0){tempY = 0;}

  	//modificamos el valor del id posicion para indicar la posicion del mouse
  	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

  	document.getElementById('fa32').style.top = (tempY+margin);
  	document.getElementById('fa32').style.left = (tempX+margin);
  	document.getElementById('fa32').style.display='block';
  	return;
  }
  -->

  //Funcion que muestra el div en la posicion del mouse
  function showdiv33(event)
  {
  	//determina un margen de pixels del div al raton
  	margin=5;

  	//La variable IE determina si estamos utilizando IE
  	var IE = document.all?true:false;
  	//Si no utilizamos IE capturamos el evento del mouse
  	if (!IE) document.captureEvents(Event.MOUSEMOVE)

  	var tempX = 0;
  	var tempY = 0;

  	if(IE)
  	{ //para IE
  		tempX = event.clientX + document.body.scrollLeft;
  		tempY = event.clientY + document.body.scrollTop;
  	}else{ //para netscape
  		tempX = event.pageX;
  		tempY = event.pageY;
  	}
  	if (tempX < 0){tempX = 0;}
  	if (tempY < 0){tempY = 0;}

  	//modificamos el valor del id posicion para indicar la posicion del mouse
  	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

  	document.getElementById('fa33').style.top = (tempY+margin);
  	document.getElementById('fa33').style.left = (tempX+margin);
  	document.getElementById('fa33').style.display='block';
  	return;
  }
  -->

  //Funcion que muestra el div en la posicion del mouse
  function showdiv34(event)
  {
  	//determina un margen de pixels del div al raton
  	margin=5;

  	//La variable IE determina si estamos utilizando IE
  	var IE = document.all?true:false;
  	//Si no utilizamos IE capturamos el evento del mouse
  	if (!IE) document.captureEvents(Event.MOUSEMOVE)

  	var tempX = 0;
  	var tempY = 0;

  	if(IE)
  	{ //para IE
  		tempX = event.clientX + document.body.scrollLeft;
  		tempY = event.clientY + document.body.scrollTop;
  	}else{ //para netscape
  		tempX = event.pageX;
  		tempY = event.pageY;
  	}
  	if (tempX < 0){tempX = 0;}
  	if (tempY < 0){tempY = 0;}

  	//modificamos el valor del id posicion para indicar la posicion del mouse
  	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

  	document.getElementById('fa34').style.top = (tempY+margin);
  	document.getElementById('fa34').style.left = (tempX+margin);
  	document.getElementById('fa34').style.display='block';
  	return;
  }
  -->

  //Funcion que muestra el div en la posicion del mouse
  function showdiv35(event)
  {
  	//determina un margen de pixels del div al raton
  	margin=5;

  	//La variable IE determina si estamos utilizando IE
  	var IE = document.all?true:false;
  	//Si no utilizamos IE capturamos el evento del mouse
  	if (!IE) document.captureEvents(Event.MOUSEMOVE)

  	var tempX = 0;
  	var tempY = 0;

  	if(IE)
  	{ //para IE
  		tempX = event.clientX + document.body.scrollLeft;
  		tempY = event.clientY + document.body.scrollTop;
  	}else{ //para netscape
  		tempX = event.pageX;
  		tempY = event.pageY;
  	}
  	if (tempX < 0){tempX = 0;}
  	if (tempY < 0){tempY = 0;}

  	//modificamos el valor del id posicion para indicar la posicion del mouse
  	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

  	document.getElementById('fa35').style.top = (tempY+margin);
  	document.getElementById('fa35').style.left = (tempX+margin);
  	document.getElementById('fa35').style.display='block';
  	return;
  }
  -->

//Funcion que muestra el div en la posicion del mouse
function showdiv36(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa36').style.top = (tempY+margin);
	document.getElementById('fa36').style.left = (tempX+margin);
	document.getElementById('fa36').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv37(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa37').style.top = (tempY+margin);
	document.getElementById('fa37').style.left = (tempX+margin);
	document.getElementById('fa37').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv38(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa38').style.top = (tempY+margin);
	document.getElementById('fa38').style.left = (tempX+margin);
	document.getElementById('fa38').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv39(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa39').style.top = (tempY+margin);
	document.getElementById('fa39').style.left = (tempX+margin);
	document.getElementById('fa39').style.display='block';
	return;
}
-->

//Funcion que muestra el div en la posicion del mouse
function showdiv40(event)
{
	//determina un margen de pixels del div al raton
	margin=5;

	//La variable IE determina si estamos utilizando IE
	var IE = document.all?true:false;
	//Si no utilizamos IE capturamos el evento del mouse
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	var tempX = 0;
	var tempY = 0;

	if(IE)
	{ //para IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}else{ //para netscape
		tempX = event.pageX;
		tempY = event.pageY;
	}
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	//modificamos el valor del id posicion para indicar la posicion del mouse
	//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

	document.getElementById('fa40').style.top = (tempY+margin);
	document.getElementById('fa40').style.left = (tempX+margin);
	document.getElementById('fa40').style.display='block';
	return;
}
-->


function fa1Visible(){
  if(document.getElementById('fa1').style.display=="block"){
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa2Visible(){
  if(document.getElementById('fa2').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa3Visible(){
  if(document.getElementById('fa3').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa4Visible(){
  if(document.getElementById('fa4').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa5Visible(){
  if(document.getElementById('fa5').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa6Visible(){
  if(document.getElementById('fa6').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa7Visible(){
  if(document.getElementById('fa7').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa8Visible(){
  if(document.getElementById('fa8').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa9Visible(){
  if(document.getElementById('fa9').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa10Visible(){
  if(document.getElementById('fa10').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa11Visible(){
  if(document.getElementById('fa11').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa12Visible(){
  if(document.getElementById('fa12').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa13Visible(){
  if(document.getElementById('fa13').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa14Visible(){
  if(document.getElementById('fa14').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa15Visible(){
  if(document.getElementById('fa15').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa16Visible(){
  if(document.getElementById('fa16').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa17Visible(){
  if(document.getElementById('fa17').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa18Visible(){
  if(document.getElementById('fa18').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa19Visible(){
  if(document.getElementById('fa19').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa20Visible(){
  if(document.getElementById('fa20').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa21Visible(){
  if(document.getElementById('fa21').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa22Visible(){
  if(document.getElementById('fa22').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa23Visible(){
  if(document.getElementById('fa23').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa24Visible(){
  if(document.getElementById('fa24').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa25Visible(){
  if(document.getElementById('fa25').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa26Visible(){
  if(document.getElementById('fa26').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa27Visible(){
  if(document.getElementById('fa27').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa28Visible(){
  if(document.getElementById('fa28').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa29Visible(){
  if(document.getElementById('fa29').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa30Visible(){
  if(document.getElementById('fa30').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa31Visible(){
  if(document.getElementById('fa31').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa32Visible(){
  if(document.getElementById('fa32').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa33Visible(){
  if(document.getElementById('fa33').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa34Visible(){
  if(document.getElementById('fa34').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa35Visible(){
  if(document.getElementById('fa35').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa36Visible(){
  if(document.getElementById('fa36').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa37Visible(){
  if(document.getElementById('fa37').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa38Visible(){
  if(document.getElementById('fa38').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa39').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa39Visible(){
  if(document.getElementById('fa39').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa40').style.display="none";
  }
}

function fa40Visible(){
  if(document.getElementById('fa40').style.display=="block"){
    document.getElementById('fa1').style.display="none";
    document.getElementById('fa2').style.display="none";
    document.getElementById('fa3').style.display="none";
    document.getElementById('fa4').style.display="none";
    document.getElementById('fa5').style.display="none";
    document.getElementById('fa6').style.display="none";
    document.getElementById('fa7').style.display="none";
    document.getElementById('fa8').style.display="none";
    document.getElementById('fa9').style.display="none";
    document.getElementById('fa10').style.display="none";
    document.getElementById('fa11').style.display="none";
    document.getElementById('fa12').style.display="none";
    document.getElementById('fa13').style.display="none";
    document.getElementById('fa14').style.display="none";
    document.getElementById('fa15').style.display="none";
    document.getElementById('fa16').style.display="none";
    document.getElementById('fa17').style.display="none";
    document.getElementById('fa18').style.display="none";
    document.getElementById('fa19').style.display="none";
    document.getElementById('fa20').style.display="none";
    document.getElementById('fa21').style.display="none";
    document.getElementById('fa22').style.display="none";
    document.getElementById('fa23').style.display="none";
    document.getElementById('fa24').style.display="none";
    document.getElementById('fa25').style.display="none";
    document.getElementById('fa26').style.display="none";
    document.getElementById('fa27').style.display="none";
    document.getElementById('fa28').style.display="none";
    document.getElementById('fa29').style.display="none";
    document.getElementById('fa30').style.display="none";
    document.getElementById('fa31').style.display="none";
    document.getElementById('fa32').style.display="none";
    document.getElementById('fa33').style.display="none";
    document.getElementById('fa34').style.display="none";
    document.getElementById('fa35').style.display="none";
    document.getElementById('fa36').style.display="none";
    document.getElementById('fa37').style.display="none";
    document.getElementById('fa38').style.display="none";
    document.getElementById('fa39').style.display="none";
  }
}
