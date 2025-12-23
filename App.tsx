{\rtf1\ansi\ansicpg932\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red0\green0\blue255;\red255\green255\blue254;
\red14\green110\blue109;\red144\green1\blue18;\red191\green28\blue37;\red19\green118\blue70;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c80392\c19216\c19216;\cssrgb\c3529\c52549\c34510;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \cf5 \strokec5 React\cf0 \strokec2 , \{ useState \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 'react'\cf0 \strokec2 ;\cb1 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 HashRouter\cf0 \strokec2 , \cf5 \strokec5 Routes\cf0 \strokec2 , \cf5 \strokec5 Route\cf0 \strokec2 , \cf5 \strokec5 Link\cf0 \strokec2 , useLocation \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 'react-router-dom'\cf0 \strokec2 ;\cb1 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cb1 \
\cb4   \cf5 \strokec5 Menu\cf0 \strokec2 , \cf5 \strokec5 X\cf0 \strokec2 , \cf5 \strokec5 ArrowRight\cf0 \strokec2 , \cf5 \strokec5 Phone\cf0 \strokec2 , \cf5 \strokec5 Mail\cf0 \strokec2 , \cf5 \strokec5 MapPin\cf0 \strokec2 , \cf5 \strokec5 ChevronRight\cf0 \strokec2 ,\cb1 \
\cb4   \cf5 \strokec5 Target\cf0 \strokec2 , \cf5 \strokec5 ShoppingCart\cf0 \strokec2 , \cf5 \strokec5 Crown\cf0 \strokec2 , \cf5 \strokec5 FlaskConical\cf0 \strokec2 , \cf5 \strokec5 Lock\cf0 \strokec2 , \cf5 \strokec5 Sun\cf0 \strokec2 , \cf5 \strokec5 Car\cf0 \strokec2 , \cf5 \strokec5 Factory\cf0 \strokec2 ,\cb1 \
\cb4   \cf5 \strokec5 History\cf0 \strokec2 , \cf5 \strokec5 Award\cf0 \strokec2 , \cf5 \strokec5 HeartHandshake\cf0 \strokec2 , \cf5 \strokec5 ChevronDown\cf0 \strokec2 , \cf5 \strokec5 Info\cf0 \strokec2 , \cf5 \strokec5 Building2\cf0 \strokec2 , \cf5 \strokec5 CheckCircle2\cf0 \cb1 \strokec2 \
\cb4 \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 'lucide-react'\cf0 \strokec2 ;\cb1 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 COMPANY_DATA\cf0 \strokec2 , \cf5 \strokec5 SERVICES\cf0 \strokec2 , \cf5 \strokec5 SomSymbolLogo\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 './constants'\cf0 \strokec2 ;\cb1 \
\
\cf3 \cb4 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 DynamicIcon\cf0 \strokec2  = (\{ name, className \}: \{ name: \cf3 \strokec3 string\cf0 \strokec2 ; className?: \cf3 \strokec3 string\cf0 \strokec2  \}) => \{\cb1 \
\cb4   \cf3 \strokec3 const\cf0 \strokec2  icons: \cf5 \strokec5 Record\cf0 \strokec2 <\cf3 \strokec3 string\cf0 \strokec2 , \cf3 \strokec3 any\cf0 \strokec2 > = \{\cb1 \
\cb4     \cf5 \strokec5 Target\cf0 \strokec2 , \cf5 \strokec5 Phone\cf0 \strokec2 , \cf5 \strokec5 ShoppingCart\cf0 \strokec2 , \cf5 \strokec5 Crown\cf0 \strokec2 , \cf5 \strokec5 FlaskConical\cf0 \strokec2 , \cf5 \strokec5 Lock\cf0 \strokec2 , \cf5 \strokec5 Sun\cf0 \strokec2 , \cf5 \strokec5 Car\cf0 \strokec2 , \cf5 \strokec5 Factory\cf0 \strokec2 ,\cb1 \
\cb4     \cf5 \strokec5 History\cf0 \strokec2 , \cf5 \strokec5 Award\cf0 \strokec2 , \cf5 \strokec5 HeartHandshake\cf0 \cb1 \strokec2 \
\cb4   \};\cb1 \
\cb4   \cf3 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 IconComponent\cf0 \strokec2  = icons[name] || \cf5 \strokec5 Target\cf0 \strokec2 ;\cb1 \
\cb4   \cf3 \strokec3 return\cf0 \strokec2  <\cf5 \strokec5 IconComponent\cf0 \strokec2  className=\{className\} />;\cb1 \
\cb4 \};\cb1 \
\
\cf3 \cb4 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 Navbar\cf0 \strokec2  = () => \{\cb1 \
\cb4   \cf3 \strokec3 const\cf0 \strokec2  [isOpen, setIsOpen] = useState(\cf3 \strokec3 false\cf0 \strokec2 );\cb1 \
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
\cb4           <\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/"\cf0 \strokec2  className=\cf6 \strokec6 "flex items-center group space-x-3"\cf0 \strokec2 >\cb1 \
\cb4             <\cf5 \strokec5 SomSymbolLogo\cf0 \strokec2  className=\cf6 \strokec6 "h-8 w-8 sm:h-10 sm:w-10 transition-transform group-hover:scale-110"\cf0 \strokec2  />\cb1 \
\cb4             <div className=\cf6 \strokec6 "flex flex-col"\cf0 \strokec2 >\cb1 \
\cb4               <span className=\cf6 \strokec6 "text-xl font-bold tracking-tighter text-slate-900 group-hover:text-orange-500 transition-colors"\cf0 \strokec2 >\cb1 \
\cb4                 \cf7 \cb4 \strokec7 \uc0\u26666 \u24335 \u20250 \u31038 \cf5 \cb4 \strokec5 SOM\cf0 \cb1 \strokec2 \
\cb4               </span>\cb1 \
\cb4               <span className=\cf6 \strokec6 "text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none"\cf0 \strokec2 >\cb1 \
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
\cb4               </\cf5 \strokec5 Link\cf0 \strokec2 >\cb1 \
\cb4             ))\}\cb1 \
\cb4             <\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/contact"\cf0 \strokec2  className=\cf6 \strokec6 "bg-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-900 transition-all shadow-md"\cf0 \strokec2 >\cb1 \
\cb4               \cf7 \cb4 \strokec7 \uc0\u28961 \u26009 \u30456 \u35527 \cf0 \cb1 \strokec2 \
\cb4             </\cf5 \strokec5 Link\cf0 \strokec2 >\cb1 \
\cb4           </div>\cb1 \
\
\cb4           <div className=\cf6 \strokec6 "md:hidden"\cf0 \strokec2 >\cb1 \
\cb4             <button onClick=\{() => setIsOpen(!isOpen)\} className=\cf6 \strokec6 "text-slate-600 p-2"\cf0 \strokec2 >\cb1 \
\cb4               \{isOpen ? <\cf5 \strokec5 X\cf0 \strokec2  className=\cf6 \strokec6 "h-6 w-6"\cf0 \strokec2  /> : <\cf5 \strokec5 Menu\cf0 \strokec2  className=\cf6 \strokec6 "h-6 w-6"\cf0 \strokec2  />\}\cb1 \
\cb4             </button>\cb1 \
\cb4           </div>\cb1 \
\cb4         </div>\cb1 \
\cb4       </div>\cb1 \
\cb4       \{isOpen && (\cb1 \
\cb4         <div className=\cf6 \strokec6 "md:hidden bg-white border-t border-slate-100 absolute top-full left-0 w-full shadow-2xl"\cf0 \strokec2 >\cb1 \
\cb4           <div className=\cf6 \strokec6 "px-4 py-6 space-y-1"\cf0 \strokec2 >\cb1 \
\cb4             \{navLinks.map((link) => (\cb1 \
\cb4               <\cf5 \strokec5 Link\cf0 \cb1 \strokec2 \
\cb4                 key=\{link.path\}\cb1 \
\cb4                 to=\{link.path\}\cb1 \
\cb4                 onClick=\{() => setIsOpen(\cf3 \strokec3 false\cf0 \strokec2 )\}\cb1 \
\cb4                 className=\{\cf6 \strokec6 `block px-4 py-4 text-base font-bold rounded-xl \cf0 \strokec2 $\{location.pathname === link.path ? \cf6 \strokec6 'bg-orange-50 text-orange-600'\cf0 \strokec2  : \cf6 \strokec6 'text-slate-700'\cf0 \strokec2 \}\cf6 \strokec6 `\cf0 \strokec2 \}\cb1 \
\cb4               >\cb1 \
\cb4                 \{link.name\}\cb1 \
\cb4               </\cf5 \strokec5 Link\cf0 \strokec2 >\cb1 \
\cb4             ))\}\cb1 \
\cb4           </div>\cb1 \
\cb4         </div>\cb1 \
\cb4       )\}\cb1 \
\cb4     </nav>\cb1 \
\cb4   );\cb1 \
\cb4 \};\cb1 \
\
\cf3 \cb4 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 Footer\cf0 \strokec2  = () => \{\cb1 \
\cb4   \cf3 \strokec3 return\cf0 \strokec2  (\cb1 \
\cb4     <footer className=\cf6 \strokec6 "bg-slate-900 text-slate-300 pt-20 pb-10"\cf0 \strokec2 >\cb1 \
\cb4       <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"\cf0 \strokec2 >\cb1 \
\cb4         <div className=\cf6 \strokec6 "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"\cf0 \strokec2 >\cb1 \
\cb4           <div className=\cf6 \strokec6 "space-y-6"\cf0 \strokec2 >\cb1 \
\cb4             <\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/"\cf0 \strokec2  className=\cf6 \strokec6 "flex items-center group space-x-3"\cf0 \strokec2 >\cb1 \
\cb4               <\cf5 \strokec5 SomSymbolLogo\cf0 \strokec2  className=\cf6 \strokec6 "h-10 w-10 brightness-0 invert"\cf0 \strokec2  />\cb1 \
\cb4               <span className=\cf6 \strokec6 "text-2xl font-bold tracking-tight text-white !text-white"\cf0 \strokec2  style=\{\{ color: \cf6 \strokec6 '#ffffff'\cf0 \strokec2  \}\}>\cb1 \
\cb4                 \cf7 \cb4 \strokec7 \uc0\u26666 \u24335 \u20250 \u31038 \cf5 \cb4 \strokec5 SOM\cf0 \cb1 \strokec2 \
\cb4               </span>\cb1 \
\cb4             </\cf5 \strokec5 Link\cf0 \strokec2 >\cb1 \
\cb4             <p className=\cf6 \strokec6 "text-sm leading-relaxed text-slate-400"\cf0 \strokec2 >\cb1 \
\cb4               \cf7 \cb4 \strokec7 \uc0\u12300 \u20154 \u12301 \u12392 \u12300 \u31038 \u20250 \u12301 \u12434 \u26368 \u36969 \u21270 \u12377 \u12427 \u12290 \u12475 \u12540 \u12523 \u12473 \u12289 \u12501 \u12451 \u12483 \u12488 \u12493 \u12473 \u12289 \u20877 \u29983 \u12456 \u12493 \u12523 \u12462 \u12540 \u12290 \cf8 \cb4 \strokec8 3\cf7 \cb4 \strokec7 \uc0\u12388 \u12398 \u26609 \u12391 \u26410 \u26469 \u12434 \u20999 \u12426 \u25299 \u12365 \u12414 \u12377 \u12290 \cf0 \cb1 \strokec2 \
\cb4             </p>\cb1 \
\cb4           </div>\cb1 \
\cb4           <div>\cb1 \
\cb4             <h3 className=\cf6 \strokec6 "font-bold mb-6 text-sm uppercase tracking-widest text-white !text-white"\cf0 \strokec2  style=\{\{ color: \cf6 \strokec6 '#ffffff'\cf0 \strokec2  \}\}>\cf5 \strokec5 SERVICES\cf0 \strokec2 </h3>\cb1 \
\cb4             <ul className=\cf6 \strokec6 "space-y-4 text-sm font-medium"\cf0 \strokec2 >\cb1 \
\cb4               <li><\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/services"\cf0 \strokec2  className=\cf6 \strokec6 "hover:text-orange-400"\cf0 \strokec2 >\cf7 \cb4 \strokec7 \uc0\u12475 \u12540 \u12523 \u12473 \u12539 \u12510 \u12540 \u12465 \u12486 \u12451 \u12531 \u12464 \cf0 \cb4 \strokec2 </\cf5 \strokec5 Link\cf0 \strokec2 ></li>\cb1 \
\cb4               <li><\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/services"\cf0 \strokec2  className=\cf6 \strokec6 "hover:text-orange-400"\cf0 \strokec2 >\cf7 \cb4 \strokec7 \uc0\u12497 \u12540 \u12477 \u12490 \u12523 \u12472 \u12512 \u20107 \u26989 \cf0 \cb4 \strokec2 </\cf5 \strokec5 Link\cf0 \strokec2 ></li>\cb1 \
\cb4               <li><\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/services"\cf0 \strokec2  className=\cf6 \strokec6 "hover:text-orange-400"\cf0 \strokec2 >\cf7 \cb4 \strokec7 \uc0\u20877 \u29983 \u12456 \u12493 \u12523 \u12462 \u12540 \u20107 \u26989 \cf0 \cb4 \strokec2 </\cf5 \strokec5 Link\cf0 \strokec2 ></li>\cb1 \
\cb4             </ul>\cb1 \
\cb4           </div>\cb1 \
\cb4           <div>\cb1 \
\cb4             <h3 className=\cf6 \strokec6 "font-bold mb-6 text-sm uppercase tracking-widest text-white !text-white"\cf0 \strokec2  style=\{\{ color: \cf6 \strokec6 '#ffffff'\cf0 \strokec2  \}\}>\cf5 \strokec5 COMPANY\cf0 \strokec2 </h3>\cb1 \
\cb4             <ul className=\cf6 \strokec6 "space-y-4 text-sm font-medium"\cf0 \strokec2 >\cb1 \
\cb4               <li className=\cf6 \strokec6 "flex items-start space-x-3"\cf0 \strokec2 >\cb1 \
\cb4                 <\cf5 \strokec5 MapPin\cf0 \strokec2  className=\cf6 \strokec6 "h-5 w-5 text-orange-500 shrink-0"\cf0 \strokec2  />\cb1 \
\cb4                 <span className=\cf6 \strokec6 "text-white !text-white"\cf0 \strokec2  style=\{\{ color: \cf6 \strokec6 '#ffffff'\cf0 \strokec2  \}\}>\{\cf5 \strokec5 COMPANY_DATA\cf0 \strokec2 .address\}</span>\cb1 \
\cb4               </li>\cb1 \
\cb4               <li className=\cf6 \strokec6 "flex items-center space-x-3"\cf0 \strokec2 >\cb1 \
\cb4                 <\cf5 \strokec5 Building2\cf0 \strokec2  className=\cf6 \strokec6 "h-5 w-5 text-orange-500 shrink-0"\cf0 \strokec2  />\cb1 \
\cb4                 <span className=\cf6 \strokec6 "text-white !text-white"\cf0 \strokec2  style=\{\{ color: \cf6 \strokec6 '#ffffff'\cf0 \strokec2  \}\}>\cf7 \cb4 \strokec7 \uc0\u20195 \u34920 \u65306 \cf0 \cb4 \strokec2 \{\cf5 \strokec5 COMPANY_DATA\cf0 \strokec2 .representative\}</span>\cb1 \
\cb4               </li>\cb1 \
\cb4             </ul>\cb1 \
\cb4           </div>\cb1 \
\cb4           <div>\cb1 \
\cb4             <h3 className=\cf6 \strokec6 "font-bold mb-6 text-sm uppercase tracking-widest text-white !text-white"\cf0 \strokec2  style=\{\{ color: \cf6 \strokec6 '#ffffff'\cf0 \strokec2  \}\}>\cf5 \strokec5 CONTACT\cf0 \strokec2 </h3>\cb1 \
\cb4             <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec2 >\cb1 \
\cb4               <p className=\cf6 \strokec6 "text-xs text-slate-500 font-bold uppercase tracking-wider"\cf0 \strokec2 >\cf5 \strokec5 Mail\cf0 \strokec2  \cf5 \strokec5 Address\cf0 \strokec2 </p>\cb1 \
\cb4               <p className=\cf6 \strokec6 "text-sm font-bold underline underline-offset-4 decoration-orange-500 text-white !text-white"\cf0 \strokec2  style=\{\{ color: \cf6 \strokec6 '#ffffff'\cf0 \strokec2  \}\}>info\cf7 \cb4 \strokec7 @\cf0 \cb4 \strokec2 som-biz.com</p>\cb1 \
\cb4             </div>\cb1 \
\cb4           </div>\cb1 \
\cb4         </div>\cb1 \
\cb4         <div className=\cf6 \strokec6 "pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest font-bold"\cf0 \strokec2 >\cb1 \
\cb4           <p className=\cf6 \strokec6 "text-white !text-white"\cf0 \strokec2  style=\{\{ color: \cf6 \strokec6 '#ffffff'\cf0 \strokec2  \}\}>\cf7 \cb4 \strokec7 \'a9\cf0 \cb4 \strokec2  \{\cf3 \strokec3 new\cf0 \strokec2  \cf5 \strokec5 Date\cf0 \strokec2 ().getFullYear()\} \cf7 \cb4 \strokec7 \uc0\u26666 \u24335 \u20250 \u31038 \cf5 \cb4 \strokec5 SOM\cf0 \strokec2  \cf5 \strokec5 All\cf0 \strokec2  rights reserved.</p>\cb1 \
\cb4         </div>\cb1 \
\cb4       </div>\cb1 \
\cb4     </footer>\cb1 \
\cb4   );\cb1 \
\cb4 \};\cb1 \
\
\cf3 \cb4 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 HomePage\cf0 \strokec2  = () => (\cb1 \
\cb4   <div className=\cf6 \strokec6 "animate-in fade-in duration-1000"\cf0 \strokec2 >\cb1 \
\cb4     <section className=\cf6 \strokec6 "relative pt-32 pb-24 sm:pt-48 sm:pb-40 hero-mesh overflow-hidden"\cf0 \strokec2 >\cb1 \
\cb4       <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"\cf0 \strokec2 >\cb1 \
\cb4         <div className=\cf6 \strokec6 "max-w-4xl"\cf0 \strokec2 >\cb1 \
\cb4           <div className=\cf6 \strokec6 "inline-flex items-center space-x-2 bg-orange-100/50 text-orange-700 px-4 py-1.5 rounded-full text-xs font-black mb-8 border border-orange-200"\cf0 \strokec2 >\cb1 \
\cb4              <span className=\cf6 \strokec6 "uppercase tracking-[0.1em]"\cf0 \strokec2 >\cf5 \strokec5 Innovation\cf0 \strokec2  \cf3 \strokec3 for\cf0 \strokec2  \cf8 \cb4 \strokec8 2025\cf0 \cb4 \strokec2 </span>\cb1 \
\cb4           </div>\cb1 \
\cb4           <h1 className=\cf6 \strokec6 "text-5xl sm:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.05] mb-8"\cf0 \strokec2 >\cb1 \
\cb4             \cf7 \cb4 \strokec7 \uc0\u21487 \u33021 \u24615 \u12434 \u12289 \cf0 \cb4 \strokec2 <br />\cb1 \
\cb4             <span className=\cf6 \strokec6 "gradient-text"\cf0 \strokec2 >\cf7 \cb4 \strokec7 \uc0\u20181 \u32068 \u12415 \u12395 \u12377 \u12427 \u12290 \cf0 \cb4 \strokec2 </span>\cb1 \
\cb4           </h1>\cb1 \
\cb4           <p className=\cf6 \strokec6 "text-lg sm:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl font-medium"\cf0 \strokec2 >\cb1 \
\cb4             \cf7 \cb4 \strokec7 \uc0\u12475 \u12540 \u12523 \u12473 \u12289 \u12501 \u12451 \u12483 \u12488 \u12493 \u12473 \u12289 \u20877 \u29983 \u12456 \u12493 \u12523 \u12462 \u12540 \u12290 \u12377 \u12409 \u12390 \u12300 \u12424 \u12426 \u33391 \u12356 \u26126 \u26085 \u12301 \u12408 \u12392 \u32331 \u12364 \u12387 \u12390 \u12356 \u12414 \u12377 \u12290 \cf0 \cb1 \strokec2 \
\cb4           </p>\cb1 \
\cb4           <div className=\cf6 \strokec6 "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"\cf0 \strokec2 >\cb1 \
\cb4             <\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/services"\cf0 \strokec2  className=\cf6 \strokec6 "inline-flex items-center justify-center bg-slate-900 text-white px-10 py-5 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl text-lg"\cf0 \strokec2 >\cb1 \
\cb4               \cf7 \cb4 \strokec7 \uc0\u20107 \u26989 \u20869 \u23481 \u12434 \u35211 \u12427 \cf0 \cb4 \strokec2  <\cf5 \strokec5 ArrowRight\cf0 \strokec2  className=\cf6 \strokec6 "ml-2 w-5 h-5"\cf0 \strokec2  />\cb1 \
\cb4             </\cf5 \strokec5 Link\cf0 \strokec2 >\cb1 \
\cb4           </div>\cb1 \
\cb4         </div>\cb1 \
\cb4       </div>\cb1 \
\cb4     </section>\cb1 \
\cb4     <section className=\cf6 \strokec6 "py-24 bg-white"\cf0 \strokec2 >\cb1 \
\cb4       <div className=\cf6 \strokec6 "max-w-5xl mx-auto px-4 text-center"\cf0 \strokec2 >\cb1 \
\cb4         <div className=\cf6 \strokec6 "bg-orange-500 p-16 sm:p-24 rounded-[4rem] shadow-2xl"\cf0 \strokec2 >\cb1 \
\cb4           <h2 className=\cf6 \strokec6 "text-3xl sm:text-5xl font-bold text-white mb-8 leading-tight"\cf0 \strokec2 >\cb1 \
\cb4             \cf7 \cb4 \strokec7 \uc0\u12354 \u12394 \u12383 \u12398 \u12499 \u12472 \u12493 \u12473 \u12398 \u21487 \u33021 \u24615 \u12434 \u12289 \cf0 \cb4 \strokec2 <br />\cf7 \cb4 \strokec7 \uc0\u20849 \u12395 \u35211 \u12388 \u12369 \u20986 \u12375 \u12414 \u12375 \u12423 \u12358 \u12290 \cf0 \cb1 \strokec2 \
\cb4           </h2>\cb1 \
\cb4           <\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/contact"\cf0 \strokec2  className=\cf6 \strokec6 "inline-flex items-center justify-center bg-white text-orange-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-slate-900 hover:text-white transition-all shadow-xl"\cf0 \strokec2 >\cb1 \
\cb4             \cf7 \cb4 \strokec7 \uc0\u28961 \u26009 \u30456 \u35527 \u12434 \u30003 \u12375 \u36796 \u12416 \cf0 \cb4 \strokec2  <\cf5 \strokec5 ArrowRight\cf0 \strokec2  className=\cf6 \strokec6 "ml-3 w-6 h-6"\cf0 \strokec2  />\cb1 \
\cb4           </\cf5 \strokec5 Link\cf0 \strokec2 >\cb1 \
\cb4         </div>\cb1 \
\cb4       </div>\cb1 \
\cb4     </section>\cb1 \
\cb4   </div>\cb1 \
\cb4 );\cb1 \
\
\cf3 \cb4 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 AboutPage\cf0 \strokec2  = () => (\cb1 \
\cb4   <div className=\cf6 \strokec6 "pt-24 animate-in fade-in slide-in-from-bottom-4 duration-700"\cf0 \strokec2 >\cb1 \
\cb4     <div className=\cf6 \strokec6 "bg-slate-50 py-32 mb-20"\cf0 \strokec2 >\cb1 \
\cb4       <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left"\cf0 \strokec2 >\cb1 \
\cb4         <h1 className=\cf6 \strokec6 "text-sm font-black text-orange-600 tracking-[0.5em] uppercase mb-6"\cf0 \strokec2 >\cf5 \strokec5 ABOUT\cf0 \strokec2  \cf5 \strokec5 SOM\cf0 \strokec2 </h1>\cb1 \
\cb4         <p className=\cf6 \strokec6 "text-5xl sm:text-7xl font-bold text-slate-900"\cf0 \strokec2 >\cf7 \cb4 \strokec7 \uc0\u20250 \u31038 \u27010 \u35201 \u12539 \u20195 \u34920 \u32057 \u20171 \cf0 \cb4 \strokec2 </p>\cb1 \
\cb4       </div>\cb1 \
\cb4     </div>\cb1 \
\cb4     <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-40"\cf0 \strokec2 >\cb1 \
\cb4       <div className=\cf6 \strokec6 "grid grid-cols-1 lg:grid-cols-12 gap-16 mb-48"\cf0 \strokec2 >\cb1 \
\cb4         <div className=\cf6 \strokec6 "lg:col-span-5"\cf0 \strokec2 >\cb1 \
\cb4            <div className=\cf6 \strokec6 "rounded-[3rem] overflow-hidden shadow-2xl bg-white p-4 border border-slate-100"\cf0 \strokec2 >\cb1 \
\cb4               <img src=\cf6 \strokec6 "https://images.unsplash.com/photo-1519085185971-7ad0bb2fd27d?auto=format&fit=crop&q=80&w=1000"\cf0 \strokec2  alt=\cf6 \strokec6 "CEO"\cf0 \strokec2  className=\cf6 \strokec6 "rounded-[2.5rem] w-full aspect-[3/4] object-cover"\cf0 \strokec2  />\cb1 \
\cb4               <div className=\cf6 \strokec6 "mt-8 px-6 pb-6 text-center lg:text-left"\cf0 \strokec2 >\cb1 \
\cb4                 <p className=\cf6 \strokec6 "text-xs font-black text-orange-500 tracking-widest uppercase mb-1"\cf0 \strokec2 >\cf5 \strokec5 Representative\cf0 \strokec2  \cf5 \strokec5 Director\cf0 \strokec2 </p>\cb1 \
\cb4                 <h3 className=\cf6 \strokec6 "text-4xl font-bold text-slate-900"\cf0 \strokec2 >\{\cf5 \strokec5 COMPANY_DATA\cf0 \strokec2 .representative\}</h3>\cb1 \
\cb4               </div>\cb1 \
\cb4            </div>\cb1 \
\cb4         </div>\cb1 \
\cb4         <div className=\cf6 \strokec6 "lg:col-span-7 space-y-8"\cf0 \strokec2 >\cb1 \
\cb4           <h2 className=\cf6 \strokec6 "text-4xl font-bold text-slate-900"\cf0 \strokec2 >\cf7 \cb4 \strokec7 \uc0\u12300 \u20154 \u12301 \u12398 \u21487 \u33021 \u24615 \u12434 \u26368 \u22823 \u21270 \u12375 \u12289 \u31038 \u20250 \u12398 \u26368 \u36969 \u35299 \u12434 \u23566 \u12365 \u20986 \u12377 \u12290 \cf0 \cb4 \strokec2 </h2>\cb1 \
\cb4           <p className=\cf6 \strokec6 "text-slate-600 text-lg leading-relaxed"\cf0 \strokec2 >\cf8 \cb4 \strokec8 2016\cf7 \cb4 \strokec7 \uc0\u24180 \u12398 \u35373 \u31435 \u24403 \u21021 \u12363 \u12425 \u22793 \u12431 \u12425 \u12394 \u12356 \u24819 \u12356 \u12364 \u12354 \u12426 \u12414 \u12377 \u12290 \u12475 \u12540 \u12523 \u12473 \u12391 \u12463 \u12521 \u12452 \u12450 \u12531 \u12488 \u12398 \u21487 \u33021 \u24615 \u12434 \u24195 \u12370 \u12289 \u12472 \u12512 \u12391 \u20491 \u20154 \u12398 \u27963 \u21147 \u12434 \u26368 \u22823 \u21270 \u12375 \u12289 \u20877 \u29983 \u12456 \u12493 \u12523 \u12462 \u12540 \u12391 \u31038 \u20250 \u12398 \u25345 \u32154 \u21487 \u33021 \u24615 \u12434 \u25903 \u12360 \u12427 \u12290 \u12371 \u12428 \u12425 \u12399 \u12377 \u12409 \u12390 \u19968 \u12388 \u12398 \u20870 \u12392 \u12394 \u12387 \u12390 \u32331 \u12364 \u12387 \u12390 \u12356 \u12414 \u12377 \u12290 \cf0 \cb4 \strokec2 </p>\cb1 \
\cb4         </div>\cb1 \
\cb4       </div>\cb1 \
\cb4       <div className=\cf6 \strokec6 "bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden"\cf0 \strokec2 >\cb1 \
\cb4         \{[\cb1 \
\cb4           \{ label: \cf6 \strokec6 "\uc0\u20250 \u31038 \u21517 "\cf0 \strokec2 , value: \cf5 \strokec5 COMPANY_DATA\cf0 \strokec2 .name \},\cb1 \
\cb4           \{ label: \cf6 \strokec6 "\uc0\u20195 \u34920 \u21462 \u32224 \u24441 "\cf0 \strokec2 , value: \cf5 \strokec5 COMPANY_DATA\cf0 \strokec2 .representative \},\cb1 \
\cb4           \{ label: \cf6 \strokec6 "\uc0\u25152 \u22312 \u22320 "\cf0 \strokec2 , value: \cf5 \strokec5 COMPANY_DATA\cf0 \strokec2 .address \},\cb1 \
\cb4           \{ label: \cf6 \strokec6 "\uc0\u35373 \u31435 "\cf0 \strokec2 , value: \cf5 \strokec5 COMPANY_DATA\cf0 \strokec2 .established \},\cb1 \
\cb4           \{ label: \cf6 \strokec6 "\uc0\u20107 \u26989 \u20869 \u23481 "\cf0 \strokec2 , value: (\cb1 \
\cb4             <ul className=\cf6 \strokec6 "space-y-2"\cf0 \strokec2 >\cb1 \
\cb4               \{\cf5 \strokec5 COMPANY_DATA\cf0 \strokec2 .businessDetails.map(d => <li key=\{d\} className=\cf6 \strokec6 "flex items-center font-bold text-slate-700"\cf0 \strokec2 ><div className=\cf6 \strokec6 "w-1.5 h-1.5 rounded-full bg-orange-500 mr-3"\cf0 \strokec2 ></div>\{d\}</li>)\}\cb1 \
\cb4             </ul>\cb1 \
\cb4           )\},\cb1 \
\cb4         ].map((row, idx) => (\cb1 \
\cb4           <div key=\{idx\} className=\cf6 \strokec6 "flex flex-col md:flex-row py-10 px-10 border-b border-slate-50 last:border-0"\cf0 \strokec2 >\cb1 \
\cb4             <div className=\cf6 \strokec6 "md:w-1/3 text-xs font-black text-slate-400 uppercase tracking-widest mb-2 md:mb-0"\cf0 \strokec2 >\{row.label\}</div>\cb1 \
\cb4             <div className=\cf6 \strokec6 "md:w-2/3 text-xl text-slate-900 font-bold"\cf0 \strokec2 >\{row.value\}</div>\cb1 \
\cb4           </div>\cb1 \
\cb4         ))\}\cb1 \
\cb4       </div>\cb1 \
\cb4     </div>\cb1 \
\cb4   </div>\cb1 \
\cb4 );\cb1 \
\
\cf3 \cb4 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 ServicesPage\cf0 \strokec2  = () => \{\cb1 \
\cb4   \cf3 \strokec3 const\cf0 \strokec2  [expandedFeature, setExpandedFeature] = useState<\cf3 \strokec3 string\cf0 \strokec2  | \cf3 \strokec3 null\cf0 \strokec2 >(\cf3 \strokec3 null\cf0 \strokec2 );\cb1 \
\cb4   \cf3 \strokec3 return\cf0 \strokec2  (\cb1 \
\cb4     <div className=\cf6 \strokec6 "pt-24 animate-in fade-in slide-in-from-bottom-4 duration-700"\cf0 \strokec2 >\cb1 \
\cb4       <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"\cf0 \strokec2 >\cb1 \
\cb4         <h1 className=\cf6 \strokec6 "text-sm font-black text-orange-600 tracking-[0.5em] uppercase mb-6"\cf0 \strokec2 >\cf5 \strokec5 WHAT\cf0 \strokec2  \cf5 \strokec5 WE\cf0 \strokec2  \cf5 \strokec5 DO\cf0 \strokec2 </h1>\cb1 \
\cb4         <p className=\cf6 \strokec6 "text-5xl sm:text-7xl font-bold text-slate-900 mb-10"\cf0 \strokec2 >\cf7 \cb4 \strokec7 \uc0\u20107 \u26989 \u20869 \u23481 \cf0 \cb4 \strokec2 </p>\cb1 \
\cb4       </div>\cb1 \
\cb4       <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-40 space-y-48"\cf0 \strokec2 >\cb1 \
\cb4         \{\cf5 \strokec5 SERVICES\cf0 \strokec2 .map((service, idx) => (\cb1 \
\cb4           <div key=\{service.id\} className=\{\cf6 \strokec6 `flex flex-col lg:flex-row items-center gap-16 lg:gap-32 \cf0 \strokec2 $\{idx % \cf8 \cb4 \strokec8 2\cf0 \cb4 \strokec2  !== \cf8 \cb4 \strokec8 0\cf0 \cb4 \strokec2  ? \cf6 \strokec6 'lg:flex-row-reverse'\cf0 \strokec2  : \cf6 \strokec6 ''\cf0 \strokec2 \}\cf6 \strokec6 `\cf0 \strokec2 \}>\cb1 \
\cb4             <div className=\cf6 \strokec6 "w-full lg:w-1/2 rounded-[3.5rem] overflow-hidden shadow-2xl"\cf0 \strokec2 >\cb1 \
\cb4               <img src=\{service.imageUrl\} alt=\{service.title\} className=\cf6 \strokec6 "w-full aspect-[4/3] object-cover"\cf0 \strokec2  />\cb1 \
\cb4             </div>\cb1 \
\cb4             <div className=\cf6 \strokec6 "w-full lg:w-1/2 space-y-10"\cf0 \strokec2 >\cb1 \
\cb4               <h2 className=\cf6 \strokec6 "text-4xl sm:text-6xl font-bold text-slate-900"\cf0 \strokec2 >\{service.title\}</h2>\cb1 \
\cb4               <p className=\cf6 \strokec6 "text-slate-500 text-xl font-medium"\cf0 \strokec2 >\{service.description\}</p>\cb1 \
\cb4               <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec2 >\cb1 \
\cb4                 \{service.features.map(f => (\cb1 \
\cb4                   <div key=\{f.label\} className=\cf6 \strokec6 "border border-slate-100 rounded-[2rem] bg-slate-50"\cf0 \strokec2 >\cb1 \
\cb4                     <button onClick=\{() => setExpandedFeature(expandedFeature === f.label ? \cf3 \strokec3 null\cf0 \strokec2  : f.label)\} className=\cf6 \strokec6 "w-full flex items-center justify-between p-6"\cf0 \strokec2 >\cb1 \
\cb4                       <div className=\cf6 \strokec6 "flex items-center"\cf0 \strokec2 >\cb1 \
\cb4                         <div className=\{\cf6 \strokec6 `w-12 h-12 rounded-full flex items-center justify-center mr-5 \cf0 \strokec2 $\{expandedFeature === f.label ? \cf6 \strokec6 'bg-orange-500 text-white'\cf0 \strokec2  : \cf6 \strokec6 'bg-white text-slate-400'\cf0 \strokec2 \}\cf6 \strokec6 `\cf0 \strokec2 \}>\cb1 \
\cb4                           <\cf5 \strokec5 DynamicIcon\cf0 \strokec2  name=\{f.iconName\} className=\cf6 \strokec6 "w-6 h-6"\cf0 \strokec2  />\cb1 \
\cb4                         </div>\cb1 \
\cb4                         <span className=\cf6 \strokec6 "text-lg font-bold text-slate-700"\cf0 \strokec2 >\{f.label\}</span>\cb1 \
\cb4                       </div>\cb1 \
\cb4                       <\cf5 \strokec5 ChevronDown\cf0 \strokec2  className=\{\cf6 \strokec6 `w-6 h-6 text-slate-300 transition-transform \cf0 \strokec2 $\{expandedFeature === f.label ? \cf6 \strokec6 'rotate-180'\cf0 \strokec2  : \cf6 \strokec6 ''\cf0 \strokec2 \}\cf6 \strokec6 `\cf0 \strokec2 \} />\cb1 \
\cb4                     </button>\cb1 \
\cb4                     \{expandedFeature === f.label && <div className=\cf6 \strokec6 "p-8 pt-0 bg-white rounded-b-[2rem] text-slate-600 font-bold leading-relaxed"\cf0 \strokec2 >\{f.description\}</div>\}\cb1 \
\cb4                   </div>\cb1 \
\cb4                 ))\}\cb1 \
\cb4               </div>\cb1 \
\cb4             </div>\cb1 \
\cb4           </div>\cb1 \
\cb4         ))\}\cb1 \
\cb4       </div>\cb1 \
\cb4     </div>\cb1 \
\cb4   );\cb1 \
\cb4 \};\cb1 \
\
\cf3 \cb4 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 ContactPage\cf0 \strokec2  = () => \{\cb1 \
\cb4   \cf3 \strokec3 const\cf0 \strokec2  [submitted, setSubmitted] = useState(\cf3 \strokec3 false\cf0 \strokec2 );\cb1 \
\cb4   \cf3 \strokec3 if\cf0 \strokec2  (submitted) \cf3 \strokec3 return\cf0 \strokec2  (\cb1 \
\cb4     <div className=\cf6 \strokec6 "pt-32 pb-40 text-center px-4"\cf0 \strokec2 >\cb1 \
\cb4       <div className=\cf6 \strokec6 "bg-orange-100 text-orange-600 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-12"\cf0 \strokec2 ><\cf5 \strokec5 CheckCircle2\cf0 \strokec2  className=\cf6 \strokec6 "w-16 h-16"\cf0 \strokec2  /></div>\cb1 \
\cb4       <h1 className=\cf6 \strokec6 "text-4xl font-bold mb-8"\cf0 \strokec2 >\cf7 \cb4 \strokec7 \uc0\u36865 \u20449 \u23436 \u20102 \u12356 \u12383 \u12375 \u12414 \u12375 \u12383 \cf0 \cb4 \strokec2 </h1>\cb1 \
\cb4       <\cf5 \strokec5 Link\cf0 \strokec2  to=\cf6 \strokec6 "/"\cf0 \strokec2  className=\cf6 \strokec6 "bg-slate-900 text-white px-14 py-6 rounded-full font-bold"\cf0 \strokec2 >\cf7 \cb4 \strokec7 \uc0\u12488 \u12483 \u12503 \u12408 \u25147 \u12427 \cf0 \cb4 \strokec2 </\cf5 \strokec5 Link\cf0 \strokec2 >\cb1 \
\cb4     </div>\cb1 \
\cb4   );\cb1 \
\cb4   \cf3 \strokec3 return\cf0 \strokec2  (\cb1 \
\cb4     <div className=\cf6 \strokec6 "pt-32 pb-40 px-4"\cf0 \strokec2 >\cb1 \
\cb4       <div className=\cf6 \strokec6 "max-w-4xl mx-auto bg-white p-10 sm:p-20 rounded-[4rem] border border-slate-100 shadow-2xl"\cf0 \strokec2 >\cb1 \
\cb4         <h1 className=\cf6 \strokec6 "text-4xl sm:text-6xl font-bold text-center mb-16"\cf0 \strokec2 >\cf7 \cb4 \strokec7 \uc0\u12362 \u21839 \u12356 \u21512 \u12431 \u12379 \cf0 \cb4 \strokec2 </h1>\cb1 \
\cb4         <form onSubmit=\{(e) => \{ e.preventDefault(); setSubmitted(\cf3 \strokec3 true\cf0 \strokec2 ); \}\} className=\cf6 \strokec6 "space-y-8"\cf0 \strokec2 >\cb1 \
\cb4           <input \cf3 \strokec3 type\cf0 \strokec2 =\cf6 \strokec6 "text"\cf0 \strokec2  required placeholder=\cf6 \strokec6 "\uc0\u12362 \u21517 \u21069 "\cf0 \strokec2  className=\cf6 \strokec6 "w-full px-8 py-6 bg-slate-50 rounded-3xl outline-none border focus:border-orange-500 font-bold"\cf0 \strokec2  />\cb1 \
\cb4           <input \cf3 \strokec3 type\cf0 \strokec2 =\cf6 \strokec6 "email"\cf0 \strokec2  required placeholder=\cf6 \strokec6 "\uc0\u12513 \u12540 \u12523 \u12450 \u12489 \u12524 \u12473 "\cf0 \strokec2  className=\cf6 \strokec6 "w-full px-8 py-6 bg-slate-50 rounded-3xl outline-none border focus:border-orange-500 font-bold"\cf0 \strokec2  />\cb1 \
\cb4           <textarea rows=\{\cf8 \cb4 \strokec8 6\cf0 \cb4 \strokec2 \} required placeholder=\cf6 \strokec6 "\uc0\u12372 \u30456 \u35527 \u20869 \u23481 "\cf0 \strokec2  className=\cf6 \strokec6 "w-full px-8 py-6 bg-slate-50 rounded-3xl outline-none border focus:border-orange-500 font-bold resize-none"\cf0 \strokec2 ></textarea>\cb1 \
\cb4           <button \cf3 \strokec3 type\cf0 \strokec2 =\cf6 \strokec6 "submit"\cf0 \strokec2  className=\cf6 \strokec6 "w-full bg-orange-500 text-white py-7 rounded-3xl font-bold text-2xl hover:bg-slate-900 transition-all"\cf0 \strokec2 >\cf7 \cb4 \strokec7 \uc0\u36865 \u20449 \u12377 \u12427 \cf0 \cb4 \strokec2 </button>\cb1 \
\cb4         </form>\cb1 \
\cb4       </div>\cb1 \
\cb4     </div>\cb1 \
\cb4   );\cb1 \
\cb4 \};\cb1 \
\
\cf3 \cb4 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 App\cf0 \strokec2  = () => (\cb1 \
\cb4   <\cf5 \strokec5 HashRouter\cf0 \strokec2 >\cb1 \
\cb4     <div className=\cf6 \strokec6 "min-h-screen flex flex-col bg-white"\cf0 \strokec2 >\cb1 \
\cb4       <\cf5 \strokec5 Navbar\cf0 \strokec2  />\cb1 \
\cb4       <main className=\cf6 \strokec6 "flex-grow pt-16"\cf0 \strokec2 >\cb1 \
\cb4         <\cf5 \strokec5 Routes\cf0 \strokec2 >\cb1 \
\cb4           <\cf5 \strokec5 Route\cf0 \strokec2  path=\cf6 \strokec6 "/"\cf0 \strokec2  element=\{<\cf5 \strokec5 HomePage\cf0 \strokec2  />\} />\cb1 \
\cb4           <\cf5 \strokec5 Route\cf0 \strokec2  path=\cf6 \strokec6 "/services"\cf0 \strokec2  element=\{<\cf5 \strokec5 ServicesPage\cf0 \strokec2  />\} />\cb1 \
\cb4           <\cf5 \strokec5 Route\cf0 \strokec2  path=\cf6 \strokec6 "/about"\cf0 \strokec2  element=\{<\cf5 \strokec5 AboutPage\cf0 \strokec2  />\} />\cb1 \
\cb4           <\cf5 \strokec5 Route\cf0 \strokec2  path=\cf6 \strokec6 "/contact"\cf0 \strokec2  element=\{<\cf5 \strokec5 ContactPage\cf0 \strokec2  />\} />\cb1 \
\cb4         </\cf5 \strokec5 Routes\cf0 \strokec2 >\cb1 \
\cb4       </main>\cb1 \
\cb4       <\cf5 \strokec5 Footer\cf0 \strokec2  />\cb1 \
\cb4     </div>\cb1 \
\cb4   </\cf5 \strokec5 HashRouter\cf0 \strokec2 >\cb1 \
\cb4 );\cb1 \
\
\cf3 \cb4 \strokec3 export\cf0 \strokec2  \cf3 \strokec3 default\cf0 \strokec2  \cf5 \strokec5 App\cf0 \strokec2 ;\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \outl0\strokewidth0 \
}