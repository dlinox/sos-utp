import{n as D,p as M,d as R,o as r,c as _,w as t,r as o,i as F,a as e,g as a,q as d,v,F as g,b as u,j as S,u as T,t as b}from"./index-FRqeqtzj.js";const W=async()=>{try{const c=D();return await M(c).post("/send-alert"),!0}catch{return!1}},I=R({__name:"index",setup(c){const f=()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(p=>{console.log(p)}):alert("Geolocation is not supported by this browser.")},w=[{name:"Bomberos",number:"116",image:"https://www.bomberosperu.gob.pe/Imagenes/Noticias/23015.jpeg"},{name:"Policia",number:"105",image:"https://cdn.www.gob.pe/uploads/document/file/5526211/878150-408977684_664318045874096_3757839972358280228_n.jpg"},{name:"Ambulancia",number:"106",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3oXLm9C8n1QrVbjNc0-TZIovG1EvHout7w&s"},{name:"Serenazgo",number:"110",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTixHcnwik1lhPONcjar_N-p2WGOrmB0_GrFUVFfEuKOwM0OmQNEkxoD3tb9k1MXkK0gGI&usqp=CAU"}],k=["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxmT3TWlmZBa7H8FyPYdiiOq3cirr_rVrh9zza6UR-KXsp0JjHr5EkVmV7KilejMRax2l5ioixBm6wUQ8BzxgOdDyq1j3qjqaFhSFcg7aO_5YgXX2kZVRiDomJuO48WGvyoERlhA0NsCOt/s1600/aa.jpg","https://www.hejcu.gob.pe/images/SLIDER-WEB_NMEROS-DE-EMERGENCIA_Mesa-de-trabajo-1.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtjltAHQ4ibw3hMMZ4uDMWbWKW5HwuK-tAcw&s"];return(p,n)=>{const l=o("v-icon"),E=o("v-app-bar"),h=o("v-carousel-item"),y=o("v-carousel"),x=o("v-list-item-title"),N=o("v-list-item-subtitle"),i=o("v-btn"),j=o("v-list-item"),A=o("v-list"),C=o("v-card"),G=o("v-container"),B=o("v-main"),O=o("v-bottom-navigation"),V=o("v-app"),q=F("tooltip");return r(),_(V,null,{default:t(()=>[e(E,{app:"",title:"Seguridad Ciudadana",color:"primary"},{default:t(()=>[e(l,{class:"me-3"},{default:t(()=>n[0]||(n[0]=[a("mdi-shield-account")])),_:1})]),_:1}),e(B,null,{default:t(()=>[e(y,{height:"200","hide-delimiter-background":"","hide-delimiters":"",cycle:"","show-arrows":!1},{default:t(()=>[(r(),d(g,null,v(k,(s,m)=>e(h,{key:m,src:s},null,8,["src"])),64))]),_:1}),e(G,null,{default:t(()=>[e(C,{subtitle:"Numeros de emergencia",class:"pa-2"},{default:t(()=>[e(A,null,{default:t(()=>[(r(),d(g,null,v(w,(s,m)=>e(j,{key:m,link:"",href:"tel:"+s.number},{append:t(()=>[e(i,{icon:"",color:"primary",density:"compact"},{default:t(()=>[e(l,null,{default:t(()=>n[1]||(n[1]=[a("mdi-phone")])),_:1})]),_:1})]),default:t(()=>[e(x,null,{default:t(()=>[a(b(s.name),1)]),_:2},1024),e(N,null,{default:t(()=>[a(b(s.number),1)]),_:2},1024)]),_:2},1032,["href"])),64))]),_:1})]),_:1})]),_:1})]),_:1}),e(O,{app:""},{default:t(()=>[e(i,{value:"geolocation",onClick:f},{default:t(()=>[e(l,null,{default:t(()=>n[2]||(n[2]=[a("mdi-map-marker")])),_:1}),n[3]||(n[3]=u("span",null,"Ubicación",-1))]),_:1}),S((r(),_(i,{value:"alert",size:"x-large",variant:"flat",class:"mx-auto btn-alert",onClick:T(W)},{default:t(()=>[e(l,null,{default:t(()=>n[4]||(n[4]=[a("mdi-alpha-a-circle-outline")])),_:1}),n[5]||(n[5]=u("span",null,"Alerta",-1))]),_:1},8,["onClick"])),[[q,"Enviar alerta","top"]]),e(i,{value:"whatsapp"},{default:t(()=>[e(l,null,{default:t(()=>n[6]||(n[6]=[a(" mdi-whatsapp ")])),_:1}),n[7]||(n[7]=u("span",null," Grupo ",-1))]),_:1})]),_:1})]),_:1})}}});export{I as default};