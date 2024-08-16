import{j as e,r as m,C as p,L as w}from"./index-e8e5206a.js";import{p as y}from"./platforma-8d60ecec.js";import{H as g,a as u}from"./Hero-274139e4.js";import{G as r}from"./GlowingTitle-c431651a.js";import{S as k}from"./Section-3348463c.js";import{B as h,a as x}from"./BgBottomVector-f782121c.js";import{B as j,a as z}from"./BackgroundTop-424d6326.js";import{F as t}from"./FancyInfo-dac08cf7.js";import{s as b,S as f}from"./stations-9cc645ac.js";import"./GoodButton-ff9df6d8.js";const v="/hackypotter.com/assets/backgroundEducation-b99270ee.webp",N="/hackypotter.com/assets/foreground-65054885.webp",S="/hackypotter.com/assets/rectangleBottom-65985d40.svg",B="/hackypotter.com/assets/rectangleBottomMobile-f0ddd245.svg",C="/hackypotter.com/assets/rectangleTop-d07c0186.svg",I="/hackypotter.com/assets/bottomVector-ce726897.svg",E="/hackypotter.com/assets/iconCarRepair-f4cf3e45.webp",F="/hackypotter.com/assets/iconCarDiagnostic-0366b183.webp",T="/hackypotter.com/assets/iconCarPart-4f443abf.webp",D="/hackypotter.com/assets/iconCarLesson-58d3e13f.webp",O="/hackypotter.com/assets/iconError-42d21685.webp",P="/hackypotter.com/assets/iconDiagnostic-2ea30153.webp",_="/hackypotter.com/assets/iconOscilloscope-2b28bad6.webp",V="/hackypotter.com/assets/iconPrototype-f1c4663c.webp";function L({image:a,alt:o}){return e.jsx("img",{className:"foreground2 carStationForeground pointer-events-none select-none",src:a,alt:o})}function n({id:a,icon:o,videoSrc:i,title:c,description:l,setVideo:d,currentVideoId:s}){return e.jsx("img",{className:`p-3 transition-all cursor-pointer ${s!=a?"hover:scale-110":"hover:brightness-90"}`,src:o,alt:"",draggable:"false",onClick:()=>d({id:a,videoSrc:i,title:c,description:l}),style:{height:s==a?"5.5rem":"4.5rem",opacity:s==a?"100%":"50%"}})}function Z(){const[a,o]=m.useState({id:0,videoSrc:"https://www.youtube.com/embed/oOiXQDaDouw?si=2cIdPL_K6nHYGzsT&enablejsapi=1",title:"Panel Symulacji Usterek",description:"To zaawansowany system umożliwiający generowanie typowych usterek sterowania silnikiem spalinowym dzięki któremu uczniowie nabywają praktyczne umiejętności implementacji procedur diagnostycznych do wykrywania i lokalizacji usterek z wykorzystaniem specjalistycznych urządzeń diagnostycznych."});return e.jsxs(e.Fragment,{children:[e.jsxs("header",{children:[e.jsx(h,{image:v,alt:"Background Image of Oil Containers"}),e.jsx(j,{image:S,mobileImage:B}),e.jsx(z,{image:C}),e.jsx(L,{image:N,alt:"Foreground Image of Car Station with Mechanics"}),e.jsx(x,{image:I}),e.jsxs(g,{customClass:"gap-28",children:[e.jsx(u,{boxCustom:"relative sm:bottom-0",title:"Stanowiska dydaktyczno-laboratoryjne",description:`To zintegrowane moduły dydaktyczne, które umożliwiają naukę o
            różnych aspektach technologii samochodowych w praktyczny i
            angażujący sposób.`,col1:"rgba(26,21,76,0.2)",col2:"rgba(12,37,90,0.7)"}),e.jsx(p,{customBackground:"bg-[rgba(7,33,54,0.75)]",className:"flex sm:hidden self-end relative right-16"})]})]}),e.jsxs(k,{customClass:"bg-gradient-to-b from-[#040E30] to-[#10295b]",children:[e.jsxs("div",{className:"flex flex-wrap gap-24",children:[e.jsx(r,{children:"Oferujemy"}),e.jsx(t,{image:E,alt:"Image of a man exploring car enginge",title:"Stanowiska edukacyjne",description:"Interaktywne stanowiska edukacyjne przeznaczone do nauki budowy, diagnostyki i obsługi pojazdów hybrydowych i elektrycznych.",col1:"#0493B2",col2:"rgba(87, 252, 255, 0.01)"}),e.jsx(t,{image:F,alt:"Image of a diagnostic tool for car",title:"Stanowiska badawcze",description:"Nowoczesne stanowiska badawcze wyposażone w najnowsze technologie, umożliwiające prowadzenie badań i testów różnych układów i podzespołów pojazdów.",col1:"#0473B2",col2:"rgba(87, 164, 255, 0.01)"}),e.jsx(t,{image:T,alt:"Image of car engine part",title:"Urządzenia i narzędzia kontrolno-pomiarowe",description:"Szeroki wybór wysoce precyzyjnych urządzeń i narzędzi do diagnostyki i serwisu pojazdów.",col1:"#3542b7",col2:"rgba(87, 94, 255, 0.01)"}),e.jsx(t,{image:D,alt:"Image of mechanic lesson",title:"Kursy i szkolenia",description:"Kompleksowe kursy i szkolenia z zakresu diagnostyki pokładowej i obsługi pojazdów hybrydowych i elektrycznych, z uprawnieniami do 1kV.",col1:"#4e2abb",col2:"rgba(161, 87, 255, 0.01)"})]}),e.jsxs("div",{className:"flex flex-col relative items-center gap-12 max-w-5xl px-0 sm:px-10 py-12 rounded-3xl sm:rounded-[5rem]",style:{background:"linear-gradient(-60deg, #15366dd3, transparent 60%)"},children:[e.jsx("div",{className:"border-4 border-primary-dark/50 rounded-3xl overflow-hidden shadow-navigation hover:drop-shadow-homeCard transition-all duration-500 ease-in-out",children:e.jsx("iframe",{className:"h-full sm:h-56 2lg:h-80",loading:"lazy",src:a.videoSrc,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})}),e.jsxs("div",{className:"flex flex-col gap-4 px-6 sm:px-0",children:[e.jsx("h3",{className:"font-exo font-semibold sm:text-center text-xl 2xl:text-[1.7rem]",children:a.title}),e.jsx("p",{className:"font-raleway text-lg 2xl:text-xl",children:a.description})]}),e.jsxs("div",{className:"flex flex-row flex-wrap sm:flex-row w-full md:h-32 items-center sm:w-3/4 justify-evenly gap-8 px-4 sm:px-8 sm:py-4 sm:bg-secondary-darkEducation/15 rounded-3xl sm:rounded-full sm:shadow-glowingTitle sm:border-4 border-secondary-dark/15",children:[e.jsx(n,{id:0,icon:O,videoSrc:"https://www.youtube.com/embed/oOiXQDaDouw?si=2cIdPL_K6nHYGzsT&enablejsapi=1",title:"Panel Symulacji Usterek",description:"To zaawansowany system umożliwiający generowanie typowych usterek sterowania silnikiem spalinowym dzięki któremu uczniowie nabywają praktyczne umiejętności implementacji procedur diagnostycznych do wykrywania i lokalizacji usterek z wykorzystaniem specjalistycznych urządzeń diagnostycznych.",setVideo:o,currentVideoId:a.id}),e.jsx(n,{id:1,icon:P,videoSrc:"https://www.youtube.com/embed/-lltFnhZlT0?si=QcgWmBxbtpyDVSbu&enablejsapi=1",title:"Procedury diagnostyki silnika",description:"Stanowisko dydaktyczne umożliwiające realizację procedur diagnostycznych oceny stanu technicznego silnika spalinowego z wykorzystaniem specjalistycznego oprzyrządowania oraz pozwalającego na szybką realizację lokalizacji i weryfikacji usterek.",setVideo:o,currentVideoId:a.id}),e.jsx(n,{id:2,icon:_,videoSrc:"https://www.youtube.com/embed/edlhrt-Ep-E?si=8gJdUgfBUNcTAOiA&enablejsapi=1",title:"Badania oscyloskopowe",description:"Stanowisko umożliwia wykorzystanie możliwości uniwersalnego oscyloskopu do weryfikacji parametrów pracy silnika spalinowego. Stanowi to podstawę realizowanych działań w zakresie identyfikacji stanu technicznego silnika spalinowego.",setVideo:o,currentVideoId:a.id})]})]}),e.jsxs("div",{className:"flex flex-col lg:flex-row items-center gap-16 sm:gap-24 max-w-6xl",children:[e.jsxs("div",{className:"flex flex-col-reverse sm:flex-col max-w-sm gap-4 items-center",children:[e.jsx(w,{to:"/pol-med.tech/Edukacja_i_badania/interaktywna_platforma_edukacyjna",className:"hover:scale-[102%] [&>img]:hover:border-[#9bf3ff]/75 [&>img]:hover:border-[4px] [&>img]:hover:drop-shadow-homeCard transition-transform ease-in-out",children:e.jsx("img",{className:"border-[6px] border-primary-dark/50 rounded-3xl shadow-navigation drop-shadow-none transition-all duration-500 ease-in-out",src:y,alt:""})}),e.jsx("span",{className:"font-exo font-medium text-xl bg-gradient-to-r from-[#37E7FF] to-[#7A87FF]   text-transparent bg-clip-text",children:"Nowość na rynku"})]}),e.jsx("div",{className:"w-fit flex gap-12 flex-col",children:e.jsx(t,{className:"5xl:max-w-full",alt:"Image of an interactive education platform",title:"Interaktywna platforma edukacyjna",description:"Nasze nowoczesne stanowisko dydaktyczne do mechatroniki samochodowej pozwala uczniom na naukę programowania i tworzenia map pracy silnika. Dzięki Uniwersalnemu Komputerowi Sterującemu, mogą eksperymentować z ustawieniami silnika i analizować dane z czujników, zdobywając praktyczne umiejętności potrzebne w zawodzie elektromechanika lub mechatronika samochodowego. Nowość na rynku!",col1:"#37E7FF",col2:"#7a87ff2b",buttonIcon:V,link:"/pol-med.tech/Edukacja_i_badania/interaktywna_platforma_edukacyjna"})})]}),e.jsxs("div",{className:"w-full flex flex-wrap  gap-24",children:[e.jsxs(r,{children:["Stanowiska"," ",e.jsx("span",{className:"hidden lg:inline",children:"demonstracyjno-pomiarowe"})]}),b.stations.map(i=>e.jsx(f,{image:i.images[0],...i},i.id))]}),e.jsx("h3",{children:"Oferowane przez nas produkty dostosowujemy do indywidualnych potrzeb i wymagań Zamawiających."})]})]})}export{Z as default};