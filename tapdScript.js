// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      *//www.tapd.cn/my_worktable*
// @icon         https://www.google.com/s2/favicons?domain=tapd.cn
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    window.onload = function() {
        const style = document.createElement('style');
        style.innerHTML = `
            .zyp-btn {
               position: fixed;
               z-index: 999;
               color: red;
               transform: translate(-50%, -50%);
               left: 50%;
               top: 50%;
              }
        `;
        document.getElementsByTagName('head').item(0).appendChild(style);
        class tapdScript {
            constructor() {}
            creatBtn() {
              const btn = document.createElement('button');
                    btn.classList.add('zyp-btn');
                    btn.innerText = '生成';
                function postWEIXIN() {

                }

              const container = document.querySelector('.worktable-content');
                container.appendChild(btn);
                btn.addEventListener('click', (ev) => {
                    const todoListStatus = document.querySelectorAll('.checkable-capsule-item');
                    const dateList = document.querySelectorAll('.title-not-value');
                    const todoList = [...document.querySelectorAll('.content-cardtitle')].map((el, index) => {
                        const s = `[${index+1}.【**${el.innerText}**】 状态: **${todoListStatus[index].innerText}**  截止日期: **${dateList[index].innerText}**](${el.href})`;

                        return s;
                    });
                    const todoListS = todoList.join('\n');
                    GM_xmlhttpRequest({
                               method: 'post',
                               url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=a4cd1431-8e6a-441d-af19-11edbb08b393',
                               header: {'Content-Type': 'application/json'},
                               data: `{
                                   "msgtype": "markdown",
                                   "markdown": {
                                      "content": "${todoListS}"
                                   }

                               }`,
                               onload: function(res){
                                     console.log(res, 'res');
                               }
            });
                });

            }
        }
        const script = new tapdScript;
        script.creatBtn();
    }// Your code here...
})();
