import{j as e}from"./index-eb9dc88a.js";function d({boxCustom:a="",titleCustom:n="",description:l,title:r,col1:t="rgba(26,21,76,0.2)",col2:o="rgba(23,27,80,0.8)",children:x}){return e.jsxs("div",{className:`text-primary-dark flex flex-col gap-6 2xl:gap-8 3xl:gap-10 max-w-[95%] md:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl shadow-contactInner drop-shadow-homeCard  items-start backdrop-blur-sm sm:backdrop-blur-none pl-8 sm:pl-16 md:pl-44 xl:pl-56 2xl:pl-80 pr-8 sm:pr-16 xl:pr-24 py-8 sm:py-14 xl:py-20 3xl:py-24 
    rounded-r-[8rem] border-secondary-dark/15 border-8 border-l-0 animate-fade-right animate-duration-1000 animate-ease-in-out ${a}`,style:{background:`linear-gradient(45deg, ${t}, ${o} 70%)`},children:[e.jsx("h1",{className:`text-xl sm:text-3xl xl:text-4xl 3xl:text-5xl leading-snug xl:leading-snug 2xl:leading-snug 3xl:leading-snug font-raleway font-bold ${n}`,children:r}),x,l&&e.jsx("h2",{className:"flex justify-evenly xl:text-xl 3xl:text-2xl w-full font-exo ",children:l})]})}function c({image:a,mobileImage:n,alt:l}){return e.jsxs(e.Fragment,{children:[e.jsx("img",{className:"hidden md:block foreground2 pointer-events-none select-none",src:a,alt:"Background Bottom Rectangle"}),e.jsx("img",{className:"md:hidden foreground2 pointer-events-none select-none",src:n,alt:"Background Bottom Rectangle"})]})}function g({image:a}){return e.jsx("img",{className:"foreground3 pointer-events-none select-none",src:a,alt:"Background Top Rectangle"})}function i({children:a,customClass:n}){const l=n==null?void 0:n.includes("gap");return e.jsx("div",{className:`flex flex-col translate-y-11 w-full ${l?"":"gap-14"} ${n}`,children:a})}export{c as B,i as H,g as a,d as b};