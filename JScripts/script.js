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

});