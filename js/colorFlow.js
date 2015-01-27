//  ColorFlow | MIT license | henrygd.me
$.fn.colorFlow = function(e) {
    var t = e.background,
        a = e.text,
        l = e.time,
        n = [];
    if(void 0 != t && void 0 != a)
        if(t.length > a.length) var o = t.length;
        else var o = a.length;
    else if(void 0 != t) var o = t.length;
    else var o = a.length;
    var r = 100 / o,
        f = 100 / o;
    if(void 0 != t)
        for(i = 0; o > i; i++) n[i] = "background:" + e.background[i] + ";";
    if(void 0 != a)
        for(i = 0; i < a.length; i++) void 0 != n[i] ? n[i] += "color:" + e.text[i] : n[i] = "color:" + e.text[i];
    var s = "keyframes pulsate{0%{" + n[0] + "}";
    for(i = 1; o > i; i++) s += Math.floor(r) + "%{" + n[i] + "}", r += f;
    $("head").append("<style>@-webkit-" + s + "100%{" + n[0] + "}}@" + s + "100%{" + n[0] + "}}.colorflow{-webkit-animation:pulsate " + l + "s linear infinite;animation:pulsate " + l + "s linear infinite}</style>")
    $(this).addClass("colorflow")
};