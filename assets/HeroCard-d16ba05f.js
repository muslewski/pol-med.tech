import{u as g,j as e}from"./index-a07a80ae.js";const s=[{path:"/polmed-router/Edukacja_i_badania",color50:"rgba(4, 14, 48, 0.5)",color15:"rgba(4, 14, 48, 0.15)",color5:"rgba(4, 14, 48, 0.05)"},{path:"/polmed-router/Oleje_UCO",color50:"rgba(4, 14, 48, 0.5)",color15:"rgba(4, 14, 48, 0.15)",color5:"rgba(4, 14, 48, 0.05)"},{path:"/polmed-router/Narzedzia",color50:"rgba(4, 14, 48, 0.5)",color15:"rgba(4, 14, 48, 0.15)",color5:"rgba(4, 14, 48, 0.05)"},{path:"/polmed-router/O_nas",color50:"rgba(4, 14, 48, 0.5)",color15:"rgba(4, 14, 48, 0.15)",color5:"rgba(4, 14, 48, 0.05)"},{path:"/polmed-router/Kontakt",color50:"rgba(4, 14, 48, 0.5)",color15:"rgba(4, 14, 48, 0.15)",color5:"rgba(4, 14, 48, 0.05)"}];function p({boxCustom:t="",titleCustom:l="",title:c,children:n}){const d=g(),r=s.find(b=>b.path===d.pathname),o=r?r.color50:"rgba(4, 0, 48, 0.5)";r&&r.color15;const a=r?r.color5:"rgba(4, 0, 48, 0.05)";return e.jsxs("div",{className:`text-primary-dark flex flex-col gap-10 max-w-[60%]  items-start bg-gradient-to-br from-[${a}] to-[${o}] backdrop-blur-md pl-[16%] pr-24 py-24 
    rounded-r-[8rem] border-secondary-dark/15 border-8 border-l-0 animate-fade-right animate-duration-1000 animate-ease-in-out ${t}`,style:{background:`linear-gradient(45deg, ${a}, ${o})`},children:[e.jsx("h1",{className:`text-5xl leading-tight font-raleway font-bold ${l}`,children:c}),n]})}export{p as H};
