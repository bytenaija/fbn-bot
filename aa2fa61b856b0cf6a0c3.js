webpackJsonp([145],{790:function(e,r,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function t(e,r){var n=Number(e),a=r||{},t=a.type?String(a.type):"long";return"uppercase"===t?n/12>=1?p.uppercase[1]:p.uppercase[0]:"lowercase"===t?n/12>=1?p.lowercase[1]:p.lowercase[0]:n<=12?p.long[0]:n<=16?p.long[1]:p.long[2]}function u(e){return 1===e?"1er":e+"e"}function o(e){return 1===e?"1re":e+"e"}function l(e,r){var n=Number(e),a=r||{},t=a.unit?String(a.unit):null;return"isoWeek"===t||"week"===t?o(n):u(n)}Object.defineProperty(r,"__esModule",{value:!0});var i=n(198),d=a(i),s=n(197),m=a(s),c={narrow:["di","lu","ma","me","je","ve","sa"],short:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],long:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},f={short:["janv.","févr.","mars","avr.","mai","juin","juill.","août","sept.","oct.","nov.","déc."],long:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},p={uppercase:["AM","PM"],lowercase:["am","pm"],long:["du matin","de l’après-midi","du soir"]},v={ordinalNumber:l,weekday:(0,d.default)(c,"long"),weekdays:(0,m.default)(c,"long"),month:(0,d.default)(f,"long"),months:(0,m.default)(f,"long"),timeOfDay:t,timesOfDay:(0,m.default)(p,"long")};r.default=v,e.exports=r.default}});
//# sourceMappingURL=aa2fa61b856b0cf6a0c3.js.map