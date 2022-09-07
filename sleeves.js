// ==UserScript==
// @name         DuelingBook Sleeve Changer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.duelingbook.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=duelingbook.com
// @grant        none
// ==/UserScript==
console.log($('#frames>#duel'))
window.addEventListener("load", function() {
    window.onkeydown= function(gfg){
        if(gfg.keyCode === 32){
            console.log($("#field>.card>.content>.cardback"));
        }
    }
    var fnCallback = function (mutations)
    {
        mutations.forEach(function (mutation)
        {
            if(document.querySelector("#frames>#duel").getAttribute('style') == ""){
                const cards = $("#field>.card");
                var myCards = true;
                var cardCounter = 1;
                for(var card in cards){
                    var cardMatrix = cards[card].style.transform.split(" ");
                    var cardNumber = cardMatrix[cardMatrix.length - 2].replace(',','');
                    //console.log(cards[card].style.transform,cards[card].style.left,cards[card].style.top);
                    if(cardCounter == cardNumber && myCards){
                        cards[card].firstChild.firstChild.firstChild.src = "https://mykes.s-ul.eu/40TDb0NT";
                    }
                    else if(cardCounter == cardNumber && !myCards){
                    }
                    else{
                        if(myCards){
                            myCards = false;
                        }
                        else{
                            myCards = true;
                            cards[card].firstChild.firstChild.firstChild.src = "https://mykes.s-ul.eu/40TDb0NT";
                        }
                        cardCounter = 1;
                    }
                    cardCounter += 1;
                }
            }else{
            }
        });
    };
    var observer = new MutationObserver(fnCallback);
    var target = document.querySelector("#frames>#duel");
    var objConfig =
        {
            attributeFilter: ['style'],
        };
    observer.observe(target, objConfig);
}, false);