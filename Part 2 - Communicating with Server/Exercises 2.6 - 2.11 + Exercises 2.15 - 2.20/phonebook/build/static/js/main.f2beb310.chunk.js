(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{43:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var a=t(18),c=t.n(a),u=t(19),s=t(3),r=t(1),o=t(0),i=function(e){return Object(o.jsx)("input",{value:e.value,onChange:e.onChange})},d=function(e){return Object(o.jsxs)("div",{children:[e.text,": ",Object(o.jsx)("input",{value:e.value,onChange:e.onChange})]})},j=function(e){var n=e.onSubmit,t=e.values,a=e.onChanges;return Object(o.jsxs)("form",{onSubmit:n,children:[Object(o.jsx)(d,{value:t.nameInput,onChange:a.nameOnChange,text:"name"}),Object(o.jsx)(d,{value:t.numInput,onChange:a.numOnChange,text:"number"}),Object(o.jsx)("button",{type:"submit",children:"Add"})]})},l=function(e){return Object(o.jsx)("div",{children:e.persons.map((function(n){return Object(o.jsxs)("div",{children:[n.name," ",n.number," ",Object(o.jsx)("button",{onClick:function(){return e.deleteHandler(n.id)},children:"Delete"})]},n.id)}))})},m=function(e){return"rejected"===e.message.status?Object(o.jsx)("div",{className:"rejected",children:e.message.message}):"resolved"===e.message.status?Object(o.jsx)("div",{className:"resolved",children:e.message.message}):Object(o.jsx)("div",{})},b=t(5),f=t.n(b),h="/api/persons",O={getAll:function(){return f.a.get(h)},create:function(e){return f.a.post(h,e)},remove:function(e){return f.a.delete("".concat(h,"/").concat(e))},update:function(e,n){return f.a.put("".concat(h,"/").concat(e),n)}},v=(t(43),function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""),d=Object(s.a)(c,2),b=d[0],f=d[1],h=Object(r.useState)(""),v=Object(s.a)(h,2),g=v[0],p=v[1],x=Object(r.useState)(""),C=Object(s.a)(x,2),w=C[0],S=C[1],k=Object(r.useState)({message:"",status:""}),I=Object(s.a)(k,2),N=I[0],y=I[1];Object(r.useEffect)((function(){O.getAll().then((function(e){a(e.data)}))}),[]);var A=function(){setTimeout((function(){y({status:"",message:""})}),5e3)},D=""===w?t:t.filter((function(e){return e.name.toLowerCase().includes(w)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Filter"}),Object(o.jsx)(i,{value:w,onChange:function(e){S(e.target.value)}}),Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(m,{message:N}),Object(o.jsx)(j,{onSubmit:function(e){e.preventDefault();var n={name:b,number:g};if(t.some((function(e){return e.name===b}))){var c=t.find((function(e){return e.name===b}));window.confirm("".concat(c.name," has already been added to the list. Update number?"))&&O.update(c.id,n).then((function(e){a(t.map((function(n){return n.id!==c.id?n:e.data}))),y({status:"resolved",message:"".concat(c.name," updated")}),A(),f(""),p("")}))}else isNaN(g.replace(/-/g,""))||""===g?window.alert("".concat(g," is not a valid telephone number")):O.create(n).then((function(e){a([].concat(Object(u.a)(t),[e.data])),y({status:"resolved",message:"".concat(e.data.name," added")}),A(),f(""),p("")}))},values:{nameInput:b,numInput:g},onChanges:{nameOnChange:function(e){f(e.target.value)},numOnChange:function(e){p(e.target.value)}}}),Object(o.jsx)("h2",{children:"Numbers"}),Object(o.jsx)(l,{persons:D,deleteHandler:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&(O.remove(e).catch((function(c){y({status:"rejected",message:"".concat(n.name," has already been deleted")}),A(),a(t.filter((function(n){return e!==n.id})))})),a(t.filter((function(n){return e!==n.id}))))}})]})});c.a.render(Object(o.jsx)(v,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.f2beb310.chunk.js.map