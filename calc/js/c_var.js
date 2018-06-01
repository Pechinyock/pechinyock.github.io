var a_type = 2250,
	lease = 450,
	pass = 0, 
	from_mkad = 0,
	l_time = 350,
	box = 100,
	bouble = 150,
	strach = 90,
	carton = 190,
	scotch = 30,
	total;

var c_lease,
	c_from_mkad,
	c_l_count,
	c_l_time,
	c_box,
	c_bouble,
	c_strach,
	c_carton,
	c_scotch;

var id_c_lease = '#c_lease',
	id_c_from_mkad = '#c_from_mkad',
	id_c_l_count = '#c_l_count',
	id_c_l_time = '#c_l_time',
	id_c_box = '#c_box',
	id_c_bouble = '#c_bouble',
	id_c_strach = '#c_strach',
	id_c_carton = '#c_carton',
	id_c_scotch = '#c_scotch';

function count_total(){
from_mkad = 15 * c_from_mkad;
l_time = 350 * c_l_count * c_l_time;
box = 100 * c_box;
bouble = 150 * c_bouble;
strach = 90 * c_strach;
carton = 190 * c_carton;
scotch = 30 * c_scotch;
if(a_type == 2250){
	lease = 450 * c_lease;
}
else{
	lease = 500 * c_lease;
}
total = a_type + lease + pass + from_mkad + l_time + box + bouble + strach + carton + scotch;
$('.label__count').text(total + ' руб');
console.log(total);
}

function set_default(){
	c_lease = 5,
	c_from_mkad = 0,
	c_l_count = 0,
	c_l_time = 4,
	c_box = 0,
	c_bouble = 0,
	c_strach = 0,
	c_carton = 0,
	c_scotch = 0;
	
	$('#c_lease').text(c_lease);
	$('#c_from_mkad').text(c_from_mkad);
	$('#c_l_count').text(c_l_count);
	$('#c_l_time').text(c_l_time);
	$('#c_box').text(c_box);
	$('#c_bouble').text(c_bouble);
	$('#c_strach').text(c_strach);
	$('#c_carton').text(c_carton);
	$('#c_scotch').text(c_scotch);

	$('#auto-type').val(1);
	$('#pass').val(0);

	a_type = 2250;
	pass = 0;

	count_total();
}

$(document).ready(function(){
set_default();

$(id_c_lease + "_plus").click(function(){
	c_lease+=1;
	$(id_c_lease).text(c_lease);
 	console.log(c_lease);
	count_total();
});
$(id_c_lease + "_minus").click(function(){
	if(c_lease > 5){
		c_lease-=1;
		$(id_c_lease).text(c_lease);
 		console.log(c_lease);
 		count_total();
	}
});

$(id_c_from_mkad + "_plus").click(function(){
	if(c_from_mkad < 50){
		c_from_mkad+=1;
		$(id_c_from_mkad).text(c_from_mkad);
		count_total();
		console.log(from_mkad);
	}
	
});
$(id_c_from_mkad + "_minus").click(function(){
	if(c_from_mkad !=0){
		c_from_mkad-=1;
		$(id_c_from_mkad).text(c_from_mkad);
		count_total();
 		console.log(c_from_mkad);
	}
	
});

$(id_c_l_count + "_plus").click(function(){
	if(c_l_count < 5){
		c_l_count+=1;
		$(id_c_l_count).text(c_l_count);
		count_total();
 		console.log(c_l_count);
	}
	
});
$(id_c_l_count + "_minus").click(function(){
	if(c_l_count != 0){
		c_l_count-=1;
		$(id_c_l_count).text(c_l_count);
		count_total();
 		console.log(c_l_count);
	}
	
});

$(id_c_l_time + "_plus").click(function(){
	c_l_time+=1;
	$(id_c_l_time).text(c_l_time);
	count_total();
 	console.log(c_l_time);
});
$(id_c_l_time + "_minus").click(function(){
	if(c_l_time>4){
		c_l_time-=1;
		$(id_c_l_time).text(c_l_time);
		count_total();
 		console.log(c_l_time);
	}	
});

$(id_c_box + "_plus").click(function(){
	c_box+=1;
	$(id_c_box).text(c_box);
	count_total();
 	console.log(c_box);
});
$(id_c_box + "_minus").click(function(){
	if(c_box != 0){
		c_box-=1;
		$(id_c_box).text(c_box);
		count_total();
 		console.log(c_box);
 }
});

$(id_c_bouble + "_plus").click(function(){
	c_bouble+=1;
	$(id_c_bouble).text(c_bouble);
	count_total();
 	console.log(c_bouble);
});
$(id_c_bouble + "_minus").click(function(){
	if(c_bouble !=0){
		c_bouble-=1;
		$(id_c_bouble).text(c_bouble);
		count_total();
 		console.log(c_bouble);
	}
});

$(id_c_strach + "_plus").click(function(){
	c_strach+=1;
	$(id_c_strach).text(c_strach);
	count_total();
 	console.log(c_strach);
});
$(id_c_strach + "_minus").click(function(){
	if(c_strach != 0){
		c_strach-=1;
		$(id_c_strach).text(c_strach);
		count_total();
 		console.log(c_strach);
	}
});

$(id_c_carton + "_plus").click(function(){
	c_carton+=1;
	$(id_c_carton).text(c_carton);
	count_total();
 	console.log(c_carton);
});
$(id_c_carton + "_minus").click(function(){
	if(c_carton != 0){
		c_carton-=1;
		$(id_c_carton).text(c_carton);
		count_total();
 		console.log(c_carton);
	}
});

$(id_c_scotch + "_plus").click(function(){
	c_scotch+=1;
	$(id_c_scotch).text(c_scotch);
	count_total();
 	console.log(c_scotch);
});
$(id_c_scotch + "_minus").click(function(){
	if(c_scotch != 0){
		c_scotch-=1;
		$(id_c_scotch).text(c_scotch);
		count_total();
 		console.log(c_scotch);
	}
	
});

$('.cancel').click(function(){
	set_default();
});

console.log(a_type);
$('#auto-type').on("change", function(){
		a_type_s = $(this).val();
		if(a_type_s == 1){
			a_type = 2250;
			console.log(a_type);
			$('.label__count').text(a_type + ' руб');
		}
		else{
			a_type = 2500;
			console.log(a_type);
			$('.label__count').text(a_type + ' руб');
		}
		count_total();
	});

$('#pass').on("change", function(){
		val_pass = $(this).val();
		if(val_pass == 0){
			pass = 0;
			console.log(pass);
		}
		else{
			pass = 500;
			console.log(pass);
		}
		count_total();
	});
});	