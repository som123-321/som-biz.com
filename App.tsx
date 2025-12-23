{\rtf1\ansi\ansicpg932\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red0\green0\blue255;\red255\green255\blue254;
\red14\green110\blue109;\red144\green1\blue18;\red15\green112\blue1;\red191\green28\blue37;\red19\green118\blue70;
}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c50196\c0;\cssrgb\c80392\c19216\c19216;\cssrgb\c3529\c52549\c34510;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \cf5 \strokec5 React\cf0 \strokec2 , \{ useState, useEffect \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 'react'\cf0 \strokec2 ;\cb1 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 HashRouter\cf0 \strokec2 , \cf5 \strokec5 Routes\cf0 \strokec2 , \cf5 \strokec5 Route\cf0 \strokec2 , \cf5 \strokec5 Link\cf0 \strokec2 , useLocation \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 'react-router-dom'\cf0 \strokec2 ;\cb1 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb4   \cf5 \strokec5 Menu\cf0 \strokec2 , \cf5 \strokec5 X\cf0 \strokec2 , \cf5 \strokec5 ArrowRight\cf0 \strokec2 , \cf5 \strokec5 Phone\cf0 \strokec2 , \cf5 \strokec5 Mail\cf0 \strokec2 , \cf5 \strokec5 MapPin\cf0 \strokec2 , \cf5 \strokec5 ChevronRight\cf0 \strokec2 ,\cb1 \
\cb4   \cf5 \strokec5 Target\cf0 \strokec2 , \cf5 \strokec5 ShoppingCart\cf0 \strokec2 , \cf5 \strokec5 Crown\cf0 \strokec2 , \cf5 \strokec5 FlaskConical\cf0 \strokec2 , \cf5 \strokec5 Lock\cf0 \strokec2 , \cf5 \strokec5 Sun\cf0 \strokec2 , \cf5 \strokec5 Car\cf0 \strokec2 , \cf5 \strokec5 Factory\cf0 \strokec2 ,\cb1 \
\cb4   \cf5 \strokec5 History\cf0 \strokec2 , \cf5 \strokec5 Award\cf0 \strokec2 , \cf5 \strokec5 HeartHandshake\cf0 \strokec2 , \cf5 \strokec5 ChevronDown\cf0 \strokec2 , \cf5 \strokec5 Info\cf0 \strokec2 , \cf5 \strokec5 Building2\cf0 \strokec2 , \cf5 \strokec5 CheckCircle2\cf0 \cb1 \strokec2 \
\cb4 \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 'lucide-react'\cf0 \strokec2 ;\cb1 \
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 COMPANY_DATA\cf0 \strokec2 , \cf5 \strokec5 SERVICES\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 './constants'\cf0 \strokec2 ;\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb4 \strokec7 // Icon Helper\cf0 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 DynamicIcon\cf0 \strokec2  = (\{ name, className \}: \{ name: \cf3 \strokec3 string\cf0 \strokec2 ; className?: \cf3 \strokec3 string\cf0 \strokec2  \}) => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb4   \cf3 \strokec3 const\cf0 \strokec2  icons: \cf5 \strokec5 Record\cf0 \strokec2 <\cf3 \strokec3 string\cf0 \strokec2 , \cf3 \strokec3 any\cf0 \strokec2 > = \{\cb1 \
\cb4     \cf5 \strokec5 Target\cf0 \strokec2 , \cf5 \strokec5 Phone\cf0 \strokec2 , \cf5 \strokec5 ShoppingCart\cf0 \strokec2 , \cf5 \strokec5 Crown\cf0 \strokec2 , \cf5 \strokec5 FlaskConical\cf0 \strokec2 , \cf5 \strokec5 Lock\cf0 \strokec2 , \cf5 \strokec5 Sun\cf0 \strokec2 , \cf5 \strokec5 Car\cf0 \strokec2 , \cf5 \strokec5 Factory\cf0 \strokec2 ,\cb1 \
\cb4     \cf5 \strokec5 History\cf0 \strokec2 , \cf5 \strokec5 Award\cf0 \strokec2 , \cf5 \strokec5 HeartHandshake\cf0 \cb1 \strokec2 \
\cb4   \};\cb1 \
\cb4   \cf3 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 IconComponent\cf0 \strokec2  = icons[name] || \cf5 \strokec5 Target\cf0 \strokec2 ;\cb1 \
\cb4   \cf3 \strokec3 return\cf0 \strokec2  <\cf5 \strokec5 IconComponent\cf0 \strokec2  className=\{className\} />;\cb1 \
\cb4 \};\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb4 \strokec7 // --- Components ---\cf0 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 Navbar\cf0 \strokec2  = () => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb4   \cf3 \strokec3 const\cf0 \strokec2  [isOpen, setIsOpen] = useState(\cf3 \strokec3 false\cf0 \strokec2 );\cb1 \
\cb4   \cf3 \strokec3 const\cf0 \strokec2  location = useLocation();\cb1 \
\
\cb4   \cf3 \strokec3 const\cf0 \strokec2  navLinks = [\cb1 \
\cb4     \{ name: \cf6 \strokec6 '\uc0\u12507 \u12540 \u12512 '\cf0 \strokec2 , path: \cf6 \strokec6 '/'\cf0 \strokec2  \},\cb1 \
\cb4     \{ name: \cf6 \strokec6 '\uc0\u20107 \u26989 \u20869 \u23481 '\cf0 \strokec2 , path: \cf6 \strokec6 '/services'\cf0 \strokec2  \},\cb1 \
\cb4     \{ name: \cf6 \strokec6 '\uc0\u20250 \u31038 \u27010 \u35201 '\cf0 \strokec2 , path: \cf6 \strokec6 '/about'\cf0 \strokec2  \},\cb1 \
\cb4     \{ name: \cf6 \strokec6 '\uc0\u12362 \u21839 \u12356 \u21512 \u12431 \u12379 '\cf0 \strokec2 , path: \cf6 \strokec6 '/contact'\cf0 \strokec2  \},\cb1 \
\cb4   ];\cb1 \
\
\cb4   \cf3 \strokec3 return\cf0 \strokec2  (\cb1 \
\cb4     <nav className=\cf6 \strokec6 "fixed w-full z-50 bg-white/95 backdrop-blur-lg border-b border-slate-100"\cf0 \strokec2 >\cb1 \
\cb4       <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"\cf0 \strokec2 >\cb1 \
\cb4         <div className=\cf6 \strokec6 "flex justify-between h-16 sm:h-20 items-center"\cf0 \strokec2 >\cb1 \
\cb4           <\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/"\cf0 \strokec2  className=\cf6 \strokec6 "flex items-center group"\cf0 \strokec2 >\cb1 \
\cb4             <div className=\cf6 \strokec6 "flex flex-col"\cf0 \strokec2 >\cb1 \
\cb4               <span className=\cf6 \strokec6 "text-xl font-bold tracking-tighter text-slate-900 group-hover:text-orange-500 transition-colors"\cf0 \strokec2 >\cb1 \
\cb4                 \cf8 \strokec8 \uc0\u26666 \u24335 \u20250 \u31038 \cf5 \strokec5 SOM\cf0 \cb1 \strokec2 \
\cb4               </span>\cb1 \
\cb4               <span className=\cf6 \strokec6 "text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none"\cf0 \strokec2 >\cb1 \
\cb4                 \cf5 \strokec5 Sales\cf0 \strokec2  & \cf5 \strokec5 Life\cf0 \strokec2  \cf5 \strokec5 Innovation\cf0 \cb1 \strokec2 \
\cb4               </span>\cb1 \
\cb4             </div>\cb1 \
\cb4           </\cf5 \strokec5 Link\cf0 \strokec2 >\cb1 \
\
\cb4           <div className=\cf6 \strokec6 "hidden md:flex space-x-8 items-center"\cf0 \strokec2 >\cb1 \
\cb4             \{navLinks.map((link) => (\cb1 \
\cb4               <\cf5 \strokec5 Link\cf0 \cb1 \strokec2 \
\cb4                 key=\{link.path\}\cb1 \
\cb4                 to=\{link.path\}\cb1 \
\cb4                 className=\{\cf6 \strokec6 `text-sm font-bold transition-colors relative py-1 \cf0 \strokec2 $\{\cb1 \
\cb4                   location.pathname === link.path ? \cf6 \strokec6 'text-orange-600'\cf0 \strokec2  : \cf6 \strokec6 'text-slate-600 hover:text-orange-500'\cf0 \cb1 \strokec2 \
\cb4                 \}\cf6 \strokec6 `\cf0 \strokec2 \}\cb1 \
\cb4               >\cb1 \
\cb4                 \{link.name\}\cb1 \
\cb4                 \{location.pathname === link.path && (\cb1 \
\cb4                   <span className=\cf6 \strokec6 "absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full"\cf0 \strokec2 ></span>\cb1 \
\cb4                 )\}\cb1 \
\cb4               </\cf5 \strokec5 Link\cf0 \strokec2 >\cb1 \
\cb4             ))\}\cb1 \
\cb4             <\cf5 \strokec5 Link\cf0 \cb1 \strokec2 \
\cb4               to=\cf6 \strokec6 "/contact"\cf0 \cb1 \strokec2 \
\cb4               className=\cf6 \strokec6 "bg-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-all shadow-md hover:shadow-orange-200 transform hover:-translate-y-0.5"\cf0 \cb1 \strokec2 \
\cb4             >\cb1 \
\cb4               \cf8 \strokec8 \uc0\u28961 \u26009 \u30456 \u35527 \cf0 \cb1 \strokec2 \
\cb4             </\cf5 \strokec5 Link\cf0 \strokec2 >\cb1 \
\cb4           </div>\cb1 \
\
\cb4           <div className=\cf6 \strokec6 "md:hidden"\cf0 \strokec2 >\cb1 \
\cb4             <button onClick=\{() => setIsOpen(!isOpen)\} className=\cf6 \strokec6 "text-slate-600 hover:text-slate-900 focus:outline-none p-2"\cf0 \strokec2 >\cb1 \
\cb4               \{isOpen ? <\cf5 \strokec5 X\cf0 \strokec2  className=\cf6 \strokec6 "h-6 w-6"\cf0 \strokec2  /> : <\cf5 \strokec5 Menu\cf0 \strokec2  className=\cf6 \strokec6 "h-6 w-6"\cf0 \strokec2  />\}\cb1 \
\cb4             </button>\cb1 \
\cb4           </div>\cb1 \
\cb4         </div>\cb1 \
\cb4       </div>\cb1 \
\
\cb4       \{isOpen && (\cb1 \
\cb4         <div className=\cf6 \strokec6 "md:hidden bg-white border-t border-slate-100 absolute top-full left-0 w-full shadow-2xl animate-in slide-in-from-top duration-200"\cf0 \strokec2 >\cb1 \
\cb4           <div className=\cf6 \strokec6 "px-4 py-6 space-y-1"\cf0 \strokec2 >\cb1 \
\cb4             \{navLinks.map((link) => (\cb1 \
\cb4               <\cf5 \strokec5 Link\cf0 \cb1 \strokec2 \
\cb4                 key=\{link.path\}\cb1 \
\cb4                 to=\{link.path\}\cb1 \
\cb4                 onClick=\{() => setIsOpen(\cf3 \strokec3 false\cf0 \strokec2 )\}\cb1 \
\cb4                 className=\{\cf6 \strokec6 `block px-4 py-4 text-base font-bold rounded-xl transition-colors \cf0 \strokec2 $\{\cb1 \
\cb4                   location.pathname === link.path ? \cf6 \strokec6 'bg-orange-50 text-orange-600'\cf0 \strokec2  : \cf6 \strokec6 'text-slate-700 hover:bg-slate-50'\cf0 \cb1 \strokec2 \
\cb4                 \}\cf6 \strokec6 `\cf0 \strokec2 \}\cb1 \
\cb4               >\cb1 \
\cb4                 \{link.name\}\cb1 \
\cb4               </\cf5 \strokec5 Link\cf0 \strokec2 >\cb1 \
\cb4             ))\}\cb1 \
\cb4             <\cf5 \strokec5 Link\cf0 \cb1 \strokec2 \
\cb4               to=\cf6 \strokec6 "/contact"\cf0 \cb1 \strokec2 \
\cb4               onClick=\{() => setIsOpen(\cf3 \strokec3 false\cf0 \strokec2 )\}\cb1 \
\cb4               className=\cf6 \strokec6 "block w-full mt-4 text-center bg-orange-500 text-white px-4 py-5 rounded-xl font-bold shadow-sm"\cf0 \cb1 \strokec2 \
\cb4             >\cb1 \
\cb4               \cf8 \strokec8 \uc0\u12362 \u21839 \u12356 \u21512 \u12431 \u12379 \cf0 \cb1 \strokec2 \
\cb4             </\cf5 \strokec5 Link\cf0 \strokec2 >\cb1 \
\cb4           </div>\cb1 \
\cb4         </div>\cb1 \
\cb4       )\}\cb1 \
\cb4     </nav>\cb1 \
\cb4   );\cb1 \
\cb4 \};\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 Footer\cf0 \strokec2  = () => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb4   \cf3 \strokec3 return\cf0 \strokec2  (\cb1 \
\cb4     <footer className=\cf6 \strokec6 "bg-slate-900 text-slate-300 pt-20 pb-10"\cf0 \strokec2 >\cb1 \
\cb4       <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"\cf0 \strokec2 >\cb1 \
\cb4         <div className=\cf6 \strokec6 "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"\cf0 \strokec2 >\cb1 \
\cb4           <div className=\cf6 \strokec6 "space-y-6"\cf0 \strokec2 >\cb1 \
\cb4             <\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/"\cf0 \strokec2  className=\cf6 \strokec6 "flex items-center group"\cf0 \strokec2 >\cb1 \
\cb4               <span className=\cf6 \strokec6 "text-2xl font-bold tracking-tight text-white"\cf0 \strokec2  style=\{\{ color: \cf6 \strokec6 '#ffffff'\cf0 \strokec2  \}\}>\cb1 \
\cb4                 \cf8 \strokec8 \uc0\u26666 \u24335 \u20250 \u31038 \cf5 \strokec5 SOM\cf0 \cb1 \strokec2 \
\cb4               </span>\cb1 \
\cb4             </\cf5 \strokec5 Link\cf0 \strokec2 >\cb1 \
\cb4             <p className=\cf6 \strokec6 "text-sm leading-relaxed text-slate-400"\cf0 \strokec2 >\cb1 \
\cb4               \cf8 \strokec8 \uc0\u12300 \u20154 \u12301 \u12392 \u12300 \u31038 \u20250 \u12301 \u12434 \u26368 \u36969 \u21270 \u12377 \u12427 \u12290 \u12475 \u12540 \u12523 \u12473 \u12289 \u12501 \u12451 \u12483 \u12488 \u12493 \u12473 \u12289 \u20877 \u29983 \u12456 \u12493 \u12523 \u12462 \u12540 \u12290 \cf9 \strokec9 3\cf8 \strokec8 \uc0\u12388 \u12398 \u26609 \u12391 \u26410 \u26469 \u12434 \u20999 \u12426 \u25299 \u12365 \u12414 \u12377 \u12290 \cf0 \cb1 \strokec2 \
\cb4             </p>\cb1 \
\cb4           </div>\cb1 \
\
\cb4           <div>\cb1 \
\cb4             <h3 className=\cf6 \strokec6 "font-bold mb-6 text-sm uppercase tracking-widest text-white"\cf0 \strokec2  style=\{\{ color: \cf6 \strokec6 '#ffffff'\cf0 \strokec2  \}\}>\cf5 \strokec5 SERVICES\cf0 \strokec2 </h3>\cb1 \
\cb4             <ul className=\cf6 \strokec6 "space-y-4 text-sm font-medium"\cf0 \strokec2 >\cb1 \
\cb4               <li><\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/services"\cf0 \strokec2  className=\cf6 \strokec6 "hover:text-orange-400 transition-colors"\cf0 \strokec2 >\cf8 \strokec8 \uc0\u12475 \u12540 \u12523 \u12473 \u12539 \u12510 \u12540 \u12465 \u12486 \u12451 \u12531 \u12464 \cf0 \strokec2 </\cf5 \strokec5 Link\cf0 \strokec2 ></li>\cb1 \
\cb4               <li><\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/services"\cf0 \strokec2  className=\cf6 \strokec6 "hover:text-orange-400 transition-colors"\cf0 \strokec2 >\cf8 \strokec8 \uc0\u12497 \u12540 \u12477 \u12490 \u12523 \u12472 \u12512 \u20107 \u26989 \cf0 \strokec2 </\cf5 \strokec5 Link\cf0 \strokec2 ></li>\cb1 \
\cb4               <li><\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/services"\cf0 \strokec2  className=\cf6 \strokec6 "hover:text-orange-400 transition-colors"\cf0 \strokec2 >\cf8 \strokec8 \uc0\u20877 \u29983 \u12456 \u12493 \u12523 \u12462 \u12540 \u20107 \u26989 \cf0 \strokec2 </\cf5 \strokec5 Link\cf0 \strokec2 ></li>\cb1 \
\cb4             </ul>\cb1 \
\cb4           </div>\cb1 \
\
\cb4           <div>\cb1 \
\cb4             <h3 className=\cf6 \strokec6 "font-bold mb-6 text-sm uppercase tracking-widest text-white"\cf0 \strokec2  style=\{\{ color: \cf6 \strokec6 '#ffffff'\cf0 \strokec2  \}\}>\cf5 \strokec5 COMPANY\cf0 \strokec2 </h3>\cb1 \
\cb4             <ul className=\cf6 \strokec6 "space-y-4 text-sm font-medium"\cf0 \strokec2 >\cb1 \
\cb4               <li className=\cf6 \strokec6 "flex items-start space-x-3"\cf0 \strokec2 >\cb1 \
\cb4                 <\cf5 \strokec5 MapPin\cf0 \strokec2  className=\cf6 \strokec6 "h-5 w-5 text-orange-500 shrink-0"\cf0 \strokec2  />\cb1 \
\cb4                 <span className=\cf6 \strokec6 "text-white"\cf0 \strokec2  style=\{\{ color: \cf6 \strokec6 '#ffffff'\cf0 \strokec2  \}\}>\{\cf5 \strokec5 COMPANY_DATA\cf0 \strokec2 .address\}</span>\cb1 \
\cb4               </li>\cb1 \
\cb4               <li className=\cf6 \strokec6 "flex items-center space-x-3"\cf0 \strokec2 >\cb1 \
\cb4                 \{\cf7 \strokec7 /* Fixed Building2 icon */\cf0 \strokec2 \}\cb1 \
\cb4                 <\cf5 \strokec5 Building2\cf0 \strokec2  className=\cf6 \strokec6 "h-5 w-5 text-orange-500 shrink-0"\cf0 \strokec2  />\cb1 \
\cb4                 <span className=\cf6 \strokec6 "text-white"\cf0 \strokec2  style=\{\{ color: \cf6 \strokec6 '#ffffff'\cf0 \strokec2  \}\}>\cf8 \strokec8 \uc0\u20195 \u34920 \u21462 \u32224 \u24441 \u65306 \cf0 \strokec2 \{\cf5 \strokec5 COMPANY_DATA\cf0 \strokec2 .representative\}</span>\cb1 \
\cb4               </li>\cb1 \
\cb4             </ul>\cb1 \
\cb4           </div>\cb1 \
\
\cb4           <div>\cb1 \
\cb4             <h3 className=\cf6 \strokec6 "font-bold mb-6 text-sm uppercase tracking-widest text-white"\cf0 \strokec2  style=\{\{ color: \cf6 \strokec6 '#ffffff'\cf0 \strokec2  \}\}>\cf5 \strokec5 CONTACT\cf0 \strokec2 </h3>\cb1 \
\cb4             <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec2 >\cb1 \
\cb4               <p className=\cf6 \strokec6 "text-xs text-slate-500 font-bold uppercase tracking-wider"\cf0 \strokec2 >\cf5 \strokec5 Mail\cf0 \strokec2  \cf5 \strokec5 Address\cf0 \strokec2 </p>\cb1 \
\cb4               <p className=\cf6 \strokec6 "text-sm font-bold underline underline-offset-4 decoration-orange-500 text-white"\cf0 \strokec2  style=\{\{ color: \cf6 \strokec6 '#ffffff'\cf0 \strokec2  \}\}>info\cf8 \strokec8 @\cf0 \strokec2 som-biz.com</p>\cb1 \
\cb4             </div>\cb1 \
\cb4           </div>\cb1 \
\cb4         </div>\cb1 \
\cb4         <div className=\cf6 \strokec6 "pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest font-bold"\cf0 \strokec2 >\cb1 \
\cb4           <p className=\cf6 \strokec6 "text-white"\cf0 \strokec2  style=\{\{ color: \cf6 \strokec6 '#ffffff'\cf0 \strokec2  \}\}>\cf8 \strokec8 \'a9\cf0 \strokec2  \{\cf3 \strokec3 new\cf0 \strokec2  \cf5 \strokec5 Date\cf0 \strokec2 ().getFullYear()\} \cf8 \strokec8 \uc0\u26666 \u24335 \u20250 \u31038 \cf5 \strokec5 SOM\cf0 \strokec2  \cf5 \strokec5 All\cf0 \strokec2  rights reserved.</p>\cb1 \
\cb4           <div className=\cf6 \strokec6 "mt-4 sm:mt-0 space-x-6"\cf0 \strokec2 >\cb1 \
\cb4             <\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/contact"\cf0 \strokec2  className=\cf6 \strokec6 "hover:text-white transition-colors text-white"\cf0 \strokec2  style=\{\{ color: \cf6 \strokec6 '#ffffff'\cf0 \strokec2  \}\}>\cf5 \strokec5 Privacy\cf0 \strokec2  \cf5 \strokec5 Policy\cf0 \strokec2 </\cf5 \strokec5 Link\cf0 \strokec2 >\cb1 \
\cb4             <\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/about"\cf0 \strokec2  className=\cf6 \strokec6 "hover:text-white transition-colors text-white"\cf0 \strokec2  style=\{\{ color: \cf6 \strokec6 '#ffffff'\cf0 \strokec2  \}\}>\cf5 \strokec5 Sitemap\cf0 \strokec2 </\cf5 \strokec5 Link\cf0 \strokec2 >\cb1 \
\cb4           </div>\cb1 \
\cb4         </div>\cb1 \
\cb4       </div>\cb1 \
\cb4     </footer>\cb1 \
\cb4   );\cb1 \
\cb4 \};\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb4 \strokec7 // --- Pages ---\cf0 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 HomePage\cf0 \strokec2  = () => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb4   \cf3 \strokec3 return\cf0 \strokec2  (\cb1 \
\cb4     <div className=\cf6 \strokec6 "animate-in fade-in duration-1000"\cf0 \strokec2 >\cb1 \
\cb4       \{\cf7 \strokec7 /* Hero Section */\cf0 \strokec2 \}\cb1 \
\cb4       <section className=\cf6 \strokec6 "relative pt-32 pb-24 sm:pt-48 sm:pb-40 hero-mesh overflow-hidden"\cf0 \strokec2 >\cb1 \
\cb4         <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"\cf0 \strokec2 >\cb1 \
\cb4           <div className=\cf6 \strokec6 "max-w-4xl"\cf0 \strokec2 >\cb1 \
\cb4             <div className=\cf6 \strokec6 "inline-flex items-center space-x-2 bg-orange-100/50 text-orange-700 px-4 py-1.5 rounded-full text-xs font-black mb-8 border border-orange-200"\cf0 \strokec2 >\cb1 \
\cb4               <span className=\cf6 \strokec6 "relative flex h-2 w-2"\cf0 \strokec2 >\cb1 \
\cb4                 <span className=\cf6 \strokec6 "animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"\cf0 \strokec2 ></span>\cb1 \
\cb4                 <span className=\cf6 \strokec6 "relative inline-flex rounded-full h-2 w-2 bg-orange-500"\cf0 \strokec2 ></span>\cb1 \
\cb4               </span>\cb1 \
\cb4               <span className=\cf6 \strokec6 "uppercase tracking-[0.1em]"\cf0 \strokec2 >\cf5 \strokec5 Innovation\cf0 \strokec2  \cf3 \strokec3 for\cf0 \strokec2  \cf9 \strokec9 2025\cf0 \strokec2 </span>\cb1 \
\cb4             </div>\cb1 \
\cb4             <h1 className=\cf6 \strokec6 "text-5xl sm:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.05] mb-8"\cf0 \strokec2 >\cb1 \
\cb4               \cf8 \strokec8 \uc0\u21487 \u33021 \u24615 \u12434 \u12289 \cf0 \strokec2 <br />\cb1 \
\cb4               <span className=\cf6 \strokec6 "gradient-text"\cf0 \strokec2 >\cf8 \strokec8 \uc0\u20181 \u32068 \u12415 \u12395 \u12377 \u12427 \u12290 \cf0 \strokec2 </span>\cb1 \
\cb4             </h1>\cb1 \
\cb4             <p className=\cf6 \strokec6 "text-lg sm:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl font-medium"\cf0 \strokec2 >\cb1 \
\cb4               \cf8 \strokec8 \uc0\u12475 \u12540 \u12523 \u12473 \u12289 \u12501 \u12451 \u12483 \u12488 \u12493 \u12473 \u12289 \u20877 \u29983 \u12456 \u12493 \u12523 \u12462 \u12540 \u12290 \cf0 \strokec2 <br className=\cf6 \strokec6 "hidden sm:block"\cf0 \strokec2  />\cb1 \
\cb4               \cf8 \strokec8 \uc0\u31169 \u12383 \u12385 \u12364 \u36984 \u12435 \u12384 \cf9 \strokec9 3\cf8 \strokec8 \uc0\u12388 \u12398 \u36947 \u12399 \u12289 \u12377 \u12409 \u12390 \u12300 \u12424 \u12426 \u33391 \u12356 \u26126 \u26085 \u12301 \u12408 \u12392 \u32331 \u12364 \u12387 \u12390 \u12356 \u12414 \u12377 \u12290 \cf0 \cb1 \strokec2 \
\cb4             </p>\cb1 \
\cb4             <div className=\cf6 \strokec6 "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"\cf0 \strokec2 >\cb1 \
\cb4               <\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/services"\cf0 \strokec2  className=\cf6 \strokec6 "inline-flex items-center justify-center bg-slate-900 text-white px-10 py-5 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl text-lg"\cf0 \strokec2 >\cb1 \
\cb4                 \cf8 \strokec8 \uc0\u20107 \u26989 \u20869 \u23481 \u12434 \u35211 \u12427 \cf0 \strokec2  <\cf5 \strokec5 ArrowRight\cf0 \strokec2  className=\cf6 \strokec6 "ml-2 w-5 h-5"\cf0 \strokec2  />\cb1 \
\cb4               </\cf5 \strokec5 Link\cf0 \strokec2 >\cb1 \
\cb4               <\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/contact"\cf0 \strokec2  className=\cf6 \strokec6 "inline-flex items-center justify-center bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-full font-bold hover:border-orange-500 hover:text-orange-600 transition-all text-lg"\cf0 \strokec2 >\cb1 \
\cb4                 \cf8 \strokec8 \uc0\u28961 \u26009 \u30456 \u35527 \cf0 \cb1 \strokec2 \
\cb4               </\cf5 \strokec5 Link\cf0 \strokec2 >\cb1 \
\cb4             </div>\cb1 \
\cb4           </div>\cb1 \
\cb4         </div>\cb1 \
\cb4         <div className=\cf6 \strokec6 "absolute top-0 right-0 w-full h-full -z-10 pointer-events-none opacity-20 lg:opacity-40"\cf0 \strokec2 >\cb1 \
\cb4            <img src=\cf6 \strokec6 "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"\cf0 \strokec2  className=\cf6 \strokec6 "w-full h-full object-cover"\cf0 \strokec2  alt=\cf6 \strokec6 "Office Background"\cf0 \strokec2  />\cb1 \
\cb4            <div className=\cf6 \strokec6 "absolute inset-0 bg-gradient-to-l from-white/80 via-white/20 to-white"\cf0 \strokec2 ></div>\cb1 \
\cb4         </div>\cb1 \
\cb4       </section>\cb1 \
\
\cb4       \{\cf7 \strokec7 /* CTA Section */\cf0 \strokec2 \}\cb1 \
\cb4       <section className=\cf6 \strokec6 "py-24 bg-white"\cf0 \strokec2 >\cb1 \
\cb4         <div className=\cf6 \strokec6 "max-w-5xl mx-auto px-4 text-center"\cf0 \strokec2 >\cb1 \
\cb4           <div className=\cf6 \strokec6 "bg-orange-500 p-16 sm:p-24 rounded-[4rem] relative overflow-hidden shadow-2xl"\cf0 \strokec2 >\cb1 \
\cb4             <div className=\cf6 \strokec6 "relative z-10"\cf0 \strokec2 >\cb1 \
\cb4               <h2 className=\cf6 \strokec6 "text-3xl sm:text-5xl font-bold text-white mb-8 leading-tight"\cf0 \strokec2 >\cb1 \
\cb4                 \cf8 \strokec8 \uc0\u12354 \u12394 \u12383 \u12398 \u12499 \u12472 \u12493 \u12473 \u12398 \u21487 \u33021 \u24615 \u12434 \u12289 \cf0 \strokec2 <br />\cf8 \strokec8 \uc0\u20849 \u12395 \u35211 \u12388 \u12369 \u20986 \u12375 \u12414 \u12375 \u12423 \u12358 \u12290 \cf0 \cb1 \strokec2 \
\cb4               </h2>\cb1 \
\cb4               <\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/contact"\cf0 \strokec2  className=\cf6 \strokec6 "inline-flex items-center justify-center bg-white text-orange-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-slate-900 hover:text-white transition-all transform hover:-translate-y-1 shadow-xl"\cf0 \strokec2 >\cb1 \
\cb4                 \cf8 \strokec8 \uc0\u28961 \u26009 \u30456 \u35527 \u12434 \u30003 \u12375 \u36796 \u12416 \cf0 \strokec2  <\cf5 \strokec5 ArrowRight\cf0 \strokec2  className=\cf6 \strokec6 "ml-3 w-6 h-6"\cf0 \strokec2  />\cb1 \
\cb4               </\cf5 \strokec5 Link\cf0 \strokec2 >\cb1 \
\cb4             </div>\cb1 \
\cb4           </div>\cb1 \
\cb4         </div>\cb1 \
\cb4       </section>\cb1 \
\cb4     </div>\cb1 \
\cb4   );\cb1 \
\cb4 \};\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 AboutPage\cf0 \strokec2  = () => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb4   \cf3 \strokec3 return\cf0 \strokec2  (\cb1 \
\cb4     <div className=\cf6 \strokec6 "pt-24 animate-in fade-in slide-in-from-bottom-4 duration-700"\cf0 \strokec2 >\cb1 \
\cb4       <div className=\cf6 \strokec6 "bg-slate-50 py-32 mb-20 border-b border-slate-100"\cf0 \strokec2 >\cb1 \
\cb4         <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left"\cf0 \strokec2 >\cb1 \
\cb4           <h1 className=\cf6 \strokec6 "text-sm font-black text-orange-600 tracking-[0.5em] uppercase mb-6"\cf0 \strokec2 >\cf5 \strokec5 ABOUT\cf0 \strokec2  \cf5 \strokec5 SOM\cf0 \strokec2 </h1>\cb1 \
\cb4           <p className=\cf6 \strokec6 "text-5xl sm:text-7xl font-bold text-slate-900 mb-8"\cf0 \strokec2 >\cf8 \strokec8 \uc0\u20250 \u31038 \u27010 \u35201 \u12539 \u20195 \u34920 \u32057 \u20171 \cf0 \strokec2 </p>\cb1 \
\cb4           <div className=\cf6 \strokec6 "w-24 h-2 bg-orange-500 mx-auto lg:mx-0 rounded-full mb-10"\cf0 \strokec2 ></div>\cb1 \
\cb4           <p className=\cf6 \strokec6 "text-xl text-slate-500 font-medium max-w-2xl leading-relaxed"\cf0 \strokec2 >\cb1 \
\cb4             \cf5 \strokec5 SOM\cf8 \strokec8 \uc0\u12398 \u29702 \u24565 \u12289 \u27497 \u12415 \u12289 \u12362 \u12424 \u12403 \u20195 \u34920 \u12539 \u37325 \u37326 \u12364 \u25551 \u12367 \u12300 \u20154 \u12301 \u12434 \u20013 \u24515 \u12392 \u12375 \u12383 \u26410 \u26469 \u12408 \u12398 \u23637 \u26395 \u12434 \u12372 \u32057 \u20171 \u12375 \u12414 \u12377 \u12290 \cf0 \cb1 \strokec2 \
\cb4           </p>\cb1 \
\cb4         </div>\cb1 \
\cb4       </div>\cb1 \
\
\cb4       <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-40"\cf0 \strokec2 >\cb1 \
\cb4         \{\cf7 \strokec7 /* CEO Section */\cf0 \strokec2 \}\cb1 \
\cb4         <div className=\cf6 \strokec6 "grid grid-cols-1 lg:grid-cols-12 gap-16 mb-48 items-start"\cf0 \strokec2 >\cb1 \
\cb4           <div className=\cf6 \strokec6 "lg:col-span-5"\cf0 \strokec2 >\cb1 \
\cb4              <div className=\cf6 \strokec6 "rounded-[3rem] overflow-hidden shadow-2xl bg-white p-4 border border-slate-100"\cf0 \strokec2 >\cb1 \
\cb4                 <img \cb1 \
\cb4                   src=\cf6 \strokec6 "https://images.unsplash.com/photo-1519085185971-7ad0bb2fd27d?auto=format&fit=crop&q=80&w=1000"\cf0 \strokec2  \cb1 \
\cb4                   alt=\cf6 \strokec6 "Representative"\cf0 \strokec2  \cb1 \
\cb4                   className=\cf6 \strokec6 "rounded-[2.5rem] w-full aspect-[3/4] object-cover"\cf0 \cb1 \strokec2 \
\cb4                 />\cb1 \
\cb4                 <div className=\cf6 \strokec6 "mt-8 px-6 pb-6"\cf0 \strokec2 >\cb1 \
\cb4                   <p className=\cf6 \strokec6 "text-xs font-black text-orange-500 tracking-widest uppercase mb-1"\cf0 \strokec2 >\cf5 \strokec5 Representative\cf0 \strokec2  \cf5 \strokec5 Director\cf0 \strokec2 </p>\cb1 \
\cb4                   <h3 className=\cf6 \strokec6 "text-4xl font-bold text-slate-900"\cf0 \strokec2 >\{\cf5 \strokec5 COMPANY_DATA\cf0 \strokec2 .representative\}</h3>\cb1 \
\cb4                   <div className=\cf6 \strokec6 "h-0.5 w-12 bg-orange-500 my-4"\cf0 \strokec2 ></div>\cb1 \
\cb4                   \cb1 \
\cb4                   <div className=\cf6 \strokec6 "space-y-6"\cf0 \strokec2 >\cb1 \
\cb4                     <div className=\cf6 \strokec6 "space-y-4 pt-6 border-t border-slate-50"\cf0 \strokec2 >\cb1 \
\cb4                       <h4 className=\cf6 \strokec6 "text-xs font-black text-slate-900 uppercase flex items-center"\cf0 \strokec2 >\cb1 \
\cb4                         <\cf5 \strokec5 History\cf0 \strokec2  className=\cf6 \strokec6 "w-4 h-4 mr-2 text-orange-500"\cf0 \strokec2  /> \cf5 \strokec5 Career\cf0 \strokec2  \cf5 \strokec5 Path\cf0 \cb1 \strokec2 \
\cb4                       </h4>\cb1 \
\cb4                       <ul className=\cf6 \strokec6 "text-xs text-slate-500 space-y-2 font-bold"\cf0 \strokec2 >\cb1 \
\cb4                         <li className=\cf6 \strokec6 "flex justify-between"\cf0 \strokec2 ><span>\cf9 \strokec9 2008\cf0 \strokec2 </span> <span>\cf8 \strokec8 \uc0\u22823 \u25163 \u21830 \u31038 \u20837 \u31038 \cf0 \strokec2 </span></li>\cb1 \
\cb4                         <li className=\cf6 \strokec6 "flex justify-between"\cf0 \strokec2 ><span>\cf9 \strokec9 2012\cf0 \strokec2 </span> <span>\cf8 \strokec8 \uc0\u12510 \u12540 \u12465 \u12486 \u12451 \u12531 \u12464 \u12467 \u12531 \u12469 \u12523 \u12486 \u12451 \u12531 \u12464 \u26989 \cf0 \strokec2 </span></li>\cb1 \
\cb4                         <li className=\cf6 \strokec6 "flex justify-between"\cf0 \strokec2 ><span>\cf9 \strokec9 2016\cf0 \strokec2 </span> <span>\cf8 \strokec8 \uc0\u26666 \u24335 \u20250 \u31038 \cf5 \strokec5 SOM\cf0 \strokec2  \cf8 \strokec8 \uc0\u21109 \u26989 \cf0 \strokec2 </span></li>\cb1 \
\cb4                         <li className=\cf6 \strokec6 "flex justify-between"\cf0 \strokec2 ><span>\cf9 \strokec9 2021\cf0 \strokec2 </span> <span>\cf8 \strokec8 \uc0\u20877 \u29983 \u12456 \u12493 \u20107 \u26989 \u12434 \u32113 \u21512 \cf0 \strokec2 </span></li>\cb1 \
\cb4                       </ul>\cb1 \
\cb4                     </div>\cb1 \
\cb4                   </div>\cb1 \
\cb4                 </div>\cb1 \
\cb4              </div>\cb1 \
\cb4           </div>\cb1 \
\cb4           \cb1 \
\cb4           <div className=\cf6 \strokec6 "lg:col-span-7 space-y-12 pt-4"\cf0 \strokec2 >\cb1 \
\cb4             <div className=\cf6 \strokec6 "space-y-6"\cf0 \strokec2 >\cb1 \
\cb4               <h2 className=\cf6 \strokec6 "text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.2]"\cf0 \strokec2 >\cb1 \
\cb4                 \cf8 \strokec8 \uc0\u12300 \u20154 \u12301 \u12398 \u21487 \u33021 \u24615 \u12434 \u26368 \u22823 \u21270 \u12375 \u12289 \cf0 \strokec2 <br />\cb1 \
\cb4                 \cf8 \strokec8 \uc0\u31038 \u20250 \u12398 \u26368 \u36969 \u35299 \u12434 \u23566 \u12365 \u20986 \u12377 \u12290 \cf0 \cb1 \strokec2 \
\cb4               </h2>\cb1 \
\cb4               <div className=\cf6 \strokec6 "w-16 h-1 bg-orange-500"\cf0 \strokec2 ></div>\cb1 \
\cb4             </div>\cb1 \
\cb4             \cb1 \
\cb4             <div className=\cf6 \strokec6 "space-y-10 text-slate-600 text-lg leading-relaxed"\cf0 \strokec2 >\cb1 \
\cb4               <p>\cb1 \
\cb4                 \cf8 \strokec8 \uc0\u26666 \u24335 \u20250 \u31038 \cf5 \strokec5 SOM\cf8 \strokec8 \uc0\u12434 \cf9 \strokec9 2016\cf8 \strokec8 \uc0\u24180 \u12395 \u35373 \u31435 \u12375 \u12383 \u24403 \u21021 \u12363 \u12425 \u22793 \u12431 \u12425 \u12394 \u12356 \u24819 \u12356 \u12364 \u12354 \u12426 \u12414 \u12377 \u12290 \u12381 \u12428 \u12399 \u12300 \u12499 \u12472 \u12493 \u12473 \u12434 \u36890 \u12376 \u12390 \u12289 \u20154 \u12398 \u20154 \u29983 \u12395 \u12509 \u12472 \u12486 \u12451 \u12502 \u12394 \u22793 \u21270 \u12434 \u19982 \u12360 \u12383 \u12356 \u12301 \u12392 \u12356 \u12358 \u12371 \u12392 \u12391 \u12377 \u12290 \cf0 \cb1 \strokec2 \
\cb4               </p>\cb1 \
\cb4               <p>\cb1 \
\cb4                 \cf8 \strokec8 \uc0\u12475 \u12540 \u12523 \u12473 \u12391 \u12463 \u12521 \u12452 \u12450 \u12531 \u12488 \u12398 \u21487 \u33021 \u24615 \u12434 \u24195 \u12370 \u12289 \u12472 \u12512 \u12391 \u20491 \u20154 \u12398 \u27963 \u21147 \u12434 \u26368 \u22823 \u21270 \u12375 \u12289 \u20877 \u29983 \u12456 \u12493 \u12523 \u12462 \u12540 \u12391 \u31038 \u20250 \u12398 \u25345 \u32154 \u21487 \u33021 \u24615 \u12434 \u25903 \u12360 \u12427 \u12290 \u19968 \u35211 \u30064 \u12394 \u12427 \u12371 \u12428 \u12425 \u12398 \u20107 \u26989 \u12399 \u12289 \u31169 \u12398 \u20013 \u12391 \u12300 \u24515 \u12539 \u25216 \u12539 \u20307 \u12301 \u12398 \u12424 \u12358 \u12395 \u19968 \u12388 \u12398 \u20870 \u12392 \u12394 \u12387 \u12390 \u32331 \u12364 \u12387 \u12390 \u12356 \u12414 \u12377 \u12290 \cf0 \cb1 \strokec2 \
\cb4               </p>\cb1 \
\cb4               \cb1 \
\cb4               <div className=\cf6 \strokec6 "grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-y border-slate-50"\cf0 \strokec2 >\cb1 \
\cb4                 <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec2 >\cb1 \
\cb4                   <h4 className=\cf6 \strokec6 "text-lg font-bold text-slate-900 flex items-center"\cf0 \strokec2 >\cb1 \
\cb4                     <\cf5 \strokec5 Award\cf0 \strokec2  className=\cf6 \strokec6 "w-5 h-5 text-orange-500 mr-3"\cf0 \strokec2  /> \cf5 \strokec5 Core\cf0 \strokec2  \cf5 \strokec5 Values\cf0 \cb1 \strokec2 \
\cb4                   </h4>\cb1 \
\cb4                   <p className=\cf6 \strokec6 "text-sm font-bold text-slate-500 leading-relaxed"\cf0 \strokec2 >\cb1 \
\cb4                     \cf8 \strokec8 \uc0\u35488 \u23455 \u12391 \u12354 \u12427 \u12371 \u12392 \u12289 \u25361 \u25126 \u12434 \u24536 \u12428 \u12394 \u12356 \u12371 \u12392 \u12289 \u38306 \u12431 \u12427 \u12377 \u12409 \u12390 \u12398 \u20154 \u12434 \u12300 \u23478 \u26063 \u12301 \u12398 \u12424 \u12358 \u12395 \u22823 \u20999 \u12395 \u12377 \u12427 \u12371 \u12392 \u12290 \cf0 \cb1 \strokec2 \
\cb4                   </p>\cb1 \
\cb4                 </div>\cb1 \
\cb4                 <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec2 >\cb1 \
\cb4                   <h4 className=\cf6 \strokec6 "text-lg font-bold text-slate-900 flex items-center"\cf0 \strokec2 >\cb1 \
\cb4                     <\cf5 \strokec5 HeartHandshake\cf0 \strokec2  className=\cf6 \strokec6 "w-5 h-5 text-orange-500 mr-3"\cf0 \strokec2  /> \cf5 \strokec5 Vision\cf0 \strokec2  \cf9 \strokec9 2030\cf0 \cb1 \strokec2 \
\cb4                   </h4>\cb1 \
\cb4                   <p className=\cf6 \strokec6 "text-sm font-bold text-slate-500 leading-relaxed"\cf0 \strokec2 >\cb1 \
\cb4                     \cf9 \strokec9 2030\cf8 \strokec8 \uc0\u24180 \u12414 \u12391 \u12395 \u12289 \u27425 \u19990 \u20195 \u12398 \u20877 \u29983 \u12456 \u12493 \u12523 \u12462 \u12540 \u32178 \u12392 \u12289 \u26368 \u39640 \u12398 \u20154 \u26448 \u12539 \u36523 \u20307 \u12434 \u32331 \u12368 \u12503 \u12521 \u12483 \u12488 \u12501 \u12457 \u12540 \u12512 \u12434 \u27083 \u31689 \u12375 \u12414 \u12377 \u12290 \cf0 \cb1 \strokec2 \
\cb4                   </p>\cb1 \
\cb4                 </div>\cb1 \
\cb4               </div>\cb1 \
\cb4             </div>\cb1 \
\cb4           </div>\cb1 \
\cb4         </div>\cb1 \
\
\cb4         \{\cf7 \strokec7 /* Corporate Profile Table */\cf0 \strokec2 \}\cb1 \
\cb4         <div className=\cf6 \strokec6 "mb-40"\cf0 \strokec2 >\cb1 \
\cb4           <div className=\cf6 \strokec6 "flex items-center space-x-6 mb-16"\cf0 \strokec2 >\cb1 \
\cb4             <h2 className=\cf6 \strokec6 "text-4xl font-bold text-slate-900 shrink-0"\cf0 \strokec2 >\cf8 \strokec8 \uc0\u20250 \u31038 \u27010 \u35201 \cf0 \strokec2 </h2>\cb1 \
\cb4             <div className=\cf6 \strokec6 "h-px w-full bg-slate-200"\cf0 \strokec2 ></div>\cb1 \
\cb4           </div>\cb1 \
\cb4           <div className=\cf6 \strokec6 "bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden"\cf0 \strokec2 >\cb1 \
\cb4             \{[\cb1 \
\cb4               \{ label: \cf6 \strokec6 "\uc0\u20250 \u31038 \u21517 "\cf0 \strokec2 , value: \cf5 \strokec5 COMPANY_DATA\cf0 \strokec2 .name \},\cb1 \
\cb4               \{ label: \cf6 \strokec6 "\uc0\u20195 \u34920 \u21462 \u32224 \u24441 "\cf0 \strokec2 , value: \cf5 \strokec5 COMPANY_DATA\cf0 \strokec2 .representative \},\cb1 \
\cb4               \{ label: \cf6 \strokec6 "\uc0\u25152 \u22312 \u22320 "\cf0 \strokec2 , value: \cf5 \strokec5 COMPANY_DATA\cf0 \strokec2 .address \},\cb1 \
\cb4               \{ label: \cf6 \strokec6 "\uc0\u35373 \u31435 "\cf0 \strokec2 , value: \cf5 \strokec5 COMPANY_DATA\cf0 \strokec2 .established \},\cb1 \
\cb4               \{ label: \cf6 \strokec6 "\uc0\u20107 \u26989 \u20869 \u23481 "\cf0 \strokec2 , value: (\cb1 \
\cb4                 <ul className=\cf6 \strokec6 "space-y-3"\cf0 \strokec2 >\cb1 \
\cb4                   \{\cf5 \strokec5 COMPANY_DATA\cf0 \strokec2 .businessDetails.map(d => (\cb1 \
\cb4                     <li key=\{d\} className=\cf6 \strokec6 "flex items-center text-slate-700 font-bold"\cf0 \strokec2 >\cb1 \
\cb4                       <div className=\cf6 \strokec6 "w-1.5 h-1.5 rounded-full bg-orange-500 mr-3"\cf0 \strokec2 ></div>\cb1 \
\cb4                       \{d\}\cb1 \
\cb4                     </li>\cb1 \
\cb4                   ))\}\cb1 \
\cb4                 </ul>\cb1 \
\cb4               )\},\cb1 \
\cb4             ].map((row, idx) => (\cb1 \
\cb4               <div key=\{idx\} className=\cf6 \strokec6 "flex flex-col md:flex-row py-10 px-10 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors"\cf0 \strokec2 >\cb1 \
\cb4                 <div className=\cf6 \strokec6 "md:w-1/3 text-xs font-black text-slate-400 uppercase tracking-widest mb-2 md:mb-0 flex items-center"\cf0 \strokec2 >\cb1 \
\cb4                    \{row.label\}\cb1 \
\cb4                 </div>\cb1 \
\cb4                 <div className=\cf6 \strokec6 "md:w-2/3 text-xl text-slate-900 font-bold"\cf0 \strokec2 >\{row.value\}</div>\cb1 \
\cb4               </div>\cb1 \
\cb4             ))\}\cb1 \
\cb4           </div>\cb1 \
\cb4         </div>\cb1 \
\cb4       </div>\cb1 \
\cb4     </div>\cb1 \
\cb4   );\cb1 \
\cb4 \};\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 ServicesPage\cf0 \strokec2  = () => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb4   \cf3 \strokec3 const\cf0 \strokec2  [expandedFeature, setExpandedFeature] = useState<\cf3 \strokec3 string\cf0 \strokec2  | \cf3 \strokec3 null\cf0 \strokec2 >(\cf3 \strokec3 null\cf0 \strokec2 );\cb1 \
\
\cb4   \cf3 \strokec3 const\cf0 \strokec2  toggleFeature = (label: \cf3 \strokec3 string\cf0 \strokec2 ) => \{\cb1 \
\cb4     setExpandedFeature(expandedFeature === label ? \cf3 \strokec3 null\cf0 \strokec2  : label);\cb1 \
\cb4   \};\cb1 \
\
\cb4   \cf3 \strokec3 return\cf0 \strokec2  (\cb1 \
\cb4     <div className=\cf6 \strokec6 "pt-24 animate-in fade-in slide-in-from-bottom-4 duration-700"\cf0 \strokec2 >\cb1 \
\cb4       <div className=\cf6 \strokec6 "bg-white py-32 mb-16"\cf0 \strokec2 >\cb1 \
\cb4         <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"\cf0 \strokec2 >\cb1 \
\cb4           <h1 className=\cf6 \strokec6 "text-sm font-black text-orange-600 tracking-[0.5em] uppercase mb-6"\cf0 \strokec2 >\cf5 \strokec5 WHAT\cf0 \strokec2  \cf5 \strokec5 WE\cf0 \strokec2  \cf5 \strokec5 DO\cf0 \strokec2 </h1>\cb1 \
\cb4           <p className=\cf6 \strokec6 "text-5xl sm:text-7xl font-bold text-slate-900 mb-10"\cf0 \strokec2 >\cf8 \strokec8 \uc0\u20107 \u26989 \u20869 \u23481 \cf0 \strokec2 </p>\cb1 \
\cb4           <div className=\cf6 \strokec6 "w-24 h-2 bg-orange-500 mx-auto rounded-full mb-10"\cf0 \strokec2 ></div>\cb1 \
\cb4           <p className=\cf6 \strokec6 "text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-bold"\cf0 \strokec2 >\cb1 \
\cb4             \cf8 \strokec8 \uc0\u12475 \u12540 \u12523 \u12473 \u12289 \u12501 \u12451 \u12483 \u12488 \u12493 \u12473 \u12289 \u12456 \u12493 \u12523 \u12462 \u12540 \u12290 \cf0 \strokec2 <br className=\cf6 \strokec6 "hidden sm:block"\cf0 \strokec2  />\cb1 \
\cb4             \cf9 \strokec9 3\cf8 \strokec8 \uc0\u12388 \u12398 \u30064 \u12394 \u12427 \u38936 \u22495 \u12364 \u12300 \u20154 \u12301 \u12434 \u36600 \u12395 \u12471 \u12531 \u12463 \u12525 \u12375 \u12289 \u38761 \u26032 \u30340 \u12394 \u20385 \u20516 \u12434 \u29983 \u12415 \u20986 \u12375 \u12414 \u12377 \u12290 \cf0 \cb1 \strokec2 \
\cb4           </p>\cb1 \
\cb4         </div>\cb1 \
\cb4       </div>\cb1 \
\
\cb4       <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-40 space-y-48"\cf0 \strokec2 >\cb1 \
\cb4         \{\cf5 \strokec5 SERVICES\cf0 \strokec2 .map((service, idx) => (\cb1 \
\cb4           <div key=\{service.id\} className=\{\cf6 \strokec6 `flex flex-col lg:flex-row items-center gap-16 lg:gap-32 \cf0 \strokec2 $\{idx % \cf9 \strokec9 2\cf0 \strokec2  !== \cf9 \strokec9 0\cf0 \strokec2  ? \cf6 \strokec6 'lg:flex-row-reverse'\cf0 \strokec2  : \cf6 \strokec6 ''\cf0 \strokec2 \}\cf6 \strokec6 `\cf0 \strokec2 \}>\cb1 \
\cb4             <div className=\cf6 \strokec6 "w-full lg:w-1/2 group"\cf0 \strokec2 >\cb1 \
\cb4               <div className=\cf6 \strokec6 "relative rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white transition-transform duration-700 group-hover:scale-[1.02]"\cf0 \strokec2 >\cb1 \
\cb4                 <img src=\{service.imageUrl\} alt=\{service.title\} className=\cf6 \strokec6 "w-full aspect-[4/3] object-cover"\cf0 \strokec2  />\cb1 \
\cb4               </div>\cb1 \
\cb4             </div>\cb1 \
\cb4             <div className=\cf6 \strokec6 "w-full lg:w-1/2 space-y-10"\cf0 \strokec2 >\cb1 \
\cb4               <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec2 >\cb1 \
\cb4                 <div className=\cf6 \strokec6 "flex items-center space-x-4"\cf0 \strokec2 >\cb1 \
\cb4                   <div className=\cf6 \strokec6 "w-12 h-1.5 bg-orange-500 rounded-full"\cf0 \strokec2 ></div>\cb1 \
\cb4                   <span className=\cf6 \strokec6 "text-orange-600 font-black tracking-widest text-sm uppercase"\cf0 \strokec2 >\cf5 \strokec5 Business\cf0 \strokec2  \cf5 \strokec5 Domain\cf0 \strokec2  \cf9 \strokec9 0\cf0 \strokec2 \{idx + \cf9 \strokec9 1\cf0 \strokec2 \}</span>\cb1 \
\cb4                 </div>\cb1 \
\cb4                 <h2 className=\cf6 \strokec6 "text-4xl sm:text-6xl font-bold text-slate-900 leading-tight"\cf0 \strokec2 >\{service.title\}</h2>\cb1 \
\cb4               </div>\cb1 \
\cb4               <p className=\cf6 \strokec6 "text-slate-500 text-xl leading-relaxed font-medium"\cf0 \strokec2 >\cb1 \
\cb4                 \{service.description\}\cb1 \
\cb4               </p>\cb1 \
\cb4               \cb1 \
\cb4               <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec2 >\cb1 \
\cb4                 \{service.features.map(feature => (\cb1 \
\cb4                   <div key=\{feature.label\} className=\cf6 \strokec6 "border border-slate-100 rounded-[2rem] overflow-hidden bg-slate-50 hover:bg-white transition-all shadow-sm"\cf0 \strokec2 >\cb1 \
\cb4                     <button \cb1 \
\cb4                       onClick=\{() => toggleFeature(feature.label)\}\cb1 \
\cb4                       className=\cf6 \strokec6 "w-full flex items-center justify-between p-6 text-left outline-none group"\cf0 \cb1 \strokec2 \
\cb4                     >\cb1 \
\cb4                       <div className=\cf6 \strokec6 "flex items-center"\cf0 \strokec2 >\cb1 \
\cb4                         <div className=\{\cf6 \strokec6 `w-12 h-12 rounded-full flex items-center justify-center mr-5 transition-all \cf0 \strokec2 $\{expandedFeature === feature.label ? \cf6 \strokec6 'bg-orange-500 text-white shadow-lg'\cf0 \strokec2  : \cf6 \strokec6 'bg-white text-slate-400 group-hover:text-orange-500'\cf0 \strokec2 \}\cf6 \strokec6 `\cf0 \strokec2 \}>\cb1 \
\cb4                           <\cf5 \strokec5 DynamicIcon\cf0 \strokec2  name=\{feature.iconName\} className=\cf6 \strokec6 "w-6 h-6"\cf0 \strokec2  />\cb1 \
\cb4                         </div>\cb1 \
\cb4                         <span className=\{\cf6 \strokec6 `text-lg font-bold transition-colors \cf0 \strokec2 $\{expandedFeature === feature.label ? \cf6 \strokec6 'text-orange-600'\cf0 \strokec2  : \cf6 \strokec6 'text-slate-700 group-hover:text-slate-900'\cf0 \strokec2 \}\cf6 \strokec6 `\cf0 \strokec2 \}>\cb1 \
\cb4                           \{feature.label\}\cb1 \
\cb4                         </span>\cb1 \
\cb4                       </div>\cb1 \
\cb4                       <div className=\{\cf6 \strokec6 `transition-transform duration-300 \cf0 \strokec2 $\{expandedFeature === feature.label ? \cf6 \strokec6 'rotate-180 text-orange-500'\cf0 \strokec2  : \cf6 \strokec6 'text-slate-300'\cf0 \strokec2 \}\cf6 \strokec6 `\cf0 \strokec2 \}>\cb1 \
\cb4                         <\cf5 \strokec5 ChevronDown\cf0 \strokec2  className=\cf6 \strokec6 "w-6 h-6"\cf0 \strokec2  />\cb1 \
\cb4                       </div>\cb1 \
\cb4                     </button>\cb1 \
\cb4                     <div className=\{\cf6 \strokec6 `transition-all duration-500 ease-in-out overflow-hidden \cf0 \strokec2 $\{expandedFeature === feature.label ? \cf6 \strokec6 'max-h-96 opacity-100'\cf0 \strokec2  : \cf6 \strokec6 'max-h-0 opacity-0'\cf0 \strokec2 \}\cf6 \strokec6 `\cf0 \strokec2 \}>\cb1 \
\cb4                       <div className=\cf6 \strokec6 "p-8 pt-0 bg-white"\cf0 \strokec2 >\cb1 \
\cb4                         <div className=\cf6 \strokec6 "bg-orange-50/50 p-6 rounded-3xl border border-orange-100 flex items-start space-x-4"\cf0 \strokec2 >\cb1 \
\cb4                           <\cf5 \strokec5 Info\cf0 \strokec2  className=\cf6 \strokec6 "w-5 h-5 text-orange-500 shrink-0 mt-1"\cf0 \strokec2  />\cb1 \
\cb4                           <p className=\cf6 \strokec6 "text-slate-600 leading-relaxed font-bold"\cf0 \strokec2 >\cb1 \
\cb4                             \{feature.description\}\cb1 \
\cb4                           </p>\cb1 \
\cb4                         </div>\cb1 \
\cb4                       </div>\cb1 \
\cb4                     </div>\cb1 \
\cb4                   </div>\cb1 \
\cb4                 ))\}\cb1 \
\cb4               </div>\cb1 \
\
\cb4               <div className=\cf6 \strokec6 "pt-8 text-center lg:text-left"\cf0 \strokec2 >\cb1 \
\cb4                  <\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/contact"\cf0 \strokec2  className=\cf6 \strokec6 "group inline-flex items-center justify-center bg-slate-900 text-white px-10 py-5 rounded-full font-bold hover:bg-orange-500 transition-all shadow-xl"\cf0 \strokec2 >\cb1 \
\cb4                    \cf8 \strokec8 \uc0\u12371 \u12398 \u20107 \u26989 \u12395 \u12388 \u12356 \u12390 \u30456 \u35527 \u12377 \u12427 \cf0 \strokec2  <\cf5 \strokec5 ArrowRight\cf0 \strokec2  className=\cf6 \strokec6 "ml-3 group-hover:translate-x-2 transition-transform"\cf0 \strokec2  />\cb1 \
\cb4                  </\cf5 \strokec5 Link\cf0 \strokec2 >\cb1 \
\cb4               </div>\cb1 \
\cb4             </div>\cb1 \
\cb4           </div>\cb1 \
\cb4         ))\}\cb1 \
\cb4       </div>\cb1 \
\cb4     </div>\cb1 \
\cb4   );\cb1 \
\cb4 \};\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 ContactPage\cf0 \strokec2  = () => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb4   \cf3 \strokec3 const\cf0 \strokec2  [submitted, setSubmitted] = useState(\cf3 \strokec3 false\cf0 \strokec2 );\cb1 \
\
\cb4   \cf3 \strokec3 const\cf0 \strokec2  handleSubmit = (e: \cf5 \strokec5 React\cf0 \strokec2 .\cf5 \strokec5 FormEvent\cf0 \strokec2 ) => \{\cb1 \
\cb4     e.preventDefault();\cb1 \
\cb4     setSubmitted(\cf3 \strokec3 true\cf0 \strokec2 );\cb1 \
\cb4   \};\cb1 \
\
\cb4   \cf3 \strokec3 if\cf0 \strokec2  (submitted) \{\cb1 \
\cb4     \cf3 \strokec3 return\cf0 \strokec2  (\cb1 \
\cb4       <div className=\cf6 \strokec6 "pt-32 pb-40 animate-in zoom-in-95 duration-500"\cf0 \strokec2 >\cb1 \
\cb4         <div className=\cf6 \strokec6 "max-w-xl mx-auto px-4 text-center"\cf0 \strokec2 >\cb1 \
\cb4           <div className=\cf6 \strokec6 "bg-orange-100 text-orange-600 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-12 shadow-inner"\cf0 \strokec2 >\cb1 \
\cb4             \{\cf7 \strokec7 /* Fixed CheckCircle2 icon */\cf0 \strokec2 \}\cb1 \
\cb4             <\cf5 \strokec5 CheckCircle2\cf0 \strokec2  className=\cf6 \strokec6 "w-16 h-16"\cf0 \strokec2  />\cb1 \
\cb4           </div>\cb1 \
\cb4           <h1 className=\cf6 \strokec6 "text-4xl sm:text-5xl font-bold text-slate-900 mb-8 tracking-tight"\cf0 \strokec2 >\cf8 \strokec8 \uc0\u36865 \u20449 \u23436 \u20102 \u12356 \u12383 \u12375 \u12414 \u12375 \u12383 \cf0 \strokec2 </h1>\cb1 \
\cb4           <p className=\cf6 \strokec6 "text-slate-500 text-xl mb-12 leading-relaxed font-medium"\cf0 \strokec2 >\cb1 \
\cb4             \cf8 \strokec8 \uc0\u12362 \u21839 \u12356 \u21512 \u12431 \u12379 \u12354 \u12426 \u12364 \u12392 \u12358 \u12372 \u12374 \u12356 \u12414 \u12377 \u12290 \cf0 \strokec2 <br />\cb1 \
\cb4             \cf9 \strokec9 2\cf8 \strokec8 \uc0\u12316 \cf9 \strokec9 3\cf8 \strokec8 \uc0\u21942 \u26989 \u26085 \u20197 \u20869 \u12395 \u25285 \u24403 \u32773 \u12424 \u12426 \u25240 \u12426 \u36820 \u12375 \u12372 \u36899 \u32097 \u12373 \u12379 \u12390 \u12356 \u12383 \u12384 \u12365 \u12414 \u12377 \u12290 \cf0 \cb1 \strokec2 \
\cb4           </p>\cb1 \
\cb4           <\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/"\cf0 \strokec2  className=\cf6 \strokec6 "inline-block bg-slate-900 text-white px-14 py-6 rounded-full font-bold shadow-2xl hover:bg-orange-500 transition-all transform hover:-translate-y-1"\cf0 \strokec2 >\cb1 \
\cb4             \cf8 \strokec8 \uc0\u12488 \u12483 \u12503 \u12506 \u12540 \u12472 \u12408 \u25147 \u12427 \cf0 \cb1 \strokec2 \
\cb4           </\cf5 \strokec5 Link\cf0 \strokec2 >\cb1 \
\cb4         </div>\cb1 \
\cb4       </div>\cb1 \
\cb4     );\cb1 \
\cb4   \}\cb1 \
\
\cb4   \cf3 \strokec3 return\cf0 \strokec2  (\cb1 \
\cb4     <div className=\cf6 \strokec6 "pt-24 animate-in fade-in slide-in-from-bottom-4 duration-700"\cf0 \strokec2 >\cb1 \
\cb4       <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"\cf0 \strokec2 >\cb1 \
\cb4         <div className=\cf6 \strokec6 "max-w-5xl mx-auto"\cf0 \strokec2 >\cb1 \
\cb4           <div className=\cf6 \strokec6 "text-center mb-24"\cf0 \strokec2 >\cb1 \
\cb4             <h1 className=\cf6 \strokec6 "text-sm font-black text-orange-600 tracking-[0.5em] uppercase mb-6"\cf0 \strokec2 >\cf5 \strokec5 CONTACT\cf0 \strokec2  \cf5 \strokec5 US\cf0 \strokec2 </h1>\cb1 \
\cb4             <p className=\cf6 \strokec6 "text-5xl sm:text-7xl font-bold text-slate-900 mb-8"\cf0 \strokec2 >\cf8 \strokec8 \uc0\u12362 \u21839 \u12356 \u21512 \u12431 \u12379 \cf0 \strokec2 </p>\cb1 \
\cb4             <div className=\cf6 \strokec6 "h-2 w-32 bg-orange-500 mx-auto rounded-full mb-10"\cf0 \strokec2 ></div>\cb1 \
\cb4             <p className=\cf6 \strokec6 "text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed"\cf0 \strokec2 >\cb1 \
\cb4               \cf8 \strokec8 \uc0\u20107 \u26989 \u12395 \u38306 \u12377 \u12427 \u12372 \u36074 \u21839 \u12289 \u12362 \u35211 \u31309 \u12418 \u12426 \u12398 \u12372 \u30456 \u35527 \u12289 \cf0 \strokec2 <br className=\cf6 \strokec6 "hidden sm:block"\cf0 \strokec2  />\cf8 \strokec8 \uc0\u25505 \u29992 \u12395 \u12388 \u12356 \u12390 \u12394 \u12393 \u12289 \u12414 \u12378 \u12399 \u12362 \u27671 \u36605 \u12395 \u12362 \u23492 \u12379 \u12367 \u12384 \u12373 \u12356 \u12290 \cf0 \cb1 \strokec2 \
\cb4             </p>\cb1 \
\cb4           </div>\cb1 \
\
\cb4           <form onSubmit=\{handleSubmit\} className=\cf6 \strokec6 "bg-white p-10 sm:p-20 rounded-[4rem] border border-slate-100 shadow-2xl space-y-12"\cf0 \strokec2 >\cb1 \
\cb4             <div className=\cf6 \strokec6 "grid grid-cols-1 sm:grid-cols-2 gap-10"\cf0 \strokec2 >\cb1 \
\cb4               <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec2 >\cb1 \
\cb4                 <label className=\cf6 \strokec6 "text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4"\cf0 \strokec2 >\cf8 \strokec8 \uc0\u12362 \u21517 \u21069 \cf0 \strokec2  <span className=\cf6 \strokec6 "text-orange-500"\cf0 \strokec2 >*</span></label>\cb1 \
\cb4                 <input \cf3 \strokec3 type\cf0 \strokec2 =\cf6 \strokec6 "text"\cf0 \strokec2  required placeholder=\cf6 \strokec6 "\uc0\u23665 \u30000  \u22826 \u37070 "\cf0 \strokec2  className=\cf6 \strokec6 "w-full px-8 py-6 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all outline-none font-bold text-slate-900 placeholder:text-slate-300"\cf0 \strokec2  />\cb1 \
\cb4               </div>\cb1 \
\cb4               <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec2 >\cb1 \
\cb4                 <label className=\cf6 \strokec6 "text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4"\cf0 \strokec2 >\cf8 \strokec8 \uc0\u20250 \u31038 \u21517 \cf0 \strokec2 </label>\cb1 \
\cb4                 <input \cf3 \strokec3 type\cf0 \strokec2 =\cf6 \strokec6 "text"\cf0 \strokec2  placeholder=\cf6 \strokec6 "\uc0\u26666 \u24335 \u20250 \u31038 SOM"\cf0 \strokec2  className=\cf6 \strokec6 "w-full px-8 py-6 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all outline-none font-bold text-slate-900 placeholder:text-slate-300"\cf0 \strokec2  />\cb1 \
\cb4               </div>\cb1 \
\cb4             </div>\cb1 \
\
\cb4             <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec2 >\cb1 \
\cb4               <label className=\cf6 \strokec6 "text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4"\cf0 \strokec2 >\cf8 \strokec8 \uc0\u12513 \u12540 \u12523 \u12450 \u12489 \u12524 \u12473 \cf0 \strokec2  <span className=\cf6 \strokec6 "text-orange-500"\cf0 \strokec2 >*</span></label>\cb1 \
\cb4               <input \cf3 \strokec3 type\cf0 \strokec2 =\cf6 \strokec6 "email"\cf0 \strokec2  required placeholder=\cf6 \strokec6 "example@som-biz.com"\cf0 \strokec2  className=\cf6 \strokec6 "w-full px-8 py-6 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all outline-none font-bold text-slate-900 placeholder:text-slate-300"\cf0 \strokec2  />\cb1 \
\cb4             </div>\cb1 \
\
\cb4             <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec2 >\cb1 \
\cb4               <label className=\cf6 \strokec6 "text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4"\cf0 \strokec2 >\cf8 \strokec8 \uc0\u12362 \u21839 \u12356 \u21512 \u12431 \u12379 \u38917 \u30446 \cf0 \strokec2  <span className=\cf6 \strokec6 "text-orange-500"\cf0 \strokec2 >*</span></label>\cb1 \
\cb4               <div className=\cf6 \strokec6 "relative"\cf0 \strokec2 >\cb1 \
\cb4                 <select required className=\cf6 \strokec6 "w-full px-8 py-6 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all outline-none appearance-none font-bold text-slate-900 cursor-pointer"\cf0 \strokec2 >\cb1 \
\cb4                   <option value=\cf6 \strokec6 ""\cf0 \strokec2 >\cf8 \strokec8 \uc0\u36984 \u25246 \u12375 \u12390 \u12367 \u12384 \u12373 \u12356 \cf0 \strokec2 </option>\cb1 \
\cb4                   <option value=\cf6 \strokec6 "sales"\cf0 \strokec2 >\cf8 \strokec8 \uc0\u12475 \u12540 \u12523 \u12473 \u12539 \u12510 \u12540 \u12465 \u12486 \u12451 \u12531 \u12464 \u12395 \u12388 \u12356 \u12390 \cf0 \strokec2 </option>\cb1 \
\cb4                   <option value=\cf6 \strokec6 "gym"\cf0 \strokec2 >\cf8 \strokec8 \uc0\u12497 \u12540 \u12477 \u12490 \u12523 \u12472 \u12512 \u12395 \u12388 \u12356 \u12390 \cf0 \strokec2 </option>\cb1 \
\cb4                   <option value=\cf6 \strokec6 "energy"\cf0 \strokec2 >\cf8 \strokec8 \uc0\u20877 \u29983 \u12456 \u12493 \u12523 \u12462 \u12540 \u65288 \u22826 \u38525 \u20809 \u12539 \u33988 \u38651 \u27744 \u12539 \cf5 \strokec5 V2H\cf8 \strokec8 \uc0\u65289 \u12395 \u12388 \u12356 \u12390 \cf0 \strokec2 </option>\cb1 \
\cb4                   <option value=\cf6 \strokec6 "others"\cf0 \strokec2 >\cf8 \strokec8 \uc0\u12381 \u12398 \u20182 \u12539 \u25505 \u29992 \u12539 \u25552 \u25658 \u12394 \u12393 \cf0 \strokec2 </option>\cb1 \
\cb4                 </select>\cb1 \
\cb4                 <div className=\cf6 \strokec6 "absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none"\cf0 \strokec2 >\cb1 \
\cb4                   <\cf5 \strokec5 ChevronRight\cf0 \strokec2  className=\cf6 \strokec6 "w-6 h-6 text-slate-300 rotate-90"\cf0 \strokec2  />\cb1 \
\cb4                 </div>\cb1 \
\cb4               </div>\cb1 \
\cb4             </div>\cb1 \
\
\cb4             <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec2 >\cb1 \
\cb4               <label className=\cf6 \strokec6 "text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4"\cf0 \strokec2 >\cf8 \strokec8 \uc0\u12513 \u12483 \u12475 \u12540 \u12472 \u26412 \u25991 \cf0 \strokec2  <span className=\cf6 \strokec6 "text-orange-500"\cf0 \strokec2 >*</span></label>\cb1 \
\cb4               <textarea rows=\{\cf9 \strokec9 6\cf0 \strokec2 \} required placeholder=\cf6 \strokec6 "\uc0\u12372 \u30456 \u35527 \u20869 \u23481 \u12434 \u20855 \u20307 \u30340 \u12395 \u20837 \u21147 \u12375 \u12390 \u12367 \u12384 \u12373 \u12356 "\cf0 \strokec2  className=\cf6 \strokec6 "w-full px-8 py-6 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all outline-none resize-none font-bold text-slate-900 placeholder:text-slate-300"\cf0 \strokec2 ></textarea>\cb1 \
\cb4             </div>\cb1 \
\
\cb4             <div className=\cf6 \strokec6 "pt-10"\cf0 \strokec2 >\cb1 \
\cb4               <button \cf3 \strokec3 type\cf0 \strokec2 =\cf6 \strokec6 "submit"\cf0 \strokec2  className=\cf6 \strokec6 "group w-full bg-orange-500 text-white px-10 py-7 rounded-3xl font-bold text-2xl hover:bg-slate-900 transition-all shadow-2xl hover:shadow-slate-200 transform hover:-translate-y-2 flex items-center justify-center"\cf0 \strokec2 >\cb1 \
\cb4                 \cf8 \strokec8 \uc0\u12371 \u12398 \u20869 \u23481 \u12391 \u36865 \u20449 \u12377 \u12427 \cf0 \cb1 \strokec2 \
\cb4                 <\cf5 \strokec5 ArrowRight\cf0 \strokec2  className=\cf6 \strokec6 "ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform"\cf0 \strokec2  />\cb1 \
\cb4               </button>\cb1 \
\cb4             </div>\cb1 \
\cb4           </form>\cb1 \
\cb4         </div>\cb1 \
\cb4       </div>\cb1 \
\cb4     </div>\cb1 \
\cb4   );\cb1 \
\cb4 \};\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb4 \strokec7 // --- App Root ---\cf0 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 ScrollToTop\cf0 \strokec2  = () => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb4   \cf3 \strokec3 const\cf0 \strokec2  \{ pathname \} = useLocation();\cb1 \
\cb4   useEffect(() => \{\cb1 \
\cb4     window.scrollTo(\cf9 \strokec9 0\cf0 \strokec2 , \cf9 \strokec9 0\cf0 \strokec2 );\cb1 \
\cb4   \}, [pathname]);\cb1 \
\cb4   \cf3 \strokec3 return\cf0 \strokec2  \cf3 \strokec3 null\cf0 \strokec2 ;\cb1 \
\cb4 \};\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 App\cf0 \strokec2  = () => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb4   \cf3 \strokec3 return\cf0 \strokec2  (\cb1 \
\cb4     <\cf5 \strokec5 HashRouter\cf0 \strokec2 >\cb1 \
\cb4       <\cf5 \strokec5 ScrollToTop\cf0 \strokec2  />\cb1 \
\cb4       <div className=\cf6 \strokec6 "min-h-screen flex flex-col selection:bg-orange-100 selection:text-orange-900 bg-white antialiased"\cf0 \strokec2 >\cb1 \
\cb4         <\cf5 \strokec5 Navbar\cf0 \strokec2  />\cb1 \
\cb4         <main className=\cf6 \strokec6 "flex-grow"\cf0 \strokec2 >\cb1 \
\cb4           <\cf5 \strokec5 Routes\cf0 \strokec2 >\cb1 \
\cb4             <\cf5 \strokec5 Route\cf0 \strokec2  path=\cf6 \strokec6 "/"\cf0 \strokec2  element=\{<\cf5 \strokec5 HomePage\cf0 \strokec2  />\} />\cb1 \
\cb4             <\cf5 \strokec5 Route\cf0 \strokec2  path=\cf6 \strokec6 "/services"\cf0 \strokec2  element=\{<\cf5 \strokec5 ServicesPage\cf0 \strokec2  />\} />\cb1 \
\cb4             <\cf5 \strokec5 Route\cf0 \strokec2  path=\cf6 \strokec6 "/about"\cf0 \strokec2  element=\{<\cf5 \strokec5 AboutPage\cf0 \strokec2  />\} />\cb1 \
\cb4             <\cf5 \strokec5 Route\cf0 \strokec2  path=\cf6 \strokec6 "/contact"\cf0 \strokec2  element=\{<\cf5 \strokec5 ContactPage\cf0 \strokec2  />\} />\cb1 \
\cb4           </\cf5 \strokec5 Routes\cf0 \strokec2 >\cb1 \
\cb4         </main>\cb1 \
\cb4         <\cf5 \strokec5 Footer\cf0 \strokec2  />\cb1 \
\cb4       </div>\cb1 \
\cb4     </\cf5 \strokec5 HashRouter\cf0 \strokec2 >\cb1 \
\cb4   );\cb1 \
\cb4 \};\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 export\cf0 \strokec2  \cf3 \strokec3 default\cf0 \strokec2  \cf5 \strokec5 App\cf0 \strokec2 ;\cb1 \
\
}