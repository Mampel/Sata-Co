﻿/**
 * array to show melk_types
 * DO NOT CHANGE THE ORDER PLEASE
 *
 *	YOU CAN ADD TO THE END OF THE LIST BUT BE CAREFUL AND ASK YOUR PROGRAMMER FIRST ;)
 * 
 * @type {Array}
 */
var melk_types = [ //starts from zero
	{ "tit": "آپارتمان"                        , "vt": [1,2,3,5]   , "s1": [50,1,16,7,9,52,53,54,55,2,56,57] , "s2":[1,2,3,4,5,6,7,8,9,10,11,12,13,16,17,18,19,20,21,22,23,24,25,38,40,45,52,53,54,55,56,57,58] },
	{ "tit": "خانه ویلایی"                     , "vt": [1,2,3,5]   , "s1": [58,59,43,26,28,27,1,29,8,55,7] , "s2":[1,3,5,6,7,8,9,10,11,12,13,16,17,18,19,20,21,22,23,25,26,27,28,29,30,31,34,35,36,38,44,45,52,53,54,55,56,57,58,67] },
	{ "tit": "سوییت"                           , "vt": [1,2,3,5]     , "s1": [2,7,8,51,55] , "s2":[1,2,3,4,5,6,7,10,12,13,14,15,17,18,22,23,24,25,30,31,38,40,45,48,49,52,53,54,55,56,57] },
	{ "tit": "دفتر کار"                        , "vt": [1,2,3,4]     , "s1": [10,1,16,55,7,8,2,] , "s2":[1,12,13,14,15,17,18,22,34,40,41,42,43,46,47,48,49,50,52,53,4,55,56,57,61,62] },
	{ "tit": "مغازه"                           , "vt": [1,2,3,4]     , "s1": [5,51,60,55,54,2,1,7,59,34,60,61,8,42,26,43,41] , "s2":[1,2,5,10,13,17,18,22,23,24,25,40,45,52,53,54,55,56,57] },
	{ "tit": "زمین"                            , "vt": [1,4]           , "s1": [58,27,28,1,59,29,54,55,43,26] , "s2":[1,17,25,26,27,28,29,30,31,36,34,35,39,43,52,53,54,55,56,57,58,59,67,37] },
	{ "tit": "کلنگی"                           , "vt": [1,2,4,5]   , "s1": [58,27,28,1,59,29,54,55,43,26] , "s2":[1,7,8,17,25,26,27,28,29,30,31,34,35,36,39,52,53,54,55,56,57,58,59,67] },
	{ "tit": "مستغلات - آپارتمان"              , "vt": [1,2,3,4]   , "s1": [50,1,16,7,9,52,53,54,55,2,3,4,58,33,32,56,57] , "s2":[] },
	{ "tit": "مستغلات - خانه شهری"             , "vt": [1,2,3,4] , "s1": [58,59,43,26,28,27,1,29,8,54,55,7,3,4] , "s2":[] },
	{ "tit": "مستغلات - کل پاساژ یا مرکز خرید" , "vt": [1,2,3,4]     , "s1": [5,51,60,55,54,2,1,7,59,34,60,61,8,42,26,43,41,63,4] , "s2":[] },
	{ "tit": "مستغلات - باغ - باغچه"           , "vt": [1,2]       , "s1": [1,27,28,37,58,59] , "s2":[] },
	{ "tit": "مستغلات - انبار"                 , "vt": [1,2]       , "s1": [1,58,27,28,59,30,54,55,47,64] , "s2":[] },
	{ "tit": "مستغلات - صنعتی"               , "vt": [1,2]       , "s1": [1,58,27,28,59,30,54,55,47,64] , "s2":[] },
	{ "tit": "مستغلات - کشاورزی"            , "vt": [1,2,5]       , "s1": [1,58,27,28,59,30,54,55] , "s2":[] },
	{ "tit": "مستغلات - دامداری و دامپروری"            , "vt": [1,2,5]       , "s1": [1,58,27,28,59,30,54,55] , "s2":[] },
	{ "tit": "مستغلات - هتل هتل آپارتمان"                   , "vt": [1,2,3,4,5]       , "s1": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64] , "s2":[] },
	
	
];
/**
 * This json maintains different types of vazories and extra fields that are attached as entry form
 * DO NOT CHANGE THE ORDER UNLESS EVERYTHING GOES WRONG FOR EVER!!!
 *
 *	YOU CAN ADD TO THE END OF THE LIST BUT BE CAREFUL AND ASK YOUR PROGRAMMER FIRST ;)
 * 
 * @type {Object}
 */
