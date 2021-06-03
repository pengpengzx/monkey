// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://nerve.17zuoye.net/projects/main/env?projectId=5f4e020b26ddbc175ce6383c&envtab=5fadf21ae5fdb774c1f5e771
// @icon         https://www.google.com/s2/favicons?domain=17zuoye.net
// @grant        none
// @run-at       document-idle
// @require      https://cdn.jsdelivr.net/npm/vue/dist/vue.js
// ==/UserScript==

(function() {
  'use strict';
  class DIY{
    constructor() {
    }
    getBtnStatus() {
      const btnWrap = document.querySelector('.env-btn-wrap').querySelectorAll('.el-button--primary');
      const buildBtn = btnWrap[0];
      const isbuildBtnLoading = buildBtn.getAttribute('disabled');
      const deployBtn = btnWrap[1];

      deployBtn.querySelector('span').remove();
      const style = document.createElement('style');
      style.innerHTML=`
      .pushable {
        width: 416px;
        height: 215px;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: none;
        background: transparent;
        padding: 0;
        cursor: pointer;
        outline-offset: 4px;
        transition: filter 250ms;
        z-index: 999;
      }
      .shadowzyp {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 40px;
        background: hsl(0deg 0% 0% / 0.25);
        will-change: transform;
        transform: translateY(20px);
        transition:
          transform
          600ms
          cubic-bezier(.3, .7, .4, 1);
      }
      .edgezyp {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 40px;
        background: linear-gradient(
          to left,
          hsl(340deg 100% 16%) 0%,
          hsl(340deg 100% 32%) 8%,
          hsl(340deg 100% 32%) 92%,
          hsl(340deg 100% 16%) 100%
        );
      }
      .frontzyp {
        font-weight: 900;
        height: 100%;
        display: block;
        position: relative;
        padding: 12px 42px;
        border-radius: 40px;
        font-size: 90px;
        color: white;
        background: hsl(345deg 100% 47%);
        will-change: transform;
        transform: translateY(-40px);
        transition:
          transform
          600ms
          cubic-bezier(.3, .7, .4, 1);
          padding-top: 57px;
      }
      .pushable:hover {
        filter: brightness(110%);
      }
      .pushable:hover .frontzyp {
        transform: translateY(-60px);
        transition:
          transform
          250ms
          cubic-bezier(.3, .7, .4, 1.5);
      }
      .pushable:active .frontzyp {
        transform: translateY(-20px);
        transition: transform 34ms;
      }
      .pushable:hover .shadowzyp {
        transform: translateY(40px);
        transition:
          transform
          250ms
          cubic-bezier(.3, .7, .4, 1.5);
      }
      .pushable:active .shadowzyp {
        transform: translateY(10px);
        transition: transform 34ms;
      }
      .pushable:focus:not(:focus-visible) {
        outline: none;
      }`;
      document.getElementsByTagName('head').item(0).appendChild(style);
      const span1 = document.createElement('span')
      span1.setAttribute("class", "shadowzyp");
      const span2 = document.createElement('span')
      span2.setAttribute("class", "edgezyp");
      const span3 = document.createElement('span')
      span3.innerText = 'GO';
      span3.setAttribute("class", "frontzyp");
      deployBtn.appendChild(span1)
      deployBtn.appendChild(span2)
      deployBtn.appendChild(span3)
      deployBtn.setAttribute("class", 'pushable');
    }
  };
const app = new DIY();
const {getBtnStatus} = app;
setTimeout(getBtnStatus, 500)

  // Your code here...
})();