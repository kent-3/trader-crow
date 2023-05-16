import{S as me,i as ye,s as _e,e as fe,b as ve,g as jt,Q as ge,h as i,o as Ee,k as a,q as o,a as f,a1 as ue,l as r,m as s,r as l,c as u,a3 as he,n,E as t,T as be,a9 as Le}from"../chunks/index.3758c5f4.js";import{f as qe}from"../chunks/index.64e636bf.js";function pe(K){let c,e,d,y,it,x,st,m,at,rt,ot,v,_,S,lt,nt,P,ct,dt,E,N,ft,ut,T,ht,pt,b,z,vt,gt,C,mt,yt,L,V,_t,Et,O,bt,Lt,I,qt,kt,U,wt,xt,h,G,It,Mt,H,Bt,At,R,St,Pt,j,Nt,Tt,$,zt,Ct,D,Vt,Ot,F,Ut,Gt,M,q,J,Ht,k,Q,Rt;return{c(){c=a("div"),e=a("div"),d=a("h1"),y=o("Introduction"),it=f(),x=a("p"),st=o(`This project presents an efficient Automated Market Maker (AMM) protocol, modeled after the Liquidity Book protocol used by Trader Joe (
			`),m=a("a"),at=o(`Liquidity Book docs
			`),rt=o("). The protocol retains the key features of its predecessor, such as:"),ot=f(),v=a("ul"),_=a("li"),S=a("strong"),lt=o("No Slippage:"),nt=f(),P=a("span"),ct=o("Enabling token swaps with zero slippage within designated bins"),dt=f(),E=a("li"),N=a("strong"),ft=o("Adaptive Pricing:"),ut=f(),T=a("span"),ht=o("Offering Liquidity Providers extra dynamic fees during periods of increased market volatility"),pt=f(),b=a("li"),z=a("strong"),vt=o("Enhanced Capital Efficiency:"),gt=f(),C=a("span"),mt=o("Facilitating high-volume trading with minimal liquidity requirements"),yt=f(),L=a("li"),V=a("strong"),_t=o("Customizable Liquidity:"),Et=f(),O=a("span"),bt=o("Liquidity providers can customize their liquidity distributions based on their strategy"),Lt=f(),I=a("h2"),qt=o("Liquidity Book vs Uniswap V3"),kt=f(),U=a("p"),wt=o("Both Liquidity Book and Uniswap V3 are concentrated liquidity AMMs with some subtle differences:"),xt=f(),h=a("ul"),G=a("li"),It=o("Price ranges are divided into bins instead of ticks"),Mt=f(),H=a("li"),Bt=o("Bins employ a constant sum invariant instead of constant product"),At=f(),R=a("li"),St=o("Bin steps can exceed 1 basis point"),Pt=f(),j=a("li"),Nt=o("Liquidity is aggregated vertically instead of horizontally"),Tt=f(),$=a("li"),zt=o("Liquidity positions are fungible"),Ct=f(),D=a("li"),Vt=o("Liquidity positions can be distributed in any desired shape, without restrictions to uniform distribution across the price range"),Ot=f(),F=a("li"),Ut=o("Swap fees consist of fixed and variable pricing, enabling the AMM to impose higher fees during periods of heightened market volatility"),Gt=f(),M=a("div"),q=a("figure"),J=a("section"),Ht=f(),k=ue("svg"),Q=ue("path"),this.h()},l(B){c=r(B,"DIV",{class:!0});var A=s(c);e=r(A,"DIV",{class:!0});var g=s(e);d=r(g,"H1",{class:!0});var $t=s(d);y=l($t,"Introduction"),$t.forEach(i),it=u(g),x=r(g,"P",{});var W=s(x);st=l(W,`This project presents an efficient Automated Market Maker (AMM) protocol, modeled after the Liquidity Book protocol used by Trader Joe (
			`),m=r(W,"A",{href:!0,target:!0,rel:!0,class:!0});var Dt=s(m);at=l(Dt,`Liquidity Book docs
			`),Dt.forEach(i),rt=l(W,"). The protocol retains the key features of its predecessor, such as:"),W.forEach(i),ot=u(g),v=r(g,"UL",{class:!0});var w=s(v);_=r(w,"LI",{class:!0});var X=s(_);S=r(X,"STRONG",{});var Ft=s(S);lt=l(Ft,"No Slippage:"),Ft.forEach(i),nt=u(X),P=r(X,"SPAN",{});var Jt=s(P);ct=l(Jt,"Enabling token swaps with zero slippage within designated bins"),Jt.forEach(i),X.forEach(i),dt=u(w),E=r(w,"LI",{class:!0});var Y=s(E);N=r(Y,"STRONG",{});var Qt=s(N);ft=l(Qt,"Adaptive Pricing:"),Qt.forEach(i),ut=u(Y),T=r(Y,"SPAN",{});var Kt=s(T);ht=l(Kt,"Offering Liquidity Providers extra dynamic fees during periods of increased market volatility"),Kt.forEach(i),Y.forEach(i),pt=u(w),b=r(w,"LI",{class:!0});var Z=s(b);z=r(Z,"STRONG",{});var Wt=s(z);vt=l(Wt,"Enhanced Capital Efficiency:"),Wt.forEach(i),gt=u(Z),C=r(Z,"SPAN",{});var Xt=s(C);mt=l(Xt,"Facilitating high-volume trading with minimal liquidity requirements"),Xt.forEach(i),Z.forEach(i),yt=u(w),L=r(w,"LI",{class:!0});var tt=s(L);V=r(tt,"STRONG",{});var Yt=s(V);_t=l(Yt,"Customizable Liquidity:"),Yt.forEach(i),Et=u(tt),O=r(tt,"SPAN",{});var Zt=s(O);bt=l(Zt,"Liquidity providers can customize their liquidity distributions based on their strategy"),Zt.forEach(i),tt.forEach(i),w.forEach(i),Lt=u(g),I=r(g,"H2",{class:!0});var te=s(I);qt=l(te,"Liquidity Book vs Uniswap V3"),te.forEach(i),kt=u(g),U=r(g,"P",{});var ee=s(U);wt=l(ee,"Both Liquidity Book and Uniswap V3 are concentrated liquidity AMMs with some subtle differences:"),ee.forEach(i),xt=u(g),h=r(g,"UL",{class:!0});var p=s(h);G=r(p,"LI",{});var ie=s(G);It=l(ie,"Price ranges are divided into bins instead of ticks"),ie.forEach(i),Mt=u(p),H=r(p,"LI",{});var se=s(H);Bt=l(se,"Bins employ a constant sum invariant instead of constant product"),se.forEach(i),At=u(p),R=r(p,"LI",{});var ae=s(R);St=l(ae,"Bin steps can exceed 1 basis point"),ae.forEach(i),Pt=u(p),j=r(p,"LI",{});var re=s(j);Nt=l(re,"Liquidity is aggregated vertically instead of horizontally"),re.forEach(i),Tt=u(p),$=r(p,"LI",{});var oe=s($);zt=l(oe,"Liquidity positions are fungible"),oe.forEach(i),Ct=u(p),D=r(p,"LI",{});var le=s(D);Vt=l(le,"Liquidity positions can be distributed in any desired shape, without restrictions to uniform distribution across the price range"),le.forEach(i),Ot=u(p),F=r(p,"LI",{});var ne=s(F);Ut=l(ne,"Swap fees consist of fixed and variable pricing, enabling the AMM to impose higher fees during periods of heightened market volatility"),ne.forEach(i),p.forEach(i),g.forEach(i),Gt=u(A),M=r(A,"DIV",{class:!0});var ce=s(M);q=r(ce,"FIGURE",{class:!0});var et=s(q);J=r(et,"SECTION",{class:!0}),s(J).forEach(i),Ht=u(et),k=he(et,"svg",{class:!0,xmlns:!0,viewBox:!0});var de=s(k);Q=he(de,"path",{d:!0}),s(Q).forEach(i),de.forEach(i),et.forEach(i),ce.forEach(i),A.forEach(i),this.h()},h(){n(d,"class","font-semibold"),n(m,"href","https://docs.traderjoexyz.com/concepts/concentrated-liquidity"),n(m,"target","_blank"),n(m,"rel","noopener noreferrer"),n(m,"class","!dark:text-primary-300 !text-primary-500"),n(_,"class","list-item"),n(E,"class","list-item"),n(b,"class","list-item"),n(L,"class","list-item"),n(v,"class","list-disc"),n(I,"class","font-semibold"),n(h,"class","list-disc"),n(e,"class","inline-block space-y-2 w-2/3"),n(J,"class","img-bg svelte-ht2aq0"),n(Q,"d","M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"),n(k,"class","fill-token -scale-x-[100%] svelte-ht2aq0"),n(k,"xmlns","http://www.w3.org/2000/svg"),n(k,"viewBox","0 0 640 512"),n(q,"class","svelte-ht2aq0"),n(M,"class","text-center"),n(c,"class","container h-full mx-auto flex justify-center space-x-24 items-center")},m(B,A){ve(B,c,A),t(c,e),t(e,d),t(d,y),t(e,it),t(e,x),t(x,st),t(x,m),t(m,at),t(x,rt),t(e,ot),t(e,v),t(v,_),t(_,S),t(S,lt),t(_,nt),t(_,P),t(P,ct),t(v,dt),t(v,E),t(E,N),t(N,ft),t(E,ut),t(E,T),t(T,ht),t(v,pt),t(v,b),t(b,z),t(z,vt),t(b,gt),t(b,C),t(C,mt),t(v,yt),t(v,L),t(L,V),t(V,_t),t(L,Et),t(L,O),t(O,bt),t(e,Lt),t(e,I),t(I,qt),t(e,kt),t(e,U),t(U,wt),t(e,xt),t(e,h),t(h,G),t(G,It),t(h,Mt),t(h,H),t(H,Bt),t(h,At),t(h,R),t(R,St),t(h,Pt),t(h,j),t(j,Nt),t(h,Tt),t(h,$),t($,zt),t(h,Ct),t(h,D),t(D,Vt),t(h,Ot),t(h,F),t(F,Ut),t(c,Gt),t(c,M),t(M,q),t(q,J),t(q,Ht),t(q,k),t(k,Q)},i(B){Rt||be(()=>{Rt=Le(c,qe,{x:100,duration:1e3}),Rt.start()})},o:ge,d(B){B&&i(c)}}}function ke(K){let c,e=K[0]&&pe();return{c(){e&&e.c(),c=fe()},l(d){e&&e.l(d),c=fe()},m(d,y){e&&e.m(d,y),ve(d,c,y)},p(d,[y]){d[0]?e?y&1&&jt(e,1):(e=pe(),e.c(),jt(e,1),e.m(c.parentNode,c)):e&&(e.d(1),e=null)},i(d){jt(e)},o:ge,d(d){e&&e.d(d),d&&i(c)}}}function we(K,c,e){let d=!1;return Ee(()=>e(0,d=!0)),[d]}class Me extends me{constructor(c){super(),ye(this,c,we,ke,_e,{})}}export{Me as default};
