import{j as e,L as c,r as l,C as m,c as g,o as u,t as x}from"./index-e31663ee.js";import{B as p,a as h,H as f,b}from"./Hero-2a34ad0f.js";import{G as w}from"./GoodButton-38f5703e.js";import{S as j,G as y}from"./Section-c0e7daa2.js";const v="/assets/rectangleBottom-7309f1b9.svg",k="/assets/rectangleBottomMobile-f0ddd245.svg",z="/assets/rectangleTop-74a5c82b.svg",C="/assets/Arrow-1082ea5a.svg",N="/assets/arrowMobile-ad0c4bfe.svg",I="/assets/polmed3-b06f041b.mp4",B="/assets/background-92cf2b50.png",O="/assets/educationCard-4d134c33.png",T="/assets/oleje-b6b7aab8.png",E="/assets/narzedzia-000a489a.png";function n({image:t,buttonIcon:a,title:o,description:s,gradient:r,shadow:d,linkHref:i}){return e.jsxs("div",{className:"flex flex-col max-w-lg 3xl:max-w-[30rem]  gap-12 py-12 px-8 rounded-[4rem] transition-all duration-500 ease-in-out relative hover:shadow-homeCard [&_.mainImage]:hover:bottom-4 [&_.mainImage]:hover:right-2",style:{background:`linear-gradient(-60deg, ${r}, transparent 60%)`},children:[e.jsx(c,{to:i,className:"w-4/5 self-center hover:drop-shadow-homeCard transition-all duration-500 ease-in-out",children:e.jsx("img",{className:"mainImage object-cover rounded-3xl transition-all duration-500 ease-in-out relative bottom-0 right-0",style:{filter:`drop-shadow(0 6px 6px ${d})`},src:t,alt:""})}),e.jsxs("div",{className:"flex flex-wrap gap-3 sm:gap-6 w-fit",children:[e.jsx("h3",{className:"text-xl sm:text-2xl font-exo font-bold leading-normal",children:o}),e.jsx("p",{className:"text-base md:text-lg 3xl:text-xl leading-normal",children:s})]}),e.jsx(w,{link:i,icon:a})]})}const H="/assets/circle1-634eb27e.svg",P="/assets/circle2-f9aebe48.svg",S="/assets/circle3-3bc1e509.svg";function M({fallbackImage:t,video:a}){const o=l.useRef(null);return l.useEffect(()=>{const s=o.current,r=()=>{s.play()};if(s)return s.addEventListener("canplaythrough",r),()=>{s.removeEventListener("canplaythrough",r)}},[a]),e.jsxs("video",{ref:o,loop:!0,muted:!0,playsInline:!0,autoPlay:!0,preload:"auto",className:"background",children:[e.jsx("source",{src:a,type:"video/mp4"}),e.jsx("img",{src:t,className:"background brightness-75",alt:"Fallback Image"}),"Your browser does not support the video tag."]})}function L(){const t=l.useRef(null),a=()=>t.current.scrollIntoView({behavior:"smooth",block:"start"});return e.jsxs(e.Fragment,{children:[e.jsxs("header",{children:[e.jsx(M,{fallbackImage:B,video:I}),e.jsx(p,{image:v,mobileImage:k}),e.jsx(h,{image:z}),e.jsxs(f,{children:[e.jsxs(b,{boxCustom:"items-center",titleCustom:" text-center",title:"Profesjonalne wsparcie dla Twojego biznesu i edukacji!",col1:"rgba(26,21,76,0.2)",col2:"rgba(23,27,80,0.8)",children:[e.jsx("hr",{className:"hidden sm:flex h-2 2xl:h-3 w-3/4 rounded-[100%] bg-gradient-to-b from-primary-dark to-transparent drop-shadow-whiteText"}),e.jsxs("div",{className:"hidden sm:flex justify-evenly xl:text-xl 3xl:text-2xl w-full font-exo ",children:[e.jsx("h2",{className:"animate-fade-down animate-delay-[500ms] animate-duration-1000",children:"Technologia"}),e.jsx("h2",{className:"animate-fade-down animate-delay-[1000ms] animate-duration-1000",children:"Badania"}),e.jsx("h2",{className:"animate-fade-down animate-delay-[1500ms] animate-duration-1000",children:"Przemysł"})]}),e.jsx("img",{src:C,className:"hidden lg:flex top-[50%] -translate-y-1/2 left-[107%] w-12 sm:w-32 translate-x-1/2 rounded-tl-3xl rounded-tr-3xl rounded-bl-[50px] rounded-br-[50px]  bg-gradient-to-tr border-blue-900/15 shadow-navigation from-indigo-950/55 to-blue-950/5 px-8 py-6 absolute cursor-pointer hover:scale-105 transition-all ease-in-out duration-500",alt:"",onClick:a})]}),e.jsxs("div",{onClick:a,className:"sm:hidden min-w-[60%] relative text-secondary-dark bg-gradient-to-l from-primary-dark to-primary-dark/95 rounded-l-[8rem] w-fit self-end py-8 px-8 border-8 border-[#00000049] backdrop-blur-lg  border-r-0 animate-fade-left animate-duration-1000 animate-ease-in-out",children:[e.jsx("img",{className:"sm:hidden absolute right-full top-12 animate-fade-down animate-delay-500",src:N,alt:""}),e.jsx("h2",{className:"text-lg font-exo font-bold text-center",children:"Odkryj nasze możliwości"})]}),e.jsx(m,{className:"flex sm:hidden self-end relative right-16"})]})]}),e.jsxs(j,{customClass:"md:pt-40 bg-gradient-to-b from-[#040030] to-[#0c0739]",customClassInner:"xl:w-full",ref:t,children:[e.jsx("img",{src:H,alt:"",className:"w-12 md:w-24 opacity-50  absolute left-0 top-[20%] md:top-[25%]"}),e.jsx("img",{src:P,alt:"",className:"w-24 md:w-44 opacity-50 absolute right-0 top-[50%]"}),e.jsx("img",{src:S,alt:"",className:"w-16 md:w-36 absolute opacity-50 left-0 top-[75%]"}),e.jsx(y,{customClass:"hidden sm:flex  sm:max-w-[85%]",children:"Odkryj nasze możliwości"}),e.jsxs("div",{className:"w-full h-fit flex flex-wrap gap-24 2xl:gap-24 justify-evenly items-start",children:[e.jsx(n,{image:O,buttonIcon:g,title:"Stanowiska dydaktyczno-laboratoryjne",description:`Praktyczne i angażujące systemy dydaktyczne z zakresu technologii
          samochodowych.`,gradient:"#113C63",shadow:"rgba(117,158,255,0.5)",linkHref:"/Edukacja_i_badania"}),e.jsx(n,{image:T,buttonIcon:u,title:"Oleje posmażalnicze (UCO)",description:"Odbiór, handel i magazynowanie olejów posmażalniczych (UCO) - kompleksowa usługa dostaw i odbiorów olejów dla przemysłu i gastronomii.",gradient:"#2C3C66",shadow:"rgba(73, 91, 173, 0.5)",linkHref:"/Oleje_UCO"}),e.jsx(n,{image:E,buttonIcon:x,title:"Narzędzia przemysłowe",description:"Kompleksowe zaopatrzenie przedsiębiorstw w różne rodzaje narzędzi przemysłowych.",gradient:"#115A55",shadow:"rgba(117, 255, 227, 0.5)",linkHref:"/Narzedzia"})]})]})]})}export{L as default};
