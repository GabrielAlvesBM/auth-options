import{d as l,u as _,r as f,o,c as s,a as e,t as h,b as g,w,F as v,e as x,_ as c,f as y}from"./index-BJ0vWurw.js";const b={key:0,class:"error-card"},F=l({__name:"LoginForm",setup(p){const n=_(),a=f(""),m=async r=>{const t=r.target,i=new FormData(t),u={email:i.get("email"),password:i.get("password")};x.post("http://localhost:3000/api/login",u,{withCredentials:!0}).then(()=>{n.push("/").then(()=>{window.location.reload()})}).catch(d=>{a.value=d.response.data})};return(r,t)=>(o(),s(v,null,[a.value?(o(),s("div",b,[e("p",null,h(a.value),1)])):g("",!0),e("form",{onSubmit:w(m,["prevent"])},t[0]||(t[0]=[e("input",{type:"email",name:"email",id:"email",placeholder:"E-mail",autocomplete:"off",required:""},null,-1),e("input",{type:"password",name:"password",id:"password",placeholder:"Senha",autocomplete:"off",required:"",minlength:"4",maxlength:"100"},null,-1),e("button",{type:"submit"},"Enviar",-1)]),32)],64))}}),V=c(F,[["__scopeId","data-v-1a6fc311"]]),L=l({__name:"LoginView",setup(p){return(n,a)=>(o(),s("main",null,[y(V)]))}}),k=c(L,[["__scopeId","data-v-f04e614a"]]);export{k as default};
