{\rtf1\ansi\ansicpg932\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red0\green0\blue255;\red255\green255\blue254;
\red14\green110\blue109;\red144\green1\blue18;\red15\green112\blue1;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c50196\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \cf5 \strokec5 React\cf0 \strokec2  \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 'react'\cf0 \strokec2 ;\cb1 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 CompanyInfo\cf0 \strokec2 , \cf5 \strokec5 ServiceInfo\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 './types'\cf0 \strokec2 ;\cb1 \
\
\cf3 \cb4 \strokec3 export\cf0 \strokec2  \cf3 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 SomSymbolLogo\cf0 \strokec2  = (\{ className = \cf6 \strokec6 "h-8 w-8"\cf0 \strokec2  \}: \{ className?: \cf3 \strokec3 string\cf0 \strokec2  \}) => (\cb1 \
\cb4   <svg viewBox=\cf6 \strokec6 "0 0 100 100"\cf0 \strokec2  fill=\cf6 \strokec6 "none"\cf0 \strokec2  xmlns=\cf6 \strokec6 "http://www.w3.org/2000/svg"\cf0 \strokec2  className=\{className\}>\cb1 \
\cb4     <defs>\cb1 \
\cb4       <linearGradient id=\cf6 \strokec6 "som-logo-grad"\cf0 \strokec2  x1=\cf6 \strokec6 "0%"\cf0 \strokec2  y1=\cf6 \strokec6 "0%"\cf0 \strokec2  x2=\cf6 \strokec6 "100%"\cf0 \strokec2  y2=\cf6 \strokec6 "100%"\cf0 \strokec2 >\cb1 \
\cb4         <stop offset=\cf6 \strokec6 "0%"\cf0 \strokec2  stopColor=\cf6 \strokec6 "#ed1c24"\cf0 \strokec2  />\cb1 \
\cb4         <stop offset=\cf6 \strokec6 "50%"\cf0 \strokec2  stopColor=\cf6 \strokec6 "#f7941d"\cf0 \strokec2  />\cb1 \
\cb4         <stop offset=\cf6 \strokec6 "100%"\cf0 \strokec2  stopColor=\cf6 \strokec6 "#fff200"\cf0 \strokec2  />\cb1 \
\cb4       </linearGradient>\cb1 \
\cb4     </defs>\cb1 \
\cb4     \{\cf7 \cb4 \strokec7 /* \uc0\u22806 \u21608 \u12522 \u12531 \u12464  */\cf0 \cb4 \strokec2 \}\cb1 \
\cb4     <path \cb1 \
\cb4       d=\cf6 \strokec6 "M78,22 C 95,40 95,75 70,90 C 45,105 5,85 5,55 C 5,25 35,5 62,12"\cf0 \strokec2  \cb1 \
\cb4       stroke=\cf6 \strokec6 "url(#som-logo-grad)"\cf0 \strokec2  \cb1 \
\cb4       strokeWidth=\cf6 \strokec6 "7"\cf0 \strokec2  \cb1 \
\cb4       strokeLinecap=\cf6 \strokec6 "round"\cf0 \strokec2  \cb1 \
\cb4     />\cb1 \
\cb4     \{\cf7 \cb4 \strokec7 /* \uc0\u20013 \u22830 \u12398 S\u23383 \u26354 \u32218  */\cf0 \cb4 \strokec2 \}\cb1 \
\cb4     <path \cb1 \
\cb4       d=\cf6 \strokec6 "M55,25 C 40,25 32,45 50,65 C 68,85 62,95 42,95 C 28,95 15,85 12,80"\cf0 \strokec2  \cb1 \
\cb4       stroke=\cf6 \strokec6 "url(#som-logo-grad)"\cf0 \strokec2  \cb1 \
\cb4       strokeWidth=\cf6 \strokec6 "9"\cf0 \strokec2  \cb1 \
\cb4       strokeLinecap=\cf6 \strokec6 "round"\cf0 \strokec2  \cb1 \
\cb4     />\cb1 \
\cb4     \{\cf7 \cb4 \strokec7 /* \uc0\u21491 \u20596 \u12398 \u19977 \u26412 \u30446 \u12398 \u12495 \u12493  */\cf0 \cb4 \strokec2 \}\cb1 \
\cb4     <path \cb1 \
\cb4       d=\cf6 \strokec6 "M68,55 C 75,65 75,80 65,90"\cf0 \strokec2  \cb1 \
\cb4       stroke=\cf6 \strokec6 "url(#som-logo-grad)"\cf0 \strokec2  \cb1 \
\cb4       strokeWidth=\cf6 \strokec6 "5"\cf0 \strokec2  \cb1 \
\cb4       strokeLinecap=\cf6 \strokec6 "round"\cf0 \strokec2  \cb1 \
\cb4     />\cb1 \
\cb4     \{\cf7 \cb4 \strokec7 /* S\uc0\u23383 \u12398 \u36215 \u28857 \u12398 \u12489 \u12483 \u12488  */\cf0 \cb4 \strokec2 \}\cb1 \
\cb4     <circle cx=\cf6 \strokec6 "55"\cf0 \strokec2  cy=\cf6 \strokec6 "25"\cf0 \strokec2  r=\cf6 \strokec6 "7.5"\cf0 \strokec2  fill=\cf6 \strokec6 "url(#som-logo-grad)"\cf0 \strokec2  />\cb1 \
\cb4   </svg>\cb1 \
\cb4 );\cb1 \
\
\cf3 \cb4 \strokec3 export\cf0 \strokec2  \cf3 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 COMPANY_DATA\cf0 \strokec2 : \cf5 \strokec5 CompanyInfo\cf0 \strokec2  = \{\cb1 \
\cb4   name: \cf6 \strokec6 "\uc0\u26666 \u24335 \u20250 \u31038 SOM"\cf0 \strokec2 ,\cb1 \
\cb4   representative: \cf6 \strokec6 "\uc0\u37325 \u37326  \u35029 \u20171 "\cf0 \strokec2 ,\cb1 \
\cb4   address: \cf6 \strokec6 "\uc0\u26481 \u20140 \u37117 \u35914 \u23798 \u21306 \u26481 \u27744 \u34955 1-34-5 6\u38542 "\cf0 \strokec2 ,\cb1 \
\cb4   established: \cf6 \strokec6 "2016\uc0\u24180 8\u26376 16\u26085 "\cf0 \strokec2 ,\cb1 \
\cb4   businessDetails: [\cb1 \
\cb4     \cf6 \strokec6 "\uc0\u12475 \u12540 \u12523 \u12473 \u12539 \u12510 \u12540 \u12465 \u12486 \u12451 \u12531 \u12464 \u20107 \u26989 "\cf0 \strokec2 ,\cb1 \
\cb4     \cf6 \strokec6 "\uc0\u12497 \u12540 \u12477 \u12490 \u12523 \u12472 \u12512 \u20107 \u26989 "\cf0 \strokec2 ,\cb1 \
\cb4     \cf6 \strokec6 "\uc0\u20877 \u29983 \u12456 \u12493 \u12523 \u12462 \u12540 \u35373 \u20633 \u36009 \u22770 \u20107 \u26989 \u65288 \u29987 \u26989 \u29992 \u12539 \u20303 \u23429 \u29992 \u12539 V2H\u12539 \u33988 \u38651 \u27744 \u65289 "\cf0 \cb1 \strokec2 \
\cb4   ]\cb1 \
\cb4 \};\cb1 \
\
\cf3 \cb4 \strokec3 export\cf0 \strokec2  \cf3 \strokec3 const\cf0 \strokec2  \cf5 \strokec5 SERVICES\cf0 \strokec2 : \cf5 \strokec5 ServiceInfo\cf0 \strokec2 [] = [\cb1 \
\cb4   \{\cb1 \
\cb4     id: \cf6 \strokec6 "sales"\cf0 \strokec2 ,\cb1 \
\cb4     title: \cf6 \strokec6 "\uc0\u12475 \u12540 \u12523 \u12473 \u12539 \u12510 \u12540 \u12465 \u12486 \u12451 \u12531 \u12464 \u20107 \u26989 "\cf0 \strokec2 ,\cb1 \
\cb4     description: \cf6 \strokec6 "\uc0\u21942 \u26989 \u20195 \u34892 \u12398 \u26528 \u12434 \u36229 \u12360 \u12289 \u12463 \u12521 \u12452 \u12450 \u12531 \u12488 \u29420 \u33258 \u12398 \u12302 \u22770 \u12428 \u12427 \u20181 \u32068 \u12415 \u12303 \u12434 \u27083 \u31689 \u12290 \u21942 \u26989 \u12473 \u12461 \u12540 \u12512 \u12398 \u27083 \u31689 \u12363 \u12425 \u23455 \u20685 \u12414 \u12391 \u12289 \u20877 \u29694 \u24615 \u12398 \u39640 \u12356 \u12477 \u12522 \u12517 \u12540 \u12471 \u12519 \u12531 \u12434 \u25552 \u20379 \u12375 \u12414 \u12377 \u12290 "\cf0 \strokec2 ,\cb1 \
\cb4     imageUrl: \cf6 \strokec6 "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600"\cf0 \strokec2 ,\cb1 \
\cb4     features: [\cb1 \
\cb4       \{\cb1 \
\cb4         label: \cf6 \strokec6 "\uc0\u21942 \u26989 \u12473 \u12461 \u12540 \u12512 \u27083 \u31689 \u65288 \u21942 \u26989 \u20195 \u34892 \u20250 \u31038 \u27096 \u21521 \u12369 \u65289 "\cf0 \strokec2 ,\cb1 \
\cb4         iconName: \cf6 \strokec6 "Target"\cf0 \strokec2 ,\cb1 \
\cb4         description: \cf6 \strokec6 "\uc0\u23646 \u20154 \u21270 \u12375 \u12383 \u21942 \u26989 \u12434 \u32068 \u32340 \u12398 \u27494 \u22120 \u12408 \u12290 \u25104 \u32004 \u29575 \u12434 \u26368 \u22823 \u21270 \u12377 \u12427 \u12488 \u12540 \u12463 \u12473 \u12463 \u12522 \u12503 \u12488 \u12289 KPI\u31649 \u29702 \u12289 SFA\u36939 \u29992 \u12501 \u12525 \u12540 \u12434 \u12476 \u12525 \u12363 \u12425 \u35373 \u35336 \u12375 \u12289 \u25345 \u32154 \u21487 \u33021 \u12394 \u25104 \u38263 \u12434 \u23455 \u29694 \u12375 \u12414 \u12377 \u12290 "\cf0 \cb1 \strokec2 \
\cb4       \},\cb1 \
\cb4       \{\cb1 \
\cb4         label: \cf6 \strokec6 "\uc0\u12452 \u12531 \u12469 \u12452 \u12489 \u12475 \u12540 \u12523 \u12473 \u20195 \u34892 "\cf0 \strokec2 ,\cb1 \
\cb4         iconName: \cf6 \strokec6 "Phone"\cf0 \strokec2 ,\cb1 \
\cb4         description: \cf6 \strokec6 "\uc0\u36074 \u12398 \u39640 \u12356 \u12522 \u12540 \u12489 \u65288 \u21830 \u35527 \u27231 \u20250 \u65289 \u12434 \u23433 \u23450 \u30340 \u12395 \u12362 \u23626 \u12369 \u12290 \u12479 \u12540 \u12466 \u12483 \u12488 \u36984 \u23450 \u12363 \u12425 \u26550 \u38651 \u12289 \u12490 \u12540 \u12481 \u12515 \u12522 \u12531 \u12464 \u12414 \u12391 \u19968 \u36011 \u12375 \u12390 \u34892 \u12356 \u12289 \u21830 \u35527 \u12398 \u25104 \u32004 \u29575 \u12434 \u22823 \u24133 \u12395 \u21521 \u19978 \u12373 \u12379 \u12414 \u12377 \u12290 "\cf0 \cb1 \strokec2 \
\cb4       \},\cb1 \
\cb4       \{\cb1 \
\cb4         label: \cf6 \strokec6 "\uc0\u12522 \u12486 \u12540 \u12523 \u12510 \u12540 \u12465 \u12486 \u12451 \u12531 \u12464 \u25903 \u25588 "\cf0 \strokec2 ,\cb1 \
\cb4         iconName: \cf6 \strokec6 "ShoppingCart"\cf0 \strokec2 ,\cb1 \
\cb4         description: \cf6 \strokec6 "\uc0\u29694 \u22580 \u12398 \u35506 \u38988 \u12434 \u12487 \u12540 \u12479 \u12391 \u35299 \u12365 \u26126 \u12363 \u12377 \u12290 \u24215 \u33303 \u12398 \u36092 \u36023 \u21205 \u32218 \u20998 \u26512 \u12363 \u12425 \u36009 \u20419 \u12461 \u12515 \u12531 \u12506 \u12540 \u12531 \u12398 \u31435 \u26696 \u12414 \u12391 \u12289 \u22770 \u19978 \u12395 \u30452 \u32080 \u12377 \u12427 \u12510 \u12540 \u12465 \u12486 \u12451 \u12531 \u12464 \u27963 \u21205 \u12434 \u24375 \u21147 \u12395 \u25903 \u25588 \u12375 \u12414 \u12377 \u12290 "\cf0 \cb1 \strokec2 \
\cb4       \}\cb1 \
\cb4     ]\cb1 \
\cb4   \},\cb1 \
\cb4   \{\cb1 \
\cb4     id: \cf6 \strokec6 "gym"\cf0 \strokec2 ,\cb1 \
\cb4     title: \cf6 \strokec6 "\uc0\u12497 \u12540 \u12477 \u12490 \u12523 \u12472 \u12512 \u20107 \u26989 "\cf0 \strokec2 ,\cb1 \
\cb4     description: \cf6 \strokec6 "\uc0\u22810 \u24537 \u12394 \u12499 \u12472 \u12493 \u12473 \u12456 \u12464 \u12476 \u12463 \u12486 \u12451 \u12502 \u12395 \u29305 \u21270 \u12375 \u12383 \u12289 \u39640 \u21177 \u29575 \u12394 \u12508 \u12487 \u12451 \u12510 \u12493 \u12472 \u12513 \u12531 \u12488 \u12290 \u26368 \u39640 \u12398 \u12499 \u12472 \u12493 \u12473 \u12497 \u12501 \u12457 \u12540 \u12510 \u12531 \u12473 \u12399 \u12289 \u26368 \u39640 \u12398 \u36523 \u20307 \u12363 \u12425 \u12290 "\cf0 \strokec2 ,\cb1 \
\cb4     imageUrl: \cf6 \strokec6 "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600"\cf0 \strokec2 ,\cb1 \
\cb4     features: [\cb1 \
\cb4       \{\cb1 \
\cb4         label: \cf6 \strokec6 "\uc0\u12456 \u12464 \u12476 \u12463 \u12486 \u12451 \u12502 \u29305 \u21270 \u12503 \u12525 \u12464 \u12521 \u12512 "\cf0 \strokec2 ,\cb1 \
\cb4         iconName: \cf6 \strokec6 "Crown"\cf0 \strokec2 ,\cb1 \
\cb4         description: \cf6 \strokec6 "\uc0\u20250 \u39135 \u12420 \u20986 \u24373 \u12398 \u22810 \u12356 \u12499 \u12472 \u12493 \u12473 \u12510 \u12531 \u12395 \u21512 \u12431 \u12379 \u12383 \u26580 \u36575 \u12394 \u39135 \u20107 \u25351 \u23566 \u12392 \u12289 \u30701 \u26178 \u38291 \u12391 \u21177 \u26524 \u12434 \u20986 \u12377 \u31185 \u23398 \u30340 \u12488 \u12524 \u12540 \u12491 \u12531 \u12464 \u12290 "\cf0 \cb1 \strokec2 \
\cb4       \},\cb1 \
\cb4       \{\cb1 \
\cb4         label: \cf6 \strokec6 "\uc0\u12496 \u12452 \u12458 \u12513 \u12488 \u12522 \u12463 \u12473 \u20998 \u26512 "\cf0 \strokec2 ,\cb1 \
\cb4         iconName: \cf6 \strokec6 "FlaskConical"\cf0 \strokec2 ,\cb1 \
\cb4         description: \cf6 \strokec6 "\uc0\u20307 \u32068 \u25104 \u35336 \u12395 \u12424 \u12427 \u35443 \u32048 \u12487 \u12540 \u12479 \u12392 \u12289 \u26085 \u12293 \u12398 \u20307 \u35519 \u12525 \u12464 \u12434 \u20998 \u26512 \u12290 \u20027 \u35251 \u12434 \u25490 \u38500 \u12375 \u12289 \u25968 \u20516 \u12395 \u22522 \u12389 \u12356 \u12383 \u30906 \u23455 \u12394 \u32905 \u20307 \u25913 \u36896 \u12434 \u32004 \u26463 \u12375 \u12414 \u12377 \u12290 "\cf0 \cb1 \strokec2 \
\cb4       \},\cb1 \
\cb4       \{\cb1 \
\cb4         label: \cf6 \strokec6 "\uc0\u23436 \u20840 \u12503 \u12521 \u12452 \u12505 \u12540 \u12488 \u31354 \u38291 "\cf0 \strokec2 ,\cb1 \
\cb4         iconName: \cf6 \strokec6 "Lock"\cf0 \strokec2 ,\cb1 \
\cb4         description: \cf6 \strokec6 "\uc0\u37117 \u20250 \u12398 \u21927 \u39442 \u12434 \u24536 \u12428 \u12289 \u33258 \u20998 \u33258 \u36523 \u12398 \u12509 \u12486 \u12531 \u12471 \u12515 \u12523 \u12392 \u21521 \u12365 \u21512 \u12358 \u12383 \u12417 \u12398 \u12521 \u12464 \u12472 \u12517 \u12450 \u12522 \u12540 \u12394 \u31354 \u38291 \u12290 \u24505 \u24213 \u12375 \u12383 \u12503 \u12521 \u12452 \u12496 \u12471 \u12540 \u12434 \u30906 \u20445 \u12375 \u12414 \u12377 \u12290 "\cf0 \cb1 \strokec2 \
\cb4       \}\cb1 \
\cb4     ]\cb1 \
\cb4   \},\cb1 \
\cb4   \{\cb1 \
\cb4     id: \cf6 \strokec6 "energy"\cf0 \strokec2 ,\cb1 \
\cb4     title: \cf6 \strokec6 "\uc0\u20877 \u29983 \u12456 \u12493 \u12523 \u12462 \u12540 \u35373 \u20633 \u36009 \u22770 \u20107 \u26989 "\cf0 \strokec2 ,\cb1 \
\cb4     description: \cf6 \strokec6 "\uc0\u29987 \u26989 \u29992 \u12513 \u12460 \u12477 \u12540 \u12521 \u12540 \u12363 \u12425 \u12289 \u20303 \u23429 \u29992 \u22826 \u38525 \u20809 \u12539 \u33988 \u38651 \u27744 \u12539 V2H\u12414 \u12391 \u12290 \u35373 \u35336 \u12363 \u12425 \u26045 \u24037 \u12289 \u20445 \u23432 \u12414 \u12391 \u19968 \u36011 \u12375 \u12390 \u25552 \u20379 \u12375 \u12414 \u12377 \u12290 "\cf0 \strokec2 ,\cb1 \
\cb4     imageUrl: \cf6 \strokec6 "https://images.unsplash.com/photo-1509391366360-fe5bb65830bb?auto=format&fit=crop&q=80&w=1600"\cf0 \strokec2 ,\cb1 \
\cb4     features: [\cb1 \
\cb4       \{\cb1 \
\cb4         label: \cf6 \strokec6 "\uc0\u20303 \u23429 \u29992 \u22826 \u38525 \u20809 \u12539 \u33988 \u38651 \u27744 \u12539 V2H"\cf0 \strokec2 ,\cb1 \
\cb4         iconName: \cf6 \strokec6 "Sun"\cf0 \strokec2 ,\cb1 \
\cb4         description: \cf6 \strokec6 "EV\uc0\u36554 \u12434 \u23478 \u24237 \u29992 \u38651 \u28304 \u12392 \u12375 \u12390 \u27963 \u29992 \u12377 \u12427 V2H\u12471 \u12473 \u12486 \u12512 \u12394 \u12393 \u12289 \u23478 \u20840 \u20307 \u12398 \u12456 \u12493 \u12523 \u12462 \u12540 \u12510 \u12493 \u12472 \u12513 \u12531 \u12488 \u12434 \u26368 \u36969 \u21270 \u12290 "\cf0 \cb1 \strokec2 \
\cb4       \},\cb1 \
\cb4       \{\cb1 \
\cb4         label: \cf6 \strokec6 "\uc0\u29987 \u26989 \u29992 \u12513 \u12460 \u12477 \u12540 \u12521 \u12540 "\cf0 \strokec2 ,\cb1 \
\cb4         iconName: \cf6 \strokec6 "Factory"\cf0 \strokec2 ,\cb1 \
\cb4         description: \cf6 \strokec6 "\uc0\u20225 \u26989 \u12398 \u33073 \u28845 \u32032 \u32076 \u21942 \u12539 ESG\u25237 \u36039 \u12434 \u24375 \u21147 \u12395 \u25903 \u25588 \u12290 \u36938 \u20241 \u22320 \u12420 \u24037 \u22580 \u23627 \u26681 \u12434 \u27963 \u29992 \u12375 \u12383 \u39640 \u21177 \u29575 \u12394 \u30330 \u38651 \u35373 \u20633 \u12434 \u27083 \u31689 \u12375 \u12414 \u12377 \u12290 "\cf0 \cb1 \strokec2 \
\cb4       \},\cb1 \
\cb4       \{\cb1 \
\cb4         label: \cf6 \strokec6 "\uc0\u27425 \u19990 \u20195 \u12473 \u12510 \u12540 \u12488 \u12452 \u12531 \u12501 \u12521 "\cf0 \strokec2 ,\cb1 \
\cb4         iconName: \cf6 \strokec6 "Car"\cf0 \strokec2 ,\cb1 \
\cb4         description: \cf6 \strokec6 "IoT\uc0\u12434 \u27963 \u29992 \u12375 \u12383 \u12456 \u12493 \u12523 \u12462 \u12540 \u12398 \u21487 \u35222 \u21270 \u12290 \u38651 \u27671 \u12434 \u36023 \u12431 \u12394 \u12356 \u26286 \u12425 \u12375 \u12289 \u29872 \u22659 \u12395 \u20778 \u12375 \u12356 \u27425 \u19990 \u20195 \u12398 \u12452 \u12531 \u12501 \u12521 \u12434 \u25903 \u12360 \u12414 \u12377 \u12290 "\cf0 \cb1 \strokec2 \
\cb4       \}\cb1 \
\cb4     ]\cb1 \
\cb4   \}\cb1 \
\cb4 ];\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
}