(this["webpackJsonpplot-management-system"]=this["webpackJsonpplot-management-system"]||[]).push([[0],{13:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(19),r=c.n(s),a=(c(13),c(7)),d=c.n(a),i=c(10),j=c(11),l=c(0),o=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];function r(){return(r=Object(i.a)(d.a.mark((function e(){var t,c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),n=c.statewise,s(n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("table",{children:[Object(l.jsxs)("tr",{className:"textCSS",children:[Object(l.jsx)("th",{children:"state"}),Object(l.jsx)("th",{children:"active"}),Object(l.jsx)("th",{children:"confirmed"}),Object(l.jsx)("th",{children:"deaths"}),Object(l.jsx)("th",{children:"recovered"}),Object(l.jsx)("th",{children:"statenotes"}),Object(l.jsx)("th",{children:"lastupdatedtime"})]}),c.map((function(e,t){if(0!==t)return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.state}),Object(l.jsx)("td",{children:e.active}),Object(l.jsx)("td",{children:e.confirmed}),Object(l.jsx)("td",{children:e.deaths}),Object(l.jsx)("td",{children:e.recovered}),Object(l.jsx)("td",{children:e.statenotes}),Object(l.jsx)("td",{children:e.lastupdatedtime})]})}))]})})},h=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];function r(){return(r=Object(i.a)(d.a.mark((function e(){var t,c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n=c.tested,console.log(n[1]),s(n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("table",{children:[Object(l.jsxs)("tr",{className:"textCSS",children:[Object(l.jsx)("th",{children:"testedasof"}),Object(l.jsx)("th",{children:"totaldosesadministered"}),Object(l.jsx)("th",{children:"totalindividualsvaccinated"}),Object(l.jsx)("th",{children:"totalsamplestested"}),Object(l.jsx)("th",{children:"updatetimestamp"})]}),c.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.testedasof}),Object(l.jsx)("td",{children:e.totaldosesadministered}),Object(l.jsx)("td",{children:e.totalindividualsvaccinated}),Object(l.jsx)("td",{children:e.totalsamplestested}),Object(l.jsx)("td",{children:e.updatetimestamp})]})}))]})})},b=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];function r(){return(r=Object(i.a)(d.a.mark((function e(){var t,c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n=c.cases_time_series,s(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("table",{children:[Object(l.jsxs)("tr",{className:"textCSS",children:[Object(l.jsx)("th",{children:"date"}),Object(l.jsx)("th",{children:"dailyconfirmed"}),Object(l.jsx)("th",{children:"dailydeceased"}),Object(l.jsx)("th",{children:"dailyrecovered"}),Object(l.jsx)("th",{children:"totalconfirmed"}),Object(l.jsx)("th",{children:"totaldeceased"}),Object(l.jsx)("th",{children:"totalrecovered"})]}),c.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.dateymd}),Object(l.jsx)("td",{children:e.dailyconfirmed}),Object(l.jsx)("td",{children:e.dailydeceased}),Object(l.jsx)("td",{children:e.dailyrecovered}),Object(l.jsx)("td",{children:e.totalconfirmed}),Object(l.jsx)("td",{children:e.totaldeceased}),Object(l.jsx)("td",{children:e.totalrecovered})]})}))]})})},x=c(2),O=c(8),u=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{style:{textAlign:"center"},children:[Object(l.jsx)(O.b,{to:"/TotalConfirmedCases",children:" TotalConfirmedCases "}),Object(l.jsx)("br",{}),Object(l.jsx)(O.b,{to:"/TotalVaccinated",children:" TotalVaccinated "}),Object(l.jsx)("br",{}),Object(l.jsx)(O.b,{to:"/CasesTimeSeries",children:" CasesTimeSeries "})]})})};var m=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"backgroundColor",children:Object(l.jsx)("h1",{children:" Corona Virus Cases in India"})}),Object(l.jsxs)(x.c,{children:[Object(l.jsx)(x.a,{exact:!0,path:"/",component:u,style:{text:"center"}}),Object(l.jsx)(x.a,{exact:!0,path:"/TotalConfirmedCases",component:o}),Object(l.jsx)(x.a,{exact:!0,path:"/TotalVaccinated",component:h}),Object(l.jsx)(x.a,{exact:!0,path:"/CasesTimeSeries",component:b})]}),Object(l.jsx)("div",{className:"backgroundColor",style:{marginBottom:"0px"},children:Object(l.jsx)("h1",{children:" Stay Safe "})})]})};r.a.render(Object(l.jsx)(O.a,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.5082cead.chunk.js.map