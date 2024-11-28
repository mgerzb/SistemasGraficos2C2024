(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wl="162",Gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Af=0,xh=1,Tf=2,dd=1,Cf=2,Un=3,kn=0,Fe=1,He=2,oi=0,Ls=1,vh=2,yh=3,Mh=4,Rf=5,Di=100,Pf=101,Lf=102,bh=103,Sh=104,Df=200,If=201,Ff=202,Uf=203,wl=204,El=205,Nf=206,Of=207,zf=208,Bf=209,kf=210,Hf=211,Vf=212,Gf=213,Wf=214,Xf=0,Yf=1,qf=2,Fa=3,$f=4,jf=5,Zf=6,Kf=7,Xl=0,Jf=1,Qf=2,li=0,tp=1,ep=2,np=3,ip=4,sp=5,rp=6,ap=7,fd=300,Ns=301,Os=302,Al=303,Tl=304,$a=306,Ua=1e3,cn=1001,Cl=1002,Be=1003,wh=1004,Xs=1005,Ge=1006,oo=1007,Ui=1008,hi=1009,op=1010,lp=1011,Yl=1012,pd=1013,ai=1014,On=1015,pr=1016,md=1017,gd=1018,Oi=1020,hp=1021,un=1023,cp=1024,up=1025,zi=1026,zs=1027,dp=1028,_d=1029,fp=1030,xd=1031,vd=1033,lo=33776,ho=33777,co=33778,uo=33779,Eh=35840,Ah=35841,Th=35842,Ch=35843,yd=36196,Rh=37492,Ph=37496,Lh=37808,Dh=37809,Ih=37810,Fh=37811,Uh=37812,Nh=37813,Oh=37814,zh=37815,Bh=37816,kh=37817,Hh=37818,Vh=37819,Gh=37820,Wh=37821,fo=36492,Xh=36494,Yh=36495,pp=36283,qh=36284,$h=36285,jh=36286,mp=3200,gp=3201,ql=0,_p=1,si="",gn="srgb",fi="srgb-linear",$l="display-p3",ja="display-p3-linear",Na="linear",ae="srgb",Oa="rec709",za="p3",Xi=7680,Zh=519,xp=512,vp=513,yp=514,Md=515,Mp=516,bp=517,Sp=518,wp=519,Kh=35044,Jh="300 es",Rl=1035,zn=2e3,Ba=2001;let ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}};const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qh=1234567;const or=Math.PI/180,mr=180/Math.PI;function Hs(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[r&255]+Pe[r>>8&255]+Pe[r>>16&255]+Pe[r>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function we(r,t,e){return Math.max(t,Math.min(e,r))}function jl(r,t){return(r%t+t)%t}function Ep(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Ap(r,t,e){return r!==t?(e-r)/(t-r):0}function lr(r,t,e){return(1-e)*r+e*t}function Tp(r,t,e,n){return lr(r,t,1-Math.exp(-e*n))}function Cp(r,t=1){return t-Math.abs(jl(r,t*2)-t)}function Rp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Pp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Lp(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Dp(r,t){return r+Math.random()*(t-r)}function Ip(r){return r*(.5-Math.random())}function Fp(r){r!==void 0&&(Qh=r);let t=Qh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Up(r){return r*or}function Np(r){return r*mr}function Pl(r){return(r&r-1)===0&&r!==0}function Op(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ka(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zp(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),h=s((t+n)/2),c=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*c,l*u,l*d,a*h);break;case"YZY":r.set(l*d,a*c,l*u,a*h);break;case"ZXZ":r.set(l*u,l*d,a*c,a*h);break;case"XZX":r.set(a*c,l*g,l*f,a*h);break;case"YXY":r.set(l*f,a*c,l*g,a*h);break;case"ZYZ":r.set(l*g,l*f,a*c,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ms(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Oe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Nn={DEG2RAD:or,RAD2DEG:mr,generateUUID:Hs,clamp:we,euclideanModulo:jl,mapLinear:Ep,inverseLerp:Ap,lerp:lr,damp:Tp,pingpong:Cp,smoothstep:Rp,smootherstep:Pp,randInt:Lp,randFloat:Dp,randFloatSpread:Ip,seededRandom:Fp,degToRad:Up,radToDeg:Np,isPowerOfTwo:Pl,ceilPowerOfTwo:Op,floorPowerOfTwo:ka,setQuaternionFromProperEuler:zp,normalize:Oe,denormalize:Ms};let gt=class bd{constructor(t=0,e=0){bd.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class Sd{constructor(t,e,n,i,s,o,a,l,h){Sd.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,h)}set(t,e,n,i,s,o,a,l,h){const c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=l,c[6]=n,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],c=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],S=i[1],x=i[4],b=i[7],R=i[2],A=i[5],w=i[8];return s[0]=o*_+a*S+l*R,s[3]=o*p+a*x+l*A,s[6]=o*m+a*b+l*w,s[1]=h*_+c*S+u*R,s[4]=h*p+c*x+u*A,s[7]=h*m+c*b+u*w,s[2]=d*_+f*S+g*R,s[5]=d*p+f*x+g*A,s[8]=d*m+f*b+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-n*s*c+n*a*l+i*s*h-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=c*o-a*h,d=a*l-c*s,f=h*s-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*h-c*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(c*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-h*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),h=Math.sin(s);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-i*h,i*l,-i*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(po.makeScale(t,e)),this}rotate(t){return this.premultiply(po.makeRotation(-t)),this}translate(t,e){return this.premultiply(po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};const po=new Nt;function wd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function gr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Bp(){const r=gr("canvas");return r.style.display="block",r}const tc={};function kp(r){r in tc||(tc[r]=!0,console.warn(r))}const ec=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nc=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pr={[fi]:{transfer:Na,primaries:Oa,toReference:r=>r,fromReference:r=>r},[gn]:{transfer:ae,primaries:Oa,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ja]:{transfer:Na,primaries:za,toReference:r=>r.applyMatrix3(nc),fromReference:r=>r.applyMatrix3(ec)},[$l]:{transfer:ae,primaries:za,toReference:r=>r.convertSRGBToLinear().applyMatrix3(nc),fromReference:r=>r.applyMatrix3(ec).convertLinearToSRGB()}},Hp=new Set([fi,ja]),Qt={enabled:!0,_workingColorSpace:fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Hp.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Pr[t].toReference,i=Pr[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Pr[r].primaries},getTransfer:function(r){return r===si?Na:Pr[r].transfer}};function Ds(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function mo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Yi,Ed=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=gr("canvas")),Yi.width=t.width,Yi.height=t.height;const n=Yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ds(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ds(e[n]/255)*255):e[n]=Ds(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vp=0,Ad=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Hs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(go(i[o].image)):s.push(go(i[o]))}else s=go(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function go(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ed.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gp=0,dn=class Ra extends ki{constructor(t=Ra.DEFAULT_IMAGE,e=Ra.DEFAULT_MAPPING,n=cn,i=cn,s=Ge,o=Ui,a=un,l=hi,h=Ra.DEFAULT_ANISOTROPY,c=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Hs(),this.name="",this.source=new Ad(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ua:t.x=t.x-Math.floor(t.x);break;case cn:t.x=t.x<0?0:1;break;case Cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ua:t.y=t.y-Math.floor(t.y);break;case cn:t.y=t.y<0?0:1;break;case Cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=fd;dn.DEFAULT_ANISOTROPY=1;let de=class Td{constructor(t=0,e=0,n=0,i=1){Td.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(h+1)/2,b=(f+1)/2,R=(m+1)/2,A=(c+d)/4,w=(u+_)/4,I=(g+p)/4;return x>b&&x>R?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=w/n):b>R?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=A/i,s=I/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=w/s,i=I/s),this.set(n,i,s,e),this}let S=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-c)*(d-c));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-_)/S,this.z=(d-c)/S,this.w=Math.acos((h+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wp=class extends ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new dn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ad(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bi=class extends Wp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}};class Cd extends dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xp extends dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let ui=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],h=n[i+1],c=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||h!==f||c!==g){let p=1-a;const m=l*d+h*f+c*g+u*_,S=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,m*S);p=Math.sin(p*A)/R,a=Math.sin(a*A)/R}const b=a*S;if(l=l*p+d*b,h=h*p+f*b,c=c*p+g*b,u=u*p+_*b,p===1-a){const R=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=R,h*=R,c*=R,u*=R}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],h=n[i+2],c=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+c*u+l*f-h*d,t[e+1]=l*g+c*d+h*u-a*f,t[e+2]=h*g+c*f+a*d-l*u,t[e+3]=c*g-a*u-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),c=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"YXZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"ZXY":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"ZYX":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"YZX":this._x=d*c*u+h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u-d*f*g;break;case"XZY":this._x=d*c*u-h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(s-h)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(c-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+h)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-h)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+o*a+i*h-s*l,this._y=i*c+o*l+s*a-n*h,this._z=s*c+o*h+n*l-i*a,this._w=o*c-n*a-i*l-s*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,a),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},v=class Rd{constructor(t=0,e=0,n=0){Rd.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ic.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*i-a*n),c=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*h+o*u-a*c,this.y=n+l*c+a*h-s*u,this.z=i+l*u+s*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _o.copy(this).projectOnVector(t),this.sub(_o)}reflect(t){return this.sub(_o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const _o=new v,ic=new ui;let xr=class{constructor(t=new v(1/0,1/0,1/0),e=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,nn):nn.fromBufferAttribute(s,o),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(t.matrixWorld),this.union(Lr)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),Dr.subVectors(this.max,Ys),qi.subVectors(t.a,Ys),$i.subVectors(t.b,Ys),ji.subVectors(t.c,Ys),Vn.subVectors($i,qi),Gn.subVectors(ji,$i),yi.subVectors(qi,ji);let e=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-yi.z,yi.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,yi.z,0,-yi.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-yi.y,yi.x,0];return!xo(e,qi,$i,ji,Dr)||(e=[1,0,0,0,1,0,0,0,1],!xo(e,qi,$i,ji,Dr))?!1:(Ir.crossVectors(Vn,Gn),e=[Ir.x,Ir.y,Ir.z],xo(e,qi,$i,ji,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};const En=[new v,new v,new v,new v,new v,new v,new v,new v],nn=new v,Lr=new xr,qi=new v,$i=new v,ji=new v,Vn=new v,Gn=new v,yi=new v,Ys=new v,Dr=new v,Ir=new v,Mi=new v;function xo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Mi.fromArray(r,s);const a=i.x*Math.abs(Mi.x)+i.y*Math.abs(Mi.y)+i.z*Math.abs(Mi.z),l=t.dot(Mi),h=e.dot(Mi),c=n.dot(Mi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}const Yp=new xr,qs=new v,vo=new v;let Za=class{constructor(t=new v,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yp.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qs.subVectors(t,this.center);const e=qs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(qs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qs.copy(t.center).add(vo)),this.expandByPoint(qs.copy(t.center).sub(vo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const An=new v,yo=new v,Fr=new v,Wn=new v,Mo=new v,Ur=new v,bo=new v;let Ka=class{constructor(t=new v,e=new v(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){yo.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),Wn.copy(this.origin).sub(yo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Fr),a=Wn.dot(this.direction),l=-Wn.dot(Fr),h=Wn.lengthSq(),c=Math.abs(1-o*o);let u,d,f,g;if(c>0)if(u=o*l-a,d=o*a-l,g=s*c,u>=0)if(d>=-g)if(d<=g){const _=1/c;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+h}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+h):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+h):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+h);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(yo).addScaledVector(Fr,d),f}intersectSphere(t,e){An.subVectors(t.center,this.origin);const n=An.dot(this.direction),i=An.dot(An)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),c>=0?(s=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(s=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,i,s){Mo.subVectors(e,t),Ur.subVectors(n,t),bo.crossVectors(Mo,Ur);let o=this.direction.dot(bo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wn.subVectors(this.origin,t);const l=a*this.direction.dot(Ur.crossVectors(Wn,Ur));if(l<0)return null;const h=a*this.direction.dot(Mo.cross(Wn));if(h<0||l+h>o)return null;const c=-a*Wn.dot(bo);return c<0?null:this.at(c/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qt=class Ll{constructor(t,e,n,i,s,o,a,l,h,c,u,d,f,g,_,p){Ll.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,h,c,u,d,f,g,_,p)}set(t,e,n,i,s,o,a,l,h,c,u,d,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=h,m[6]=c,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ll().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Zi.setFromMatrixColumn(t,0).length(),s=1/Zi.setFromMatrixColumn(t,1).length(),o=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),h=Math.sin(i),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*c,f=o*u,g=a*c,_=a*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=f+g*h,e[5]=d-_*h,e[9]=-a*l,e[2]=_-d*h,e[6]=g+f*h,e[10]=o*l}else if(t.order==="YXZ"){const d=l*c,f=l*u,g=h*c,_=h*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*h,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*c,f=l*u,g=h*c,_=h*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*c,e[9]=_-d*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*c,f=o*u,g=a*c,_=a*u;e[0]=l*c,e[4]=g*h-f,e[8]=d*h+_,e[1]=l*u,e[5]=_*h+d,e[9]=f*h-g,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*h,g=a*l,_=a*h;e[0]=l*c,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*h,g=a*l,_=a*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+_,e[5]=o*c,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*c,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qp,t,$p)}lookAt(t,e,n){const i=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Xn.crossVectors(n,qe),Xn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Xn.crossVectors(n,qe)),Xn.normalize(),Nr.crossVectors(qe,Xn),i[0]=Xn.x,i[4]=Nr.x,i[8]=qe.x,i[1]=Xn.y,i[5]=Nr.y,i[9]=qe.y,i[2]=Xn.z,i[6]=Nr.z,i[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],c=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],S=n[3],x=n[7],b=n[11],R=n[15],A=i[0],w=i[4],I=i[8],X=i[12],y=i[1],T=i[5],j=i[9],q=i[13],L=i[2],V=i[6],O=i[10],J=i[14],G=i[3],$=i[7],Z=i[11],st=i[15];return s[0]=o*A+a*y+l*L+h*G,s[4]=o*w+a*T+l*V+h*$,s[8]=o*I+a*j+l*O+h*Z,s[12]=o*X+a*q+l*J+h*st,s[1]=c*A+u*y+d*L+f*G,s[5]=c*w+u*T+d*V+f*$,s[9]=c*I+u*j+d*O+f*Z,s[13]=c*X+u*q+d*J+f*st,s[2]=g*A+_*y+p*L+m*G,s[6]=g*w+_*T+p*V+m*$,s[10]=g*I+_*j+p*O+m*Z,s[14]=g*X+_*q+p*J+m*st,s[3]=S*A+x*y+b*L+R*G,s[7]=S*w+x*T+b*V+R*$,s[11]=S*I+x*j+b*O+R*Z,s[15]=S*X+x*q+b*J+R*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+s*l*u-i*h*u-s*a*d+n*h*d+i*a*f-n*l*f)+_*(+e*l*f-e*h*d+s*o*d-i*o*f+i*h*c-s*l*c)+p*(+e*h*u-e*a*f-s*o*u+n*o*f+s*a*c-n*h*c)+m*(-i*a*c-e*l*u+e*a*d+i*o*u-n*o*d+n*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],S=u*p*h-_*d*h+_*l*f-a*p*f-u*l*m+a*d*m,x=g*d*h-c*p*h-g*l*f+o*p*f+c*l*m-o*d*m,b=c*_*h-g*u*h+g*a*f-o*_*f-c*a*m+o*u*m,R=g*u*l-c*_*l-g*a*d+o*_*d+c*a*p-o*u*p,A=e*S+n*x+i*b+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=S*w,t[1]=(_*d*s-u*p*s-_*i*f+n*p*f+u*i*m-n*d*m)*w,t[2]=(a*p*s-_*l*s+_*i*h-n*p*h-a*i*m+n*l*m)*w,t[3]=(u*l*s-a*d*s-u*i*h+n*d*h+a*i*f-n*l*f)*w,t[4]=x*w,t[5]=(c*p*s-g*d*s+g*i*f-e*p*f-c*i*m+e*d*m)*w,t[6]=(g*l*s-o*p*s-g*i*h+e*p*h+o*i*m-e*l*m)*w,t[7]=(o*d*s-c*l*s+c*i*h-e*d*h-o*i*f+e*l*f)*w,t[8]=b*w,t[9]=(g*u*s-c*_*s-g*n*f+e*_*f+c*n*m-e*u*m)*w,t[10]=(o*_*s-g*a*s+g*n*h-e*_*h-o*n*m+e*a*m)*w,t[11]=(c*a*s-o*u*s-c*n*h+e*u*h+o*n*f-e*a*f)*w,t[12]=R*w,t[13]=(c*_*i-g*u*i+g*n*d-e*_*d-c*n*p+e*u*p)*w,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*p-e*a*p)*w,t[15]=(o*u*i-c*a*i+c*n*l-e*u*l-o*n*d+e*a*d)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,h=s*o,c=s*a;return this.set(h*o+n,h*a-i*l,h*l+i*a,0,h*a+i*l,c*a+n,c*l-i*o,0,h*l-i*a,c*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,h=s+s,c=o+o,u=a+a,d=s*h,f=s*c,g=s*u,_=o*c,p=o*u,m=a*u,S=l*h,x=l*c,b=l*u,R=n.x,A=n.y,w=n.z;return i[0]=(1-(_+m))*R,i[1]=(f+b)*R,i[2]=(g-x)*R,i[3]=0,i[4]=(f-b)*A,i[5]=(1-(d+m))*A,i[6]=(p+S)*A,i[7]=0,i[8]=(g+x)*w,i[9]=(p-S)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Zi.set(i[0],i[1],i[2]).length();const o=Zi.set(i[4],i[5],i[6]).length(),a=Zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],sn.copy(this);const h=1/s,c=1/o,u=1/a;return sn.elements[0]*=h,sn.elements[1]*=h,sn.elements[2]*=h,sn.elements[4]*=c,sn.elements[5]*=c,sn.elements[6]*=c,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,e.setFromRotationMatrix(sn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=zn){const l=this.elements,h=2*s/(e-t),c=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===zn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ba)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=zn){const l=this.elements,h=1/(e-t),c=1/(n-i),u=1/(o-s),d=(e+t)*h,f=(n+i)*c;let g,_;if(a===zn)g=(o+s)*u,_=-2*u;else if(a===Ba)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};const Zi=new v,sn=new qt,qp=new v(0,0,0),$p=new v(1,1,1),Xn=new v,Nr=new v,qe=new v,sc=new qt,rc=new ui;let bn=class Pd{constructor(t=0,e=0,n=0,i=Pd.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],h=i[5],c=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-we(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rc.setFromEuler(this),this.setFromQuaternion(rc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";let Zl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jp=0;const ac=new v,Ki=new ui,Tn=new qt,Or=new v,$s=new v,Zp=new v,Kp=new ui,oc=new v(1,0,0),lc=new v(0,1,0),hc=new v(0,0,1),Jp={type:"added"},Qp={type:"removed"},So={type:"childadded",child:null},wo={type:"childremoved",child:null};let me=class Pa extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pa.DEFAULT_UP.clone();const t=new v,e=new bn,n=new ui,i=new v(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qt},normalMatrix:{value:new Nt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Pa.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pa.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(oc,t)}rotateY(t){return this.rotateOnAxis(lc,t)}rotateZ(t){return this.rotateOnAxis(hc,t)}translateOnAxis(t,e){return ac.copy(t).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oc,t)}translateY(t){return this.translateOnAxis(lc,t)}translateZ(t){return this.translateOnAxis(hc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Or.copy(t):Or.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt($s,Or,this.up):Tn.lookAt(Or,$s,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),Ki.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Jp),So.child=t,this.dispatchEvent(So),So.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qp),wo.child=t,this.dispatchEvent(wo),wo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,Zp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Kp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const h in a){const c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}};me.DEFAULT_UP=new v(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new v,Cn=new v,Eo=new v,Rn=new v,Ji=new v,Qi=new v,cc=new v,Ao=new v,To=new v,Co=new v;let zr=class bs{constructor(t=new v,e=new v,n=new v){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),rn.subVectors(t,e),i.cross(rn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){rn.subVectors(i,e),Cn.subVectors(n,e),Eo.subVectors(t,e);const o=rn.dot(rn),a=rn.dot(Cn),l=rn.dot(Eo),h=Cn.dot(Cn),c=Cn.dot(Eo),u=o*h-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(h*l-a*c)*d,g=(o*c-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l)}static isFrontFacing(t,e,n,i){return rn.subVectors(n,e),Cn.subVectors(t,e),rn.cross(Cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),rn.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bs.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bs.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return bs.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return bs.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bs.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Ji.subVectors(i,n),Qi.subVectors(s,n),Ao.subVectors(t,n);const l=Ji.dot(Ao),h=Qi.dot(Ao);if(l<=0&&h<=0)return e.copy(n);To.subVectors(t,i);const c=Ji.dot(To),u=Qi.dot(To);if(c>=0&&u<=c)return e.copy(i);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(n).addScaledVector(Ji,o);Co.subVectors(t,s);const f=Ji.dot(Co),g=Qi.dot(Co);if(g>=0&&f<=g)return e.copy(s);const _=f*h-l*g;if(_<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(Qi,a);const p=c*g-f*u;if(p<=0&&u-c>=0&&f-g>=0)return cc.subVectors(s,i),a=(u-c)/(u-c+(f-g)),e.copy(i).addScaledVector(cc,a);const m=1/(p+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(Ji,o).addScaledVector(Qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}};const Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Br={h:0,s:0,l:0};function Ro(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}let Rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=jl(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ro(o,s,t+1/3),this.g=Ro(o,s,t),this.b=Ro(o,s,t-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(t,e=gn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const n=Ld[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}copyLinearToSRGB(t){return this.r=mo(t.r),this.g=mo(t.g),this.b=mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return Qt.fromWorkingColorSpace(Le.copy(this),t),Math.round(we(Le.r*255,0,255))*65536+Math.round(we(Le.g*255,0,255))*256+Math.round(we(Le.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,i=Le.g,s=Le.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,h;const c=(a+o)/2;if(a===o)l=0,h=0;else{const u=o-a;switch(h=c<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=gn){Qt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,i=Le.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(Br);const n=lr(Yn.h,Br.h,e),i=lr(Yn.s,Br.s,e),s=lr(Yn.l,Br.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Le=new Rt;Rt.NAMES=Ld;let tm=0,Hi=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Hs(),this.name="",this.type="Material",this.blending=Ls,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=El,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wl&&(n.blendSrc=this.blendSrc),this.blendDst!==El&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Kl=class extends Hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};const ge=new v,kr=new gt;let yn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return kp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kh&&(t.usage=this.usage),t}},Dd=class extends yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}},Id=class extends yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Zt=class extends yn{constructor(t,e,n){super(new Float32Array(t),e,n)}},em=0;const Je=new qt,Po=new me,ts=new v,$e=new xr,js=new xr,be=new v;let Ne=class Fd extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wd(t)?Id:Dd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return Po.lookAt(t),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Zt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Za);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];js.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors($e.min,js.min),$e.expandByPoint(be),be.addVectors($e.max,js.max),$e.expandByPoint(be)):($e.expandByPoint(js.min),$e.expandByPoint(js.max))}$e.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)be.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(be));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)be.fromBufferAttribute(a,h),l&&(ts.fromBufferAttribute(t,h),be.add(ts)),i=Math.max(i,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new v,l[I]=new v;const h=new v,c=new v,u=new v,d=new gt,f=new gt,g=new gt,_=new v,p=new v;function m(I,X,y){h.fromBufferAttribute(n,I),c.fromBufferAttribute(n,X),u.fromBufferAttribute(n,y),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,X),g.fromBufferAttribute(s,y),c.sub(h),u.sub(h),f.sub(d),g.sub(d);const T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(T),p.copy(u).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(T),a[I].add(_),a[X].add(_),a[y].add(_),l[I].add(p),l[X].add(p),l[y].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,X=S.length;I<X;++I){const y=S[I],T=y.start,j=y.count;for(let q=T,L=T+j;q<L;q+=3)m(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const x=new v,b=new v,R=new v,A=new v;function w(I){R.fromBufferAttribute(i,I),A.copy(R);const X=a[I];x.copy(X),x.sub(R.multiplyScalar(R.dot(X))).normalize(),b.crossVectors(A,X);const T=b.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,T)}for(let I=0,X=S.length;I<X;++I){const y=S[I],T=y.start,j=y.count;for(let q=T,L=T+j;q<L;q+=3)w(t.getX(q+0)),w(t.getX(q+1)),w(t.getX(q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new v,s=new v,o=new v,a=new v,l=new v,h=new v,c=new v,u=new v;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),c.subVectors(o,s),u.subVectors(i,s),c.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,p),a.add(c),l.add(c),h.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,s),u.subVectors(i,s),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,l){const h=a.array,c=a.itemSize,u=a.normalized,d=new h.constructor(l.length*c);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*c;for(let m=0;m<c;m++)d[g++]=h[f++]}return new yn(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fd,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],h=t(l,n);e.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const l=[],h=s[a];for(let c=0,u=h.length;c<u;c++){const d=h[c],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(i[l]=c,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const h in i){const c=i[h];this.setAttribute(h,c.clone(e))}const s=t.morphAttributes;for(const h in s){const c=[],u=s[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,c=o.length;h<c;h++){const u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};const uc=new qt,bi=new Ka,Hr=new Za,dc=new v,es=new v,ns=new v,is=new v,Lo=new v,Vr=new v,Gr=new gt,Wr=new gt,Xr=new gt,fc=new v,pc=new v,mc=new v,Yr=new v,qr=new v;let te=class extends me{constructor(t=new Ne,e=new Kl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Vr.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const c=a[l],u=s[l];c!==0&&(Lo.fromBufferAttribute(u,t),o?Vr.addScaledVector(Lo,c):Vr.addScaledVector(Lo.sub(e),c))}e.add(Vr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),bi.copy(t.ray).recast(t.near),!(Hr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Hr,dc)===null||bi.origin.distanceToSquared(dc)>(t.far-t.near)**2))&&(uc.copy(s).invert(),bi.copy(t.ray).applyMatrix4(uc),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,h=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let b=S,R=x;b<R;b+=3){const A=a.getX(b),w=a.getX(b+1),I=a.getX(b+2);i=$r(this,m,t,n,h,c,u,A,w,I),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const S=a.getX(p),x=a.getX(p+1),b=a.getX(p+2);i=$r(this,o,t,n,h,c,u,S,x,b),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=S,R=x;b<R;b+=3){const A=b,w=b+1,I=b+2;i=$r(this,m,t,n,h,c,u,A,w,I),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const S=p,x=p+1,b=p+2;i=$r(this,o,t,n,h,c,u,S,x,b),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function nm(r,t,e,n,i,s,o,a){let l;if(t.side===Fe?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===kn,a),l===null)return null;qr.copy(a),qr.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(qr);return h<e.near||h>e.far?null:{distance:h,point:qr.clone(),object:r}}function $r(r,t,e,n,i,s,o,a,l,h){r.getVertexPosition(a,es),r.getVertexPosition(l,ns),r.getVertexPosition(h,is);const c=nm(r,t,e,n,es,ns,is,Yr);if(c){i&&(Gr.fromBufferAttribute(i,a),Wr.fromBufferAttribute(i,l),Xr.fromBufferAttribute(i,h),c.uv=zr.getInterpolation(Yr,es,ns,is,Gr,Wr,Xr,new gt)),s&&(Gr.fromBufferAttribute(s,a),Wr.fromBufferAttribute(s,l),Xr.fromBufferAttribute(s,h),c.uv1=zr.getInterpolation(Yr,es,ns,is,Gr,Wr,Xr,new gt)),o&&(fc.fromBufferAttribute(o,a),pc.fromBufferAttribute(o,l),mc.fromBufferAttribute(o,h),c.normal=zr.getInterpolation(Yr,es,ns,is,fc,pc,mc,new v),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const u={a,b:l,c:h,normal:new v,materialIndex:0};zr.getNormal(es,ns,is,u.normal),c.face=u}return c}let Ja=class Ud extends Ne{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],h=[],c=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(u,2));function g(_,p,m,S,x,b,R,A,w,I,X){const y=b/w,T=R/I,j=b/2,q=R/2,L=A/2,V=w+1,O=I+1;let J=0,G=0;const $=new v;for(let Z=0;Z<O;Z++){const st=Z*T-q;for(let ft=0;ft<V;ft++){const Tt=ft*y-j;$[_]=Tt*S,$[p]=st*x,$[m]=L,h.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[m]=A>0?1:-1,c.push($.x,$.y,$.z),u.push(ft/w),u.push(1-Z/I),J+=1}}for(let Z=0;Z<I;Z++)for(let st=0;st<w;st++){const ft=d+st+V*Z,Tt=d+st+V*(Z+1),W=d+(st+1)+V*(Z+1),it=d+(st+1)+V*Z;l.push(ft,Tt,it),l.push(Tt,W,it),G+=6}a.addGroup(f,G,X),f+=G,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ud(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Bs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ze(r){const t={};for(let e=0;e<r.length;e++){const n=Bs(r[e]);for(const i in n)t[i]=n[i]}return t}function im(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Nd(r){return r.getRenderTarget()===null?r.outputColorSpace:Qt.workingColorSpace}const Od={clone:Bs,merge:ze};var sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;let Hn=class extends Hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sm,this.fragmentShader=rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=im(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Jl=class extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const qn=new v,gc=new gt,_c=new gt;let Ee=class extends Jl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qn.x,qn.y).multiplyScalar(-t/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-t/qn.z)}getViewSize(t,e){return this.getViewBounds(t,gc,_c),e.subVectors(_c,gc)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(or*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/h,i*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};const ss=-90,rs=1;class am extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ee(ss,rs,t,e);i.layers=this.layers,this.add(i);const s=new Ee(ss,rs,t,e);s.layers=this.layers,this.add(s);const o=new Ee(ss,rs,t,e);o.layers=this.layers,this.add(o);const a=new Ee(ss,rs,t,e);a.layers=this.layers,this.add(a);const l=new Ee(ss,rs,t,e);l.layers=this.layers,this.add(l);const h=new Ee(ss,rs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const h of e)this.remove(h);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,c),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zd extends dn{constructor(t,e,n,i,s,o,a,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:Ns,super(t,e,n,i,s,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class om extends Bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new zd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ja(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:oi});s.uniforms.tEquirect.value=e;const o=new te(i,s),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=Ge),new am(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Do=new v,lm=new v,hm=new Nt;class ni{constructor(t=new v(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Do.subVectors(n,e).cross(lm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Do),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hm.getNormalMatrix(t),i=this.coplanarPoint(Do).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Za,jr=new v;class Ql{constructor(t=new ni,e=new ni,n=new ni,i=new ni,s=new ni,o=new ni){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],h=i[4],c=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],S=i[13],x=i[14],b=i[15];if(n[0].setComponents(l-s,d-h,p-f,b-m).normalize(),n[1].setComponents(l+s,d+h,p+f,b+m).normalize(),n[2].setComponents(l+o,d+c,p+g,b+S).normalize(),n[3].setComponents(l-o,d-c,p-g,b-S).normalize(),n[4].setComponents(l-a,d-u,p-_,b-x).normalize(),e===zn)n[5].setComponents(l+a,d+u,p+_,b+x).normalize();else if(e===Ba)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(jr.x=i.normal.x>0?t.max.x:t.min.x,jr.y=i.normal.y>0?t.max.y:t.min.y,jr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bd(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function cm(r,t){const e=t.isWebGL2,n=new WeakMap;function i(h,c){const u=h.array,d=h.usage,f=u.byteLength,g=r.createBuffer();r.bindBuffer(c,g),r.bufferData(c,u,d),h.onUploadCallback();let _;if(u instanceof Float32Array)_=r.FLOAT;else if(u instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=r.SHORT;else if(u instanceof Uint32Array)_=r.UNSIGNED_INT;else if(u instanceof Int32Array)_=r.INT;else if(u instanceof Int8Array)_=r.BYTE;else if(u instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:h.version,size:f}}function s(h,c,u){const d=c.array,f=c._updateRange,g=c.updateRanges;if(r.bindBuffer(u,h),f.count===-1&&g.length===0&&r.bufferSubData(u,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];e?r.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):r.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}c.clearUpdateRanges()}f.count!==-1&&(e?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),c.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const c=n.get(h);c&&(r.deleteBuffer(c.buffer),n.delete(h))}function l(h,c){if(h.isGLBufferAttribute){const d=n.get(h);(!d||d.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const u=n.get(h);if(u===void 0)n.set(h,i(h,c));else if(u.version<h.version){if(u.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,h,c),u.version=h.version}}return{get:o,remove:a,update:l}}class vr extends Ne{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),h=a+1,c=l+1,u=t/a,d=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<c;m++){const S=m*d-o;for(let x=0;x<h;x++){const b=x*u-s;g.push(b,-S,0),_.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const x=S+h*m,b=S+h*(m+1),R=S+1+h*(m+1),A=S+1+h*m;f.push(x,b,A),f.push(b,R,A)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.width,t.height,t.widthSegments,t.heightSegments)}}var um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_m=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vm=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Em=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Um=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Gm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ig=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ag=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ug=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Cg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,$g=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,r0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,c0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,x0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,v0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,y0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,P0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,D0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,G0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:um,alphahash_pars_fragment:dm,alphamap_fragment:fm,alphamap_pars_fragment:pm,alphatest_fragment:mm,alphatest_pars_fragment:gm,aomap_fragment:_m,aomap_pars_fragment:xm,batching_pars_vertex:vm,batching_vertex:ym,begin_vertex:Mm,beginnormal_vertex:bm,bsdfs:Sm,iridescence_fragment:wm,bumpmap_pars_fragment:Em,clipping_planes_fragment:Am,clipping_planes_pars_fragment:Tm,clipping_planes_pars_vertex:Cm,clipping_planes_vertex:Rm,color_fragment:Pm,color_pars_fragment:Lm,color_pars_vertex:Dm,color_vertex:Im,common:Fm,cube_uv_reflection_fragment:Um,defaultnormal_vertex:Nm,displacementmap_pars_vertex:Om,displacementmap_vertex:zm,emissivemap_fragment:Bm,emissivemap_pars_fragment:km,colorspace_fragment:Hm,colorspace_pars_fragment:Vm,envmap_fragment:Gm,envmap_common_pars_fragment:Wm,envmap_pars_fragment:Xm,envmap_pars_vertex:Ym,envmap_physical_pars_fragment:sg,envmap_vertex:qm,fog_vertex:$m,fog_pars_vertex:jm,fog_fragment:Zm,fog_pars_fragment:Km,gradientmap_pars_fragment:Jm,lightmap_fragment:Qm,lightmap_pars_fragment:tg,lights_lambert_fragment:eg,lights_lambert_pars_fragment:ng,lights_pars_begin:ig,lights_toon_fragment:rg,lights_toon_pars_fragment:ag,lights_phong_fragment:og,lights_phong_pars_fragment:lg,lights_physical_fragment:hg,lights_physical_pars_fragment:cg,lights_fragment_begin:ug,lights_fragment_maps:dg,lights_fragment_end:fg,logdepthbuf_fragment:pg,logdepthbuf_pars_fragment:mg,logdepthbuf_pars_vertex:gg,logdepthbuf_vertex:_g,map_fragment:xg,map_pars_fragment:vg,map_particle_fragment:yg,map_particle_pars_fragment:Mg,metalnessmap_fragment:bg,metalnessmap_pars_fragment:Sg,morphinstance_vertex:wg,morphcolor_vertex:Eg,morphnormal_vertex:Ag,morphtarget_pars_vertex:Tg,morphtarget_vertex:Cg,normal_fragment_begin:Rg,normal_fragment_maps:Pg,normal_pars_fragment:Lg,normal_pars_vertex:Dg,normal_vertex:Ig,normalmap_pars_fragment:Fg,clearcoat_normal_fragment_begin:Ug,clearcoat_normal_fragment_maps:Ng,clearcoat_pars_fragment:Og,iridescence_pars_fragment:zg,opaque_fragment:Bg,packing:kg,premultiplied_alpha_fragment:Hg,project_vertex:Vg,dithering_fragment:Gg,dithering_pars_fragment:Wg,roughnessmap_fragment:Xg,roughnessmap_pars_fragment:Yg,shadowmap_pars_fragment:qg,shadowmap_pars_vertex:$g,shadowmap_vertex:jg,shadowmask_pars_fragment:Zg,skinbase_vertex:Kg,skinning_pars_vertex:Jg,skinning_vertex:Qg,skinnormal_vertex:t0,specularmap_fragment:e0,specularmap_pars_fragment:n0,tonemapping_fragment:i0,tonemapping_pars_fragment:s0,transmission_fragment:r0,transmission_pars_fragment:a0,uv_pars_fragment:o0,uv_pars_vertex:l0,uv_vertex:h0,worldpos_vertex:c0,background_vert:u0,background_frag:d0,backgroundCube_vert:f0,backgroundCube_frag:p0,cube_vert:m0,cube_frag:g0,depth_vert:_0,depth_frag:x0,distanceRGBA_vert:v0,distanceRGBA_frag:y0,equirect_vert:M0,equirect_frag:b0,linedashed_vert:S0,linedashed_frag:w0,meshbasic_vert:E0,meshbasic_frag:A0,meshlambert_vert:T0,meshlambert_frag:C0,meshmatcap_vert:R0,meshmatcap_frag:P0,meshnormal_vert:L0,meshnormal_frag:D0,meshphong_vert:I0,meshphong_frag:F0,meshphysical_vert:U0,meshphysical_frag:N0,meshtoon_vert:O0,meshtoon_frag:z0,points_vert:B0,points_frag:k0,shadow_vert:H0,shadow_frag:V0,sprite_vert:G0,sprite_frag:W0},ct={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},_n={basic:{uniforms:ze([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:ze([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:ze([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:ze([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:ze([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:ze([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:ze([ct.points,ct.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:ze([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:ze([ct.common,ct.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:ze([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:ze([ct.sprite,ct.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:ze([ct.common,ct.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:ze([ct.lights,ct.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};_n.physical={uniforms:ze([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Zr={r:0,b:0,g:0},wi=new bn,X0=new qt;function Y0(r,t,e,n,i,s,o){const a=new Rt(0);let l=s===!0?0:1,h,c,u=null,d=0,f=null;function g(p,m){let S=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),S=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===$a)?(c===void 0&&(c=new te(new Ja(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Bs(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),wi.copy(m.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(X0.makeRotationFromEuler(wi)),c.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ae,(u!==x||d!==x.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new te(new vr(2,2),new Hn({name:"BackgroundMaterial",uniforms:Bs(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ae,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null))}function _(p,m){p.getRGB(Zr,Nd(r)),n.buffers.color.setClear(Zr.r,Zr.g,Zr.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function q0(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let h=l,c=!1;function u(L,V,O,J,G){let $=!1;if(o){const Z=_(J,O,V);h!==Z&&(h=Z,f(h.object)),$=m(L,J,O,G),$&&S(L,J,O,G)}else{const Z=V.wireframe===!0;(h.geometry!==J.id||h.program!==O.id||h.wireframe!==Z)&&(h.geometry=J.id,h.program=O.id,h.wireframe=Z,$=!0)}G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),($||c)&&(c=!1,I(L,V,O,J),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,V,O){const J=O.wireframe===!0;let G=a[L.id];G===void 0&&(G={},a[L.id]=G);let $=G[V.id];$===void 0&&($={},G[V.id]=$);let Z=$[J];return Z===void 0&&(Z=p(d()),$[J]=Z),Z}function p(L){const V=[],O=[],J=[];for(let G=0;G<i;G++)V[G]=0,O[G]=0,J[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:O,attributeDivisors:J,object:L,attributes:{},index:null}}function m(L,V,O,J){const G=h.attributes,$=V.attributes;let Z=0;const st=O.getAttributes();for(const ft in st)if(st[ft].location>=0){const W=G[ft];let it=$[ft];if(it===void 0&&(ft==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),ft==="instanceColor"&&L.instanceColor&&(it=L.instanceColor)),W===void 0||W.attribute!==it||it&&W.data!==it.data)return!0;Z++}return h.attributesNum!==Z||h.index!==J}function S(L,V,O,J){const G={},$=V.attributes;let Z=0;const st=O.getAttributes();for(const ft in st)if(st[ft].location>=0){let W=$[ft];W===void 0&&(ft==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),ft==="instanceColor"&&L.instanceColor&&(W=L.instanceColor));const it={};it.attribute=W,W&&W.data&&(it.data=W.data),G[ft]=it,Z++}h.attributes=G,h.attributesNum=Z,h.index=J}function x(){const L=h.newAttributes;for(let V=0,O=L.length;V<O;V++)L[V]=0}function b(L){R(L,0)}function R(L,V){const O=h.newAttributes,J=h.enabledAttributes,G=h.attributeDivisors;O[L]=1,J[L]===0&&(r.enableVertexAttribArray(L),J[L]=1),G[L]!==V&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,V),G[L]=V)}function A(){const L=h.newAttributes,V=h.enabledAttributes;for(let O=0,J=V.length;O<J;O++)V[O]!==L[O]&&(r.disableVertexAttribArray(O),V[O]=0)}function w(L,V,O,J,G,$,Z){Z===!0?r.vertexAttribIPointer(L,V,O,G,$):r.vertexAttribPointer(L,V,O,J,G,$)}function I(L,V,O,J){if(n.isWebGL2===!1&&(L.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const G=J.attributes,$=O.getAttributes(),Z=V.defaultAttributeValues;for(const st in $){const ft=$[st];if(ft.location>=0){let Tt=G[st];if(Tt===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(Tt=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(Tt=L.instanceColor)),Tt!==void 0){const W=Tt.normalized,it=Tt.itemSize,mt=e.get(Tt);if(mt===void 0)continue;const Lt=mt.buffer,bt=mt.type,_t=mt.bytesPerElement,$t=n.isWebGL2===!0&&(bt===r.INT||bt===r.UNSIGNED_INT||Tt.gpuType===pd);if(Tt.isInterleavedBufferAttribute){const Pt=Tt.data,U=Pt.stride,xe=Tt.offset;if(Pt.isInstancedInterleavedBuffer){for(let wt=0;wt<ft.locationSize;wt++)R(ft.location+wt,Pt.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Pt.meshPerAttribute*Pt.count)}else for(let wt=0;wt<ft.locationSize;wt++)b(ft.location+wt);r.bindBuffer(r.ARRAY_BUFFER,Lt);for(let wt=0;wt<ft.locationSize;wt++)w(ft.location+wt,it/ft.locationSize,bt,W,U*_t,(xe+it/ft.locationSize*wt)*_t,$t)}else{if(Tt.isInstancedBufferAttribute){for(let Pt=0;Pt<ft.locationSize;Pt++)R(ft.location+Pt,Tt.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Pt=0;Pt<ft.locationSize;Pt++)b(ft.location+Pt);r.bindBuffer(r.ARRAY_BUFFER,Lt);for(let Pt=0;Pt<ft.locationSize;Pt++)w(ft.location+Pt,it/ft.locationSize,bt,W,it*_t,it/ft.locationSize*Pt*_t,$t)}}else if(Z!==void 0){const W=Z[st];if(W!==void 0)switch(W.length){case 2:r.vertexAttrib2fv(ft.location,W);break;case 3:r.vertexAttrib3fv(ft.location,W);break;case 4:r.vertexAttrib4fv(ft.location,W);break;default:r.vertexAttrib1fv(ft.location,W)}}}}A()}function X(){j();for(const L in a){const V=a[L];for(const O in V){const J=V[O];for(const G in J)g(J[G].object),delete J[G];delete V[O]}delete a[L]}}function y(L){if(a[L.id]===void 0)return;const V=a[L.id];for(const O in V){const J=V[O];for(const G in J)g(J[G].object),delete J[G];delete V[O]}delete a[L.id]}function T(L){for(const V in a){const O=a[V];if(O[L.id]===void 0)continue;const J=O[L.id];for(const G in J)g(J[G].object),delete J[G];delete O[L.id]}}function j(){q(),c=!0,h!==l&&(h=l,f(h.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:j,resetDefaultState:q,dispose:X,releaseStatesOfGeometry:y,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:b,disableUnusedAttributes:A}}function $0(r,t,e,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,d){if(d===0)return;let f,g;if(i)f=r,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,c,u,d),e.update(u,s,d)}function h(c,u,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(c[g],u[g]);else{f.multiDrawArraysWEBGL(s,c,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=h}function j0(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const h=o||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,b=o||t.has("OES_texture_float"),R=x&&b,A=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:A}}function Z0(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new ni,a=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?c(null):h();else{const S=s?0:n,x=S*4;let b=m.clippingState||null;l.value=b,b=c(g,d,x,f);for(let R=0;R!==x;++R)b[R]=e[R];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,d,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,b=f;x!==_;++x,b+=4)o.copy(u[x]).applyMatrix4(S,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function K0(r){let t=new WeakMap;function e(o,a){return a===Al?o.mapping=Ns:a===Tl&&(o.mapping=Os),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Al||a===Tl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new om(l.height);return h.fromEquirectangularTexture(r,o),t.set(o,h),o.addEventListener("dispose",i),e(h.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}let kd=class extends Jl{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};const As=4,xc=[.125,.215,.35,.446,.526,.582],Ii=20,Io=new kd,vc=new Rt;let Fo=null,Uo=0,No=0;const Pi=(1+Math.sqrt(5))/2,as=1/Pi,yc=[new v(1,1,1),new v(-1,1,1),new v(1,1,-1),new v(-1,1,-1),new v(0,Pi,as),new v(0,Pi,-as),new v(as,0,Pi),new v(-as,0,Pi),new v(Pi,as,0),new v(-Pi,as,0)];let Mc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Fo=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fo,Uo,No),t.scissorTest=!1,Kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ns||t.mapping===Os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fo=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:pr,format:un,colorSpace:fi,depthBuffer:!1},i=bc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=J0(s)),this._blurMaterial=Q0(s,t,e)}return i}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,Io)}_sceneToCubeUV(t,e,n,i){const a=new Ee(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(vc),c.toneMapping=li,c.autoClear=!1;const f=new Kl({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new te(new Ja,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(vc),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(h[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,h[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,h[m]));const x=this._cubeSize;Kr(i,S*x,m>2?x:0,x,x),c.setRenderTarget(i),_&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ns||t.mapping===Os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Kr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Io)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=yc[(i-1)%yc.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new te(this._lodPlanes[i],h),d=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ii-1),_=s/g,p=isFinite(s)?1+Math.floor(c*_):Ii;p>Ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ii}`);const m=[];let S=0;for(let w=0;w<Ii;++w){const I=w/_,X=Math.exp(-I*I/2);m.push(X),w===0?S+=X:w<p&&(S+=2*X)}for(let w=0;w<m.length;w++)m[w]=m[w]/S;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const b=this._sizeLods[i],R=3*b*(i>x-As?i-x+As:0),A=4*(this._cubeSize-b);Kr(e,R,A,3*b,2*b),l.setRenderTarget(e),l.render(u,Io)}};function J0(r){const t=[],e=[],n=[];let i=r;const s=r-As+1+xc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-As?l=xc[o-r+As-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,g=6,_=3,p=2,m=1,S=new Float32Array(_*g*f),x=new Float32Array(p*g*f),b=new Float32Array(m*g*f);for(let A=0;A<f;A++){const w=A%3*2/3-1,I=A>2?0:-1,X=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];S.set(X,_*g*A),x.set(d,p*g*A);const y=[A,A,A,A,A,A];b.set(y,m*g*A)}const R=new Ne;R.setAttribute("position",new yn(S,_)),R.setAttribute("uv",new yn(x,p)),R.setAttribute("faceIndex",new yn(b,m)),t.push(R),i>As&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bc(r,t,e){const n=new Bi(r,t,e);return n.texture.mapping=$a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Q0(r,t,e){const n=new Float32Array(Ii),i=new v(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Sc(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function wc(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function th(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function t_(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===Al||l===Tl,c=l===Ns||l===Os;if(h||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Mc(r)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(h&&u&&u.height>0||c&&u&&i(u)){e===null&&(e=new Mc(r));const d=h?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function s(a){const l=a.target;l.removeEventListener("dispose",s);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function e_(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function n_(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],r.ARRAY_BUFFER)}}function h(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let x=0,b=S.length;x<b;x+=3){const R=S[x+0],A=S[x+1],w=S[x+2];d.push(R,A,A,w,w,R)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,b=S.length/3-1;x<b;x+=3){const R=x+0,A=x+1,w=x+2;d.push(R,A,A,w,w,R)}}else return;const p=new(wd(d)?Id:Dd)(d,1);p.version=_;const m=s.get(u);m&&t.remove(m),s.set(u,p)}function c(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:c}}function i_(r,t,e,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function h(f){a=f.type,l=f.bytesPerElement}function c(f,g){r.drawElements(s,g,a,f*l),e.update(g,s,1)}function u(f,g,_){if(_===0)return;let p,m;if(i)p=r,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,a,f*l,_),e.update(g,s,_)}function d(f,g,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(f[m]/l,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,a,f,0,_);let m=0;for(let S=0;S<_;S++)m+=g[S];e.update(m,s,1)}}this.setMode=o,this.setIndex=h,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function s_(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function r_(r,t){return r[0]-t[0]}function a_(r,t){return Math.abs(t[1])-Math.abs(r[1])}function o_(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new de,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function l(h,c,u){const d=h.morphTargetInfluences;if(t.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(c);if(p===void 0||p.count!==_){let q=function(){T.dispose(),s.delete(c),c.removeEventListener("dispose",q)};var f=q;p!==void 0&&p.texture.dispose();const m=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,b=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],A=c.morphAttributes.color||[];let w=0;m===!0&&(w=1),S===!0&&(w=2),x===!0&&(w=3);let I=c.attributes.position.count*w,X=1;I>t.maxTextureSize&&(X=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const y=new Float32Array(I*X*4*_),T=new Cd(y,I,X,_);T.type=On,T.needsUpdate=!0;const j=w*4;for(let L=0;L<_;L++){const V=b[L],O=R[L],J=A[L],G=I*X*4*L;for(let $=0;$<V.count;$++){const Z=$*j;m===!0&&(o.fromBufferAttribute(V,$),y[G+Z+0]=o.x,y[G+Z+1]=o.y,y[G+Z+2]=o.z,y[G+Z+3]=0),S===!0&&(o.fromBufferAttribute(O,$),y[G+Z+4]=o.x,y[G+Z+5]=o.y,y[G+Z+6]=o.z,y[G+Z+7]=0),x===!0&&(o.fromBufferAttribute(J,$),y[G+Z+8]=o.x,y[G+Z+9]=o.y,y[G+Z+10]=o.z,y[G+Z+11]=J.itemSize===4?o.w:1)}}p={count:_,texture:T,size:new gt(I,X)},s.set(c,p),c.addEventListener("dispose",q)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",h.morphTexture,e);else{let m=0;for(let x=0;x<d.length;x++)m+=d[x];const S=c.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",S),u.getUniforms().setValue(r,"morphTargetInfluences",d)}u.getUniforms().setValue(r,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[c.id];if(_===void 0||_.length!==g){_=[];for(let b=0;b<g;b++)_[b]=[b,0];n[c.id]=_}for(let b=0;b<g;b++){const R=_[b];R[0]=b,R[1]=d[b]}_.sort(a_);for(let b=0;b<8;b++)b<g&&_[b][1]?(a[b][0]=_[b][0],a[b][1]=_[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(r_);const p=c.morphAttributes.position,m=c.morphAttributes.normal;let S=0;for(let b=0;b<8;b++){const R=a[b],A=R[0],w=R[1];A!==Number.MAX_SAFE_INTEGER&&w?(p&&c.getAttribute("morphTarget"+b)!==p[A]&&c.setAttribute("morphTarget"+b,p[A]),m&&c.getAttribute("morphNormal"+b)!==m[A]&&c.setAttribute("morphNormal"+b,m[A]),i[b]=w,S+=w):(p&&c.hasAttribute("morphTarget"+b)===!0&&c.deleteAttribute("morphTarget"+b),m&&c.hasAttribute("morphNormal"+b)===!0&&c.deleteAttribute("morphNormal"+b),i[b]=0)}const x=c.morphTargetsRelative?1:1-S;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function l_(r,t,e,n){let i=new WeakMap;function s(l){const h=n.render.frame,c=l.geometry,u=t.get(l,c);if(i.get(u)!==h&&(t.update(u),i.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==h&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return u}function o(){i=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:o}}class Hd extends dn{constructor(t,e,n,i,s,o,a,l,h,c){if(c=c!==void 0?c:zi,c!==zi&&c!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===zi&&(n=ai),n===void 0&&c===zs&&(n=Oi),super(null,i,s,o,a,l,c,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Be,this.minFilter=l!==void 0?l:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Vd=new dn,Gd=new Hd(1,1);Gd.compareFunction=Md;const Wd=new Cd,Xd=new Xp,Yd=new zd,Ec=[],Ac=[],Tc=new Float32Array(16),Cc=new Float32Array(9),Rc=new Float32Array(4);function Vs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Ec[i];if(s===void 0&&(s=new Float32Array(i),Ec[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function ve(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ye(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Qa(r,t){let e=Ac[t];e===void 0&&(e=new Int32Array(t),Ac[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function h_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function c_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;r.uniform2fv(this.addr,t),ye(e,t)}}function u_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;r.uniform3fv(this.addr,t),ye(e,t)}}function d_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;r.uniform4fv(this.addr,t),ye(e,t)}}function f_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;Rc.set(n),r.uniformMatrix2fv(this.addr,!1,Rc),ye(e,n)}}function p_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;Cc.set(n),r.uniformMatrix3fv(this.addr,!1,Cc),ye(e,n)}}function m_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;Tc.set(n),r.uniformMatrix4fv(this.addr,!1,Tc),ye(e,n)}}function g_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function __(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;r.uniform2iv(this.addr,t),ye(e,t)}}function x_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;r.uniform3iv(this.addr,t),ye(e,t)}}function v_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;r.uniform4iv(this.addr,t),ye(e,t)}}function y_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function M_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;r.uniform2uiv(this.addr,t),ye(e,t)}}function b_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;r.uniform3uiv(this.addr,t),ye(e,t)}}function S_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;r.uniform4uiv(this.addr,t),ye(e,t)}}function w_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Gd:Vd;e.setTexture2D(t||s,i)}function E_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Xd,i)}function A_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Yd,i)}function T_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Wd,i)}function C_(r){switch(r){case 5126:return h_;case 35664:return c_;case 35665:return u_;case 35666:return d_;case 35674:return f_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return __;case 35668:case 35672:return x_;case 35669:case 35673:return v_;case 5125:return y_;case 36294:return M_;case 36295:return b_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return T_}}function R_(r,t){r.uniform1fv(this.addr,t)}function P_(r,t){const e=Vs(t,this.size,2);r.uniform2fv(this.addr,e)}function L_(r,t){const e=Vs(t,this.size,3);r.uniform3fv(this.addr,e)}function D_(r,t){const e=Vs(t,this.size,4);r.uniform4fv(this.addr,e)}function I_(r,t){const e=Vs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function F_(r,t){const e=Vs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function U_(r,t){const e=Vs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function N_(r,t){r.uniform1iv(this.addr,t)}function O_(r,t){r.uniform2iv(this.addr,t)}function z_(r,t){r.uniform3iv(this.addr,t)}function B_(r,t){r.uniform4iv(this.addr,t)}function k_(r,t){r.uniform1uiv(this.addr,t)}function H_(r,t){r.uniform2uiv(this.addr,t)}function V_(r,t){r.uniform3uiv(this.addr,t)}function G_(r,t){r.uniform4uiv(this.addr,t)}function W_(r,t,e){const n=this.cache,i=t.length,s=Qa(e,i);ve(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Vd,s[o])}function X_(r,t,e){const n=this.cache,i=t.length,s=Qa(e,i);ve(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Xd,s[o])}function Y_(r,t,e){const n=this.cache,i=t.length,s=Qa(e,i);ve(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Yd,s[o])}function q_(r,t,e){const n=this.cache,i=t.length,s=Qa(e,i);ve(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Wd,s[o])}function $_(r){switch(r){case 5126:return R_;case 35664:return P_;case 35665:return L_;case 35666:return D_;case 35674:return I_;case 35675:return F_;case 35676:return U_;case 5124:case 35670:return N_;case 35667:case 35671:return O_;case 35668:case 35672:return z_;case 35669:case 35673:return B_;case 5125:return k_;case 36294:return H_;case 36295:return V_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return q_}}class j_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=C_(e.type)}}class Z_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$_(e.type)}}class K_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Oo=/(\w+)(\])?(\[|\.)?/g;function Pc(r,t){r.seq.push(t),r.map[t.id]=t}function J_(r,t,e){const n=r.name,i=n.length;for(Oo.lastIndex=0;;){const s=Oo.exec(n),o=Oo.lastIndex;let a=s[1];const l=s[2]==="]",h=s[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===i){Pc(e,h===void 0?new j_(a,r,t):new Z_(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new K_(a),Pc(e,u)),e=u}}}class La{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);J_(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Lc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Q_=37297;let tx=0;function ex(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function nx(r){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(r);let n;switch(t===e?n="":t===za&&e===Oa?n="LinearDisplayP3ToLinearSRGB":t===Oa&&e===za&&(n="LinearSRGBToLinearDisplayP3"),r){case fi:case ja:return[n,"LinearTransferOETF"];case gn:case $l:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Dc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+ex(r.getShaderSource(t),o)}else return i}function ix(r,t){const e=nx(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function sx(r,t){let e;switch(t){case tp:e="Linear";break;case ep:e="Reinhard";break;case np:e="OptimizedCineon";break;case ip:e="ACESFilmic";break;case rp:e="AgX";break;case ap:e="Neutral";break;case sp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function rx(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function ax(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function ox(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lx(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Ts(r){return r!==""}function Ic(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(r){return r.replace(hx,ux)}const cx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ux(r,t){let e=Vt[t];if(e===void 0){const n=cx.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Dl(e)}const dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(r){return r.replace(dx,fx)}function fx(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Nc(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`;return r.isWebGL2&&(t+=`precision ${r.precision} sampler3D;
		precision ${r.precision} sampler2DArray;
		precision ${r.precision} sampler2DShadow;
		precision ${r.precision} samplerCubeShadow;
		precision ${r.precision} sampler2DArrayShadow;
		precision ${r.precision} isampler2D;
		precision ${r.precision} isampler3D;
		precision ${r.precision} isamplerCube;
		precision ${r.precision} isampler2DArray;
		precision ${r.precision} usampler2D;
		precision ${r.precision} usampler3D;
		precision ${r.precision} usamplerCube;
		precision ${r.precision} usampler2DArray;
		`),r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function px(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===dd?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Cf?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function mx(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ns:case Os:t="ENVMAP_TYPE_CUBE";break;case $a:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gx(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Os:t="ENVMAP_MODE_REFRACTION";break}return t}function _x(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xl:t="ENVMAP_BLENDING_MULTIPLY";break;case Jf:t="ENVMAP_BLENDING_MIX";break;case Qf:t="ENVMAP_BLENDING_ADD";break}return t}function xx(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function vx(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=px(e),h=mx(e),c=gx(e),u=_x(e),d=xx(e),f=e.isWebGL2?"":rx(e),g=ax(e),_=ox(s),p=i.createProgram();let m,S,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ts).join(`
`),m.length>0&&(m+=`
`),S=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ts).join(`
`),S.length>0&&(S+=`
`)):(m=[Nc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),S=[f,Nc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?Vt.tonemapping_pars_fragment:"",e.toneMapping!==li?sx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,ix("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),o=Dl(o),o=Ic(o,e),o=Fc(o,e),a=Dl(a),a=Ic(a,e),a=Fc(a,e),o=Uc(o),a=Uc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,S=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const b=x+m+o,R=x+S+a,A=Lc(i,i.VERTEX_SHADER,b),w=Lc(i,i.FRAGMENT_SHADER,R);i.attachShader(p,A),i.attachShader(p,w),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function I(j){if(r.debug.checkShaderErrors){const q=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(A).trim(),V=i.getShaderInfoLog(w).trim();let O=!0,J=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,A,w);else{const G=Dc(i,A,"vertex"),$=Dc(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+q+`
`+G+`
`+$)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(L===""||V==="")&&(J=!1);J&&(j.diagnostics={runnable:O,programLog:q,vertexShader:{log:L,prefix:m},fragmentShader:{log:V,prefix:S}})}i.deleteShader(A),i.deleteShader(w),X=new La(i,p),y=lx(i,p)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let y;this.getAttributes=function(){return y===void 0&&I(this),y};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(p,Q_)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tx++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=w,this}let yx=0;class Mx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bx(t),e.set(t,n)),n}}class bx{constructor(t){this.id=yx++,this.code=t,this.usedTimes=0}}function Sx(r,t,e,n,i,s,o){const a=new Zl,l=new Mx,h=new Set,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return h.add(y),y===0?"uv":`uv${y}`}function m(y,T,j,q,L){const V=q.fog,O=L.geometry,J=y.isMeshStandardMaterial?q.environment:null,G=(y.isMeshStandardMaterial?e:t).get(y.envMap||J),$=G&&G.mapping===$a?G.image.height:null,Z=_[y.type];y.precision!==null&&(g=i.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const st=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ft=st!==void 0?st.length:0;let Tt=0;O.morphAttributes.position!==void 0&&(Tt=1),O.morphAttributes.normal!==void 0&&(Tt=2),O.morphAttributes.color!==void 0&&(Tt=3);let W,it,mt,Lt;if(Z){const Kt=_n[Z];W=Kt.vertexShader,it=Kt.fragmentShader}else W=y.vertexShader,it=y.fragmentShader,l.update(y),mt=l.getVertexShaderID(y),Lt=l.getFragmentShaderID(y);const bt=r.getRenderTarget(),_t=L.isInstancedMesh===!0,$t=L.isBatchedMesh===!0,Pt=!!y.map,U=!!y.matcap,xe=!!G,wt=!!y.aoMap,Ot=!!y.lightMap,Et=!!y.bumpMap,Yt=!!y.normalMap,zt=!!y.displacementMap,kt=!!y.emissiveMap,ie=!!y.metalnessMap,C=!!y.roughnessMap,M=y.anisotropy>0,Y=y.clearcoat>0,Q=y.iridescence>0,at=y.sheen>0,nt=y.transmission>0,It=M&&!!y.anisotropyMap,At=Y&&!!y.clearcoatMap,ht=Y&&!!y.clearcoatNormalMap,ut=Y&&!!y.clearcoatRoughnessMap,Ft=Q&&!!y.iridescenceMap,lt=Q&&!!y.iridescenceThicknessMap,he=at&&!!y.sheenColorMap,Gt=at&&!!y.sheenRoughnessMap,St=!!y.specularMap,xt=!!y.specularColorMap,yt=!!y.specularIntensityMap,P=nt&&!!y.transmissionMap,tt=nt&&!!y.thicknessMap,vt=!!y.gradientMap,D=!!y.alphaMap,ot=y.alphaTest>0,N=!!y.alphaHash,rt=!!y.extensions;let dt=li;y.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(dt=r.toneMapping);const Xt={isWebGL2:u,shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:it,defines:y.defines,customVertexShaderID:mt,customFragmentShaderID:Lt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:$t,instancing:_t,instancingColor:_t&&L.instanceColor!==null,instancingMorph:_t&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:fi,alphaToCoverage:!!y.alphaToCoverage,map:Pt,matcap:U,envMap:xe,envMapMode:xe&&G.mapping,envMapCubeUVHeight:$,aoMap:wt,lightMap:Ot,bumpMap:Et,normalMap:Yt,displacementMap:f&&zt,emissiveMap:kt,normalMapObjectSpace:Yt&&y.normalMapType===_p,normalMapTangentSpace:Yt&&y.normalMapType===ql,metalnessMap:ie,roughnessMap:C,anisotropy:M,anisotropyMap:It,clearcoat:Y,clearcoatMap:At,clearcoatNormalMap:ht,clearcoatRoughnessMap:ut,iridescence:Q,iridescenceMap:Ft,iridescenceThicknessMap:lt,sheen:at,sheenColorMap:he,sheenRoughnessMap:Gt,specularMap:St,specularColorMap:xt,specularIntensityMap:yt,transmission:nt,transmissionMap:P,thicknessMap:tt,gradientMap:vt,opaque:y.transparent===!1&&y.blending===Ls&&y.alphaToCoverage===!1,alphaMap:D,alphaTest:ot,alphaHash:N,combine:y.combine,mapUv:Pt&&p(y.map.channel),aoMapUv:wt&&p(y.aoMap.channel),lightMapUv:Ot&&p(y.lightMap.channel),bumpMapUv:Et&&p(y.bumpMap.channel),normalMapUv:Yt&&p(y.normalMap.channel),displacementMapUv:zt&&p(y.displacementMap.channel),emissiveMapUv:kt&&p(y.emissiveMap.channel),metalnessMapUv:ie&&p(y.metalnessMap.channel),roughnessMapUv:C&&p(y.roughnessMap.channel),anisotropyMapUv:It&&p(y.anisotropyMap.channel),clearcoatMapUv:At&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ht&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:he&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&p(y.sheenRoughnessMap.channel),specularMapUv:St&&p(y.specularMap.channel),specularColorMapUv:xt&&p(y.specularColorMap.channel),specularIntensityMapUv:yt&&p(y.specularIntensityMap.channel),transmissionMapUv:P&&p(y.transmissionMap.channel),thicknessMapUv:tt&&p(y.thicknessMap.channel),alphaMapUv:D&&p(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Yt||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(Pt||D),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Tt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:dt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Pt&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===ae,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===He,flipSided:y.side===Fe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:rt&&y.extensions.derivatives===!0,extensionFragDepth:rt&&y.extensions.fragDepth===!0,extensionDrawBuffers:rt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:rt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:rt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:rt&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Xt.vertexUv1s=h.has(1),Xt.vertexUv2s=h.has(2),Xt.vertexUv3s=h.has(3),h.clear(),Xt}function S(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const j in y.defines)T.push(j),T.push(y.defines[j]);return y.isRawShaderMaterial===!1&&(x(T,y),b(T,y),T.push(r.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function b(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.instancingMorph&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.normalMapObjectSpace&&a.enable(7),T.normalMapTangentSpace&&a.enable(8),T.clearcoat&&a.enable(9),T.iridescence&&a.enable(10),T.alphaTest&&a.enable(11),T.vertexColors&&a.enable(12),T.vertexAlphas&&a.enable(13),T.vertexUv1s&&a.enable(14),T.vertexUv2s&&a.enable(15),T.vertexUv3s&&a.enable(16),T.vertexTangents&&a.enable(17),T.anisotropy&&a.enable(18),T.alphaHash&&a.enable(19),T.batching&&a.enable(20),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),y.push(a.mask)}function R(y){const T=_[y.type];let j;if(T){const q=_n[T];j=Od.clone(q.uniforms)}else j=y.uniforms;return j}function A(y,T){let j;for(let q=0,L=c.length;q<L;q++){const V=c[q];if(V.cacheKey===T){j=V,++j.usedTimes;break}}return j===void 0&&(j=new vx(r,T,y,s),c.push(j)),j}function w(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function I(y){l.remove(y)}function X(){l.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:R,acquireProgram:A,releaseProgram:w,releaseShaderCache:I,programs:c,dispose:X}}function wx(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Ex(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Oc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function zc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,p){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},r[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function a(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function h(u,d){e.length>1&&e.sort(u||Ex),n.length>1&&n.sort(d||Oc),i.length>1&&i.sort(d||Oc)}function c(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:c,sort:h}}function Ax(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new zc,r.set(n,[o])):i>=s.length?(o=new zc,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Tx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new v,color:new Rt};break;case"SpotLight":e={position:new v,direction:new v,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new v,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new v,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new v,halfWidth:new v,halfHeight:new v};break}return r[t.id]=e,e}}}function Cx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Rx=0;function Px(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Lx(r,t){const e=new Tx,n=Cx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new v);const s=new v,o=new qt,a=new qt;function l(c,u){let d=0,f=0,g=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let _=0,p=0,m=0,S=0,x=0,b=0,R=0,A=0,w=0,I=0,X=0;c.sort(Px);const y=u===!0?Math.PI:1;for(let j=0,q=c.length;j<q;j++){const L=c[j],V=L.color,O=L.intensity,J=L.distance,G=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=V.r*O*y,f+=V.g*O*y,g+=V.b*O*y;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],O);X++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*y),L.castShadow){const Z=L.shadow,st=n.get(L);st.shadowBias=Z.bias,st.shadowNormalBias=Z.normalBias,st.shadowRadius=Z.radius,st.shadowMapSize=Z.mapSize,i.directionalShadow[_]=st,i.directionalShadowMap[_]=G,i.directionalShadowMatrix[_]=L.shadow.matrix,b++}i.directional[_]=$,_++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(V).multiplyScalar(O*y),$.distance=J,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[m]=$;const Z=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,Z.updateMatrices(L),L.castShadow&&I++),i.spotLightMatrix[m]=Z.matrix,L.castShadow){const st=n.get(L);st.shadowBias=Z.bias,st.shadowNormalBias=Z.normalBias,st.shadowRadius=Z.radius,st.shadowMapSize=Z.mapSize,i.spotShadow[m]=st,i.spotShadowMap[m]=G,A++}m++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(V).multiplyScalar(O),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=$,S++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*y),$.distance=L.distance,$.decay=L.decay,L.castShadow){const Z=L.shadow,st=n.get(L);st.shadowBias=Z.bias,st.shadowNormalBias=Z.normalBias,st.shadowRadius=Z.radius,st.shadowMapSize=Z.mapSize,st.shadowCameraNear=Z.camera.near,st.shadowCameraFar=Z.camera.far,i.pointShadow[p]=st,i.pointShadowMap[p]=G,i.pointShadowMatrix[p]=L.shadow.matrix,R++}i.point[p]=$,p++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(O*y),$.groundColor.copy(L.groundColor).multiplyScalar(O*y),i.hemi[x]=$,x++}}S>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const T=i.hash;(T.directionalLength!==_||T.pointLength!==p||T.spotLength!==m||T.rectAreaLength!==S||T.hemiLength!==x||T.numDirectionalShadows!==b||T.numPointShadows!==R||T.numSpotShadows!==A||T.numSpotMaps!==w||T.numLightProbes!==X)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=S,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=A+w-I,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=X,T.directionalLength=_,T.pointLength=p,T.spotLength=m,T.rectAreaLength=S,T.hemiLength=x,T.numDirectionalShadows=b,T.numPointShadows=R,T.numSpotShadows=A,T.numSpotMaps=w,T.numLightProbes=X,i.version=Rx++)}function h(c,u){let d=0,f=0,g=0,_=0,p=0;const m=u.matrixWorldInverse;for(let S=0,x=c.length;S<x;S++){const b=c[S];if(b.isDirectionalLight){const R=i.directional[d];R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),d++}else if(b.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),g++}else if(b.isRectAreaLight){const R=i.rectArea[_];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(m),a.identity(),o.copy(b.matrixWorld),o.premultiply(m),a.extractRotation(o),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const R=i.point[f];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const R=i.hemi[p];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(m),p++}}}return{setup:l,setupView:h,state:i}}function Bc(r,t){const e=new Lx(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function h(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a}}function Dx(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new Bc(r,t),e.set(s,[l])):o>=a.length?(l=new Bc(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Ix extends Hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fx extends Hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ox(r,t,e){let n=new Ql;const i=new gt,s=new gt,o=new de,a=new Ix({depthPacking:gp}),l=new Fx,h={},c=e.maxTextureSize,u={[kn]:Fe,[Fe]:kn,[He]:He},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:Ux,fragmentShader:Nx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new te(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dd;let m=this.type;this.render=function(A,w,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const X=r.getRenderTarget(),y=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),j=r.state;j.setBlending(oi),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const q=m!==Un&&this.type===Un,L=m===Un&&this.type!==Un;for(let V=0,O=A.length;V<O;V++){const J=A[V],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const $=G.getFrameExtents();if(i.multiply($),s.copy(G.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(s.x=Math.floor(c/$.x),i.x=s.x*$.x,G.mapSize.x=s.x),i.y>c&&(s.y=Math.floor(c/$.y),i.y=s.y*$.y,G.mapSize.y=s.y)),G.map===null||q===!0||L===!0){const st=this.type!==Un?{minFilter:Be,magFilter:Be}:{};G.map!==null&&G.map.dispose(),G.map=new Bi(i.x,i.y,st),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const Z=G.getViewportCount();for(let st=0;st<Z;st++){const ft=G.getViewport(st);o.set(s.x*ft.x,s.y*ft.y,s.x*ft.z,s.y*ft.w),j.viewport(o),G.updateMatrices(J,st),n=G.getFrustum(),b(w,I,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===Un&&S(G,I),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(X,y,T)};function S(A,w){const I=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Bi(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(w,null,I,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(w,null,I,f,_,null)}function x(A,w,I,X){let y=null;const T=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)y=T;else if(y=I.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const j=y.uuid,q=w.uuid;let L=h[j];L===void 0&&(L={},h[j]=L);let V=L[q];V===void 0&&(V=y.clone(),L[q]=V,w.addEventListener("dispose",R)),y=V}if(y.visible=w.visible,y.wireframe=w.wireframe,X===Un?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const j=r.properties.get(y);j.light=I}return y}function b(A,w,I,X,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Un)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const q=t.update(A),L=A.material;if(Array.isArray(L)){const V=q.groups;for(let O=0,J=V.length;O<J;O++){const G=V[O],$=L[G.materialIndex];if($&&$.visible){const Z=x(A,$,X,y);A.onBeforeShadow(r,A,w,I,q,Z,G),r.renderBufferDirect(I,null,q,Z,A,G),A.onAfterShadow(r,A,w,I,q,Z,G)}}}else if(L.visible){const V=x(A,L,X,y);A.onBeforeShadow(r,A,w,I,q,V,null),r.renderBufferDirect(I,null,q,V,A,null),A.onAfterShadow(r,A,w,I,q,V,null)}}const j=A.children;for(let q=0,L=j.length;q<L;q++)b(j[q],w,I,X,y)}function R(A){A.target.removeEventListener("dispose",R);for(const I in h){const X=h[I],y=A.target.uuid;y in X&&(X[y].dispose(),delete X[y])}}}function zx(r,t,e){const n=e.isWebGL2;function i(){let D=!1;const ot=new de;let N=null;const rt=new de(0,0,0,0);return{setMask:function(dt){N!==dt&&!D&&(r.colorMask(dt,dt,dt,dt),N=dt)},setLocked:function(dt){D=dt},setClear:function(dt,Xt,Kt,ee,ce){ce===!0&&(dt*=ee,Xt*=ee,Kt*=ee),ot.set(dt,Xt,Kt,ee),rt.equals(ot)===!1&&(r.clearColor(dt,Xt,Kt,ee),rt.copy(ot))},reset:function(){D=!1,N=null,rt.set(-1,0,0,0)}}}function s(){let D=!1,ot=null,N=null,rt=null;return{setTest:function(dt){dt?_t(r.DEPTH_TEST):$t(r.DEPTH_TEST)},setMask:function(dt){ot!==dt&&!D&&(r.depthMask(dt),ot=dt)},setFunc:function(dt){if(N!==dt){switch(dt){case Xf:r.depthFunc(r.NEVER);break;case Yf:r.depthFunc(r.ALWAYS);break;case qf:r.depthFunc(r.LESS);break;case Fa:r.depthFunc(r.LEQUAL);break;case $f:r.depthFunc(r.EQUAL);break;case jf:r.depthFunc(r.GEQUAL);break;case Zf:r.depthFunc(r.GREATER);break;case Kf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}N=dt}},setLocked:function(dt){D=dt},setClear:function(dt){rt!==dt&&(r.clearDepth(dt),rt=dt)},reset:function(){D=!1,ot=null,N=null,rt=null}}}function o(){let D=!1,ot=null,N=null,rt=null,dt=null,Xt=null,Kt=null,ee=null,ce=null;return{setTest:function(jt){D||(jt?_t(r.STENCIL_TEST):$t(r.STENCIL_TEST))},setMask:function(jt){ot!==jt&&!D&&(r.stencilMask(jt),ot=jt)},setFunc:function(jt,se,Ce){(N!==jt||rt!==se||dt!==Ce)&&(r.stencilFunc(jt,se,Ce),N=jt,rt=se,dt=Ce)},setOp:function(jt,se,Ce){(Xt!==jt||Kt!==se||ee!==Ce)&&(r.stencilOp(jt,se,Ce),Xt=jt,Kt=se,ee=Ce)},setLocked:function(jt){D=jt},setClear:function(jt){ce!==jt&&(r.clearStencil(jt),ce=jt)},reset:function(){D=!1,ot=null,N=null,rt=null,dt=null,Xt=null,Kt=null,ee=null,ce=null}}}const a=new i,l=new s,h=new o,c=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,_=[],p=null,m=!1,S=null,x=null,b=null,R=null,A=null,w=null,I=null,X=new Rt(0,0,0),y=0,T=!1,j=null,q=null,L=null,V=null,O=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,$=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=$>=1):Z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=$>=2);let st=null,ft={};const Tt=r.getParameter(r.SCISSOR_BOX),W=r.getParameter(r.VIEWPORT),it=new de().fromArray(Tt),mt=new de().fromArray(W);function Lt(D,ot,N,rt){const dt=new Uint8Array(4),Xt=r.createTexture();r.bindTexture(D,Xt),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Kt=0;Kt<N;Kt++)n&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D(ot,0,r.RGBA,1,1,rt,0,r.RGBA,r.UNSIGNED_BYTE,dt):r.texImage2D(ot+Kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,dt);return Xt}const bt={};bt[r.TEXTURE_2D]=Lt(r.TEXTURE_2D,r.TEXTURE_2D,1),bt[r.TEXTURE_CUBE_MAP]=Lt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(bt[r.TEXTURE_2D_ARRAY]=Lt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),bt[r.TEXTURE_3D]=Lt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),h.setClear(0),_t(r.DEPTH_TEST),l.setFunc(Fa),zt(!1),kt(xh),_t(r.CULL_FACE),Et(oi);function _t(D){d[D]!==!0&&(r.enable(D),d[D]=!0)}function $t(D){d[D]!==!1&&(r.disable(D),d[D]=!1)}function Pt(D,ot){return f[D]!==ot?(r.bindFramebuffer(D,ot),f[D]=ot,n&&(D===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ot),D===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ot)),!0):!1}function U(D,ot){let N=_,rt=!1;if(D){N=g.get(ot),N===void 0&&(N=[],g.set(ot,N));const dt=D.textures;if(N.length!==dt.length||N[0]!==r.COLOR_ATTACHMENT0){for(let Xt=0,Kt=dt.length;Xt<Kt;Xt++)N[Xt]=r.COLOR_ATTACHMENT0+Xt;N.length=dt.length,rt=!0}}else N[0]!==r.BACK&&(N[0]=r.BACK,rt=!0);if(rt)if(e.isWebGL2)r.drawBuffers(N);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(N);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function xe(D){return p!==D?(r.useProgram(D),p=D,!0):!1}const wt={[Di]:r.FUNC_ADD,[Pf]:r.FUNC_SUBTRACT,[Lf]:r.FUNC_REVERSE_SUBTRACT};if(n)wt[bh]=r.MIN,wt[Sh]=r.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&(wt[bh]=D.MIN_EXT,wt[Sh]=D.MAX_EXT)}const Ot={[Df]:r.ZERO,[If]:r.ONE,[Ff]:r.SRC_COLOR,[wl]:r.SRC_ALPHA,[kf]:r.SRC_ALPHA_SATURATE,[zf]:r.DST_COLOR,[Nf]:r.DST_ALPHA,[Uf]:r.ONE_MINUS_SRC_COLOR,[El]:r.ONE_MINUS_SRC_ALPHA,[Bf]:r.ONE_MINUS_DST_COLOR,[Of]:r.ONE_MINUS_DST_ALPHA,[Hf]:r.CONSTANT_COLOR,[Vf]:r.ONE_MINUS_CONSTANT_COLOR,[Gf]:r.CONSTANT_ALPHA,[Wf]:r.ONE_MINUS_CONSTANT_ALPHA};function Et(D,ot,N,rt,dt,Xt,Kt,ee,ce,jt){if(D===oi){m===!0&&($t(r.BLEND),m=!1);return}if(m===!1&&(_t(r.BLEND),m=!0),D!==Rf){if(D!==S||jt!==T){if((x!==Di||A!==Di)&&(r.blendEquation(r.FUNC_ADD),x=Di,A=Di),jt)switch(D){case Ls:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vh:r.blendFunc(r.ONE,r.ONE);break;case yh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ls:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case yh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,R=null,w=null,I=null,X.set(0,0,0),y=0,S=D,T=jt}return}dt=dt||ot,Xt=Xt||N,Kt=Kt||rt,(ot!==x||dt!==A)&&(r.blendEquationSeparate(wt[ot],wt[dt]),x=ot,A=dt),(N!==b||rt!==R||Xt!==w||Kt!==I)&&(r.blendFuncSeparate(Ot[N],Ot[rt],Ot[Xt],Ot[Kt]),b=N,R=rt,w=Xt,I=Kt),(ee.equals(X)===!1||ce!==y)&&(r.blendColor(ee.r,ee.g,ee.b,ce),X.copy(ee),y=ce),S=D,T=!1}function Yt(D,ot){D.side===He?$t(r.CULL_FACE):_t(r.CULL_FACE);let N=D.side===Fe;ot&&(N=!N),zt(N),D.blending===Ls&&D.transparent===!1?Et(oi):Et(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const rt=D.stencilWrite;h.setTest(rt),rt&&(h.setMask(D.stencilWriteMask),h.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),h.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),C(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?_t(r.SAMPLE_ALPHA_TO_COVERAGE):$t(r.SAMPLE_ALPHA_TO_COVERAGE)}function zt(D){j!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),j=D)}function kt(D){D!==Af?(_t(r.CULL_FACE),D!==q&&(D===xh?r.cullFace(r.BACK):D===Tf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):$t(r.CULL_FACE),q=D}function ie(D){D!==L&&(G&&r.lineWidth(D),L=D)}function C(D,ot,N){D?(_t(r.POLYGON_OFFSET_FILL),(V!==ot||O!==N)&&(r.polygonOffset(ot,N),V=ot,O=N)):$t(r.POLYGON_OFFSET_FILL)}function M(D){D?_t(r.SCISSOR_TEST):$t(r.SCISSOR_TEST)}function Y(D){D===void 0&&(D=r.TEXTURE0+J-1),st!==D&&(r.activeTexture(D),st=D)}function Q(D,ot,N){N===void 0&&(st===null?N=r.TEXTURE0+J-1:N=st);let rt=ft[N];rt===void 0&&(rt={type:void 0,texture:void 0},ft[N]=rt),(rt.type!==D||rt.texture!==ot)&&(st!==N&&(r.activeTexture(N),st=N),r.bindTexture(D,ot||bt[D]),rt.type=D,rt.texture=ot)}function at(){const D=ft[st];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function nt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(D){it.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),it.copy(D))}function yt(D){mt.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),mt.copy(D))}function P(D,ot){let N=u.get(ot);N===void 0&&(N=new WeakMap,u.set(ot,N));let rt=N.get(D);rt===void 0&&(rt=r.getUniformBlockIndex(ot,D.name),N.set(D,rt))}function tt(D,ot){const rt=u.get(ot).get(D);c.get(ot)!==rt&&(r.uniformBlockBinding(ot,rt,D.__bindingPointIndex),c.set(ot,rt))}function vt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},st=null,ft={},f={},g=new WeakMap,_=[],p=null,m=!1,S=null,x=null,b=null,R=null,A=null,w=null,I=null,X=new Rt(0,0,0),y=0,T=!1,j=null,q=null,L=null,V=null,O=null,it.set(0,0,r.canvas.width,r.canvas.height),mt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),h.reset()}return{buffers:{color:a,depth:l,stencil:h},enable:_t,disable:$t,bindFramebuffer:Pt,drawBuffers:U,useProgram:xe,setBlending:Et,setMaterial:Yt,setFlipSided:zt,setCullFace:kt,setLineWidth:ie,setPolygonOffset:C,setScissorTest:M,activeTexture:Y,bindTexture:Q,unbindTexture:at,compressedTexImage2D:nt,compressedTexImage3D:It,texImage2D:Gt,texImage3D:St,updateUBOMapping:P,uniformBlockBinding:tt,texStorage2D:lt,texStorage3D:he,texSubImage2D:At,texSubImage3D:ht,compressedTexSubImage2D:ut,compressedTexSubImage3D:Ft,scissor:xt,viewport:yt,reset:vt}}function Bx(r,t,e,n,i,s,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,u=new WeakMap;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return g?new OffscreenCanvas(C,M):gr("canvas")}function p(C,M,Y,Q){let at=1;const nt=ie(C);if((nt.width>Q||nt.height>Q)&&(at=Q/Math.max(nt.width,nt.height)),at<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const It=M?ka:Math.floor,At=It(at*nt.width),ht=It(at*nt.height);d===void 0&&(d=_(At,ht));const ut=Y?_(At,ht):d;return ut.width=At,ut.height=ht,ut.getContext("2d").drawImage(C,0,0,At,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+At+"x"+ht+")."),ut}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function m(C){const M=ie(C);return Pl(M.width)&&Pl(M.height)}function S(C){return a?!1:C.wrapS!==cn||C.wrapT!==cn||C.minFilter!==Be&&C.minFilter!==Ge}function x(C,M){return C.generateMipmaps&&M&&C.minFilter!==Be&&C.minFilter!==Ge}function b(C){r.generateMipmap(C)}function R(C,M,Y,Q,at=!1){if(a===!1)return M;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let nt=M;if(M===r.RED&&(Y===r.FLOAT&&(nt=r.R32F),Y===r.HALF_FLOAT&&(nt=r.R16F),Y===r.UNSIGNED_BYTE&&(nt=r.R8)),M===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(nt=r.R8UI),Y===r.UNSIGNED_SHORT&&(nt=r.R16UI),Y===r.UNSIGNED_INT&&(nt=r.R32UI),Y===r.BYTE&&(nt=r.R8I),Y===r.SHORT&&(nt=r.R16I),Y===r.INT&&(nt=r.R32I)),M===r.RG&&(Y===r.FLOAT&&(nt=r.RG32F),Y===r.HALF_FLOAT&&(nt=r.RG16F),Y===r.UNSIGNED_BYTE&&(nt=r.RG8)),M===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(nt=r.RG8UI),Y===r.UNSIGNED_SHORT&&(nt=r.RG16UI),Y===r.UNSIGNED_INT&&(nt=r.RG32UI),Y===r.BYTE&&(nt=r.RG8I),Y===r.SHORT&&(nt=r.RG16I),Y===r.INT&&(nt=r.RG32I)),M===r.RGBA){const It=at?Na:Qt.getTransfer(Q);Y===r.FLOAT&&(nt=r.RGBA32F),Y===r.HALF_FLOAT&&(nt=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(nt=It===ae?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(nt=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(nt=r.RGB5_A1)}return(nt===r.R16F||nt===r.R32F||nt===r.RG16F||nt===r.RG32F||nt===r.RGBA16F||nt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function A(C,M,Y){return x(C,Y)===!0||C.isFramebufferTexture&&C.minFilter!==Be&&C.minFilter!==Ge?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function w(C){return C===Be||C===wh||C===Xs?r.NEAREST:r.LINEAR}function I(C){const M=C.target;M.removeEventListener("dispose",I),y(M),M.isVideoTexture&&u.delete(M)}function X(C){const M=C.target;M.removeEventListener("dispose",X),j(M)}function y(C){const M=n.get(C);if(M.__webglInit===void 0)return;const Y=C.source,Q=f.get(Y);if(Q){const at=Q[M.__cacheKey];at.usedTimes--,at.usedTimes===0&&T(C),Object.keys(Q).length===0&&f.delete(Y)}n.remove(C)}function T(C){const M=n.get(C);r.deleteTexture(M.__webglTexture);const Y=C.source,Q=f.get(Y);delete Q[M.__cacheKey],o.memory.textures--}function j(C){const M=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let at=0;at<M.__webglFramebuffer[Q].length;at++)r.deleteFramebuffer(M.__webglFramebuffer[Q][at]);else r.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)r.deleteFramebuffer(M.__webglFramebuffer[Q]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=C.textures;for(let Q=0,at=Y.length;Q<at;Q++){const nt=n.get(Y[Q]);nt.__webglTexture&&(r.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(Y[Q])}n.remove(C)}let q=0;function L(){q=0}function V(){const C=q;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),q+=1,C}function O(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function J(C,M){const Y=n.get(C);if(C.isVideoTexture&&zt(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(Y,C,M);return}}e.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+M)}function G(C,M){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){mt(Y,C,M);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+M)}function $(C,M){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){mt(Y,C,M);return}e.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+M)}function Z(C,M){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){Lt(Y,C,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+M)}const st={[Ua]:r.REPEAT,[cn]:r.CLAMP_TO_EDGE,[Cl]:r.MIRRORED_REPEAT},ft={[Be]:r.NEAREST,[wh]:r.NEAREST_MIPMAP_NEAREST,[Xs]:r.NEAREST_MIPMAP_LINEAR,[Ge]:r.LINEAR,[oo]:r.LINEAR_MIPMAP_NEAREST,[Ui]:r.LINEAR_MIPMAP_LINEAR},Tt={[xp]:r.NEVER,[wp]:r.ALWAYS,[vp]:r.LESS,[Md]:r.LEQUAL,[yp]:r.EQUAL,[Sp]:r.GEQUAL,[Mp]:r.GREATER,[bp]:r.NOTEQUAL};function W(C,M,Y){if(M.type===On&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ge||M.magFilter===oo||M.magFilter===Xs||M.magFilter===Ui||M.minFilter===Ge||M.minFilter===oo||M.minFilter===Xs||M.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Y?(r.texParameteri(C,r.TEXTURE_WRAP_S,st[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,st[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,st[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ft[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ft[M.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==cn||M.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,w(M.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==Be&&M.minFilter!==Ge&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Tt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Be||M.minFilter!==Xs&&M.minFilter!==Ui||M.type===On&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===pr&&t.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function it(C,M){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",I));const Q=M.source;let at=f.get(Q);at===void 0&&(at={},f.set(Q,at));const nt=O(M);if(nt!==C.__cacheKey){at[nt]===void 0&&(at[nt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),at[nt].usedTimes++;const It=at[C.__cacheKey];It!==void 0&&(at[C.__cacheKey].usedTimes--,It.usedTimes===0&&T(M)),C.__cacheKey=nt,C.__webglTexture=at[nt].texture}return Y}function mt(C,M,Y){let Q=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=r.TEXTURE_3D);const at=it(C,M),nt=M.source;e.bindTexture(Q,C.__webglTexture,r.TEXTURE0+Y);const It=n.get(nt);if(nt.version!==It.__version||at===!0){e.activeTexture(r.TEXTURE0+Y);const At=Qt.getPrimaries(Qt.workingColorSpace),ht=M.colorSpace===si?null:Qt.getPrimaries(M.colorSpace),ut=M.colorSpace===si||At===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Ft=S(M)&&m(M.image)===!1;let lt=p(M.image,Ft,!1,i.maxTextureSize);lt=kt(M,lt);const he=m(lt)||a,Gt=s.convert(M.format,M.colorSpace);let St=s.convert(M.type),xt=R(M.internalFormat,Gt,St,M.colorSpace,M.isVideoTexture);W(Q,M,he);let yt;const P=M.mipmaps,tt=a&&M.isVideoTexture!==!0&&xt!==yd,vt=It.__version===void 0||at===!0,D=nt.dataReady,ot=A(M,lt,he);if(M.isDepthTexture)xt=r.DEPTH_COMPONENT,a?M.type===On?xt=r.DEPTH_COMPONENT32F:M.type===ai?xt=r.DEPTH_COMPONENT24:M.type===Oi?xt=r.DEPTH24_STENCIL8:xt=r.DEPTH_COMPONENT16:M.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===zi&&xt===r.DEPTH_COMPONENT&&M.type!==Yl&&M.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ai,St=s.convert(M.type)),M.format===zs&&xt===r.DEPTH_COMPONENT&&(xt=r.DEPTH_STENCIL,M.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Oi,St=s.convert(M.type))),vt&&(tt?e.texStorage2D(r.TEXTURE_2D,1,xt,lt.width,lt.height):e.texImage2D(r.TEXTURE_2D,0,xt,lt.width,lt.height,0,Gt,St,null));else if(M.isDataTexture)if(P.length>0&&he){tt&&vt&&e.texStorage2D(r.TEXTURE_2D,ot,xt,P[0].width,P[0].height);for(let N=0,rt=P.length;N<rt;N++)yt=P[N],tt?D&&e.texSubImage2D(r.TEXTURE_2D,N,0,0,yt.width,yt.height,Gt,St,yt.data):e.texImage2D(r.TEXTURE_2D,N,xt,yt.width,yt.height,0,Gt,St,yt.data);M.generateMipmaps=!1}else tt?(vt&&e.texStorage2D(r.TEXTURE_2D,ot,xt,lt.width,lt.height),D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt.width,lt.height,Gt,St,lt.data)):e.texImage2D(r.TEXTURE_2D,0,xt,lt.width,lt.height,0,Gt,St,lt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){tt&&vt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ot,xt,P[0].width,P[0].height,lt.depth);for(let N=0,rt=P.length;N<rt;N++)yt=P[N],M.format!==un?Gt!==null?tt?D&&e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,N,0,0,0,yt.width,yt.height,lt.depth,Gt,yt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,N,xt,yt.width,yt.height,lt.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?D&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,N,0,0,0,yt.width,yt.height,lt.depth,Gt,St,yt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,N,xt,yt.width,yt.height,lt.depth,0,Gt,St,yt.data)}else{tt&&vt&&e.texStorage2D(r.TEXTURE_2D,ot,xt,P[0].width,P[0].height);for(let N=0,rt=P.length;N<rt;N++)yt=P[N],M.format!==un?Gt!==null?tt?D&&e.compressedTexSubImage2D(r.TEXTURE_2D,N,0,0,yt.width,yt.height,Gt,yt.data):e.compressedTexImage2D(r.TEXTURE_2D,N,xt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?D&&e.texSubImage2D(r.TEXTURE_2D,N,0,0,yt.width,yt.height,Gt,St,yt.data):e.texImage2D(r.TEXTURE_2D,N,xt,yt.width,yt.height,0,Gt,St,yt.data)}else if(M.isDataArrayTexture)tt?(vt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ot,xt,lt.width,lt.height,lt.depth),D&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Gt,St,lt.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,xt,lt.width,lt.height,lt.depth,0,Gt,St,lt.data);else if(M.isData3DTexture)tt?(vt&&e.texStorage3D(r.TEXTURE_3D,ot,xt,lt.width,lt.height,lt.depth),D&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Gt,St,lt.data)):e.texImage3D(r.TEXTURE_3D,0,xt,lt.width,lt.height,lt.depth,0,Gt,St,lt.data);else if(M.isFramebufferTexture){if(vt)if(tt)e.texStorage2D(r.TEXTURE_2D,ot,xt,lt.width,lt.height);else{let N=lt.width,rt=lt.height;for(let dt=0;dt<ot;dt++)e.texImage2D(r.TEXTURE_2D,dt,xt,N,rt,0,Gt,St,null),N>>=1,rt>>=1}}else if(P.length>0&&he){if(tt&&vt){const N=ie(P[0]);e.texStorage2D(r.TEXTURE_2D,ot,xt,N.width,N.height)}for(let N=0,rt=P.length;N<rt;N++)yt=P[N],tt?D&&e.texSubImage2D(r.TEXTURE_2D,N,0,0,Gt,St,yt):e.texImage2D(r.TEXTURE_2D,N,xt,Gt,St,yt);M.generateMipmaps=!1}else if(tt){if(vt){const N=ie(lt);e.texStorage2D(r.TEXTURE_2D,ot,xt,N.width,N.height)}D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Gt,St,lt)}else e.texImage2D(r.TEXTURE_2D,0,xt,Gt,St,lt);x(M,he)&&b(Q),It.__version=nt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Lt(C,M,Y){if(M.image.length!==6)return;const Q=it(C,M),at=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+Y);const nt=n.get(at);if(at.version!==nt.__version||Q===!0){e.activeTexture(r.TEXTURE0+Y);const It=Qt.getPrimaries(Qt.workingColorSpace),At=M.colorSpace===si?null:Qt.getPrimaries(M.colorSpace),ht=M.colorSpace===si||It===At?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const ut=M.isCompressedTexture||M.image[0].isCompressedTexture,Ft=M.image[0]&&M.image[0].isDataTexture,lt=[];for(let N=0;N<6;N++)!ut&&!Ft?lt[N]=p(M.image[N],!1,!0,i.maxCubemapSize):lt[N]=Ft?M.image[N].image:M.image[N],lt[N]=kt(M,lt[N]);const he=lt[0],Gt=m(he)||a,St=s.convert(M.format,M.colorSpace),xt=s.convert(M.type),yt=R(M.internalFormat,St,xt,M.colorSpace),P=a&&M.isVideoTexture!==!0,tt=nt.__version===void 0||Q===!0,vt=at.dataReady;let D=A(M,he,Gt);W(r.TEXTURE_CUBE_MAP,M,Gt);let ot;if(ut){P&&tt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,D,yt,he.width,he.height);for(let N=0;N<6;N++){ot=lt[N].mipmaps;for(let rt=0;rt<ot.length;rt++){const dt=ot[rt];M.format!==un?St!==null?P?vt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,rt,0,0,dt.width,dt.height,St,dt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,rt,yt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?vt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,rt,0,0,dt.width,dt.height,St,xt,dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,rt,yt,dt.width,dt.height,0,St,xt,dt.data)}}}else{if(ot=M.mipmaps,P&&tt){ot.length>0&&D++;const N=ie(lt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,D,yt,N.width,N.height)}for(let N=0;N<6;N++)if(Ft){P?vt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,lt[N].width,lt[N].height,St,xt,lt[N].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,yt,lt[N].width,lt[N].height,0,St,xt,lt[N].data);for(let rt=0;rt<ot.length;rt++){const Xt=ot[rt].image[N].image;P?vt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,rt+1,0,0,Xt.width,Xt.height,St,xt,Xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,rt+1,yt,Xt.width,Xt.height,0,St,xt,Xt.data)}}else{P?vt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,St,xt,lt[N]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,yt,St,xt,lt[N]);for(let rt=0;rt<ot.length;rt++){const dt=ot[rt];P?vt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,rt+1,0,0,St,xt,dt.image[N]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,rt+1,yt,St,xt,dt.image[N])}}}x(M,Gt)&&b(r.TEXTURE_CUBE_MAP),nt.__version=at.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function bt(C,M,Y,Q,at,nt){const It=s.convert(Y.format,Y.colorSpace),At=s.convert(Y.type),ht=R(Y.internalFormat,It,At,Y.colorSpace);if(!n.get(M).__hasExternalTextures){const Ft=Math.max(1,M.width>>nt),lt=Math.max(1,M.height>>nt);at===r.TEXTURE_3D||at===r.TEXTURE_2D_ARRAY?e.texImage3D(at,nt,ht,Ft,lt,M.depth,0,It,At,null):e.texImage2D(at,nt,ht,Ft,lt,0,It,At,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Yt(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,at,n.get(Y).__webglTexture,0,Et(M)):(at===r.TEXTURE_2D||at>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,at,n.get(Y).__webglTexture,nt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function _t(C,M,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let Q=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(Y||Yt(M)){const at=M.depthTexture;at&&at.isDepthTexture&&(at.type===On?Q=r.DEPTH_COMPONENT32F:at.type===ai&&(Q=r.DEPTH_COMPONENT24));const nt=Et(M);Yt(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,nt,Q,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,Q,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,Q,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const Q=Et(M);Y&&Yt(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,M.width,M.height):Yt(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const Q=M.textures;for(let at=0;at<Q.length;at++){const nt=Q[at],It=s.convert(nt.format,nt.colorSpace),At=s.convert(nt.type),ht=R(nt.internalFormat,It,At,nt.colorSpace),ut=Et(M);Y&&Yt(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,ht,M.width,M.height):Yt(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut,ht,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ht,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function $t(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);const Q=n.get(M.depthTexture).__webglTexture,at=Et(M);if(M.depthTexture.format===zi)Yt(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,at):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(M.depthTexture.format===zs)Yt(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,at):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Pt(C){const M=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");$t(M.__webglFramebuffer,C)}else if(Y){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=r.createRenderbuffer(),_t(M.__webglDepthbuffer[Q],C,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),_t(M.__webglDepthbuffer,C,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function U(C,M,Y){const Q=n.get(C);M!==void 0&&bt(Q.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&Pt(C)}function xe(C){const M=C.texture,Y=n.get(C),Q=n.get(M);C.addEventListener("dispose",X);const at=C.textures,nt=C.isWebGLCubeRenderTarget===!0,It=at.length>1,At=m(C)||a;if(It||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=M.version,o.memory.textures++),nt){Y.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(a&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[ht]=[];for(let ut=0;ut<M.mipmaps.length;ut++)Y.__webglFramebuffer[ht][ut]=r.createFramebuffer()}else Y.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ht=0;ht<M.mipmaps.length;ht++)Y.__webglFramebuffer[ht]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(It)if(i.drawBuffers)for(let ht=0,ut=at.length;ht<ut;ht++){const Ft=n.get(at[ht]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=r.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Yt(C)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ht=0;ht<at.length;ht++){const ut=at[ht];Y.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[ht]);const Ft=s.convert(ut.format,ut.colorSpace),lt=s.convert(ut.type),he=R(ut.internalFormat,Ft,lt,ut.colorSpace,C.isXRRenderTarget===!0),Gt=Et(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,he,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,Y.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),_t(Y.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(nt){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),W(r.TEXTURE_CUBE_MAP,M,At);for(let ht=0;ht<6;ht++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ut=0;ut<M.mipmaps.length;ut++)bt(Y.__webglFramebuffer[ht][ut],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ut);else bt(Y.__webglFramebuffer[ht],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);x(M,At)&&b(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let ht=0,ut=at.length;ht<ut;ht++){const Ft=at[ht],lt=n.get(Ft);e.bindTexture(r.TEXTURE_2D,lt.__webglTexture),W(r.TEXTURE_2D,Ft,At),bt(Y.__webglFramebuffer,C,Ft,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,0),x(Ft,At)&&b(r.TEXTURE_2D)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ht=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,Q.__webglTexture),W(ht,M,At),a&&M.mipmaps&&M.mipmaps.length>0)for(let ut=0;ut<M.mipmaps.length;ut++)bt(Y.__webglFramebuffer[ut],C,M,r.COLOR_ATTACHMENT0,ht,ut);else bt(Y.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,ht,0);x(M,At)&&b(ht),e.unbindTexture()}C.depthBuffer&&Pt(C)}function wt(C){const M=m(C)||a,Y=C.textures;for(let Q=0,at=Y.length;Q<at;Q++){const nt=Y[Q];if(x(nt,M)){const It=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,At=n.get(nt).__webglTexture;e.bindTexture(It,At),b(It),e.unbindTexture()}}}function Ot(C){if(a&&C.samples>0&&Yt(C)===!1){const M=C.textures,Y=C.width,Q=C.height;let at=r.COLOR_BUFFER_BIT;const nt=[],It=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=n.get(C),ht=M.length>1;if(ht)for(let ut=0;ut<M.length;ut++)e.bindFramebuffer(r.FRAMEBUFFER,At.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,At.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let ut=0;ut<M.length;ut++){nt.push(r.COLOR_ATTACHMENT0+ut),C.depthBuffer&&nt.push(It);const Ft=At.__ignoreDepthValues!==void 0?At.__ignoreDepthValues:!1;if(Ft===!1&&(C.depthBuffer&&(at|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(at|=r.STENCIL_BUFFER_BIT)),ht&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,At.__webglColorRenderbuffer[ut]),Ft===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[It]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[It])),ht){const lt=n.get(M[ut]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,lt,0)}r.blitFramebuffer(0,0,Y,Q,0,0,Y,Q,at,r.NEAREST),h&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let ut=0;ut<M.length;ut++){e.bindFramebuffer(r.FRAMEBUFFER,At.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,At.__webglColorRenderbuffer[ut]);const Ft=n.get(M[ut]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,At.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,Ft,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}}function Et(C){return Math.min(i.maxSamples,C.samples)}function Yt(C){const M=n.get(C);return a&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function zt(C){const M=o.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function kt(C,M){const Y=C.colorSpace,Q=C.format,at=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Rl||Y!==fi&&Y!==si&&(Qt.getTransfer(Y)===ae?a===!1?t.has("EXT_sRGB")===!0&&Q===un?(C.format=Rl,C.minFilter=Ge,C.generateMipmaps=!1):M=Ed.sRGBToLinear(M):(Q!==un||at!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}function ie(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=L,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=Z,this.rebindTextures=U,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Yt}function kx(r,t,e){const n=e.isWebGL2;function i(s,o=si){let a;const l=Qt.getTransfer(o);if(s===hi)return r.UNSIGNED_BYTE;if(s===md)return r.UNSIGNED_SHORT_4_4_4_4;if(s===gd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===op)return r.BYTE;if(s===lp)return r.SHORT;if(s===Yl)return r.UNSIGNED_SHORT;if(s===pd)return r.INT;if(s===ai)return r.UNSIGNED_INT;if(s===On)return r.FLOAT;if(s===pr)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===hp)return r.ALPHA;if(s===un)return r.RGBA;if(s===cp)return r.LUMINANCE;if(s===up)return r.LUMINANCE_ALPHA;if(s===zi)return r.DEPTH_COMPONENT;if(s===zs)return r.DEPTH_STENCIL;if(s===Rl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===dp)return r.RED;if(s===_d)return r.RED_INTEGER;if(s===fp)return r.RG;if(s===xd)return r.RG_INTEGER;if(s===vd)return r.RGBA_INTEGER;if(s===lo||s===ho||s===co||s===uo)if(l===ae)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===lo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===lo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ho)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===co)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===uo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Eh||s===Ah||s===Th||s===Ch)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Eh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ah)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Th)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ch)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Rh||s===Ph)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Rh)return l===ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ph)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Lh||s===Dh||s===Ih||s===Fh||s===Uh||s===Nh||s===Oh||s===zh||s===Bh||s===kh||s===Hh||s===Vh||s===Gh||s===Wh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Lh)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Dh)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ih)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fh)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Uh)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Nh)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Oh)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zh)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bh)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kh)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hh)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vh)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Gh)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wh)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fo||s===Xh||s===Yh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===fo)return l===ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Xh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===pp||s===qh||s===$h||s===jh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===fo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===qh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$h)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Oi?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Hx extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Jr extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vx={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(h,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Jr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new dn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new Hn({extensions:{fragDepth:!0},vertexShader:Gx,fragmentShader:Wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new te(new vr(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class Yx extends ki{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,h=null,c=null,u=null,d=null,f=null,g=null;const _=new Xx,p=e.getContextAttributes();let m=null,S=null;const x=[],b=[],R=new gt;let A=null;const w=new Ee;w.layers.enable(1),w.viewport=new de;const I=new Ee;I.layers.enable(2),I.viewport=new de;const X=[w,I],y=new Hx;y.layers.enable(1),y.layers.enable(2);let T=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let it=x[W];return it===void 0&&(it=new zo,x[W]=it),it.getTargetRaySpace()},this.getControllerGrip=function(W){let it=x[W];return it===void 0&&(it=new zo,x[W]=it),it.getGripSpace()},this.getHand=function(W){let it=x[W];return it===void 0&&(it=new zo,x[W]=it),it.getHandSpace()};function q(W){const it=b.indexOf(W.inputSource);if(it===-1)return;const mt=x[it];mt!==void 0&&(mt.update(W.inputSource,W.frame,h||o),mt.dispatchEvent({type:W.type,data:W.inputSource}))}function L(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",V);for(let W=0;W<x.length;W++){const it=b[W];it!==null&&(b[W]=null,x[W].disconnect(it))}T=null,j=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,i=null,S=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(W){h=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",L),i.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const it={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Bi(f.framebufferWidth,f.framebufferHeight,{format:un,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let it=null,mt=null,Lt=null;p.depth&&(Lt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=p.stencil?zs:zi,mt=p.stencil?Oi:ai);const bt={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(bt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Bi(d.textureWidth,d.textureHeight,{format:un,type:hi,depthTexture:new Hd(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const _t=t.properties.get(S);_t.__ignoreDepthValues=d.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await i.requestReferenceSpace(a),Tt.setContext(i),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function V(W){for(let it=0;it<W.removed.length;it++){const mt=W.removed[it],Lt=b.indexOf(mt);Lt>=0&&(b[Lt]=null,x[Lt].disconnect(mt))}for(let it=0;it<W.added.length;it++){const mt=W.added[it];let Lt=b.indexOf(mt);if(Lt===-1){for(let _t=0;_t<x.length;_t++)if(_t>=b.length){b.push(mt),Lt=_t;break}else if(b[_t]===null){b[_t]=mt,Lt=_t;break}if(Lt===-1)break}const bt=x[Lt];bt&&bt.connect(mt)}}const O=new v,J=new v;function G(W,it,mt){O.setFromMatrixPosition(it.matrixWorld),J.setFromMatrixPosition(mt.matrixWorld);const Lt=O.distanceTo(J),bt=it.projectionMatrix.elements,_t=mt.projectionMatrix.elements,$t=bt[14]/(bt[10]-1),Pt=bt[14]/(bt[10]+1),U=(bt[9]+1)/bt[5],xe=(bt[9]-1)/bt[5],wt=(bt[8]-1)/bt[0],Ot=(_t[8]+1)/_t[0],Et=$t*wt,Yt=$t*Ot,zt=Lt/(-wt+Ot),kt=zt*-wt;it.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(kt),W.translateZ(zt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const ie=$t+zt,C=Pt+zt,M=Et-kt,Y=Yt+(Lt-kt),Q=U*Pt/C*ie,at=xe*Pt/C*ie;W.projectionMatrix.makePerspective(M,Y,Q,at,ie,C),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function $(W,it){it===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(it.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;_.texture!==null&&(W.near=_.depthNear,W.far=_.depthFar),y.near=I.near=w.near=W.near,y.far=I.far=w.far=W.far,(T!==y.near||j!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,j=y.far,w.near=T,w.far=j,I.near=T,I.far=j,w.updateProjectionMatrix(),I.updateProjectionMatrix(),W.updateProjectionMatrix());const it=W.parent,mt=y.cameras;$(y,it);for(let Lt=0;Lt<mt.length;Lt++)$(mt[Lt],it);mt.length===2?G(y,w,I):y.projectionMatrix.copy(w.projectionMatrix),Z(W,y,it)};function Z(W,it,mt){mt===null?W.matrix.copy(it.matrixWorld):(W.matrix.copy(mt.matrixWorld),W.matrix.invert(),W.matrix.multiply(it.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(it.projectionMatrix),W.projectionMatrixInverse.copy(it.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=mr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null};let st=null;function ft(W,it){if(c=it.getViewerPose(h||o),g=it,c!==null){const mt=c.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Lt=!1;mt.length!==y.cameras.length&&(y.cameras.length=0,Lt=!0);for(let _t=0;_t<mt.length;_t++){const $t=mt[_t];let Pt=null;if(f!==null)Pt=f.getViewport($t);else{const xe=u.getViewSubImage(d,$t);Pt=xe.viewport,_t===0&&(t.setRenderTargetTextures(S,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),t.setRenderTarget(S))}let U=X[_t];U===void 0&&(U=new Ee,U.layers.enable(_t),U.viewport=new de,X[_t]=U),U.matrix.fromArray($t.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray($t.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),_t===0&&(y.matrix.copy(U.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Lt===!0&&y.cameras.push(U)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const _t=u.getDepthInformation(mt[0]);_t&&_t.isValid&&_t.texture&&_.init(t,_t,i.renderState)}}for(let mt=0;mt<x.length;mt++){const Lt=b[mt],bt=x[mt];Lt!==null&&bt!==void 0&&bt.update(Lt,it,h||o)}_.render(t,y),st&&st(W,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const Tt=new Bd;Tt.setAnimationLoop(ft),this.setAnimationLoop=function(W){st=W},this.dispose=function(){}}}const Ei=new bn,qx=new qt;function $x(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Nd(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,x,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),c(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,x):m.isSpriteMaterial?h(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Fe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Fe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=t.get(m),x=S.envMap,b=S.envMapRotation;if(x&&(p.envMap.value=x,Ei.copy(b),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),p.envMapRotation.value.setFromMatrix4(qx.makeRotationFromEuler(Ei)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const R=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*R,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Fe&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jx(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,x){const b=x.program;n.uniformBlockBinding(S,b)}function h(S,x){let b=i[S.id];b===void 0&&(g(S),b=c(S),i[S.id]=b,S.addEventListener("dispose",p));const R=x.program;n.updateUBOMapping(S,R);const A=t.render.frame;s[S.id]!==A&&(d(S),s[S.id]=A)}function c(S){const x=u();S.__bindingPointIndex=x;const b=r.createBuffer(),R=S.__size,A=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,b),b}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=i[S.id],b=S.uniforms,R=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let A=0,w=b.length;A<w;A++){const I=Array.isArray(b[A])?b[A]:[b[A]];for(let X=0,y=I.length;X<y;X++){const T=I[X];if(f(T,A,X,R)===!0){const j=T.__offset,q=Array.isArray(T.value)?T.value:[T.value];let L=0;for(let V=0;V<q.length;V++){const O=q[V],J=_(O);typeof O=="number"||typeof O=="boolean"?(T.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,j+L,T.__data)):O.isMatrix3?(T.__data[0]=O.elements[0],T.__data[1]=O.elements[1],T.__data[2]=O.elements[2],T.__data[3]=0,T.__data[4]=O.elements[3],T.__data[5]=O.elements[4],T.__data[6]=O.elements[5],T.__data[7]=0,T.__data[8]=O.elements[6],T.__data[9]=O.elements[7],T.__data[10]=O.elements[8],T.__data[11]=0):(O.toArray(T.__data,L),L+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,j,T.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(S,x,b,R){const A=S.value,w=x+"_"+b;if(R[w]===void 0)return typeof A=="number"||typeof A=="boolean"?R[w]=A:R[w]=A.clone(),!0;{const I=R[w];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return R[w]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(S){const x=S.uniforms;let b=0;const R=16;for(let w=0,I=x.length;w<I;w++){const X=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,T=X.length;y<T;y++){const j=X[y],q=Array.isArray(j.value)?j.value:[j.value];for(let L=0,V=q.length;L<V;L++){const O=q[L],J=_(O),G=b%R;G!==0&&R-G<J.boundary&&(b+=R-G),j.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=b,b+=J.storage}}}const A=b%R;return A>0&&(b+=R-A),S.__size=b,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){const x=S.target;x.removeEventListener("dispose",p);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:h,dispose:m}}class Da{constructor(t={}){const{canvas:e=Bp(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this._useLegacyLights=!1,this.toneMapping=li,this.toneMappingExposure=1;const x=this;let b=!1,R=0,A=0,w=null,I=-1,X=null;const y=new de,T=new de;let j=null;const q=new Rt(0);let L=0,V=e.width,O=e.height,J=1,G=null,$=null;const Z=new de(0,0,V,O),st=new de(0,0,V,O);let ft=!1;const Tt=new Ql;let W=!1,it=!1,mt=null;const Lt=new qt,bt=new gt,_t=new v,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pt(){return w===null?J:1}let U=n;function xe(E,F){for(let k=0;k<E.length;k++){const H=E[k],B=e.getContext(H,F);if(B!==null)return B}return null}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wl}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",ot,!1),U===null){const F=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&F.shift(),U=xe(F,E),U===null)throw xe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let wt,Ot,Et,Yt,zt,kt,ie,C,M,Y,Q,at,nt,It,At,ht,ut,Ft,lt,he,Gt,St,xt,yt;function P(){wt=new e_(U),Ot=new j0(U,wt,t),wt.init(Ot),St=new kx(U,wt,Ot),Et=new zx(U,wt,Ot),Yt=new s_(U),zt=new wx,kt=new Bx(U,wt,Et,zt,Ot,St,Yt),ie=new K0(x),C=new t_(x),M=new cm(U,Ot),xt=new q0(U,wt,M,Ot),Y=new n_(U,M,Yt,xt),Q=new l_(U,Y,M,Yt),lt=new o_(U,Ot,kt),ht=new Z0(zt),at=new Sx(x,ie,C,wt,Ot,xt,ht),nt=new $x(x,zt),It=new Ax,At=new Dx(wt,Ot),Ft=new Y0(x,ie,C,Et,Q,d,l),ut=new Ox(x,Q,Ot),yt=new jx(U,Yt,Ot,Et),he=new $0(U,wt,Yt,Ot),Gt=new i_(U,wt,Yt,Ot),Yt.programs=at.programs,x.capabilities=Ot,x.extensions=wt,x.properties=zt,x.renderLists=It,x.shadowMap=ut,x.state=Et,x.info=Yt}P();const tt=new Yx(x,U);this.xr=tt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=wt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=wt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize(V,O,!1))},this.getSize=function(E){return E.set(V,O)},this.setSize=function(E,F,k=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,O=F,e.width=Math.floor(E*J),e.height=Math.floor(F*J),k===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(V*J,O*J).floor()},this.setDrawingBufferSize=function(E,F,k){V=E,O=F,J=k,e.width=Math.floor(E*k),e.height=Math.floor(F*k),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,F,k,H){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,F,k,H),Et.viewport(y.copy(Z).multiplyScalar(J).round())},this.getScissor=function(E){return E.copy(st)},this.setScissor=function(E,F,k,H){E.isVector4?st.set(E.x,E.y,E.z,E.w):st.set(E,F,k,H),Et.scissor(T.copy(st).multiplyScalar(J).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(E){Et.setScissorTest(ft=E)},this.setOpaqueSort=function(E){G=E},this.setTransparentSort=function(E){$=E},this.getClearColor=function(E){return E.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(E=!0,F=!0,k=!0){let H=0;if(E){let B=!1;if(w!==null){const pt=w.texture.format;B=pt===vd||pt===xd||pt===_d}if(B){const pt=w.texture.type,Mt=pt===hi||pt===ai||pt===Yl||pt===Oi||pt===md||pt===gd,Ct=Ft.getClearColor(),Dt=Ft.getClearAlpha(),Wt=Ct.r,Ut=Ct.g,Bt=Ct.b;Mt?(f[0]=Wt,f[1]=Ut,f[2]=Bt,f[3]=Dt,U.clearBufferuiv(U.COLOR,0,f)):(g[0]=Wt,g[1]=Ut,g[2]=Bt,g[3]=Dt,U.clearBufferiv(U.COLOR,0,g))}else H|=U.COLOR_BUFFER_BIT}F&&(H|=U.DEPTH_BUFFER_BIT),k&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),It.dispose(),At.dispose(),zt.dispose(),ie.dispose(),C.dispose(),Q.dispose(),xt.dispose(),yt.dispose(),at.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",ce),tt.removeEventListener("sessionend",jt),mt&&(mt.dispose(),mt=null),se.stop()};function vt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=Yt.autoReset,F=ut.enabled,k=ut.autoUpdate,H=ut.needsUpdate,B=ut.type;P(),Yt.autoReset=E,ut.enabled=F,ut.autoUpdate=k,ut.needsUpdate=H,ut.type=B}function ot(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function N(E){const F=E.target;F.removeEventListener("dispose",N),rt(F)}function rt(E){dt(E),zt.remove(E)}function dt(E){const F=zt.get(E).programs;F!==void 0&&(F.forEach(function(k){at.releaseProgram(k)}),E.isShaderMaterial&&at.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,k,H,B,pt){F===null&&(F=$t);const Mt=B.isMesh&&B.matrixWorld.determinant()<0,Ct=bf(E,F,k,H,B);Et.setMaterial(H,Mt);let Dt=k.index,Wt=1;if(H.wireframe===!0){if(Dt=Y.getWireframeAttribute(k),Dt===void 0)return;Wt=2}const Ut=k.drawRange,Bt=k.attributes.position;let fe=Ut.start*Wt,Ye=(Ut.start+Ut.count)*Wt;pt!==null&&(fe=Math.max(fe,pt.start*Wt),Ye=Math.min(Ye,(pt.start+pt.count)*Wt)),Dt!==null?(fe=Math.max(fe,0),Ye=Math.min(Ye,Dt.count)):Bt!=null&&(fe=Math.max(fe,0),Ye=Math.min(Ye,Bt.count));const Me=Ye-fe;if(Me<0||Me===1/0)return;xt.setup(B,H,Ct,k,Dt);let wn,le=he;if(Dt!==null&&(wn=M.get(Dt),le=Gt,le.setIndex(wn)),B.isMesh)H.wireframe===!0?(Et.setLineWidth(H.wireframeLinewidth*Pt()),le.setMode(U.LINES)):le.setMode(U.TRIANGLES);else if(B.isLine){let Ht=H.linewidth;Ht===void 0&&(Ht=1),Et.setLineWidth(Ht*Pt()),B.isLineSegments?le.setMode(U.LINES):B.isLineLoop?le.setMode(U.LINE_LOOP):le.setMode(U.LINE_STRIP)}else B.isPoints?le.setMode(U.POINTS):B.isSprite&&le.setMode(U.TRIANGLES);if(B.isBatchedMesh)le.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)le.renderInstances(fe,Me,B.count);else if(k.isInstancedBufferGeometry){const Ht=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,io=Math.min(k.instanceCount,Ht);le.renderInstances(fe,Me,io)}else le.render(fe,Me)};function Xt(E,F,k){E.transparent===!0&&E.side===He&&E.forceSinglePass===!1?(E.side=Fe,E.needsUpdate=!0,Rr(E,F,k),E.side=kn,E.needsUpdate=!0,Rr(E,F,k),E.side=He):Rr(E,F,k)}this.compile=function(E,F,k=null){k===null&&(k=E),p=At.get(k),p.init(),S.push(p),k.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),E!==k&&E.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(x._useLegacyLights);const H=new Set;return E.traverse(function(B){const pt=B.material;if(pt)if(Array.isArray(pt))for(let Mt=0;Mt<pt.length;Mt++){const Ct=pt[Mt];Xt(Ct,k,B),H.add(Ct)}else Xt(pt,k,B),H.add(pt)}),S.pop(),p=null,H},this.compileAsync=function(E,F,k=null){const H=this.compile(E,F,k);return new Promise(B=>{function pt(){if(H.forEach(function(Mt){zt.get(Mt).currentProgram.isReady()&&H.delete(Mt)}),H.size===0){B(E);return}setTimeout(pt,10)}wt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Kt=null;function ee(E){Kt&&Kt(E)}function ce(){se.stop()}function jt(){se.start()}const se=new Bd;se.setAnimationLoop(ee),typeof self<"u"&&se.setContext(self),this.setAnimationLoop=function(E){Kt=E,tt.setAnimationLoop(E),E===null?se.stop():se.start()},tt.addEventListener("sessionstart",ce),tt.addEventListener("sessionend",jt),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(F),F=tt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,F,w),p=At.get(E,S.length),p.init(),S.push(p),Lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Tt.setFromProjectionMatrix(Lt),it=this.localClippingEnabled,W=ht.init(this.clippingPlanes,it),_=It.get(E,m.length),_.init(),m.push(_),Ce(E,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(G,$),this.info.render.frame++,W===!0&&ht.beginShadows();const k=p.state.shadowsArray;if(ut.render(k,E,F),W===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1)&&Ft.render(_,E),p.setupLights(x._useLegacyLights),F.isArrayCamera){const H=F.cameras;for(let B=0,pt=H.length;B<pt;B++){const Mt=H[B];_i(_,E,Mt,Mt.viewport)}}else _i(_,E,F);w!==null&&(kt.updateMultisampleRenderTarget(w),kt.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(x,E,F),xt.resetDefaultState(),I=-1,X=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Ce(E,F,k,H){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Tt.intersectsSprite(E)){H&&_t.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Lt);const Mt=Q.update(E),Ct=E.material;Ct.visible&&_.push(E,Mt,Ct,k,_t.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Tt.intersectsObject(E))){const Mt=Q.update(E),Ct=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),_t.copy(E.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),_t.copy(Mt.boundingSphere.center)),_t.applyMatrix4(E.matrixWorld).applyMatrix4(Lt)),Array.isArray(Ct)){const Dt=Mt.groups;for(let Wt=0,Ut=Dt.length;Wt<Ut;Wt++){const Bt=Dt[Wt],fe=Ct[Bt.materialIndex];fe&&fe.visible&&_.push(E,Mt,fe,k,_t.z,Bt)}}else Ct.visible&&_.push(E,Mt,Ct,k,_t.z,null)}}const pt=E.children;for(let Mt=0,Ct=pt.length;Mt<Ct;Mt++)Ce(pt[Mt],F,k,H)}function _i(E,F,k,H){const B=E.opaque,pt=E.transmissive,Mt=E.transparent;p.setupLightsView(k),W===!0&&ht.setGlobalState(x.clippingPlanes,k),pt.length>0&&Tr(B,pt,F,k),H&&Et.viewport(y.copy(H)),B.length>0&&Cr(B,F,k),pt.length>0&&Cr(pt,F,k),Mt.length>0&&Cr(Mt,F,k),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Tr(E,F,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const pt=Ot.isWebGL2;mt===null&&(mt=new Bi(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")?pr:hi,minFilter:Ui,samples:pt?4:0})),x.getDrawingBufferSize(bt),pt?mt.setSize(bt.x,bt.y):mt.setSize(ka(bt.x),ka(bt.y));const Mt=x.getRenderTarget();x.setRenderTarget(mt),x.getClearColor(q),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Ct=x.toneMapping;x.toneMapping=li,Cr(E,k,H),kt.updateMultisampleRenderTarget(mt),kt.updateRenderTargetMipmap(mt);let Dt=!1;for(let Wt=0,Ut=F.length;Wt<Ut;Wt++){const Bt=F[Wt],fe=Bt.object,Ye=Bt.geometry,Me=Bt.material,wn=Bt.group;if(Me.side===He&&fe.layers.test(H.layers)){const le=Me.side;Me.side=Fe,Me.needsUpdate=!0,fh(fe,k,H,Ye,Me,wn),Me.side=le,Me.needsUpdate=!0,Dt=!0}}Dt===!0&&(kt.updateMultisampleRenderTarget(mt),kt.updateRenderTargetMipmap(mt)),x.setRenderTarget(Mt),x.setClearColor(q,L),x.toneMapping=Ct}function Cr(E,F,k){const H=F.isScene===!0?F.overrideMaterial:null;for(let B=0,pt=E.length;B<pt;B++){const Mt=E[B],Ct=Mt.object,Dt=Mt.geometry,Wt=H===null?Mt.material:H,Ut=Mt.group;Ct.layers.test(k.layers)&&fh(Ct,F,k,Dt,Wt,Ut)}}function fh(E,F,k,H,B,pt){E.onBeforeRender(x,F,k,H,B,pt),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(x,F,k,H,E,pt),B.transparent===!0&&B.side===He&&B.forceSinglePass===!1?(B.side=Fe,B.needsUpdate=!0,x.renderBufferDirect(k,F,H,B,E,pt),B.side=kn,B.needsUpdate=!0,x.renderBufferDirect(k,F,H,B,E,pt),B.side=He):x.renderBufferDirect(k,F,H,B,E,pt),E.onAfterRender(x,F,k,H,B,pt)}function Rr(E,F,k){F.isScene!==!0&&(F=$t);const H=zt.get(E),B=p.state.lights,pt=p.state.shadowsArray,Mt=B.state.version,Ct=at.getParameters(E,B.state,pt,F,k),Dt=at.getProgramCacheKey(Ct);let Wt=H.programs;H.environment=E.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(E.isMeshStandardMaterial?C:ie).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Wt===void 0&&(E.addEventListener("dispose",N),Wt=new Map,H.programs=Wt);let Ut=Wt.get(Dt);if(Ut!==void 0){if(H.currentProgram===Ut&&H.lightsStateVersion===Mt)return mh(E,Ct),Ut}else Ct.uniforms=at.getUniforms(E),E.onBuild(k,Ct,x),E.onBeforeCompile(Ct,x),Ut=at.acquireProgram(Ct,Dt),Wt.set(Dt,Ut),H.uniforms=Ct.uniforms;const Bt=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Bt.clippingPlanes=ht.uniform),mh(E,Ct),H.needsLights=wf(E),H.lightsStateVersion=Mt,H.needsLights&&(Bt.ambientLightColor.value=B.state.ambient,Bt.lightProbe.value=B.state.probe,Bt.directionalLights.value=B.state.directional,Bt.directionalLightShadows.value=B.state.directionalShadow,Bt.spotLights.value=B.state.spot,Bt.spotLightShadows.value=B.state.spotShadow,Bt.rectAreaLights.value=B.state.rectArea,Bt.ltc_1.value=B.state.rectAreaLTC1,Bt.ltc_2.value=B.state.rectAreaLTC2,Bt.pointLights.value=B.state.point,Bt.pointLightShadows.value=B.state.pointShadow,Bt.hemisphereLights.value=B.state.hemi,Bt.directionalShadowMap.value=B.state.directionalShadowMap,Bt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Bt.spotShadowMap.value=B.state.spotShadowMap,Bt.spotLightMatrix.value=B.state.spotLightMatrix,Bt.spotLightMap.value=B.state.spotLightMap,Bt.pointShadowMap.value=B.state.pointShadowMap,Bt.pointShadowMatrix.value=B.state.pointShadowMatrix),H.currentProgram=Ut,H.uniformsList=null,Ut}function ph(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=La.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function mh(E,F){const k=zt.get(E);k.outputColorSpace=F.outputColorSpace,k.batching=F.batching,k.instancing=F.instancing,k.instancingColor=F.instancingColor,k.instancingMorph=F.instancingMorph,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function bf(E,F,k,H,B){F.isScene!==!0&&(F=$t),kt.resetTextureUnits();const pt=F.fog,Mt=H.isMeshStandardMaterial?F.environment:null,Ct=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:fi,Dt=(H.isMeshStandardMaterial?C:ie).get(H.envMap||Mt),Wt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ut=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Bt=!!k.morphAttributes.position,fe=!!k.morphAttributes.normal,Ye=!!k.morphAttributes.color;let Me=li;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Me=x.toneMapping);const wn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,le=wn!==void 0?wn.length:0,Ht=zt.get(H),io=p.state.lights;if(W===!0&&(it===!0||E!==X)){const Ke=E===X&&H.id===I;ht.setState(H,E,Ke)}let oe=!1;H.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==io.state.version||Ht.outputColorSpace!==Ct||B.isBatchedMesh&&Ht.batching===!1||!B.isBatchedMesh&&Ht.batching===!0||B.isInstancedMesh&&Ht.instancing===!1||!B.isInstancedMesh&&Ht.instancing===!0||B.isSkinnedMesh&&Ht.skinning===!1||!B.isSkinnedMesh&&Ht.skinning===!0||B.isInstancedMesh&&Ht.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ht.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ht.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ht.instancingMorph===!1&&B.morphTexture!==null||Ht.envMap!==Dt||H.fog===!0&&Ht.fog!==pt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==ht.numPlanes||Ht.numIntersection!==ht.numIntersection)||Ht.vertexAlphas!==Wt||Ht.vertexTangents!==Ut||Ht.morphTargets!==Bt||Ht.morphNormals!==fe||Ht.morphColors!==Ye||Ht.toneMapping!==Me||Ot.isWebGL2===!0&&Ht.morphTargetsCount!==le)&&(oe=!0):(oe=!0,Ht.__version=H.version);let xi=Ht.currentProgram;oe===!0&&(xi=Rr(H,F,B));let gh=!1,Ws=!1,so=!1;const Re=xi.getUniforms(),vi=Ht.uniforms;if(Et.useProgram(xi.program)&&(gh=!0,Ws=!0,so=!0),H.id!==I&&(I=H.id,Ws=!0),gh||X!==E){Re.setValue(U,"projectionMatrix",E.projectionMatrix),Re.setValue(U,"viewMatrix",E.matrixWorldInverse);const Ke=Re.map.cameraPosition;Ke!==void 0&&Ke.setValue(U,_t.setFromMatrixPosition(E.matrixWorld)),Ot.logarithmicDepthBuffer&&Re.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Re.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),X!==E&&(X=E,Ws=!0,so=!0)}if(B.isSkinnedMesh){Re.setOptional(U,B,"bindMatrix"),Re.setOptional(U,B,"bindMatrixInverse");const Ke=B.skeleton;Ke&&(Ot.floatVertexTextures?(Ke.boneTexture===null&&Ke.computeBoneTexture(),Re.setValue(U,"boneTexture",Ke.boneTexture,kt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Re.setOptional(U,B,"batchingTexture"),Re.setValue(U,"batchingTexture",B._matricesTexture,kt));const ro=k.morphAttributes;if((ro.position!==void 0||ro.normal!==void 0||ro.color!==void 0&&Ot.isWebGL2===!0)&&lt.update(B,k,xi),(Ws||Ht.receiveShadow!==B.receiveShadow)&&(Ht.receiveShadow=B.receiveShadow,Re.setValue(U,"receiveShadow",B.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(vi.envMap.value=Dt,vi.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Ws&&(Re.setValue(U,"toneMappingExposure",x.toneMappingExposure),Ht.needsLights&&Sf(vi,so),pt&&H.fog===!0&&nt.refreshFogUniforms(vi,pt),nt.refreshMaterialUniforms(vi,H,J,O,mt),La.upload(U,ph(Ht),vi,kt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(La.upload(U,ph(Ht),vi,kt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Re.setValue(U,"center",B.center),Re.setValue(U,"modelViewMatrix",B.modelViewMatrix),Re.setValue(U,"normalMatrix",B.normalMatrix),Re.setValue(U,"modelMatrix",B.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ke=H.uniformsGroups;for(let ao=0,Ef=Ke.length;ao<Ef;ao++)if(Ot.isWebGL2){const _h=Ke[ao];yt.update(_h,xi),yt.bind(_h,xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xi}function Sf(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function wf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,F,k){zt.get(E.texture).__webglTexture=F,zt.get(E.depthTexture).__webglTexture=k;const H=zt.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const k=zt.get(E);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,k=0){w=E,R=F,A=k;let H=!0,B=null,pt=!1,Mt=!1;if(E){const Dt=zt.get(E);Dt.__useDefaultFramebuffer!==void 0?(Et.bindFramebuffer(U.FRAMEBUFFER,null),H=!1):Dt.__webglFramebuffer===void 0?kt.setupRenderTarget(E):Dt.__hasExternalTextures&&kt.rebindTextures(E,zt.get(E.texture).__webglTexture,zt.get(E.depthTexture).__webglTexture);const Wt=E.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Mt=!0);const Ut=zt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ut[F])?B=Ut[F][k]:B=Ut[F],pt=!0):Ot.isWebGL2&&E.samples>0&&kt.useMultisampledRTT(E)===!1?B=zt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ut)?B=Ut[k]:B=Ut,y.copy(E.viewport),T.copy(E.scissor),j=E.scissorTest}else y.copy(Z).multiplyScalar(J).floor(),T.copy(st).multiplyScalar(J).floor(),j=ft;if(Et.bindFramebuffer(U.FRAMEBUFFER,B)&&Ot.drawBuffers&&H&&Et.drawBuffers(E,B),Et.viewport(y),Et.scissor(T),Et.setScissorTest(j),pt){const Dt=zt.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Dt.__webglTexture,k)}else if(Mt){const Dt=zt.get(E.texture),Wt=F||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dt.__webglTexture,k||0,Wt)}I=-1},this.readRenderTargetPixels=function(E,F,k,H,B,pt,Mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=zt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Ct=Ct[Mt]),Ct){Et.bindFramebuffer(U.FRAMEBUFFER,Ct);try{const Dt=E.texture,Wt=Dt.format,Ut=Dt.type;if(Wt!==un&&St.convert(Wt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Bt=Ut===pr&&(wt.has("EXT_color_buffer_half_float")||Ot.isWebGL2&&wt.has("EXT_color_buffer_float"));if(Ut!==hi&&St.convert(Ut)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ut===On&&(Ot.isWebGL2||wt.has("OES_texture_float")||wt.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-H&&k>=0&&k<=E.height-B&&U.readPixels(F,k,H,B,St.convert(Wt),St.convert(Ut),pt)}finally{const Dt=w!==null?zt.get(w).__webglFramebuffer:null;Et.bindFramebuffer(U.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(E,F,k=0){const H=Math.pow(2,-k),B=Math.floor(F.image.width*H),pt=Math.floor(F.image.height*H);kt.setTexture2D(F,0),U.copyTexSubImage2D(U.TEXTURE_2D,k,0,0,E.x,E.y,B,pt),Et.unbindTexture()},this.copyTextureToTexture=function(E,F,k,H=0){const B=F.image.width,pt=F.image.height,Mt=St.convert(k.format),Ct=St.convert(k.type);kt.setTexture2D(k,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment),F.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,H,E.x,E.y,B,pt,Mt,Ct,F.image.data):F.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,H,E.x,E.y,F.mipmaps[0].width,F.mipmaps[0].height,Mt,F.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,H,E.x,E.y,Mt,Ct,F.image),H===0&&k.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Et.unbindTexture()},this.copyTextureToTexture3D=function(E,F,k,H,B=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pt=Math.round(E.max.x-E.min.x),Mt=Math.round(E.max.y-E.min.y),Ct=E.max.z-E.min.z+1,Dt=St.convert(H.format),Wt=St.convert(H.type);let Ut;if(H.isData3DTexture)kt.setTexture3D(H,0),Ut=U.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)kt.setTexture2DArray(H,0),Ut=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const Bt=U.getParameter(U.UNPACK_ROW_LENGTH),fe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ye=U.getParameter(U.UNPACK_SKIP_PIXELS),Me=U.getParameter(U.UNPACK_SKIP_ROWS),wn=U.getParameter(U.UNPACK_SKIP_IMAGES),le=k.isCompressedTexture?k.mipmaps[B]:k.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,le.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,le.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,E.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,E.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,E.min.z),k.isDataTexture||k.isData3DTexture?U.texSubImage3D(Ut,B,F.x,F.y,F.z,pt,Mt,Ct,Dt,Wt,le.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(Ut,B,F.x,F.y,F.z,pt,Mt,Ct,Dt,le.data):U.texSubImage3D(Ut,B,F.x,F.y,F.z,pt,Mt,Ct,Dt,Wt,le),U.pixelStorei(U.UNPACK_ROW_LENGTH,Bt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,fe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ye),U.pixelStorei(U.UNPACK_SKIP_ROWS,Me),U.pixelStorei(U.UNPACK_SKIP_IMAGES,wn),B===0&&H.generateMipmaps&&U.generateMipmap(Ut),Et.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?kt.setTextureCube(E,0):E.isData3DTexture?kt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?kt.setTexture2DArray(E,0):kt.setTexture2D(E,0),Et.unbindTexture()},this.resetState=function(){R=0,A=0,w=null,Et.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===$l?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===ja?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Zx extends Da{}Zx.prototype.isWebGL1Renderer=!0;class eh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Rt(t),this.near=e,this.far=n}clone(){return new eh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kx extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gs extends Hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const kc=new v,Hc=new v,Vc=new qt,Bo=new Ka,Qr=new Za;class Ha extends me{constructor(t=new Ne,e=new Gs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)kc.fromBufferAttribute(e,i-1),Hc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=kc.distanceTo(Hc);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(i),Qr.radius+=s,t.ray.intersectsSphere(Qr)===!1)return;Vc.copy(i).invert(),Bo.copy(t.ray).applyMatrix4(Vc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=new v,c=new v,u=new v,d=new v,f=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let x=m,b=S-1;x<b;x+=f){const R=g.getX(x),A=g.getX(x+1);if(h.fromBufferAttribute(p,R),c.fromBufferAttribute(p,A),Bo.distanceSqToSegment(h,c,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const I=t.ray.origin.distanceTo(d);I<t.near||I>t.far||e.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let x=m,b=S-1;x<b;x+=f){if(h.fromBufferAttribute(p,x),c.fromBufferAttribute(p,x+1),Bo.distanceSqToSegment(h,c,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(d);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Gc=new v,Wc=new v;class nh extends Ha{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Gc.fromBufferAttribute(e,i),Wc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Gc.distanceTo(Wc);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,h;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),h=n[i]-o,h<0)a=i+1;else if(h>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const c=n[i],d=n[i+1]-c,f=(o-c)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new gt:new v);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new v,i=[],s=[],o=[],a=new v,l=new qt;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new v)}s[0]=new v,o[0]=new v;let h=Number.MAX_VALUE;const c=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);c<=h&&(h=c,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(we(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(we(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Va extends Sn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new gt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*c-f*u+this.aX,h=d*u+f*c+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Jx extends Va{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ih(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,h){i(o,a,h*(a-s),h*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,h,c,u){let d=(o-s)/h-(a-s)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+u)+(l-a)/u;d*=c,f*=c,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const ta=new v,ko=new ih,Ho=new ih,Vo=new ih;class qd extends Sn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new v){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let h,c;this.closed||a>0?h=i[(a-1)%s]:(ta.subVectors(i[0],i[1]).add(i[0]),h=ta);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?c=i[(a+2)%s]:(ta.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=ta),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(c),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),ko.initNonuniformCatmullRom(h.x,u.x,d.x,c.x,g,_,p),Ho.initNonuniformCatmullRom(h.y,u.y,d.y,c.y,g,_,p),Vo.initNonuniformCatmullRom(h.z,u.z,d.z,c.z,g,_,p)}else this.curveType==="catmullrom"&&(ko.initCatmullRom(h.x,u.x,d.x,c.x,this.tension),Ho.initCatmullRom(h.y,u.y,d.y,c.y,this.tension),Vo.initCatmullRom(h.z,u.z,d.z,c.z,this.tension));return n.set(ko.calc(l),Ho.calc(l),Vo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new v().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Xc(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Qx(r,t){const e=1-r;return e*e*t}function tv(r,t){return 2*(1-r)*r*t}function ev(r,t){return r*r*t}function hr(r,t,e,n){return Qx(r,t)+tv(r,e)+ev(r,n)}function nv(r,t){const e=1-r;return e*e*e*t}function iv(r,t){const e=1-r;return 3*e*e*r*t}function sv(r,t){return 3*(1-r)*r*r*t}function rv(r,t){return r*r*r*t}function cr(r,t,e,n,i){return nv(r,t)+iv(r,e)+sv(r,n)+rv(r,i)}class av extends Sn{constructor(t=new gt,e=new gt,n=new gt,i=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new gt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(cr(t,i.x,s.x,o.x,a.x),cr(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ss extends Sn{constructor(t=new v,e=new v,n=new v,i=new v){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new v){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(cr(t,i.x,s.x,o.x,a.x),cr(t,i.y,s.y,o.y,a.y),cr(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ov extends Sn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tn extends Sn{constructor(t=new v,e=new v){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new v){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new v){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lv extends Sn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(hr(t,i.x,s.x,o.x),hr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jt extends Sn{constructor(t=new v,e=new v,n=new v){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new v){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(hr(t,i.x,s.x,o.x),hr(t,i.y,s.y,o.y),hr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hv extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],h=i[o],c=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Xc(a,l.x,h.x,c.x,u.x),Xc(a,l.y,h.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new gt().fromArray(i))}return this}}var Yc=Object.freeze({__proto__:null,ArcCurve:Jx,CatmullRomCurve3:qd,CubicBezierCurve:av,CubicBezierCurve3:Ss,EllipseCurve:Va,LineCurve:ov,LineCurve3:tn,QuadraticBezierCurve:lv,QuadraticBezierCurve3:Jt,SplineCurve:hv});class Go extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){const c=l[h];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Yc[i.type]().fromJSON(i))}return this}}class ks extends Ne{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const h=this;i=Math.floor(i),s=Math.floor(s);const c=[],u=[],d=[],f=[];let g=0;const _=[],p=n/2;let m=0;S(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function S(){const b=new v,R=new v;let A=0;const w=(e-t)/n;for(let I=0;I<=s;I++){const X=[],y=I/s,T=y*(e-t)+t;for(let j=0;j<=i;j++){const q=j/i,L=q*l+a,V=Math.sin(L),O=Math.cos(L);R.x=T*V,R.y=-y*n+p,R.z=T*O,u.push(R.x,R.y,R.z),b.set(V,w,O).normalize(),d.push(b.x,b.y,b.z),f.push(q,1-y),X.push(g++)}_.push(X)}for(let I=0;I<i;I++)for(let X=0;X<s;X++){const y=_[X][I],T=_[X+1][I],j=_[X+1][I+1],q=_[X][I+1];c.push(y,T,q),c.push(T,j,q),A+=6}h.addGroup(m,A,0),m+=A}function x(b){const R=g,A=new gt,w=new v;let I=0;const X=b===!0?t:e,y=b===!0?1:-1;for(let j=1;j<=i;j++)u.push(0,p*y,0),d.push(0,y,0),f.push(.5,.5),g++;const T=g;for(let j=0;j<=i;j++){const L=j/i*l+a,V=Math.cos(L),O=Math.sin(L);w.x=X*O,w.y=p*y,w.z=X*V,u.push(w.x,w.y,w.z),d.push(0,y,0),A.x=V*.5+.5,A.y=O*.5*y+.5,f.push(A.x,A.y),g++}for(let j=0;j<i;j++){const q=R+j,L=T+j;b===!0?c.push(L,L+1,q):c.push(L+1,L,q),I+=3}h.addGroup(m,I,b===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ks(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sh extends Ne{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let h=0;const c=[],u=new v,d=new v,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const S=[],x=m/n;let b=0;m===0&&o===0?b=.5/e:m===n&&l===Math.PI&&(b=-.5/e);for(let R=0;R<=e;R++){const A=R/e;u.x=-t*Math.cos(i+A*s)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(i+A*s)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(A+b,1-x),S.push(h++)}c.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){const x=c[m][S+1],b=c[m][S],R=c[m+1][S],A=c[m+1][S+1];(m!==0||o>0)&&f.push(x,b,A),(m!==n-1||l<Math.PI)&&f.push(b,R,A)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cv extends Hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ql,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ae extends Hi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Rt(16777215),this.specular=new Rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ql,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const qc={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class $d{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){a++,s===!1&&i.onStart!==void 0&&i.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,i.onProgress!==void 0&&i.onProgress(c,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){const u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){const f=h[u],g=h[u+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null}}}const uv=new $d;class rh{constructor(t){this.manager=t!==void 0?t:uv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}rh.DEFAULT_MATERIAL_NAME="__DEFAULT";class dv extends rh{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=qc.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=gr("img");function l(){c(),qc.add(t,this),e&&e(this),s.manager.itemEnd(t)}function h(u){c(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class fv extends rh{constructor(t){super(t)}load(t,e,n,i){const s=new dn,o=new dv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class to extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class pv extends to{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Wo=new qt,$c=new v,jc=new v;class jd{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ql,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;$c.setFromMatrixPosition(t.matrixWorld),e.position.copy($c),jc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jc),e.updateMatrixWorld(),Wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Zc=new qt,Zs=new v,Xo=new v;class mv extends jd{constructor(){super(new Ee(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new v(1,0,0),new v(-1,0,0),new v(0,0,1),new v(0,0,-1),new v(0,1,0),new v(0,-1,0)],this._cubeUps=[new v(0,1,0),new v(0,1,0),new v(0,1,0),new v(0,1,0),new v(0,0,1),new v(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Zs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Zs),Xo.copy(n.position),Xo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Xo),n.updateMatrixWorld(),i.makeTranslation(-Zs.x,-Zs.y,-Zs.z),Zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc)}}class gv extends to{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new mv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class _v extends jd{constructor(){super(new kd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xv extends to{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new _v}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vv extends to{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Kc=new qt;class yv{constructor(t,e,n=0,i=1/0){this.ray=new Ka(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Zl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Kc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kc),this}intersectObject(t,e=!0,n=[]){return Il(t,this,n,e),n.sort(Jc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Il(t[i],this,n,e);return n.sort(Jc),n}}function Jc(r,t){return r.distance-t.distance}function Il(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Il(i[s],t,e,!0)}}class Fl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Mv extends nh{constructor(t=10,e=10,n=4473924,i=8947848){n=new Rt(n),i=new Rt(i);const s=e/2,o=t/e,a=t/2,l=[],h=[];for(let d=0,f=0,g=-a;d<=e;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===s?n:i;_.toArray(h,f),f+=3,_.toArray(h,f),f+=3,_.toArray(h,f),f+=3,_.toArray(h,f),f+=3}const c=new Ne;c.setAttribute("position",new Zt(l,3)),c.setAttribute("color",new Zt(h,3));const u=new Gs({vertexColors:!0,toneMapped:!1});super(c,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Qc=new v,ea=new v,tu=new v;class bv extends me{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new Ne;i.setAttribute("position",new Zt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const s=new Gs({fog:!1,toneMapped:!1});this.lightPlane=new Ha(i,s),this.add(this.lightPlane),i=new Ne,i.setAttribute("position",new Zt([0,0,0,0,0,1],3)),this.targetLine=new Ha(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Qc.setFromMatrixPosition(this.light.matrixWorld),ea.setFromMatrixPosition(this.light.target.matrixWorld),tu.subVectors(ea,Qc),this.lightPlane.lookAt(ea),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ea),this.targetLine.scale.z=tu.length()}}const na=new v,ue=new Jl;class Sv extends nh{constructor(t){const e=new Ne,n=new Gs({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(g,_){l(g),l(_)}function l(g){i.push(0,0,0),s.push(0,0,0),o[g]===void 0&&(o[g]=[]),o[g].push(i.length/3-1)}e.setAttribute("position",new Zt(i,3)),e.setAttribute("color",new Zt(s,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const h=new Rt(16755200),c=new Rt(16711680),u=new Rt(43775),d=new Rt(16777215),f=new Rt(3355443);this.setColors(h,c,u,d,f)}setColors(t,e,n,i,s){const a=this.geometry.getAttribute("color");a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;ue.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),pe("c",e,t,ue,0,0,-1),pe("t",e,t,ue,0,0,1),pe("n1",e,t,ue,-n,-i,-1),pe("n2",e,t,ue,n,-i,-1),pe("n3",e,t,ue,-n,i,-1),pe("n4",e,t,ue,n,i,-1),pe("f1",e,t,ue,-n,-i,1),pe("f2",e,t,ue,n,-i,1),pe("f3",e,t,ue,-n,i,1),pe("f4",e,t,ue,n,i,1),pe("u1",e,t,ue,n*.7,i*1.1,-1),pe("u2",e,t,ue,-n*.7,i*1.1,-1),pe("u3",e,t,ue,0,i*2,-1),pe("cf1",e,t,ue,-n,0,1),pe("cf2",e,t,ue,n,0,1),pe("cf3",e,t,ue,0,-i,1),pe("cf4",e,t,ue,0,i,1),pe("cn1",e,t,ue,-n,0,-1),pe("cn2",e,t,ue,n,0,-1),pe("cn3",e,t,ue,0,-i,-1),pe("cn4",e,t,ue,0,i,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function pe(r,t,e,n,i,s,o){na.set(i,s,o).unproject(n);const a=t[r];if(a!==void 0){const l=e.getAttribute("position");for(let h=0,c=a.length;h<c;h++)l.setXYZ(a[h],na.x,na.y,na.z)}}const eu=new v;let ia,Yo;class wv extends me{constructor(t=new v(0,0,1),e=new v(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",ia===void 0&&(ia=new Ne,ia.setAttribute("position",new Zt([0,0,0,0,1,0],3)),Yo=new ks(0,.5,1,5,1),Yo.translate(0,-.5,0)),this.position.copy(e),this.line=new Ha(ia,new Gs({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new te(Yo,new Kl({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,s,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{eu.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(eu,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Ev extends nh{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ne;i.setAttribute("position",new Zt(e,3)),i.setAttribute("color",new Zt(n,3));const s=new Gs({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(t,e,n){const i=new Rt,s=this.geometry.attributes.color.array;return i.set(t),i.toArray(s,0),i.toArray(s,3),i.set(e),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wl);const nu={type:"change"},qo={type:"start"},iu={type:"end"},sa=new Ka,su=new ni,Av=Math.cos(70*Nn.DEG2RAD);class Tv extends ki{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new v,this.cursor=new v,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",At),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",At),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(nu),n.update(),s=i.NONE},this.update=function(){const P=new v,tt=new ui().setFromUnitVectors(t.up,new v(0,1,0)),vt=tt.clone().invert(),D=new v,ot=new ui,N=new v,rt=2*Math.PI;return function(Xt=null){const Kt=n.object.position;P.copy(Kt).sub(n.target),P.applyQuaternion(tt),a.setFromVector3(P),n.autoRotate&&s===i.NONE&&j(y(Xt)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ee=n.minAzimuthAngle,ce=n.maxAzimuthAngle;isFinite(ee)&&isFinite(ce)&&(ee<-Math.PI?ee+=rt:ee>Math.PI&&(ee-=rt),ce<-Math.PI?ce+=rt:ce>Math.PI&&(ce-=rt),ee<=ce?a.theta=Math.max(ee,Math.min(ce,a.theta)):a.theta=a.theta>(ee+ce)/2?Math.max(ee,a.theta):Math.min(ce,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(c,n.dampingFactor):n.target.add(c),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let jt=!1;if(n.zoomToCursor&&A||n.object.isOrthographicCamera)a.radius=Z(a.radius);else{const se=a.radius;a.radius=Z(a.radius*h),jt=se!=a.radius}if(P.setFromSpherical(a),P.applyQuaternion(vt),Kt.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,c.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),n.zoomToCursor&&A){let se=null;if(n.object.isPerspectiveCamera){const Ce=P.length();se=Z(Ce*h);const _i=Ce-se;n.object.position.addScaledVector(b,_i),n.object.updateMatrixWorld(),jt=!!_i}else if(n.object.isOrthographicCamera){const Ce=new v(R.x,R.y,0);Ce.unproject(n.object);const _i=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),jt=_i!==n.object.zoom;const Tr=new v(R.x,R.y,0);Tr.unproject(n.object),n.object.position.sub(Tr).add(Ce),n.object.updateMatrixWorld(),se=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;se!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(se).add(n.object.position):(sa.origin.copy(n.object.position),sa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(sa.direction))<Av?t.lookAt(n.target):(su.setFromNormalAndCoplanarPoint(n.object.up,n.target),sa.intersectPlane(su,n.target))))}else if(n.object.isOrthographicCamera){const se=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),se!==n.object.zoom&&(n.object.updateProjectionMatrix(),jt=!0)}return h=1,A=!1,jt||D.distanceToSquared(n.object.position)>o||8*(1-ot.dot(n.object.quaternion))>o||N.distanceToSquared(n.target)>o?(n.dispatchEvent(nu),D.copy(n.object.position),ot.copy(n.object.quaternion),N.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ft),n.domElement.removeEventListener("pointerdown",kt),n.domElement.removeEventListener("pointercancel",C),n.domElement.removeEventListener("wheel",Q),n.domElement.removeEventListener("pointermove",ie),n.domElement.removeEventListener("pointerup",C),n.domElement.getRootNode().removeEventListener("keydown",nt,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",At),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Fl,l=new Fl;let h=1;const c=new v,u=new gt,d=new gt,f=new gt,g=new gt,_=new gt,p=new gt,m=new gt,S=new gt,x=new gt,b=new v,R=new gt;let A=!1;const w=[],I={};let X=!1;function y(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function T(P){const tt=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*tt)}function j(P){l.theta-=P}function q(P){l.phi-=P}const L=function(){const P=new v;return function(vt,D){P.setFromMatrixColumn(D,0),P.multiplyScalar(-vt),c.add(P)}}(),V=function(){const P=new v;return function(vt,D){n.screenSpacePanning===!0?P.setFromMatrixColumn(D,1):(P.setFromMatrixColumn(D,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(vt),c.add(P)}}(),O=function(){const P=new v;return function(vt,D){const ot=n.domElement;if(n.object.isPerspectiveCamera){const N=n.object.position;P.copy(N).sub(n.target);let rt=P.length();rt*=Math.tan(n.object.fov/2*Math.PI/180),L(2*vt*rt/ot.clientHeight,n.object.matrix),V(2*D*rt/ot.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(vt*(n.object.right-n.object.left)/n.object.zoom/ot.clientWidth,n.object.matrix),V(D*(n.object.top-n.object.bottom)/n.object.zoom/ot.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function J(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(P,tt){if(!n.zoomToCursor)return;A=!0;const vt=n.domElement.getBoundingClientRect(),D=P-vt.left,ot=tt-vt.top,N=vt.width,rt=vt.height;R.x=D/N*2-1,R.y=-(ot/rt)*2+1,b.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function Z(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function st(P){u.set(P.clientX,P.clientY)}function ft(P){$(P.clientX,P.clientX),m.set(P.clientX,P.clientY)}function Tt(P){g.set(P.clientX,P.clientY)}function W(P){d.set(P.clientX,P.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const tt=n.domElement;j(2*Math.PI*f.x/tt.clientHeight),q(2*Math.PI*f.y/tt.clientHeight),u.copy(d),n.update()}function it(P){S.set(P.clientX,P.clientY),x.subVectors(S,m),x.y>0?J(T(x.y)):x.y<0&&G(T(x.y)),m.copy(S),n.update()}function mt(P){_.set(P.clientX,P.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),O(p.x,p.y),g.copy(_),n.update()}function Lt(P){$(P.clientX,P.clientY),P.deltaY<0?G(T(P.deltaY)):P.deltaY>0&&J(T(P.deltaY)),n.update()}function bt(P){let tt=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),tt=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),tt=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?j(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),tt=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?j(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),tt=!0;break}tt&&(P.preventDefault(),n.update())}function _t(P){if(w.length===1)u.set(P.pageX,P.pageY);else{const tt=xt(P),vt=.5*(P.pageX+tt.x),D=.5*(P.pageY+tt.y);u.set(vt,D)}}function $t(P){if(w.length===1)g.set(P.pageX,P.pageY);else{const tt=xt(P),vt=.5*(P.pageX+tt.x),D=.5*(P.pageY+tt.y);g.set(vt,D)}}function Pt(P){const tt=xt(P),vt=P.pageX-tt.x,D=P.pageY-tt.y,ot=Math.sqrt(vt*vt+D*D);m.set(0,ot)}function U(P){n.enableZoom&&Pt(P),n.enablePan&&$t(P)}function xe(P){n.enableZoom&&Pt(P),n.enableRotate&&_t(P)}function wt(P){if(w.length==1)d.set(P.pageX,P.pageY);else{const vt=xt(P),D=.5*(P.pageX+vt.x),ot=.5*(P.pageY+vt.y);d.set(D,ot)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const tt=n.domElement;j(2*Math.PI*f.x/tt.clientHeight),q(2*Math.PI*f.y/tt.clientHeight),u.copy(d)}function Ot(P){if(w.length===1)_.set(P.pageX,P.pageY);else{const tt=xt(P),vt=.5*(P.pageX+tt.x),D=.5*(P.pageY+tt.y);_.set(vt,D)}p.subVectors(_,g).multiplyScalar(n.panSpeed),O(p.x,p.y),g.copy(_)}function Et(P){const tt=xt(P),vt=P.pageX-tt.x,D=P.pageY-tt.y,ot=Math.sqrt(vt*vt+D*D);S.set(0,ot),x.set(0,Math.pow(S.y/m.y,n.zoomSpeed)),J(x.y),m.copy(S);const N=(P.pageX+tt.x)*.5,rt=(P.pageY+tt.y)*.5;$(N,rt)}function Yt(P){n.enableZoom&&Et(P),n.enablePan&&Ot(P)}function zt(P){n.enableZoom&&Et(P),n.enableRotate&&wt(P)}function kt(P){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",ie),n.domElement.addEventListener("pointerup",C)),!Gt(P)&&(lt(P),P.pointerType==="touch"?ht(P):M(P)))}function ie(P){n.enabled!==!1&&(P.pointerType==="touch"?ut(P):Y(P))}function C(P){switch(he(P),w.length){case 0:n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",ie),n.domElement.removeEventListener("pointerup",C),n.dispatchEvent(iu),s=i.NONE;break;case 1:const tt=w[0],vt=I[tt];ht({pointerId:tt,pageX:vt.x,pageY:vt.y});break}}function M(P){let tt;switch(P.button){case 0:tt=n.mouseButtons.LEFT;break;case 1:tt=n.mouseButtons.MIDDLE;break;case 2:tt=n.mouseButtons.RIGHT;break;default:tt=-1}switch(tt){case Gi.DOLLY:if(n.enableZoom===!1)return;ft(P),s=i.DOLLY;break;case Gi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;Tt(P),s=i.PAN}else{if(n.enableRotate===!1)return;st(P),s=i.ROTATE}break;case Gi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;st(P),s=i.ROTATE}else{if(n.enablePan===!1)return;Tt(P),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(qo)}function Y(P){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;W(P);break;case i.DOLLY:if(n.enableZoom===!1)return;it(P);break;case i.PAN:if(n.enablePan===!1)return;mt(P);break}}function Q(P){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(P.preventDefault(),n.dispatchEvent(qo),Lt(at(P)),n.dispatchEvent(iu))}function at(P){const tt=P.deltaMode,vt={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(tt){case 1:vt.deltaY*=16;break;case 2:vt.deltaY*=100;break}return P.ctrlKey&&!X&&(vt.deltaY*=10),vt}function nt(P){P.key==="Control"&&(X=!0,n.domElement.getRootNode().addEventListener("keyup",It,{passive:!0,capture:!0}))}function It(P){P.key==="Control"&&(X=!1,n.domElement.getRootNode().removeEventListener("keyup",It,{passive:!0,capture:!0}))}function At(P){n.enabled===!1||n.enablePan===!1||bt(P)}function ht(P){switch(St(P),w.length){case 1:switch(n.touches.ONE){case Wi.ROTATE:if(n.enableRotate===!1)return;_t(P),s=i.TOUCH_ROTATE;break;case Wi.PAN:if(n.enablePan===!1)return;$t(P),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Wi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(P),s=i.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(P),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(qo)}function ut(P){switch(St(P),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;wt(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ot(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Yt(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;zt(P),n.update();break;default:s=i.NONE}}function Ft(P){n.enabled!==!1&&P.preventDefault()}function lt(P){w.push(P.pointerId)}function he(P){delete I[P.pointerId];for(let tt=0;tt<w.length;tt++)if(w[tt]==P.pointerId){w.splice(tt,1);return}}function Gt(P){for(let tt=0;tt<w.length;tt++)if(w[tt]==P.pointerId)return!0;return!1}function St(P){let tt=I[P.pointerId];tt===void 0&&(tt=new gt,I[P.pointerId]=tt),tt.set(P.pageX,P.pageY)}function xt(P){const tt=P.pointerId===w[0]?w[1]:w[0];return I[tt]}n.domElement.addEventListener("contextmenu",Ft),n.domElement.addEventListener("pointerdown",kt),n.domElement.addEventListener("pointercancel",C),n.domElement.addEventListener("wheel",Q,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",nt,{passive:!0,capture:!0}),this.update()}}const ru=new v,$o=new Fl,jo=new v;class Cv{constructor(t,e){this.object=t,this.domElement=e,this.enabled=!0,this.movementSpeed=1,this.lookSpeed=.005,this.lookVertical=!0,this.autoForward=!1,this.activeLook=!0,this.heightSpeed=!1,this.heightCoef=1,this.heightMin=0,this.heightMax=1,this.constrainVertical=!1,this.verticalMin=0,this.verticalMax=Math.PI,this.mouseDragOn=!1,this.autoSpeedFactor=0,this.pointerX=0,this.pointerY=0,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.viewHalfX=0,this.viewHalfY=0;let n=0,i=0;this.handleResize=function(){this.domElement===document?(this.viewHalfX=window.innerWidth/2,this.viewHalfY=window.innerHeight/2):(this.viewHalfX=this.domElement.offsetWidth/2,this.viewHalfY=this.domElement.offsetHeight/2)},this.onPointerDown=function(u){if(this.domElement!==document&&this.domElement.focus(),this.activeLook)switch(u.button){case 0:this.moveForward=!0;break;case 2:this.moveBackward=!0;break}this.mouseDragOn=!0},this.onPointerUp=function(u){if(this.activeLook)switch(u.button){case 0:this.moveForward=!1;break;case 2:this.moveBackward=!1;break}this.mouseDragOn=!1},this.onPointerMove=function(u){this.domElement===document?(this.pointerX=u.pageX-this.viewHalfX,this.pointerY=u.pageY-this.viewHalfY):(this.pointerX=u.pageX-this.domElement.offsetLeft-this.viewHalfX,this.pointerY=u.pageY-this.domElement.offsetTop-this.viewHalfY)},this.onKeyDown=function(u){switch(u.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"KeyR":this.moveUp=!0;break;case"KeyF":this.moveDown=!0;break}},this.onKeyUp=function(u){switch(u.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break;case"KeyR":this.moveUp=!1;break;case"KeyF":this.moveDown=!1;break}},this.lookAt=function(u,d,f){return u.isVector3?jo.copy(u):jo.set(u,d,f),this.object.lookAt(jo),c(this),this},this.update=function(){const u=new v;return function(f){if(this.enabled===!1)return;if(this.heightSpeed){const R=Nn.clamp(this.object.position.y,this.heightMin,this.heightMax)-this.heightMin;this.autoSpeedFactor=f*(R*this.heightCoef)}else this.autoSpeedFactor=0;const g=f*this.movementSpeed;(this.moveForward||this.autoForward&&!this.moveBackward)&&this.object.translateZ(-(g+this.autoSpeedFactor)),this.moveBackward&&this.object.translateZ(g),this.moveLeft&&this.object.translateX(-g),this.moveRight&&this.object.translateX(g),this.moveUp&&this.object.translateY(g),this.moveDown&&this.object.translateY(-g);let _=f*this.lookSpeed;this.activeLook||(_=0);let p=1;this.constrainVertical&&(p=Math.PI/(this.verticalMax-this.verticalMin)),i-=this.pointerX*_,this.lookVertical&&(n-=this.pointerY*_*p),n=Math.max(-85,Math.min(85,n));let m=Nn.degToRad(90-n);const S=Nn.degToRad(i);this.constrainVertical&&(m=Nn.mapLinear(m,0,Math.PI,this.verticalMin,this.verticalMax));const x=this.object.position;u.setFromSphericalCoords(1,m,S).add(x),this.object.lookAt(u)}}(),this.dispose=function(){this.domElement.removeEventListener("contextmenu",au),this.domElement.removeEventListener("pointerdown",o),this.domElement.removeEventListener("pointermove",s),this.domElement.removeEventListener("pointerup",a),window.removeEventListener("keydown",l),window.removeEventListener("keyup",h)};const s=this.onPointerMove.bind(this),o=this.onPointerDown.bind(this),a=this.onPointerUp.bind(this),l=this.onKeyDown.bind(this),h=this.onKeyUp.bind(this);this.domElement.addEventListener("contextmenu",au),this.domElement.addEventListener("pointerdown",o),this.domElement.addEventListener("pointermove",s),this.domElement.addEventListener("pointerup",a),window.addEventListener("keydown",l),window.addEventListener("keyup",h);function c(u){const d=u.object.quaternion;ru.set(0,0,-1).applyQuaternion(d),$o.setFromVector3(ru),n=90-Nn.radToDeg($o.phi),i=Nn.radToDeg($o.theta)}this.handleResize(),c(this)}}function au(r){r.preventDefault()}const Ul=0,Zd=1,ah=0,ou=1,lu=100,hu=204,cu=205,uu=3,Rv=0,Pv=0,Kd=300,du=301,fu=302,Lv=306,pu=1e3,ra=1001,mu=1002,Ga=1006,Dv=1008,Iv=1009,Fv=1015,Uv=1016,Jd=1023,Qd="",ei="srgb",eo="srgb-linear",Nv="display-p3",tf="display-p3-linear",Nl="linear",gu="srgb",_u="rec709",xu="p3",os=7680,vu=519,yu=35044,sr=2e3,Mu=2001,De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zo=Math.PI/180,bu=180/Math.PI;function yr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[r&255]+De[r>>8&255]+De[r>>16&255]+De[r>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function We(r,t,e){return Math.max(t,Math.min(e,r))}function Ov(r,t){return(r%t+t)%t}function Ko(r,t,e){return(1-e)*r+e*t}function Ks(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ve(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Mr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],h=n[i+1],c=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||h!==f||c!==g){let p=1-a;const m=l*d+h*f+c*g+u*_,S=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,m*S);p=Math.sin(p*A)/R,a=Math.sin(a*A)/R}const b=a*S;if(l=l*p+d*b,h=h*p+f*b,c=c*p+g*b,u=u*p+_*b,p===1-a){const R=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=R,h*=R,c*=R,u*=R}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],h=n[i+2],c=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+c*u+l*f-h*d,t[e+1]=l*g+c*d+h*u-a*f,t[e+2]=h*g+c*f+a*d-l*u,t[e+3]=c*g-a*u-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),c=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"YXZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"ZXY":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"ZYX":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"YZX":this._x=d*c*u+h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u-d*f*g;break;case"XZY":this._x=d*c*u-h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(s-h)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(c-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+h)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-h)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+o*a+i*h-s*l,this._y=i*c+o*l+s*a-n*h,this._z=s*c+o*h+n*l-i*a,this._w=o*c-n*a-i*l-s*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,a),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,e=0,n=0){K.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Su.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Su.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*i-a*n),c=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*h+o*u-a*c,this.y=n+l*c+a*h-s*u,this.z=i+l*u+s*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jo.copy(this).projectOnVector(t),this.sub(Jo)}reflect(t){return this.sub(Jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jo=new K,Su=new Mr;class Ue{constructor(t=0,e=0){Ue.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}function zv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function wu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const Eu={};function Bv(r){r in Eu||(Eu[r]=!0,console.warn(r))}const _e=new K,aa=new Ue;class Bn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fv,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Bv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)aa.fromBufferAttribute(this,e),aa.applyMatrix3(t),this.setXY(e,aa.x,aa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ks(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ks(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ks(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ks(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ks(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),i=Ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),i=Ve(i,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yu&&(t.usage=this.usage),t}}class kv extends Bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hv extends Bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ia extends Bn{constructor(t,e,n){super(new Float32Array(t),e,n)}}class br{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(s,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(t.matrixWorld),this.union(oa)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),la.subVectors(this.max,Js),ls.subVectors(t.a,Js),hs.subVectors(t.b,Js),cs.subVectors(t.c,Js),$n.subVectors(hs,ls),jn.subVectors(cs,hs),Ai.subVectors(ls,cs);let e=[0,-$n.z,$n.y,0,-jn.z,jn.y,0,-Ai.z,Ai.y,$n.z,0,-$n.x,jn.z,0,-jn.x,Ai.z,0,-Ai.x,-$n.y,$n.x,0,-jn.y,jn.x,0,-Ai.y,Ai.x,0];return!Qo(e,ls,hs,cs,la)||(e=[1,0,0,0,1,0,0,0,1],!Qo(e,ls,hs,cs,la))?!1:(ha.crossVectors($n,jn),e=[ha.x,ha.y,ha.z],Qo(e,ls,hs,cs,la))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pn=[new K,new K,new K,new K,new K,new K,new K,new K],an=new K,oa=new br,ls=new K,hs=new K,cs=new K,$n=new K,jn=new K,Ai=new K,Js=new K,la=new K,ha=new K,Ti=new K;function Qo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ti.fromArray(r,s);const a=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),l=t.dot(Ti),h=e.dot(Ti),c=n.dot(Ti);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}class Sr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Vv=new br,Qs=new K,tl=new K;class ef{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Vv.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);const e=Qs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Qs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(tl)),this.expandByPoint(Qs.copy(t.center).sub(tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}class Xe{constructor(t,e,n,i,s,o,a,l,h,c,u,d,f,g,_,p){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,h,c,u,d,f,g,_,p)}set(t,e,n,i,s,o,a,l,h,c,u,d,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=h,m[6]=c,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/us.setFromMatrixColumn(t,0).length(),s=1/us.setFromMatrixColumn(t,1).length(),o=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),h=Math.sin(i),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*c,f=o*u,g=a*c,_=a*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=f+g*h,e[5]=d-_*h,e[9]=-a*l,e[2]=_-d*h,e[6]=g+f*h,e[10]=o*l}else if(t.order==="YXZ"){const d=l*c,f=l*u,g=h*c,_=h*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*h,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*c,f=l*u,g=h*c,_=h*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*c,e[9]=_-d*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*c,f=o*u,g=a*c,_=a*u;e[0]=l*c,e[4]=g*h-f,e[8]=d*h+_,e[1]=l*u,e[5]=_*h+d,e[9]=f*h-g,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*h,g=a*l,_=a*h;e[0]=l*c,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*h,g=a*l,_=a*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+_,e[5]=o*c,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*c,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gv,t,Wv)}lookAt(t,e,n){const i=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Zn.crossVectors(n,je),Zn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Zn.crossVectors(n,je)),Zn.normalize(),ca.crossVectors(je,Zn),i[0]=Zn.x,i[4]=ca.x,i[8]=je.x,i[1]=Zn.y,i[5]=ca.y,i[9]=je.y,i[2]=Zn.z,i[6]=ca.z,i[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],c=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],S=n[3],x=n[7],b=n[11],R=n[15],A=i[0],w=i[4],I=i[8],X=i[12],y=i[1],T=i[5],j=i[9],q=i[13],L=i[2],V=i[6],O=i[10],J=i[14],G=i[3],$=i[7],Z=i[11],st=i[15];return s[0]=o*A+a*y+l*L+h*G,s[4]=o*w+a*T+l*V+h*$,s[8]=o*I+a*j+l*O+h*Z,s[12]=o*X+a*q+l*J+h*st,s[1]=c*A+u*y+d*L+f*G,s[5]=c*w+u*T+d*V+f*$,s[9]=c*I+u*j+d*O+f*Z,s[13]=c*X+u*q+d*J+f*st,s[2]=g*A+_*y+p*L+m*G,s[6]=g*w+_*T+p*V+m*$,s[10]=g*I+_*j+p*O+m*Z,s[14]=g*X+_*q+p*J+m*st,s[3]=S*A+x*y+b*L+R*G,s[7]=S*w+x*T+b*V+R*$,s[11]=S*I+x*j+b*O+R*Z,s[15]=S*X+x*q+b*J+R*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+s*l*u-i*h*u-s*a*d+n*h*d+i*a*f-n*l*f)+_*(+e*l*f-e*h*d+s*o*d-i*o*f+i*h*c-s*l*c)+p*(+e*h*u-e*a*f-s*o*u+n*o*f+s*a*c-n*h*c)+m*(-i*a*c-e*l*u+e*a*d+i*o*u-n*o*d+n*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],S=u*p*h-_*d*h+_*l*f-a*p*f-u*l*m+a*d*m,x=g*d*h-c*p*h-g*l*f+o*p*f+c*l*m-o*d*m,b=c*_*h-g*u*h+g*a*f-o*_*f-c*a*m+o*u*m,R=g*u*l-c*_*l-g*a*d+o*_*d+c*a*p-o*u*p,A=e*S+n*x+i*b+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=S*w,t[1]=(_*d*s-u*p*s-_*i*f+n*p*f+u*i*m-n*d*m)*w,t[2]=(a*p*s-_*l*s+_*i*h-n*p*h-a*i*m+n*l*m)*w,t[3]=(u*l*s-a*d*s-u*i*h+n*d*h+a*i*f-n*l*f)*w,t[4]=x*w,t[5]=(c*p*s-g*d*s+g*i*f-e*p*f-c*i*m+e*d*m)*w,t[6]=(g*l*s-o*p*s-g*i*h+e*p*h+o*i*m-e*l*m)*w,t[7]=(o*d*s-c*l*s+c*i*h-e*d*h-o*i*f+e*l*f)*w,t[8]=b*w,t[9]=(g*u*s-c*_*s-g*n*f+e*_*f+c*n*m-e*u*m)*w,t[10]=(o*_*s-g*a*s+g*n*h-e*_*h-o*n*m+e*a*m)*w,t[11]=(c*a*s-o*u*s-c*n*h+e*u*h+o*n*f-e*a*f)*w,t[12]=R*w,t[13]=(c*_*i-g*u*i+g*n*d-e*_*d-c*n*p+e*u*p)*w,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*p-e*a*p)*w,t[15]=(o*u*i-c*a*i+c*n*l-e*u*l-o*n*d+e*a*d)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,h=s*o,c=s*a;return this.set(h*o+n,h*a-i*l,h*l+i*a,0,h*a+i*l,c*a+n,c*l-i*o,0,h*l-i*a,c*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,h=s+s,c=o+o,u=a+a,d=s*h,f=s*c,g=s*u,_=o*c,p=o*u,m=a*u,S=l*h,x=l*c,b=l*u,R=n.x,A=n.y,w=n.z;return i[0]=(1-(_+m))*R,i[1]=(f+b)*R,i[2]=(g-x)*R,i[3]=0,i[4]=(f-b)*A,i[5]=(1-(d+m))*A,i[6]=(p+S)*A,i[7]=0,i[8]=(g+x)*w,i[9]=(p-S)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=us.set(i[0],i[1],i[2]).length();const o=us.set(i[4],i[5],i[6]).length(),a=us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],on.copy(this);const h=1/s,c=1/o,u=1/a;return on.elements[0]*=h,on.elements[1]*=h,on.elements[2]*=h,on.elements[4]*=c,on.elements[5]*=c,on.elements[6]*=c,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=sr){const l=this.elements,h=2*s/(e-t),c=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===sr)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Mu)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=sr){const l=this.elements,h=1/(e-t),c=1/(n-i),u=1/(o-s),d=(e+t)*h,f=(n+i)*c;let g,_;if(a===sr)g=(o+s)*u,_=-2*u;else if(a===Mu)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const us=new K,on=new Xe,Gv=new K(0,0,0),Wv=new K(1,1,1),Zn=new K,ca=new K,je=new K,Au=new Xe,Tu=new Mr;class wr{constructor(t=0,e=0,n=0,i=wr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],h=i[5],c=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-We(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Au.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Au,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tu.setFromEuler(this),this.setFromQuaternion(Tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wr.DEFAULT_ORDER="XYZ";class Xv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}class pi{constructor(t,e,n,i,s,o,a,l,h){pi.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,h)}set(t,e,n,i,s,o,a,l,h){const c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=l,c[6]=n,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],c=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],S=i[1],x=i[4],b=i[7],R=i[2],A=i[5],w=i[8];return s[0]=o*_+a*S+l*R,s[3]=o*p+a*x+l*A,s[6]=o*m+a*b+l*w,s[1]=h*_+c*S+u*R,s[4]=h*p+c*x+u*A,s[7]=h*m+c*b+u*w,s[2]=d*_+f*S+g*R,s[5]=d*p+f*x+g*A,s[8]=d*m+f*b+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-n*s*c+n*a*l+i*s*h-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=c*o-a*h,d=a*l-c*s,f=h*s-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*h-c*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(c*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-h*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),h=Math.sin(s);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-i*h,i*l,-i*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(el.makeScale(t,e)),this}rotate(t){return this.premultiply(el.makeRotation(-t)),this}translate(t,e){return this.premultiply(el.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const el=new pi;let Yv=0;const Cu=new K,ds=new Mr,Ln=new Xe,ua=new K,tr=new K,qv=new K,$v=new Mr,Ru=new K(1,0,0),Pu=new K(0,1,0),Lu=new K(0,0,1),jv={type:"added"},Zv={type:"removed"},nl={type:"childadded",child:null},il={type:"childremoved",child:null};class Mn extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new K,e=new wr,n=new Mr,i=new K(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new pi}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Ru,t)}rotateY(t){return this.rotateOnAxis(Pu,t)}rotateZ(t){return this.rotateOnAxis(Lu,t)}translateOnAxis(t,e){return Cu.copy(t).applyQuaternion(this.quaternion),this.position.add(Cu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ru,t)}translateY(t){return this.translateOnAxis(Pu,t)}translateZ(t){return this.translateOnAxis(Lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ua.copy(t):ua.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(tr,ua,this.up):Ln.lookAt(ua,tr,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),ds.setFromRotationMatrix(Ln),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(jv),nl.child=t,this.dispatchEvent(nl),nl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zv),il.child=t,this.dispatchEvent(il),il.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,t,qv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,$v,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const h in a){const c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Mn.DEFAULT_UP=new K(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;let Kv=0;const Qe=new Xe,sl=new Mn,fs=new K,Ze=new br,er=new br,Se=new K;class Er extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zv(t)?Hv:kv)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new pi().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return sl.lookAt(t),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ia(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ze.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ef);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];er.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Ze.min,er.min),Ze.expandByPoint(Se),Se.addVectors(Ze.max,er.max),Ze.expandByPoint(Se)):(Ze.expandByPoint(er.min),Ze.expandByPoint(er.max))}Ze.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Se.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)Se.fromBufferAttribute(a,h),l&&(fs.fromBufferAttribute(t,h),Se.add(fs)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new K,l[I]=new K;const h=new K,c=new K,u=new K,d=new Ue,f=new Ue,g=new Ue,_=new K,p=new K;function m(I,X,y){h.fromBufferAttribute(n,I),c.fromBufferAttribute(n,X),u.fromBufferAttribute(n,y),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,X),g.fromBufferAttribute(s,y),c.sub(h),u.sub(h),f.sub(d),g.sub(d);const T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(T),p.copy(u).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(T),a[I].add(_),a[X].add(_),a[y].add(_),l[I].add(p),l[X].add(p),l[y].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,X=S.length;I<X;++I){const y=S[I],T=y.start,j=y.count;for(let q=T,L=T+j;q<L;q+=3)m(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const x=new K,b=new K,R=new K,A=new K;function w(I){R.fromBufferAttribute(i,I),A.copy(R);const X=a[I];x.copy(X),x.sub(R.multiplyScalar(R.dot(X))).normalize(),b.crossVectors(A,X);const T=b.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,T)}for(let I=0,X=S.length;I<X;++I){const y=S[I],T=y.start,j=y.count;for(let q=T,L=T+j;q<L;q+=3)w(t.getX(q+0)),w(t.getX(q+1)),w(t.getX(q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new K,s=new K,o=new K,a=new K,l=new K,h=new K,c=new K,u=new K;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),c.subVectors(o,s),u.subVectors(i,s),c.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,p),a.add(c),l.add(c),h.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,s),u.subVectors(i,s),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,l){const h=a.array,c=a.itemSize,u=a.normalized,d=new h.constructor(l.length*c);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*c;for(let m=0;m<c;m++)d[g++]=h[f++]}return new Bn(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Er,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],h=t(l,n);e.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const l=[],h=s[a];for(let c=0,u=h.length;c<u;c++){const d=h[c],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(i[l]=c,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const h in i){const c=i[h];this.setAttribute(h,c.clone(e))}const s=t.morphAttributes;for(const h in s){const c=[],u=s[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,c=o.length;h<c;h++){const u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dn=new K,rl=new K,da=new K,Kn=new K,al=new K,fa=new K,ol=new K;class Jv{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){rl.copy(t).add(e).multiplyScalar(.5),da.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(rl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(da),a=Kn.dot(this.direction),l=-Kn.dot(da),h=Kn.lengthSq(),c=Math.abs(1-o*o);let u,d,f,g;if(c>0)if(u=o*l-a,d=o*a-l,g=s*c,u>=0)if(d>=-g)if(d<=g){const _=1/c;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+h}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+h):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+h):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+h);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(rl).addScaledVector(da,d),f}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),c>=0?(s=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(s=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,i,s){al.subVectors(e,t),fa.subVectors(n,t),ol.crossVectors(al,fa);let o=this.direction.dot(ol),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);const l=a*this.direction.dot(fa.crossVectors(Kn,fa));if(l<0)return null;const h=a*this.direction.dot(al.cross(Kn));if(h<0||l+h>o)return null;const c=-a*Kn.dot(ol);return c<0?null:this.at(c/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}const ln=new K,In=new K,ll=new K,Fn=new K,ps=new K,ms=new K,Du=new K,hl=new K,cl=new K,ul=new K;class xn{constructor(t=new K,e=new K,n=new K){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ln.subVectors(i,e),In.subVectors(n,e),ll.subVectors(t,e);const o=ln.dot(ln),a=ln.dot(In),l=ln.dot(ll),h=In.dot(In),c=In.dot(ll),u=o*h-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(h*l-a*c)*d,g=(o*c-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),In.subVectors(t,e),ln.cross(In).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),In.subVectors(this.a,this.b),ln.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ps.subVectors(i,n),ms.subVectors(s,n),hl.subVectors(t,n);const l=ps.dot(hl),h=ms.dot(hl);if(l<=0&&h<=0)return e.copy(n);cl.subVectors(t,i);const c=ps.dot(cl),u=ms.dot(cl);if(c>=0&&u<=c)return e.copy(i);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(n).addScaledVector(ps,o);ul.subVectors(t,s);const f=ps.dot(ul),g=ms.dot(ul);if(g>=0&&f<=g)return e.copy(s);const _=f*h-l*g;if(_<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(ms,a);const p=c*g-f*u;if(p<=0&&u-c>=0&&f-g>=0)return Du.subVectors(s,i),a=(u-c)/(u-c+(f-g)),e.copy(i).addScaledVector(Du,a);const m=1/(p+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(ps,o).addScaledVector(ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Iu=new pi().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fu=new pi().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),pa={[eo]:{transfer:Nl,primaries:_u,toReference:r=>r,fromReference:r=>r},[ei]:{transfer:gu,primaries:_u,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[tf]:{transfer:Nl,primaries:xu,toReference:r=>r.applyMatrix3(Fu),fromReference:r=>r.applyMatrix3(Iu)},[Nv]:{transfer:gu,primaries:xu,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Fu),fromReference:r=>r.applyMatrix3(Iu).convertLinearToSRGB()}},Qv=new Set([eo,tf]),hn={enabled:!0,_workingColorSpace:eo,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Qv.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=pa[t].toReference,i=pa[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return pa[r].primaries},getTransfer:function(r){return r===Qd?Nl:pa[r].transfer}};function Is(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function dl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},ma={h:0,s:0,l:0};function fl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}let Ar=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,hn.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=hn.workingColorSpace){return this.r=t,this.g=e,this.b=n,hn.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=hn.workingColorSpace){if(t=Ov(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=fl(o,s,t+1/3),this.g=fl(o,s,t),this.b=fl(o,s,t-1/3)}return hn.toWorkingColorSpace(this,i),this}setStyle(t,e=ei){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ei){const n=nf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}copyLinearToSRGB(t){return this.r=dl(t.r),this.g=dl(t.g),this.b=dl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ei){return hn.fromWorkingColorSpace(Ie.copy(this),t),Math.round(We(Ie.r*255,0,255))*65536+Math.round(We(Ie.g*255,0,255))*256+Math.round(We(Ie.b*255,0,255))}getHexString(t=ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=hn.workingColorSpace){hn.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,i=Ie.g,s=Ie.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,h;const c=(a+o)/2;if(a===o)l=0,h=0;else{const u=o-a;switch(h=c<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=hn.workingColorSpace){return hn.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=ei){hn.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,i=Ie.b;return t!==ei?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(ma);const n=Ko(Jn.h,ma.h,e),i=Ko(Jn.s,ma.s,e),s=Ko(Jn.l,ma.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ie=new Ar;Ar.NAMES=nf;let ty=0;class sf extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=yr(),this.name="",this.type="Material",this.blending=ou,this.side=Ul,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hu,this.blendDst=cu,this.blendEquation=lu,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ar(0,0,0),this.blendAlpha=0,this.depthFunc=uu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ou&&(n.blending=this.blending),this.side!==Ul&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hu&&(n.blendSrc=this.blendSrc),this.blendDst!==cu&&(n.blendDst=this.blendDst),this.blendEquation!==lu&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==uu&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class rf extends sf{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ar(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wr,this.combine=Rv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Uu=new Xe,Ci=new Jv,ga=new ef,Nu=new K,gs=new K,_s=new K,xs=new K,pl=new K,_a=new K,xa=new Ue,va=new Ue,ya=new Ue,Ou=new K,zu=new K,Bu=new K,Ma=new K,ba=new K;class Sa extends Mn{constructor(t=new Er,e=new rf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){_a.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const c=a[l],u=s[l];c!==0&&(pl.fromBufferAttribute(u,t),o?_a.addScaledVector(pl,c):_a.addScaledVector(pl.sub(e),c))}e.add(_a)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),Ci.copy(t.ray).recast(t.near),!(ga.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(ga,Nu)===null||Ci.origin.distanceToSquared(Nu)>(t.far-t.near)**2))&&(Uu.copy(s).invert(),Ci.copy(t.ray).applyMatrix4(Uu),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,h=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let b=S,R=x;b<R;b+=3){const A=a.getX(b),w=a.getX(b+1),I=a.getX(b+2);i=wa(this,m,t,n,h,c,u,A,w,I),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const S=a.getX(p),x=a.getX(p+1),b=a.getX(p+2);i=wa(this,o,t,n,h,c,u,S,x,b),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=S,R=x;b<R;b+=3){const A=b,w=b+1,I=b+2;i=wa(this,m,t,n,h,c,u,A,w,I),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const S=p,x=p+1,b=p+2;i=wa(this,o,t,n,h,c,u,S,x,b),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function ey(r,t,e,n,i,s,o,a){let l;if(t.side===Zd?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Ul,a),l===null)return null;ba.copy(a),ba.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(ba);return h<e.near||h>e.far?null:{distance:h,point:ba.clone(),object:r}}function wa(r,t,e,n,i,s,o,a,l,h){r.getVertexPosition(a,gs),r.getVertexPosition(l,_s),r.getVertexPosition(h,xs);const c=ey(r,t,e,n,gs,_s,xs,Ma);if(c){i&&(xa.fromBufferAttribute(i,a),va.fromBufferAttribute(i,l),ya.fromBufferAttribute(i,h),c.uv=xn.getInterpolation(Ma,gs,_s,xs,xa,va,ya,new Ue)),s&&(xa.fromBufferAttribute(s,a),va.fromBufferAttribute(s,l),ya.fromBufferAttribute(s,h),c.uv1=xn.getInterpolation(Ma,gs,_s,xs,xa,va,ya,new Ue)),o&&(Ou.fromBufferAttribute(o,a),zu.fromBufferAttribute(o,l),Bu.fromBufferAttribute(o,h),c.normal=xn.getInterpolation(Ma,gs,_s,xs,Ou,zu,Bu,new K),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const u={a,b:l,c:h,normal:new K,materialIndex:0};xn.getNormal(gs,_s,xs,u.normal),c.face=u}return c}class af extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=sr}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ny extends af{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qn=new K,ku=new Ue,Hu=new Ue;class iy extends af{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=bu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bu*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,ku,Hu),e.subVectors(Hu,ku)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/h,i*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}function sy(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ry(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}const ay=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,oy=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class oh extends sf{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ay,this.fragmentShader=oy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sy(t.uniforms),this.uniformsGroups=ry(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}let vs;class ly{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vs===void 0&&(vs=wu("canvas")),vs.width=t.width,vs.height=t.height;const n=vs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wu("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Is(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Is(e[n]/255)*255):e[n]=Is(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hy=0;class of{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=yr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ml(i[o].image)):s.push(ml(i[o]))}else s=ml(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ml(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ly.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cy=0;class ci extends Sr{constructor(t=ci.DEFAULT_IMAGE,e=ci.DEFAULT_MAPPING,n=ra,i=ra,s=Ga,o=Dv,a=Jd,l=Iv,h=ci.DEFAULT_ANISOTROPY,c=Qd){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=yr(),this.name="",this.source=new of(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pi,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pu:t.x=t.x-Math.floor(t.x);break;case ra:t.x=t.x<0?0:1;break;case mu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pu:t.y=t.y-Math.floor(t.y);break;case ra:t.y=t.y<0?0:1;break;case mu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}ci.DEFAULT_IMAGE=null;ci.DEFAULT_MAPPING=Kd;ci.DEFAULT_ANISOTROPY=1;class Wa{constructor(t=0,e=0,n=0,i=1){Wa.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(h+1)/2,b=(f+1)/2,R=(m+1)/2,A=(c+d)/4,w=(u+_)/4,I=(g+p)/4;return x>b&&x>R?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=w/n):b>R?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=A/i,s=I/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=w/s,i=I/s),this.set(n,i,s,e),this}let S=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-c)*(d-c));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-_)/S,this.z=(d-c)/S,this.w=Math.acos((h+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uy extends Sr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Wa(0,0,t,e),this.scissorTest=!1,this.viewport=new Wa(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ga,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new ci(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new of(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dy extends uy{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class lh extends Er{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],h=[],c=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ia(h,3)),this.setAttribute("normal",new Ia(c,3)),this.setAttribute("uv",new Ia(u,2));function g(_,p,m,S,x,b,R,A,w,I,X){const y=b/w,T=R/I,j=b/2,q=R/2,L=A/2,V=w+1,O=I+1;let J=0,G=0;const $=new K;for(let Z=0;Z<O;Z++){const st=Z*T-q;for(let ft=0;ft<V;ft++){const Tt=ft*y-j;$[_]=Tt*S,$[p]=st*x,$[m]=L,h.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[m]=A>0?1:-1,c.push($.x,$.y,$.z),u.push(ft/w),u.push(1-Z/I),J+=1}}for(let Z=0;Z<I;Z++)for(let st=0;st<w;st++){const ft=d+st+V*Z,Tt=d+st+V*(Z+1),W=d+(st+1)+V*(Z+1),it=d+(st+1)+V*Z;l.push(ft,Tt,it),l.push(Tt,W,it),G+=6}a.addGroup(f,G,X),f+=G,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lh(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}const Cs=4,Vu=[.125,.215,.35,.446,.526,.582],Fi=20,gl=new ny,Gu=new Ar;let _l=null,xl=0,vl=0;const Li=(1+Math.sqrt(5))/2,ys=1/Li,Wu=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,Li,ys),new K(0,Li,-ys),new K(ys,0,Li),new K(-ys,0,Li),new K(Li,ys,0),new K(-Li,ys,0)];class fy{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){_l=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_l,xl,vl),t.scissorTest=!1,Ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===du||t.mapping===fu?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_l=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ga,minFilter:Ga,generateMipmaps:!1,type:Uv,format:Jd,colorSpace:eo,depthBuffer:!1},i=Xu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xu(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=py(s)),this._blurMaterial=my(s,t,e)}return i}_compileMaterial(t){const e=new Sa(this._lodPlanes[0],t);this._renderer.compile(e,gl)}_sceneToCubeUV(t,e,n,i){const a=new iy(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(Gu),c.toneMapping=Pv,c.autoClear=!1;const f=new rf({name:"PMREM.Background",side:Zd,depthWrite:!1,depthTest:!1}),g=new Sa(new lh,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(Gu),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(h[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,h[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,h[m]));const x=this._cubeSize;Ea(i,S*x,m>2?x:0,x,x),c.setRenderTarget(i),_&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===du||t.mapping===fu;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Sa(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ea(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,gl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Wu[(i-1)%Wu.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Sa(this._lodPlanes[i],h),d=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Fi-1),_=s/g,p=isFinite(s)?1+Math.floor(c*_):Fi;p>Fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fi}`);const m=[];let S=0;for(let w=0;w<Fi;++w){const I=w/_,X=Math.exp(-I*I/2);m.push(X),w===0?S+=X:w<p&&(S+=2*X)}for(let w=0;w<m.length;w++)m[w]=m[w]/S;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const b=this._sizeLods[i],R=3*b*(i>x-Cs?i-x+Cs:0),A=4*(this._cubeSize-b);Ea(e,R,A,3*b,2*b),l.setRenderTarget(e),l.render(u,gl)}}function py(r){const t=[],e=[],n=[];let i=r;const s=r-Cs+1+Vu.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Cs?l=Vu[o-r+Cs-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,g=6,_=3,p=2,m=1,S=new Float32Array(_*g*f),x=new Float32Array(p*g*f),b=new Float32Array(m*g*f);for(let A=0;A<f;A++){const w=A%3*2/3-1,I=A>2?0:-1,X=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];S.set(X,_*g*A),x.set(d,p*g*A);const y=[A,A,A,A,A,A];b.set(y,m*g*A)}const R=new Er;R.setAttribute("position",new Bn(S,_)),R.setAttribute("uv",new Bn(x,p)),R.setAttribute("faceIndex",new Bn(b,m)),t.push(R),i>Cs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xu(r,t,e){const n=new dy(r,t,e);return n.texture.mapping=Lv,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function my(r,t,e){const n=new Float32Array(Fi),i=new K(0,1,0);return new oh({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ah,depthTest:!1,depthWrite:!1})}function Yu(){return new oh({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ah,depthTest:!1,depthWrite:!1})}function qu(){return new oh({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ah,depthTest:!1,depthWrite:!1})}function hh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class vn extends Ne{constructor(t=(i,s,o)=>o.set(i,s,Math.cos(i)*Math.sin(s)),e=8,n=8){super(),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:n};const i=[],s=[],o=[],a=[],l=1e-5,h=new v,c=new v,u=new v,d=new v,f=new v,g=e+1;for(let _=0;_<=n;_++){const p=_/n;for(let m=0;m<=e;m++){const S=m/e;t(S,p,c),s.push(c.x,c.y,c.z),S-l>=0?(t(S-l,p,u),d.subVectors(c,u)):(t(S+l,p,u),d.subVectors(u,c)),p-l>=0?(t(S,p-l,u),f.subVectors(c,u)):(t(S,p+l,u),f.subVectors(u,c)),h.crossVectors(d,f).normalize(),o.push(h.x,h.y,h.z),a.push(S,p)}}for(let _=0;_<n;_++)for(let p=0;p<e;p++){const m=_*g+p,S=_*g+p+1,x=(_+1)*g+p+1,b=(_+1)*g+p;i.push(m,S,b),i.push(S,x,b)}this.setIndex(i),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(a,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function gy(r){if(!(typeof window>"u")){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=r,document.head.appendChild(t),r}}function Rs(r,t){var e=r.__state.conversionName.toString(),n=Math.round(r.r),i=Math.round(r.g),s=Math.round(r.b),o=r.a,a=Math.round(r.h),l=r.s.toFixed(1),h=r.v.toFixed(1);if(t||e==="THREE_CHAR_HEX"||e==="SIX_CHAR_HEX"){for(var c=r.hex.toString(16);c.length<6;)c="0"+c;return"#"+c}else{if(e==="CSS_RGB")return"rgb("+n+","+i+","+s+")";if(e==="CSS_RGBA")return"rgba("+n+","+i+","+s+","+o+")";if(e==="HEX")return"0x"+r.hex.toString(16);if(e==="RGB_ARRAY")return"["+n+","+i+","+s+"]";if(e==="RGBA_ARRAY")return"["+n+","+i+","+s+","+o+"]";if(e==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+s+"}";if(e==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+s+",a:"+o+"}";if(e==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+h+"}";if(e==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+h+",a:"+o+"}"}return"unknown format"}var $u=Array.prototype.forEach,nr=Array.prototype.slice,et={BREAK:{},extend:function(t){return this.each(nr.call(arguments,1),function(e){var n=this.isObject(e)?Object.keys(e):[];n.forEach((function(i){this.isUndefined(e[i])||(t[i]=e[i])}).bind(this))},this),t},defaults:function(t){return this.each(nr.call(arguments,1),function(e){var n=this.isObject(e)?Object.keys(e):[];n.forEach((function(i){this.isUndefined(t[i])&&(t[i]=e[i])}).bind(this))},this),t},compose:function(){var t=nr.call(arguments);return function(){for(var e=nr.call(arguments),n=t.length-1;n>=0;n--)e=[t[n].apply(this,e)];return e[0]}},each:function(t,e,n){if(t){if($u&&t.forEach&&t.forEach===$u)t.forEach(e,n);else if(t.length===t.length+0){var i=void 0,s=void 0;for(i=0,s=t.length;i<s;i++)if(i in t&&e.call(n,t[i],i)===this.BREAK)return}else for(var o in t)if(e.call(n,t[o],o)===this.BREAK)return}},defer:function(t){setTimeout(t,0)},debounce:function(t,e,n){var i=void 0;return function(){var s=this,o=arguments;function a(){i=null,n||t.apply(s,o)}var l=n||!i;clearTimeout(i),i=setTimeout(a,e),l&&t.apply(s,o)}},toArray:function(t){return t.toArray?t.toArray():nr.call(t)},isUndefined:function(t){return t===void 0},isNull:function(t){return t===null},isNaN:function(r){function t(e){return r.apply(this,arguments)}return t.toString=function(){return r.toString()},t}(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(t){return t===Object(t)},isNumber:function(t){return t===t+0},isString:function(t){return t===t+""},isBoolean:function(t){return t===!1||t===!0},isFunction:function(t){return t instanceof Function}},_y=[{litmus:et.isString,conversions:{THREE_CHAR_HEX:{read:function(t){var e=t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString()+e[1].toString()+e[2].toString()+e[2].toString()+e[3].toString()+e[3].toString(),0)}},write:Rs},SIX_CHAR_HEX:{read:function(t){var e=t.match(/^#([A-F0-9]{6})$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString(),0)}},write:Rs},CSS_RGB:{read:function(t){var e=t.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3])}},write:Rs},CSS_RGBA:{read:function(t){var e=t.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3]),a:parseFloat(e[4])}},write:Rs}}},{litmus:et.isNumber,conversions:{HEX:{read:function(t){return{space:"HEX",hex:t,conversionName:"HEX"}},write:function(t){return t.hex}}}},{litmus:et.isArray,conversions:{RGB_ARRAY:{read:function(t){return t.length!==3?!1:{space:"RGB",r:t[0],g:t[1],b:t[2]}},write:function(t){return[t.r,t.g,t.b]}},RGBA_ARRAY:{read:function(t){return t.length!==4?!1:{space:"RGB",r:t[0],g:t[1],b:t[2],a:t[3]}},write:function(t){return[t.r,t.g,t.b,t.a]}}}},{litmus:et.isObject,conversions:{RGBA_OBJ:{read:function(t){return et.isNumber(t.r)&&et.isNumber(t.g)&&et.isNumber(t.b)&&et.isNumber(t.a)?{space:"RGB",r:t.r,g:t.g,b:t.b,a:t.a}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b,a:t.a}}},RGB_OBJ:{read:function(t){return et.isNumber(t.r)&&et.isNumber(t.g)&&et.isNumber(t.b)?{space:"RGB",r:t.r,g:t.g,b:t.b}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b}}},HSVA_OBJ:{read:function(t){return et.isNumber(t.h)&&et.isNumber(t.s)&&et.isNumber(t.v)&&et.isNumber(t.a)?{space:"HSV",h:t.h,s:t.s,v:t.v,a:t.a}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v,a:t.a}}},HSV_OBJ:{read:function(t){return et.isNumber(t.h)&&et.isNumber(t.s)&&et.isNumber(t.v)?{space:"HSV",h:t.h,s:t.s,v:t.v}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v}}}}}],ir=void 0,Aa=void 0,Ol=function(){Aa=!1;var t=arguments.length>1?et.toArray(arguments):arguments[0];return et.each(_y,function(e){if(e.litmus(t))return et.each(e.conversions,function(n,i){if(ir=n.read(t),Aa===!1&&ir!==!1)return Aa=ir,ir.conversionName=i,ir.conversion=n,et.BREAK}),et.BREAK}),Aa},ju=void 0,Xa={hsv_to_rgb:function(t,e,n){var i=Math.floor(t/60)%6,s=t/60-Math.floor(t/60),o=n*(1-e),a=n*(1-s*e),l=n*(1-(1-s)*e),h=[[n,l,o],[a,n,o],[o,n,l],[o,a,n],[l,o,n],[n,o,a]][i];return{r:h[0]*255,g:h[1]*255,b:h[2]*255}},rgb_to_hsv:function(t,e,n){var i=Math.min(t,e,n),s=Math.max(t,e,n),o=s-i,a=void 0,l=void 0;if(s!==0)l=o/s;else return{h:NaN,s:0,v:0};return t===s?a=(e-n)/o:e===s?a=2+(n-t)/o:a=4+(t-e)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:s/255}},rgb_to_hex:function(t,e,n){var i=this.hex_with_component(0,2,t);return i=this.hex_with_component(i,1,e),i=this.hex_with_component(i,0,n),i},component_from_hex:function(t,e){return t>>e*8&255},hex_with_component:function(t,e,n){return n<<(ju=e*8)|t&~(255<<ju)}},xy=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},fn=function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")},pn=function(){function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),di=function r(t,e,n){t===null&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,e);if(i===void 0){var s=Object.getPrototypeOf(t);return s===null?void 0:r(s,e,n)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(n)}},mi=function(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(r,t):r.__proto__=t)},gi=function(r,t){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:r},Te=function(){function r(){if(fn(this,r),this.__state=Ol.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return pn(r,[{key:"toString",value:function(){return Rs(this)}},{key:"toHexString",value:function(){return Rs(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r}();function ch(r,t,e){Object.defineProperty(r,t,{get:function(){return this.__state.space==="RGB"?this.__state[t]:(Te.recalculateRGB(this,t,e),this.__state[t])},set:function(i){this.__state.space!=="RGB"&&(Te.recalculateRGB(this,t,e),this.__state.space="RGB"),this.__state[t]=i}})}function uh(r,t){Object.defineProperty(r,t,{get:function(){return this.__state.space==="HSV"?this.__state[t]:(Te.recalculateHSV(this),this.__state[t])},set:function(n){this.__state.space!=="HSV"&&(Te.recalculateHSV(this),this.__state.space="HSV"),this.__state[t]=n}})}Te.recalculateRGB=function(r,t,e){if(r.__state.space==="HEX")r.__state[t]=Xa.component_from_hex(r.__state.hex,e);else if(r.__state.space==="HSV")et.extend(r.__state,Xa.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};Te.recalculateHSV=function(r){var t=Xa.rgb_to_hsv(r.r,r.g,r.b);et.extend(r.__state,{s:t.s,v:t.v}),et.isNaN(t.h)?et.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=t.h};Te.COMPONENTS=["r","g","b","h","s","v","hex","a"];ch(Te.prototype,"r",2);ch(Te.prototype,"g",1);ch(Te.prototype,"b",0);uh(Te.prototype,"h");uh(Te.prototype,"s");uh(Te.prototype,"v");Object.defineProperty(Te.prototype,"a",{get:function(){return this.__state.a},set:function(t){this.__state.a=t}});Object.defineProperty(Te.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Xa.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(t){this.__state.space="HEX",this.__state.hex=t}});var Vi=function(){function r(t,e){fn(this,r),this.initialValue=t[e],this.domElement=document.createElement("div"),this.object=t,this.property=e,this.__onChange=void 0,this.__onFinishChange=void 0}return pn(r,[{key:"onChange",value:function(e){return this.__onChange=e,this}},{key:"onFinishChange",value:function(e){return this.__onFinishChange=e,this}},{key:"setValue",value:function(e){return this.object[this.property]=e,this.__onChange&&this.__onChange.call(this,e),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r}(),vy={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},lf={};et.each(vy,function(r,t){et.each(r,function(e){lf[e]=t})});var yy=/(\d+(\.\d+)?)px/;function mn(r){if(r==="0"||et.isUndefined(r))return 0;var t=r.match(yy);return et.isNull(t)?0:parseFloat(t[1])}var z={makeSelectable:function(t,e){t===void 0||t.style===void 0||(t.onselectstart=e?function(){return!1}:function(){},t.style.MozUserSelect=e?"auto":"none",t.style.KhtmlUserSelect=e?"auto":"none",t.unselectable=e?"on":"off")},makeFullscreen:function(t,e,n){var i=n,s=e;et.isUndefined(s)&&(s=!0),et.isUndefined(i)&&(i=!0),t.style.position="absolute",s&&(t.style.left=0,t.style.right=0),i&&(t.style.top=0,t.style.bottom=0)},fakeEvent:function(t,e,n,i){var s=n||{},o=lf[e];if(!o)throw new Error("Event type "+e+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=s.x||s.clientX||0,h=s.y||s.clientY||0;a.initMouseEvent(e,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,h,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var c=a.initKeyboardEvent||a.initKeyEvent;et.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),c(e,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(e,s.bubbles||!1,s.cancelable||!0);break}}et.defaults(a,i),t.dispatchEvent(a)},bind:function(t,e,n,i){var s=i||!1;return t.addEventListener?t.addEventListener(e,n,s):t.attachEvent&&t.attachEvent("on"+e,n),z},unbind:function(t,e,n,i){var s=i||!1;return t.removeEventListener?t.removeEventListener(e,n,s):t.detachEvent&&t.detachEvent("on"+e,n),z},addClass:function(t,e){if(t.className===void 0)t.className=e;else if(t.className!==e){var n=t.className.split(/ +/);n.indexOf(e)===-1&&(n.push(e),t.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return z},removeClass:function(t,e){if(e)if(t.className===e)t.removeAttribute("class");else{var n=t.className.split(/ +/),i=n.indexOf(e);i!==-1&&(n.splice(i,1),t.className=n.join(" "))}else t.className=void 0;return z},hasClass:function(t,e){return new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)").test(t.className)||!1},getWidth:function(t){var e=getComputedStyle(t);return mn(e["border-left-width"])+mn(e["border-right-width"])+mn(e["padding-left"])+mn(e["padding-right"])+mn(e.width)},getHeight:function(t){var e=getComputedStyle(t);return mn(e["border-top-width"])+mn(e["border-bottom-width"])+mn(e["padding-top"])+mn(e["padding-bottom"])+mn(e.height)},getOffset:function(t){var e=t,n={left:0,top:0};if(e.offsetParent)do n.left+=e.offsetLeft,n.top+=e.offsetTop,e=e.offsetParent;while(e);return n},isActive:function(t){return t===document.activeElement&&(t.type||t.href)}},hf=function(r){mi(t,r);function t(e,n){fn(this,t);var i=gi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),s=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return z.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return pn(t,[{key:"setValue",value:function(n){var i=di(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),di(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(Vi),My=function(r){mi(t,r);function t(e,n,i){fn(this,t);var s=gi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),o=i,a=s;if(s.__select=document.createElement("select"),et.isArray(o)){var l={};et.each(o,function(h){l[h]=h}),o=l}return et.each(o,function(h,c){var u=document.createElement("option");u.innerHTML=c,u.setAttribute("value",h),a.__select.appendChild(u)}),s.updateDisplay(),z.bind(s.__select,"change",function(){var h=this.options[this.selectedIndex].value;a.setValue(h)}),s.domElement.appendChild(s.__select),s}return pn(t,[{key:"setValue",value:function(n){var i=di(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return z.isActive(this.__select)?this:(this.__select.value=this.getValue(),di(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this))}}]),t}(Vi),by=function(r){mi(t,r);function t(e,n){fn(this,t);var i=gi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),s=i;function o(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),z.bind(i.__input,"keyup",o),z.bind(i.__input,"change",o),z.bind(i.__input,"blur",a),z.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return pn(t,[{key:"updateDisplay",value:function(){return z.isActive(this.__input)||(this.__input.value=this.getValue()),di(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(Vi);function Zu(r){var t=r.toString();return t.indexOf(".")>-1?t.length-t.indexOf(".")-1:0}var cf=function(r){mi(t,r);function t(e,n,i){fn(this,t);var s=gi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),o=i||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,et.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=Zu(s.__impliedStep),s}return pn(t,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),di(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Zu(n),this}}]),t}(Vi);function Sy(r,t){var e=Math.pow(10,t);return Math.round(r*e)/e}var Ya=function(r){mi(t,r);function t(e,n,i){fn(this,t);var s=gi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,i));s.__truncationSuspended=!1;var o=s,a=void 0;function l(){var g=parseFloat(o.__input.value);et.isNaN(g)||o.setValue(g)}function h(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function c(){h()}function u(g){var _=a-g.clientY;o.setValue(o.getValue()+_*o.__impliedStep),a=g.clientY}function d(){z.unbind(window,"mousemove",u),z.unbind(window,"mouseup",d),h()}function f(g){z.bind(window,"mousemove",u),z.bind(window,"mouseup",d),a=g.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),z.bind(s.__input,"change",l),z.bind(s.__input,"blur",c),z.bind(s.__input,"mousedown",f),z.bind(s.__input,"keydown",function(g){g.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,h())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return pn(t,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():Sy(this.getValue(),this.__precision),di(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(cf);function Ku(r,t,e,n,i){return n+(i-n)*((r-t)/(e-t))}var zl=function(r){mi(t,r);function t(e,n,i,s,o){fn(this,t);var a=gi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,{min:i,max:s,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),z.bind(a.__background,"mousedown",h),z.bind(a.__background,"touchstart",d),z.addClass(a.__background,"slider"),z.addClass(a.__foreground,"slider-fg");function h(_){document.activeElement.blur(),z.bind(window,"mousemove",c),z.bind(window,"mouseup",u),c(_)}function c(_){_.preventDefault();var p=l.__background.getBoundingClientRect();return l.setValue(Ku(_.clientX,p.left,p.right,l.__min,l.__max)),!1}function u(){z.unbind(window,"mousemove",c),z.unbind(window,"mouseup",u),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function d(_){_.touches.length===1&&(z.bind(window,"touchmove",f),z.bind(window,"touchend",g),f(_))}function f(_){var p=_.touches[0].clientX,m=l.__background.getBoundingClientRect();l.setValue(Ku(p,m.left,m.right,l.__min,l.__max))}function g(){z.unbind(window,"touchmove",f),z.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return pn(t,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",di(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(cf),uf=function(r){mi(t,r);function t(e,n,i){fn(this,t);var s=gi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=i===void 0?"Fire":i,z.bind(s.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),z.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return pn(t,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),t}(Vi),Bl=function(r){mi(t,r);function t(e,n){fn(this,t);var i=gi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));i.__color=new Te(i.getValue()),i.__temp=new Te(0);var s=i;i.domElement=document.createElement("div"),z.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",z.bind(i.__input,"keydown",function(_){_.keyCode===13&&u.call(this)}),z.bind(i.__input,"blur",u),z.bind(i.__selector,"mousedown",function(){z.addClass(this,"drag").bind(window,"mouseup",function(){z.removeClass(s.__selector,"drag")})}),z.bind(i.__selector,"touchstart",function(){z.addClass(this,"drag").bind(window,"touchend",function(){z.removeClass(s.__selector,"drag")})});var o=document.createElement("div");et.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),et.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),et.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),et.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),et.extend(o.style,{width:"100%",height:"100%",background:"none"}),Ju(o,"top","rgba(0,0,0,0)","#000"),et.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),Ey(i.__hue_field),et.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),z.bind(i.__saturation_field,"mousedown",a),z.bind(i.__saturation_field,"touchstart",a),z.bind(i.__field_knob,"mousedown",a),z.bind(i.__field_knob,"touchstart",a),z.bind(i.__hue_field,"mousedown",l),z.bind(i.__hue_field,"touchstart",l);function a(_){f(_),z.bind(window,"mousemove",f),z.bind(window,"touchmove",f),z.bind(window,"mouseup",h),z.bind(window,"touchend",h)}function l(_){g(_),z.bind(window,"mousemove",g),z.bind(window,"touchmove",g),z.bind(window,"mouseup",c),z.bind(window,"touchend",c)}function h(){z.unbind(window,"mousemove",f),z.unbind(window,"touchmove",f),z.unbind(window,"mouseup",h),z.unbind(window,"touchend",h),d()}function c(){z.unbind(window,"mousemove",g),z.unbind(window,"touchmove",g),z.unbind(window,"mouseup",c),z.unbind(window,"touchend",c),d()}function u(){var _=Ol(this.value);_!==!1?(s.__color.__state=_,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function d(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function f(_){_.type.indexOf("touch")===-1&&_.preventDefault();var p=s.__saturation_field.getBoundingClientRect(),m=_.touches&&_.touches[0]||_,S=m.clientX,x=m.clientY,b=(S-p.left)/(p.right-p.left),R=1-(x-p.top)/(p.bottom-p.top);return R>1?R=1:R<0&&(R=0),b>1?b=1:b<0&&(b=0),s.__color.v=R,s.__color.s=b,s.setValue(s.__color.toOriginal()),!1}function g(_){_.type.indexOf("touch")===-1&&_.preventDefault();var p=s.__hue_field.getBoundingClientRect(),m=_.touches&&_.touches[0]||_,S=m.clientY,x=1-(S-p.top)/(p.bottom-p.top);return x>1?x=1:x<0&&(x=0),s.__color.h=x*360,s.setValue(s.__color.toOriginal()),!1}return i}return pn(t,[{key:"updateDisplay",value:function(){var n=Ol(this.getValue());if(n!==!1){var i=!1;et.each(Te.COMPONENTS,function(a){if(!et.isUndefined(n[a])&&!et.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&et.extend(this.__color.__state,n)}et.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;et.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Ju(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),et.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),t}(Vi),wy=["-moz-","-o-","-webkit-","-ms-",""];function Ju(r,t,e,n){r.style.background="",et.each(wy,function(i){r.style.cssText+="background: "+i+"linear-gradient("+t+", "+e+" 0%, "+n+" 100%); "})}function Ey(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var Ay={load:function(t,e){var n=e||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=t,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(t,e){var n=e||document,i=document.createElement("style");i.type="text/css",i.innerHTML=t;var s=n.getElementsByTagName("head")[0];try{s.appendChild(i)}catch{}}},Ty=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,Cy=function(t,e){var n=t[e];return et.isArray(arguments[2])||et.isObject(arguments[2])?new My(t,e,arguments[2]):et.isNumber(n)?et.isNumber(arguments[2])&&et.isNumber(arguments[3])?et.isNumber(arguments[4])?new zl(t,e,arguments[2],arguments[3],arguments[4]):new zl(t,e,arguments[2],arguments[3]):et.isNumber(arguments[4])?new Ya(t,e,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Ya(t,e,{min:arguments[2],max:arguments[3]}):et.isString(n)?new by(t,e):et.isFunction(n)?new uf(t,e,""):et.isBoolean(n)?new hf(t,e):null};function Ry(r){setTimeout(r,1e3/60)}var Py=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||Ry,Ly=function(){function r(){fn(this,r),this.backgroundElement=document.createElement("div"),et.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),z.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),et.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var t=this;z.bind(this.backgroundElement,"click",function(){t.hide()})}return pn(r,[{key:"show",value:function(){var e=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),et.defer(function(){e.backgroundElement.style.opacity=1,e.domElement.style.opacity=1,e.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var e=this,n=function i(){e.domElement.style.display="none",e.backgroundElement.style.display="none",z.unbind(e.domElement,"webkitTransitionEnd",i),z.unbind(e.domElement,"transitionend",i),z.unbind(e.domElement,"oTransitionEnd",i)};z.bind(this.domElement,"webkitTransitionEnd",n),z.bind(this.domElement,"transitionend",n),z.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-z.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-z.getHeight(this.domElement)/2+"px"}}]),r}(),Dy=gy(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);Ay.inject(Dy);var Qu="dg",td=72,ed=20,_r="Default",rr=function(){try{return!!window.localStorage}catch{return!1}}(),ur=void 0,nd=!0,ws=void 0,yl=!1,df=[],ne=function r(t){var e=this,n=t||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),z.addClass(this.domElement,Qu),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=et.defaults(n,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),n=et.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),et.isUndefined(n.load)?n.load={preset:_r}:n.preset&&(n.load.preset=n.preset),et.isUndefined(n.parent)&&n.hideable&&df.push(this),n.resizable=et.isUndefined(n.parent)&&n.resizable,n.autoPlace&&et.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=rr&&localStorage.getItem(Es(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return e.parent?e.getRoot().preset:n.load.preset},set:function(d){e.parent?e.getRoot().preset=d:n.load.preset=d,Ny(this),e.revert()}},width:{get:function(){return n.width},set:function(d){n.width=d,Vl(e,d)}},name:{get:function(){return n.name},set:function(d){n.name=d,o&&(o.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(d){n.closed=d,n.closed?z.addClass(e.__ul,r.CLASS_CLOSED):z.removeClass(e.__ul,r.CLASS_CLOSED),this.onResize(),e.__closeButton&&(e.__closeButton.innerHTML=d?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(d){rr&&(i=d,d?z.bind(window,"unload",s):z.unbind(window,"unload",s),localStorage.setItem(Es(e,"isLocal"),d))}}}),et.isUndefined(n.parent)){if(this.closed=n.closed||!1,z.addClass(this.domElement,r.CLASS_MAIN),z.makeSelectable(this.domElement,!1),rr&&i){e.useLocalStorage=!0;var a=localStorage.getItem(Es(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,z.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),n.closeOnTop?(z.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(z.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),z.bind(this.__closeButton,"click",function(){e.closed=!e.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);z.addClass(l,"controller-name"),o=dh(e,l);var h=function(d){return d.preventDefault(),e.closed=!e.closed,!1};z.addClass(this.__ul,r.CLASS_CLOSED),z.addClass(o,"title"),z.bind(o,"click",h),n.closed||(this.closed=!1)}n.autoPlace&&(et.isUndefined(n.parent)&&(nd&&(ws=document.createElement("div"),z.addClass(ws,Qu),z.addClass(ws,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(ws),nd=!1),ws.appendChild(this.domElement),z.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||Vl(e,n.width)),this.__resizeHandler=function(){e.onResizeDebounced()},z.bind(window,"resize",this.__resizeHandler),z.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),z.bind(this.__ul,"transitionend",this.__resizeHandler),z.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&Uy(this),s=function(){rr&&localStorage.getItem(Es(e,"isLocal"))==="true"&&localStorage.setItem(Es(e,"gui"),JSON.stringify(e.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function c(){var u=e.getRoot();u.width+=1,et.defer(function(){u.width-=1})}n.parent||c()};ne.toggleHide=function(){yl=!yl,et.each(df,function(r){r.domElement.style.display=yl?"none":""})};ne.CLASS_AUTO_PLACE="a";ne.CLASS_AUTO_PLACE_CONTAINER="ac";ne.CLASS_MAIN="main";ne.CLASS_CONTROLLER_ROW="cr";ne.CLASS_TOO_TALL="taller-than-window";ne.CLASS_CLOSED="closed";ne.CLASS_CLOSE_BUTTON="close-button";ne.CLASS_CLOSE_TOP="close-top";ne.CLASS_CLOSE_BOTTOM="close-bottom";ne.CLASS_DRAG="drag";ne.DEFAULT_WIDTH=245;ne.TEXT_CLOSED="Close Controls";ne.TEXT_OPEN="Open Controls";ne._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===td||r.keyCode===td)&&ne.toggleHide()};z.bind(window,"keydown",ne._keydownHandler,!1);et.extend(ne.prototype,{add:function(t,e){return dr(this,t,e,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(t,e){return dr(this,t,e,{color:!0})},remove:function(t){this.__ul.removeChild(t.__li),this.__controllers.splice(this.__controllers.indexOf(t),1);var e=this;et.defer(function(){e.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&ws.removeChild(this.domElement);var t=this;et.each(this.__folders,function(e){t.removeFolder(e)}),z.unbind(window,"keydown",ne._keydownHandler,!1),id(this)},addFolder:function(t){if(this.__folders[t]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+t+'"');var e={name:t,parent:this};e.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[t]&&(e.closed=this.load.folders[t].closed,e.load=this.load.folders[t]);var n=new ne(e);this.__folders[t]=n;var i=dh(this,n.domElement);return z.addClass(i,"folder"),n},removeFolder:function(t){this.__ul.removeChild(t.domElement.parentElement),delete this.__folders[t.name],this.load&&this.load.folders&&this.load.folders[t.name]&&delete this.load.folders[t.name],id(t);var e=this;et.each(t.__folders,function(n){t.removeFolder(n)}),et.defer(function(){e.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var t=this.getRoot();if(t.scrollable){var e=z.getOffset(t.__ul).top,n=0;et.each(t.__ul.childNodes,function(i){t.autoPlace&&i===t.__save_row||(n+=z.getHeight(i))}),window.innerHeight-e-ed<n?(z.addClass(t.domElement,ne.CLASS_TOO_TALL),t.__ul.style.height=window.innerHeight-e-ed+"px"):(z.removeClass(t.domElement,ne.CLASS_TOO_TALL),t.__ul.style.height="auto")}t.__resize_handle&&et.defer(function(){t.__resize_handle.style.height=t.__ul.offsetHeight+"px"}),t.__closeButton&&(t.__closeButton.style.width=t.width+"px")},onResizeDebounced:et.debounce(function(){this.onResize()},50),remember:function(){if(et.isUndefined(ur)&&(ur=new Ly,ur.domElement.innerHTML=Ty),this.parent)throw new Error("You can only call remember on a top level GUI.");var t=this;et.each(Array.prototype.slice.call(arguments),function(e){t.__rememberedObjects.length===0&&Fy(t),t.__rememberedObjects.indexOf(e)===-1&&t.__rememberedObjects.push(e)}),this.autoPlace&&Vl(this,this.width)},getRoot:function(){for(var t=this;t.parent;)t=t.parent;return t},getSaveObject:function(){var t=this.load;return t.closed=this.closed,this.__rememberedObjects.length>0&&(t.preset=this.preset,t.remembered||(t.remembered={}),t.remembered[this.preset]=Ta(this)),t.folders={},et.each(this.__folders,function(e,n){t.folders[n]=e.getSaveObject()}),t},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Ta(this),kl(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(t){this.load.remembered||(this.load.remembered={},this.load.remembered[_r]=Ta(this,!0)),this.load.remembered[t]=Ta(this),this.preset=t,Hl(this,t,!0),this.saveToLocalStorageIfPossible()},revert:function(t){et.each(this.__controllers,function(e){this.getRoot().load.remembered?ff(t||this.getRoot(),e):e.setValue(e.initialValue),e.__onFinishChange&&e.__onFinishChange.call(e,e.getValue())},this),et.each(this.__folders,function(e){e.revert(e)}),t||kl(this.getRoot(),!1)},listen:function(t){var e=this.__listening.length===0;this.__listening.push(t),e&&pf(this.__listening)},updateDisplay:function(){et.each(this.__controllers,function(t){t.updateDisplay()}),et.each(this.__folders,function(t){t.updateDisplay()})}});function dh(r,t,e){var n=document.createElement("li");return t&&n.appendChild(t),e?r.__ul.insertBefore(n,e):r.__ul.appendChild(n),r.onResize(),n}function id(r){z.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&z.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function kl(r,t){var e=r.__preset_select[r.__preset_select.selectedIndex];t?e.innerHTML=e.value+"*":e.innerHTML=e.value}function Iy(r,t,e){if(e.__li=t,e.__gui=r,et.extend(e,{options:function(o){if(arguments.length>1){var a=e.__li.nextElementSibling;return e.remove(),dr(r,e.object,e.property,{before:a,factoryArgs:[et.toArray(arguments)]})}if(et.isArray(o)||et.isObject(o)){var l=e.__li.nextElementSibling;return e.remove(),dr(r,e.object,e.property,{before:l,factoryArgs:[o]})}},name:function(o){return e.__li.firstElementChild.firstElementChild.innerHTML=o,e},listen:function(){return e.__gui.listen(e),e},remove:function(){return e.__gui.remove(e),e}}),e instanceof zl){var n=new Ya(e.object,e.property,{min:e.__min,max:e.__max,step:e.__step});et.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=e[s],a=n[s];e[s]=n[s]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(n,l),o.apply(e,l)}}),z.addClass(t,"has-slider"),e.domElement.insertBefore(n.domElement,e.domElement.firstElementChild)}else if(e instanceof Ya){var i=function(o){if(et.isNumber(e.__min)&&et.isNumber(e.__max)){var a=e.__li.firstElementChild.firstElementChild.innerHTML,l=e.__gui.__listening.indexOf(e)>-1;e.remove();var h=dr(r,e.object,e.property,{before:e.__li.nextElementSibling,factoryArgs:[e.__min,e.__max,e.__step]});return h.name(a),l&&h.listen(),h}return o};e.min=et.compose(i,e.min),e.max=et.compose(i,e.max)}else e instanceof hf?(z.bind(t,"click",function(){z.fakeEvent(e.__checkbox,"click")}),z.bind(e.__checkbox,"click",function(s){s.stopPropagation()})):e instanceof uf?(z.bind(t,"click",function(){z.fakeEvent(e.__button,"click")}),z.bind(t,"mouseover",function(){z.addClass(e.__button,"hover")}),z.bind(t,"mouseout",function(){z.removeClass(e.__button,"hover")})):e instanceof Bl&&(z.addClass(t,"color"),e.updateDisplay=et.compose(function(s){return t.style.borderLeftColor=e.__color.toString(),s},e.updateDisplay),e.updateDisplay());e.setValue=et.compose(function(s){return r.getRoot().__preset_select&&e.isModified()&&kl(r.getRoot(),!0),s},e.setValue)}function ff(r,t){var e=r.getRoot(),n=e.__rememberedObjects.indexOf(t.object);if(n!==-1){var i=e.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},e.__rememberedObjectIndecesToControllers[n]=i),i[t.property]=t,e.load&&e.load.remembered){var s=e.load.remembered,o=void 0;if(s[r.preset])o=s[r.preset];else if(s[_r])o=s[_r];else return;if(o[n]&&o[n][t.property]!==void 0){var a=o[n][t.property];t.initialValue=a,t.setValue(a)}}}}function dr(r,t,e,n){if(t[e]===void 0)throw new Error('Object "'+t+'" has no property "'+e+'"');var i=void 0;if(n.color)i=new Bl(t,e);else{var s=[t,e].concat(n.factoryArgs);i=Cy.apply(r,s)}n.before instanceof Vi&&(n.before=n.before.__li),ff(r,i),z.addClass(i.domElement,"c");var o=document.createElement("span");z.addClass(o,"property-name"),o.innerHTML=i.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(i.domElement);var l=dh(r,a,n.before);return z.addClass(l,ne.CLASS_CONTROLLER_ROW),i instanceof Bl?z.addClass(l,"color"):z.addClass(l,xy(i.getValue())),Iy(r,l,i),r.__controllers.push(i),i}function Es(r,t){return document.location.href+"."+t}function Hl(r,t,e){var n=document.createElement("option");n.innerHTML=t,n.value=t,r.__preset_select.appendChild(n),e&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function sd(r,t){t.style.display=r.useLocalStorage?"block":"none"}function Fy(r){var t=r.__save_row=document.createElement("li");z.addClass(r.domElement,"has-save"),r.__ul.insertBefore(t,r.__ul.firstChild),z.addClass(t,"save-row");var e=document.createElement("span");e.innerHTML="&nbsp;",z.addClass(e,"button gears");var n=document.createElement("span");n.innerHTML="Save",z.addClass(n,"button"),z.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",z.addClass(i,"button"),z.addClass(i,"save-as");var s=document.createElement("span");s.innerHTML="Revert",z.addClass(s,"button"),z.addClass(s,"revert");var o=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?et.each(r.load.remembered,function(u,d){Hl(r,d,d===r.preset)}):Hl(r,_r,!1),z.bind(o,"change",function(){for(var u=0;u<r.__preset_select.length;u++)r.__preset_select[u].innerHTML=r.__preset_select[u].value;r.preset=this.value}),t.appendChild(o),t.appendChild(e),t.appendChild(n),t.appendChild(i),t.appendChild(s),rr){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),h=document.getElementById("dg-save-locally");h.style.display="block",localStorage.getItem(Es(r,"isLocal"))==="true"&&l.setAttribute("checked","checked"),sd(r,a),z.bind(l,"change",function(){r.useLocalStorage=!r.useLocalStorage,sd(r,a)})}var c=document.getElementById("dg-new-constructor");z.bind(c,"keydown",function(u){u.metaKey&&(u.which===67||u.keyCode===67)&&ur.hide()}),z.bind(e,"click",function(){c.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),ur.show(),c.focus(),c.select()}),z.bind(n,"click",function(){r.save()}),z.bind(i,"click",function(){var u=prompt("Enter a new preset name.");u&&r.saveAs(u)}),z.bind(s,"click",function(){r.revert()})}function Uy(r){var t=void 0;r.__resize_handle=document.createElement("div"),et.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function e(s){return s.preventDefault(),r.width+=t-s.clientX,r.onResize(),t=s.clientX,!1}function n(){z.removeClass(r.__closeButton,ne.CLASS_DRAG),z.unbind(window,"mousemove",e),z.unbind(window,"mouseup",n)}function i(s){return s.preventDefault(),t=s.clientX,z.addClass(r.__closeButton,ne.CLASS_DRAG),z.bind(window,"mousemove",e),z.bind(window,"mouseup",n),!1}z.bind(r.__resize_handle,"mousedown",i),z.bind(r.__closeButton,"mousedown",i),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function Vl(r,t){r.domElement.style.width=t+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=t+"px"),r.__closeButton&&(r.__closeButton.style.width=t+"px")}function Ta(r,t){var e={};return et.each(r.__rememberedObjects,function(n,i){var s={},o=r.__rememberedObjectIndecesToControllers[i];et.each(o,function(a,l){s[l]=t?a.initialValue:a.getValue()}),e[i]=s}),e}function Ny(r){for(var t=0;t<r.__preset_select.length;t++)r.__preset_select[t].value===r.preset&&(r.__preset_select.selectedIndex=t)}function pf(r){r.length!==0&&Py.call(window,function(){pf(r)}),et.each(r,function(t){t.updateDisplay()})}var Oy=ne;const Fs={TrainFront:"TrainFront",TrainBack:"TrainBack",TrainSide:"TrainSide"},ti=400;class zy extends me{constructor(){super();const t=new Go;t.add(new Jt(new v(-2,.3,2),new v(-2,.3,2.5),new v(-2,.4,3))),t.add(new Jt(new v(-2,.4,3),new v(-2,1,5),new v(-2,5,6))),t.add(new Jt(new v(-2,5,6),new v(-2,6,6.2),new v(-2,6,7))),t.add(new Jt(new v(-2,6,7),new v(-2,6,7.5),new v(-2,5,8))),t.add(new Jt(new v(-2,5,8),new v(-2,3.75,8.625),new v(-2,2.5,9.25))),t.add(new Jt(new v(-2,2.5,9.25),new v(-2,2.1,9.5),new v(-2,2.1,9.8))),t.add(new Jt(new v(-2,2.1,9.8),new v(-2.1,2.1,10.3),new v(-1.7,2.08,10.5))),t.add(new Jt(new v(-1.7,2.08,10.5),new v(-.6,2.05,11.2),new v(-.4,2,9.8))),t.add(new Jt(new v(-.4,2,9.8),new v(-.3,1.9,8.9),new v(-1,1.7,8.7))),t.add(new Jt(new v(-1,1.7,8.7),new v(-1.8,1.5,8.6),new v(-1.5,1.6,9.7))),t.add(new Jt(new v(-1.5,1.6,9.7),new v(-.95,1.6,11.4),new v(0,1.4,9.9))),t.add(new Jt(new v(0,1.4,9.9),new v(.5,1.3,9.2),new v(.3,1.2,8))),t.add(new Ss(new v(.3,1.2,8),new v(-.2,1.1,6.3),new v(-2.3,1.1,8.2),new v(-4.2,1,6.5))),t.add(new Jt(new v(-4.2,1,6.5),new v(-4.9,.9,5.8),new v(-4.8,.6,4.8))),t.add(new Jt(new v(-4.8,.6,4.8),new v(-4.7,.25,3.1),new v(-4.8,1.8,2.7))),t.add(new Jt(new v(-4.8,1.8,2.7),new v(-4.9,3.2,2.4),new v(-5,3.3,3.6))),t.add(new Jt(new v(-5,3.3,3.6),new v(-5.1,3.35,4.6),new v(-5.3,2.3,4.9))),t.add(new Jt(new v(-5.3,2.3,4.9),new v(-5.5,1.25,5.2),new v(-5.3,.8,4.1))),t.add(new Jt(new v(-5.3,.8,4.1),new v(-5.2,.5,3.5),new v(-5.1,.5,3))),t.add(new Jt(new v(-5.1,.5,3),new v(-4.9,.45,2),new v(-4.8,.4,1))),t.add(new Jt(new v(-4.8,.4,1),new v(-4.3,.35,-2.2),new v(-3.3,.3,-2))),t.add(new Jt(new v(-3.3,.3,-2),new v(-2,.27,-1.5),new v(-2,.3,2))),t.closePath(),t.arcLengthDivisions=800,t.updateArcLengths();let e=t.computeFrenetFrames(ti,!0);this.railCurve=t,this.frenetFrames=e,this.rcMesh=this.createRailsMesh(t,e),this.createColumns(this.railCurve,1,e),this.add(this.rcMesh),this.scaledTunnel=this.buildScaledTunnel(),this.scaledTunnel.position.set(-4.8,.5,1.1),this.scaledTunnel.rotation.y=-Math.PI/20,this.scaledTunnel.rotation.x=-.045,this.add(this.scaledTunnel),this.twistedTunnel=this.buildTwistedTunnel(),this.twistedTunnel.position.set(.07,1.25,7.5),this.twistedTunnel.rotation.y=Math.PI/8,this.twistedTunnel.rotation.x=-.08,this.add(this.twistedTunnel),this.helpers={normals:[],tangents:[],binormals:[]},this.traverse(n=>{n.castShadow=!0})}addTrain(t){this.train=t,this.train.matrixAutoUpdate=!1,this.trainPosition=0,this.add(t),t.rotation.x=Math.PI,t.position.y+=-.09,this.trainSpeed=1,this.animate()}animate(){this.trainPosition+=this.trainSpeed;let t=this.railCurve.getSpacedPoints(8*ti);this.trainPosition>8*ti&&(this.trainPosition=0);const e=this.frenetFrames,n=t[this.trainPosition],i=this.trainPosition/8;let s=e.normals[Math.floor(i)].clone(),o=e.binormals[Math.floor(i)].clone(),a=e.tangents[Math.floor(i)].clone();s.lerp(e.normals[Math.ceil(i)],i-Math.floor(i)),o.lerp(e.binormals[Math.ceil(i)],i-Math.floor(i)),a.lerp(e.tangents[Math.ceil(i)],i-Math.floor(i));let l=new qt;l.makeRotationX(Math.PI);let h=new qt;h.makeScale(.1,.1,.1);let c=new qt;c.set(s.x,o.x,a.x,n.x+.1*-o.x,s.y,o.y,a.y,n.y+.1*-o.y,s.z,o.z,a.z,n.z+.1*-o.z,0,0,0,1);let u=this.getObjectByName(Fs.TrainFront),d=this.getObjectByName(Fs.TrainBack),f=this.getObjectByName(Fs.TrainSide);u&&d&&f&&this.animateCameras(u,d,f,s,o,a,n),l.multiply(h),c.multiply(l),this.train.matrix=c}animateCameras(t,e,n,i,s,o,a){t.matrixAutoUpdate=!1,e.matrixAutoUpdate=!1,n.matrixAutoUpdate=!1;let l=new qt;l.makeRotationX(Math.PI);let h=new qt,c=h.clone(),u=h.clone();h.makeTranslation(0,.01,-.01),c.makeRotationZ(Math.PI),u.makeRotationFromEuler(new bn(-.65,Math.PI/2,Math.PI,"ZYX"));let d=new qt;d.set(i.x,s.x,o.x,a.x+.15*-s.x,i.y,s.y,o.y,a.y+.15*-s.y,i.z,s.z,o.z,a.z+.15*-s.z,0,0,0,1);let f=d.clone(),g=d.clone();d.multiply(l),d.multiply(h);let _=new qt,p=_.clone();_.makeTranslation(0,.025,-.08),p.makeTranslation(-.04,.005,.25),f.multiply(c),f.multiply(_),g.multiply(u),g.multiply(p),t.matrix=d,e.matrix=f,n.matrix=g}wireframe(t){this.rcMesh.material.wireframe=t,this.rcMesh.material.needsUpdate=!0}flatShading(t){this.rcMesh.material.flatShading=t,this.rcMesh.material.needsUpdate=!0}drawComponents(t,e,n,i,s,o=!1){for(let a=0;a<t.length;a++){let l=new Nt;o&&l.set(1,0,0,0,0,0,0,0,1);const h=new v(t[a].x,t[a].y,t[a].z);h.applyMatrix3(l),h.normalize();const c=1,u=new wv(h,this.railCurve.getPointAt(a/(ti+1)),c,n);s.push(u),e.add(u)}}hideComponents(t,e){for(let n=0;n<t.length;n++)e.remove(t[n]);t.length=0}drawNormals(t){this.helpers.normals.length==0&&this.drawComponents(this.frenetFrames.normals,t,65280,this.railCurve,this.helpers.normals,!0)}hideNormals(t){this.hideComponents(this.helpers.normals,t)}drawTangents(t){this.helpers.tangents.length==0&&this.drawComponents(this.frenetFrames.tangents,t,16711680,this.railCurve,this.helpers.tangents)}hideTangents(t){this.hideComponents(this.helpers.tangents,t)}drawBinormals(t){this.helpers.binormals.length==0&&this.drawComponents(this.frenetFrames.binormals,t,255,this.railCurve,this.helpers.binormals)}hideBinormals(t){this.hideComponents(this.helpers.binormals,t)}getTrackShape(t){let e=new Go;e.autoClose=!1;const n=-.178,i=.16,s=1e-4;return e.add(new Jt(new v(-n-.178,i-.335,s),new v(-n-.158,i-.34,s),new v(-n-.135,i-.318,s))),e.add(new tn(new v(-n-.135,i-.318,s),new v(-n-.027,i-.188,s))),e.add(new Jt(new v(-n-.027,i-.188,s),new v(-n-.018,i-.18,s),new v(-n-.006,i-.173,s))),e.add(new tn(new v(-n-.006,i-.173,s),new v(-n+.017,i-.168,s))),e.add(new Ss(new v(-n+.017,i-.168,s),new v(-n+.028,i-.16,s),new v(-n+.028,i-.15,s),new v(-n+.028,i-.145,s))),e.add(new tn(new v(-n+.028,i-.145,s),new v(-n+.028,i-.03,s))),e.add(new Jt(new v(-n+.028,i-.03,s),new v(-n+.028,i,s),new v(-n+.01,i,s))),e.add(new tn(new v(-n+.01,i,s),new v(-n-.008,i,s))),e.add(new tn(new v(-n-.008,i,s),new v(-n-.008,i-.08,s))),e.add(new Ss(new v(-n-.008,i-.08,s),new v(-(n+.08),i-.08,s),new v(-(n+.11),i-.148,s),new v(-(n+.174),i-.148,s))),e.add(new Ss(new v(n+.184,i-.148,s),new v(n+.11,i-.148,s),new v(n+.08,i-.08,s),new v(n,i-.08,s))),e.add(new tn(new v(n,i-.08,s),new v(n,i,s))),e.add(new tn(new v(n,i,s),new v(n-.02,i,s))),e.add(new Jt(new v(n-.02,i,s),new v(n-.034,i,s),new v(n-.034,i-.03,s))),e.add(new tn(new v(n-.034,i-.03,s),new v(n-.034,i-.145,s))),e.add(new Ss(new v(n-.034,i-.145,s),new v(n-.034,i-.15,s),new v(n-.034,i-.16,s),new v(n-.02,i-.168,s))),e.add(new tn(new v(n-.02,i-.168,s),new v(n+.005,i-.173,s))),e.add(new Jt(new v(n+.005,i-.173,s),new v(n+.018,i-.18,s),new v(n+.024,i-.188,s))),e.add(new tn(new v(n+.024,i-.188,s),new v(n+.142,i-.318,s))),e.add(new Jt(new v(n+.142,i-.318,s),new v(n+.16,i-.335,s),new v(n+.178,i-.335,s))),e}createRailsMesh(t,e){let n=this.getTrackShape(),i=function(l,h,c){let u=new Nt;u.set(1,0,0,0,0,0,0,0,1);const d=new qt,f=new qt,g=new qt;f.makeScale(.5,.75,.75),g.makeRotationZ(Math.PI),c.copy(n.getPointAt(l));let _=t.getPointAt(h),p=Math.floor(ti*h);h==ti&&(p=0),c.applyMatrix4(f),c.applyMatrix4(g),e.normals[p].applyMatrix3(u),e.normals[p].normalize(),e.binormals[p].crossVectors(e.tangents[p],e.normals[p]),e.binormals[p].normalize(),d.set(e.normals[p].x,e.binormals[p].x,e.tangents[p].x,_.x,e.normals[p].y,e.binormals[p].y,e.tangents[p].y,_.y,e.normals[p].z,e.binormals[p].z,e.tangents[p].z,_.z,0,0,0,1),c.applyMatrix4(d)};const s=new vn(i,20,ti-1);s.computeVertexNormals();const o=new Ae({color:16777215,flatShading:!1,wireframe:!1});return new te(s,o)}removeInvalidRayIntersections(t,e){let n=[];for(let i=0;i<t.length;i++)t[i].distance<e&&n.push(t[i]);return n}createColumns(t,e,n){const s=new Va(0,0,.05,.05,0,2*Math.PI,!1),o=t.getSpacedPoints(ti);let a=o.map(function(c){let u=c.clone();return u.y=0,u}),l=0,h=0;for(let c=1;c<a.length;c++)if(l+=a[c-1].distanceTo(a[c]),h+=o[c-1].distanceTo(o[c]),l>=e){let u=l-e,d=h-e,f=a[c-1].lerp(a[c],u),g=o[c-1].lerp(o[c],d),_=n.normals[c-1].lerp(n.normals[c],d),p=n.tangents[c-1].lerp(n.tangents[c],d),m=n.binormals[c-1].lerp(n.binormals[c],d);const S=new yv;S.set(f,new v(0,1,0));const x=S.intersectObject(this.rcMesh);if(this.removeInvalidRayIntersections(x,g.y).length<=1&&m.y<0){let R=new Nt;R.set(1,0,0,0,0,0,0,0,1),_.applyMatrix3(R),_.normalize();const A=new ui;A.setFromAxisAngle(_,Math.PI/2*p.y),new qt().set(1-m.x*m.x,-m.x*m.y,-m.x*m.z,0,-m.x*m.y,1-m.y*m.y,-m.y*m.z,0,-m.x*m.z,-m.y*m.z,1-m.z*m.z,0,0,0,0,1),new qt().set(1,0,0,f.x,0,1,0,g.y,0,0,1,f.z,0,0,0,1);let X=g.y;for(let L=0;L<8;L++){let V=new v(f.x+Math.cos(Math.PI/4*L)*.05,0,f.y+Math.sin(Math.PI/4*L));S.set(V,new v(0,1,0));const O=this.removeInvalidRayIntersections(x,g.y);X>O[0].distance&&(X=O[0].distance)}let y=function(L,V,O){let J=new v(s.getPointAt(L).x,0,s.getPointAt(L).y);if(O.set(J.x,J.y,J.z),V<.1&&(p.y<-.55||p.y>.55)){let G=O.clone();G.applyQuaternion(A),O.y+=X+G.y+.1}else O.y+=g.y*(1-V);return O};const T=new vn(y,32,3);T.computeVertexNormals();const j=new Ae({color:13882323,flatShading:!1,wireframe:!1}),q=new te(T,j);q.name="Column",q.position.set(f.x,0,f.z),this.add(q)}l=0,h=0}}getAllColumns(){return this.getObjectsByProperty("name","Column")}buildScaledTunnel(){const e=new Va(0,0,.2,.2,0,2*Math.PI,!0,0),n=new qt;let i=new Go;i.add(new tn(new v(0,0,-.45),new v(0,0,.45)));let s=function(h,c,u){u.copy(e.getPointAt(h));let d=i.getPointAt(c);u.z=d.z;let f=.5*Math.abs(Math.cos(5*Math.PI*c))+1;n.makeScale(f,f,1),u.applyMatrix4(n)};const o=new vn(s,16,25),a=new Ae({color:261356,flatShading:!1,side:He});return new te(o,a)}buildTwistedTunnel(){let t=function(s,o,a){const c=new qt;if(c.makeRotationZ(Math.PI*o),s<=.25){a.set(-.2375+1.9*s,-.2375,.85*o),a.applyMatrix4(c);return}if(s<=.5){a.set(.2375,-.2375+1.9*(s-.25),.85*o),a.applyMatrix4(c);return}if(s<=.75){a.set(.2375+(.5-s)*1.9,.2375,.85*o),a.applyMatrix4(c);return}a.set(-.2375,.2375+(.75-s)*1.9,.85*o),a.applyMatrix4(c)};const e=new vn(t,4,50),n=new Ae({color:15569199,flatShading:!1,side:He});return new te(e,n)}}class mf extends me{constructor(t,e,n=new v(0,0,0),i=16091904){super(),this.len=t,this.width=e;const s=.2,o=.2;let a={topA:new v(0,this.len,0),topB:new v(this.len*s,this.len,0),midB:new v(this.len*s,this.len*o,0),midC:new v(this.len,this.len*o,0),botC:new v(this.len,0,0),botA:new v(0,0,0)},l=function(g,_,p,m){return g<=1/6?(p.lerpVectors(a.topA,a.topB,g*6),p.z=_*m.width):g<=1/3?(p.lerpVectors(a.topB,a.midB,(g-1/6)/(1/3-1/6)),p.z=_*m.width):g<=1/2?(p.lerpVectors(a.midB,a.midC,(g-1/3)/(1/2-1/3)),p.z=_*m.width):g<=2/3?(p.lerpVectors(a.midC,a.botC,(g-1/2)/(2/3-1/2)),p.z=_*m.width):g<=5/6?(p.lerpVectors(a.botC,a.botA,(g-2/3)/(5/6-2/3)),p.z=_*m.width):(p.lerpVectors(a.botA,a.topA,(g-5/6)/(1-5/6)),p.z=_*m.width),p};const h=new vn((g,_,p)=>{l(g,_,p,this)},12,10);h.computeVertexNormals(),h.translate(n);const c=new Ae({color:i,wireframe:!1,side:He}),u=new te(h,c);n.clone();let d=this.buildCap(a,kn,n),f=this.buildCap(a,Fe,n);return f.position.z=this.width,u.add(d),u.add(f),u}buildCap(t,e,n){let i=new v,s=new v,o=function(c,u,d,f){return u<.5?(i.lerpVectors(t.topA,t.botA,u*2),s.lerpVectors(t.topB,t.midB,u*2),d.lerpVectors(i,s,c)):(i.lerpVectors(t.botA,t.botC,(u-.5)*2),s.lerpVectors(t.midB,t.midC,(u-.5)*2),d.lerpVectors(i,s,c)),d};const a=new vn((c,u,d)=>{o(c,u,d)},12,10);a.computeVertexNormals(),a.translate(n);const l=new Ae({color:16091904,wireframe:!1,side:e});return new te(a,l)}}class By extends me{constructor(){super();const t=32,e=.4,n=.25,i=.5,s=.25,o=.5,a=this.getPartsDrawingFunction(t,e,n,i,s,o,o),l=new vn(a,t,1),h=new Ae({color:65297,flatShading:!1,wireframe:!1,side:He}),c=new te(l,h);let u=c.clone();u.position.z=-e*2,u.rotation.y=Math.PI;const d=this.getPartsDrawingFunction(t,.8,n,s,i,0,0,!1),f=new vn(d,t,1),g=new Ae({color:65297,flatShading:!1,wireframe:!1,side:He}),_=new te(f,g);_.position.z=-e*2,_.rotation.z=Math.PI/2;const p=this.getCap(n/2,i/2,s/2,32),m=new Ae({color:65297,flatShading:!1,wireframe:!1,side:He}),S=new te(p,m),x=new te(p,m);S.position.z=e,S.rotation.x=Math.PI/2,x.position.z=-e*3,x.rotation.x=-Math.PI/2;const b=new mf(.3,.5);b.position.z=-.45,b.position.y=.17,b.position.x=-.25,b.rotation.y=Math.PI/2;const R=b.clone();R.position.z=-.05,this.add(c),this.add(u),this.add(_),this.add(S),this.add(x),this.add(b),this.add(R)}getPartsDrawingFunction(t,e,n,i,s,o,a,l=!0){const h=(t-4)/4,c=1/t,u=new Nt;return function(f,g,_){f!=0&&f%.25==0?f==.25?(_.x=n*Math.cos(Math.PI/2)+i/2,_.y=n*Math.sin(Math.PI/2)+s/2):f==.5?(_.x=n*Math.cos(Math.PI)+i/2,_.y=n*Math.sin(Math.PI)+s/2):f==.75?(_.x=n*Math.cos(3*Math.PI/2)+i/2,_.y=n*Math.sin(3*Math.PI/2)+s/2):f==1&&(_.x=l?n+i/2:i/2+n,_.y=l?s/2:-s/2):f<=h*c?(_.x=n*Math.cos(Math.PI/2*f/(h*c))+i/2,_.y=n*Math.sin(Math.PI/2*f/(h*c))+s/2):f<.25&&f>h*c?(_.x=n*Math.cos(Math.PI/2*f/.25)+i/2,_.y=n*Math.sin(Math.PI/2*f/.25)+s/2):f>.25&&f<=.25+h*c?(_.x=n*Math.cos(Math.PI/2+Math.PI/2*(f-.25)/(h*c))+i/2,_.y=n*Math.sin(Math.PI/2+Math.PI/2*(f-.25)/(h*c))+s/2):f<.5&&f>.25+h*c?(_.x=n*Math.cos(Math.PI*f/.5)+i/2,_.y=n*Math.sin(Math.PI*f/.5)+s/2):f>.5&&f<=.5+h*c?(_.x=n*Math.cos(Math.PI+Math.PI/2*(f-.5)/(h*c))+i/2,_.y=n*Math.sin(Math.PI+Math.PI/2*(f-.5)/(h*c))+s/2):f<.75&&f>.5+h*c?(_.x=n*Math.cos(1.5*Math.PI*f/.75)+i/2,_.y=n*Math.sin(1.5*Math.PI*f/.75)+s/2):f>.75&&f<=.75+h*c?(_.x=n*Math.cos(1.5*Math.PI+Math.PI/2*(f-.75)/(h*c))+i/2,_.y=n*Math.sin(1.5*Math.PI+Math.PI/2*(f-.75)/(h*c))+s/2):(_.x=n*Math.cos(2*Math.PI*f)+i/2,_.y=n*Math.sin(2*Math.PI*f)+s/2),_.z=e*g,u.makeScale(1-o*g,1-a*g),f>=.25&&f<.5?_.x-=i:f>=.5&&f<.75?(_.x-=i,_.y-=s):f>=.75&&f<1&&(_.y-=s),g>0&&_.applyMatrix3(u)}}buildCap(t,e,n,i,s,o=!1){const l=2*Math.PI/(t.segments-4),h=(t.segments-4)/4;let c=t.positions,u=t.indices,d=t.normals,f=t.uvs;const g=0;c.push(0,n,0),d.push(0,1,0),f.push(1,1);let _=i/2,p=s/2,m=0,S=0;for(let A=0;A<=t.segments+2;A++){S==h+1&&(A/(h+1)==1&&(_-=i),A/(h+1)==2&&(p-=s),A/(h+1)==3&&(_+=i),A/(h+1)==4&&(p+=s),m++,S=0);const w=(A-m)*l,I=e*Math.cos(w)+_,X=e*Math.sin(w)+p;if(c.push(I,n,X),d.push(I,1,X),f.push(0,0),A<=t.segments+2){const y=g,T=g+A+1-m,j=g+A+2-m;u.push(y,j,T)}S++}const x=g,b=g+t.segments,R=1;o?u.push(x,b,R):u.push(x,R,b)}getCap(t,e,n,i){let s=new Ne;const o=[],a=[],l=[],h=[];return this.buildCap({positions:o,indices:a,normals:l,uvs:h,segments:i},t,0,e,n,!1),s.setAttribute("position",new Zt(o,3)),s.setAttribute("normal",new Zt(l,3)),s.setAttribute("uv",new Zt(h,2)),s.setIndex(a),s}}const rd="chair";class ky extends me{constructor(){super(),this.properties={segmentCount:25,baseBigRadius:.18,baseMidRadius:.13,baseLowRadius:.08,baseLength:.5,topWidth:1,topLength:.3,axisRadius:.08,axisLength:1,chainRad:.008,chainLen:.9,chairLen:.12,chairWid:.25,baseColor:3584762,axisColor:11184810,topColor:16091904,chainColor:1381653,stopTime:7500,runTime:2e4,acceleration:1e-4,maxspeed:.02},this.chairRotPosition=0,this.base=this.createBase(),this.axis=this.createAxis(),this.top=this.createTop(),this.chairs=[],this.add(this.base),this.add(this.axis),this.add(this.top);const t=10;for(let e=0;e<t;e++){let n=this.createChainChair();this.chairs.push(n),n.position.x=(this.properties.topWidth-.1)*Math.cos(2*Math.PI*(1-e/t)),n.position.z=-(this.properties.topWidth-.1)*Math.sin(2*Math.PI*(1-e/t)),n.getObjectByName(rd).rotation.y=Math.PI/2,n.position.y+=this.properties.chairLen,n.rotation.y=2*Math.PI*(1-e/t),this.top.add(n)}this.inStoppageTime=!0,this.stoppageTime=0,this.lastUpdateTime=0,this.currentAcceleration=-this.properties.acceleration,this.currentSpeed=0,this.runningTime=0,this.traverse(e=>{e.castShadow=!0})}createBase(){let t=this.properties,e=function(o,a,l,h){const c=h.baseBigRadius-h.baseMidRadius;a<=.6?(l.x=h.baseBigRadius*Math.cos(2*Math.PI*(1-o)),l.z=h.baseBigRadius*Math.sin(2*Math.PI*(1-o))):a<=.8?(l.x=(h.baseBigRadius-c*((a-.6)/.2))*Math.cos(2*Math.PI*(1-o)),l.z=(h.baseBigRadius-c*((a-.6)/.2))*Math.sin(2*Math.PI*(1-o))):a<=.95?(l.x=h.baseMidRadius*Math.cos(2*Math.PI*(1-o)),l.z=h.baseMidRadius*Math.sin(2*Math.PI*(1-o))):(l.x=h.baseLowRadius*Math.cos(2*Math.PI*(1-o))*(.1/(a-.9)),l.z=h.baseLowRadius*Math.sin(2*Math.PI*(1-o))*(.1/(a-.9))),l.y=h.baseLength*a};const n=new vn((o,a,l)=>{e(o,a,l,t)},this.properties.segmentCount,20),i=new Ae({color:this.properties.baseColor});return new te(n,i)}createAxis(){const t=new ks(this.properties.axisRadius,this.properties.axisRadius,this.properties.axisLength,this.properties.segmentCount,3,!0),e=new Ae({color:this.properties.axisColor}),n=new te(t,e);return n.position.y=this.properties.baseLength*2,n}createTop(){let t=function(s,o,a,l){const h=l.topWidth-l.baseLowRadius;o==0?(a.x=l.baseLowRadius*Math.cos(2*Math.PI*(1-s)),a.z=l.baseLowRadius*Math.sin(2*Math.PI*(1-s)),a.y=0):o<=.2?(a.x=(l.baseLowRadius+h*(o/.2))*Math.cos(2*Math.PI*(1-s)),a.z=(l.baseLowRadius+h*(o/.2))*Math.sin(2*Math.PI*(1-s)),a.y=l.topLength*(.1+o)):o<=.8?(a.x=l.topWidth*Math.cos(2*Math.PI*(1-s)),a.z=l.topWidth*Math.sin(2*Math.PI*(1-s)),a.y=l.topLength*(.1+o)):(a.x=0,a.z=0,a.y=l.topLength*1.5)};const e=new vn((s,o,a)=>{t(s,o,a,this.properties)},this.properties.segmentCount,10);e.computeVertexNormals();const n=new Ae({color:this.properties.topColor,wireframe:!1}),i=new te(e,n);return i.position.y=this.properties.axisLength+this.properties.baseLength,i}createChainChair(){const t=new ks(this.properties.chainRad,this.properties.chainRad,this.properties.chainLen,32);t.translate(0,-this.properties.chainLen/2,0);const e=new Ae({color:this.properties.chainColor}),n=new te(t,e);let i=new mf(this.properties.chairLen,this.properties.chairWid,new v(this.properties.chainRad,-(this.properties.chainLen+this.properties.chairLen),-this.properties.chairWid/2));return i.name=rd,n.add(i),n}calcularTheta(t,e=1e-6,n=1e3){let i=.1,s=0;const o=9.8,a=this.properties.topWidth-.1,l=this.properties.chainLen,h=t*80;for(;s<n;){let c=Math.tan(i)-h**2*(a+l*Math.sin(i))/o,u=(1/Math.cos(i))**2-h**2*l*Math.cos(i)/o,d=i-c/u;if(Math.abs(d-i)<e)return d;i=d,s++}throw new Error("No convergió después de "+n+" iteraciones.")}animate(){this.lastUpdateTime==0&&(this.lastUpdateTime=Date.now());const e=Date.now()-this.lastUpdateTime;e>20&&(this.inStoppageTime?(this.stoppageTime+=e,this.stoppageTime>=this.properties.stopTime&&(this.stoppageTime=0,this.inStoppageTime=!1,this.currentAcceleration=this.properties.acceleration),this.currentSpeed+=this.currentAcceleration,this.currentSpeed<0&&(this.currentSpeed=0)):(this.runningTime+=e,this.runningTime>=this.properties.runTime&&(this.inStoppageTime=!0,this.currentAcceleration=-this.properties.acceleration,this.runningTime=0),this.currentSpeed+=this.currentAcceleration,this.currentSpeed>this.properties.maxspeed&&(this.currentSpeed=this.properties.maxspeed)),this.lastUpdateTime=Date.now()),this.chairRotPosition+=this.currentSpeed,this.top.rotation.y=this.chairRotPosition;let n=this.calcularTheta(this.currentSpeed);this.chairs.map(function(i){i.rotation.z=n})}}class no extends te{constructor(){const t=no.SkyShader,e=new Hn({name:t.name,uniforms:Od.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Fe,depthWrite:!1});super(new Ja(1,1,1),e),this.isSky=!0}}no.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new v},up:{value:new v(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const ad=1.1,Hy=1;class Vy{constructor(t){this.properties={sunLightHelper:!1,shadowCamHelper:!1,shadowMapSize:{left:-12,right:12,top:-10,bottom:10},shadowMapResolution:{w:1024,h:1024},shadowNear:.5,shadowFar:80},this.scene=t,this.sunLight=new xv(16777215,ad),this.sunLight.castShadow=!0,this.sunLight.position.set(2,10,0),this.sunLight.lookAt(0,0,0),this.sunLight.shadow.mapSize.width=this.properties.shadowMapResolution.w,this.sunLight.shadow.mapSize.height=this.properties.shadowMapResolution.h,this.sunLight.shadow.camera.near=this.properties.shadowNear,this.sunLight.shadow.camera.far=this.properties.shadowFar,this.sunLight.shadow.camera.left=this.properties.shadowMapSize.left,this.sunLight.shadow.camera.right=this.properties.shadowMapSize.right,this.sunLight.shadow.camera.top=this.properties.shadowMapSize.top,this.sunLight.shadow.camera.bottom=this.properties.shadowMapSize.bottom,this.nightLight=new pv(8947933,526438,.1),t.add(this.nightLight),t.add(this.sunLight),this.ambientLight=new vv(6710886),t.add(this.ambientLight),t.fog=new eh(8147007,20,80),this.lampLights=[],this.initSky()}showSunHelper(t){const e="SunHelper";if(t){const n=new bv(this.sunLight,5);n.name=e,this.scene.add(n)}else{let n=this.scene.getObjectByName(e);this.scene.remove(n)}}showShadowHelper(t){const e="ShadowHelper";if(t){const n=new Sv(this.sunLight.shadow.camera);n.name=e,this.scene.add(n)}else{let n=this.scene.getObjectByName(e);this.scene.remove(n)}}addLamp(t){const e=this.effectController.elevation<5||this.effectController.elevation>175?.8:0;let n=new gv(t.lampColor,e,10,1);this.lampLights.push(n),n.position.set(0,t.height,0),t.add(n)}initSky(){this.effectController={turbidity:1.8,rayleigh:.755,mieCoefficient:0,mieDirectionalG:.287,elevation:50,azimuth:250,exposure:.28},this.sky=new no,this.sky.scale.setScalar(45e3),this.scene.add(this.sky),this.sun=new v,this.skyChanged()}skyChanged(){const t=this.effectController,e=this.sky.material.uniforms;e.turbidity.value=t.turbidity,e.rayleigh.value=t.rayleigh,e.mieCoefficient.value=t.mieCoefficient,e.mieDirectionalG.value=t.mieDirectionalG;const n=Nn.degToRad(90-t.elevation),i=Nn.degToRad(t.azimuth);this.sun.setFromSphericalCoords(1,n,i),this.sunLight.position.setFromSphericalCoords(20,n,i),e.sunPosition.value.copy(this.sun);const s=new Rt;if(t.elevation<-2)s.setHex(4471103),this.sunLight.intensity=0,this.ambientLight.intensity=0,this.nightLight.intensity=3/14,this.lampLights.map(o=>o.intensity=.8);else{const o=Math.abs(Math.sin(n)**90);if(s.lerpColors(new Rt(16777215),new Rt(9338972),o),this.lampLights.map(a=>a.intensity=0),this.ambientLight.intensity=Hy,this.sunLight.intensity=ad,t.elevation<5||t.elevation>175){this.lampLights.map(l=>l.intensity=.8);let a=t.elevation;a>175&&(a=180-a),this.sunLight.intensity=(a+3)/7,this.nightLight.intensity=.5-(a+3)/14}}this.scene.fog.color=s}setSunElevation(t){this.effectController.elevation=t}}class Gy extends me{constructor(t){super(),this.height=t,this.lampColor=11206655,this.postColor=2236962;let e=new ks(.02,.02,t,12);e.translate(0,t/2,0);let n=new Ae({color:this.postColor,shininess:64,name:"post"}),i=new te(e,n),s=new sh(.05,32,16),o=new Ae({emissive:this.lampColor,name:"light"}),a=new te(s,o);a.position.set(0,t,0),this.add(i),this.add(a),this.traverse(l=>{l.castShadow=!0})}}const Wy=`
    //precision mediump float;
    varying vec2 vUv;

    uniform float scale1;
    uniform float tailMaskScale;

    uniform float tailPosX;
    uniform float tailPosY;

    uniform sampler2D tierraSampler;
    uniform sampler2D rocaSampler;
    uniform sampler2D pastoSampler;
    uniform sampler2D senderoSampler;

    `,Xy=`
        vec2 uv2=vUv*scale1;
        vec2 uv3=(vUv*tailMaskScale);
        uv3.x = uv3.x - tailPosX;
        uv3.y = uv3.y - tailPosY;

        // muestreo el pasto a diferentes escalas
        vec3 pasto1=texture2D(pastoSampler,uv2*1.0).xyz;
        vec3 pasto2=texture2D(pastoSampler,uv2*3.13).xyz;
        vec3 pasto3=texture2D(pastoSampler,uv2*2.37).xyz;
        
        // combino los 3 muestreos del pasto con la funcion de mezcla
        //vec3 colorPasto=pasto1;
        vec3 colorPasto=mix(mix(pasto1,pasto2,0.5),pasto3,0.3);

        // muestreo la tierra a diferentes escalas
        vec3 tierra1=texture2D(tierraSampler,uv2*3.77).xyz;
        vec3 tierra2=texture2D(tierraSampler,uv2*1.58).xyz;        
        vec3 colorTierra=mix(tierra1,tierra2,0.5);

        // muestreo la roca a diferentes escalas

        vec3 roca1=texture2D(rocaSampler,uv2*2.0).xyz;
        vec3 roca2=texture2D(rocaSampler,uv2*2.38).xyz;
        vec3 colorRoca=mix(roca1,roca2,0.5);        
        
        // mascara de sendero
        float senderoMask=texture2D(senderoSampler, uv3.yx/20.0).r;
        
        // Determinar pesos basados en el valor de la máscara
        float weightA = smoothstep(0.0, 0.4, 1.0 - senderoMask); // Más peso para negros
        float weightB = smoothstep(0.3, 0.8, senderoMask) - smoothstep(0.8, 0.9, senderoMask);  // Peso para valores grises
        float weightC = smoothstep(0.7, 1.0, senderoMask);       // Más peso para blancos
        
        // Normalizar los pesos para evitar valores mayores a 1
        float totalWeight = weightA + weightB + weightC;
        weightA /= totalWeight;
        weightB /= totalWeight;
        weightC /= totalWeight;

        // combino tierra y roca usando la mascara 1
        //vec3 colorTierraRoca=mix(colorTierra,colorRoca,mask1);
        
        // combino colorPasto (tierra y rocas) con color2 a partir de la mascara2
        //vec3 color=mix(colorPasto,colorTierraRoca,mask2);   

        diffuseColor = vec4(colorPasto * weightA + colorTierra * weightB + roca1 * weightC , 1.0);

    `,re={tierra:{url:"tierra.jpg",object:null},roca:{url:"ripio.jpg",object:null},pasto:{url:"pasto.jpg",object:null},sendero:{url:"trail.jpg",object:null},rust:{url:"column_base.jpg",object:null},rust_norm:{url:"column_normals.jpg",object:null},rust_ao:{url:"column_ao.jpg",object:null},twist_tunnel:{url:"tunnelA_base.png",object:null},twist_tunnel_alpha:{url:"tunnelA_alpha.png",object:null},twist_tunnel_norm:{url:"tunnelA_normals.png",object:null},rail:{url:"rail_base.jpg",object:null},rail_ao:{url:"rail_ao.jpg",object:null},rail_norm:{url:"rail_normal.jpg",object:null}};class Yy{constructor(t){this.scene=t,this.sceneLights=new Vy(t),this.grid=new Mv(10,10),this.axes=new Ev(3),this.rollerCoaster=new zy,t.add(this.rollerCoaster),this.train=new By,this.rollerCoaster.addTrain(this.train),this.flyingChairs=new ky,this.flyingChairs.position.z=-3.3,this.flyingChairs.position.x=-3,t.add(this.flyingChairs),this.addStreetLamps();const e=new vr(1e3,1e3),n=new Ae({color:65280});this.ground=new te(e,n),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,t.add(this.ground),this.properties={showGrid:!0,showAxes:!0,showRLNormals:!1,showRLTangents:!1,showRLBinormals:!1,showRLWireframe:!1,showRLFlatShading:!1,cameras:"t1"},this.rLHelpersUpdate(),this.worldHelpersUpdate(),this.loadTextures(()=>{this.ground.material=new Ae({color:65280}),this.ground.material.onBeforeCompile=function(s){s.uniforms.tierraSampler={type:"t",value:re.tierra.object},s.uniforms.rocaSampler={type:"t",value:re.roca.object},s.uniforms.pastoSampler={type:"t",value:re.pasto.object},s.uniforms.senderoSampler={type:"t",value:re.sendero.object},s.uniforms.scale1={type:"f",value:1e3},s.uniforms.tailMaskScale={type:"f",value:930},s.uniforms.tailPosX={type:"f",value:449.5},s.uniforms.tailPosY={type:"f",value:451},s.fragmentShader=Wy+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",[Xy].join(`
`)),s.vertexShader=s.vertexShader.replace("#define PHONG",`#define PHONG
// Varying 

				varying vec2 vUv;	// Coordenadas de textura que se pasan al fragment shader
`),s.vertexShader=s.vertexShader.replace("#include <fog_vertex>",`#include <fog_vertex>
// Se pasan las coordenadas de textura al fragment 

				vUv = uv;`)},this.ground.receiveShadow=!0,this.ground.needsUpdate=!0,re.rust.object.repeat=re.rust_norm.object.repeat=re.rust_ao.object.repeat=new gt(1,4),this.rollerCoaster.getAllColumns().map(s=>{s.material=new Ae({color:16777215}),s.material.map=re.rust.object,s.material.shininess=80,s.material.normalMap=re.rust_norm.object,s.material.aoMap=re.rust_ao.object}),re.twist_tunnel_alpha.object.repeat=re.twist_tunnel.object.repeat=re.twist_tunnel_norm.object.repeat=new gt(4,4),this.rollerCoaster.twistedTunnel.material.color=0,this.rollerCoaster.twistedTunnel.material.alphaTest=.3,this.rollerCoaster.twistedTunnel.material.transparent=!1,this.rollerCoaster.twistedTunnel.material.alphaMap=re.twist_tunnel_alpha.object,this.rollerCoaster.twistedTunnel.material.map=re.twist_tunnel.object,this.rollerCoaster.twistedTunnel.material.normalMap=re.twist_tunnel_norm.object,re.rail.object.repeat=re.rail_ao.object.repeat=re.rail_norm.object.repeat=new gt(8,128),this.rollerCoaster.rcMesh.material=new cv({color:16777215}),this.rollerCoaster.rcMesh.material.roughness=.1,this.rollerCoaster.rcMesh.material.metalness=.5,this.rollerCoaster.rcMesh.material.envMap=this.remGenerator.fromScene(this.sceneLights.sky).texture,this.rollerCoaster.rcMesh.material.envMapIntensity=.1,this.rollerCoaster.rcMesh.material.map=re.rail.object,this.rollerCoaster.rcMesh.material.aoMap=re.rail_ao.object,this.rollerCoaster.rcMesh.material.normalMap=re.rail_norm.object})}loadTextures(t){const e=new $d;e.onLoad=()=>{console.log("All textures loaded"),t()};for(const n in re){const i=new fv(e),s=re[n];s.object=i.load("../resources/"+s.url,this.onTextureLoaded.bind(this,n),null,o=>{console.error(o)})}}onTextureLoaded(t,e){t!="sendero"&&(e.wrapS=e.wrapT=Ua),re[t].object=e,console.log(`Texture ${t} loaded`)}rLHelpersUpdate(){this.properties.showRLNormals?this.rollerCoaster.drawNormals(this.scene):this.rollerCoaster.hideNormals(this.scene),this.properties.showRLTangents?this.rollerCoaster.drawTangents(this.scene):this.rollerCoaster.hideTangents(this.scene),this.properties.showRLBinormals?this.rollerCoaster.drawBinormals(this.scene):this.rollerCoaster.hideBinormals(this.scene)}worldHelpersUpdate(){this.properties.showGrid?this.scene.add(this.grid):this.scene.remove(this.grid),this.properties.showAxes?this.scene.add(this.axes):this.scene.remove(this.axes)}setupUI(t){let e=t.addFolder("Helpers");this.setupWorldHelpers(e),this.setupRLHelpers(e)}setupWorldHelpers(t){let e=t.addFolder("General");e.add(this.properties,"showGrid").name("Grid").onChange(n=>{this.properties.showGrid=n,this.worldHelpersUpdate()}),e.add(this.properties,"showAxes").name("Axes").onChange(n=>{this.properties.showAxes=n,this.worldHelpersUpdate()}),e.add(this.sceneLights.properties,"sunLightHelper").name("Sun").onChange(n=>{this.sceneLights.showSunHelper(n)}),e.add(this.sceneLights.properties,"shadowCamHelper").name("Shadows").onChange(n=>{this.sceneLights.showShadowHelper(n)}),e.add(this.sceneLights.effectController,"elevation",-180,180,.1).name("SunElevation").onChange(n=>{this.sceneLights.skyChanged()})}setupRLHelpers(t){let e=t.addFolder("RLC");e.add(this.properties,"showRLNormals").name("Normals").onChange(n=>{this.rLHelpersUpdate()}),e.add(this.properties,"showRLTangents").name("Tangents").onChange(n=>{this.rLHelpersUpdate()}),e.add(this.properties,"showRLBinormals").name("Binormals").onChange(n=>{this.rLHelpersUpdate()}),e.add(this.properties,"showRLWireframe").name("Wireframe").onChange(n=>{this.rollerCoaster.wireframe(n)}),e.add(this.properties,"showRLFlatShading").name("FlatShading").onChange(n=>{this.rollerCoaster.flatShading(n)})}addTrainCameras(t,e,n){t.name=Fs.TrainFront,e.name=Fs.TrainBack,n.name=Fs.TrainSide,this.rollerCoaster.add(t),this.rollerCoaster.add(e),this.rollerCoaster.add(n)}addFlyingChairCamera(t){this.flyingChairs.chairs[0].add(t)}addStreetLamps(){const t=new qd([new v(-3,0,-5),new v(-.5,0,-3),new v(-.75,0,0),new v(2,0,2.5),new v(2.5,0,5),new v(2,0,9),new v(-.5,0,11.5),new v(-6,0,8),new v(-6,0,3),new v(-6.5,0,0),new v(-6,0,-2),new v(-4,0,-4.5)]),e=15,n=.3;for(let i=0;i<e;i++){let s=t.getPointAt(i/e),o=new Gy(n);o.position.copy(s),this.scene.add(o),this.sceneLights.addLamp(o)}}animate(){this.rollerCoaster.animate(),this.flyingChairs.animate()}}var qy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $y(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var gf={exports:{}};(function(r,t){(function(e,n){r.exports=n()})(qy,function(){var e=function(){function n(f){return o.appendChild(f.dom),f}function i(f){for(var g=0;g<o.children.length;g++)o.children[g].style.display=g===f?"block":"none";s=f}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(f){f.preventDefault(),i(++s%o.children.length)},!1);var a=(performance||Date).now(),l=a,h=0,c=n(new e.Panel("FPS","#0ff","#002")),u=n(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=n(new e.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:n,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){h++;var f=(performance||Date).now();if(u.update(f-a,200),f>l+1e3&&(c.update(1e3*h/(f-l),100),l=f,h=0,d)){var g=performance.memory;d.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return f},update:function(){a=this.end()},domElement:o,setMode:i}};return e.Panel=function(n,i,s){var o=1/0,a=0,l=Math.round,h=l(window.devicePixelRatio||1),c=80*h,u=48*h,d=3*h,f=2*h,g=3*h,_=15*h,p=74*h,m=30*h,S=document.createElement("canvas");S.width=c,S.height=u,S.style.cssText="width:80px;height:48px";var x=S.getContext("2d");return x.font="bold "+9*h+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=s,x.fillRect(0,0,c,u),x.fillStyle=i,x.fillText(n,d,f),x.fillRect(g,_,p,m),x.fillStyle=s,x.globalAlpha=.9,x.fillRect(g,_,p,m),{dom:S,update:function(b,R){o=Math.min(o,b),a=Math.max(a,b),x.fillStyle=s,x.globalAlpha=1,x.fillRect(0,0,c,_),x.fillStyle=i,x.fillText(l(b)+" "+n+" ("+l(o)+"-"+l(a)+")",d,f),x.drawImage(S,g+h,_,p-h,m,g,_,p-h,m),x.fillRect(g+p-h,_,h,m),x.fillStyle=s,x.globalAlpha=.9,x.fillRect(g+p-h,_,h,l((1-b/R)*m))}}},e})})(gf);var jy=gf.exports;const Zy=$y(jy);let Gl,ii,Ps,ri,Ni,en,Ri,ar,Ml,bl,Sl,Ca,Us;const ke={currentCamera:0,currentCameraStr:"Orbital"},_f=["Orbital","FPV","Vagon Frente","Vagon Trasero","Vagon","Silla Voladora","Montaña Orbital","Sillas Orbital"],Ky={Orbital:0,FPV:1,"Vagon Frente":2,"Vagon Trasero":3,Vagon:4,"Silla Voladora":5,"Montaña Orbital":6,"Sillas Orbital":7};let xf;const vf=.2;let Jy=new v(3,2,1);const od=0,ld=6,hd=7;let fr=new v(0,0,0),cd=new v(-3,0,5);const qa=new Zy;class Qy extends Cv{constructor(t,e){super(t,e)}extendedUpdate(t){this.update(t),ar.position.y=vf}}function tM(){Ps=document.getElementById("container3D"),ii=new Da,ii.shadowMap.enabled=!0,new Da,new Da,Gl=new Kx,Ps.appendChild(ii.domElement),Ri=new Ee(75,window.innerWidth/window.innerHeight,.1,100),Ri.position.copy(Jy),Ri.lookAt(fr.x,fr.y,fr.z),ar=new Ee(75,window.innerWidth/window.innerHeight,.1,100),ar.position.set(0,vf,0),Ml=new Ee(45,window.innerWidth/window.innerHeight,.1,100),bl=new Ee(45,window.innerWidth/window.innerHeight,.1,100),Sl=new Ee(45,window.innerWidth/window.innerHeight,.1,100),Ca=new Ee(45,window.innerWidth/window.innerHeight,.1,100),Ca.position.set(0,-.93,0),ri=new Yy(Gl),ri.addTrainCameras(Ml,bl,Sl),ri.addFlyingChairCamera(Ca),ri.remGenerator=new fy(ii),en=new Tv(Ri,ii.domElement),en.enablePan=!1,Ni=new Qy(ar,ii.domElement),Ni.lookSpeed=.03,Ni.movementSpeed=.5,Ni.enabled=!1,Us=[Ri,ar,bl,Ml,Sl,Ca,Ri,Ri],window.addEventListener("resize",ud),document.addEventListener("keydown",nM),ud();let r=new Oy;xf=eM(r),ri.setupUI(r),qa.showPanel(0),document.body.appendChild(qa.dom)}function eM(r){return r.add(ke,"currentCameraStr",_f).name("Camaras").onChange(t=>{ke.currentCamera=Ky[t],yf()})}function nM(r){switch(r.key){case"c":iM();break}}function iM(){ke.currentCamera+=1,ke.currentCamera=ke.currentCamera%Us.length,ke.currentCameraStr=_f[ke.currentCamera],yf(),xf.updateDisplay()}function yf(){Ni.enabled=ke.currentCamera==1,en.enabled=ke.currentCamera==od||ke.currentCamera==ld||ke.currentCamera==hd,ke.currentCamera==od&&(en.target.copy(fr),en.target0.copy(fr),en.reset()),ke.currentCamera==ld&&(en.target.copy(cd),en.target0.copy(cd),en.reset()),ke.currentCamera==hd&&(en.target.copy(ri.flyingChairs.position),en.target0.copy(ri.flyingChairs.position),en.reset())}function ud(){for(let r=0;r<Us.length;r++)Us[r].aspect=Ps.offsetWidth/Ps.offsetHeight,Us[r].updateProjectionMatrix();ii.setSize(Ps.offsetWidth,Ps.offsetHeight),Ni.handleResize()}function Mf(){qa.begin(),Ni.extendedUpdate(.08),ri.animate(),ii.render(Gl,Us[ke.currentCamera]),qa.end(),requestAnimationFrame(Mf)}tM();Mf();
