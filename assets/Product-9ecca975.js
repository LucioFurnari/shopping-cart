import{j as e,r as s,W as k,c as D,u as P,a as t,A,b as $,F as w,s as j,d as F,e as E,H,_ as I,R as W,P as q,f as z,g as B}from"./index-3eeef78b.js";function g(r){const{text:o,func:l=()=>{},customStyle:n}=r;return e("button",{onClick:l,className:`${n} mb-4 p-3 md:py-4 md:px-8  text-xl  rounded-lg `,children:o})}function O(r){const{img:o,id:l,name:n,price:d,type:m,stock:i,description:c}=r,[x,u]=s.useState(!1),[f,h]=s.useState(1),[b,y]=s.useState(!1);s.useContext(k),s.useContext(D);const p=s.useContext(P),N=()=>u(a=>!a),v=()=>y(a=>!a);function S(a){a.stopPropagation(),N(),j(p.id,l)}function C(a){F(p.id,l,a)}return t("div",{className:"flex flex-col grow items-center justify-center bg-zinc-300  xl:flex-row xl:items-start xl:justify-start xl:max-w-7xl",children:[e("img",{src:o}),t("div",{className:"flex-col ml-4 md:ml-12 w-full",children:[t("div",{className:"flex items-center",children:[e("h2",{className:"text-2xl font-semibold pt-4 pb-4",children:n}),e("span",{className:"text-2xl ml-auto mr-10",children:x?e(A,{className:"fill-red-900 animate-pulse"}):e($,{onClick:S,className:"fill-red-900"})})]}),t("p",{className:"text-xl pb-6",children:["Price: ",t("span",{className:"text-xl pl-4 text-orange-800",children:[d,".00 $"]})]}),t("p",{className:"text-xl pb-6",children:["Category: ",e("span",{className:"text-xl pl-4 text-zinc-900",children:m})]}),t("p",{className:"text-xl pb-6",children:["Availability:",e("span",{className:`text-xl pl-4 ${i>0?" text-green-700":"text-red-700"}`,children:i>0?"In stock!":"Out of stock"})]}),p.isSigned&&t(w,{children:[e(g,{customStyle:"bg-yellow-900 text-white hover:bg-yellow-950 ",text:"Buy it now"}),e(g,{customStyle:"ml-4 bg-transparent border-2 text-yellow-900 hover:text-yellow-600 border-yellow-900 hover:border-yellow-600 font-semibold ",text:"Add to cart",func:a=>{C(f),h(1)}})]}),e("button",{className:` block ${b?"text-yellow-600":"text-yellow-900"} pr-3 md:py-4 md:pr-8 mb-2 text-xl`,onClick:v,children:"Product description"}),e("p",{className:`${b&&"h-[200px]"} overflow-hidden transition-[height] duration-1000 ease-in-out h-0`,children:c})]})]})}function Q(){return t("div",{className:"flex flex-col xl:flex-row animate-pulse xl:h-96 h-full opacity-70",children:[e("div",{className:"xl:w-[933px] xl:h-[450px] h-1/2 w-full bg-slate-700"}),t("div",{className:"w-full ml-8",children:[e("div",{className:"w-3/5 h-6 mt-6  bg-slate-700"}),e("div",{className:"w-1/2 h-6 mt-6 bg-slate-700"}),e("div",{className:"w-1/3 h-6 mt-6 bg-slate-700"}),e("div",{className:"w-1/2 h-6 mt-6 bg-slate-700"}),e("div",{className:"w-1/3 h-6 mt-6 bg-slate-700"})]})]})}function _(r){s.useState([]);const[o,l]=s.useState(!1),{item:n}=E(),[d,m]=s.useState([]);return s.useEffect(()=>{(async()=>{const c=[];l(!0);const x=I(B,"products"),u=W(x,q("name","==",`${n}`));(await z(u)).forEach(h=>c.push(h.data())),m(c),l(!1)})()},[]),t(w,{children:[e(H,{section:"Product",link:"/shop",routeName:"All",item:n}),e("main",{className:"p-12 pt-20 min-h-screen ",children:o?e(Q,{}):d.map((i,c)=>s.createElement(O,{...i,key:c}))})]})}export{_ as default};