var vagozari_types = {
    "1": { "tit" : "فروش"           , "fields":[3,4,5] , "val":"1"},
    "2": { "tit" : "رهن و اجاره"    , "fields":[3,4]  , "val":"2"},
    "3": { "tit" : "رهن"            , "fields":[2,3]  , "val":"3"},
    "4": { "tit" : "اجاره"          , "fields":[3,4]  , "val":"4"},
    "5": { "tit" : "پیش فروش"       , "fields":[2,3,4]  , "val":"5"},
    "6": { "tit" : "مشارکت در ساخت" , "fields":[2,3]  , "val":"6"},
    "7": { "tit" : "اجاره موقت"     , "fields":[4,5]  , "val":"7"}
};
/**
 * Fields Repository
 * this object maintains all available form inputs independant of any melk or vagozari types
 * AG AIN DO NOT CHANGE THE ORDER UNLESS EVERYTHING GOES WRONG FROM THE MOMENT ON ;)
 *
 *	YOU CAN ADD TO THE END OF THE LIST BUT BE CAREFUL AND ASK YOUR PROGRAMMER FIRST ;)
 *
 * 	Sample: "2"  : { "field" : "tabaghe" , "label" : "طبقه" , "type" : "number" , "ops" : {} , "attrs" : {"key":"value"} }
 * 
 * @type {Object}
 */
