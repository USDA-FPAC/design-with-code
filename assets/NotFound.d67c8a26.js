import{d as c,_ as p,a as i,r as l,b as o,o as h,e as f,m as s,c as P,l as t,p as T,t as E,j as S,q as b}from"./index.45598447.js";import{u as x}from"./useNavigation.7bbce538.js";import I from"./BaseHeader.e2c7e5c5.js";import"./disclaimer.28db0408.js";const U=c(()=>i(()=>import("./footer-topper.796b2f87.js"),["assets/footer-topper.796b2f87.js","assets/index.45598447.js","assets/index.781efd06.css"])),A=c(()=>i(()=>import("./footer-footer.07db4716.js"),["assets/footer-footer.07db4716.js","assets/index.45598447.js","assets/index.781efd06.css","assets/useNavigation.7bbce538.js"])),C=c(()=>i(()=>import("./footer-screen-id.d1004c63.js"),["assets/footer-screen-id.d1004c63.js","assets/index.45598447.js","assets/index.781efd06.css"])),N=c(()=>i(()=>import("./hidden-items.178cc12b.js"),["assets/hidden-items.178cc12b.js","assets/index.45598447.js","assets/index.781efd06.css"])),y={components:{footerTopper:U,footerFooter:A,footerScreenId:C,hiddenItems:N},setup(){return{currentYear:l(new Date().getFullYear())}}};function R(n,r,a,e,_,g){const d=o("footerTopper"),m=o("footerFooter"),u=o("footerScreenId"),v=o("hiddenItems");return h(),f("footer",null,[s(d),s(m,{APP_ABBR_NAME:"FDS"}),s(u,{SCREEN_ID:"FPAC Design System - "+e.currentYear},null,8,["SCREEN_ID"]),s(v)])}const j=p(y,[["render",R]]),F={components:{baseHeader:I,baseFooter:j},setup(){const n=l("/design-with-code/"),{goto:r}=x(),a=P(()=>{let e=Math.floor(Math.random()*4);return[{img:"sarah-kilian-52jRtc2S_VE-unsplash.jpg",creditName:"Sarah Kilian",creditProfile:"https://unsplash.com/@rojekilian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",creditUrl:"https://unsplash.com/photos/52jRtc2S_VE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",creditSite:"Unsplash"},{img:"etienne-girardet-OA0qcP6GOw0-unsplash.jpg",creditName:"Etienne Girardet",creditProfile:"https://unsplash.com/@etiennegirardet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",creditUrl:"https://unsplash.com/photos/OA0qcP6GOw0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",creditSite:"Unsplash"},{img:"jon-tyson-od1pKBU7PKA-unsplash.jpg",creditName:"Jon Tyson",creditProfile:"https://unsplash.com/@jontyson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",creditUrl:"https://unsplash.com/photos/od1pKBU7PKA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",creditSite:"Unsplash"},{img:"chuttersnap-Odc4dcsjUBw-unsplash.jpg",creditName:"CHUTTERSNAP",creditProfile:"https://unsplash.com/@chuttersnap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",creditUrl:"https://unsplash.com/photos/Odc4dcsjUBw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",creditSite:"Unsplash"}][e]});return{baseUrl:n,goto:r,currentRandomImage:a}}},D={id:"main-content",tabindex:"-1"},O=S('<div class="fds-section"><div class="fds-section__bd"><div class="fds-m-t--l"><div class="fds-level@m fds-level--justify-between"><h1 class="fds-m--none">Page Not Found</h1></div></div></div></div>',1),V={class:"fds-section"},B={class:"fds-section__bd"},w={class:"fds-box fds-box--bg-1 fds-m-t--l"},k=["src"],K={class:"fds-ellipsis fds-text-size--0"},H=b(" Photo Credit: "),L=["href"];function M(n,r,a,e,_,g){const d=o("baseHeader"),m=o("baseFooter");return h(),f("div",null,[s(d),t("main",D,[O,t("div",V,[t("div",B,[t("div",w,[t("img",{src:e.baseUrl+"/img/404/"+e.currentRandomImage.img},null,8,k),t("p",K,[H,t("a",{href:e.currentRandomImage.creditUrl,onClick:r[0]||(r[0]=T(u=>e.goto(e.currentRandomImage.creditUrl,"_blank"),["prevent"]))},E(e.currentRandomImage.creditSite),9,L)])])])])]),s(m)])}const z=p(F,[["render",M]]);export{z as default};
