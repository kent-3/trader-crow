import{S as _e,i as Ee,s as be,e as he,b as me,g as Ft,Q as ye,h as i,o as Le,k as a,q as o,a as n,a1 as pe,l as r,m as s,r as c,c as d,a3 as ve,n as l,E as t,T as qe,a9 as ke}from"../chunks/index.9b79299a.js";import{f as we}from"../chunks/index.f330423e.js";function ge(W){let f,e,u,y,at,I,rt,m,lt,ot,nt,v,_,S,ct,dt,P,ft,ut,E,N,ht,pt,T,vt,gt,b,z,mt,yt,C,_t,Et,L,V,bt,Lt,O,qt,kt,M,wt,xt,U,It,Mt,h,H,Bt,At,G,St,Pt,R,Nt,Tt,j,zt,Ct,$,Vt,Ot,D,Ut,Ht,F,Gt,Rt,q,J,jt,k,Q,$t,w,K,Dt;return{c(){f=a("div"),e=a("div"),u=a("h1"),y=o("Introduction"),at=n(),I=a("p"),rt=o(`This project presents an efficient Automated Market Maker (AMM) protocol, modeled after the Liquidity Book protocol used by Trader Joe (
			`),m=a("a"),lt=o(`Liquidity Book docs
			`),ot=o("). The protocol retains the key features of its predecessor, such as:"),nt=n(),v=a("ul"),_=a("li"),S=a("strong"),ct=o("No Slippage:"),dt=n(),P=a("span"),ft=o("Enabling token swaps with zero slippage within designated bins"),ut=n(),E=a("li"),N=a("strong"),ht=o("Adaptive Pricing:"),pt=n(),T=a("span"),vt=o("Offering Liquidity Providers extra dynamic fees during periods of increased market volatility"),gt=n(),b=a("li"),z=a("strong"),mt=o("Enhanced Capital Efficiency:"),yt=n(),C=a("span"),_t=o("Facilitating high-volume trading with minimal liquidity requirements"),Et=n(),L=a("li"),V=a("strong"),bt=o("Customizable Liquidity:"),Lt=n(),O=a("span"),qt=o("Liquidity providers can customize their liquidity distributions based on their strategy"),kt=n(),M=a("h2"),wt=o("Liquidity Book vs Uniswap V3"),xt=n(),U=a("p"),It=o("Both Liquidity Book and Uniswap V3 are concentrated liquidity AMMs with some subtle differences:"),Mt=n(),h=a("ul"),H=a("li"),Bt=o("Price ranges are divided into bins instead of ticks"),At=n(),G=a("li"),St=o("Bins employ a constant sum invariant instead of constant product"),Pt=n(),R=a("li"),Nt=o("Bin steps can exceed 1 basis point"),Tt=n(),j=a("li"),zt=o("Liquidity is aggregated vertically instead of horizontally"),Ct=n(),$=a("li"),Vt=o("Liquidity positions are fungible"),Ot=n(),D=a("li"),Ut=o("Liquidity positions can be distributed in any desired shape, without restrictions to uniform distribution across the price range"),Ht=n(),F=a("li"),Gt=o("Swap fees consist of fixed and variable pricing, enabling the AMM to impose higher fees during periods of heightened market volatility"),Rt=n(),q=a("div"),J=a("h2"),jt=n(),k=a("figure"),Q=a("section"),$t=n(),w=pe("svg"),K=pe("path"),this.h()},l(B){f=r(B,"DIV",{class:!0});var A=s(f);e=r(A,"DIV",{class:!0});var g=s(e);u=r(g,"H1",{class:!0});var Jt=s(u);y=c(Jt,"Introduction"),Jt.forEach(i),at=d(g),I=r(g,"P",{});var X=s(I);rt=c(X,`This project presents an efficient Automated Market Maker (AMM) protocol, modeled after the Liquidity Book protocol used by Trader Joe (
			`),m=r(X,"A",{href:!0,target:!0,rel:!0,class:!0});var Qt=s(m);lt=c(Qt,`Liquidity Book docs
			`),Qt.forEach(i),ot=c(X,"). The protocol retains the key features of its predecessor, such as:"),X.forEach(i),nt=d(g),v=r(g,"UL",{class:!0});var x=s(v);_=r(x,"LI",{class:!0});var Y=s(_);S=r(Y,"STRONG",{});var Kt=s(S);ct=c(Kt,"No Slippage:"),Kt.forEach(i),dt=d(Y),P=r(Y,"SPAN",{});var Wt=s(P);ft=c(Wt,"Enabling token swaps with zero slippage within designated bins"),Wt.forEach(i),Y.forEach(i),ut=d(x),E=r(x,"LI",{class:!0});var Z=s(E);N=r(Z,"STRONG",{});var Xt=s(N);ht=c(Xt,"Adaptive Pricing:"),Xt.forEach(i),pt=d(Z),T=r(Z,"SPAN",{});var Yt=s(T);vt=c(Yt,"Offering Liquidity Providers extra dynamic fees during periods of increased market volatility"),Yt.forEach(i),Z.forEach(i),gt=d(x),b=r(x,"LI",{class:!0});var tt=s(b);z=r(tt,"STRONG",{});var Zt=s(z);mt=c(Zt,"Enhanced Capital Efficiency:"),Zt.forEach(i),yt=d(tt),C=r(tt,"SPAN",{});var te=s(C);_t=c(te,"Facilitating high-volume trading with minimal liquidity requirements"),te.forEach(i),tt.forEach(i),Et=d(x),L=r(x,"LI",{class:!0});var et=s(L);V=r(et,"STRONG",{});var ee=s(V);bt=c(ee,"Customizable Liquidity:"),ee.forEach(i),Lt=d(et),O=r(et,"SPAN",{});var ie=s(O);qt=c(ie,"Liquidity providers can customize their liquidity distributions based on their strategy"),ie.forEach(i),et.forEach(i),x.forEach(i),kt=d(g),M=r(g,"H2",{class:!0});var se=s(M);wt=c(se,"Liquidity Book vs Uniswap V3"),se.forEach(i),xt=d(g),U=r(g,"P",{});var ae=s(U);It=c(ae,"Both Liquidity Book and Uniswap V3 are concentrated liquidity AMMs with some subtle differences:"),ae.forEach(i),Mt=d(g),h=r(g,"UL",{class:!0});var p=s(h);H=r(p,"LI",{});var re=s(H);Bt=c(re,"Price ranges are divided into bins instead of ticks"),re.forEach(i),At=d(p),G=r(p,"LI",{});var le=s(G);St=c(le,"Bins employ a constant sum invariant instead of constant product"),le.forEach(i),Pt=d(p),R=r(p,"LI",{});var oe=s(R);Nt=c(oe,"Bin steps can exceed 1 basis point"),oe.forEach(i),Tt=d(p),j=r(p,"LI",{});var ne=s(j);zt=c(ne,"Liquidity is aggregated vertically instead of horizontally"),ne.forEach(i),Ct=d(p),$=r(p,"LI",{});var ce=s($);Vt=c(ce,"Liquidity positions are fungible"),ce.forEach(i),Ot=d(p),D=r(p,"LI",{});var de=s(D);Ut=c(de,"Liquidity positions can be distributed in any desired shape, without restrictions to uniform distribution across the price range"),de.forEach(i),Ht=d(p),F=r(p,"LI",{});var fe=s(F);Gt=c(fe,"Swap fees consist of fixed and variable pricing, enabling the AMM to impose higher fees during periods of heightened market volatility"),fe.forEach(i),p.forEach(i),g.forEach(i),Rt=d(A),q=r(A,"DIV",{class:!0});var it=s(q);J=r(it,"H2",{class:!0}),s(J).forEach(i),jt=d(it),k=r(it,"FIGURE",{class:!0});var st=s(k);Q=r(st,"SECTION",{class:!0}),s(Q).forEach(i),$t=d(st),w=ve(st,"svg",{class:!0,xmlns:!0,viewBox:!0});var ue=s(w);K=ve(ue,"path",{d:!0}),s(K).forEach(i),ue.forEach(i),st.forEach(i),it.forEach(i),A.forEach(i),this.h()},h(){l(u,"class","font-semibold"),l(m,"href","https://docs.traderjoexyz.com/concepts/concentrated-liquidity"),l(m,"target","_blank"),l(m,"rel","noopener noreferrer"),l(m,"class","!dark:text-primary-300 !text-primary-500"),l(_,"class","list-item"),l(E,"class","list-item"),l(b,"class","list-item"),l(L,"class","list-item"),l(v,"class","list-disc"),l(M,"class","font-semibold"),l(h,"class","list-disc"),l(e,"class","inline-block space-y-2 w-2/3"),l(J,"class","font-bold"),l(Q,"class","img-bg svelte-ht2aq0"),l(K,"d","M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"),l(w,"class","fill-token -scale-x-[100%] svelte-ht2aq0"),l(w,"xmlns","http://www.w3.org/2000/svg"),l(w,"viewBox","0 0 640 512"),l(k,"class","svelte-ht2aq0"),l(q,"class","text-center"),l(f,"class","container h-full mx-auto flex justify-center space-x-24 items-center")},m(B,A){me(B,f,A),t(f,e),t(e,u),t(u,y),t(e,at),t(e,I),t(I,rt),t(I,m),t(m,lt),t(I,ot),t(e,nt),t(e,v),t(v,_),t(_,S),t(S,ct),t(_,dt),t(_,P),t(P,ft),t(v,ut),t(v,E),t(E,N),t(N,ht),t(E,pt),t(E,T),t(T,vt),t(v,gt),t(v,b),t(b,z),t(z,mt),t(b,yt),t(b,C),t(C,_t),t(v,Et),t(v,L),t(L,V),t(V,bt),t(L,Lt),t(L,O),t(O,qt),t(e,kt),t(e,M),t(M,wt),t(e,xt),t(e,U),t(U,It),t(e,Mt),t(e,h),t(h,H),t(H,Bt),t(h,At),t(h,G),t(G,St),t(h,Pt),t(h,R),t(R,Nt),t(h,Tt),t(h,j),t(j,zt),t(h,Ct),t(h,$),t($,Vt),t(h,Ot),t(h,D),t(D,Ut),t(h,Ht),t(h,F),t(F,Gt),t(f,Rt),t(f,q),t(q,J),t(q,jt),t(q,k),t(k,Q),t(k,$t),t(k,w),t(w,K)},i(B){Dt||qe(()=>{Dt=ke(f,we,{x:100,duration:1e3}),Dt.start()})},o:ye,d(B){B&&i(f)}}}function xe(W){let f,e=W[0]&&ge();return{c(){e&&e.c(),f=he()},l(u){e&&e.l(u),f=he()},m(u,y){e&&e.m(u,y),me(u,f,y)},p(u,[y]){u[0]?e?y&1&&Ft(e,1):(e=ge(),e.c(),Ft(e,1),e.m(f.parentNode,f)):e&&(e.d(1),e=null)},i(u){Ft(e)},o:ye,d(u){e&&e.d(u),u&&i(f)}}}function Ie(W,f,e){let u=!1;return Le(()=>e(0,u=!0)),[u]}class Ae extends _e{constructor(f){super(),Ee(this,f,Ie,xe,be,{})}}export{Ae as default};