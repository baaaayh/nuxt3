import{r as a,N as g,c as r,b as w,a as e,O as y,I as u,J as d,j as n,Q as p,t as S,k as b,o as c,A as x}from"./uYDZ8JoF.js";import D from"./BDEhABto.js";import"./CdhLZxmx.js";const N=e("h1",{style:{"padding-top":"200px"}},"Login",-1),V=e("h2",null,"로그인 : bdot / 1234",-1),k=e("button",{type:"submit"},"Login",-1),A={key:0},P={__name:"login",setup(I){const t=a(""),s=a(""),l=a(null),{authenticateUser:m,authenticated:h}=g(),_=a({id:t}),f=async()=>{(await x().$auth.login(t.value,s.value)).success?h?alert("이미 로그인되었습니다."):m(_.value.id):l.value="Invalid ID or Password"};return(v,o)=>(c(),r("div",null,[w(D),e("div",null,[N,V,e("form",{onSubmit:y(f,["prevent"]),action:"/api/auth",method:"POST"},[u(e("input",{"onUpdate:modelValue":o[0]||(o[0]=i=>p(t)?t.value=i:null),placeholder:"ID"},null,512),[[d,n(t)]]),u(e("input",{"onUpdate:modelValue":o[1]||(o[1]=i=>p(s)?s.value=i:null),type:"password",placeholder:"PASSWORD"},null,512),[[d,n(s)]]),k],32),n(l)?(c(),r("p",A,S(n(l)),1)):b("",!0)])]))}};export{P as default};
