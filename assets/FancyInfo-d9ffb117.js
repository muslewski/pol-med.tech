import{j as e}from"./index-2fcb86e7.js";import{G as m}from"./GoodButton-45df2d5b.js";function p({className:o,image:s,alt:t="",title:x,description:d,col1:a,col2:n,buttonIcon:r,buttonIconAlt:c="",link:i,isBox:l=!1}){return e.jsxs("div",{className:`flex flex-col gap-12 5xl:max-w-[45%] rounded-3xl ${o}`,style:{background:l?`linear-gradient(45deg, ${n}, transparent)`:"none",padding:l?"2rem":"0",boxShadow:l?`15px 15px 20px -19px ${a}`:"none"},children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-6 items-center [&_hr]:hover:shadow-contactInner",children:[s&&e.jsx("img",{className:"h-24 sm:h-28",src:s,alt:t}),e.jsxs("div",{className:"flex flex-col gap-3 min-h-full",children:[e.jsx("h3",{className:"font-exo font-semibold text-xl 2xl:text-[1.6rem]",children:x}),e.jsx("hr",{className:"h-1.5 w-full rounded-full border-none transition-shadow duration-200",style:{background:`linear-gradient(to right, ${a}, ${n})`}}),e.jsx("p",{className:"font-raleway text-lg 2xl:text-xl",children:d})]})]}),r&&e.jsx(m,{icon:r,iconAlt:c,link:i,className:"scale-90 hover:scale-95"})]})}export{p as F};