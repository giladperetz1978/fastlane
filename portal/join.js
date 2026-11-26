'use strict';

function roomUrl(input) {
  const code=input.trim().replace(/[- ]/g,'').toLowerCase();
  if(!/^[0-7][0-9a-v]{9}$/.test(code))return null;
  const value=parseInt(code,32), ip=Math.floor(value/65536), port=value%65536;
  const a=ip>>>24,b=(ip>>>16)&255,c=(ip>>>8)&255,d=ip&255;
  if(port<1024 || !(a===10 || (a===172&&b>=16&&b<=31) || (a===192&&b===168)))return null;
  return `http://${a}.${b}.${c}.${d}:${port}`;
}
if(typeof module!=='undefined')module.exports=roomUrl;
if(typeof document!=='undefined'){
  const code=document.getElementById('code'), open=document.getElementById('open'), message=document.getElementById('message');
  code.oninput=()=>{open.hidden=true;open.removeAttribute('href');message.textContent=''};
  document.getElementById('room').onsubmit=e=>{
    e.preventDefault();const url=roomUrl(code.value);
    open.hidden=!url;
    if(!url){open.removeAttribute('href');message.textContent='הקוד אינו תקין. העתיקו את קוד האתר, לא את קוד החדר.';return}
    open.href=url;message.textContent='כתובת השלט לפי הקוד: '+url;
  };
}
