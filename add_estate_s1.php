<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
<link type="text/css" rel="stylesheet" href="css/reset.css" />
<link type="text/css" rel="stylesheet" href="css/style.css" />

<link rel="stylesheet" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />
    <script src="http://code.jquery.com/jquery-1.8.3.js"></script>
    <script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
    <script src="JScripts/script.js"></script>
    <script src="JScripts/melk_types.js"></script>
    <script>
    // increase the default animation speed to exaggerate the effect
    $.fx.speeds._default = 1000;
    $(function() {
        $( "#dialog" ).dialog({
            autoOpen: false,
            show: "blind",
            hide: "explode"
        });
 
        $( "#opener" ).click(function() {
            $( "#dialog" ).dialog( "open" );
            return false;
        });
    });
    </script>



</head>



<body>
<div class="container">
  <div class="header">
      <div class="header-search">
        <form>
          <input dir="rtl" id="search_input" type="text" placeholder="جستجو" autocomplete="off"/>
        </form>
        </div>
        <div id="dialog" title="Basic dialog">
    <p>vahih.akhbarzade@gmail.com<br/>عضویت از 1342<br/>ادمین ارشد</p><button><a href="signin.html">خروج</a></button><button><a href="#">پروفایل</a></button><button><a href="#">حساب کاربری</a></button><button><a href="#">تغییر رمز عبور</a></button>
</div>
   </div>
    
    <div class="content">
    
    
      <div id='cssmenu'>
