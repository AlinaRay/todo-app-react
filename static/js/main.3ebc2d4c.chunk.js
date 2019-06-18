(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),l=(n(15),n(6)),i=n(1),s=n(2),u=n(4),d=n(3),m=n(5),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).onChange=function(e){n.setState({text:e.target.value})},n.onSubmit=function(e){e.preventDefault(),console.log(n.state.text),n.props.addItem(n.state.text),n.setState({text:""})},n.state={text:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"Todo app"),o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{className:"new-todo",onChange:this.onChange,value:this.state.text,type:"text",placeholder:"What needs to be done?"})))}}]),t}(o.a.Component),h=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("li",{key:this.props.id},o.a.createElement("div",{className:"view"},o.a.createElement("input",{className:"toggle",type:"checkbox",onChange:function(){return e.props.onChecked(e.props.id)},checked:this.props.done}),o.a.createElement("label",null,this.props.text),o.a.createElement("button",{className:"destroy",onClick:function(){return e.props.deleteItem(e.props.id)}})),o.a.createElement("input",{className:"edit"}))}}]),t}(o.a.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items.map(function(t){return o.a.createElement(h,{key:t.id,done:t.done,id:t.id,text:t.text,deleteItem:e.props.onDeleted,onChecked:e.props.onChecked})});return o.a.createElement("main",{className:"main"},o.a.createElement("input",{id:"toggle-all",className:"toggle-all",type:"checkbox",onClick:function(){return e.props.checkAll()}}),o.a.createElement("label",{htmlFor:"toggle-all"}),o.a.createElement("ul",{className:"todo-list"},t))}}]),t}(o.a.Component),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.onFilterChange,n=0,a=this.buttons.map(function(e){var a=e.name,r=e.label;return o.a.createElement("li",{key:++n},o.a.createElement("a",{href:"#/".concat(a),key:a,onClick:function(){return t(a)}},r))});return o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},o.a.createElement("strong",null,this.props.size),o.a.createElement("span",null,"\xa0"),o.a.createElement("span",null,"items\xa0"),o.a.createElement("span",null,"left")),o.a.createElement("ul",{className:"filters"},a),o.a.createElement("button",{className:"clear-completed",onClick:function(){return e.props.deleteAll()}},"Clear completed"))}}]),t}(o.a.Component),E=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).flag=!0,e.counter=1,e.addItem=function(t){""!==t&&e.setState(function(n){var a=n.todoData;return console.log(a),{todoData:[].concat(Object(l.a)(a),[e.createTodoItem(t)])}})},e.findElement=function(e,t){return e.findIndex(function(e){return e.id===t})},e.onChecked=function(t){e.setState(function(n){var a=n.todoData,o=Object(l.a)(a),r=o[e.findElement(o,t)];return r.done=!r.done,{todoData:o}})},e.checkAll=function(){e.setState(function(t){var n=t.todoData,a=Object(l.a)(n);return a.forEach(function(t){t.done=e.flag}),e.flag=!e.flag,{todoData:a}})},e.deleteAll=function(){e.setState(function(e){return{todoData:e.todoData.filter(function(e){return!e.done})}})},e.deleteItem=function(t){console.log("APP on delete {}",t),e.setState(function(n){var a=n.todoData,o=e.findElement(a,t);return{todoData:[].concat(Object(l.a)(a.slice(0,o)),Object(l.a)(a.slice(o+1)))}})},e.showActive=function(){return e.state.todoData.filter(function(e){return!e.done}).length},e.filter=function(e,t){switch(t){case"active":return e.filter(function(e){return!e.done});case"done":return e.filter(function(e){return e.done});default:return e}},e.onFilterChange=function(t){e.setState({filter:t})},e.state={todoData:[],filter:"all"},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"createTodoItem",value:function(e){return{text:e,done:!1,id:this.counter++}}},{key:"render",value:function(){var e=this,t=this.state.filter,n=this.filter(this.state.todoData,t);return o.a.createElement("div",{className:"todoapp"},o.a.createElement(f,{addItem:function(t){return e.addItem(t)}}),o.a.createElement(p,{items:n,onDeleted:function(t){return e.deleteItem(t)},onChecked:function(t){return e.onChecked(t)},checkAll:this.checkAll}),o.a.createElement(b,{filter:t,onFilterChange:this.onFilterChange,deleteAll:this.deleteAll,size:this.showActive()}))}}]),t}(o.a.Component);c.a.render(o.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.3ebc2d4c.chunk.js.map