import{r as a,W as R,c as H,j as l,a as t,A as L,b as z,_ as w,d as D,R as v,P as C,f as S,u as F,H as O,L as T}from"./index-e36cd0cd.js";const N=async p=>{const c=[],n=w(D,"products"),s=v(n,C("name","==",`${p}`));return(await S(s)).forEach(i=>c.push(i.data())),c};function W(p){const{img:c,id:n,name:s,price:d,type:i,stock:r,description:o}=p,[u,h]=a.useState(!1),[f,x]=a.useState(1),[y,k]=a.useState(!1),g=a.useContext(R),A=a.useContext(H),b=()=>h(e=>!e),P=()=>k(e=>!e);function q(e){e.stopPropagation(),b(),N(s).then(m=>{g({type:"added",data:m,id:n})})}function $(e){e.stopPropagation(),b(),g({type:"remove",id:n})}function j(e,m){N(s).then(E=>{A({type:"ADD-TO-CART",id:n,quantity:m,data:E,name:s})})}return l("div",{className:"flex flex-col grow items-start justify-center bg-zinc-300",children:[l("div",{className:"relative",children:[t("span",{className:"absolute top-4 right-4 text-2xl",children:u?t(L,{className:"fill-red-900 animate-pulse"}):t(z,{onClick:q,className:"fill-red-900"})}),t("img",{src:c})]}),t("button",{onClick:$,children:"Remove favorite"}),t("h2",{className:"text-2xl pt-4 pb-4",children:s}),l("p",{className:"text-xl pb-4",children:["Price: ",l("span",{className:"text-xl pl-4 text-orange-800",children:[d,".00 $"]})]}),l("p",{className:"text-xl pb-4",children:["Type: ",t("span",{className:"text-xl pl-4 text-zinc-900",children:i})]}),l("p",{className:"text-xl pb-4",children:["Availability:",t("span",{className:`text-xl pl-4 ${r>0?" text-green-700":" text-red-700"}`,children:r>0?"In stock!":"Out of stock"})]}),l("p",{className:"text-xl pb-4",children:["Quantity: ",t("span",{className:"text-xl pl-4 text-zinc-900"})]}),t("button",{className:"p-4 pl-8 pr-8 mb-4 text-xl bg-yellow-900 text-yellow-100",onClick:e=>{j(e,f),x(1)},children:"Add to Cart"}),t("button",{className:"p-4 pl-8 pr-8 mb-4 text-xl bg-yellow-900 text-yellow-100",children:"Buy it now"}),t("button",{className:`${y&&"bg-yellow-700"} p-4 pl-8 pr-8 mb-4 text-xl bg-yellow-900 text-yellow-100 `,onClick:P,children:"Product description"}),t("p",{className:`${y&&" h-[200px]"} overflow-hidden transition-[height] duration-1000 ease-in-out h-0`,children:o})]})}function Q(p){a.useState([]);const[c,n]=a.useState(!1),{item:s}=F(),[d,i]=a.useState([]);return a.useEffect(()=>{(async()=>{const o=[];n(!0);const u=w(D,"products"),h=v(u,C("name","==",`${s}`));(await S(h)).forEach(x=>o.push(x.data())),i(o),n(!1)})()},[]),l("section",{children:[t(O,{section:"Product",link:"/shop",routeName:"All",item:s}),t("div",{className:"p-12 pt-20 justify-center grid grid-cols-1 grid-rows-1",children:c?t(T,{}):d.map((r,o)=>a.createElement(W,{...r,key:o}))})]})}export{Q as default};
