!function(p){var a=[],o=!1,f=!1,u={interval:250,force_process:!1},s=p(window),c=[];function d(){f=!1;for(var e,r=0,t=a.length;r<t;r++){var n,i=(e=a[r],p(e).filter(function(){return p(this).is(":appeared")}));i.trigger("appear",[i]),c[r]&&(n=c[r].not(i)).trigger("disappear",[n]),c[r]=i}}p.expr.pseudos.appeared=p.expr.createPseudo(function(e){return function(e){var r=p(e);if(!r.is(":visible"))return!1;var t=s.scrollLeft(),n=s.scrollTop(),i=r.offset(),a=i.left,o=i.top;return o+r.height()>=n&&o-(r.data("appear-top-offset")||0)<=n+s.height()&&a+r.width()>=t&&a-(r.data("appear-left-offset")||0)<=t+s.width()}}),p.fn.extend({appear:function(e,r){return p.appear(this,r),this}}),p.extend({appear:function(e,r){var t,n,i=p.extend({},u,r||{});o||(t=function(){f||(f=!0,setTimeout(d,i.interval))},p(window).scroll(t).resize(t),o=!0),i.force_process&&setTimeout(d,i.interval),n=e,a.push(n),c.push()},force_appear:function(){return!!o&&(d(),!0)}})}("undefined"!=typeof module?require("jquery"):jQuery);