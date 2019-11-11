(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define("intl-messageformat",["exports"],t):(e=e||self,t(e.IntlMessageFormat={}))})(this,function(e){"use strict";function t(e){return e.type===C.literal}function r(e){return e.type===C.argument}function n(e){return e.type===C.number}function u(e){return e.type===C.date}function o(e){return e.type===C.time}function a(e){return e.type===C.select}function i(e){return e.type===C.plural}function c(e,t){function r(){return e.substring(yt,gt)}function n(){return l(yt,gt)}function u(e,t){throw t=void 0!==t?t:l(yt,gt),h(e,t)}function o(e,t){return{type:"literal",text:e,ignoreCase:t}}function a(e,t,r){return{type:"class",parts:e,inverted:t,ignoreCase:r}}function i(){return{type:"any"}}function c(){return{type:"end"}}function s(e){return{type:"other",description:e}}function f(t){var r,n=bt[t];if(n)return n;for(r=t-1;!bt[r];)r--;for(n=bt[r],n={line:n.line,column:n.column};r<t;)10===e.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return bt[t]=n,n}function l(e,t){var r=f(e),n=f(t);return{start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:n.line,column:n.column}}}function p(e){gt<At||(gt>At&&(At=gt,wt=[]),wt.push(e))}function h(e,t){return new T(e,[],"",t)}function m(e,t,r){return new T(T.buildMessage(e,t),e,t,r)}function v(){return d()}function d(){var e,t;for(e=[],t=g();t!==Y;)e.push(t),t=g();return e}function g(){var e;return e=b(),e===Y&&(e=A(),e===Y&&(e=N(),e===Y&&(e=L(),e===Y&&(e=R())))),e}function y(){var e,t,r;if(e=gt,t=[],r=q(),r===Y&&(r=J(),r===Y&&(r=X())),r!==Y)for(;r!==Y;)t.push(r),r=q(),r===Y&&(r=J(),r===Y&&(r=X()));else t=Y;return t!==Y&&(yt=e,t=re(t)),e=t}function b(){var e,t;return e=gt,t=y(),t!==Y&&(yt=e,t=ne(t)),e=t}function A(){var t,r,n,u,o,a;return Ft++,t=gt,123===e.charCodeAt(gt)?(r="{",gt++):(r=Y,0===Ft&&p(oe)),r!==Y?(n=U(),n!==Y?(u=G(),u!==Y?(o=U(),o!==Y?(125===e.charCodeAt(gt)?(a="}",gt++):(a=Y,0===Ft&&p(ae)),a!==Y?(yt=t,r=ie(u),t=r):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y),Ft--,t===Y&&(r=Y,0===Ft&&p(ue)),t}function w(){var t,r,n,u,o;if(Ft++,t=gt,r=[],n=gt,u=gt,Ft++,o=z(),o===Y&&(se.test(e.charAt(gt))?(o=e.charAt(gt),gt++):(o=Y,0===Ft&&p(fe))),Ft--,o===Y?u=void 0:(gt=u,u=Y),u!==Y?(e.length>gt?(o=e.charAt(gt),gt++):(o=Y,0===Ft&&p(le)),o!==Y?(u=[u,o],n=u):(gt=n,n=Y)):(gt=n,n=Y),n!==Y)for(;n!==Y;)r.push(n),n=gt,u=gt,Ft++,o=z(),o===Y&&(se.test(e.charAt(gt))?(o=e.charAt(gt),gt++):(o=Y,0===Ft&&p(fe))),Ft--,o===Y?u=void 0:(gt=u,u=Y),u!==Y?(e.length>gt?(o=e.charAt(gt),gt++):(o=Y,0===Ft&&p(le)),o!==Y?(u=[u,o],n=u):(gt=n,n=Y)):(gt=n,n=Y);else r=Y;return t=r!==Y?e.substring(t,gt):r,Ft--,t===Y&&(r=Y,0===Ft&&p(ce)),t}function F(){var t,r,n;return Ft++,t=gt,47===e.charCodeAt(gt)?(r="/",gt++):(r=Y,0===Ft&&p(he)),r!==Y?(n=w(),n!==Y?(yt=t,r=me(n),t=r):(gt=t,t=Y)):(gt=t,t=Y),Ft--,t===Y&&(r=Y,0===Ft&&p(pe)),t}function x(){var e,t,r,n,u;if(Ft++,e=gt,t=U(),t!==Y)if(r=w(),r!==Y){for(n=[],u=F();u!==Y;)n.push(u),u=F();n!==Y?(yt=e,t=de(r,n),e=t):(gt=e,e=Y)}else gt=e,e=Y;else gt=e,e=Y;return Ft--,e===Y&&(t=Y,0===Ft&&p(ve)),e}function O(){var e,t,r;if(e=gt,t=[],r=x(),r!==Y)for(;r!==Y;)t.push(r),r=x();else t=Y;return t!==Y&&(yt=e,t=ge(t)),e=t}function _(){var t,r,n;return t=gt,"::"===e.substr(gt,2)?(r="::",gt+=2):(r=Y,0===Ft&&p(ye)),r!==Y?(n=O(),n!==Y?(yt=t,r=be(n),t=r):(gt=t,t=Y)):(gt=t,t=Y),t===Y&&(t=gt,r=y(),r!==Y&&(yt=t,r=Ae(r)),t=r),t}function E(){var t,r,n,u,o,a,i,c,s,f,l,h,m;return t=gt,123===e.charCodeAt(gt)?(r="{",gt++):(r=Y,0===Ft&&p(oe)),r!==Y?(n=U(),n!==Y?(u=G(),u!==Y?(o=U(),o!==Y?(44===e.charCodeAt(gt)?(a=",",gt++):(a=Y,0===Ft&&p(we)),a!==Y?(i=U(),i!==Y?("number"===e.substr(gt,6)?(c="number",gt+=6):(c=Y,0===Ft&&p(Fe)),c!==Y?(s=U(),s!==Y?(f=gt,44===e.charCodeAt(gt)?(l=",",gt++):(l=Y,0===Ft&&p(we)),l!==Y?(h=U(),h!==Y?(m=_(),m!==Y?(l=[l,h,m],f=l):(gt=f,f=Y)):(gt=f,f=Y)):(gt=f,f=Y),f===Y&&(f=null),f!==Y?(l=U(),l!==Y?(125===e.charCodeAt(gt)?(h="}",gt++):(h=Y,0===Ft&&p(ae)),h!==Y?(yt=t,r=xe(u,c,f),t=r):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y),t}function k(){var t,r,n,u;if(t=gt,39===e.charCodeAt(gt)?(r="'",gt++):(r=Y,0===Ft&&p(Ce)),r!==Y){if(n=[],u=q(),u===Y&&(Oe.test(e.charAt(gt))?(u=e.charAt(gt),gt++):(u=Y,0===Ft&&p(_e))),u!==Y)for(;u!==Y;)n.push(u),u=q(),u===Y&&(Oe.test(e.charAt(gt))?(u=e.charAt(gt),gt++):(u=Y,0===Ft&&p(_e)));else n=Y;n!==Y?(39===e.charCodeAt(gt)?(u="'",gt++):(u=Y,0===Ft&&p(Ce)),u!==Y?(r=[r,n,u],t=r):(gt=t,t=Y)):(gt=t,t=Y)}else gt=t,t=Y;if(t===Y)if(t=[],r=q(),r===Y&&(je.test(e.charAt(gt))?(r=e.charAt(gt),gt++):(r=Y,0===Ft&&p(Te))),r!==Y)for(;r!==Y;)t.push(r),r=q(),r===Y&&(je.test(e.charAt(gt))?(r=e.charAt(gt),gt++):(r=Y,0===Ft&&p(Te)));else t=Y;return t}function M(){var t,r;if(t=[],Ee.test(e.charAt(gt))?(r=e.charAt(gt),gt++):(r=Y,0===Ft&&p(ke)),r!==Y)for(;r!==Y;)t.push(r),Ee.test(e.charAt(gt))?(r=e.charAt(gt),gt++):(r=Y,0===Ft&&p(ke));else t=Y;return t}function D(){var t,r,n,u;if(t=gt,r=gt,n=[],u=k(),u===Y&&(u=M()),u!==Y)for(;u!==Y;)n.push(u),u=k(),u===Y&&(u=M());else n=Y;return r=n!==Y?e.substring(r,gt):n,r!==Y&&(yt=t,r=Me(r)),t=r}function I(){var t,r,n;return t=gt,"::"===e.substr(gt,2)?(r="::",gt+=2):(r=Y,0===Ft&&p(ye)),r!==Y?(n=D(),n!==Y?(yt=t,r=be(n),t=r):(gt=t,t=Y)):(gt=t,t=Y),t===Y&&(t=gt,r=y(),r!==Y&&(yt=t,r=Ae(r)),t=r),t}function P(){var t,r,n,u,o,a,i,c,s,f,l,h,m;return t=gt,123===e.charCodeAt(gt)?(r="{",gt++):(r=Y,0===Ft&&p(oe)),r!==Y?(n=U(),n!==Y?(u=G(),u!==Y?(o=U(),o!==Y?(44===e.charCodeAt(gt)?(a=",",gt++):(a=Y,0===Ft&&p(we)),a!==Y?(i=U(),i!==Y?("date"===e.substr(gt,4)?(c="date",gt+=4):(c=Y,0===Ft&&p(De)),c===Y&&("time"===e.substr(gt,4)?(c="time",gt+=4):(c=Y,0===Ft&&p(Ie))),c!==Y?(s=U(),s!==Y?(f=gt,44===e.charCodeAt(gt)?(l=",",gt++):(l=Y,0===Ft&&p(we)),l!==Y?(h=U(),h!==Y?(m=I(),m!==Y?(l=[l,h,m],f=l):(gt=f,f=Y)):(gt=f,f=Y)):(gt=f,f=Y),f===Y&&(f=null),f!==Y?(l=U(),l!==Y?(125===e.charCodeAt(gt)?(h="}",gt++):(h=Y,0===Ft&&p(ae)),h!==Y?(yt=t,r=xe(u,c,f),t=r):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y),t}function N(){var e;return e=E(),e===Y&&(e=P()),e}function L(){var t,r,n,u,o,a,i,c,s,f,l,h,m,v,d,g;if(t=gt,123===e.charCodeAt(gt)?(r="{",gt++):(r=Y,0===Ft&&p(oe)),r!==Y)if(n=U(),n!==Y)if(u=G(),u!==Y)if(o=U(),o!==Y)if(44===e.charCodeAt(gt)?(a=",",gt++):(a=Y,0===Ft&&p(we)),a!==Y)if(i=U(),i!==Y)if("plural"===e.substr(gt,6)?(c="plural",gt+=6):(c=Y,0===Ft&&p(Pe)),c===Y&&("selectordinal"===e.substr(gt,13)?(c="selectordinal",gt+=13):(c=Y,0===Ft&&p(Ne))),c!==Y)if(s=U(),s!==Y)if(44===e.charCodeAt(gt)?(f=",",gt++):(f=Y,0===Ft&&p(we)),f!==Y)if(l=U(),l!==Y)if(h=gt,"offset:"===e.substr(gt,7)?(m="offset:",gt+=7):(m=Y,0===Ft&&p(Le)),m!==Y?(v=U(),v!==Y?(d=$(),d!==Y?(m=[m,v,d],h=m):(gt=h,h=Y)):(gt=h,h=Y)):(gt=h,h=Y),h===Y&&(h=null),h!==Y)if(m=U(),m!==Y){if(v=[],d=Z(),d!==Y)for(;d!==Y;)v.push(d),d=Z();else v=Y;v!==Y?(d=U(),d!==Y?(125===e.charCodeAt(gt)?(g="}",gt++):(g=Y,0===Ft&&p(ae)),g!==Y?(yt=t,r=Re(u,c,h,v),t=r):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)}else gt=t,t=Y;else gt=t,t=Y;else gt=t,t=Y;else gt=t,t=Y;else gt=t,t=Y;else gt=t,t=Y;else gt=t,t=Y;else gt=t,t=Y;else gt=t,t=Y;else gt=t,t=Y;else gt=t,t=Y;else gt=t,t=Y;return t}function R(){var t,r,n,u,o,a,i,c,s,f,l,h,m,v;if(t=gt,123===e.charCodeAt(gt)?(r="{",gt++):(r=Y,0===Ft&&p(oe)),r!==Y)if(n=U(),n!==Y)if(u=G(),u!==Y)if(o=U(),o!==Y)if(44===e.charCodeAt(gt)?(a=",",gt++):(a=Y,0===Ft&&p(we)),a!==Y)if(i=U(),i!==Y)if("select"===e.substr(gt,6)?(c="select",gt+=6):(c=Y,0===Ft&&p(Se)),c!==Y)if(s=U(),s!==Y)if(44===e.charCodeAt(gt)?(f=",",gt++):(f=Y,0===Ft&&p(we)),f!==Y)if(l=U(),l!==Y){if(h=[],m=B(),m!==Y)for(;m!==Y;)h.push(m),m=B();else h=Y;h!==Y?(m=U(),m!==Y?(125===e.charCodeAt(gt)?(v="}",gt++):(v=Y,0===Ft&&p(ae)),v!==Y?(yt=t,r=Be(u,h),t=r):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)}else gt=t,t=Y;else gt=t,t=Y;else gt=t,t=Y;else gt=t,t=Y;else gt=t,t=Y;else gt=t,t=Y;else gt=t,t=Y;else gt=t,t=Y;else gt=t,t=Y;else gt=t,t=Y;return t}function S(){var t,r,n,u;return t=gt,r=gt,61===e.charCodeAt(gt)?(n="=",gt++):(n=Y,0===Ft&&p(Ze)),n!==Y?(u=$(),u!==Y?(n=[n,u],r=n):(gt=r,r=Y)):(gt=r,r=Y),t=r!==Y?e.substring(t,gt):r,t===Y&&(t=Q()),t}function B(){var t,r,n,u,o,a,i;return t=gt,r=U(),r!==Y?(n=Q(),n!==Y?(u=U(),u!==Y?(123===e.charCodeAt(gt)?(o="{",gt++):(o=Y,0===Ft&&p(oe)),o!==Y?(a=d(),a!==Y?(125===e.charCodeAt(gt)?(i="}",gt++):(i=Y,0===Ft&&p(ae)),i!==Y?(yt=t,r=ze(n,a),t=r):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y),t}function Z(){var t,r,n,u,o,a,i;return t=gt,r=U(),r!==Y?(n=S(),n!==Y?(u=U(),u!==Y?(123===e.charCodeAt(gt)?(o="{",gt++):(o=Y,0===Ft&&p(oe)),o!==Y?(a=d(),a!==Y?(125===e.charCodeAt(gt)?(i="}",gt++):(i=Y,0===Ft&&p(ae)),i!==Y?(yt=t,r=He(n,a),t=r):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y)):(gt=t,t=Y),t}function z(){var t;return Ft++,$e.test(e.charAt(gt))?(t=e.charAt(gt),gt++):(t=Y,0===Ft&&p(qe)),Ft--,t===Y&&0===Ft&&p(Ue),t}function H(){var t;return Ft++,Xe.test(e.charAt(gt))?(t=e.charAt(gt),gt++):(t=Y,0===Ft&&p(Ge)),Ft--,t===Y&&0===Ft&&p(Je),t}function U(){var t,r,n;for(Ft++,t=gt,r=[],n=z();n!==Y;)r.push(n),n=z();return t=r!==Y?e.substring(t,gt):r,Ft--,t===Y&&(r=Y,0===Ft&&p(Ke)),t}function $(){var t,r,n;return Ft++,t=gt,45===e.charCodeAt(gt)?(r="-",gt++):(r=Y,0===Ft&&p(Ve)),r===Y&&(r=null),r!==Y?(n=K(),n!==Y?(yt=t,r=We(r,n),t=r):(gt=t,t=Y)):(gt=t,t=Y),Ft--,t===Y&&(r=Y,0===Ft&&p(Qe)),t}function q(){var t,r;return Ft++,t=gt,"''"===e.substr(gt,2)?(r="''",gt+=2):(r=Y,0===Ft&&p(et)),r!==Y&&(yt=t,r=tt()),t=r,Ft--,t===Y&&(r=Y,0===Ft&&p(Ye)),t}function J(){var t,r,n,u,o,a;if(t=gt,39===e.charCodeAt(gt)?(r="'",gt++):(r=Y,0===Ft&&p(Ce)),r!==Y)if(rt.test(e.charAt(gt))?(n=e.charAt(gt),gt++):(n=Y,0===Ft&&p(nt)),n!==Y){for(u=gt,o=[],"''"===e.substr(gt,2)?(a="''",gt+=2):(a=Y,0===Ft&&p(et)),a===Y&&(Oe.test(e.charAt(gt))?(a=e.charAt(gt),gt++):(a=Y,0===Ft&&p(_e)));a!==Y;)o.push(a),"''"===e.substr(gt,2)?(a="''",gt+=2):(a=Y,0===Ft&&p(et)),a===Y&&(Oe.test(e.charAt(gt))?(a=e.charAt(gt),gt++):(a=Y,0===Ft&&p(_e)));u=o!==Y?e.substring(u,gt):o,u!==Y?(39===e.charCodeAt(gt)?(o="'",gt++):(o=Y,0===Ft&&p(Ce)),o!==Y?(yt=t,r=ut(n,u),t=r):(gt=t,t=Y)):(gt=t,t=Y)}else gt=t,t=Y;else gt=t,t=Y;return t}function X(){var t,r;return t=gt,ot.test(e.charAt(gt))?(r=e.charAt(gt),gt++):(r=Y,0===Ft&&p(at)),t=r!==Y?e.substring(t,gt):r}function G(){var t,r;return Ft++,t=gt,r=K(),r===Y&&(r=Q()),t=r!==Y?e.substring(t,gt):r,Ft--,t===Y&&(r=Y,0===Ft&&p(it)),t}function K(){var t,r,n,u,o;if(Ft++,t=gt,48===e.charCodeAt(gt)?(r="0",gt++):(r=Y,0===Ft&&p(st)),r!==Y&&(yt=t,r=ft()),t=r,t===Y){if(t=gt,r=gt,lt.test(e.charAt(gt))?(n=e.charAt(gt),gt++):(n=Y,0===Ft&&p(pt)),n!==Y){for(u=[],ht.test(e.charAt(gt))?(o=e.charAt(gt),gt++):(o=Y,0===Ft&&p(mt));o!==Y;)u.push(o),ht.test(e.charAt(gt))?(o=e.charAt(gt),gt++):(o=Y,0===Ft&&p(mt));u!==Y?(n=[n,u],r=n):(gt=r,r=Y)}else gt=r,r=Y;r!==Y&&(yt=t,r=vt(r)),t=r}return Ft--,t===Y&&(r=Y,0===Ft&&p(ct)),t}function Q(){var t,r,n,u,o;if(Ft++,t=gt,r=[],n=gt,u=gt,Ft++,o=z(),o===Y&&(o=H()),Ft--,o===Y?u=void 0:(gt=u,u=Y),u!==Y?(e.length>gt?(o=e.charAt(gt),gt++):(o=Y,0===Ft&&p(le)),o!==Y?(u=[u,o],n=u):(gt=n,n=Y)):(gt=n,n=Y),n!==Y)for(;n!==Y;)r.push(n),n=gt,u=gt,Ft++,o=z(),o===Y&&(o=H()),Ft--,o===Y?u=void 0:(gt=u,u=Y),u!==Y?(e.length>gt?(o=e.charAt(gt),gt++):(o=Y,0===Ft&&p(le)),o!==Y?(u=[u,o],n=u):(gt=n,n=Y)):(gt=n,n=Y);else r=Y;return t=r!==Y?e.substring(t,gt):r,Ft--,t===Y&&(r=Y,0===Ft&&p(dt)),t}function V(){return t&&t.captureLocation?{location:n()}:{}}t=void 0!==t?t:{};var W,Y={},ee={start:v},te=v,re=function(e){return e.join("")},ne=function(e){return j({type:C.literal,value:e},V())},ue=s("argumentElement"),oe=o("{",!1),ae=o("}",!1),ie=function(e){return j({type:C.argument,value:e},V())},ce=s("numberSkeletonId"),se=/^['\/{}]/,fe=a(["'","/","{","}"],!1,!1),le=i(),pe=s("numberSkeletonTokenOption"),he=o("/",!1),me=function(e){return e},ve=s("numberSkeletonToken"),de=function(e,t){return{stem:e,options:t}},ge=function(e){return j({type:0,tokens:e},V())},ye=o("::",!1),be=function(e){return e},Ae=function(e){return e.replace(/\s*$/,"")},we=o(",",!1),Fe=o("number",!1),xe=function(e,t,r){return j({type:"number"===t?C.number:"date"===t?C.date:C.time,style:r&&r[2],value:e},V())},Ce=o("'",!1),Oe=/^[^']/,_e=a(["'"],!0,!1),je=/^[^a-zA-Z'{}]/,Te=a([["a","z"],["A","Z"],"'","{","}"],!0,!1),Ee=/^[a-zA-Z]/,ke=a([["a","z"],["A","Z"]],!1,!1),Me=function(e){return j({type:1,pattern:e},V())},De=o("date",!1),Ie=o("time",!1),Pe=o("plural",!1),Ne=o("selectordinal",!1),Le=o("offset:",!1),Re=function(e,t,o,a){return j({type:C.plural,pluralType:"plural"===t?"cardinal":"ordinal",value:e,offset:o?o[2]:0,options:a.reduce(function(e,t){var o=t.id,a=t.value,i=t.location;return o in e&&u('Duplicate option "'+o+'" in plural element: "'+r()+'"',n()),e[o]={value:a,location:i},e},{})},V())},Se=o("select",!1),Be=function(e,t){return j({type:C.select,value:e,options:t.reduce(function(e,t){var o=t.id,a=t.value,i=t.location;return o in e&&u('Duplicate option "'+o+'" in select element: "'+r()+'"',n()),e[o]={value:a,location:i},e},{})},V())},Ze=o("=",!1),ze=function(e,t){return j({id:e,value:t},V())},He=function(e,t){return j({id:e,value:t},V())},Ue=s("whitespace pattern"),$e=/^[\t-\r \x85\u200E\u200F\u2028\u2029]/,qe=a([["\t","\r"]," ","","‎","‏","\u2028","\u2029"],!1,!1),Je=s("syntax pattern"),Xe=/^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,Ge=a([["!","/"],[":","@"],["[","^"],"`",["{","~"],["¡","§"],"©","«","¬","®","°","±","¶","»","¿","×","÷",["‐","‧"],["‰","‾"],["⁁","⁓"],["⁕","⁞"],["←","⑟"],["─","❵"],["➔","⯿"],["⸀","⹿"],["、","〃"],["〈","〠"],"〰","﴾","﴿","﹅","﹆"],!1,!1),Ke=s("optional whitespace"),Qe=s("number"),Ve=o("-",!1),We=function(e,t){return t?e?-t:t:0},Ye=s("double apostrophes"),et=o("''",!1),tt=function(){return"'"},rt=/^[{}]/,nt=a(["{","}"],!1,!1),ut=function(e,t){return e+t.replace("''","'")},ot=/^[^{}]/,at=a(["{","}"],!0,!1),it=s("argNameOrNumber"),ct=s("argNumber"),st=o("0",!1),ft=function(){return 0},lt=/^[1-9]/,pt=a([["1","9"]],!1,!1),ht=/^[0-9]/,mt=a([["0","9"]],!1,!1),vt=function(e){return parseInt(e.join(""),10)},dt=s("argName"),gt=0,yt=0,bt=[{line:1,column:1}],At=0,wt=[],Ft=0;if(void 0!==t.startRule){if(!(t.startRule in ee))throw new Error("Can't start parsing from rule \""+t.startRule+'".');te=ee[t.startRule]}if(W=te(),W!==Y&&gt===e.length)return W;throw W!==Y&&gt<e.length&&p(c()),m(wt,At<e.length?e.charAt(At):null,At<e.length?l(At,At+1):l(At,At))}function s(e){e.forEach(function(e){(i(e)||a(e))&&Object.keys(e.options).forEach(function(r){for(var n,u=e.options[r],o=-1,a=void 0,i=0;i<u.value.length;i++){var c=u.value[i];if(t(c)&&M.test(c.value)){o=i,a=c;break}}if(a){var f=a.value.replace(M,"$1{"+e.value+", number}"),l=E(f);(n=u.value).splice.apply(n,k([o,1],l))}s(u.value)})})}function f(e,t){var r=E(e,t);return t&&t.normalizeHashtagInPlural===!1||s(r),r}function l(e){return JSON.stringify(e.map(function(e){return e&&"object"==typeof e?p(e):e}))}function p(e){return Object.keys(e).sort().map(function(t){var r;return r={},r[t]=e[t],r})}function h(e){return e.length<2?e:e.reduce(function(e,t){var r=e[e.length-1];return r&&0===r.type&&0===t.type?r.value+=t.value:e.push(t),e},[])}function m(e,c,s,f,l,p){if(1===e.length&&t(e[0]))return[{type:0,value:e[0].value.replace(/\\#/g,"#")}];for(var v=[],d=0,g=e;d<g.length;d++){var y=g[d];if(t(y))v.push({type:0,value:y.value.replace(/\\#/g,"#")});else{var b=y.value;if(!(l&&b in l))throw new N('The intl string context variable "'+b+'" was not provided to the string "'+p+'"');var A=l[b];if(r(y))A&&"string"!=typeof A&&"number"!=typeof A||(A="string"==typeof A||"number"==typeof A?String(A):""),v.push({type:1,value:A});else if(u(y)){var w="string"==typeof y.style?f.date[y.style]:void 0;v.push({type:0,value:s.getDateTimeFormat(c,w).format(A)})}else if(o(y)){var w="string"==typeof y.style?f.time[y.style]:void 0;v.push({type:0,value:s.getDateTimeFormat(c,w).format(A)})}else if(n(y)){var w="string"==typeof y.style?f.number[y.style]:void 0;v.push({type:0,value:s.getNumberFormat(c,w).format(A)})}else if(a(y)){var F=y.options[A]||y.options.other;if(!F)throw new RangeError('Invalid values for "'+y.value+'": "'+A+'". Options are "'+Object.keys(y.options).join('", "')+'"');v.push.apply(v,m(F.value,c,s,f,l))}else if(i(y)){var F=y.options["="+A];if(!F){var x=s.getPluralRules(c,{type:y.pluralType}).select(A-(y.offset||0));F=y.options[x]||y.options.other}if(!F)throw new RangeError('Invalid values for "'+y.value+'": "'+A+'". Options are "'+Object.keys(y.options).join('", "')+'"');v.push.apply(v,m(F.value,c,s,f,l))}else;}}return h(v)}function v(e,t,r,n,u,o){var a=m(e,t,r,n,u,o);return 1===a.length?a[0].value:a.reduce(function(e,t){return e+=t.value},"")}function d(){return Date.now()+"_"+ ++L}function g(e,t){return e.split(/@@(.*?)@@/g).filter(Boolean).map(function(e){return null!=t[e]?t[e]:e}).reduce(function(e,t){return e.length&&"string"==typeof t&&"string"==typeof e[e.length-1]?e[e.length-1]+=t:e.push(t),e},[])}function y(e,t,r,n,u,o){var a=m(e,t,r,n,u,o),i={},c=a.reduce(function(e,t){if(0===t.type)return e+=t.value;var r=d();return i[r]=t.value,e+="@@"+r+"@@"},"");if(!R.test(c))return g(c,i);if(!u)throw new N("Message has placeholders but no values was given");if("undefined"==typeof DOMParser)throw new N("Cannot format XML message without DOMParser");O||(O=new DOMParser);var s=O.parseFromString('<formatted-message id="'+S+'">'+c+"</formatted-message>","text/html").getElementById(S);if(!s)throw new N("Malformed HTML message "+c);var f=Object.keys(u).filter(function(e){return!!s.getElementsByTagName(e).length});if(!f.length)return g(c,i);var l=f.filter(function(e){return e!==e.toLowerCase()});if(l.length)throw new N("HTML tag must be lowercased but the following tags are not: "+l.join(", "));return Array.prototype.slice.call(s.childNodes).reduce(function(e,t){var r=t.tagName,n=t.outerHTML,o=t.textContent;if(!r){var a=g(o||"",i);return e.concat(a)}if(r=r.toLowerCase(),~B.indexOf(r))throw new N(r+" is a self-closing tag and can not be used, please use another tag name.");if(!u[r]){var a=g(n,i);return 1===a.length?e.concat([a[0]]):e.concat(a)}var c=u[r];if("function"==typeof c){if(null==o)return e.concat([c(o||void 0)]);var a=g(o,i);return e.concat([c.apply(void 0,a)])}return e.concat([c])},[])}function b(e){"string"==typeof e&&(e=[e]);try{return Intl.NumberFormat.supportedLocalesOf(e,{localeMatcher:"best fit"})[0]}catch(e){return z.defaultLocale}}function A(e,c,s,f){e.filter(function(e){return!r(e)&&!t(e)}).forEach(function(e){if(u(e)){var t="string"==typeof e.style?f.date[e.style]:void 0;s.getDateTimeFormat(c,t)}if(o(e)){var t="string"==typeof e.style?f.time[e.style]:void 0;s.getDateTimeFormat(c,t)}if(n(e)){var t="string"==typeof e.style?f.number[e.style]:void 0;s.getNumberFormat(c,t)}a(e)&&Object.keys(e.options).forEach(function(t){return A(e.options[t].value,c,s,f)}),i(e)&&(s.getPluralRules(c,{type:e.pluralType}),Object.keys(e.options).forEach(function(t){return A(e.options[t].value,c,s,f)}))})}function w(e,t){return t?Z(Z(Z({},e||{}),t||{}),Object.keys(e).reduce(function(r,n){return r[n]=Z(Z({},e[n]),t[n]||{}),r},{})):e}function F(e,t){return t?Object.keys(e).reduce(function(r,n){return r[n]=w(e[n],t[n]),r},Z({},e)):e}function x(e){return void 0===e&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:I(Intl.NumberFormat,e.number),getDateTimeFormat:I(Intl.DateTimeFormat,e.dateTime),getPluralRules:I(Intl.PluralRules,e.pluralRules)}}var C;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural"})(C||(C={}));var O,_=(function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}})(),j=function(){return j=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u])}return e},j.apply(this,arguments)},T=(function(e){function t(r,n,u,o){var a=e.call(this)||this;return a.message=r,a.expected=n,a.found=u,a.location=o,a.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(a,t),a}return _(t,e),t.buildMessage=function(e,t){function r(e){return e.charCodeAt(0).toString(16).toUpperCase()}function n(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(e){return"\\x0"+r(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return"\\x"+r(e)})}function u(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(e){return"\\x0"+r(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return"\\x"+r(e)})}function o(e){switch(e.type){case"literal":return'"'+n(e.text)+'"';case"class":var t=e.parts.map(function(e){return Array.isArray(e)?u(e[0])+"-"+u(e[1]):u(e)});return"["+(e.inverted?"^":"")+t+"]";case"any":return"any character";case"end":return"end of input";case"other":return e.description}}function a(e){var t,r,n=e.map(o);if(n.sort(),n.length>0){for(t=1,r=1;t<n.length;t++)n[t-1]!==n[t]&&(n[r]=n[t],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}function i(e){return e?'"'+n(e)+'"':"end of input"}return"Expected "+a(e)+" but "+i(t)+" found."},t})(Error),E=c,k=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),u=0,t=0;t<r;t++)for(var o=arguments[t],a=0,i=o.length;a<i;a++,u++)n[u]=o[a];return n},M=/(^|[^\\])#/g,D=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),u=0,t=0;t<r;t++)for(var o=arguments[t],a=0,i=o.length;a<i;a++,u++)n[u]=o[a];return n},I=function(e,t){return void 0===t&&(t={}),function(){for(var r,n=[],u=0;u<arguments.length;u++)n[u]=arguments[u];var o=l(n),a=o&&t[o];return a||(a=new((r=e).bind.apply(r,D([void 0],n))),o&&(t[o]=a)),a}},P=(function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}})(),N=(function(e){function t(t,r){var n=e.call(this,t)||this;return n.variableId=r,n}return P(t,e),t})(Error),L=0,R=/(<([0-9a-zA-Z-_]*?)>(.*?)<\/([0-9a-zA-Z-_]*?)>)|(<[0-9a-zA-Z-_]*?\/>)/,S=Date.now()+"@@",B=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],Z=function(){return Z=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u])}return e},Z.apply(this,arguments)},z=(function(){function e(t,r,n,u){var o=this;if(void 0===r&&(r=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(e){return v(o.ast,o.locale,o.formatters,o.formats,e,o.message)},this.formatToParts=function(e){return m(o.ast,o.locale,o.formatters,o.formats,e,o.message)},this.formatHTMLMessage=function(e){return y(o.ast,o.locale,o.formatters,o.formats,e,o.message)},this.resolvedOptions=function(){return{locale:o.locale}},this.getAst=function(){return o.ast},"string"==typeof t){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");this.ast=e.__parse(t)}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=F(e.formats,n),this.locale=b(r||[]),this.formatters=u&&u.formatters||x(this.formatterCache),A(this.ast,this.locale,this.formatters,this.formats)}return e.defaultLocale="en",e.__parse=f,e.formats={number:{currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e})();e.IntlMessageFormat=z,e.createDefaultFormatters=x,e.default=z,e.formatHTMLMessage=y,e.formatToParts=m,e.formatToString=v,Object.defineProperty(e,"__esModule",{value:!0})}),define("modules/clean/i18n/formatters",["require","exports","tslib","intl-messageformat","modules/clean/uuid"],function(e,t,r,n,u){"use strict";function o(){return u.UUID.v4({allowInsecure:!0})}function a(e,t){var r=Array.isArray(e)?e.slice():[e];if(r.sort(),!t)return r.join("|");var n=Object.keys(t);return n.sort(),n.reduce(function(e,r){return e+"|"+r+"="+t[r]},r.join("|"))}function i(e,t){return function(r,n){var u=a(e,n);return t[u]||(t[u]=new Intl.NumberFormat(e,n)),t[u].format(r)}}function c(e,t){return function(r,n){var u=a(e,n);return t[u]||(t[u]=new Intl.DateTimeFormat(e,n)),t[u].format(r)}}function s(e){return e.replace(/%\((.*?)\)s/g,"{$1}")}function f(e,t){var r={},n={};t&&(r=Object.keys(t).reduce(function(e,r){var u=t[r];if("object"==typeof u){var a=o();n[a]=u,e[r]=d+a+d}else e[r]=u;return e},{}));var u=e(r),a=Object.keys(n);return t&&a.length?u.split(d).filter(Boolean).map(function(e){return e in n?n[e]:e}):u}function l(e,t,r){return void 0===r&&(r={}),function(u,o){var a,i=u.id,c=u.defaultMessage;return i?(a=r[i],a||(a=new n.default(t[i]||c,e)),r[i]=a):a=new n.default(c,e),f(function(e){return a.format(e)},o)}}function p(e,t,r){void 0===r&&(r={});var n=Object.keys(t).reduce(function(e,r){var n=t[r];return"object"==typeof n?(e[r+"-one"]=s(n.message(1)),e[r+"-other"]=s(n.message(2))):e[r]=s(n),e},{}),u=l(e,n,r);return function(e,r){var n=e.id,o=e.defaultMessage;if(n){var a=t[n];if("object"==typeof a&&r){return u({id:r[a.token]>1?n+"-other":n+"-one",defaultMessage:o},r)}}return r?u(e,r):u(e)}}function h(){return{messageFormat:{},numberFormat:{},dateTimeFormat:{}}}function m(e){function t(e){return(e||"en").replace(/_/gi,"-")}return Array.isArray(e)?e.map(t):t(e)}function v(e,t,r){return e=m(e),{formatMessage:p(e,t,r.messageFormat),formatNumber:i(e,r.numberFormat),formatDateTime:c(e,r.dateTimeFormat)}}Object.defineProperty(t,"__esModule",{value:!0}),n=r.__importDefault(n);var d="@__"+o()+"__@";t.createI18nCache=h,t.createFormatters=v,t.dummyI18nFormatters=v("en",{},h())});
//# sourceMappingURL=pkg-icu-formatters.min.js-vflYeB8-E.map