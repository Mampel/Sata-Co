var ostanOptions = '<option value="0">لطفا استان خود را انتخاب کنید</option>' +
					  '<option  value="41">آذربايجان شرقی</option>' +
					  '<option  value="44">آذربايجان غربي</option>' +
					  '<option  value="45">اردبيل</option>' +
					  '<option  value="31">اصفهان</option>' +
					  '<option  value="84">ايلام</option>' +
					  
					  '<option  value="77">بوشهر</option>' +
					  '<option  value="26">البرز</option>' +
					  '<option  value="21">تهران</option>' +
					  '<option  value="38">چهارمحال بختياري</option>' +
					  '<option  value="56">خراسان جنوبي</option>' +
					  '<option  value="51">خراسان رضوي</option>' +
					  '<option  value="58">خراسان شمالي</option>' +
					  
					  '<option  value="61">خوزستان</option>' +
					  '<option  value="24">زنجان</option>' +
					  '<option  value="23">سمنان</option>' +
					  '<option  value="54">سيستان و بلوچستان</option>' +
					  '<option  value="71">فارس</option>' +
					  '<option  value="28">قزوين</option>' +
					  
					  '<option  value="25">قم</option>' +
					  '<option  value="87">كردستان</option>' +
					  '<option  value="34">كرمان</option>' +
					  '<option  value="83">كرمانشاه</option>' +
					  '<option  value="74">كهكيلويه و بويراحمد</option>' +
					  '<option  value="17">گلستان</option>' +
					  
					  '<option  value="13">گيلان</option>' +
					  '<option  value="66">لرستان</option>' +
					  '<option  value="15">مازندران</option>' +
					  '<option  value="86">مركزي</option>' +
					  '<option  value="76">هرمزگان</option>' +
					  '<option  value="81">همدان</option>' +
					 ' <option  value="35">يزد</option>';

