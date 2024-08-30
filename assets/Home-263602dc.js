import{u as c,j as e,L as u,r as i,C as g,c as h,o as f,t as b}from"./index-2fcb86e7.js";import{B as p,a as _,H as j,b as w}from"./Hero-e62a05f4.js";import{G as v}from"./GoodButton-45df2d5b.js";import{G as k}from"./GlowingTitle-bafa5366.js";import{S as y}from"./Section-d2309113.js";const N="/assets/rectangleBottom-7309f1b9.svg",C="/assets/rectangleBottomMobile-f0ddd245.svg",I="/assets/rectangleTop-74a5c82b.svg",B="/assets/Arrow-1082ea5a.svg",A="/assets/arrowMobile-ad0c4bfe.svg",H="/assets/polmed8-d0666280.mp4",T="/assets/background-92cf2b50.png",E="/assets/educationCard-4d134c33.png",M="/assets/oleje-b6b7aab8.png",O="/assets/narzedzia-000a489a.png";function l({image:a,buttonIcon:t,buttonIconAlt:s="",title:r,description:o,gradient:n,shadow:m,linkHref:d}){const{t:x}=c("Others");return e.jsxs("div",{className:"flex flex-col max-w-lg 3xl:max-w-[30rem]  gap-12 py-12 px-8 rounded-[4rem] transition-all duration-500 ease-in-out relative hover:shadow-homeCard [&_.mainImage]:hover:bottom-4 [&_.mainImage]:hover:right-2",style:{background:`linear-gradient(-60deg, ${n}, transparent 60%)`},children:[e.jsx(u,{to:d,className:"w-4/5 self-center hover:drop-shadow-homeCard transition-all duration-500 ease-in-out",children:e.jsx("img",{className:"mainImage object-cover rounded-3xl transition-all duration-500 ease-in-out relative bottom-0 right-0",style:{filter:`drop-shadow(0 6px 6px ${m})`},src:a,alt:`${x("section_card_illustration_alt")} ${r}`})}),e.jsxs("div",{className:"flex flex-wrap gap-3 sm:gap-6 w-fit",children:[e.jsx("h3",{className:"text-xl sm:text-2xl font-exo font-bold leading-normal",children:r}),e.jsx("p",{className:"text-base md:text-lg 3xl:text-xl leading-normal",children:o})]}),e.jsx(v,{link:d,icon:t,iconAlt:s})]})}const R="/assets/circle1-634eb27e.svg",S="/assets/circle2-f9aebe48.svg",$="/assets/circle3-3bc1e509.svg";function z({fallbackImage:a,video:t}){const{t:s}=c("Others"),r=i.useRef(null);return i.useEffect(()=>{const o=r.current,n=()=>{o.play()};if(o)return o.addEventListener("canplaythrough",n),()=>{o.removeEventListener("canplaythrough",n)}},[t]),e.jsxs("video",{ref:r,loop:!0,muted:!0,playsInline:!0,autoPlay:!0,preload:"auto",className:"background",children:[e.jsx("source",{src:t,type:"video/mp4"}),e.jsx("img",{src:a,className:"background brightness-75",alt:s("background_video_fallback_alt")}),s("background_video_fallback_text")]})}function F(){const{t:a}=c("Home"),t=i.useRef(null),s=()=>t.current.scrollIntoView({behavior:"smooth",block:"start"});return e.jsxs(e.Fragment,{children:[e.jsxs("header",{children:[e.jsx(z,{fallbackImage:T,video:H}),e.jsx(p,{image:N,mobileImage:C}),e.jsx(_,{image:I}),e.jsxs(j,{children:[e.jsxs(w,{boxCustom:"items-center",titleCustom:" text-center",title:a("hero_title"),col1:"rgba(26,21,76,0.2)",col2:"rgba(23,27,80,0.8)",children:[e.jsx("hr",{className:"hidden sm:flex h-2 2xl:h-3 w-3/4 rounded-[100%] bg-gradient-to-b from-primary-dark to-transparent drop-shadow-whiteText"}),e.jsxs("div",{className:"hidden sm:flex justify-evenly xl:text-xl 3xl:text-2xl w-full font-exo ",children:[e.jsx("h2",{className:"animate-fade-down animate-delay-[500ms] animate-duration-1000",children:a("hero_characeristic_1")}),e.jsx("h2",{className:"animate-fade-down animate-delay-[1000ms] animate-duration-1000",children:a("hero_characeristic_2")}),e.jsx("h2",{className:"animate-fade-down animate-delay-[1500ms] animate-duration-1000",children:a("hero_characeristic_3")})]}),e.jsx("img",{src:B,className:"hidden lg:flex top-[50%] -translate-y-1/2 left-[107%] w-12 sm:w-32 translate-x-1/2 rounded-tl-3xl rounded-tr-3xl rounded-bl-[50px] rounded-br-[50px]  bg-gradient-to-tr border-blue-900/15 shadow-navigation from-indigo-950/55 to-blue-950/5 px-8 py-6 absolute cursor-pointer hover:scale-105 transition-all ease-in-out duration-500",alt:a("alt_scroll_down"),onClick:s})]}),e.jsxs("div",{onClick:s,className:"sm:hidden min-w-[60%] relative text-secondary-dark bg-gradient-to-l from-primary-dark to-primary-dark/95 rounded-l-[8rem] w-fit self-end py-8 px-8 border-8 border-[#00000049] backdrop-blur-lg  border-r-0 animate-fade-left animate-duration-1000 animate-ease-in-out",children:[e.jsx("img",{className:"sm:hidden absolute right-full top-12 animate-fade-down animate-delay-500",src:A,alt:a("alt_scroll_down")}),e.jsx("h2",{className:"text-lg font-exo font-bold text-center",children:a("section_title_1")})]}),e.jsx(g,{className:"flex sm:hidden self-end relative right-16"})]})]}),e.jsxs(y,{customClass:"md:pt-40 bg-gradient-to-b from-[#040030] to-[#0c0739]",customClassInner:"xl:w-full",ref:t,children:[e.jsx("img",{src:R,alt:"",className:"w-12 md:w-24 opacity-50  absolute left-0 top-[20%] md:top-[25%]"}),e.jsx("img",{src:S,alt:"",className:"w-24 md:w-44 opacity-50 absolute right-0 top-[50%]"}),e.jsx("img",{src:$,alt:"",className:"w-16 md:w-36 absolute opacity-50 left-0 top-[75%]"}),e.jsx(k,{customClass:"hidden sm:flex  sm:max-w-[85%]",children:a("section_title_1")}),e.jsxs("div",{className:"w-full h-fit flex flex-wrap gap-24 2xl:gap-24 justify-evenly items-start",children:[e.jsx(l,{image:E,buttonIcon:h,buttonIconAlt:a("card_alt_1"),title:a("card_1_title"),description:a("card_1_description"),gradient:"#113C63",shadow:"rgba(117,158,255,0.5)",linkHref:"/Edukacja_i_badania"}),e.jsx(l,{image:M,buttonIcon:f,buttonIconAlt:a("card_alt_2"),title:a("card_2_title"),description:a("card_2_description"),gradient:"#2C3C66",shadow:"rgba(73, 91, 173, 0.5)",linkHref:"/Oleje_UCO"}),e.jsx(l,{image:O,buttonIcon:b,buttonIconAlt:a("card_alt_3"),title:a("card_3_title"),description:a("card_3_description"),gradient:"#115A55",shadow:"rgba(117, 255, 227, 0.5)",linkHref:"/Narzedzia"})]})]})]})}export{F as default};