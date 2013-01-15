$(function () {

    //********************* timer ************************************************************
    checkdigit = function (digit) {
        return digit < 10 ? ('0' + digit) : digit;
    }
    var time, sec, min, hour;
    (getTime = function () {
        time = new Date();
        min = checkdigit(time.getMinutes());
        hour = checkdigit(time.getHours());
        $('div#time > span').html(hour + ":" + min);
    })();
    setInterval(getTime, 1000);
    //********************* timer ************************************************************

	$('input[name="reg_melk_reset"]').click(function(){
		$('input[type="text"]').val();
	});
	
	var xf = function(){

	}
		
	$('select[name="filereg_noe_melk"]').change(function(){
		var indx = $(this).find(':selected').val();
		//alert(indx);
		var vt = melk_types[indx].vt;
		//alert(x);
		var s1 = melk_types[indx].s1;
		
				// convert vagozari_types object json to array js
		var vagozari_array = [];
		for(var i in vagozari_types) {
			if(vagozari_types.hasOwnProperty(i) && !isNaN(+i)) {
				vagozari_array[+i] = vagozari_types[i];
			}
		}
		// convert vagozari_types object json to array js
		
		// convert fields_repo object json to array js
		var fields_array = [];
		for(var i in fields_repo) {
			if(fields_repo.hasOwnProperty(i) && !isNaN(+i)) {
				fields_array[+i] = fields_repo[i];
			}
		}
		// convert fields_repo object json to array js
		// exp : fields_array[1].field >> "vaziat_sanad" && fields_array[1].label >> "وضعیت سند"  &&  fields_array[1].type >> "select" && fields_array[1].ops[1] >> "در دست اقدام"  
		
		
		
		var elm = $('select[name="filereg_noe_vagozari"]');
		elm.html("<option value=''>لطفاً نوع واگذاری را انتخاب کنید!</option>");
		for(var i=1; i<=vt.length; i++){
			var indx_vagozari = vt[i-1];
			var add_option = vagozari_array[indx_vagozari].tit;
			elm.append("<option value='" + add_option + "'>" + add_option + "</option>");
		}
		
		var input;
		$("div.append").html("");
		for(var i=1; i<=s1.length; i++){
			var indx_field = s1[i-1];
			if(fields_array[indx_field].type=="select"){alert("select");}
			//alert(fields_array[indx_field].field+"-----"+fields_array[indx_field].label+"-----"+fields_array[indx_field].type);
			
			if(fields_array[indx_field].type=="text") {input='<input type="text" name="'+fields_array[indx_field].field+'">';}
			else if(fields_array[indx_field].type="select") {input='<select name="'+fields_array[indx_field].field+'"></select>';}
			else if(fields_array[indx_field].type="multicheck") {input='<span id="checkbox cover">'+
																											'<span class="train left" dir="rtl">قابل سکونت &nbsp;<input name="ezafe_melk_ghabelesokonat" value="قابل سکونت" type="checkbox"></span>'+
																											'<span class="train left" dir="rtl">بازسازی شده &nbsp;<input name="ezafe_melk_bazsazishode" value="بازسازی شده" type="checkbox"></span>'+
																										'</span>';}
															
			$("div.append").append('<div class="box-txt cover">'+
														'<label id="txt" for="metrazh">'+fields_array[indx_field].label+'</label>'+
														input+
													'</div>');
		}
		//var ops = fields_array[indx_field].ops;
		//for(var i=1; i<=ops.length; i++){
		//	fields_array[indx_field].ops
		//}
		
	});
	
});