function ldMenu(mySubject) {
var Indx=mySubject;
with (document.getElementById('shahr')) 
{
options.length=0;
if (Indx==0)
{
options[0]=new Option("لطفا استان خود را انتخاب کنيد","");
}
if (Indx==1)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" آذر شهر","12-آذر شهر");
options[2]=new Option(" اسكو","14-اسكو");
options[3]=new Option(" اهر","13-اهر");
options[4]=new Option(" بستان آباد","17-بستان آباد");
options[5]=new Option(" بناب","15-بناب");
options[6]=new Option(" بندر شرفخانه","16-بندر شرفخانه");
options[7]=new Option(" تبريز","18-تبريز");
options[8]=new Option(" تسوج","19-تسوج");
options[9]=new Option(" جلفا","20-جلفا");
options[10]=new Option(" سراب","21-سراب");
options[11]=new Option(" شبستر","22-شبستر");
options[12]=new Option(" عجبشير","23-عجبشير");
options[13]=new Option(" قره آغاج","1-قره آغاج");
options[14]=new Option(" كليبر","2-كليبر");
options[15]=new Option(" كندوان","3-كندوان");
options[16]=new Option(" مرند","6-مرند");
options[17]=new Option(" ملكان","4-ملكان");
options[18]=new Option(" ميانه","5-ميانه");
options[19]=new Option(" مراغه","7-مراغه");
options[20]=new Option(" هاديشهر","8-هاديشهر");
options[21]=new Option(" هشترود","10-هشترود");
options[22]=new Option(" هريس","9-هريس");
options[23]=new Option(" ورزقان","11-ورزقان");
}
if (Indx==2)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" اروميه","7-اروميه");
options[2]=new Option(" اشنويه","8-اشنويه");
options[3]=new Option(" بوكان","9-بوكان");
options[4]=new Option(" تكاب","10-تكاب");
options[5]=new Option(" پيرانشهر","6-پيرانشهر");
options[6]=new Option(" پلدشت","17-پلدشت");
options[7]=new Option(" چالدران","5-چالدران");
options[8]=new Option(" خوي","11-خوي");
options[9]=new Option(" سر دشت","14-سر دشت");
options[10]=new Option(" سلماس","12-سلماس");
options[11]=new Option(" شاهين دژ","15-شاهين دژ");
options[12]=new Option(" شوط","16-شوط");
options[13]=new Option(" چايپاره","18-چايپاره");
options[14]=new Option(" ماكو","3-ماكو");
options[15]=new Option(" مهاباد","1-مهاباد");
options[16]=new Option(" مياندوآب","2-مياندوآب");
options[17]=new Option(" نقده","4-نقده");
}
if (Indx==3)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" اردبيل","9-اردبيل");
options[2]=new Option(" بيله سوار","10-بيله سوار");
options[3]=new Option(" پارس آباد","8-پارس آباد");
options[4]=new Option(" خلخال","11-خلخال");
options[5]=new Option(" سرعين","12-سرعين");
options[6]=new Option(" كوثر","1-كوثر");
options[7]=new Option(" كيوي","2-كيوي");
options[8]=new Option(" گرمي","7-گرمي");
options[9]=new Option(" مشگين شهر","3-مشگين شهر");
options[10]=new Option(" مغان","4-مغان");
options[11]=new Option(" نمين","5-نمين");
options[12]=new Option(" نير","6-نير");
}
if (Indx==4)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" آران و بيدگل","11-آران و بيدگل");
options[2]=new Option(" اردستان","12-اردستان");
options[3]=new Option(" اصفهان","13-اصفهان");
options[4]=new Option(" باغ بهادران","14-باغ بهادران");
options[5]=new Option(" تيران","15-تيران");
options[6]=new Option(" خميني شهر","16-خميني شهر");
options[7]=new Option(" خوانسار","17-خوانسار");
options[8]=new Option(" زرين شهر","19-زرين شهر");
options[9]=new Option(" سميرم","20-سميرم");
options[10]=new Option(" شاهين شهر","22-شاهين شهر");
options[11]=new Option(" شهرضا","21-شهرضا");
options[12]=new Option(" فريدن","3-فريدن");
options[13]=new Option(" فريدون شهر","4-فريدون شهر");
options[14]=new Option(" فلاورجان","1-فلاورجان");
options[15]=new Option(" فولاد شهر","2-فولاد شهر");
options[16]=new Option(" كاشان","5-كاشان");
options[17]=new Option(" گلپايگان","10-گلپايگان");
options[18]=new Option(" مباركه","6-مباركه");
options[19]=new Option(" نايين","7-نايين");
options[20]=new Option(" نجف آباد","8-نجف آباد");
options[21]=new Option(" نطنز","9-نطنز");
options[22]=new Option(" دهاقان","22-دهاقان");
}
if (Indx==5)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" آبدانان","2-آبدانان");
options[2]=new Option(" ايلام","3-ايلام");
options[3]=new Option(" ايوان","4-ايوان");
options[4]=new Option(" دره شهر","6-دره شهر");
options[5]=new Option(" دهلران","5-دهلران");
options[6]=new Option(" سرابله","7-سرابله");
options[7]=new Option(" شيروان چرداول","8-شيروان چرداول");
options[8]=new Option(" مهران","1-مهران");
}
if (Indx==6)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" اهرم","3-اهرم");
options[2]=new Option(" بوشهر","4-بوشهر");
options[3]=new Option(" تنگستان","6-تنگستان");
options[4]=new Option(" خارك","8-خارك");
options[5]=new Option(" خورموج","7-خورموج");
options[6]=new Option(" دير","10-دير");
options[7]=new Option(" دشتستان","12-دشتستان");
options[8]=new Option(" دشتي","11-دشتي");
options[9]=new Option(" ديلم","9-ديلم");
options[10]=new Option(" ريشهر","13-ريشهر");
options[11]=new Option(" كنگان","1-كنگان");
options[12]=new Option(" گناوه","2-گناوه");
options[13]=new Option(" عسلويه","14-عسلويه");
}
if (Indx==7)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" كرج","1-كرج");
options[2]=new Option(" آسارا","2-آسارا");
options[3]=new Option(" اشتهارد","3-اشتهارد");
options[4]=new Option(" هشتگرد","4-هشتگرد");
options[5]=new Option(" كوهسار","5-كوهسار");
options[6]=new Option(" چهارباغ","6-چهارباغ");
options[7]=new Option(" طالقان","7-طالقان");
options[8]=new Option(" جوستان","8-جوستان");
options[9]=new Option(" نظرآباد","9-نظرآباد");
options[10]=new Option(" تنكمان","10-تنكمان");
options[11]=new Option(" ساوجبلاغ","11-ساوجبلاغ");
options[12]=new Option(" فرديس","12-فرديس");
options[13]=new Option(" مهرشهر","13-مهرشهر");
}
if (Indx==8)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" اسلامشهر","17-اسلامشهر");
options[2]=new Option(" بومهن","19-بومهن");
options[3]=new Option(" تجريش","21-تجريش");
options[4]=new Option(" تهران","1-تهران");
options[5]=new Option(" پاكدشت","15-پاكدشت");
options[6]=new Option(" دماوند","22-دماوند");
options[7]=new Option(" رباط كريم","25-رباط كريم");
options[8]=new Option(" ري","24-ري");
options[9]=new Option(" رودهن","23-رودهن");
options[10]=new Option(" شريف آباد","27-شريف آباد");
options[11]=new Option(" شهريار","26-شهريار");
options[12]=new Option(" فشم","2-فشم");
options[13]=new Option(" فيروزكوه","20-فيروزكوه");
options[14]=new Option(" قدس","3-قدس");
options[15]=new Option(" قرچك","4-قرچك");
options[16]=new Option(" كن","5-كن");
options[17]=new Option(" كهريزك","6-كهريزك");
options[18]=new Option(" گلستان","14-گلستان");
options[19]=new Option(" لواسان","8-لواسان");
options[20]=new Option(" ملارد","9-ملارد");
options[21]=new Option(" ورامين","13-ورامين");
}
if (Indx==9)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" اردل","4-اردل");
options[2]=new Option(" بروجن","5-بروجن");
options[3]=new Option(" چلگرد","3-چلگرد");
options[4]=new Option(" سامان","6-سامان");
options[5]=new Option(" شهركرد","7-شهركرد");
options[6]=new Option(" فارسان","1-فارسان");
options[7]=new Option(" لردگان","2-لردگان");
}
if (Indx==10)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" بيرجند","2-بيرجند");
options[2]=new Option(" بشرویه","6-بشرویه");
options[3]=new Option(" خضری","8-خضری");
options[4]=new Option(" سربيشه","3-سربيشه");
options[5]=new Option(" قائن","4-قائن");
options[6]=new Option(" نهبندان","1-نهبندان");
options[7]=new Option(" فردوس","7-فردوس");
}
if (Indx==11)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" بردسكن","12-بردسكن");
options[2]=new Option(" تايباد","13-تايباد");
options[3]=new Option(" تربت جام","14-تربت جام");
options[4]=new Option(" تربت حيدريه","15-تربت حيدريه");
options[5]=new Option(" چناران","9-چناران");
options[6]=new Option(" خواف","16-خواف");
options[7]=new Option(" درگز","17-درگز");
options[8]=new Option(" سبزوار","18-سبزوار");
options[9]=new Option(" سرخس","19-سرخس");
options[10]=new Option(" طرقبه","21-طرقبه");
options[11]=new Option(" فريمان","1-فريمان");
options[12]=new Option(" قوچان","3-قوچان");
options[13]=new Option(" كاخك","11-گناباد ، كاخك");
options[14]=new Option(" كلات","6-كلات");
options[15]=new Option(" كاشمر","7-كاشمر");
options[16]=new Option(" گناباد","11-گناباد");
options[17]=new Option(" مشهد","8-مشهد");
options[18]=new Option(" نيشابور","10-نيشابور");
options[19]=new Option(" رشتخوار","22-رشتخوار");
options[20]=new Option(" جوين","23-جوين");
options[21]=new Option(" خليل آباد","24-خليل آباد");
}
if (Indx==12)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" آشخانه","1-آشخانه");
options[2]=new Option(" اسفراين","2-اسفراين");
options[3]=new Option(" بجنورد","3-بجنورد");
options[4]=new Option(" جاجرم","4-جاجرم");
options[5]=new Option(" شيروان","5-شيروان");
}
if (Indx==13)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" آبادان","5-آبادان");
options[2]=new Option(" اميديه","6-اميديه");
options[3]=new Option(" انديمشك","7-انديمشك");
options[4]=new Option(" اهواز","8-اهواز");
options[5]=new Option(" ايرانشهر","10-ايرانشهر");
options[6]=new Option(" ايذه","9-ايذه");
options[7]=new Option(" باغ ملك","14-باغ ملك");
options[8]=new Option(" بندرامام خميني ","12-بندرامام خميني");
options[9]=new Option(" بندر ماهشهر","11-بندر ماهشهر");
options[10]=new Option(" بهبهان","13-بهبهان");
options[11]=new Option(" دزفول","16-دزفول");
options[12]=new Option(" خرمشهر","15-خرمشهر");
options[13]=new Option(" رامهرمز","17-رامهرمز");
options[14]=new Option(" سوسنگرد","18-سوسنگرد");
options[15]=new Option(" شادگان","21-شادگان");
options[16]=new Option(" شوش","19-شوش");
options[17]=new Option(" شوشتر","20-شوشتر");
options[18]=new Option(" لالي","1-لالي");
options[19]=new Option(" مسجد سليمان","2-مسجد سليمان");
options[20]=new Option(" هنديجان","3-هنديجان");
options[21]=new Option(" هويزه","4-هويزه");
}
if (Indx==14)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" ابهر","6-ابهر");
options[2]=new Option(" ايجرود","5-ايجرود");
options[3]=new Option(" خرمدره","8-خرمدره");
options[4]=new Option(" زنجان","9-زنجان");
options[5]=new Option(" قيدار","1-قيدار");
options[6]=new Option(" طارم","2-طارم");
options[7]=new Option(" ماهنشان","3-ماهنشان");
}
if (Indx==15)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" ايوانكي","2-ايوانكي");
options[2]=new Option(" بسطام","3-بسطام");
options[3]=new Option(" سمنان","5-سمنان");
options[4]=new Option(" شاهرود","6-شاهرود");
options[5]=new Option(" دامغان","4-دامغان");
options[6]=new Option(" گرمسار","1-گرمسار");
}
if (Indx==16)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" ايرانشهر","4-ايرانشهر");
options[2]=new Option(" چابهار","3-چابهار");
options[3]=new Option(" خاش","5-خاش");
options[4]=new Option(" راسك","6-راسك");
options[5]=new Option(" زابل","8-زابل");
options[6]=new Option(" زاهدان","7-زاهدان");
options[7]=new Option(" سراوان","9-سراوان");
options[8]=new Option(" سرباز","10-سرباز");
options[9]=new Option(" ميرجاوه","1-ميرجاوه");
options[10]=new Option(" نيكشهر","2-نيكشهر");
}
if (Indx==17)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" آباده","13-آباده");
options[2]=new Option(" اردكان","15-اردكان");
options[3]=new Option(" ارسنجان","16-ارسنجان");
options[4]=new Option(" استهبان","17-استهبان");
options[5]=new Option(" اقليد","14-اقليد");
options[6]=new Option(" جهرم","18-جهرم");
options[7]=new Option(" حاجي آباد","19-حاجي آباد");
options[8]=new Option(" خرم بيد","20-خرم بيد");
options[9]=new Option(" داراب","21-داراب");
options[10]=new Option(" سپيدان","23-سپيدان");
options[11]=new Option(" سروستان","26-سروستان");
options[12]=new Option(" سوريان","22-سوريان");
options[13]=new Option(" شيراز","24-شيراز");
options[14]=new Option(" صفاشهر","25-صفاشهر");
options[15]=new Option(" فراشبند","2-فراشبند");
options[16]=new Option(" فسا","3-فسا");
options[17]=new Option(" فيروز آباد","1-فيروز آباد");
options[18]=new Option(" قيروكارزين","4-قيروكارزين");
options[19]=new Option(" كازرون","5-كازرون");
options[20]=new Option(" لار","7-لار");
options[21]=new Option(" لامرد","6-لامرد");
options[22]=new Option(" مرودشت","10-مرودشت");
options[23]=new Option(" ممسني","8-ممسني");
options[24]=new Option(" مهر","9-مهر");
options[25]=new Option(" ني ريز","12-ني ريز");
options[26]=new Option(" نورآباد","11-نورآباد");
options[27]=new Option(" خنج","27-خنج");
options[28]=new Option(" پاسارگاد","28-پاسارگاد");
}
if (Indx==18)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" آبيك","2-آبيك");
options[2]=new Option(" بوئين زهرا","3-بوئين زهرا");
options[3]=new Option(" تاكستان","4-تاكستان");
options[4]=new Option(" قزوين","1-قزوين");
options[5]=new Option(" الوند","5-الوند");
}
if (Indx==19)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" قم","1-قم");
options[2]=new Option(" جعفريه","2-جعفريه");
}
if (Indx==20)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" بانه","5-بانه");
options[2]=new Option(" بيجار","4-بيجار");
options[3]=new Option(" ديواندره","6-ديواندره");
options[4]=new Option(" سقز","7-سقز");
options[5]=new Option(" سنندج","8-سنندج");
options[6]=new Option(" قروه","1-قروه");
options[7]=new Option(" كامياران","2-كامياران");
options[8]=new Option(" مريوان","3-مريوان");
}
if (Indx==21)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" بابك","5-بابك");
options[2]=new Option(" بافت","4-بافت");
options[3]=new Option(" بردسير","6-بردسير");
options[4]=new Option(" بم","3-بم");
options[5]=new Option(" جيرفت","7-جيرفت");
options[6]=new Option(" راور","9-راور");
options[7]=new Option(" رفسنجان","8-رفسنجان");
options[8]=new Option(" زرند","10-زرند");
options[9]=new Option(" سيرجان","11-سيرجان");
options[10]=new Option(" كهنوج","1-كهنوج");
options[11]=new Option(" كرمان","2-كرمان");
}
if (Indx==22)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" اسلام آباد غرب","7-اسلام آباد غرب");
options[2]=new Option(" پاوه","6-پاوه");
options[3]=new Option(" جوانرود","8-جوانرود");
options[4]=new Option(" سر پل ذهاب","10-سر پل ذهاب");
options[5]=new Option(" سنقر","9-سنقر");
options[6]=new Option(" صحنه","11-صحنه");
options[7]=new Option(" قصر شيرين","1-قصر شيرين");
options[8]=new Option(" كرمانشاه","3-كرمانشاه");
options[9]=new Option(" كنگاور","2-كنگاور");
options[10]=new Option(" گيلان غرب","5-گيلان غرب");
options[11]=new Option(" هرسين","4-هرسين");
}
if (Indx==23)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" دنا","3-دنا");
options[2]=new Option(" دوگنبدان","5-دوگنبدان");
options[3]=new Option(" دهدشت","4-دهدشت");
options[4]=new Option(" سي سخت","6-سي سخت");
options[5]=new Option(" گچساران","2-گچساران");
options[6]=new Option(" ياسوج","1-ياسوج");
}
if (Indx==24)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" آزاد شهر","7-آزاد شهر");
options[2]=new Option(" آق قلا","6-آق قلا");
options[3]=new Option(" بندر گز","8-بندر گز");
options[4]=new Option(" تركمن","9-تركمن");
options[5]=new Option(" راميان","10-راميان");
options[6]=new Option(" علي آباد كتول","11-علي آباد كتول");
options[7]=new Option(" كلاله","1-كلاله");
options[8]=new Option(" كردكوي","2-كردكوي");
options[9]=new Option(" گنبد كاووس","4-گنبد كاووس");
options[10]=new Option(" گرگان","5-گرگان");
options[11]=new Option(" مينو دشت","3-مينو دشت");
}
if (Indx==25)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" آستانه اشرفيه","8-آستانه اشرفيه");
options[2]=new Option(" آستارا","9-آستارا");
options[3]=new Option(" املش","10-املش");
options[4]=new Option(" بندرانزلي","11-بندرانزلي");
options[5]=new Option(" تالش","12-تالش");
options[6]=new Option(" رشت","15-رشت");
options[7]=new Option(" رضوان شهر","16-رضوان شهر");
options[8]=new Option(" رودبار","14-رودبار");
options[9]=new Option(" رستم آباد","21-رستم آباد");
options[10]=new Option(" رود سر","13-رود سر");
options[11]=new Option(" سياهكل","17-سياهكل");
options[12]=new Option(" شفت","18-شفت");
options[13]=new Option(" صومعه سرا","19-صومعه سرا");
options[14]=new Option(" فومن","1-فومن");
options[15]=new Option(" كلاچاي","2-كلاچاي");
options[16]=new Option(" لاهيجان","20-لاهيجان");
options[17]=new Option(" لنگرود","3-لنگرود");
options[18]=new Option(" ماسال","6-ماسال");
options[19]=new Option(" ماسوله","5-ماسوله");
options[20]=new Option(" منجيل","4-منجيل");
options[21]=new Option(" هشتپر","7-هشتپر");
}
if (Indx==26)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" ازنا","7-ازنا");
options[2]=new Option(" الشتر","6-الشتر");
options[3]=new Option(" اليگودرز","5-اليگودرز");
options[4]=new Option(" بروجرد","8-بروجرد");
options[5]=new Option(" پلدختر","4-پلدختر");
options[6]=new Option(" خرم آباد","9-خرم آباد");
options[7]=new Option(" دزفول","11-دزفول");
options[8]=new Option(" دورود","10-دورود");
options[9]=new Option(" كوهدشت","1-كوهدشت");
options[10]=new Option(" ماهشهر","2-ماهشهر");
options[11]=new Option(" نور آباد","3-نور آباد");
options[12]=new Option(" شول آباد","12-شول آباد");
}
if (Indx==27)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" آمل","9-آمل");
options[2]=new Option(" بابل","12-بابل");
options[3]=new Option(" بابلسر","13-بابلسر");
options[4]=new Option(" بلده","10-بلده");
options[5]=new Option(" بهشهر","11-بهشهر");
options[6]=new Option(" پل سفيد","8-پل سفيد");
options[7]=new Option(" تنكابن","14-تنكابن");
options[8]=new Option(" ساري","18-ساري");
options[9]=new Option(" سواد كوه","17-سواد كوه");
options[10]=new Option(" جويبار","15-جويبار");
options[11]=new Option(" چالوس","7-چالوس");
options[12]=new Option(" رامسر","16-رامسر");
options[13]=new Option(" فريدون كنار","1-فريدون كنار");
options[14]=new Option(" قائم شهر","2-قائم شهر");
options[15]=new Option(" محمود آباد","3-محمود آباد");
options[16]=new Option(" نكا","4-نكا");
options[17]=new Option(" نور","5-نور");
options[18]=new Option(" نوشهر","6-نوشهر");
options[19]=new Option(" گلوگاه","19-گلوگاه");
}
if (Indx==28)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" آشتيان","2-آشتيان");
options[2]=new Option(" اراك","3-اراك");
options[3]=new Option(" تفرش","4-تفرش");
options[4]=new Option(" خمين","5-خمين");
options[5]=new Option(" دليجان","6-دليجان");
options[6]=new Option(" ساوه","7-ساوه");
options[7]=new Option(" سربند","8-سربند");
options[8]=new Option(" سربند","9-سربند");
options[9]=new Option(" شازند","10-شازند");
options[10]=new Option(" محلات","1-محلات");
options[11]=new Option(" زرنديه","11-زرنديه");
}
if (Indx==29)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" ابوموسي","5-ابوموسي");
options[2]=new Option(" انگهران","4-انگهران");
options[3]=new Option(" بستك","9-بستك");
options[4]=new Option(" بندر جاسك","7-بندر جاسك");
options[5]=new Option(" بندرعباس","8-بندرعباس");
options[6]=new Option(" بندر لنگه","6-بندر لنگه");
options[7]=new Option(" تنب بزرگ","10-تنب بزرگ");
options[8]=new Option(" حاجي آباد","11-حاجي آباد");
options[9]=new Option(" دهبارز","12-دهبارز");
options[10]=new Option(" قشم","1-قشم");
options[11]=new Option(" كيش","2-كيش");
options[12]=new Option(" ميناب","3-ميناب");
options[13]=new Option(" بندر خمير","13-بندر خمير");
}
if (Indx==30)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" اسدآباد","5-اسدآباد");
options[2]=new Option(" بهار","6-بهار");
options[3]=new Option(" تويسركان","7-تويسركان");
options[4]=new Option(" رزن","8-رزن");
options[5]=new Option(" كبودر آهنگ","1-كبودر آهنگ");
options[6]=new Option(" ملاير","2-ملاير");
options[7]=new Option(" نهاوند","3-نهاوند");
options[8]=new Option(" همدان","4-همدان");
}
if (Indx==31)
{
options[0]=new Option("لطفا شهر خود را انتخاب کنيد","");
options[1]=new Option(" ابركوه","5-ابركوه");
options[2]=new Option(" اردكان","6-اردكان");
options[3]=new Option(" اشكذر","7-اشكذر");
options[4]=new Option(" بافق","8-بافق");
options[5]=new Option(" تفت","9-تفت");
options[6]=new Option(" طبس","10-طبس");
options[7]=new Option(" مهريز","1-مهريز");
options[8]=new Option(" ميبد","2-ميبد");
options[9]=new Option(" هرات","3-هرات");
options[10]=new Option(" يزد","4-يزد");
}
document.getElementById('shahr').options[0].selected=true;
}

}


function check()
{

if (document.f1.id_ostan.selectedIndex==0)
 {
    alert(' لطفاً استان مقصد را انتخاب نمائيد ');
    document.f1.id_ostan.focus();
 return (false);
 }
if (document.f1.id_shahr.selectedIndex==0)
 {
    alert(' لطفاً شهر مقصد را انتخاب نمائيد ');
    document.f1.id_shahr.focus();
 return (false);
 }
}
