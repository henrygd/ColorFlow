//  ColorFlow | MIT license | henrygd.me/colorflow
!function(o){o.fn.colorFlow=function(t){if("destroy"===t){var e=this.attr("class").match(/colorflow-\S+/g);for(i=0;i<e.length;i++)$(this).removeClass(e[i]);return"ColorFlow destroyed";}var r,n=t.background,l=t.text,a=t.time,d=[],f=Math.random().toString(36).replace(/[^a-z]+/g,"");r=void 0!=n&&void 0!=l?n.length>l.length?n.length:l.length:void 0!=n?n.length:l.length;var s=100/r,h=100/r;if(void 0!=n)for(i=0;r>i;i++)d[i]="background:"+t.background[i]+";";if(void 0!=l)for(i=0;i<l.length;i++)void 0!=d[i]?d[i]+="color:"+t.text[i]:d[i]="color:"+t.text[i];var c="keyframes "+f+"{0%{"+d[0]+"}";for(i=1;r>i;i++)c+=Math.floor(s)+"%{"+d[i]+"}",s+=h;return o("head").append("<style>@-webkit-"+c+"100%{"+d[0]+"}}@"+c+"100%{"+d[0]+"}}.colorflow-"+f+"{-webkit-animation:"+f+" "+a+"s linear infinite;animation:"+f+" "+a+"s linear infinite}</style>"),this.addClass("colorflow-"+f),this;};}(jQuery);