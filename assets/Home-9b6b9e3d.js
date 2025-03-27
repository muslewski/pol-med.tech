import{u as n,j as e,L as x,r as d,C as u,c as f,o as h,t as b}from"./index-811c1f67.js";import{B as p,a as w,H as j,b as _}from"./Hero-7755d928.js";import{G as v}from"./GoodButton-f323577a.js";import{G as y}from"./GlowingTitle-83d39007.js";import{S as k}from"./Section-58626589.js";const N="/assets/rectangleBottom-7309f1b9.svg",C="/assets/rectangleBottomMobile-f0ddd245.svg",I="/assets/rectangleTop-74a5c82b.svg",B="/assets/Arrow-1082ea5a.svg",z="/assets/arrowMobile-ad0c4bfe.svg",A="/assets/polmed8-d0666280.mp4",H="/assets/background-92cf2b50.png",T="/assets/educationCard-4d134c33.png",E="/assets/oleje-b6b7aab8.png",O="/assets/narzedzia-000a489a.png";function i({image:t,buttonIcon:a,buttonIconAlt:r="",title:s,description:o,gradient:l,shadow:m,linkHref:c}){const{t:g}=n("Others");return e.jsxs("div",{className:"flex flex-col max-w-lg 3xl:max-w-[30rem]  gap-12 py-12 px-8 rounded-[4rem] transition-all duration-500 ease-in-out relative hover:shadow-homeCard [&_.mainImage]:hover:bottom-4 [&_.mainImage]:hover:right-2",style:{background:`linear-gradient(-60deg, ${l}, transparent 60%)`},children:[e.jsx(x,{to:c,className:"w-4/5 self-center hover:drop-shadow-homeCard transition-all duration-500 ease-in-out",children:e.jsx("img",{className:"mainImage object-cover rounded-3xl transition-all duration-500 ease-in-out relative bottom-0 right-0",style:{filter:`drop-shadow(0 6px 6px ${m})`},src:t,alt:`${g("section_card_illustration_alt")} ${s}`})}),e.jsxs("div",{className:"flex flex-wrap gap-3 sm:gap-6 w-fit",children:[e.jsx("h3",{className:"text-xl sm:text-2xl font-exo font-bold leading-normal",children:s}),e.jsx("p",{className:"text-base md:text-lg 3xl:text-xl leading-normal",children:o})]}),e.jsx(v,{link:c,icon:a,iconAlt:r})]})}const M="/assets/circle1-634eb27e.svg",R="/assets/circle2-f9aebe48.svg",S="/assets/circle3-3bc1e509.svg";function $({fallbackImage:t,video:a}){const{t:r}=n("Others"),s=d.useRef(null);return d.useEffect(()=>{const o=s.current,l=()=>{o.play()};if(o)return o.addEventListener("canplaythrough",l),()=>{o.removeEventListener("canplaythrough",l)}},[a]),e.jsxs("video",{ref:s,loop:!0,muted:!0,playsInline:!0,autoPlay:!0,preload:"auto",className:"background",children:[e.jsx("source",{src:a,type:"video/mp4"}),e.jsx("img",{src:t,className:"background brightness-75",alt:r("background_video_fallback_alt")}),r("background_video_fallback_text")]})}const G="/assets/godlo-1ca8ee99.png",L="/assets/redcert-bb22ff6e.png";function q(){const{t}=n("Home"),{t:a}=n("Oils"),r=d.useRef(null),s=()=>r.current.scrollIntoView({behavior:"smooth",block:"start"});return e.jsxs(e.Fragment,{children:[e.jsxs("header",{children:[e.jsx($,{fallbackImage:H,video:A}),e.jsx(p,{image:N,mobileImage:C}),e.jsx(w,{image:I}),e.jsxs(j,{children:[e.jsxs(_,{boxCustom:"items-center",titleCustom:" text-center",title:t("hero_title"),col1:"rgba(26,21,76,0.2)",col2:"rgba(23,27,80,0.8)",children:[e.jsx("hr",{className:"hidden sm:flex h-2 2xl:h-3 w-3/4 rounded-[100%] bg-gradient-to-b from-primary-dark to-transparent drop-shadow-whiteText"}),e.jsxs("div",{className:"hidden sm:flex justify-evenly xl:text-xl 3xl:text-2xl w-full font-exo ",children:[e.jsx("h2",{className:"animate-fade-down animate-delay-[500ms] animate-duration-1000",children:t("hero_characeristic_1")}),e.jsx("h2",{className:"animate-fade-down animate-delay-[1000ms] animate-duration-1000",children:t("hero_characeristic_2")}),e.jsx("h2",{className:"animate-fade-down animate-delay-[1500ms] animate-duration-1000",children:t("hero_characeristic_3")})]}),e.jsx("img",{src:B,className:"hidden lg:flex top-[50%] -translate-y-1/2 left-[107%] w-12 sm:w-32 translate-x-1/2 rounded-tl-3xl rounded-tr-3xl rounded-bl-[50px] rounded-br-[50px]  bg-gradient-to-tr border-blue-900/15 shadow-navigation from-indigo-950/55 to-blue-950/5 px-8 py-6 absolute cursor-pointer hover:scale-105 transition-all ease-in-out duration-500",alt:t("alt_scroll_down"),onClick:s})]}),e.jsxs("div",{onClick:s,className:"sm:hidden min-w-[60%] relative text-secondary-dark bg-gradient-to-l from-primary-dark to-primary-dark/95 rounded-l-[8rem] w-fit self-end py-8 px-8 border-8 border-[#00000049] backdrop-blur-lg  border-r-0 animate-fade-left animate-duration-1000 animate-ease-in-out",children:[e.jsx("img",{className:"sm:hidden absolute right-full top-12 animate-fade-down animate-delay-500",src:z,alt:t("alt_scroll_down")}),e.jsx("h2",{className:"text-lg font-exo font-bold text-center",children:t("section_title_1")})]}),e.jsx(u,{className:"flex sm:hidden self-end relative right-16"}),e.jsx("a",{href:"/decyzja.pdf",target:"_blank",className:"[&_.makeBigger]:hover:scale-105 self-end hidden sm:block",children:e.jsxs("div",{className:" static sm:absolute right-0 -bottom-24 lg:-bottom-20 w-fit z-20 animate-fade-left animate-delay-300",children:[e.jsx("div",{className:"bg-white absolute right-[80%] top-0 h-full w-36 sm:w-48 flex items-center border-4 animate-delay-450 animate-fade-left rounded-l-full px-6",children:e.jsx("img",{className:"h-4/5 drop-shadow-redcert",src:G,alt:a("starosta_button")})}),e.jsx("div",{className:"makeBigger shadow-homeCard transition-transform text-white font-semibold font-exo relative z-10 text-lg lg:text-2xl border-4 border-secondary-dark/25 border-r-0 bg-[#1a144e] py-5 sm:py-6 rounded-l-full h-full px-12",children:a("starosta_button")})]})}),e.jsx("a",{href:"/certyfikat.pdf",target:"_blank",className:"[&_.makeBigger]:hover:scale-105 self-end hidden sm:block",children:e.jsxs("div",{className:"relative sm:absolute left-0 bottom-0 lg:-bottom-20 w-fit z-20 animate-fade-right",children:[e.jsx("div",{className:"bg-white absolute left-[85%] top-0 h-full w-40 sm:w-48 flex items-center justify-end border-4 animate-delay-150 animate-fade-right  rounded-r-full   px-6",children:e.jsx("img",{className:" h-3/4 drop-shadow-redcert",src:L,alt:a("redcert_button_alt")})}),e.jsx("div",{className:"makeBigger shadow-homeCard transition-transform text-white font-semibold font-exo relative z-10 text-lg lg:text-2xl border-4 border-secondary-dark/25 border-r-0 bg-[#1a144e] py-5 sm:py-6  rounded-r-full h-full  px-12",children:a("redcert_button")})]})})]})]}),e.jsxs(k,{customClass:"md:pt-40 bg-gradient-to-b from-[#040030] to-[#0c0739]",customClassInner:"xl:w-full",ref:r,children:[e.jsx("img",{src:M,alt:"",className:"w-12 md:w-24 opacity-50  absolute left-0 top-[20%] md:top-[25%]"}),e.jsx("img",{src:R,alt:"",className:"w-24 md:w-44 opacity-50 absolute right-0 top-[50%]"}),e.jsx("img",{src:S,alt:"",className:"w-16 md:w-36 absolute opacity-50 left-0 top-[75%]"}),e.jsx(y,{customClass:"hidden sm:flex  sm:max-w-[85%]",children:t("section_title_1")}),e.jsxs("div",{className:"w-full h-fit flex flex-wrap gap-24 2xl:gap-24 justify-evenly items-start",children:[e.jsx(i,{image:T,buttonIcon:f,buttonIconAlt:t("card_alt_1"),title:t("card_1_title"),description:t("card_1_description"),gradient:"#113C63",shadow:"rgba(117,158,255,0.5)",linkHref:"/Edukacja_i_badania"}),e.jsx(i,{image:E,buttonIcon:h,buttonIconAlt:t("card_alt_2"),title:t("card_2_title"),description:t("card_2_description"),gradient:"#2C3C66",shadow:"rgba(73, 91, 173, 0.5)",linkHref:"/Oleje_UCO"}),e.jsx(i,{image:O,buttonIcon:b,buttonIconAlt:t("card_alt_3"),title:t("card_3_title"),description:t("card_3_description"),gradient:"#115A55",shadow:"rgba(117, 255, 227, 0.5)",linkHref:"/Narzedzia"})]})]})]})}export{q as default};
