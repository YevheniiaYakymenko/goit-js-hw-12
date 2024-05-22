import{a as h,i as n,S as L}from"./assets/vendor-b0d10f48.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const P="43963855-b23ab28bc2f72f8207f09d24a",v="https://pixabay.com/api/",b=15;h.defaults.baseURL=v;const E=async(t,s=1)=>{try{const{data:o}=await h.get("",{params:{key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:b,page:s}});return o}catch(o){console.log(o)}};function w(t){return t.map(({webformatURL:s,largeImageURL:o,tags:a,likes:e,views:r,comments:i,downloads:p})=>`<li class="gallery-item">
            <a class="gallery-link" href="${o}">
              <img class="gallery-img" src="${s}" alt="${a}" />
            </a>
            <div class="small-info">
               <div class="small-info-item">
                 <Likes: class="info-title">Likes:</span>
                 <span class="info">${e}</span>
               </div>
               <div class="small-info-item">
                 <span class="info-title">Views:</span>
                 <span class="info"> ${r}</span>
               </div>
               <div class="small-info-item">
                 <span class="info-title">Comments:</span>
                 <span class="info">${i}</span>
               </div>
               <div class="small-info-item">
                 <span class="info-title">Downloads:</span>
                 <span class="info">${p}</span>    
               </div>
            </div>
          </li>`).join("")}const S=document.querySelector(".search-form"),g=document.querySelector(".gallery-list"),m=document.querySelector(".loader"),d=document.querySelector(".btn-load"),q=15;let f="",l=1,u=0,c;const M=()=>{const t=document.querySelectorAll(".gallery-list li");if(t.length>0){const a=t[t.length-1].getBoundingClientRect().height*2;window.scrollBy({top:a,left:0,behavior:"smooth"})}};async function y(t,s){try{const o=await E(t,s);if(o.hits.length===0)n.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});else{const a=w(o.hits);g.insertAdjacentHTML("beforeend",a),c?c.refresh():c=new L(".gallery-list a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,className:"my-custom-lightbox"}),u=Math.ceil(o.totalHits/q),u>l?d.classList.remove("is-hidden"):(d.classList.add("is-hidden"),n.show({title:"Info",color:"green",message:"We're sorry, but you've reached the end of search results."})),M()}}catch{n.show({title:"Error",color:"red",message:"Sorry, there was an error fetching images. Please try again later."})}finally{m.classList.add("is-hidden")}}async function $(t){t.preventDefault();const s=t.target.querySelector(".form-input").value.trim();if(s===""){n.show({title:"Error",color:"red",message:"Sorry, there was an error fetching images. Please try again later."});return}g.innerHTML="",f=s,l=1,m.classList.remove("is-hidden"),await y(f,l),t.target.reset()}async function A(){l+=1,m.classList.remove("is-hidden"),await y(f,l)}S.addEventListener("submit",$);d.addEventListener("click",A);
//# sourceMappingURL=commonHelpers.js.map