var fields_repo = {
	"1": {"field":"vaziat_sanad","label":"وضعیت سند","type":"select","ops":{
		"1":"در دست اقدام","2":"آماده محضر","3":"شخصی","4":"وکالتی","5":"قولنامه ای","6":"تجاری","7":"اوقافی","8":"تعاونی","9":"بنیادی","10":"بنجاق","11":"مشاع","12":"زمین شهری","13":"مبایعه نامه","14":"حاکم شهری","15":"منگوله دار","16":"قراردادی","17":"صنایع دفاع","18":"شهرداری","19":"باغچه","20":"صلح نامه ای ","21":"تجاری-صنعت","22":"دست اول","23":"بیت رهبری","24":"اعیان","25":"برگه حاکم","26":"ستاد اجرائی","27":"شورائی","28":"سازمانی","29":"مسکونی","30":"آموزش","31":"عیانی","32":"اداری","33":"آستانه"}
	},
	"2": {"field":"tabaghe","label":"طبقه","type":"number"},
	"3": {"field":"tedad_tabaghe","label":"تعداد طبقه","type":"number"},
	"4": {"field":"tedad_vahed","label":"تعداد واحد","type":"number"},
	"5": {"field":"tedad_khab","label":"تعداد خواب","type":"number"},
	"6": {"field":"nama","label":"نما","type":"select","ops":{
		"1":"آجر سه سانت","2":"آلومینیوم","3":"کنیتکس و رومی","4":"سرامیک","5":"گرانیت","6":"تراورتن","7":"سنگ","8":"شیشه","9":"سنگ و رومی","10":"رفلکس","11":"کلاسیک","12":"آجر","13":"سیمان","14":"آلومینیوم و شیشه","15":"رومی","16":"سفال","17":"رومالین","18":"سنگ شیشه","19":"کنیتکس","20":"کامپوزیت","21":"سیمان شیشه"}
	},
	"7": {"field":"sene_bana","label":"سن بنا","type":"select","ops":{
		"1":"نوساز","2":"1","3":"2","4":"3","5":"4","6":"5","7":"6","8":"7","9":"8","10":"9","11":"10","12":"11","13":"12","14":"13","15":"14","16":"15","17":"16","18":"17","19":"18","20":"19","21":"20","22":"21","23":"22","24":"23","25":"24","26":"25","27":"26","28":"27","29":"28","30":"29","31":"30","32":"بیشتر از 30 سال"}
	},
	"8": {"field":"vaziat_bana","label":"وضعیت بنا","type":"radio","ops":{
		"1":"کلنگی","2":"چند سال ساخت","3":"نوساز"}
	},
	"9": {"field":"vaziat","label":"وضعیت","type":"multicheck","ops":{
		"1":"قابل سکونت","2":"بازسازی شده"}
	},
	"10":{"field":"zir_bana","label":"زیر بنا","type":"number"},
	"63":{"field":"zir_banaye_tejariye_kol","label":"زیر بنای تجاری کل","type":"number"},
	"11":{"field":"kabinet","label":"کابینت","type":"select","ops":{
		"1":"فلزی","2":"چوبی","3":"چوبی فلزی","4":"ندارد","5":"HDF","6":"HPL","7":"HBE","8":"PVC","9":"سنگ","10":"فایبر گلاس"}
	},
	"12":{"field":"divar","label":"دیوار","type":"select","ops":{
		"1":"رنگ","2":"آجر","3":"کاغذ دیواری","4":"سنگ","5":"سرامیک","6":"کاشی","7":"چوب","8":"سیمان","9":"گچ"}
	},
	"13":{"field":"tasisat","label":"تاسیسات","type":"multicheck","ops":{
		"ab":"آب","bargh":"برق","gaz":"گاز","telefon":"تلفن","generator":"ژنراتور","manba_taghzie":"کمبع تغذیه"}
	},
	"14":{"field":"tajhizate_imeni","label":"تجهیزات ایمنی","type":"multicheck","ops":{
		"1":"آیفون تصویری","2":"درب ضد سرقت","3":"دوربین مدار بسته","4":"دزدگیر","5":"سیستم اعلام آتش","6":"سیستم اتفاع حریق","7":"گاو صندوق","8":"شیشه نشکن"}
	},
	"15":{"field":"sabeghe_shoghli","label":"سابقه ی شغلی","type":"text"},
	"16":{"field":"jahat","label":"جهت","type":"geoway"},
	"17":{"field":"noe_melk","label":"نوع ملک","type":"select","ops":{
		"1":"آپارتمان","2":"خانه ویلایی","3":"دفتر اداری","4":"مغازه","5":"زمین","6":"کلنگی","7":"مستغلات"}
	},
	"18":{"field":"kafe_otagh","label":"کف اتاقها","type":"select","ops":{
		"1":"سرامیک","2":"کاشی","3":"پارکت","4":"گرانیت","5":"موزاییک","6":"سیمان","7":"سنگ","8":"موکت","9":"لامینت"}
	},
	"19":{"field":"ksfe_hal_va_pazirayi","label":"کف حال و پذیرایی","type":"select","ops":{
		"1":"سرامیک","2":"کاشی","3":"پارکت","4":"گرانیت","5":"موزاییک","6":"سیمان","7":"سنگ","8":"موکت","9":"لامینت"}
	},
	"20":{"field":"kafe_ashpazkhane","label":"کف آشپزخانه","type":"select","ops":{
		"1":"سرامیک","2":"کاشی","3":"پارکت","4":"گرانیت","5":"موزاییک","6":"سیمان","7":"سنگ","8":"موکت","9":"لامینت"}
	},
	"21":{"field":"aspazkhane","label":"آشپزخانه","type":"multicheck","ops":{
		"1":"اپن"}
	},
	"22":{"field":"tahviye","label":"تهویه","type":"multicheck","ops":{
		"1":"بخاری","2":"پکیج رادیاتور","3":"دیگ رادیاتور","4":"گرمایش از کف","5":"شومینه","6":"کولر آبی","7":"کولر گازی","8":"فن کوئل","9":"چیلر"}
	},
	"23":{"field":"emkanate_refahi","label":"امکانات رفاهی","type":"multicheck","ops":{
		"1":"آبگرمکن خورشیدی","2":"هوا ساز","3":"اتاق مبله","4":"حال و پذیرایی مبله","5":"آنتن مرکزی","6":"استخر","7":"سونا","8":"جکوزی","9":"حمام مستر","10":"اینترنت پرسرعت","11":"فضای سبز","12":"شوتینگ زباله","13":"درب برقی","14":"لابی","15":"پشت بام محوطه سازی شده","16":"آلاچیق","17":"آبنما","18":"باربکیو","19":"گچبری","20":"کمد دیواری","21":"لوستر","22":"جارو مرکزی","23":"نور مخفی","24":"منبع آب","25":"باغ","26":"سالن اجتماعات"}
	},
	"24":{"field":"emkanat","label":"امکانات","type":"multicheck","ops":{
		"1":"آسانسور","2":"حیاط خلوت","3":"زیر زمین","4":"پاسیو","5":"حیاط","6":"مستخدم"}
	},
	"25":{"field":"did_va_manzare","label":"دید و منظره","type":"text","ops":{
		"1":"شهر","2":"دریا","3":"رودخانه","4":"جنگل","5":"کوه","6":"باغ","7":"اتوبان","8":"خیابان","9":"کوچه","10":"سایر"}
	},
	"26":{"field":"eslahi","label":"اصلاحی","type":"number"},
	"27":{"field":"arz","label":"عرض","type":"number"},
	"28":{"field":"tul","label":"طول","type":"number"},
	"29":{"field":"tarakom","label":"تراکم","type":"number"},
	"30":{"field":"tozihat_raje_be_karbari","label":"توضیحات راجع به کاربری","type":"text"},
	"31":{"field":"karbariye_pishnahadi","label":"کاربری پیشنهادی","type":"multicheck","ops":{
		"1":"مسکونی","2":"اداری","3":"تجاری","4":"صنعتی","5":"تفریحی-ورزشی","6":"آموزشی","7":"توریستی","8":"دامپروری","9":"کشاورزی","10":"باغشهر","11":"خدمات رفاهی","12":"انبار","13":"پارکینگ"}
	},
	"32":{"field":"zirbanaye_har_tabaghe","label":"زیربنای هر طبقه","type":"number"},
	"33":{"field":"zirbanaye_kol","label":"زیربنای کل","type":"number"},
	"34":{"field":"tedade_bar","label":"تعداد بر","type":"select","ops":{
		"1":"یک نبش","2":"دو نبش","3":"سه نبش","4":"چهار نبش"}
	},
	"35":{"field":"metrazhe_ghabele_sakht","label":"متراژ قابل ساخت","type":"number"},
	"36":{"field":"tabaghate_ghabele_sakht","label":"طبقات قابل ساخت","type":"number"},
	"37":{"field":"hesar_keshi","label":"حصار کشی","type":"multicheck","ops":{
		"1":"دیوار بتنی","2":"دیوار آجری","3":"فنس کشی","4":"سیم خاردار","5":"نرده کشی","6":"سایر","7":"ندارد"}
	},
	"38":{"field":"dastrasi_be","label":"دسترسی به","type":"multicheck","ops":{
		"1":"خیابان اصلی","2":"خیابان فرعی","3":"میدان","4":"کوچه","5":"بن بست","6":"اتوبان"}
	},
	"39":{"field":"vaziyate_sakht","label":"وضعیت ساخت","type":"multicheck","ops":{
		"1":"دارای جواز ساخت","2":"تفکیک پذیر","3":"تجمیع پذیر"}
	},
	"40":{"field":"sharzhe_mahiyane","label":"شارژ ماهیانه","type":"multicheck","ops":{
		"1":"دارد","2":"ندارد"}
	},
    "41":{"field":"mogheiate_maghaze","label":"","type":"radio","ops":{
		"1":"مغازه بر گذر","2":"مغازه داخل پاساژ یا مرکز خرید"}
	},
	"42":{"field":"noe_moamele","label":"نوع معامله","type":"radio","ops":{
		"1":"مالکیت","2":"سرقفلی"}
	},
	"43":{"field":"arze_gozargah","label":"عرض گذرگاه","type":"text"},
	"44":{"field":"tarahi","label":"طراحی","type":"radio","ops":{
		"1":"تک طبقه","2":"دو طبقه"}
	},
	"45":{"field":"servis_behdashti","label":"سرویس بهداشتی","type":"multicheck","ops":{
		"1":"ایرانی","2":"فرنگی","3":"حمام","4":"روشویی"}
	},
	"46":{"field":"emkanate_ refahi","label":"امکانات رفاهی","type":"multicheck","ops":{
		"1":"ویترین","2":"دکوراسیون","3":"قفسه بندی","4":"نور مخفی","5":"آبدارخانه","6":"آسانسور","7":"پله برقی","8":"بالابر حمل بار","9":"کرکره برقی","10":"اینترنت پرسرعت"}
	},
	"47":{"field":"ertefae_saghf","label":"ارتفاع سقف","type":"number"},
	"48":{"field":"shoghle_pishnahadi","label":"شغل پیشنهادی","type":"text"},
	"49":{"field":"sabegheye_shoghli","label":"سابقه ی شغلی","type":"text"},
	"60":{"field":"Metrazh_zirzamin","label":"زیر بنای تجاری","type":"number"},
	"51":{"field":"Metrazhe_teras","label":"زیر بنای تجاری","type":"number"},
	"50":{"field":"zirbanaye_tejari","label":"زیر بنای تجاری","type":"number"},
	"52":{"field":"ostan","label":"استان","type":"ostan","attrs":{"class":"ostan","onchange":"setCities(this.value)"}},
	"53":{"field":"shahr","label":"شهر","type":"shahr","attrs":{"class":"shahr"}},
	"54":{"field":"mahdude","label":"محدوده","type":"text"},
	"55":{"field":"address","label":"آدرس","type":"textarea"},
	"56":{"field":"pelak","label":"پلاک","type":"text"},
	"57":{"field":"vahed","label":"واحد","type":"textarea"},
	"58":{"field":"masahate_zamin","label":"مساحت زمین","type":"number"},
	"59":{"field":"karbary","label":"کاربری","type":"select","ops":{
		"1":"نا مشخص","2":"‍مسکونی","3":"تجاری","4":"اداری","5":"صنعتی","6":"خدماتی","7":"کشاورزی","8":"فرهنگی","9":"مذهبی","10":"بهداشتی","11":"تفریحی - ورزشی","12":"حمل و نقل"
	}},
	"61":{"field":"Metrazhe_dahaneh","label":"متراژ دهنه","type":"number"},
	"62":{"field":"Tedad_Dahaneh","label":"تعداد دهنه","type":"number"},
	"64":{"field":"Zarfiat","label":"ظرفیت","type":"text"},

};