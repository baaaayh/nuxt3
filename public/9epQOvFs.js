import{r as a,N as g,c as r,b as w,a as e,O as y,I as u,J as d,j as n,Q as p,t as b,k as x,o as c,A as D}from"./BT6qM_PQ.js";import N from"./BX38K35K.js";import"./CDAUtajr.js";const S=e("h1",{style:{"padding-top":"200px"}},"Login",-1),V=e("h2",null,"로그인 : bdot / 1234",-1),k=e("button",{type:"submit"},"Login",-1),A={key:0},M={__name:"login",setup(I){const t=a(""),s=a(""),l=a(null),{authenticateUser:m,authenticated:_}=g(),h=a({id:t}),f=async()=>{(await D().$auth.login(t.value,s.value)).success?_?alert("이미 로그인되었습니다."):m(h.value.id):l.value="Invalid ID or Password"};return(v,o)=>(c(),r("div",null,[w(N),e("div",null,[S,V,e("form",{onSubmit:y(f,["prevent"]),action:"@/api/auth"},[u(e("input",{"onUpdate:modelValue":o[0]||(o[0]=i=>p(t)?t.value=i:null),placeholder:"ID"},null,512),[[d,n(t)]]),u(e("input",{"onUpdate:modelValue":o[1]||(o[1]=i=>p(s)?s.value=i:null),type:"password",placeholder:"PASSWORD"},null,512),[[d,n(s)]]),k],32),n(l)?(c(),r("p",A,b(n(l)),1)):x("",!0)])]))}};export{M as default};