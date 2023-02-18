const url = window.location.href;
const newUrl = url.replace("pastebin.com", "pobb.in");
var openInPobbin = document.createElement("a");
var dive = document.createElement("div");
openInPobbin.href = newUrl;
var spanPOB = document.createElement("span");
spanPOB.textContent = "POB";
spanPOB.id = "span-pob";
var spanbin = document.createElement("span");
spanbin.textContent = "b.in";
spanbin.id = "span-bin";
var icon = document.createElement("img");
icon.id = "external-link-icon";
icon.src = chrome.runtime.getURL("external-link.png");
openInPobbin.appendChild(icon);
openInPobbin.appendChild(spanPOB);
openInPobbin.appendChild(spanbin);
openInPobbin.id = "pobbin-button";
var container = document.getElementsByClassName("top-buttons")[0];
var children = container.children;
children[0].classList.add("center-aligned")
children[1].classList.add("center-aligned")
container.append(children[0], openInPobbin, children[1]);
