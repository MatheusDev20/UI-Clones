(this["webpackJsonpdisney-clone"]=this["webpackJsonpdisney-clone"]||[]).push([[0],{37:function(n,e,t){},43:function(n,e,t){},63:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),s=t(15),a=t.n(s),c=(t(37),t(31),t(12)),o=t(19),d=t.n(o),p=t(26),l=t(13);function b(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(e){return setTimeout((function(){return e({data:n})}),500)}))}var x=Object(l.b)("counter/fetchCount",function(){var n=Object(p.a)(d.a.mark((function n(e){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b(e);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),j=Object(l.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(n){n.value+=1},decrement:function(n){n.value-=1},incrementByAmount:function(n,e){n.value+=e.payload}},extraReducers:function(n){n.addCase(x.pending,(function(n){n.status="loading"})).addCase(x.fulfilled,(function(n,e){n.status="idle",n.value+=e.payload}))}}),g=j.actions,h=(g.increment,g.decrement,g.incrementByAmount,j.reducer),u=(t(7),t(1));t(43);var m,O,f,v,w=t(2),y=t(3),k=y.a.nav(m||(m=Object(w.a)(["\n    height: 70px; \n    background: #090b13;\n    display: flex;\n    align-items: center;\n    padding: 0 36px; // 0 pra cima e pra baixo e 36 pra esquerda/direta\n    overflow-x: hidden;\n"]))),A=y.a.img(O||(O=Object(w.a)(["\n    width: 80px;\n    cursor: pointer;\n\n"]))),C=y.a.div(f||(f=Object(w.a)(['\n    display: flex;\n    flex: 1;\n    margin-left: 25px;\n    align-items: center;\n    a {\n        display: flex;\n        align-items: center;\n        padding: 0 12px;\n        text-decoration: none;\n        color: #fff;\n        cursor: pointer;\n        img {\n            height: 20px;\n        }\n        span {\n            font-size: 13px;\n            letter-spacing: 1.42px;\n            position: relative;\n            &::after {\n                content: "";\n                height: 2px;\n                background: #fff;\n                position: absolute;\n                left: 0;\n                right: 0;\n                bottom: -6px;\n                opacity: 0;\n                transform-origin: left center;\n                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45,0.94) 0s;\n                transform: scaleX(0);\n            }\n        }\n        &:hover {\n                span:after {\n                transform: scaleX(1);\n                opacity: 1;\n                }\n                \n            }\n    }\n']))),_=y.a.img(v||(v=Object(w.a)(["\n    height: 48px;\n    width: 48px;\n    border-radius: 50%;\n    cursor: pointer;\n"])));function z(){return Object(u.jsxs)(k,{children:[Object(u.jsx)(A,{src:"/assets/logo.svg"}),Object(u.jsxs)(C,{children:[Object(u.jsxs)("a",{href:"/",children:[Object(u.jsx)("img",{src:"/assets/home-icon.svg",alt:"home"}),Object(u.jsx)("span",{children:"HOME"})]}),Object(u.jsxs)("a",{href:"/",children:[Object(u.jsx)("img",{src:"/assets/search-icon.svg",alt:"search"}),Object(u.jsx)("span",{children:"SEARCH"})]}),Object(u.jsxs)("a",{href:"/",children:[Object(u.jsx)("img",{src:"/assets/watchlist-icon.svg",alt:"watchlist"}),Object(u.jsx)("span",{children:"WATCHLIST"})]}),Object(u.jsxs)("a",{href:"/",children:[Object(u.jsx)("img",{src:"/assets/original-icon.svg",alt:"original"}),Object(u.jsx)("span",{children:"ORIGINALS"})]}),Object(u.jsxs)("a",{href:"/",children:[Object(u.jsx)("img",{src:"/assets/movie-icon.svg",alt:"movies"}),Object(u.jsx)("span",{children:"MOVIES"})]}),Object(u.jsxs)("a",{href:"/",children:[Object(u.jsx)("img",{src:"/assets/series-icon.svg",alt:"series"}),Object(u.jsx)("span",{children:"SERIES"})]})]}),Object(u.jsx)(_,{src:"/assets/my-avatar.png"})]})}var E,B,S,F=t(32),I=t(4),D=t(24),R=(t(45),t(30)),T=t.n(R),q=Object(y.a)(T.a)(E||(E=Object(w.a)(["\n    margin-top: 20px;\n    ul li button {\n        &::before {\n            font-size: 10px;\n            color: rgb(150,158,171)\n        }\n    }\n    li.slick-active button::before{\n        color: white;\n    }\n    .slick-list {\n        overflow: visible;\n    }\n    button {\n        z-index: 1;\n    }\n"]))),L=y.a.div(B||(B=Object(w.a)(["\n    cursor: pointer;\n    img {\n        border: 4px solid transparent;\n        border-radius: 5px;\n        width: 100%;\n        height: 100%;\n        box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,\n        rgb(0 0 0 /73%) 0px 16px 10px -10px;\n        transition-duration: 300ms;\n        &:hover{\n            border: 4px solid rgb(249,249,249,0.8)\n        }\n    }\n"])));t(61);function H(){return Object(u.jsxs)(q,Object(D.a)(Object(D.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,autoPlay:!1}),{},{children:[Object(u.jsx)(L,{children:Object(u.jsx)("img",{src:"/assets/slider-badging.jpg",alt:"slider"})}),Object(u.jsx)(L,{children:Object(u.jsx)("img",{src:"/assets/slider-badag.jpg",alt:"slider"})})]}))}var M,V,X,P,W,G=y.a.main(S||(S=Object(w.a)(["\n    min-height: calc(100vh - 70px);\n    padding: 0 calc(3.5vw + 5px);\n    position: relative;\n    overflow-x: hidden;\n\n    &:before{\n        background: url('/assets/home-background.png') center center / cover no-repeat fixed;\n        content: \"\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        z-index: -1; // Faz todo conteudo gerado ficar por cima dessa DIV before\n    }\n"]))),J=y.a.div(M||(M=Object(w.a)(["\n    margin-top: 30px;\n    display: grid;\n    padding: 30px 0px 26px;\n    grid-template-columns: repeat(5, minmax(0,1fr));\n    grid-gap: 25px;\n"]))),N=y.a.div(V||(V=Object(w.a)(["\n    border-radius: 10px;\n    cursor: pointer;\n    border: 3px solid rgba(249,249,249,0.1);\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0 16px 10px -10px;\n    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n    }\n    &:hover {\n        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px;\n        transform: scaleX(1.05);\n        border-color: rgba(249,249,249, 0.8);\n    }\n    \n"])));function U(){return Object(u.jsxs)(J,{children:[Object(u.jsx)(N,{children:Object(u.jsx)("img",{src:"/assets/viewers-disney.png",alt:"disney"})}),Object(u.jsx)(N,{children:Object(u.jsx)("img",{src:"/assets/viewers-pixar.png",alt:"pixar"})}),Object(u.jsx)(N,{children:Object(u.jsx)("img",{src:"/assets/viewers-marvel.png",alt:"marvel"})}),Object(u.jsx)(N,{children:Object(u.jsx)("img",{src:"/assets/viewers-starwars.png",alt:"star wars"})}),Object(u.jsx)(N,{children:Object(u.jsx)("img",{src:"/assets/viewers-national.png",alt:"national"})})]})}var K,Y,$,Q,Z,nn,en,tn,rn,sn,an=y.a.div(X||(X=Object(w.a)(["\n\n"]))),cn=y.a.div(P||(P=Object(w.a)(["\n    display: grid;\n    grid-gap: 25px;\n    grid-template-columns: repeat(4, minmax(0,1fr));\n"]))),on=y.a.div(W||(W=Object(w.a)(["\n    border-radius: 10px;\n    overflow: hidden;\n    border: 3px solid rgba(249,249,249,0.1);\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;\n    cursor: pointer;\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n    }\n    &:hover {\n        transform: scale(1.05);\n        box-shadow: rgb(0 0 0 / 80%) 0px 40px 50px -16px,\n        rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n        border-color: rgba(249,249,249,0.8);\n    }\n"])));function dn(){return Object(u.jsxs)(an,{children:[Object(u.jsx)("h4",{children:"Reccomended for you"}),Object(u.jsxs)(cn,{children:[Object(u.jsx)(on,{children:Object(u.jsx)("img",{src:"/assets/viewers-disney.png",alt:"?"})}),Object(u.jsx)(on,{children:Object(u.jsx)("img",{src:"/assets/viewers-disney.png",alt:"?"})}),Object(u.jsx)(on,{children:Object(u.jsx)("img",{src:"/assets/viewers-disney.png",alt:"?"})}),Object(u.jsx)(on,{children:Object(u.jsx)("img",{src:"/assets/viewers-disney.png",alt:"?"})})]})]})}function pn(){return Object(u.jsxs)(G,{children:[Object(u.jsx)(H,{}),Object(u.jsx)(U,{}),Object(u.jsx)(dn,{})]})}var ln,bn,xn,jn,gn,hn,un=y.a.div(K||(K=Object(w.a)(["\n    min-height: calc(100vh - 70px);\n    padding: 0 calc(3.5vw + 5px);\n    position: relative;\n"]))),mn=y.a.div(Y||(Y=Object(w.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: -1;\n    opacity: 0.8;\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n    }\n"]))),On=y.a.div($||($=Object(w.a)(["\n    height: 30vh;\n    min-height: 170px;\n    width: 35vw;\n    min-width: 200px;\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n    }\n\n"]))),fn=y.a.div(Q||(Q=Object(w.a)(["\n    display: flex;\n    align-items: center;\n"]))),vn=y.a.button(Z||(Z=Object(w.a)(["\n    border-radius: 4px;\n    font-size: 15px;\n    display: flex;\n    margin-right: 22px;\n    align-items: center;\n    height: 56px;\n    background: rgb(249,249,249);\n    border: none;\n    padding: 0px 24px;\n    letter-spacing: 1.8px;\n    cursor: pointer;\n\n\n    &:hover {\n        background: rgb(198, 198,198);\n    }\n"]))),wn=Object(y.a)(vn)(nn||(nn=Object(w.a)(["\n    background: rgba(0,0,0,0.3);\n    border: 1px solid rgba(249,249,249);\n    color: rgba(249,249,249);\n    text-transform: uppercase;\n"]))),yn=y.a.button(en||(en=Object(w.a)(["\n    margin-right: 16px;\n    width: 44px;\n    height: 44px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    background: rgba(0,0,0,0.6);\n    cursor: pointer;\n    span { \n        font-size: 30px;\n        color: white;\n    }\n    &:hover {\n        background: rgba(0,0,0,0.3);\n    }\n"]))),kn=Object(y.a)(yn)(tn||(tn=Object(w.a)(["\n    background: rgb(0,0,0);\n"]))),An=y.a.div(rn||(rn=Object(w.a)(["\n    color: rgb(249,249,249);\n    font-size: 15px;\n    min-height: 20px;\n    margin-top: 26px;\n"]))),Cn=y.a.div(sn||(sn=Object(w.a)(["\n    line-height: 1.4;\n    font-size: 20px;\n    margin-top: 16px;\n    color: rgb(249,249,249);\n"])));function _n(){return Object(u.jsxs)(un,{children:[Object(u.jsx)(mn,{children:Object(u.jsx)("img",{src:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg",alt:"background"})}),Object(u.jsx)(On,{children:Object(u.jsx)("img",{src:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78",alt:"title"})}),Object(u.jsxs)(fn,{children:[Object(u.jsxs)(vn,{children:[Object(u.jsx)("img",{src:"/assets/play-icon-black.png",alt:"play"}),Object(u.jsx)("span",{children:"PLAY"})]}),Object(u.jsxs)(wn,{children:[Object(u.jsx)("img",{src:"/assets/play-icon-white.png",alt:"play"}),Object(u.jsx)("span",{children:"Trailer"})]}),Object(u.jsx)(yn,{children:Object(u.jsx)("span",{children:"+"})}),Object(u.jsx)(kn,{children:Object(u.jsx)("img",{src:"/assets/group-icon.png",alt:"group-watch"})})]}),Object(u.jsx)(An,{children:"2018 * 7m * Family, Fantasy, Kids, Animation"}),Object(u.jsx)(Cn,{children:"Uma m\xe3e chinesa que fica triste quando o filho adulto sai de casa tem outra oportunidade de ser m\xe3e quando um dos seus bolinhos ganha vida. Mas ela descobre que nada permanece engra\xe7ado e pequeno para sempre"})]})}var zn=y.a.div(ln||(ln=Object(w.a)(['\n    position: relative;\n    height: calc(100vh - 70px);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &:before {\n        background-position: top;\n        background-size: cover;\n        background-image:url("/assets/login-background.jpg");\n        content: "";\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n    }\n']))),En=y.a.div(bn||(bn=Object(w.a)(["\n    max-width: 650px;\n    padding: 80px 40px;\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n"]))),Bn=y.a.img(xn||(xn=Object(w.a)(["\n\n"]))),Sn=y.a.a(jn||(jn=Object(w.a)(["\n    width: 100%;\n    background-color: #0063e5;\n    font-weight: bold;\n    padding: 17px 0;\n    color: #f9f9f9;\n    border-radius: 4px;\n    text-align: center;\n    cursor: pointer;\n    font-size: 18px;\n    transition: all 250ms;\n    letter-spacing: 1.5px;\n    margin-top: 8px;\n    margin-bottom: 12px;\n\n    &:hover {\n        background: #0483ee\n    }\n\n"]))),Fn=y.a.p(gn||(gn=Object(w.a)(["\n    font-size: 11px;\n    letter-spacing: 1.5px;\n    text-align: center;\n\n"]))),In=y.a.img(hn||(hn=Object(w.a)(["\n\n"])));var Dn=function(){return Object(u.jsx)(zn,{children:Object(u.jsxs)(En,{children:[Object(u.jsx)(Bn,{src:"/assets/cta-logo-one.svg"}),Object(u.jsx)(Sn,{children:"GET ALL THERE"}),Object(u.jsx)(Fn,{children:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"}),Object(u.jsx)(In,{src:"/assets/cta-logo-two.png"})]})})};function Rn(){return Object(u.jsx)(F.a,{children:Object(u.jsxs)(I.c,{children:[Object(u.jsx)(I.a,{path:"/home",children:Object(u.jsx)(pn,{})}),Object(u.jsx)(I.a,{path:"/detail",component:_n}),Object(u.jsx)(I.a,{exact:!0,path:"/",component:Dn})]})})}var Tn=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(z,{}),Object(u.jsx)(Rn,{})]})},qn=Object(l.a)({reducer:{counter:h}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(c.a,{store:qn,children:Object(u.jsx)(Tn,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},7:function(n,e,t){n.exports={row:"Counter_row__1C_4f",value:"Counter_value__1d0te",button:"Counter_button__1xpSV",textbox:"Counter_textbox__3ODaX",asyncButton:"Counter_asyncButton__2UAr3 Counter_button__1xpSV"}}},[[63,1,2]]]);
//# sourceMappingURL=main.a3ff0000.chunk.js.map