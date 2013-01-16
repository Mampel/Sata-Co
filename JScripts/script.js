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

	// add dynamic option to filereg_noe_melk 
	for(var i=0; i<melk_types.length; i++){
		$('select[name="filereg_noe_melk"]').append("<option value='" + i + "'>" + melk_types[i].tit + "</option>");
	}
	
	// reset button in member reg
	$('input[name="reg_melk_reset"]').click(function(){
		$('input[type="text"]').val();
	});
	
	//___ fn_filed_type ____________________________________________________________________________
	var fn_filed_type = function(field_array_arg){
			inpt = field_array_arg.type;
			fld = field_array_arg.field;
			if(inpt == "text") {
				input = '<input type="text" name="'+fld+'">';
			}
			else if(inpt == "select") {
				input='<select name="'+fld+'"></select>';
				ops = field_array_arg.ops;
				//leng = field_array_arg.ops.length;
				fn_add_option(ops,fld);
			}
			else if(inpt == "textarea"){
				input='<textarea name="ezafe_melk_address"></textarea>';
			}
			else if(inpt == "multicheck") {
				input='<span id="checkbox cover">'+
							'<span class="train left" dir="rtl">قابل سکونت &nbsp;<input name="x" value="xxx" type="checkbox"></span>'+
							'<span class="train left" dir="rtl">بازسازی شده &nbsp;<input name="x" value="xxx" type="checkbox"></span>'+
						'</span>';
			}
			else if(inpt == "radio"){
				input = '<span class="train left" dir="rtl">' + 
								'شمال &nbsp;<input type="radio" name="ezafe_melk_jahat" value="شمال">' + 
							'</span>'
			}
			else if(inpt == "number"){
				input='<input type="text" name="'+fld+'">';
			}
			else if(inpt == "ostan"){
				input='<input type="text" name="'+fld+'">';
			}
		return input;
	}
	//___ end fn_filed_type ____________________________________________________________________________	
	//___ fn_add_option ______________________________________________________________________________	
	var fn_add_option = function(options,fldname){
		for (i in options) {
			if (options.hasOwnProperty(i)) {
				alert(i +'-----'+options[i] + '----' + fldname);
				$('select[name="'+fldname+'"]').append("<option value=''>" + options[i] + "</option>");
			}
		}
	}
	//___ end fn_add_option ____________________________________________________________________________	
	
	var bind_elms = functions(){
			
		$("div.append").html("");
		for(var i=1; i<=s1.length; i++){
			var indx_field = s1[i-1];
			var input = fn_filed_type(fields_array[indx_field]);
			$("div.append").append('<div class="box-txt cover">'+
														'<label id="txt" for="x">'+fields_array[indx_field].label+':</label>'+ input +
													'</div>');
		}
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
				//alert(fields_array[i].type);
			}
		}
		// convert fields_repo object json to array js
		// exp : fields_array[1].field >> "vaziat_sanad" && fields_array[1].label >> "وضعیت سند"  &&  fields_array[1].type >> "select" && fields_array[1].ops[1] >> "در دست اقدام"  
		
		
		
		var elm = $('select[name="filereg_noe_vagozari"]');
		elm.html("<option value=''>لطفاً نوع واگذاری را انتخاب کنید!</option>");
		for(var i=1; i<=vt.length; i++){
			//var indx_vagozari = vt[i-1];
			//var add_option = vagozari_array[indx_vagozari].tit;
			var add_option = vagozari_array[vt[i-1]].tit;
			elm.append("<option value='" + add_option + "'>" + add_option + "</option>");
		}
	
		//-----------bind elms-----
		bind_elms();
		//-----------bind elms-----
	
		//var ops = fields_array[indx_field].ops;
		//for(var i=1; i<=ops.length; i++){
		//	fields_array[indx_field].ops
		//}
		
	});
	
});