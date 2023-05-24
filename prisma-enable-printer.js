// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make Pilkington Prisma printable
// @author       Mika Kekäle
// @match        https://prisma-fi.pilkington.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pilkington.com
// @require      https://code.jquery.com/jquery-3.7.0.min.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    const cleanUp = () => {
    console.log('print!');
    for(const a of document.styleSheets) {
  //if(a.href) {
    for(const rule of a.cssRules) {
      if(rule.media?.mediaText === 'print') {
        for(const ruleRule of rule.cssRules) {
        rule.deleteRule(ruleRule);
        }
      }
    }
    //}
   }

    $('.print-container').remove();


    $(`<style media="print">
    @media print {
*:after {
  // content: attr(class);
}
  body {
    visibility: : hidden;
    margin: 0;
    //overflow: hidden;
  }
  mat-toolbar {
    display: none !important;
  }
  .roles-tabs {
    display: none;
  }
  .prisma-job-details {
    visibility: visible;
    gap: 0 !important;
    flex-direction: row !important;
    flex-wrap: wrap !important;
  }
  .prisma-job-details>div:nth-child(1) {
  order:-3;
  }
   .prisma-job-details>div:nth-child(2) {
   order:-2;
  }
  .prisma-job-details>div:nth-child(3) {
    width: 30% !important;
    order:-3;
  }
  .prisma-job-details>div:nth-child(4) {
  }
  .prisma-nav-bar {
    display:none !important;
  }
  .partner-view {
    display: flex;
    flex-wrap: wrap;
    grid-column: 1 / span 2;
    align-items: flex-end;
  }
  prisma-job-partners-view {
    display: block;
  }
  prisma-job-services-view {
    font-size: 12px;
    grid-template-columns: 110px 1fr 1fr 0.3fr 0.3fr auto !important;
  }
  .mainContentView {
    width: auto !important;
  }
  .print-container {
    display: none !important;
  }
  .headlogos {
    display:none !important;
  }
}
    </style>`).prependTo('head');
};
addEventListener('beforeprint', () => {
    cleanUp();
});
    cleanUp();
    console.log('loaded');

    console.log('jea');
})();