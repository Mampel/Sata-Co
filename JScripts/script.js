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
	
	// ----- charge Page -----------------------------------------------------------------------------------------------------------------------------------------
	dayelm = "input[name='day_count'],input[name='day_price']";
	numelm = "input[name='number_sms'],input[name='number_price']";
	$(numelm).attr("disabled", "disabled");
	$("input:radio[name='charge-type']").click(function() {
		if($(this).val()=="روزانه"){
			$(numelm).attr("disabled", "disabled");
			$(dayelm).removeAttr("disabled");
		}
		else if($(this).val()=="تعدادی"){
			$(dayelm).attr("disabled", "disabled");
			$(numelm).removeAttr("disabled");
		}
	});
	// ----- charge Page -----------------------------------------------------------------------------------------------------------------------------------------			
	
		
	$("div.filter-result table tr span.delete").click(function() { 
		var ok=confirm("آیا از لیست حذف شود؟");
		if (ok) $(this).parent().parent().css('display', 'none');
	});
	
	
	// ----- sms type --------------------------------------------------------------------------------------------------------------------------------------------
	// [sms_type] remove member at member list
	$("div.member span.delete").click(function() { 
		var ok=confirm("آیا از لیست حذف شود؟");
		if (ok) $(this).parent().css('display', 'none');
	});	
	
	// [sms_type] add to sms num list
	var mobile_num_array = [];
	$("p.info-member").click(function(){
		var member_name = $(this).attr("name");
		var mobile_num = $(this).attr("tel");
		mobile_num_array.push(mobile_num);
		$('input[name="type_sms_mobilenum_hidden"]').val(mobile_num_array.join(','));
		$('div.sms-mobilenum').append("<span class='show-num'>" + member_name + "....." + mobile_num + "</span>");
		$(this).parent().css('display', 'none');
	});
	
	// [sms_type] add custom member to sms num list
	$('a.addtolist').click(function(){
		var custome_num = $('input[name="custom-num"]').val();
		$('div.sms-mobilenum').append("<span class='show-num'>[ناشناس]....." + custome_num + "</span>");
		$('input[name="type_sms_mobilenum_hidden"]').val(custome_num);
		return false;
	});
	
	// [sms_type] remove member at sms num list
	$('span.show-num').live('click',function(){
		var ok=confirm("آیا از لیست ارسالی ها حذف شود؟");
		if (ok) $(this).css({'display':'none'});; // $(this).remove();
	});
	// ----- sms type --------------------------------------------------------------------------------------------------------------------------------------------
	
	// ----- estate register --------------------------------------------------------------------------------------------------------------------------------------
	// [step1-estate] add dynamic option to filereg_noe_melk 
	for(var i=0; i<melk_types.length; i++){
		$('select[name="filereg_noe_melk"]').append("<option value='" + i + "'>" + melk_types[i].tit + "</option>");
	}
	
	// [step1-member] reset button in member reg
	$('input[name="reg_melk_reset"]').click(function(){
		$('input[type="text"]').val();
	});
	
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
	
	//___ fn_filed_type ________________________________________________________
	var fn_filed_type = function(field_array_arg){
			inpt = field_array_arg.type;
			fld = field_array_arg.field;
			ops_o = field_array_arg.ops
			if(inpt == "text" || inpt == "number") {
				input = '<input type="text" name="'+fld+'">';
			}
			else if(inpt == "select") {
				input='<select name="'+fld+'"></select>';
			}
			else if(inpt == "textarea"){
				input='<textarea name="'+ fld +'"></textarea>';
			}
			else if(inpt == "multicheck") {
				var chckbx = "";
				for (i in ops_o) {
					if (ops_o.hasOwnProperty(i)) {
						chckbx += '<span class="train left" dir="rtl">' + ops_o[i] + ' &nbsp;<input type="checkbox" name="' + fld + '[]" value="'+ops_o[i]+'"></span>' ;
					}
				}
				input='<span id="checkbox cover">' + chckbx + '</span>';
			}
			else if(inpt == "radio"){
				var rdbtn = "";
				for (i in ops_o) {
					if (ops_o.hasOwnProperty(i)) {
						rdbtn += '<span class="train left" dir="rtl">' + ops_o[i] + ' &nbsp;<input type="radio" name="' + fld + '" value="'+ ops_o[i] +'"></span>';
					}
				}
				input = '<span class="train left" dir="rtl">' + rdbtn +'</span>'
			}
			else if(inpt == "ostan"){
				input='<select name="'+ fld + '" onchange="ldMenu(this.selectedIndex);" dir="rtl" id="id_ostan"></select>';
			}
			else if(inpt == "shahr"){
				input='<select name="' + fld + '" id="shahr" size="1" dir="rtl"></select>';
			}
			else input = "";
		return input;
	}
	//___ end fn_filed_type ____________________________________________________	
	//___ fn_add_option_select _________________________________________________
	var fn_add_option_select = function(options,fldname){
			for (i in options) {
				if (options.hasOwnProperty(i)) {
					$('select[name="'+fldname+'"]').append("<option value=''>" + options[i] + "</option>");
				}
			}
	}
	//___ end fn_add_option_select ______________________________________________	
	
	//___ bind_elms __________________________________________________________
	var bind_elms = function(s,fields_array){
		//$("div.append").html("");
		for(var i=1; i<=s.length; i++){
			var indx_field = s[i-1];
			var input = fn_filed_type(fields_array[indx_field]);
			$("div.append").append('<div class="box-txt cover">'+
														'<label id="txt" for="x">' + fields_array[indx_field].label + ':</label>' + input +
													'</div>');
			if(fields_array[indx_field].type == "select") {fn_add_option_select(fields_array[indx_field].ops,fields_array[indx_field].field);}
		}
	}
	//___ end bind_elms _______________________________________________________
	var indx,add_option;
	//-----------------------------------------------------------------------------------------------------------------
	// begin change event filereg_noe_melk -----------------------------------------------------------------
	$('select[name="filereg_noe_melk"]').change(function(){
		indx = $(this).find(':selected').val();
		var vt = melk_types[indx].vt;
		var s1 = melk_types[indx].s1;
	
		var elm = $('select[name="filereg_noe_vagozari"]');
		elm.html("<option value='0'>لطفاً نوع واگذاری را انتخاب کنید!</option>");
		for(var i=1; i<=vt.length; i++){
			add_option = vagozari_array[vt[i-1]].tit;
			val_option = vagozari_array[vt[i-1]].val;
			elm.append("<option value='" + val_option + "'>" + add_option + "</option>");
		}
		
		$("div.append").empty();
		//-----------bind elms-----------
		bind_elms(s1,fields_array);
		//-----------bind elms-----------
	});
	// end change event filereg_noe_melk ----------------------------------------------------------------------
	$('a.more-info').click(function(){
		var s2 = melk_types[indx].s2;
		bind_elms(s2,fields_array);
	});
	
	$('select[name="filereg_noe_vagozari"]').change(function(){
		var vtindx = $(this).find(':selected').val();
		
		//var vt1 = vagozari_types[indx].tit;
		var fields = vagozari_array[vtindx].fields;
		alert(vtindx+"---"+fields);
	});
	//--------------------------------------------------------------------------------------------------------------------
	// ----- estate register --------------------------------------------------------------------------------------------------------------------------------------

	
	$("input[type='file']").change(function(){
		if($(this).val() != "") $(this).parent().css({'background-color':'#128F2A'});
	});

	
});