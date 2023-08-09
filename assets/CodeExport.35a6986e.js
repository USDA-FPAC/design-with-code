import{_ as H,d as x,a as C,r as d,u as T,c as z,w as A,k as E,o as B,e as L,l as t,x as M,y as V,s as m}from"./index.db65e947.js";import{u as P}from"./useNavigation.0808a807.js";import{u as S}from"./useGrowlControls.bbf4ac49.js";import{v as h}from"./v4.83dbd2d9.js";function N(){return{footer:`<footer id="dwc-${h()}">
  <div class="fsa-topper">
    <div class="fsa-topper__bd"><a class="fsa-topper__link" href="#main-content">Return to top</a></div>
  </div>
  <div class="fsa-footer">
    <div class="fsa-footer__bd">
      <div class="fsa-grid">
        <div class="fsa-footer__primary fsa-grid__1/1 fsa-grid__9/12@l">
          <div class="fsa-grid">
            <div class="fsa-grid__1/1 fsa-grid__1/3@m">
              <h3 class="fsa-footer__cat-header">Program Information</h3>
              <ul class="fsa-footer__list">
                <li class="fsa-footer__list-item"><a to="/" target="_blank">About XYZ</a></li>
                <li class="fsa-footer__list-item"><a href="/" target="_blank">XYZ - Handbook 1</a></li>
                <li class="fsa-footer__list-item"><a href="/" target="_blank">XYZ - Handbook 2</a></li>
              </ul>
            </div>
            <div class="fsa-grid__1/1 fsa-grid__1/3@m">
              <h3 class="fsa-footer__cat-header">Agency Guidelines</h3>
              <ul class="fsa-footer__list">
                <li class="fsa-footer__list-item"><a href="/" target="_blank">Publications</a></li>
                <li class="fsa-footer__list-item"><a href="/" target="_blank">Handbooks</a></li>
                <li class="fsa-footer__list-item"><a href="/" target="_blank">Notices</a></li>
                <li class="fsa-footer__list-item"><a href="/" target="_blank">Employee Forms</a></li>
                <li class="fsa-footer__list-item"><a href="/" target="_blank">Software Transmittals</a></li>
              </ul>
            </div>
            <div class="fsa-grid__1/1 fsa-grid__1/3@m">
              <h3 class="fsa-footer__cat-header">Resources</h3>
              <ul class="fsa-footer__list">
                <li class="fsa-footer__list-item"><a href="/" target="_blank">Inside FPAC</a></li>
                <li class="fsa-footer__list-item"><a href="/" target="_blank">Policies and Links</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="fsa-footer__secondary fsa-grid__1/1 fsa-grid__3/12@l">
          <ul class="fsa-footer__list fsa-footer__secondary-list">
            <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><button class="fsa-btn fsa-footer__btn"
                type="button"><svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img"
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z">
                  </path>
                </svg> Help </button></li>
            <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="tel:+8005551234"
                target="_blank">1-800-555-1234</a></li>
            <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="https://www.fpacbc.usda.gov/"
                target="_blank">FPAC Website</a></li>
            <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="//www.usda.gov/"
                target="_blank">USDA Website</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="fsa-screen-id">
    <div class="fsa-screen-id__bd">
      <dl class="fsa-screen-id__dl">
        <dt class="fsa-screen-id__dt">Screen ID</dt>
        <dd class="fsa-screen-id__dd">XYZ-WEB006</dd>
      </dl>
    </div>
  </div>
</footer>`,end:`  </div>
  </body>
</html>`}}const G=x(()=>C(()=>import("./BaseHeader.c7e86592.js"),["assets/BaseHeader.c7e86592.js","assets/disclaimer.d4f066fd.js","assets/index.db65e947.js","assets/index.27bb0970.css","assets/useNavigation.0808a807.js"])),D={components:{baseHeader:G},setup(c,{emit:e}){const n=d("/design-with-code/"),a=T(),{goto:_}=P(),{showSuccessGrowl:f,showErrorGrowl:o}=S(),{footer:v,end:g}=N(),u=z(()=>{let s=a.getters["codeExport/getHtml"];return s||null}),i=d(),p=()=>{let s=i.value,l=`/>
      <link rel="stylesheet" href="/design-with-code/css/styles.css" />
      <`,y=`/>
      <`;s=s.replaceAll(l,y),s=s.replaceAll(' class="dwc-overlay"',""),s=s.replaceAll("dwc-overlay ",""),s=s.replaceAll("dwc-overlay",""),s=s.split("</main>")[0],s+=v+g,b(s)},r=d(""),b=s=>{r.value=s},w=()=>r.value,k=()=>{let s=w(),l=h();s!=""?(navigator.clipboard.writeText(s),f({id:l,title:"Success",msg:"The code was copied to your Clipboard and is ready to paste."})):o({id:l,title:"Error",msg:"There was no HTML code generated. Nothing was added to your Clipboard."})};return A(u,s=>{i.value=s}),E(()=>{i.value=a.getters["codeExport/getHtml"]}),{baseUrl:n,goto:_,generateHtml:p,pageHtml:r,copyToClickboard:k}}},I={id:"main-content",tabindex:"-1"},X={class:"fds-section"},Y={class:"fds-section__bd"},Z=t("h1",null,"Export Code",-1),F={class:"fds-grid fds-grid--no-gutter"},R={class:"fds-grid__1/1 fds-grid__8/12@l"},U={class:"fds-level fds-m-t--l fds-m-b--m"},W=t("svg",{class:"fsa-icon fsa-icon--size-1","aria-hidden":"true",focusable:"false",role:"img",fill:"#205493",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[t("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})],-1),$=m(" Generate HTML "),O=[W,$],j=t("svg",{class:"fsa-icon fsa-icon--size-1","aria-hidden":"true",focusable:"false",role:"img",fill:"#205493",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[t("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})],-1),q=m(" Copy to Clipboard "),J=[j,q],K=t("div",{class:"fds-grid__1/1 fds-grid__4/12@l fds-p-t--m"},null,-1);function Q(c,e,n,a,_,f){return B(),L("main",I,[t("div",X,[t("div",Y,[Z,t("div",F,[t("div",R,[t("div",U,[t("button",{onClick:e[0]||(e[0]=o=>a.generateHtml()),class:"fds-btn fds-btn--secondary",role:"button"},O),t("button",{onClick:e[1]||(e[1]=o=>a.copyToClickboard()),class:"fds-btn fds-btn--secondary",role:"button"},J)]),t("div",null,[M(t("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>a.pageHtml=o),class:"fds-textarea",rows:"20",name:"Name",placeholder:"HTML Code"},null,512),[[V,a.pageHtml]])])]),K])])])])}const os=H(D,[["render",Q]]);export{os as default};
