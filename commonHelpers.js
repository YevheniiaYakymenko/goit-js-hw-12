import{a as h,i as c,S as v}from"./assets/vendor-b0d10f48.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const b="43963855-b23ab28bc2f72f8207f09d24a",P="https://pixabay.com/api/",p=15;h.defaults.baseURL=P;const w=async(t,s=1)=>{const{data:r}=await h.get("",{params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:s}});return r};function E(t){return t.map(({webformatURL:s,largeImageURL:r,tags:a,likes:e,views:o,comments:l,downloads:L})=>`<li class="gallery-item">
            <a class="gallery-link" href="${r}">
              <img class="gallery-img" src="${s}" alt="${a}" />
            </a>
            <div class="small-info">
               <div class="small-info-item">
                 <Likes: class="info-title">Likes:</span>
                 <span class="info">${e}</span>
               </div>
               <div class="small-info-item">
                 <span class="info-title">Views:</span>
                 <span class="info"> ${o}</span>
               </div>
               <div class="small-info-item">
                 <span class="info-title">Comments:</span>
                 <span class="info">${l}</span>
               </div>
               <div class="small-info-item">
                 <span class="info-title">Downloads:</span>
                 <span class="info">${L}</span>    
               </div>
            </div>
          </li>`).join("")}const S=document.querySelector(".search-form"),y=document.querySelector(".gallery-list"),m=document.querySelector(".loader"),i=document.querySelector(".btn-load");let f="",n=1,u=0,d;async function g(t,s){try{const r=await w(t,s);if(r.hits.length===0)c.show({title:"Error",color:"red",message:"Sorry, there was an error fetching images. Please try again!"}),i.classList.add("is-hidden");else{const a=E(r.hits);y.insertAdjacentHTML("beforeend",a),d?d.refresh():d=new v(".gallery-list a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,className:"my-custom-lightbox"}),u=Math.ceil(r.totalHits/p),u>n?i.classList.remove("is-hidden"):(i.classList.add("is-hidden"),c.show({title:"Info",color:"green",message:"We're sorry, but you've reached the end of search results."}))}}catch{c.show({title:"Error",color:"red",message:"Sorry, there was an error fetching images. Please try again!"}),i.classList.add("is-hidden")}finally{m.classList.add("is-hidden")}}const q=()=>{const t=document.querySelectorAll(".gallery-list li");if(t.length>0){const a=t[t.length-1].getBoundingClientRect().height*2;window.scrollBy({top:a,left:0,behavior:"smooth"})}};async function M(t){t.preventDefault();const s=t.target.querySelector(".form-input").value.trim();if(s===""){c.show({title:"Error",color:"red",message:"Field is empty. Please write your query!"});return}y.innerHTML="",f=s,n=1,m.classList.remove("is-hidden"),i.classList.add("is-hidden"),await g(f,n),t.target.reset()}async function O(){n+=1,m.classList.remove("is-hidden"),await g(f,n),q()}S.addEventListener("submit",M);i.addEventListener("click",O);
//# sourceMappingURL=commonHelpers.js.map
