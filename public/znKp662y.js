import{_ as N}from"./Bp_JYFVb.js";import{n as R,r as k,G as V,c as $,b as I,a as t,t as n,w as L,H as M,o as S,d as W}from"./D08H_D8t.js";import{a as T}from"./Cm0UX6qg.js";import C from"./DDH7jyHp.js";const E={class:"project-view"},G={class:"tbl"},H=t("colgroup",null,[t("col",{style:{width:"200px"}}),t("col",{style:{width:"auto"}})],-1),q=t("th",null,"프로젝트",-1),z=t("th",null,"구분",-1),A=t("th",null,"공지사항",-1),J=t("th",null,"계약기간",-1),K=t("th",null,"계약 주체",-1),O=t("th",null,"담당자",-1),Q=t("th",null,"이메일",-1),X=t("th",null,"연락처",-1),Y=t("th",null,"기획",-1),Z=t("th",null,"마크업",-1),tt=t("th",null,"디자인",-1),lt=t("th",null,"프론트 URL",-1),nt=t("th",null,"관리자 URL",-1),et=t("th",null,"관리자 ID",-1),ot=t("th",null,"관리자 PW",-1),ut=t("th",null,"FTP",-1),st=t("th",null,"FTP ID",-1),at=t("th",null,"FTP PW",-1),ct=t("th",null,"호스팅",-1),rt={class:"button-wrap button-wrap--mt40 tac"},vt={__name:"[id]",setup(dt){const U=R(),l=k(null),o=k(null),B=async()=>{try{await T.get(`/api/project/${o.value}`).then(e=>{l.value=e.data,M({title:l.value.project})})}catch(e){console.error(e)}},D=async()=>{try{if(confirm("삭제 하시겠습니까?"))await T.delete(`/api/project/${o.value}`).then(u=>{alert(u.data.msg),location.href="/project"});else return}catch(e){console.log(e)}};return V(()=>{o.value=U.params.id,B()}),(e,u)=>{var s,a,c,r,d,_,i,h,p,v,m,f,b,w,g,j,P,y,x;const F=N;return S(),$("div",E,[I(C,{class:"button-wrap button-wrap--mb40",deleteProject:D}),t("div",G,[t("table",null,[H,t("tbody",null,[t("tr",null,[q,t("td",null,n((s=l.value)==null?void 0:s.project),1)]),t("tr",null,[z,t("td",null,n(((a=l.value)==null?void 0:a.category)==="build"?"구축":"운영"),1)]),t("tr",null,[A,t("td",null,n((c=l.value)==null?void 0:c.notice),1)]),t("tr",null,[J,t("td",null,n((r=l.value)==null?void 0:r.period),1)]),t("tr",null,[K,t("td",null,n((d=l.value)==null?void 0:d.contractor),1)]),t("tr",null,[O,t("td",null,n((_=l.value)==null?void 0:_.manager),1)]),t("tr",null,[Q,t("td",null,n((i=l.value)==null?void 0:i.email),1)]),t("tr",null,[X,t("td",null,n((h=l.value)==null?void 0:h.phone),1)]),t("tr",null,[Y,t("td",null,n((p=l.value)==null?void 0:p.planning),1)]),t("tr",null,[Z,t("td",null,n((v=l.value)==null?void 0:v.markup),1)]),t("tr",null,[tt,t("td",null,n((m=l.value)==null?void 0:m.design),1)]),t("tr",null,[lt,t("td",null,n((f=l.value)==null?void 0:f.frontUrl),1)]),t("tr",null,[nt,t("td",null,n((b=l.value)==null?void 0:b.adminUrl),1)]),t("tr",null,[et,t("td",null,n((w=l.value)==null?void 0:w.adminId),1)]),t("tr",null,[ot,t("td",null,n((g=l.value)==null?void 0:g.adminPw),1)]),t("tr",null,[ut,t("td",null,n((j=l.value)==null?void 0:j.ftp),1)]),t("tr",null,[st,t("td",null,n((P=l.value)==null?void 0:P.ftpId),1)]),t("tr",null,[at,t("td",null,n((y=l.value)==null?void 0:y.ftpPw),1)]),t("tr",null,[ct,t("td",null,n((x=l.value)==null?void 0:x.hosting),1)])])])]),t("div",rt,[I(F,{to:"/project",class:"btn btn--bd"},{default:L(()=>[W("목록")]),_:1})])])}}};export{vt as default};
