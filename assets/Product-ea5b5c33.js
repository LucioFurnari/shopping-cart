import{r as a,W as A,c as P,j as s,a as t,A as S,b as j,u as q,H as R,L as $,_ as E,R as H,P as L,f as z,d as F}from"./index-a35672c5.js";function O(h){const{img:o,id:l,name:i,price:r,type:p,stock:c,description:n}=h,[d,u]=a.useState(!1),[m,x]=a.useState(1),[f,b]=a.useState(!1),y=a.useContext(A),N=a.useContext(P),g=()=>u(e=>!e),v=()=>b(e=>!e);function w(e){e.stopPropagation(),g(),y({type:"added",id:l})}function D(e){e.stopPropagation(),g(),y({type:"remove",id:l})}function C(e,k){N({type:"ADD-TO-CART",id:l,quantity:k})}return s("div",{className:"flex flex-col grow items-start justify-center bg-zinc-300",children:[s("div",{className:"relative",children:[t("span",{className:"absolute top-4 right-4 text-2xl",children:d?t(S,{className:"fill-red-900 animate-pulse"}):t(j,{onClick:w,className:"fill-red-900"})}),t("img",{src:o})]}),t("button",{onClick:D,children:"Remove favorite"}),t("h2",{className:"text-2xl pt-4 pb-4",children:i}),s("p",{className:"text-xl pb-4",children:["Price: ",s("span",{className:"text-xl pl-4 text-orange-800",children:[r,".00 $"]})]}),s("p",{className:"text-xl pb-4",children:["Type: ",t("span",{className:"text-xl pl-4 text-zinc-900",children:p})]}),s("p",{className:"text-xl pb-4",children:["Availability:",t("span",{className:`text-xl pl-4 ${c>0?" text-green-700":" text-red-700"}`,children:c>0?"In stock!":"Out of stock"})]}),s("p",{className:"text-xl pb-4",children:["Quantity: ",t("span",{className:"text-xl pl-4 text-zinc-900"})]}),t("button",{className:"p-4 pl-8 pr-8 mb-4 text-xl bg-yellow-900 text-yellow-100",onClick:e=>{C(e,m),x(1)},children:"Add to Cart"}),t("button",{className:"p-4 pl-8 pr-8 mb-4 text-xl bg-yellow-900 text-yellow-100",children:"Buy it now"}),t("button",{className:`${f&&"bg-yellow-700"} p-4 pl-8 pr-8 mb-4 text-xl bg-yellow-900 text-yellow-100 `,onClick:v,children:"Product description"}),t("p",{className:`${f&&" h-[200px]"} overflow-hidden transition-[height] duration-1000 ease-in-out h-0`,children:n})]})}function W(h){a.useState([]);const[o,l]=a.useState(!1),{item:i}=q(),[r,p]=a.useState([]);return a.useEffect(()=>{(async()=>{const n=[];l(!0);const d=E(F,"products"),u=H(d,L("name","==",`${i}`));(await z(u)).forEach(x=>n.push(x.data())),p(n),l(!1)})()},[]),s("section",{children:[t(R,{section:"Product",link:"/shop",routeName:"All",item:i}),t("div",{className:"p-12 pt-20 justify-center grid grid-cols-1 grid-rows-1",children:o?t($,{}):r.map((c,n)=>a.createElement(O,{...c,key:n}))})]})}export{W as default};
