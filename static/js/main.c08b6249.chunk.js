(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(5),l=n.n(c),i=(n(4),n(3)),o=n(6),r=n(7),d=n(9),h=n(8),j=(n(14),n(0)),u=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("li",{className:"shadow p-2 my-2 col-sm-9",children:e.value}),Object(j.jsx)("button",{className:"btn btn-danger  my-2 col-sm-2 offset-1",onClick:function(){return e.sendData(e.id)},children:"delet"})]})},b=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={items:[],text:""},e.handleChange=function(t){e.setState({text:t.target.value})},e.handleAdd=function(t){if(""!==e.state.text){var n=[].concat(Object(i.a)(e.state.items),[e.state.text]);e.setState({items:n,text:""})}},e.handleDelete=function(t){console.log("Delete",t);var n=Object(i.a)(e.state.items);console.log("olditems",n);var a=n.filter((function(e,n){return n!==t}));e.setState({items:a})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"container-fluid my-5",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-6 mx-auto text-white shadow-lg p-3",children:[Object(j.jsx)("h2",{className:"text-center",children:" Today's Plan "}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-9",children:Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Write plan here",value:this.state.text,onChange:this.handleChange})}),Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)("button",{className:"btn btn-warning px-5 font-weight-bold",onClick:this.handleAdd,children:"Add"})}),Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)("ul",{class:"list-unstyled row m-5",children:this.state.items.map((function(t,n){return Object(j.jsx)(u,{id:n,value:t,sendData:e.handleDelete},n)}))})})]})]})})})}}]),n}(a.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),s(e),c(e),l(e)}))};l.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),m()},4:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.c08b6249.chunk.js.map