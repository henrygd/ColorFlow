//  ColorFlow | MIT license | henrygd.me
$.fn.colorFlow=function(o){var e=o.background,t=o.text,a=o.time,n=[],l=Math.random().toString(36).replace(/[^a-z]+/g,"");if(void 0!=e&&void 0!=t)if(e.length>t.length)var r=e.length;else var r=t.length;else if(void 0!=e)var r=e.length;else var r=t.length;var f=100/r,d=100/r;if(void 0!=e)for(i=0;r>i;i++)n[i]="background:"+o.background[i]+";";if(void 0!=t)for(i=0;i<t.length;i++)void 0!=n[i]?n[i]+="color:"+o.text[i]:n[i]="color:"+o.text[i];var v="keyframes "+l+"{0%{"+n[0]+"}";for(i=1;r>i;i++)v+=Math.floor(f)+"%{"+n[i]+"}",f+=d;$("head").append("<style>@-webkit-"+v+"100%{"+n[0]+"}}@"+v+"100%{"+n[0]+"}}.colorflow-"+l+"{-webkit-animation:"+l+" "+a+"s linear infinite;animation:"+l+" "+a+"s linear infinite}</style>"),$(this).addClass("colorflow-"+l)};