<ul>
   <li class='active '><a href='index.html'><span>داشبورد</span></a></li>
   <li class='has-sub '><a href='#'><span>فعالیت ها</span></a>
      <ul>
         <li><a href='1st-step-filereg.html'><span>ثبت ملک</span></a></li>
         <li class='has-sub '><a href='#'><span>درخواست ملک</span></a>
            <ul>
               <li><a href='darkhast-melk.html'><span>از روی لیست</span></a></li>
               <li><a href='darkhast-melk-az ruye naghshe.html'><span>از روی نقشه</span></a></li>
            </ul>
         </li>
         <li class='has-sub '><a href='#'><span>لیست انتظار فایل</span></a>
            <ul>
               <li><a href='checkfile[1,4].html'><span>چک کرد تکمیل اطلاعات</span></a></li>
               <li><a href='#'><span>تماس چک کرد</span></a></li>
               <li><a href='#'><span>مستند سازی</span></a></li>
               <li><a href='#'><span>کارشناسی قیمت</span></a></li>
               <li><a href='type-sms[1,4].html'><span>نایپ پیامک</span></a></li>
               <li><a href='#'><span>فید بک</span></a></li>
            </ul>
         </li>
         <li class='has-sub '><a href='#'><span>نمایندگی ها</span></a>
            <ul>
               <li><a href='#'><span>تائید درخواست های نمایندگی</span></a></li>
               <li><a href='#'><span>ارسال پکیج و آموزش به نمایندگی ها</span></a></li>
            </ul>
         </li>
         <li class='has-sub '><a href='#'><span>مشاورین</span></a>
            <ul>
               <li><a href='#'><span>ارسال پکیج و آموزش به مشاورین</span></a></li>
               <li><a href='#'><span>تائید مشاور املاک</span></a></li>
               <li><a href='#'><span>ثبت نام اولیه مشاور املاک</span></a></li>
            </ul>
         </li>
         <li><a href='#'><span>درخواست ارسال ایمیل</span></a></li>
         <li><a href='#'><span>درخواست ارسال پیامک</span></a></li>
         <li><a href='#'><span>لیست انتظار رسیدگی</span></a></li>
         <li><a href='#'><span>ارسال اخطاریه</span></a></li>
         <li><a href='#'><span>ثبت نام اولیه مشاور املاک</span></a></li>
         <li><a href='#'><span>لیست انتظار تائید مشاور املاک</span></a></li>
         <li><a href='#'><span>لیست انتظار ارسال پکیج و آموزش به مشاورین</span></a></li>
      </ul>
   </li>
   <li class='has-sub '><a href='#'><span>مرکز فایل</span></a>
      <ul>
         <li class='has-sub '><a href='#'><span>فعال</span></a>
            <ul>
               <li><a href='#'><span>املاک سپرده شده</span></a></li>
               <li><a href='#'><span>درخواست های ملک</span></a></li>
            </ul>
         </li>
         <li class='has-sub '><a href='#'><span>بازارچه فایل</span></a>
            <ul>
               <li><a href='#'><span>املاک سپرده شده</span></a></li>
               <li><a href='#'><span>درخواست های ملک</span></a></li>
            </ul>
         </li>
         <li class='has-sub '><a href='#'><span>بایگانی</span></a>
            <ul>
               <li><a href='#'><span>املاک سپرده شده</span></a></li>
               <li><a href='#'><span>درخواست های ملک</span></a></li>
            </ul>
         </li>
         <li><a href='#'><span>فایل های کمک کننده به استعلام قیمت</span></a></li>
      </ul> 
   </li>
   <li class='has-sub '><a href='#'><span>مالی</span></a>
      <ul>
         <li class='has-sub '><a href='#'><span>حسابداری</span></a>
            <ul>
               <li><a href='#'><span>بستانکاری</span></a></li>
               <li><a href='#'><span>بدهکاری</span></a></li>
               <li class='has-sub '><a href='#'><span>همه تراکنش ها</span></a>
                  <ul>
                       <li><a href='table-hesabdari[2,3] .html'><span>از ددید کاربر و مشاور</span></a></li>
                       <li><a href='table-hesabdari[1,4].html'><span>از دید ادمین و همکار</span></a></li>
                    </ul>
               </li>
            </ul>
         </li>
         <li class='has-sub '><a href='#'><span>درخواست وجه</span></a>
            <ul>
               <li><a href='darkhast-hoghugh[1,4].html'><span>درخواست حقوق</span></a></li>
               <li><a href='#'><span>لیست درخواست های وجه شما</span></a></li>
               <li><a href='#'><span>لیست درخواست های موافقت شده</span></a></li>
            </ul>
         </li>
         <li class='has-sub '><a href='#'><span>سرمایه گذاری در ساتا</span></a>
          <ul>
               <li><a href='sarmayegozari[1,2,3,4].html'><span>سرمایه گذاری</span></a></li>
               <li><a href='list-sarmayegozari[1,4].html'><span>لیست سرمایه گذاری</span></a></li>
               <li><a href='gozaresh-sarmayegozari[1,4].html'><span>گزارش سرمایه گذاری</span></a></li>
            </ul>
         </li>
         <li><a href='#'><span>واریز وجه</span></a></li>
         <li><a href='#'><span>آموزش</span></a></li>
         <li class='has-sub '><a href='#'><span>حقوق شما</span></a>
            <ul>
               <li><a href='#'><span>حقوق</span></a></li>
               <li><a href='#'><span>اضافه کاری</span></a></li>
               <li class='has-sub '><a href='#'><span>پاداش ها و تنبیه ها</span></a>
                  <ul>
                       <li class='has-sub '><a href='#'><span>واحد ها</span></a>
                          <ul>
                               <li><a href='ejad-vahed-padash-tanbih[1,4].html'><span>ایجاد واحد</span></a></li>
                               <li><a href='list-vahed-padashha-va-tanbiha[1,4].html'><span>لیست واحد ها</span></a></li>
                            </ul>
                       </li>
                       <li class='has-sub '><a href='#'><span>انبار</span></a>
                          <ul>
                               <li><a href='new-gift-reg[1,4].html'><span>جایزه جدید</span></a></li>
                               <li><a href='form-sabt-jayeze[1,4].html'><span>لیست ثبت جایزه</span></a></li>
                            </ul>
                       </li>
                       <li><a href='sabt-padash-va-tanbih[1,4].html'><span>پاداش و تنبیه جدید</span></a></li>
                       <li><a href='list-padash-tanbih[1,4].html'><span>لیست پاداش و تنبیه</span></a></li>
                       <li><a href='taeed-padash-va-tanbih[1,4].html'><span>لیست انتظار تائید</span></a></li>
                    </ul>
               </li>
            </ul>
         </li>
      </ul> 
   </li>
   <li class='has-sub '><a href='#'><span>افراد</span></a>
      <ul>
         <li><a href='#'><span>کاربران</span></a></li>
         <li class='has-sub '><a href='#'><span>همکاران</span></a>
            <ul>
               <li><a href='#'><span>مدیران</span></a></li>
            </ul>
         </li>
         <li><a href='#'><span>متفرقه</span></a></li>
         <li><a href='#'><span>مهندسان عمران و معماران</span></a></li>
         <li><a href='#'><span>سازندگان</span></a></li>
         <li><a href='#'><span>فعالان خرید و فروش</span></a></li>
         <li><a href='#'><span>دانشجویان عمران و معماری</span></a></li>
         <li><a href='#'><span>مستاجران</span></a></li>
         <li><a href='#'><span>خریداران</span></a></li>
         <li><a href='#'><span>سرمایه داران</span></a></li>
         <li><a href='#'><span>اضافه نمودن گروه به افراد</span></a></li>
      </ul> 
   </li>
   <li class='has-sub '><a href='#'><span>ارتباطات</span></a>
      <ul>
         <li><a href='#'><span>مرکز پیامک</span></a></li>
         <li class='has-sub '><a href='#'><span>مرکز پیام</span></a>
          <ul>
            <li><a href='new-message.html'><span>پیام جدید</span></a></li>
            <li><a href='inbox-new-message.html'><span>صندوق ورودی</span></a></li>
                <li><a href='outbox-new-message.html'><span>صندوق خروجی</span></a></li>
            </ul>    
         </li>
         <li><a href='#'><span>مرکز تماس</span></a></li>
         <li class='has-sub'><a href='#'><span>اطلاعیه ها</span></a>
          <ul>
            <li><a href='ejad-notification-tekrari[1,4].html'><span>ایجاد notification تکراری</span></a></li>
            </ul>  
         </li>
         <li><a href='#'><span>اخطارها</span></a></li>
         <li><a href='#'><span>مرکز پست الکترونیک</span></a></li>
         <li><a href='#'><span>نظرسنجی</span></a></li>
         <li><a href='#'><span>تبلیغات</span></a></li>
      </ul> 
   </li>
   <li class='has-sub '><a href='#'><span>دفترچه تلفن</span></a>
      <ul>
         <li><a href='#'><span>مهندسان عمران و معماران</span></a></li>
         <li><a href='#'><span>فعالان خرید و فروش</span></a></li>
         <li><a href='#'><span>دانشجویان عمران و معماری</span></a></li>
         <li><a href='#'><span>سازندگان</span></a></li>
         <li><a href='#'><span>کاربران</span></a></li>
         <li><a href='#'><span>مستاجران</span></a></li>
         <li><a href='#'><span>خریداران</span></a></li>
         <li><a href='#'><span>متفرقه</span></a></li>
         <li><a href='#'><span>سرمایه داران</span></a></li>
         <li><a href='#'><span>اضافه نمودن گروه به افراد</span></a></li>
      </ul> 
   </li>
   <li class='has-sub '><a href='#'><span>مدیریت</span></a>
      <ul>
         <li><a href='#'><span>بازاریابی و فروش</span></a></li>
         <li><a href='#'><span>پشتیبانی</span></a></li>
         <li><a href='#'><span>نمایندگی ها</span></a></li>
         <li><a href='#'><span>نمایندگی های مویرگی</span></a></li>
         <li><a href='#'><span>سرپرستی های استان ها</span></a></li>
      </ul> 
   </li>
   <li class='has-sub '><a href='#'><span>گزارشات</span></a>
      <ul>
         <li class='has-sub '><a href='#'><span>فایلینگ</span></a>
            <ul>
               <li><a href='#'><span>خوانده</span></a></li>
               <li><a href='#'><span>خواهان</span></a></li>
               <li><a href='#'><span>نقشه</span></a></li>
               <li><a href='#'><span>بر اساس منطقه</span></a></li>
               <li class='has-sub '><a href='#'><span>بایگانی</span></a>
                    <ul>
                       <li><a href='#'><span>معامله شده</span></a></li>
                       <li><a href='#'><span>انصراف از معامله</span></a></li>
                    </ul>
             </li>
               <li><a href='#'><span>در حال انتظار</span></a></li>
               <li><a href='#'><span>متوسط فایل در روز</span></a></li>
               <li><a href='#'><span>متوسط فایل در ماه</span></a></li>
            </ul>
         </li>
         <li class='has-sub '><a href='#'><span>افراد</span></a>
            <ul>
               <li class='has-sub '><a href='#'><span>مشاورین املاک</span></a>
                    <ul>
                       <li><a href='#'><span>ثبت نام شده</span></a></li>
                    </ul>
               </li>
               <li><a href='#'><span>کاربران</span></a></li>
            </ul>
         </li>
         <li class='has-sub '><a href='#'><span>نظرسنجی ها</span></a>
            <ul>
               <li><a href='#'><span>مالکان</span></a></li>
               <li><a href='#'><span>مشاورین املاک</span></a></li>
               <li><a href='#'><span>جویندگان ملک</span></a></li>
            </ul>
         </li>
      </ul> 
   </li>
   <li class='has-sub '><a href='#'><span>پایگاه دانش</span></a>
      <ul>
         <li><a href='#'><span>ویکی</span></a></li>
         <li><a href='#'><span>عمومی</span></a></li>
      </ul> 
   </li>
   <li class='has-sub '><a href='#'><span>سامانه ها</span></a>
      <ul>
         <li><a href='#'><span>مدیریت دفتر املاک</span></a></li>
         <li class='has-sub '><a href='#'><span>کارشناسی قیمت</span></a>
            <ul>
               <li><a href='#'><span>معامله شده ها</span></a></li>
               <li><a href='asnade-karshenasi-gheymat[1,4].html'><span>اسناد کارشناسی قیمت</span></a></li>
               <li><a href='gozaresh-karshenasi-melk-moshaveramlak[1,4].html'><span>قیمت پیشنهادی مشاورین املاک</span></a></li>
               <li><a href='#'><span>سیستم مقایسه گر</span></a></li>
               <li><a href='#'><span>تابع نرمال</span></a></li>
               <li><a href='#'><span>فایل های کمک کننده به استعلام قیمت</span></a></li>
            </ul>
         </li>
         <li><a href='#'><span>سامانه هوشمند انطباق</span></a></li>
      </ul> 
   </li>
   <li class='has-sub '><a href='#'><span>وظایف</span></a>
      <ul>
         <li><a href='modiriyate-vazayef.html'><span>تعریف وظیفه جدید</span></a></li>
         <li><a href='ejad-vazife-tekrari[1,4].html'><span>تعریف وظیفه تکراری</span></a></li>
         <li><a href='list-vazayefe-mohavale-man.html'><span>لیست انتظار وظایف موظف شده به من</span></a></li>
         <li><a href='list-vazayef-bedigaran.html'><span>لیست وظایف محول نموده به دیگران</span></a></li>
         <li><a href='list-vazayefe-marbut-be-man.html'><span>لیست کل وظایف مرتبط به من</span></a></li>
      </ul> 
   </li>
