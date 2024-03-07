function assertEquals(text, think, real){
    let html = "- " + text + " (" + real + "): "
    if(real == think) html += "<span style='color:green;'> CORRECT! &check;</span><br>"; else html += "<span style='color:red;'> WRONG! <br></span>"; 
    tdiv.innerHTML += html;
}

function getAttribute(selector, attribute){return document.querySelector(selector).getAttribute(attribute);}
function getProperty(selector, property){return window.getComputedStyle(document.querySelector(selector)).getPropertyValue(property);}

let tdiv = document.createElement("div");
tdiv.style = "background-color: white; border: 1px solid lighgrey; padding: 10px; margin: 10px;"
document.getElementsByTagName("body")[0].appendChild(tdiv);

tdiv.innerHTML = "Az oldal:<br>";
assertEquals("Magyar nyelvű:", "hu", getAttribute("html","lang"));
assertEquals("UTF-8 kódolású:", "UTF-8", getAttribute("meta[charset]","charset"));
assertEquals("Címe helyes:", "Teszt alapok", document.querySelector("title").innerHTML);
assertEquals("Háttérszíne \"cornsilk\":","rgb(255, 248, 220)", getProperty("body", "background-color"));

tdiv.innerHTML += "<br>A játékér:<br>";
assertEquals("Kerete vékony:","1px", getProperty("#jatek", "border-width"));
assertEquals("Szélessége megfelelő:","768px", getProperty("#jatek", "width"));
function teszt(){assertEquals("Van rajta 2x8 ikon:",16, document.querySelectorAll("#jatek img").length);}
