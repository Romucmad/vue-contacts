(function(t){function e(e){for(var a,c,r=e[0],s=e[1],d=e[2],l=0,m=[];l<r.length;l++)c=r[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&m.push(o[c][0]),o[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},i=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},1946:function(t,e,n){"use strict";var a=n("aaee"),o=n.n(a);o.a},3211:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c={name:"App"},r=c,s=(n("034f"),n("2877")),d=Object(s["a"])(r,o,i,!1,null,null,null),u=d.exports,l=n("2f62"),m=(n("7db0"),n("c740"),n("d81d"),n("a434"),n("b0c0"),n("2909")),f=(n("96cf"),n("1da1")),v={contacts:[{id:1,name:"Roman Hrybinchuk",info:[{name:"Email",value:"example@gmail.com",id:1},{name:"Phone",value:"+386666666",id:2},{name:"Country",value:"Poland",id:2},{name:"City",value:"Warsaw",id:3}]},{id:2,name:"Donald Trump",info:[{name:"Email",value:"example@gmail.com",id:1},{name:"Phone",value:"1111111",id:2},{name:"Country",value:"USA",id:2},{name:"City",value:"New York",id:3}]}],backUp:[]},p={allContacts:function(t){return t.contacts},getContactById:function(t){return function(e){return t.contacts.find((function(t){return t.id===e}))}}},h={addContact:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=t.commit,a("addContact",e);case 2:case"end":return n.stop()}}),n)})))()},deleteContact:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=t.commit,a("deleteContact",e);case 2:case"end":return n.stop()}}),n)})))()},addInfo:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=t.commit,a("addInfo",e);case 2:case"end":return n.stop()}}),n)})))()},removeInfo:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=t.commit,a("removeInfo",e);case 2:case"end":return n.stop()}}),n)})))()},updateInfo:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=t.commit,a("updateInfo",e);case 2:case"end":return n.stop()}}),n)})))()},revert:function(t){return Object(f["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,n("revert");case 2:case"end":return e.stop()}}),e)})))()}},b={addContact:function(t,e){var n=0;return t.contacts.length>0&&(n=Math.max.apply(Math,Object(m["a"])(t.contacts.map((function(t){return t.id}))))),t.backUp=JSON.parse(JSON.stringify(t.contacts)),t.contacts.unshift({id:n+1,name:e,info:[]})},deleteContact:function(t,e){var n=t.contacts.findIndex((function(t){return t.id===e}));return t.backUp=JSON.parse(JSON.stringify(t.contacts)),t.contacts.splice(n,1)},addInfo:function(t,e){var n=e.id,a=e.name,o=e.value,i=t.contacts.findIndex((function(t){return t.id===n})),c=1;return t.contacts[i].info.length>0&&(c=Math.max.apply(Math,Object(m["a"])(t.contacts[i].info.map((function(t){return t.id}))))),t.backUp=JSON.parse(JSON.stringify(t.contacts)),t.contacts[i].info.unshift({id:c+1,name:a,value:o})},removeInfo:function(t,e){var n=e.contactId,a=e.infoId,o=t.contacts.findIndex((function(t){return t.id===n})),i=t.contacts[o].info.findIndex((function(t){return t.id===a}));return t.backUp=JSON.parse(JSON.stringify(t.contacts)),t.contacts[o].info.splice(i,1)},updateInfo:function(t,e){var n=e.contractId,a=e.infoId,o=e.name,i=e.value,c=t.contacts.findIndex((function(t){return t.id===n})),r=t.contacts[c].info.findIndex((function(t){return t.id===a}));return t.backUp=JSON.parse(JSON.stringify(t.contacts)),t.contacts[c].info[r]={id:t.contacts[c].info[r].id,name:o,value:i},t},revert:function(t){return 0!==t.backUp.length&&(t.contacts=Object(m["a"])(t.backUp)),t}},_={state:v,getters:p,actions:h,mutations:b};a["a"].use(l["a"]);var w=new l["a"].Store({modules:{contacts:_}}),C=(n("a9e3"),n("9129"),n("25eb"),n("8c4f")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},[t.modalConfirm?n("modal",{attrs:{title:"Deletion",message:"Do you want to delete record ?",name:t.currentDelete["currentDeleteName"]},on:{close:function(e){t.modalConfirm=!1},callback:t.removeContact}}):t._e(),n("div",{staticClass:"container"},[n("div",{staticClass:"row contact__add_create"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("input",{staticClass:"contact__input__submit",staticStyle:{float:"right"},attrs:{type:"submit",value:"Add"}}),n("div",{staticClass:"contact__input__name"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"Contact name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])])]),t._m(0),n("div",{staticClass:"row mt-2"},[n("ul",{staticClass:"contact_list"},t._l(t.allContacts,(function(e){return n("li",{key:e.id},[n("router-link",{staticClass:"contact__link",attrs:{to:"contacts/"+e.id}},[t._v(" "+t._s(e.name)+" ")]),n("button",{staticClass:"bad__btn",on:{click:function(n){return t.callModalConfirm(e.id)}}},[t._v(" Remove ")])],1)})),0)])])],1)},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"header_list"},[t._v("Contact list")])])}],y=n("5530"),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal"},[n("div",{staticClass:"screenFiller"},[n("div",{staticClass:"message"},[n("div",{staticClass:"inner"},[n("h3",[t._v(t._s(t.title))]),n("p",{staticClass:"mt-2"},[t._v(t._s(t.message))]),n("div",{staticClass:"name"},[n("p",{staticClass:"mt-2 name"},[t._v(t._s(t.name))])]),n("div",{staticClass:"mt-5 buttons"},[n("button",{staticClass:"yes",on:{click:t.callbackAndClose}},[t._v("YES")]),n("button",{staticClass:"no",on:{click:function(e){return t.$emit("close")}}},[t._v("NO")])])])])])])},M=[],k={name:"modal",props:{title:String,message:String,name:String},methods:{callbackAndClose:function(){this.$emit("callback"),this.$emit("close")}}},R=k,x=(n("1946"),Object(s["a"])(R,I,M,!1,null,"ee44d100",null)),N=x.exports,j={name:"contact",components:{Modal:N},data:function(){return{name:"",modalConfirm:!1,currentDelete:{currentDeleteName:"",idToDelete:0}}},methods:Object(y["a"])(Object(y["a"])({},Object(l["b"])(["addContact","deleteContact"])),{},{onSubmit:function(){this.name?this.addContact(this.name):alert("Field is empty"),this.name=""},callModalConfirm:function(t){var e=this.allContacts.find((function(e){return e.id==t})).name;this.currentDelete={currentDeleteName:e,idToDelete:t},this.modalConfirm=!0},removeContact:function(){this.deleteContact(this.currentDelete.idToDelete)}}),computed:Object(l["c"])(["allContacts"])},S=j,D=(n("fa5b"),Object(s["a"])(S,g,O,!1,null,"6c97555d",null)),P=D.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vieContact"},[t.contact?n("div",{staticClass:"container"},[t.deleteModal.modalOpened?n("modal",{attrs:{title:"Deletion",message:"Do you want to delete record ?",name:t.deleteModal.currentDeleteName},on:{close:function(e){t.deleteModal.modalOpened=!1},callback:t.deleteInfo}}):t._e(),t.revertConfirmModal?n("modal",{attrs:{title:"Editing",message:"Do you want to revert changes ?",name:""},on:{close:function(e){t.revertConfirmModal=!1},callback:t.revertEdit}}):t._e(),n("div",{staticClass:"row btn__back"},[n("button",{on:{click:function(e){return t.$router.back()}}},[n("font-awesome-icon",{attrs:{icon:"arrow-left"}}),t._v(" Back ")],1)]),n("div",{staticClass:"row header__name"},[n("h2",[t._v(t._s(t.contact.name))]),n("button",{staticClass:"action edit",staticStyle:{float:"right"},on:{click:t.revert}},[n("font-awesome-icon",{attrs:{icon:"undo"}}),t._v(" Undo ")],1)]),n("div",{staticClass:"row text-center"},[n("form",{staticClass:"w-100 mt-2",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("input",{staticClass:"contact__input__submit",attrs:{type:"submit",value:"Add"}}),n("div",{staticClass:"contact__input__name"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"contact__input__key",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"contact__input__value",attrs:{type:"text",placeholder:"Value"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})])])]),n("div",{staticClass:"row text-center mt-2"},[n("table",[t._m(0),t._l(t.contact.info,(function(e){return n("tr",{key:e.id},[e.id===t.editModal.editRowId?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editModal.editRowName,expression:"editModal.editRowName"}],staticClass:"edit__input",domProps:{value:t.editModal.editRowName},on:{input:function(e){e.target.composing||t.$set(t.editModal,"editRowName",e.target.value)}}})]):n("td",[t._v(t._s(e.name))]),e.id===t.editModal.editRowId?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editModal.editRowValue,expression:"editModal.editRowValue"}],staticClass:"edit__input",domProps:{value:t.editModal.editRowValue},on:{input:function(e){e.target.composing||t.$set(t.editModal,"editRowValue",e.target.value)}}})]):n("td",[t._v(t._s(e.value))]),n("td",[e.id===t.editModal.editRowId?n("div",[n("button",{staticClass:"action edit",on:{click:t.save}},[n("font-awesome-icon",{attrs:{icon:"save"}}),t._v(" Save ")],1),n("button",{staticClass:"action edit",on:{click:function(e){t.revertConfirmModal=!0}}},[n("font-awesome-icon",{attrs:{icon:"undo"}}),t._v(" Undo ")],1)]):n("div",[n("button",{staticClass:"action edit",on:{click:function(n){return t.editRow(e.id)}}},[n("font-awesome-icon",{attrs:{icon:"edit"}}),t._v(" Edit ")],1),n("button",{staticClass:"action trash",on:{click:function(n){return t.openDeleteModal(e.id)}}},[n("font-awesome-icon",{attrs:{icon:"trash"}}),t._v(" Delete ")],1)])])])}))],2)])],1):t._e()])},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Name")]),n("th",[t._v("Value")]),n("th",[t._v("Actions")])])}],J=(n("99af"),{name:"vieContact",components:{Modal:N},props:["id"],data:function(){return{name:"",value:"",revertConfirmModal:!1,editModal:{editRowId:void 0,editRowName:"",editRowValue:""},deleteModal:{modalOpened:!1,currentDeleteName:"",currentDeleteId:void 0}}},methods:Object(y["a"])(Object(y["a"])({},Object(l["b"])(["addInfo","removeInfo","updateInfo","revert"])),{},{onSubmit:function(){this.name&&this.value?(this.addInfo({id:this.id,name:this.name,value:this.value}),this.name="",this.value=""):alert("One of the fields is empty")},revertEdit:function(){this.editModal.editRowId=void 0},save:function(){this.updateInfo({contractId:this.id,infoId:this.editModal.editRowId,name:this.editModal.editRowName,value:this.editModal.editRowValue}),this.editModal.editRowId=void 0},editRow:function(t){if(this.editModal.editRowId===t)this.editModal.editRowId=void 0;else{this.editModal.editRowId=t;var e=this.contact.info.find((function(e){return e.id===t}));this.editModal.editRowName=e.name,this.editModal.editRowValue=e.value}},openDeleteModal:function(t){var e=this.contact.info.find((function(e){return e.id===t}));this.deleteModal={modalOpened:!0,currentDeleteName:"".concat(e.name," - ").concat(e.value),currentDeleteId:t}},deleteInfo:function(){this.removeInfo({contactId:this.id,infoId:this.deleteModal.currentDeleteId})}}),computed:Object(y["a"])(Object(y["a"])({},Object(l["c"])(["getContactById"])),{},{contact:function(){return this.getContactById(this.id)}})}),U=J,V=(n("9874"),Object(s["a"])(U,E,$,!1,null,"8a196f6c",null)),A=V.exports;a["a"].use(C["a"]);var T=new C["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:P},{path:"/contacts/:id",name:"contacts",component:A,props:function(t){var e=Number.parseInt(t.params.id,10);return Number.isNaN(e)?0:{id:e}}}]}),B=n("ecee"),F=n("c074"),Y=n("ad3d");B["c"].add(F["a"]),B["c"].add(F["e"]),B["c"].add(F["b"]),B["c"].add(F["d"]),B["c"].add(F["c"]),a["a"].component("font-awesome-icon",Y["a"]),a["a"].config.productionTip=!1,new a["a"]({router:T,store:w,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,n){},9874:function(t,e,n){"use strict";var a=n("ad8c"),o=n.n(a);o.a},aaee:function(t,e,n){},ad8c:function(t,e,n){},fa5b:function(t,e,n){"use strict";var a=n("3211"),o=n.n(a);o.a}});
//# sourceMappingURL=app.8e4248fc.js.map