</ul>
</div>
      <div class="show">
          <div id="wrap" class="estate-s1">
            <form  action="add_estate_s2.php" method="post">
			  <div class="tag"><h3>فرم ثبت ملک جدید</h3></div>
              <div class="box-txt cover">
                 <label id="txt" for="noe_melk">نوع ملک :</label>
                   <select dir="rtl" name="filereg_noe_melk">
                      <option value="-1">نوع ملک را انتخاب کنید!----</option>
                     <!-- <option value="1">خانه ویلایی</option>
                      <option value="2">سوییت</option>
                      <option value="3">دفتر کار</option>
                      <option value="4">مغازه</option>
                      <option value="5">زمین</option>
                      <option value="6">کلنگی</option>
                      <option value="7">مستغلات - آپارتمان</option>
                      <option value="8">مستغلات - خانه شهری</option>
                      <option value="9">مستغلات - پاساژ با مرکز خرید</option>
                      <option value="10">مستغلات - باغ - باغچه</option>
                      <option value="11">مستغلات - انبار</option>
                      <option value="12">مستغلات - صنعتی</option>
                      <option value="13">مستغلات - کشاورزی</option>
                      <option value="14">مستغلات - دامداری - دامپروری</option>
                      <option value="15">مستغلات - هتل - هتل آپارتمان</option> -->
                  </select>
            </div>
            <div class="box-txt cover">
                  <label id="txt" for="noe_vagozari">نوع واگذاری :</label>
                   <select dir="rtl" name="filereg_noe_vagozari">
                  </select>
            </div>
			<div class="append"></div>
            <div class="buttom">
              <!-- <button name="filereg_btn" type="submit"><a href="afzudan-melk.html">برو</a></button> -->
			  <!--<input name="filereg_btn" type="submit" value="برو"></input>-->
			  <a class="more-info" href="#">اطلاعات بیشتر</a>
            </div>
          </form>  
        </div>    
      </div>
      <div class="clear"></div>
  </div>
</div>
</body>
</html>
