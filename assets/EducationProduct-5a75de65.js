import{u,r as l,j as s}from"./index-f386eb67.js";import{s as a,S as p}from"./stations-8f54089b.js";import{S as j}from"./Section-b8080c9f.js";import{i as v}from"./cart-8ff235e0.js";import{G as N}from"./GoodButton-49f39a2d.js";import{G as w}from"./GlowingTitle-50e1ee12.js";function I({setZoomIn:g,mainPhoto:r,setMainPhoto:c}){const{id:e}=u(),m=a.stations.length,x=a.stations[parseInt(e)+1<m?parseInt(e)+1:0],d=a.stations[parseInt(e)-1<0?m-1:parseInt(e)-1],[i,h]=l.useState(a.stations[e]);if(!i)return s.jsx("div",{className:"bg-red-200 min-h-screen",children:"Niestety nie znaleziono produktu, zobacz inne:"});const[o,f]=l.useState(i.images.slice(3));return l.useEffect(()=>{const t=a.stations[e];t&&(h(t),c(t.images[2]),f(t.images.slice(3)))},[e]),s.jsx(s.Fragment,{children:s.jsxs(j,{customClass:"pt-52 bg-gradient-to-br from-[#030b26] to-[#082752]",customClassInner:"gap-52",children:[s.jsxs("div",{className:"flex gap-24 flex-col 5xl:flex-row",children:[s.jsx("div",{className:" w-96 min-w-96 px-12 sm:px-0 h-fit self-center 5xl:self-start flex justify-center",children:s.jsx("img",{className:"mainPhoto rounded-lg cursor-zoom-in  hover:scale-105 transition-transform max-h-[26rem]",src:r,alt:"",onClick:()=>g(t=>!t)})}),o.length>0&&s.jsx("div",{className:"flex flex-wrap justify-center h-fit w-fit min-w-40 gap-12 px-6 sm:px-0",children:o.map((t,n)=>s.jsxs("div",{className:"relative z-10 [&>div]:hover:top-1 [&>div]:hover:-left-1",children:[s.jsx("img",{className:"h-28 sm:h-40 w-28 sm:w-40 object-cover cursor-pointer rounded-lg",draggable:"false",src:t,alt:"",onClick:()=>{c(t),f([...o.slice(0,n),r,...o.slice(n+1)])}},n),s.jsx("div",{className:"imgBackground pointer-events-none transition-all"})]}))}),s.jsxs("div",{className:"flex flex-col gap-12 max-w-2xl px-6 sm:px-0",children:[s.jsxs("div",{className:"flex flex-col gap-6",children:[s.jsx("h1",{className:"text-2xl sm:text-3xl 2xl:text-4xl font-exo font-bold",children:i.title}),s.jsx("p",{className:"text-lg sm:text-xl",children:i.description})]}),s.jsx(N,{link:"/pol-med.tech/Kontakt",customText:"Zapytaj o produkt",icon:v,className:"-ml-1"})]})]}),s.jsxs("div",{className:"flex flex-wrap w-full justify-start gap-24",children:[s.jsx(w,{children:" Zobacz również "}),s.jsx(p,{image:d.images[0],...d}),s.jsx(p,{image:x.images[0],...x})]})]})})}export{I as default};