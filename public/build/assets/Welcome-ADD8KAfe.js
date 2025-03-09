import{f as i,o as r,a as u,b as t,u as a,m as x,g as c,c as g,w as n,e as o,P as l,F as f}from"./app-C-Hw1r7J.js";const k={class:"bg-gray-50 text-black/50 dark:bg-black dark:text-white/50"},m={class:"relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"},p={class:"relative w-full max-w-2xl px-6 lg:max-w-7xl"},h={class:"grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"},b={key:0,class:"-mx-3 flex flex-1 justify-end"},w={__name:"Welcome",props:{canLogin:{type:Boolean},canRegister:{type:Boolean},laravelVersion:{type:String,required:!0},phpVersion:{type:String,required:!0}},setup(d){return(s,e)=>(r(),i(f,null,[u(a(x),{title:"Welcome"}),t("div",k,[e[4]||(e[4]=t("img",{id:"background",class:"absolute -left-20 top-0 max-w-[877px]",src:"https://laravel.com/assets/img/welcome/background.svg"},null,-1)),t("div",m,[t("div",p,[t("header",h,[d.canLogin?(r(),i("nav",b,[s.$page.props.auth.user?(r(),g(a(l),{key:0,href:s.route("dashboard"),class:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:n(()=>e[0]||(e[0]=[o(" Dashboard ")])),_:1},8,["href"])):(r(),i(f,{key:1},[u(a(l),{href:s.route("login"),class:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:n(()=>e[1]||(e[1]=[o(" Log in ")])),_:1},8,["href"]),d.canRegister?(r(),g(a(l),{key:0,href:s.route("register"),class:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:n(()=>e[2]||(e[2]=[o(" Register ")])),_:1},8,["href"])):c("",!0)],64))])):c("",!0)]),e[3]||(e[3]=t("main",{class:"mt-6"},null,-1))])])])],64))}};export{w as default};
