import { v4 as uuidv4 } from "uuid";
export function useBottom(){

  const footer = `<footer id="dwc-${uuidv4()}">
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
</footer>`;

  const end = `  </div>
  </body>
</html>`;

  return {
    footer,
    end
  }

}