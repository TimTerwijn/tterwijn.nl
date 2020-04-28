import * as render from "./Render.js";

//on scroll
window.addEventListener("wheel", function(){
    render.nextPage();
});