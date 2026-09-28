(()=>{var Ro="160",zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ph=0,Jo=1,mh=2;var vc=1,gh=2,jn=3,yi=0,un=1,Qn=2;var gi=0,ps=1,Ko=2,jo=3,Qo=4,_h=5,Li=100,xh=101,yh=102,tl=103,el=104,vh=200,Mh=201,Sh=202,bh=203,Ga=204,Wa=205,Eh=206,wh=207,Ah=208,Th=209,Rh=210,Ch=211,Ph=212,Lh=213,Ih=214,Dh=0,Uh=1,Nh=2,Tr=3,Oh=4,Fh=5,Bh=6,zh=7,Mc=0,kh=1,Hh=2,_i=0,Vh=1,Gh=2,Wh=3,Xh=4,qh=5,Yh=6;var Sc=300,_s=301,xs=302,Xa=303,qa=304,ta=306,Ya=1e3,Pn=1001,Za=1002,Ne=1003,nl=1004;var pa=1005;var Ke=1006,Zh=1007;var Vs=1008;var xi=1009,$h=1010,Jh=1011,Co=1012,bc=1013,pi=1014,mi=1015,Gs=1016,Ec=1017,wc=1018,Di=1020,Kh=1021,_n=1023,jh=1024,Qh=1025,Ui=1026,ys=1027,tu=1028,Ac=1029,eu=1030,Tc=1031,Rc=1033,ma=33776,ga=33777,_a=33778,xa=33779,il=35840,sl=35841,rl=35842,al=35843,Cc=36196,ol=37492,ll=37496,cl=37808,hl=37809,ul=37810,dl=37811,fl=37812,pl=37813,ml=37814,gl=37815,_l=37816,xl=37817,yl=37818,vl=37819,Ml=37820,Sl=37821,ya=36492,bl=36494,El=36495,nu=36283,wl=36284,Al=36285,Tl=36286;var Rr=2300,Cr=2301,va=2302,Rl=2400,Cl=2401,Pl=2402;var Pc=3e3,Ni=3001,iu=3200,su=3201,ru=0,au=1,Sn="",Ge="srgb",ni="srgb-linear",Po="display-p3",ea="display-p3-linear",Pr="linear",Se="srgb",Lr="rec709",Ir="p3";var Zi=7680;var Ll=519,ou=512,lu=513,cu=514,Lc=515,hu=516,uu=517,du=518,fu=519,$a=35044,na=35048;var Il="300 es",Ja=1035,ti=2e3,Dr=2001,Bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dl=1234567,Bs=Math.PI/180,Ws=180/Math.PI;function ei(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function We(i,t,e){return Math.max(t,Math.min(e,i))}function Lo(i,t){return(i%t+t)%t}function pu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function mu(i,t,e){return i!==t?(e-i)/(t-i):0}function zs(i,t,e){return(1-e)*i+e*t}function gu(i,t,e,n){return zs(i,t,1-Math.exp(-e*n))}function _u(i,t=1){return t-Math.abs(Lo(i,t*2)-t)}function xu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function yu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Mu(i,t){return i+Math.random()*(t-i)}function Su(i){return i*(.5-Math.random())}function bu(i){i!==void 0&&(Dl=i);let t=Dl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Eu(i){return i*Bs}function wu(i){return i*Ws}function Ka(i){return(i&i-1)===0&&i!==0}function Au(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ur(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tu(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),m=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ia={DEG2RAD:Bs,RAD2DEG:Ws,generateUUID:ei,clamp:We,euclideanModulo:Lo,mapLinear:pu,inverseLerp:mu,lerp:zs,damp:gu,pingpong:_u,smoothstep:xu,smootherstep:yu,randInt:vu,randFloat:Mu,randFloatSpread:Su,seededRandom:bu,degToRad:Eu,radToDeg:wu,isPowerOfTwo:Ka,ceilPowerOfTwo:Au,floorPowerOfTwo:Ur,setQuaternionFromProperEuler:Tu,normalize:_e,denormalize:Fn},Zt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},re=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],_=n[8],x=s[0],p=s[3],u=s[6],w=s[1],v=s[4],P=s[7],O=s[2],I=s[5],T=s[8];return r[0]=o*x+a*w+l*O,r[3]=o*p+a*v+l*I,r[6]=o*u+a*P+l*T,r[1]=c*x+h*w+d*O,r[4]=c*p+h*v+d*I,r[7]=c*u+h*P+d*T,r[2]=f*x+m*w+_*O,r[5]=f*p+m*v+_*I,r[8]=f*u+m*P+_*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,m=c*r-o*l,_=e*d+n*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=m*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ma.makeScale(t,e)),this}rotate(t){return this.premultiply(Ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ma=new re;function Ic(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ru(){let i=Nr("canvas");return i.style.display="block",i}var Ul={};function ks(i){i in Ul||(Ul[i]=!0,console.warn(i))}var Nl=new re().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ol=new re().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ir={[ni]:{transfer:Pr,primaries:Lr,toReference:i=>i,fromReference:i=>i},[Ge]:{transfer:Se,primaries:Lr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ea]:{transfer:Pr,primaries:Ir,toReference:i=>i.applyMatrix3(Ol),fromReference:i=>i.applyMatrix3(Nl)},[Po]:{transfer:Se,primaries:Ir,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ol),fromReference:i=>i.applyMatrix3(Nl).convertLinearToSRGB()}},Cu=new Set([ni,ea]),xe={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Cu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=ir[t].toReference,s=ir[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ir[i].primaries},getTransfer:function(i){return i===Sn?Pr:ir[i].transfer}};function ms(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $i,Or=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$i===void 0&&($i=Nr("canvas")),$i.width=t.width,$i.height=t.height;let n=$i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Nr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ms(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ms(e[n]/255)*255):e[n]=ms(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pu=0,Fr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=ei(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ba(s[o].image)):r.push(ba(s[o]))}else r=ba(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Or.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lu=0,dn=class i extends Bn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Pn,s=Pn,r=Ke,o=Vs,a=_n,l=xi,c=i.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=ei(),this.name="",this.source=new Fr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ni?Ge:Sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ya:t.x=t.x-Math.floor(t.x);break;case Pn:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ya:t.y=t.y-Math.floor(t.y);break;case Pn:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ge?Ni:Pc}set encoding(t){ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ni?Ge:Sn}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Sc;dn.DEFAULT_ANISOTROPY=1;var Re=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],_=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,P=(m+1)/2,O=(u+1)/2,I=(h+f)/4,T=(d+x)/4,j=(_+p)/4;return v>P&&v>O?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=I/n,r=T/n):P>O?P<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(P),n=I/s,r=j/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=T/r,s=j/r),this.set(n,s,r,e),this}let w=Math.sqrt((p-_)*(p-_)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(p-_)/w,this.y=(d-x)/w,this.z=(f-h)/w,this.w=Math.acos((c+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ja=class extends Bn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(ks("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ni?Ge:Sn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new dn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Fr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends ja{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Br=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qa=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ln=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],m=r[o+1],_=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=x;return}if(d!==x||l!==f||c!==m||h!==_){let p=1-a,u=l*f+c*m+h*_+d*x,w=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let O=Math.sqrt(v),I=Math.atan2(O,u*w);p=Math.sin(p*I)/O,a=Math.sin(a*I)/O}let P=a*w;if(l=l*p+f*P,c=c*p+m*P,h=h*p+_*P,d=d*p+x*P,p===1-a){let O=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=O,c*=O,h*=O,d*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return t[e]=a*_+h*d+l*m-c*f,t[e+1]=l*_+h*f+c*d-a*m,t[e+2]=c*_+h*m+a*f-l*d,t[e+3]=h*_-a*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"YXZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"ZXY":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"ZYX":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"YZX":this._x=f*h*d+c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d-f*m*_;break;case"XZY":this._x=f*h*d-c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){let m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ea.copy(this).projectOnVector(t),this.sub(Ea)}reflect(t){return this.sub(Ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ea=new N,Fl=new Ln,bn=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Us),rr.subVectors(this.max,Us),Ji.subVectors(t.a,Us),Ki.subVectors(t.b,Us),ji.subVectors(t.c,Us),ci.subVectors(Ki,Ji),hi.subVectors(ji,Ki),Ai.subVectors(Ji,ji);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Ai.z,Ai.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Ai.z,0,-Ai.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Ai.y,Ai.x,0];return!wa(e,Ji,Ki,ji,rr)||(e=[1,0,0,0,1,0,0,0,1],!wa(e,Ji,Ki,ji,rr))?!1:(ar.crossVectors(ci,hi),e=[ar.x,ar.y,ar.z],wa(e,Ji,Ki,ji,rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Yn=[new N,new N,new N,new N,new N,new N,new N,new N],An=new N,sr=new bn,Ji=new N,Ki=new N,ji=new N,ci=new N,hi=new N,Ai=new N,Us=new N,rr=new N,ar=new N,Ti=new N;function wa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ti.fromArray(i,r);let a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=t.dot(Ti),c=e.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Iu=new bn,Ns=new N,Aa=new N,si=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Iu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);let e=Ns.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ns,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Aa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(Aa)),this.expandByPoint(Ns.copy(t.center).sub(Aa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zn=new N,Ta=new N,or=new N,ui=new N,Ra=new N,lr=new N,Ca=new N,vs=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ta.copy(t).add(e).multiplyScalar(.5),or.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(Ta);let r=t.distanceTo(e)*.5,o=-this.direction.dot(or),a=ui.dot(this.direction),l=-ui.dot(or),c=ui.lengthSq(),h=Math.abs(1-o*o),d,f,m,_;if(h>0)if(d=o*l-a,f=o*a-l,_=r*h,d>=0)if(f>=-_)if(f<=_){let x=1/h;d*=x,f*=x,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ta).addScaledVector(or,f),m}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);let n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,s,r){Ra.subVectors(e,t),lr.subVectors(n,t),Ca.crossVectors(Ra,lr);let o=this.direction.dot(Ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,t);let l=a*this.direction.dot(lr.crossVectors(ui,lr));if(l<0)return null;let c=a*this.direction.dot(Ra.cross(ui));if(c<0||l+c>o)return null;let h=-a*ui.dot(Ca);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,f,m,_,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,m,_,x,p)}set(t,e,n,s,r,o,a,l,c,h,d,f,m,_,x,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),o=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,m=o*d,_=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+_*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=_+m*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,m=l*d,_=c*h,x=c*d;e[0]=f+x*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-_,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,m=l*d,_=c*h,x=c*d;e[0]=f-x*a,e[4]=-o*d,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,m=o*d,_=a*h,x=a*d;e[0]=l*h,e[4]=_*c-m,e[8]=f*c+x,e[1]=l*d,e[5]=x*c+f,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,m=o*c,_=a*l,x=a*c;e[0]=l*h,e[4]=x-f*d,e[8]=_*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*d+_,e[10]=f-x*d}else if(t.order==="XZY"){let f=o*l,m=o*c,_=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+x,e[5]=o*h,e[9]=m*d-_,e[2]=_*d-m,e[6]=a*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Du,t,Uu)}lookAt(t,e,n){let s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),di.crossVectors(n,mn),di.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),di.crossVectors(n,mn)),di.normalize(),cr.crossVectors(mn,di),s[0]=di.x,s[4]=cr.x,s[8]=mn.x,s[1]=di.y,s[5]=cr.y,s[9]=mn.y,s[2]=di.z,s[6]=cr.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],_=n[2],x=n[6],p=n[10],u=n[14],w=n[3],v=n[7],P=n[11],O=n[15],I=s[0],T=s[4],j=s[8],S=s[12],E=s[1],W=s[5],tt=s[9],mt=s[13],D=s[2],z=s[6],Z=s[10],et=s[14],J=s[3],Y=s[7],st=s[11],ot=s[15];return r[0]=o*I+a*E+l*D+c*J,r[4]=o*T+a*W+l*z+c*Y,r[8]=o*j+a*tt+l*Z+c*st,r[12]=o*S+a*mt+l*et+c*ot,r[1]=h*I+d*E+f*D+m*J,r[5]=h*T+d*W+f*z+m*Y,r[9]=h*j+d*tt+f*Z+m*st,r[13]=h*S+d*mt+f*et+m*ot,r[2]=_*I+x*E+p*D+u*J,r[6]=_*T+x*W+p*z+u*Y,r[10]=_*j+x*tt+p*Z+u*st,r[14]=_*S+x*mt+p*et+u*ot,r[3]=w*I+v*E+P*D+O*J,r[7]=w*T+v*W+P*z+O*Y,r[11]=w*j+v*tt+P*Z+O*st,r[15]=w*S+v*mt+P*et+O*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],m=t[14],_=t[3],x=t[7],p=t[11],u=t[15];return _*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*m-n*l*m)+x*(+e*l*m-e*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+p*(+e*c*d-e*a*m-r*o*d+n*o*m+r*a*h-n*c*h)+u*(-s*a*h-e*l*d+e*a*f+s*o*d-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],m=t[11],_=t[12],x=t[13],p=t[14],u=t[15],w=d*p*c-x*f*c+x*l*m-a*p*m-d*l*u+a*f*u,v=_*f*c-h*p*c-_*l*m+o*p*m+h*l*u-o*f*u,P=h*x*c-_*d*c+_*a*m-o*x*m-h*a*u+o*d*u,O=_*d*l-h*x*l-_*a*f+o*x*f+h*a*p-o*d*p,I=e*w+n*v+s*P+r*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/I;return t[0]=w*T,t[1]=(x*f*r-d*p*r-x*s*m+n*p*m+d*s*u-n*f*u)*T,t[2]=(a*p*r-x*l*r+x*s*c-n*p*c-a*s*u+n*l*u)*T,t[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*m-n*l*m)*T,t[4]=v*T,t[5]=(h*p*r-_*f*r+_*s*m-e*p*m-h*s*u+e*f*u)*T,t[6]=(_*l*r-o*p*r-_*s*c+e*p*c+o*s*u-e*l*u)*T,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*m+e*l*m)*T,t[8]=P*T,t[9]=(_*d*r-h*x*r-_*n*m+e*x*m+h*n*u-e*d*u)*T,t[10]=(o*x*r-_*a*r+_*n*c-e*x*c-o*n*u+e*a*u)*T,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*m-e*a*m)*T,t[12]=O*T,t[13]=(h*x*s-_*d*s+_*n*f-e*x*f-h*n*p+e*d*p)*T,t[14]=(_*a*s-o*x*s-_*n*l+e*x*l+o*n*p-e*a*p)*T,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*f+e*a*f)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,m=r*h,_=r*d,x=o*h,p=o*d,u=a*d,w=l*c,v=l*h,P=l*d,O=n.x,I=n.y,T=n.z;return s[0]=(1-(x+u))*O,s[1]=(m+P)*O,s[2]=(_-v)*O,s[3]=0,s[4]=(m-P)*I,s[5]=(1-(f+u))*I,s[6]=(p+w)*I,s[7]=0,s[8]=(_+v)*T,s[9]=(p-w)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Qi.set(s[0],s[1],s[2]).length(),o=Qi.set(s[4],s[5],s[6]).length(),a=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Tn.copy(this);let c=1/r,h=1/o,d=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,e.setFromRotationMatrix(Tn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ti){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,_;if(a===ti)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Dr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ti){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),f=(e+t)*c,m=(n+s)*h,_,x;if(a===ti)_=(o+r)*d,x=-2*d;else if(a===Dr)_=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Qi=new N,Tn=new Ie,Du=new N(0,0,0),Uu=new N(1,1,1),di=new N,cr=new N,mn=new N,Bl=new Ie,zl=new Ln,zr=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zl.setFromEuler(this),this.setFromQuaternion(zl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zr.DEFAULT_ORDER="XYZ";var Xs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Nu=0,kl=new N,ts=new Ln,$n=new Ie,hr=new N,Os=new N,Ou=new N,Fu=new Ln,Hl=new N(1,0,0),Vl=new N(0,1,0),Gl=new N(0,0,1),Bu={type:"added"},zu={type:"removed"},In=class i extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new zr,n=new Ln,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new re}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(Hl,t)}rotateY(t){return this.rotateOnAxis(Vl,t)}rotateZ(t){return this.rotateOnAxis(Gl,t)}translateOnAxis(t,e){return kl.copy(t).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hl,t)}translateY(t){return this.translateOnAxis(Vl,t)}translateZ(t){return this.translateOnAxis(Gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hr.copy(t):hr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Os,hr,this.up):$n.lookAt(hr,Os,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),ts.setFromRotationMatrix($n),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Bu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zu)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,Ou),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Fu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};In.DEFAULT_UP=new N(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new N,Jn=new N,Pa=new N,Kn=new N,es=new N,ns=new N,Wl=new N,La=new N,Ia=new N,Da=new N,ur=!1,hs=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),Jn.subVectors(n,e),Pa.subVectors(t,e);let o=Rn.dot(Rn),a=Rn.dot(Jn),l=Rn.dot(Pa),c=Jn.dot(Jn),h=Jn.dot(Pa),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getUV(t,e,n,s,r,o,a,l){return ur===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ur=!0),this.getInterpolation(t,e,n,s,r,o,a,l)}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),Jn.subVectors(t,e),Rn.cross(Jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Rn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return ur===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ur=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;es.subVectors(s,n),ns.subVectors(r,n),La.subVectors(t,n);let l=es.dot(La),c=ns.dot(La);if(l<=0&&c<=0)return e.copy(n);Ia.subVectors(t,s);let h=es.dot(Ia),d=ns.dot(Ia);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(es,o);Da.subVectors(t,r);let m=es.dot(Da),_=ns.dot(Da);if(_>=0&&m<=_)return e.copy(r);let x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(ns,a);let p=h*_-m*d;if(p<=0&&d-h>=0&&m-_>=0)return Wl.subVectors(r,s),a=(d-h)/(d-h+(m-_)),e.copy(s).addScaledVector(Wl,a);let u=1/(p+x+f);return o=x*u,a=f*u,e.copy(n).addScaledVector(es,o).addScaledVector(ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},dr={h:0,s:0,l:0};function Ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var me=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=xe.workingColorSpace){if(t=Lo(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ua(o,r,t+1/3),this.g=Ua(o,r,t),this.b=Ua(o,r,t-1/3)}return xe.toWorkingColorSpace(this,s),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let n=Dc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}copyLinearToSRGB(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return xe.fromWorkingColorSpace(Je.copy(this),t),Math.round(We(Je.r*255,0,255))*65536+Math.round(We(Je.g*255,0,255))*256+Math.round(We(Je.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.fromWorkingColorSpace(Je.copy(this),e);let n=Je.r,s=Je.g,r=Je.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=xe.workingColorSpace){return xe.fromWorkingColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Ge){xe.fromWorkingColorSpace(Je.copy(this),t);let e=Je.r,n=Je.g,s=Je.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(dr);let n=zs(fi.h,dr.h,e),s=zs(fi.s,dr.s,e),r=zs(fi.l,dr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new me;me.NAMES=Dc;var ku=0,Ms=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=ps,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Wa,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==Wa&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},kr=class extends Ms{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new N,fr=new Zt,De=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$a,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$a&&(t.usage=this.usage),t}};var Hr=class extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Vr=class extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xn=class extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Hu=0,Mn=new Ie,Na=new In,is=new N,gn=new bn,Fs=new bn,ze=new N,Dn=class i extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ic(t)?Vr:Hr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return Na.lookAt(t),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(gn.min,Fs.min),gn.expandByPoint(ze),ze.addVectors(gn.max,Fs.max),gn.expandByPoint(ze)):(gn.expandByPoint(Fs.min),gn.expandByPoint(Fs.max))}gn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ze.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(t,c),ze.add(is)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new N,h[E]=new N;let d=new N,f=new N,m=new N,_=new Zt,x=new Zt,p=new Zt,u=new N,w=new N;function v(E,W,tt){d.fromArray(s,E*3),f.fromArray(s,W*3),m.fromArray(s,tt*3),_.fromArray(o,E*2),x.fromArray(o,W*2),p.fromArray(o,tt*2),f.sub(d),m.sub(d),x.sub(_),p.sub(_);let mt=1/(x.x*p.y-p.x*x.y);isFinite(mt)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(mt),w.copy(m).multiplyScalar(x.x).addScaledVector(f,-p.x).multiplyScalar(mt),c[E].add(u),c[W].add(u),c[tt].add(u),h[E].add(w),h[W].add(w),h[tt].add(w))}let P=this.groups;P.length===0&&(P=[{start:0,count:n.length}]);for(let E=0,W=P.length;E<W;++E){let tt=P[E],mt=tt.start,D=tt.count;for(let z=mt,Z=mt+D;z<Z;z+=3)v(n[z+0],n[z+1],n[z+2])}let O=new N,I=new N,T=new N,j=new N;function S(E){T.fromArray(r,E*3),j.copy(T);let W=c[E];O.copy(W),O.sub(T.multiplyScalar(T.dot(W))).normalize(),I.crossVectors(j,W);let mt=I.dot(h[E])<0?-1:1;l[E*4]=O.x,l[E*4+1]=O.y,l[E*4+2]=O.z,l[E*4+3]=mt}for(let E=0,W=P.length;E<W;++E){let tt=P[E],mt=tt.start,D=tt.count;for(let z=mt,Z=mt+D;z<Z;z+=3)S(n[z+0]),S(n[z+1]),S(n[z+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(t)for(let f=0,m=t.count;f<m;f+=3){let _=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),m=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let u=0;u<h;u++)f[_++]=c[m++]}return new De(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xl=new Ie,Ri=new vs,pr=new si,ql=new N,ss=new N,rs=new N,as=new N,Oa=new N,mr=new N,gr=new Zt,_r=new Zt,xr=new Zt,Yl=new N,Zl=new N,$l=new N,yr=new N,vr=new N,hn=class extends In{constructor(t=new Dn,e=new kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Oa.fromBufferAttribute(d,t),o?mr.addScaledVector(Oa,h):mr.addScaledVector(Oa.sub(e),h))}e.add(mr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(pr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(pr,ql)===null||Ri.origin.distanceToSquared(ql)>(t.far-t.near)**2))&&(Xl.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(Xl),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){let p=f[_],u=o[p.materialIndex],w=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let P=w,O=v;P<O;P+=3){let I=a.getX(P),T=a.getX(P+1),j=a.getX(P+2);s=Mr(this,u,t,n,c,h,d,I,T,j),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){let w=a.getX(p),v=a.getX(p+1),P=a.getX(p+2);s=Mr(this,o,t,n,c,h,d,w,v,P),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){let p=f[_],u=o[p.materialIndex],w=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let P=w,O=v;P<O;P+=3){let I=P,T=P+1,j=P+2;s=Mr(this,u,t,n,c,h,d,I,T,j),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){let w=p,v=p+1,P=p+2;s=Mr(this,o,t,n,c,h,d,w,v,P),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Vu(i,t,e,n,s,r,o,a){let l;if(t.side===un?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===yi,a),l===null)return null;vr.copy(a),vr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(vr);return c<e.near||c>e.far?null:{distance:c,point:vr.clone(),object:i}}function Mr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ss),i.getVertexPosition(l,rs),i.getVertexPosition(c,as);let h=Vu(i,t,e,n,ss,rs,as,yr);if(h){s&&(gr.fromBufferAttribute(s,a),_r.fromBufferAttribute(s,l),xr.fromBufferAttribute(s,c),h.uv=hs.getInterpolation(yr,ss,rs,as,gr,_r,xr,new Zt)),r&&(gr.fromBufferAttribute(r,a),_r.fromBufferAttribute(r,l),xr.fromBufferAttribute(r,c),h.uv1=hs.getInterpolation(yr,ss,rs,as,gr,_r,xr,new Zt),h.uv2=h.uv1),o&&(Yl.fromBufferAttribute(o,a),Zl.fromBufferAttribute(o,l),$l.fromBufferAttribute(o,c),h.normal=hs.getInterpolation(yr,ss,rs,as,Yl,Zl,$l,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new N,materialIndex:0};hs.getNormal(ss,rs,as,d.normal),h.face=d}return h}var qs=class i extends Dn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,m=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(h,3)),this.setAttribute("uv",new xn(d,2));function _(x,p,u,w,v,P,O,I,T,j,S){let E=P/T,W=O/j,tt=P/2,mt=O/2,D=I/2,z=T+1,Z=j+1,et=0,J=0,Y=new N;for(let st=0;st<Z;st++){let ot=st*W-mt;for(let xt=0;xt<z;xt++){let q=xt*E-tt;Y[x]=q*w,Y[p]=ot*v,Y[u]=D,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[p]=0,Y[u]=I>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(xt/T),d.push(1-st/j),et+=1}}for(let st=0;st<j;st++)for(let ot=0;ot<T;ot++){let xt=f+ot+z*st,q=f+ot+z*(st+1),it=f+(ot+1)+z*(st+1),_t=f+(ot+1)+z*st;l.push(xt,q,_t),l.push(q,it,_t),J+=6}a.addGroup(m,J,S),m+=J,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ss(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function sn(i){let t={};for(let e=0;e<i.length;e++){let n=Ss(i[e]);for(let s in n)t[s]=n[s]}return t}function Gu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uc(i){return i.getRenderTarget()===null?i.outputColorSpace:xe.workingColorSpace}var sa={clone:Ss,merge:sn},Wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends Ms{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wu,this.fragmentShader=Xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=Gu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Gr=class extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rn=class extends Gr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},os=-90,ls=1,to=class extends In{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(os,ls,t,e);s.layers=this.layers,this.add(s);let r=new rn(os,ls,t,e);r.layers=this.layers,this.add(r);let o=new rn(os,ls,t,e);o.layers=this.layers,this.add(o);let a=new rn(os,ls,t,e);a.layers=this.layers,this.add(a);let l=new rn(os,ls,t,e);l.layers=this.layers,this.add(l);let c=new rn(os,ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Wr=class extends dn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:_s,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},eo=class extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(ks("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ni?Ge:Sn),this.texture=new Wr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qs(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:gi});r.uniforms.tEquirect.value=e;let o=new hn(s,r),a=e.minFilter;return e.minFilter===Vs&&(e.minFilter=Ke),new to(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Fa=new N,qu=new N,Yu=new re,Cn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Fa.subVectors(n,e).cross(qu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Yu.getNormalMatrix(t),s=this.coplanarPoint(Fa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ci=new si,Sr=new N,Xr=class{constructor(t=new Cn,e=new Cn,n=new Cn,s=new Cn,r=new Cn,o=new Cn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],m=s[8],_=s[9],x=s[10],p=s[11],u=s[12],w=s[13],v=s[14],P=s[15];if(n[0].setComponents(l-r,f-c,p-m,P-u).normalize(),n[1].setComponents(l+r,f+c,p+m,P+u).normalize(),n[2].setComponents(l+o,f+h,p+_,P+w).normalize(),n[3].setComponents(l-o,f-h,p-_,P-w).normalize(),n[4].setComponents(l-a,f-d,p-x,P-v).normalize(),e===ti)n[5].setComponents(l+a,f+d,p+x,P+v).normalize();else if(e===Dr)n[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Sr.x=s.normal.x>0?t.max.x:t.min.x,Sr.y=s.normal.y>0?t.max.y:t.min.y,Sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Nc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zu(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,f=c.usage,m=d.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,d,f),c.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,d){let f=h.array,m=h._updateRange,_=h.updateRanges;if(i.bindBuffer(d,c),m.count===-1&&_.length===0&&i.bufferSubData(d,0,f),_.length!==0){for(let x=0,p=_.length;x<p;x++){let u=_[x];e?i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}var no=class i extends Dn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,m=[],_=[],x=[],p=[];for(let u=0;u<h;u++){let w=u*f-o;for(let v=0;v<c;v++){let P=v*d-r;_.push(P,-w,0),x.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<a;w++){let v=w+c*u,P=w+c*(u+1),O=w+1+c*(u+1),I=w+1+c*u;m.push(v,P,I),m.push(P,O,I)}this.setIndex(m),this.setAttribute("position",new xn(_,3)),this.setAttribute("normal",new xn(x,3)),this.setAttribute("uv",new xn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},$u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ju=`#ifdef USE_ALPHAHASH
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
#endif`,Ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ju=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ed=`#ifdef USE_AOMAP
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
#endif`,nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,id=`#ifdef USE_BATCHING
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
#endif`,sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,od=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ld=`#ifdef USE_IRIDESCENCE
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
#endif`,cd=`#ifdef USE_BUMPMAP
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
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xd=`#define PI 3.141592653589793
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
} // validated`,yd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vd=`vec3 transformedNormal = objectNormal;
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
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ad=`
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
}`,Td=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Od=`#ifdef USE_GRADIENTMAP
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
}`,Fd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hd=`uniform bool receiveShadow;
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
#endif`,Vd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Gd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yd=`PhysicalMaterial material;
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
#endif`,Zd=`struct PhysicalMaterial {
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
}`,$d=`
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
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ef=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,af=`#if defined( USE_POINTS_UV )
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
#endif`,of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hf=`#ifdef USE_MORPHNORMALS
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
#endif`,uf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
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
#endif`,df=`#ifdef USE_MORPHTARGETS
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
#endif`,ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xf=`#ifdef USE_NORMALMAP
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
#endif`,yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ef=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Df=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uf=`float getShadowMask() {
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
}`,Nf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Of=`#ifdef USE_SKINNING
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
#endif`,Ff=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bf=`#ifdef USE_SKINNING
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
#endif`,zf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vf=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gf=`#ifdef USE_TRANSMISSION
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
#endif`,Wf=`#ifdef USE_TRANSMISSION
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
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jf=`uniform sampler2D t2D;
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
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`#include <common>
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
}`,np=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,ip=`#define DISTANCE
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
}`,sp=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cp=`#include <common>
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
}`,hp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,up=`#define LAMBERT
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
}`,dp=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,fp=`#define MATCAP
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
}`,pp=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,mp=`#define NORMAL
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
}`,gp=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_p=`#define PHONG
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
}`,xp=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,yp=`#define STANDARD
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
}`,vp=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Mp=`#define TOON
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
}`,Sp=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,bp=`uniform float size;
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
}`,Ep=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,wp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Ap=`uniform vec3 color;
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
}`,Tp=`uniform float rotation;
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
}`,Rp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,te={alphahash_fragment:$u,alphahash_pars_fragment:Ju,alphamap_fragment:Ku,alphamap_pars_fragment:ju,alphatest_fragment:Qu,alphatest_pars_fragment:td,aomap_fragment:ed,aomap_pars_fragment:nd,batching_pars_vertex:id,batching_vertex:sd,begin_vertex:rd,beginnormal_vertex:ad,bsdfs:od,iridescence_fragment:ld,bumpmap_pars_fragment:cd,clipping_planes_fragment:hd,clipping_planes_pars_fragment:ud,clipping_planes_pars_vertex:dd,clipping_planes_vertex:fd,color_fragment:pd,color_pars_fragment:md,color_pars_vertex:gd,color_vertex:_d,common:xd,cube_uv_reflection_fragment:yd,defaultnormal_vertex:vd,displacementmap_pars_vertex:Md,displacementmap_vertex:Sd,emissivemap_fragment:bd,emissivemap_pars_fragment:Ed,colorspace_fragment:wd,colorspace_pars_fragment:Ad,envmap_fragment:Td,envmap_common_pars_fragment:Rd,envmap_pars_fragment:Cd,envmap_pars_vertex:Pd,envmap_physical_pars_fragment:Vd,envmap_vertex:Ld,fog_vertex:Id,fog_pars_vertex:Dd,fog_fragment:Ud,fog_pars_fragment:Nd,gradientmap_pars_fragment:Od,lightmap_fragment:Fd,lightmap_pars_fragment:Bd,lights_lambert_fragment:zd,lights_lambert_pars_fragment:kd,lights_pars_begin:Hd,lights_toon_fragment:Gd,lights_toon_pars_fragment:Wd,lights_phong_fragment:Xd,lights_phong_pars_fragment:qd,lights_physical_fragment:Yd,lights_physical_pars_fragment:Zd,lights_fragment_begin:$d,lights_fragment_maps:Jd,lights_fragment_end:Kd,logdepthbuf_fragment:jd,logdepthbuf_pars_fragment:Qd,logdepthbuf_pars_vertex:tf,logdepthbuf_vertex:ef,map_fragment:nf,map_pars_fragment:sf,map_particle_fragment:rf,map_particle_pars_fragment:af,metalnessmap_fragment:of,metalnessmap_pars_fragment:lf,morphcolor_vertex:cf,morphnormal_vertex:hf,morphtarget_pars_vertex:uf,morphtarget_vertex:df,normal_fragment_begin:ff,normal_fragment_maps:pf,normal_pars_fragment:mf,normal_pars_vertex:gf,normal_vertex:_f,normalmap_pars_fragment:xf,clearcoat_normal_fragment_begin:yf,clearcoat_normal_fragment_maps:vf,clearcoat_pars_fragment:Mf,iridescence_pars_fragment:Sf,opaque_fragment:bf,packing:Ef,premultiplied_alpha_fragment:wf,project_vertex:Af,dithering_fragment:Tf,dithering_pars_fragment:Rf,roughnessmap_fragment:Cf,roughnessmap_pars_fragment:Pf,shadowmap_pars_fragment:Lf,shadowmap_pars_vertex:If,shadowmap_vertex:Df,shadowmask_pars_fragment:Uf,skinbase_vertex:Nf,skinning_pars_vertex:Of,skinning_vertex:Ff,skinnormal_vertex:Bf,specularmap_fragment:zf,specularmap_pars_fragment:kf,tonemapping_fragment:Hf,tonemapping_pars_fragment:Vf,transmission_fragment:Gf,transmission_pars_fragment:Wf,uv_pars_fragment:Xf,uv_pars_vertex:qf,uv_vertex:Yf,worldpos_vertex:Zf,background_vert:$f,background_frag:Jf,backgroundCube_vert:Kf,backgroundCube_frag:jf,cube_vert:Qf,cube_frag:tp,depth_vert:ep,depth_frag:np,distanceRGBA_vert:ip,distanceRGBA_frag:sp,equirect_vert:rp,equirect_frag:ap,linedashed_vert:op,linedashed_frag:lp,meshbasic_vert:cp,meshbasic_frag:hp,meshlambert_vert:up,meshlambert_frag:dp,meshmatcap_vert:fp,meshmatcap_frag:pp,meshnormal_vert:mp,meshnormal_frag:gp,meshphong_vert:_p,meshphong_frag:xp,meshphysical_vert:yp,meshphysical_frag:vp,meshtoon_vert:Mp,meshtoon_frag:Sp,points_vert:bp,points_frag:Ep,shadow_vert:wp,shadow_frag:Ap,sprite_vert:Tp,sprite_frag:Rp},dt={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},an={basic:{uniforms:sn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:sn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new me(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:sn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:sn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:sn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new me(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:sn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:sn([dt.points,dt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:sn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:sn([dt.common,dt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:sn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:sn([dt.sprite,dt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:sn([dt.common,dt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:sn([dt.lights,dt.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};an.physical={uniforms:sn([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var br={r:0,b:0,g:0};function Cp(i,t,e,n,s,r,o){let a=new me(0),l=r===!0?0:1,c,h,d=null,f=0,m=null;function _(p,u){let w=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?e:t).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),w=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ta)?(h===void 0&&(h=new hn(new qs(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Ss(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,I,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=xe.getTransfer(v.colorSpace)!==Se,(d!==v||f!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new hn(new no(2,2),new yn({name:"BackgroundMaterial",uniforms:Ss(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=xe.getTransfer(v.colorSpace)!==Se,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,u){p.getRGB(br,Uc(i)),n.buffers.color.setClear(br.r,br.g,br.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:_}}function Pp(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function d(D,z,Z,et,J){let Y=!1;if(o){let st=x(et,Z,z);c!==st&&(c=st,m(c.object)),Y=u(D,et,Z,J),Y&&w(D,et,Z,J)}else{let st=z.wireframe===!0;(c.geometry!==et.id||c.program!==Z.id||c.wireframe!==st)&&(c.geometry=et.id,c.program=Z.id,c.wireframe=st,Y=!0)}J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,j(D,z,Z,et),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function _(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function x(D,z,Z){let et=Z.wireframe===!0,J=a[D.id];J===void 0&&(J={},a[D.id]=J);let Y=J[z.id];Y===void 0&&(Y={},J[z.id]=Y);let st=Y[et];return st===void 0&&(st=p(f()),Y[et]=st),st}function p(D){let z=[],Z=[],et=[];for(let J=0;J<s;J++)z[J]=0,Z[J]=0,et[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Z,attributeDivisors:et,object:D,attributes:{},index:null}}function u(D,z,Z,et){let J=c.attributes,Y=z.attributes,st=0,ot=Z.getAttributes();for(let xt in ot)if(ot[xt].location>=0){let it=J[xt],_t=Y[xt];if(_t===void 0&&(xt==="instanceMatrix"&&D.instanceMatrix&&(_t=D.instanceMatrix),xt==="instanceColor"&&D.instanceColor&&(_t=D.instanceColor)),it===void 0||it.attribute!==_t||_t&&it.data!==_t.data)return!0;st++}return c.attributesNum!==st||c.index!==et}function w(D,z,Z,et){let J={},Y=z.attributes,st=0,ot=Z.getAttributes();for(let xt in ot)if(ot[xt].location>=0){let it=Y[xt];it===void 0&&(xt==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),xt==="instanceColor"&&D.instanceColor&&(it=D.instanceColor));let _t={};_t.attribute=it,it&&it.data&&(_t.data=it.data),J[xt]=_t,st++}c.attributes=J,c.attributesNum=st,c.index=et}function v(){let D=c.newAttributes;for(let z=0,Z=D.length;z<Z;z++)D[z]=0}function P(D){O(D,0)}function O(D,z){let Z=c.newAttributes,et=c.enabledAttributes,J=c.attributeDivisors;Z[D]=1,et[D]===0&&(i.enableVertexAttribArray(D),et[D]=1),J[D]!==z&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,z),J[D]=z)}function I(){let D=c.newAttributes,z=c.enabledAttributes;for(let Z=0,et=z.length;Z<et;Z++)z[Z]!==D[Z]&&(i.disableVertexAttribArray(Z),z[Z]=0)}function T(D,z,Z,et,J,Y,st){st===!0?i.vertexAttribIPointer(D,z,Z,J,Y):i.vertexAttribPointer(D,z,Z,et,J,Y)}function j(D,z,Z,et){if(n.isWebGL2===!1&&(D.isInstancedMesh||et.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let J=et.attributes,Y=Z.getAttributes(),st=z.defaultAttributeValues;for(let ot in Y){let xt=Y[ot];if(xt.location>=0){let q=J[ot];if(q===void 0&&(ot==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),ot==="instanceColor"&&D.instanceColor&&(q=D.instanceColor)),q!==void 0){let it=q.normalized,_t=q.itemSize,It=e.get(q);if(It===void 0)continue;let Rt=It.buffer,kt=It.type,Gt=It.bytesPerElement,Ot=n.isWebGL2===!0&&(kt===i.INT||kt===i.UNSIGNED_INT||q.gpuType===bc);if(q.isInterleavedBufferAttribute){let Ut=q.data,k=Ut.stride,ye=q.offset;if(Ut.isInstancedInterleavedBuffer){for(let Ct=0;Ct<xt.locationSize;Ct++)O(xt.location+Ct,Ut.meshPerAttribute);D.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let Ct=0;Ct<xt.locationSize;Ct++)P(xt.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let Ct=0;Ct<xt.locationSize;Ct++)T(xt.location+Ct,_t/xt.locationSize,kt,it,k*Gt,(ye+_t/xt.locationSize*Ct)*Gt,Ot)}else{if(q.isInstancedBufferAttribute){for(let Ut=0;Ut<xt.locationSize;Ut++)O(xt.location+Ut,q.meshPerAttribute);D.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ut=0;Ut<xt.locationSize;Ut++)P(xt.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let Ut=0;Ut<xt.locationSize;Ut++)T(xt.location+Ut,_t/xt.locationSize,kt,it,_t*Gt,_t/xt.locationSize*Ut*Gt,Ot)}}else if(st!==void 0){let it=st[ot];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(xt.location,it);break;case 3:i.vertexAttrib3fv(xt.location,it);break;case 4:i.vertexAttrib4fv(xt.location,it);break;default:i.vertexAttrib1fv(xt.location,it)}}}}I()}function S(){tt();for(let D in a){let z=a[D];for(let Z in z){let et=z[Z];for(let J in et)_(et[J].object),delete et[J];delete z[Z]}delete a[D]}}function E(D){if(a[D.id]===void 0)return;let z=a[D.id];for(let Z in z){let et=z[Z];for(let J in et)_(et[J].object),delete et[J];delete z[Z]}delete a[D.id]}function W(D){for(let z in a){let Z=a[z];if(Z[D.id]===void 0)continue;let et=Z[D.id];for(let J in et)_(et[J].object),delete et[J];delete Z[D.id]}}function tt(){mt(),h=!0,c!==l&&(c=l,m(c.object))}function mt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:tt,resetDefaultState:mt,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:W,initAttributes:v,enableAttribute:P,disableUnusedAttributes:I}}function Lp(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),e.update(d,r,1)}function l(h,d,f){if(f===0)return;let m,_;if(s)m=i,_="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,h,d,f),e.update(d,r,f)}function c(h,d,f){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(h[_],d[_]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let _=0;for(let x=0;x<f;x++)_+=d[x];e.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Ip(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,P=o||t.has("OES_texture_float"),O=v&&P,I=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:w,vertexTextures:v,floatFragmentTextures:P,floatVertexTextures:O,maxSamples:I}}function Dp(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Cn,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){let _=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{let w=r?0:n,v=w*4,P=u.clippingState||null;l.value=P,P=h(_,f,v,m);for(let O=0;O!==v;++O)P[O]=e[O];u.clippingState=P,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,_){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,_!==!0||p===null){let u=m+x*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,P=m;v!==x;++v,P+=4)o.copy(d[v]).applyMatrix4(w,a),o.normal.toArray(p,P),p[P+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Up(i){let t=new WeakMap;function e(o,a){return a===Xa?o.mapping=_s:a===qa&&(o.mapping=xs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Xa||a===qa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new eo(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var io=class extends Gr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},us=4,Jl=[.125,.215,.35,.446,.526,.582],Ii=20,Ba=new io,Kl=new me,za=null,ka=0,Ha=0,Pi=(1+Math.sqrt(5))/2,cs=1/Pi,jl=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Pi,cs),new N(0,Pi,-cs),new N(cs,0,Pi),new N(-cs,0,Pi),new N(Pi,cs,0),new N(-Pi,cs,0)],qr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){za=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(za,ka,Ha),t.scissorTest=!1,Er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),za=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Gs,format:_n,colorSpace:ni,depthBuffer:!1},s=Ql(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Np(r)),this._blurMaterial=Op(r,t,e)}return s}_compileMaterial(t){let e=new hn(this._lodPlanes[0],t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,n,s){let a=new rn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Kl),h.toneMapping=_i,h.autoClear=!1;let m=new kr({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),_=new hn(new qs,m),x=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,x=!0):(m.color.copy(Kl),x=!0);for(let u=0;u<6;u++){let w=u%3;w===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):w===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let v=this._cubeSize;Er(s,w*v,u>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===_s||t.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new hn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Er(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ba)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=jl[(s-1)%jl.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new hn(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ii-1),x=r/_,p=isFinite(r)?1+Math.floor(h*x):Ii;p>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ii}`);let u=[],w=0;for(let T=0;T<Ii;++T){let j=T/x,S=Math.exp(-j*j/2);u.push(S),T===0?w+=S:T<p&&(w+=2*S)}for(let T=0;T<u.length;T++)u[T]=u[T]/w;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;let P=this._sizeLods[s],O=3*P*(s>v-us?s-v+us:0),I=4*(this._cubeSize-P);Er(e,O,I,3*P,2*P),l.setRenderTarget(e),l.render(d,Ba)}};function Np(i){let t=[],e=[],n=[],s=i,r=i-us+1+Jl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-us?l=Jl[o-i+us-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,x=3,p=2,u=1,w=new Float32Array(x*_*m),v=new Float32Array(p*_*m),P=new Float32Array(u*_*m);for(let I=0;I<m;I++){let T=I%3*2/3-1,j=I>2?0:-1,S=[T,j,0,T+2/3,j,0,T+2/3,j+1,0,T,j,0,T+2/3,j+1,0,T,j+1,0];w.set(S,x*_*I),v.set(f,p*_*I);let E=[I,I,I,I,I,I];P.set(E,u*_*I)}let O=new Dn;O.setAttribute("position",new De(w,x)),O.setAttribute("uv",new De(v,p)),O.setAttribute("faceIndex",new De(P,u)),t.push(O),s>us&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ql(i,t,e){let n=new ii(i,t,e);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Er(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Op(i,t,e){let n=new Float32Array(Ii),s=new N(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Io(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function tc(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function ec(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Io(){return`

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
	`}function Fp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Xa||l===qa,h=l===_s||l===xs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new qr(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){e===null&&(e=new qr(i));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Bp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function zp(i,t,e,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let x=f.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)t.remove(x[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let _ in f)t.update(f[_],i.ARRAY_BUFFER);let m=d.morphAttributes;for(let _ in m){let x=m[_];for(let p=0,u=x.length;p<u;p++)t.update(x[p],i.ARRAY_BUFFER)}}function c(d){let f=[],m=d.index,_=d.attributes.position,x=0;if(m!==null){let w=m.array;x=m.version;for(let v=0,P=w.length;v<P;v+=3){let O=w[v+0],I=w[v+1],T=w[v+2];f.push(O,I,I,T,T,O)}}else if(_!==void 0){let w=_.array;x=_.version;for(let v=0,P=w.length/3-1;v<P;v+=3){let O=v+0,I=v+1,T=v+2;f.push(O,I,I,T,T,O)}}else return;let p=new(Ic(f)?Vr:Hr)(f,1);p.version=x;let u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function kp(i,t,e,n){let s=n.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,_){i.drawElements(r,_,a,m*l),e.update(_,r,1)}function d(m,_,x){if(x===0)return;let p,u;if(s)p=i,u="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,_,a,m*l,x),e.update(_,r,x)}function f(m,_,x){if(x===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<x;u++)this.render(m[u]/l,_[u]);else{p.multiDrawElementsWEBGL(r,_,0,a,m,0,x);let u=0;for(let w=0;w<x;w++)u+=_[w];e.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function Hp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Vp(i,t){return i[0]-t[0]}function Gp(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Wp(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new Re,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0,x=r.get(h);if(x===void 0||x.count!==_){let D=function(){tt.dispose(),r.delete(h),h.removeEventListener("dispose",D)};x!==void 0&&x.texture.dispose();let w=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,O=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],j=0;w===!0&&(j=1),v===!0&&(j=2),P===!0&&(j=3);let S=h.attributes.position.count*j,E=1;S>t.maxTextureSize&&(E=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let W=new Float32Array(S*E*4*_),tt=new Br(W,S,E,_);tt.type=mi,tt.needsUpdate=!0;let mt=j*4;for(let z=0;z<_;z++){let Z=O[z],et=I[z],J=T[z],Y=S*E*4*z;for(let st=0;st<Z.count;st++){let ot=st*mt;w===!0&&(o.fromBufferAttribute(Z,st),W[Y+ot+0]=o.x,W[Y+ot+1]=o.y,W[Y+ot+2]=o.z,W[Y+ot+3]=0),v===!0&&(o.fromBufferAttribute(et,st),W[Y+ot+4]=o.x,W[Y+ot+5]=o.y,W[Y+ot+6]=o.z,W[Y+ot+7]=0),P===!0&&(o.fromBufferAttribute(J,st),W[Y+ot+8]=o.x,W[Y+ot+9]=o.y,W[Y+ot+10]=o.z,W[Y+ot+11]=J.itemSize===4?o.w:1)}}x={count:_,texture:tt,size:new Zt(S,E)},r.set(h,x),h.addEventListener("dispose",D)}let p=0;for(let w=0;w<f.length;w++)p+=f[w];let u=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",u),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let m=f===void 0?0:f.length,_=n[h.id];if(_===void 0||_.length!==m){_=[];for(let v=0;v<m;v++)_[v]=[v,0];n[h.id]=_}for(let v=0;v<m;v++){let P=_[v];P[0]=v,P[1]=f[v]}_.sort(Gp);for(let v=0;v<8;v++)v<m&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Vp);let x=h.morphAttributes.position,p=h.morphAttributes.normal,u=0;for(let v=0;v<8;v++){let P=a[v],O=P[0],I=P[1];O!==Number.MAX_SAFE_INTEGER&&I?(x&&h.getAttribute("morphTarget"+v)!==x[O]&&h.setAttribute("morphTarget"+v,x[O]),p&&h.getAttribute("morphNormal"+v)!==p[O]&&h.setAttribute("morphNormal"+v,p[O]),s[v]=I,u+=I):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let w=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(i,"morphTargetBaseInfluence",w),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Xp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Yr=class extends dn{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Ui,h!==Ui&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ui&&(n=pi),n===void 0&&h===ys&&(n=Di),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ne,this.minFilter=l!==void 0?l:Ne,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Oc=new dn,Fc=new Yr(1,1);Fc.compareFunction=Lc;var Bc=new Br,zc=new Qa,kc=new Wr,nc=[],ic=[],sc=new Float32Array(16),rc=new Float32Array(9),ac=new Float32Array(4);function Es(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=nc[s];if(r===void 0&&(r=new Float32Array(s),nc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ra(i,t){let e=ic[t];e===void 0&&(e=new Int32Array(t),ic[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function Zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function $p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function Jp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;ac.set(n),i.uniformMatrix2fv(this.addr,!1,ac),Fe(e,n)}}function Kp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;rc.set(n),i.uniformMatrix3fv(this.addr,!1,rc),Fe(e,n)}}function jp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;sc.set(n),i.uniformMatrix4fv(this.addr,!1,sc),Fe(e,n)}}function Qp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function im(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function om(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Fc:Oc;e.setTexture2D(t||r,s)}function lm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zc,s)}function cm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||kc,s)}function hm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bc,s)}function um(i){switch(i){case 5126:return qp;case 35664:return Yp;case 35665:return Zp;case 35666:return $p;case 35674:return Jp;case 35675:return Kp;case 35676:return jp;case 5124:case 35670:return Qp;case 35667:case 35671:return tm;case 35668:case 35672:return em;case 35669:case 35673:return nm;case 5125:return im;case 36294:return sm;case 36295:return rm;case 36296:return am;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return hm}}function dm(i,t){i.uniform1fv(this.addr,t)}function fm(i,t){let e=Es(t,this.size,2);i.uniform2fv(this.addr,e)}function pm(i,t){let e=Es(t,this.size,3);i.uniform3fv(this.addr,e)}function mm(i,t){let e=Es(t,this.size,4);i.uniform4fv(this.addr,e)}function gm(i,t){let e=Es(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _m(i,t){let e=Es(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function xm(i,t){let e=Es(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ym(i,t){i.uniform1iv(this.addr,t)}function vm(i,t){i.uniform2iv(this.addr,t)}function Mm(i,t){i.uniform3iv(this.addr,t)}function Sm(i,t){i.uniform4iv(this.addr,t)}function bm(i,t){i.uniform1uiv(this.addr,t)}function Em(i,t){i.uniform2uiv(this.addr,t)}function wm(i,t){i.uniform3uiv(this.addr,t)}function Am(i,t){i.uniform4uiv(this.addr,t)}function Tm(i,t,e){let n=this.cache,s=t.length,r=ra(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Oc,r[o])}function Rm(i,t,e){let n=this.cache,s=t.length,r=ra(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||zc,r[o])}function Cm(i,t,e){let n=this.cache,s=t.length,r=ra(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||kc,r[o])}function Pm(i,t,e){let n=this.cache,s=t.length,r=ra(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bc,r[o])}function Lm(i){switch(i){case 5126:return dm;case 35664:return fm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return _m;case 35676:return xm;case 5124:case 35670:return ym;case 35667:case 35671:return vm;case 35668:case 35672:return Mm;case 35669:case 35673:return Sm;case 5125:return bm;case 36294:return Em;case 36295:return wm;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Pm}}var so=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=um(e.type)}},ro=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lm(e.type)}},ao=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Va=/(\w+)(\])?(\[|\.)?/g;function oc(i,t){i.seq.push(t),i.map[t.id]=t}function Im(i,t,e){let n=i.name,s=n.length;for(Va.lastIndex=0;;){let r=Va.exec(n),o=Va.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){oc(e,c===void 0?new so(a,i,t):new ro(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new ao(a),oc(e,d)),e=d}}}var gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Im(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function lc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Dm=37297,Um=0;function Nm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Om(i){let t=xe.getPrimaries(xe.workingColorSpace),e=xe.getPrimaries(i),n;switch(t===e?n="":t===Ir&&e===Lr?n="LinearDisplayP3ToLinearSRGB":t===Lr&&e===Ir&&(n="LinearSRGBToLinearDisplayP3"),i){case ni:case ea:return[n,"LinearTransferOETF"];case Ge:case Po:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function cc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Nm(i.getShaderSource(t),o)}else return s}function Fm(i,t){let e=Om(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Bm(i,t){let e;switch(t){case Vh:e="Linear";break;case Gh:e="Reinhard";break;case Wh:e="OptimizedCineon";break;case Xh:e="ACESFilmic";break;case Yh:e="AgX";break;case qh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function zm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ds).join(`
`)}function km(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ds).join(`
`)}function Hm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ds(i){return i!==""}function hc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gm=/^[ \t]*#include +<([\w\d./]+)>/gm;function oo(i){return i.replace(Gm,Xm)}var Wm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Xm(i,t){let e=te[t];if(e===void 0){let n=Wm.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return oo(e)}var qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(i){return i.replace(qm,Ym)}function Ym(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fc(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===gh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function $m(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case xs:t="ENVMAP_TYPE_CUBE";break;case ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case xs:t="ENVMAP_MODE_REFRACTION";break}return t}function Km(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Mc:t="ENVMAP_BLENDING_MULTIPLY";break;case kh:t="ENVMAP_BLENDING_MIX";break;case Hh:t="ENVMAP_BLENDING_ADD";break}return t}function jm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Qm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Zm(e),c=$m(e),h=Jm(e),d=Km(e),f=jm(e),m=e.isWebGL2?"":zm(e),_=km(e),x=Hm(r),p=s.createProgram(),u,w,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ds).join(`
`),u.length>0&&(u+=`
`),w=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ds).join(`
`),w.length>0&&(w+=`
`)):(u=[fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),w=[m,fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?te.tonemapping_pars_fragment:"",e.toneMapping!==_i?Bm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Fm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ds).join(`
`)),o=oo(o),o=hc(o,e),o=uc(o,e),a=oo(a),a=hc(a,e),a=uc(a,e),o=dc(o),a=dc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,w=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);let P=v+u+o,O=v+w+a,I=lc(s,s.VERTEX_SHADER,P),T=lc(s,s.FRAGMENT_SHADER,O);s.attachShader(p,I),s.attachShader(p,T),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function j(tt){if(i.debug.checkShaderErrors){let mt=s.getProgramInfoLog(p).trim(),D=s.getShaderInfoLog(I).trim(),z=s.getShaderInfoLog(T).trim(),Z=!0,et=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,I,T);else{let J=cc(s,I,"vertex"),Y=cc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+mt+`
`+J+`
`+Y)}else mt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",mt):(D===""||z==="")&&(et=!1);et&&(tt.diagnostics={runnable:Z,programLog:mt,vertexShader:{log:D,prefix:u},fragmentShader:{log:z,prefix:w}})}s.deleteShader(I),s.deleteShader(T),S=new gs(s,p),E=Vm(s,p)}let S;this.getUniforms=function(){return S===void 0&&j(this),S};let E;this.getAttributes=function(){return E===void 0&&j(this),E};let W=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=s.getProgramParameter(p,Dm)),W},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Um++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=I,this.fragmentShader=T,this}var tg=0,lo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new co(t),e.set(t,n)),n}},co=class{constructor(t){this.id=tg++,this.code=t,this.usedTimes=0}};function eg(i,t,e,n,s,r,o){let a=new Xs,l=new lo,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function p(S,E,W,tt,mt){let D=tt.fog,z=mt.geometry,Z=S.isMeshStandardMaterial?tt.environment:null,et=(S.isMeshStandardMaterial?e:t).get(S.envMap||Z),J=et&&et.mapping===ta?et.image.height:null,Y=_[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let st=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ot=st!==void 0?st.length:0,xt=0;z.morphAttributes.position!==void 0&&(xt=1),z.morphAttributes.normal!==void 0&&(xt=2),z.morphAttributes.color!==void 0&&(xt=3);let q,it,_t,It;if(Y){let ke=an[Y];q=ke.vertexShader,it=ke.fragmentShader}else q=S.vertexShader,it=S.fragmentShader,l.update(S),_t=l.getVertexShaderID(S),It=l.getFragmentShaderID(S);let Rt=i.getRenderTarget(),kt=mt.isInstancedMesh===!0,Gt=mt.isBatchedMesh===!0,Ot=!!S.map,Ut=!!S.matcap,k=!!et,ye=!!S.aoMap,Ct=!!S.lightMap,Ht=!!S.bumpMap,vt=!!S.normalMap,ue=!!S.displacementMap,Wt=!!S.emissiveMap,b=!!S.metalnessMap,g=!!S.roughnessMap,V=S.anisotropy>0,at=S.clearcoat>0,Q=S.iridescence>0,rt=S.sheen>0,Lt=S.transmission>0,gt=V&&!!S.anisotropyMap,bt=at&&!!S.clearcoatMap,Dt=at&&!!S.clearcoatNormalMap,Yt=at&&!!S.clearcoatRoughnessMap,nt=Q&&!!S.iridescenceMap,ee=Q&&!!S.iridescenceThicknessMap,A=rt&&!!S.sheenColorMap,K=rt&&!!S.sheenRoughnessMap,ct=!!S.specularMap,lt=!!S.specularColorMap,Pt=!!S.specularIntensityMap,Kt=Lt&&!!S.transmissionMap,ne=Lt&&!!S.thicknessMap,Jt=!!S.gradientMap,ft=!!S.alphaMap,C=S.alphaTest>0,ht=!!S.alphaHash,ut=!!S.extensions,Ft=!!z.attributes.uv1,At=!!z.attributes.uv2,ie=!!z.attributes.uv3,ce=_i;return S.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(ce=i.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:it,defines:S.defines,customVertexShaderID:_t,customFragmentShaderID:It,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Gt,instancing:kt,instancingColor:kt&&mt.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Rt===null?i.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:ni,map:Ot,matcap:Ut,envMap:k,envMapMode:k&&et.mapping,envMapCubeUVHeight:J,aoMap:ye,lightMap:Ct,bumpMap:Ht,normalMap:vt,displacementMap:f&&ue,emissiveMap:Wt,normalMapObjectSpace:vt&&S.normalMapType===au,normalMapTangentSpace:vt&&S.normalMapType===ru,metalnessMap:b,roughnessMap:g,anisotropy:V,anisotropyMap:gt,clearcoat:at,clearcoatMap:bt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Yt,iridescence:Q,iridescenceMap:nt,iridescenceThicknessMap:ee,sheen:rt,sheenColorMap:A,sheenRoughnessMap:K,specularMap:ct,specularColorMap:lt,specularIntensityMap:Pt,transmission:Lt,transmissionMap:Kt,thicknessMap:ne,gradientMap:Jt,opaque:S.transparent===!1&&S.blending===ps,alphaMap:ft,alphaTest:C,alphaHash:ht,combine:S.combine,mapUv:Ot&&x(S.map.channel),aoMapUv:ye&&x(S.aoMap.channel),lightMapUv:Ct&&x(S.lightMap.channel),bumpMapUv:Ht&&x(S.bumpMap.channel),normalMapUv:vt&&x(S.normalMap.channel),displacementMapUv:ue&&x(S.displacementMap.channel),emissiveMapUv:Wt&&x(S.emissiveMap.channel),metalnessMapUv:b&&x(S.metalnessMap.channel),roughnessMapUv:g&&x(S.roughnessMap.channel),anisotropyMapUv:gt&&x(S.anisotropyMap.channel),clearcoatMapUv:bt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:A&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:K&&x(S.sheenRoughnessMap.channel),specularMapUv:ct&&x(S.specularMap.channel),specularColorMapUv:lt&&x(S.specularColorMap.channel),specularIntensityMapUv:Pt&&x(S.specularIntensityMap.channel),transmissionMapUv:Kt&&x(S.transmissionMap.channel),thicknessMapUv:ne&&x(S.thicknessMap.channel),alphaMapUv:ft&&x(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(vt||V),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Ft,vertexUv2s:At,vertexUv3s:ie,pointsUvs:mt.isPoints===!0&&!!z.attributes.uv&&(Ot||ft),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:mt.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:xt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ot&&S.map.isVideoTexture===!0&&xe.getTransfer(S.map.colorSpace)===Se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Qn,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ut&&S.extensions.derivatives===!0,extensionFragDepth:ut&&S.extensions.fragDepth===!0,extensionDrawBuffers:ut&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let W in S.defines)E.push(W),E.push(S.defines[W]);return S.isRawShaderMaterial===!1&&(w(E,S),v(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function w(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function v(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function P(S){let E=_[S.type],W;if(E){let tt=an[E];W=sa.clone(tt.uniforms)}else W=S.uniforms;return W}function O(S,E){let W;for(let tt=0,mt=c.length;tt<mt;tt++){let D=c[tt];if(D.cacheKey===E){W=D,++W.usedTimes;break}}return W===void 0&&(W=new Qm(i,E,S,r),c.push(W)),W}function I(S){if(--S.usedTimes===0){let E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),S.destroy()}}function T(S){l.remove(S)}function j(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:P,acquireProgram:O,releaseProgram:I,releaseShaderCache:T,programs:c,dispose:j}}function ng(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function ig(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,m,_,x,p){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:x,group:p},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=x,u.group=p),t++,u}function a(d,f,m,_,x,p){let u=o(d,f,m,_,x,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(d,f,m,_,x,p){let u=o(d,f,m,_,x,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||ig),n.length>1&&n.sort(f||pc),s.length>1&&s.sort(f||pc)}function h(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function sg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new mc,i.set(n,[o])):s>=r.length?(o=new mc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function rg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new me};break;case"SpotLight":e={position:new N,direction:new N,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new me,groundColor:new me};break;case"RectAreaLight":e={color:new me,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function ag(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var og=0;function lg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function cg(i,t){let e=new rg,n=ag(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new N);let r=new N,o=new Ie,a=new Ie;function l(h,d){let f=0,m=0,_=0;for(let tt=0;tt<9;tt++)s.probe[tt].set(0,0,0);let x=0,p=0,u=0,w=0,v=0,P=0,O=0,I=0,T=0,j=0,S=0;h.sort(lg);let E=d===!0?Math.PI:1;for(let tt=0,mt=h.length;tt<mt;tt++){let D=h[tt],z=D.color,Z=D.intensity,et=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=z.r*Z*E,m+=z.g*Z*E,_+=z.b*Z*E;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(D.sh.coefficients[Y],Z);S++}else if(D.isDirectionalLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){let st=D.shadow,ot=n.get(D);ot.shadowBias=st.bias,ot.shadowNormalBias=st.normalBias,ot.shadowRadius=st.radius,ot.shadowMapSize=st.mapSize,s.directionalShadow[x]=ot,s.directionalShadowMap[x]=J,s.directionalShadowMatrix[x]=D.shadow.matrix,P++}s.directional[x]=Y,x++}else if(D.isSpotLight){let Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(z).multiplyScalar(Z*E),Y.distance=et,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,s.spot[u]=Y;let st=D.shadow;if(D.map&&(s.spotLightMap[T]=D.map,T++,st.updateMatrices(D),D.castShadow&&j++),s.spotLightMatrix[u]=st.matrix,D.castShadow){let ot=n.get(D);ot.shadowBias=st.bias,ot.shadowNormalBias=st.normalBias,ot.shadowRadius=st.radius,ot.shadowMapSize=st.mapSize,s.spotShadow[u]=ot,s.spotShadowMap[u]=J,I++}u++}else if(D.isRectAreaLight){let Y=e.get(D);Y.color.copy(z).multiplyScalar(Z),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),s.rectArea[w]=Y,w++}else if(D.isPointLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*E),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){let st=D.shadow,ot=n.get(D);ot.shadowBias=st.bias,ot.shadowNormalBias=st.normalBias,ot.shadowRadius=st.radius,ot.shadowMapSize=st.mapSize,ot.shadowCameraNear=st.camera.near,ot.shadowCameraFar=st.camera.far,s.pointShadow[p]=ot,s.pointShadowMap[p]=J,s.pointShadowMatrix[p]=D.shadow.matrix,O++}s.point[p]=Y,p++}else if(D.isHemisphereLight){let Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(Z*E),Y.groundColor.copy(D.groundColor).multiplyScalar(Z*E),s.hemi[v]=Y,v++}}w>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=_;let W=s.hash;(W.directionalLength!==x||W.pointLength!==p||W.spotLength!==u||W.rectAreaLength!==w||W.hemiLength!==v||W.numDirectionalShadows!==P||W.numPointShadows!==O||W.numSpotShadows!==I||W.numSpotMaps!==T||W.numLightProbes!==S)&&(s.directional.length=x,s.spot.length=u,s.rectArea.length=w,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=I+T-j,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=j,s.numLightProbes=S,W.directionalLength=x,W.pointLength=p,W.spotLength=u,W.rectAreaLength=w,W.hemiLength=v,W.numDirectionalShadows=P,W.numPointShadows=O,W.numSpotShadows=I,W.numSpotMaps=T,W.numLightProbes=S,s.version=og++)}function c(h,d){let f=0,m=0,_=0,x=0,p=0,u=d.matrixWorldInverse;for(let w=0,v=h.length;w<v;w++){let P=h[w];if(P.isDirectionalLight){let O=s.directional[f];O.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(u),f++}else if(P.isSpotLight){let O=s.spot[_];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(u),O.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(u),_++}else if(P.isRectAreaLight){let O=s.rectArea[x];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(u),a.identity(),o.copy(P.matrixWorld),o.premultiply(u),a.extractRotation(o),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),O.halfWidth.applyMatrix4(a),O.halfHeight.applyMatrix4(a),x++}else if(P.isPointLight){let O=s.point[m];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(u),m++}else if(P.isHemisphereLight){let O=s.hemi[p];O.direction.setFromMatrixPosition(P.matrixWorld),O.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:s}}function gc(i,t){let e=new cg(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function hg(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new gc(i,t),e.set(r,[l])):o>=a.length?(l=new gc(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var ho=class extends Ms{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},uo=class extends Ms{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dg=`uniform sampler2D shadow_pass;
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
}`;function fg(i,t,e){let n=new Xr,s=new Zt,r=new Zt,o=new Re,a=new ho({depthPacking:su}),l=new uo,c={},h=e.maxTextureSize,d={[yi]:un,[un]:yi,[Qn]:Qn},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:ug,fragmentShader:dg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let _=new Dn;_.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new hn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vc;let u=this.type;this.render=function(I,T,j){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;let S=i.getRenderTarget(),E=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),tt=i.state;tt.setBlending(gi),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);let mt=u!==jn&&this.type===jn,D=u===jn&&this.type!==jn;for(let z=0,Z=I.length;z<Z;z++){let et=I[z],J=et.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let Y=J.getFrameExtents();if(s.multiply(Y),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,J.mapSize.y=r.y)),J.map===null||mt===!0||D===!0){let ot=this.type!==jn?{minFilter:Ne,magFilter:Ne}:{};J.map!==null&&J.map.dispose(),J.map=new ii(s.x,s.y,ot),J.map.texture.name=et.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let st=J.getViewportCount();for(let ot=0;ot<st;ot++){let xt=J.getViewport(ot);o.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),tt.viewport(o),J.updateMatrices(et,ot),n=J.getFrustum(),P(T,j,J.camera,et,this.type)}J.isPointLightShadow!==!0&&this.type===jn&&w(J,j),J.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(S,E,W)};function w(I,T){let j=t.update(x);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ii(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(T,null,j,f,x,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(T,null,j,m,x,null)}function v(I,T,j,S){let E=null,W=j.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(W!==void 0)E=W;else if(E=j.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let tt=E.uuid,mt=T.uuid,D=c[tt];D===void 0&&(D={},c[tt]=D);let z=D[mt];z===void 0&&(z=E.clone(),D[mt]=z,T.addEventListener("dispose",O)),E=z}if(E.visible=T.visible,E.wireframe=T.wireframe,S===jn?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:d[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,j.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let tt=i.properties.get(E);tt.light=j}return E}function P(I,T,j,S,E){if(I.visible===!1)return;if(I.layers.test(T.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&E===jn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,I.matrixWorld);let mt=t.update(I),D=I.material;if(Array.isArray(D)){let z=mt.groups;for(let Z=0,et=z.length;Z<et;Z++){let J=z[Z],Y=D[J.materialIndex];if(Y&&Y.visible){let st=v(I,Y,S,E);I.onBeforeShadow(i,I,T,j,mt,st,J),i.renderBufferDirect(j,null,mt,st,I,J),I.onAfterShadow(i,I,T,j,mt,st,J)}}}else if(D.visible){let z=v(I,D,S,E);I.onBeforeShadow(i,I,T,j,mt,z,null),i.renderBufferDirect(j,null,mt,z,I,null),I.onAfterShadow(i,I,T,j,mt,z,null)}}let tt=I.children;for(let mt=0,D=tt.length;mt<D;mt++)P(tt[mt],T,j,S,E)}function O(I){I.target.removeEventListener("dispose",O);for(let j in c){let S=c[j],E=I.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function pg(i,t,e){let n=e.isWebGL2;function s(){let C=!1,ht=new Re,ut=null,Ft=new Re(0,0,0,0);return{setMask:function(At){ut!==At&&!C&&(i.colorMask(At,At,At,At),ut=At)},setLocked:function(At){C=At},setClear:function(At,ie,ce,Ae,ke){ke===!0&&(At*=Ae,ie*=Ae,ce*=Ae),ht.set(At,ie,ce,Ae),Ft.equals(ht)===!1&&(i.clearColor(At,ie,ce,Ae),Ft.copy(ht))},reset:function(){C=!1,ut=null,Ft.set(-1,0,0,0)}}}function r(){let C=!1,ht=null,ut=null,Ft=null;return{setTest:function(At){At?Gt(i.DEPTH_TEST):Ot(i.DEPTH_TEST)},setMask:function(At){ht!==At&&!C&&(i.depthMask(At),ht=At)},setFunc:function(At){if(ut!==At){switch(At){case Dh:i.depthFunc(i.NEVER);break;case Uh:i.depthFunc(i.ALWAYS);break;case Nh:i.depthFunc(i.LESS);break;case Tr:i.depthFunc(i.LEQUAL);break;case Oh:i.depthFunc(i.EQUAL);break;case Fh:i.depthFunc(i.GEQUAL);break;case Bh:i.depthFunc(i.GREATER);break;case zh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=At}},setLocked:function(At){C=At},setClear:function(At){Ft!==At&&(i.clearDepth(At),Ft=At)},reset:function(){C=!1,ht=null,ut=null,Ft=null}}}function o(){let C=!1,ht=null,ut=null,Ft=null,At=null,ie=null,ce=null,Ae=null,ke=null;return{setTest:function(ge){C||(ge?Gt(i.STENCIL_TEST):Ot(i.STENCIL_TEST))},setMask:function(ge){ht!==ge&&!C&&(i.stencilMask(ge),ht=ge)},setFunc:function(ge,Et,on){(ut!==ge||Ft!==Et||At!==on)&&(i.stencilFunc(ge,Et,on),ut=ge,Ft=Et,At=on)},setOp:function(ge,Et,on){(ie!==ge||ce!==Et||Ae!==on)&&(i.stencilOp(ge,Et,on),ie=ge,ce=Et,Ae=on)},setLocked:function(ge){C=ge},setClear:function(ge){ke!==ge&&(i.clearStencil(ge),ke=ge)},reset:function(){C=!1,ht=null,ut=null,Ft=null,At=null,ie=null,ce=null,Ae=null,ke=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,f={},m={},_=new WeakMap,x=[],p=null,u=!1,w=null,v=null,P=null,O=null,I=null,T=null,j=null,S=new me(0,0,0),E=0,W=!1,tt=null,mt=null,D=null,z=null,Z=null,et=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,Y=0,st=i.getParameter(i.VERSION);st.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(st)[1]),J=Y>=1):st.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),J=Y>=2);let ot=null,xt={},q=i.getParameter(i.SCISSOR_BOX),it=i.getParameter(i.VIEWPORT),_t=new Re().fromArray(q),It=new Re().fromArray(it);function Rt(C,ht,ut,Ft){let At=new Uint8Array(4),ie=i.createTexture();i.bindTexture(C,ie),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ce=0;ce<ut;ce++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(ht,0,i.RGBA,1,1,Ft,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(ht+ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return ie}let kt={};kt[i.TEXTURE_2D]=Rt(i.TEXTURE_2D,i.TEXTURE_2D,1),kt[i.TEXTURE_CUBE_MAP]=Rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(kt[i.TEXTURE_2D_ARRAY]=Rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),kt[i.TEXTURE_3D]=Rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Gt(i.DEPTH_TEST),l.setFunc(Tr),Wt(!1),b(Jo),Gt(i.CULL_FACE),vt(gi);function Gt(C){f[C]!==!0&&(i.enable(C),f[C]=!0)}function Ot(C){f[C]!==!1&&(i.disable(C),f[C]=!1)}function Ut(C,ht){return m[C]!==ht?(i.bindFramebuffer(C,ht),m[C]=ht,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ht),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ht)),!0):!1}function k(C,ht){let ut=x,Ft=!1;if(C)if(ut=_.get(ht),ut===void 0&&(ut=[],_.set(ht,ut)),C.isWebGLMultipleRenderTargets){let At=C.texture;if(ut.length!==At.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,ce=At.length;ie<ce;ie++)ut[ie]=i.COLOR_ATTACHMENT0+ie;ut.length=At.length,Ft=!0}}else ut[0]!==i.COLOR_ATTACHMENT0&&(ut[0]=i.COLOR_ATTACHMENT0,Ft=!0);else ut[0]!==i.BACK&&(ut[0]=i.BACK,Ft=!0);Ft&&(e.isWebGL2?i.drawBuffers(ut):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut))}function ye(C){return p!==C?(i.useProgram(C),p=C,!0):!1}let Ct={[Li]:i.FUNC_ADD,[xh]:i.FUNC_SUBTRACT,[yh]:i.FUNC_REVERSE_SUBTRACT};if(n)Ct[tl]=i.MIN,Ct[el]=i.MAX;else{let C=t.get("EXT_blend_minmax");C!==null&&(Ct[tl]=C.MIN_EXT,Ct[el]=C.MAX_EXT)}let Ht={[vh]:i.ZERO,[Mh]:i.ONE,[Sh]:i.SRC_COLOR,[Ga]:i.SRC_ALPHA,[Rh]:i.SRC_ALPHA_SATURATE,[Ah]:i.DST_COLOR,[Eh]:i.DST_ALPHA,[bh]:i.ONE_MINUS_SRC_COLOR,[Wa]:i.ONE_MINUS_SRC_ALPHA,[Th]:i.ONE_MINUS_DST_COLOR,[wh]:i.ONE_MINUS_DST_ALPHA,[Ch]:i.CONSTANT_COLOR,[Ph]:i.ONE_MINUS_CONSTANT_COLOR,[Lh]:i.CONSTANT_ALPHA,[Ih]:i.ONE_MINUS_CONSTANT_ALPHA};function vt(C,ht,ut,Ft,At,ie,ce,Ae,ke,ge){if(C===gi){u===!0&&(Ot(i.BLEND),u=!1);return}if(u===!1&&(Gt(i.BLEND),u=!0),C!==_h){if(C!==w||ge!==W){if((v!==Li||I!==Li)&&(i.blendEquation(i.FUNC_ADD),v=Li,I=Li),ge)switch(C){case ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ko:i.blendFunc(i.ONE,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ko:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}P=null,O=null,T=null,j=null,S.set(0,0,0),E=0,w=C,W=ge}return}At=At||ht,ie=ie||ut,ce=ce||Ft,(ht!==v||At!==I)&&(i.blendEquationSeparate(Ct[ht],Ct[At]),v=ht,I=At),(ut!==P||Ft!==O||ie!==T||ce!==j)&&(i.blendFuncSeparate(Ht[ut],Ht[Ft],Ht[ie],Ht[ce]),P=ut,O=Ft,T=ie,j=ce),(Ae.equals(S)===!1||ke!==E)&&(i.blendColor(Ae.r,Ae.g,Ae.b,ke),S.copy(Ae),E=ke),w=C,W=!1}function ue(C,ht){C.side===Qn?Ot(i.CULL_FACE):Gt(i.CULL_FACE);let ut=C.side===un;ht&&(ut=!ut),Wt(ut),C.blending===ps&&C.transparent===!1?vt(gi):vt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);let Ft=C.stencilWrite;c.setTest(Ft),Ft&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),V(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Gt(i.SAMPLE_ALPHA_TO_COVERAGE):Ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(C){tt!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),tt=C)}function b(C){C!==ph?(Gt(i.CULL_FACE),C!==mt&&(C===Jo?i.cullFace(i.BACK):C===mh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ot(i.CULL_FACE),mt=C}function g(C){C!==D&&(J&&i.lineWidth(C),D=C)}function V(C,ht,ut){C?(Gt(i.POLYGON_OFFSET_FILL),(z!==ht||Z!==ut)&&(i.polygonOffset(ht,ut),z=ht,Z=ut)):Ot(i.POLYGON_OFFSET_FILL)}function at(C){C?Gt(i.SCISSOR_TEST):Ot(i.SCISSOR_TEST)}function Q(C){C===void 0&&(C=i.TEXTURE0+et-1),ot!==C&&(i.activeTexture(C),ot=C)}function rt(C,ht,ut){ut===void 0&&(ot===null?ut=i.TEXTURE0+et-1:ut=ot);let Ft=xt[ut];Ft===void 0&&(Ft={type:void 0,texture:void 0},xt[ut]=Ft),(Ft.type!==C||Ft.texture!==ht)&&(ot!==ut&&(i.activeTexture(ut),ot=ut),i.bindTexture(C,ht||kt[C]),Ft.type=C,Ft.texture=ht)}function Lt(){let C=xt[ot];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function gt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function bt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Dt(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Yt(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function nt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function A(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function K(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ct(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function lt(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Pt(C){_t.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),_t.copy(C))}function Kt(C){It.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),It.copy(C))}function ne(C,ht){let ut=d.get(ht);ut===void 0&&(ut=new WeakMap,d.set(ht,ut));let Ft=ut.get(C);Ft===void 0&&(Ft=i.getUniformBlockIndex(ht,C.name),ut.set(C,Ft))}function Jt(C,ht){let Ft=d.get(ht).get(C);h.get(ht)!==Ft&&(i.uniformBlockBinding(ht,Ft,C.__bindingPointIndex),h.set(ht,Ft))}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ot=null,xt={},m={},_=new WeakMap,x=[],p=null,u=!1,w=null,v=null,P=null,O=null,I=null,T=null,j=null,S=new me(0,0,0),E=0,W=!1,tt=null,mt=null,D=null,z=null,Z=null,_t.set(0,0,i.canvas.width,i.canvas.height),It.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Gt,disable:Ot,bindFramebuffer:Ut,drawBuffers:k,useProgram:ye,setBlending:vt,setMaterial:ue,setFlipSided:Wt,setCullFace:b,setLineWidth:g,setPolygonOffset:V,setScissorTest:at,activeTexture:Q,bindTexture:rt,unbindTexture:Lt,compressedTexImage2D:gt,compressedTexImage3D:bt,texImage2D:ct,texImage3D:lt,updateUBOMapping:ne,uniformBlockBinding:Jt,texStorage2D:A,texStorage3D:K,texSubImage2D:Dt,texSubImage3D:Yt,compressedTexSubImage2D:nt,compressedTexSubImage3D:ee,scissor:Pt,viewport:Kt,reset:ft}}function mg(i,t,e,n,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,g){return m?new OffscreenCanvas(b,g):Nr("canvas")}function x(b,g,V,at){let Q=1;if((b.width>at||b.height>at)&&(Q=at/Math.max(b.width,b.height)),Q<1||g===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){let rt=g?Ur:Math.floor,Lt=rt(Q*b.width),gt=rt(Q*b.height);d===void 0&&(d=_(Lt,gt));let bt=V?_(Lt,gt):d;return bt.width=Lt,bt.height=gt,bt.getContext("2d").drawImage(b,0,0,Lt,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Lt+"x"+gt+")."),bt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function p(b){return Ka(b.width)&&Ka(b.height)}function u(b){return a?!1:b.wrapS!==Pn||b.wrapT!==Pn||b.minFilter!==Ne&&b.minFilter!==Ke}function w(b,g){return b.generateMipmaps&&g&&b.minFilter!==Ne&&b.minFilter!==Ke}function v(b){i.generateMipmap(b)}function P(b,g,V,at,Q=!1){if(a===!1)return g;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let rt=g;if(g===i.RED&&(V===i.FLOAT&&(rt=i.R32F),V===i.HALF_FLOAT&&(rt=i.R16F),V===i.UNSIGNED_BYTE&&(rt=i.R8)),g===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(rt=i.R8UI),V===i.UNSIGNED_SHORT&&(rt=i.R16UI),V===i.UNSIGNED_INT&&(rt=i.R32UI),V===i.BYTE&&(rt=i.R8I),V===i.SHORT&&(rt=i.R16I),V===i.INT&&(rt=i.R32I)),g===i.RG&&(V===i.FLOAT&&(rt=i.RG32F),V===i.HALF_FLOAT&&(rt=i.RG16F),V===i.UNSIGNED_BYTE&&(rt=i.RG8)),g===i.RGBA){let Lt=Q?Pr:xe.getTransfer(at);V===i.FLOAT&&(rt=i.RGBA32F),V===i.HALF_FLOAT&&(rt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(rt=Lt===Se?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function O(b,g,V){return w(b,V)===!0||b.isFramebufferTexture&&b.minFilter!==Ne&&b.minFilter!==Ke?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function I(b){return b===Ne||b===nl||b===pa?i.NEAREST:i.LINEAR}function T(b){let g=b.target;g.removeEventListener("dispose",T),S(g),g.isVideoTexture&&h.delete(g)}function j(b){let g=b.target;g.removeEventListener("dispose",j),W(g)}function S(b){let g=n.get(b);if(g.__webglInit===void 0)return;let V=b.source,at=f.get(V);if(at){let Q=at[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(b),Object.keys(at).length===0&&f.delete(V)}n.remove(b)}function E(b){let g=n.get(b);i.deleteTexture(g.__webglTexture);let V=b.source,at=f.get(V);delete at[g.__cacheKey],o.memory.textures--}function W(b){let g=b.texture,V=n.get(b),at=n.get(g);if(at.__webglTexture!==void 0&&(i.deleteTexture(at.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(V.__webglFramebuffer[Q]))for(let rt=0;rt<V.__webglFramebuffer[Q].length;rt++)i.deleteFramebuffer(V.__webglFramebuffer[Q][rt]);else i.deleteFramebuffer(V.__webglFramebuffer[Q]);V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer[Q])}else{if(Array.isArray(V.__webglFramebuffer))for(let Q=0;Q<V.__webglFramebuffer.length;Q++)i.deleteFramebuffer(V.__webglFramebuffer[Q]);else i.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&i.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let Q=0;Q<V.__webglColorRenderbuffer.length;Q++)V.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(V.__webglColorRenderbuffer[Q]);V.__webglDepthRenderbuffer&&i.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Q=0,rt=g.length;Q<rt;Q++){let Lt=n.get(g[Q]);Lt.__webglTexture&&(i.deleteTexture(Lt.__webglTexture),o.memory.textures--),n.remove(g[Q])}n.remove(g),n.remove(b)}let tt=0;function mt(){tt=0}function D(){let b=tt;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),tt+=1,b}function z(b){let g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function Z(b,g){let V=n.get(b);if(b.isVideoTexture&&ue(b),b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){let at=b.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(V,b,g);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+g)}function et(b,g){let V=n.get(b);if(b.version>0&&V.__version!==b.version){_t(V,b,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+g)}function J(b,g){let V=n.get(b);if(b.version>0&&V.__version!==b.version){_t(V,b,g);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+g)}function Y(b,g){let V=n.get(b);if(b.version>0&&V.__version!==b.version){It(V,b,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+g)}let st={[Ya]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Za]:i.MIRRORED_REPEAT},ot={[Ne]:i.NEAREST,[nl]:i.NEAREST_MIPMAP_NEAREST,[pa]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[Zh]:i.LINEAR_MIPMAP_NEAREST,[Vs]:i.LINEAR_MIPMAP_LINEAR},xt={[ou]:i.NEVER,[fu]:i.ALWAYS,[lu]:i.LESS,[Lc]:i.LEQUAL,[cu]:i.EQUAL,[du]:i.GEQUAL,[hu]:i.GREATER,[uu]:i.NOTEQUAL};function q(b,g,V){if(V?(i.texParameteri(b,i.TEXTURE_WRAP_S,st[g.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,st[g.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,st[g.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ot[g.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ot[g.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(g.wrapS!==Pn||g.wrapT!==Pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,I(g.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,I(g.minFilter)),g.minFilter!==Ne&&g.minFilter!==Ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,xt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let at=t.get("EXT_texture_filter_anisotropic");if(g.magFilter===Ne||g.minFilter!==pa&&g.minFilter!==Vs||g.type===mi&&t.has("OES_texture_float_linear")===!1||a===!1&&g.type===Gs&&t.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||n.get(g).__currentAnisotropy)&&(i.texParameterf(b,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy)}}function it(b,g){let V=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",T));let at=g.source,Q=f.get(at);Q===void 0&&(Q={},f.set(at,Q));let rt=z(g);if(rt!==b.__cacheKey){Q[rt]===void 0&&(Q[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Q[rt].usedTimes++;let Lt=Q[b.__cacheKey];Lt!==void 0&&(Q[b.__cacheKey].usedTimes--,Lt.usedTimes===0&&E(g)),b.__cacheKey=rt,b.__webglTexture=Q[rt].texture}return V}function _t(b,g,V){let at=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(at=i.TEXTURE_3D);let Q=it(b,g),rt=g.source;e.bindTexture(at,b.__webglTexture,i.TEXTURE0+V);let Lt=n.get(rt);if(rt.version!==Lt.__version||Q===!0){e.activeTexture(i.TEXTURE0+V);let gt=xe.getPrimaries(xe.workingColorSpace),bt=g.colorSpace===Sn?null:xe.getPrimaries(g.colorSpace),Dt=g.colorSpace===Sn||gt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let Yt=u(g)&&p(g.image)===!1,nt=x(g.image,Yt,!1,s.maxTextureSize);nt=Wt(g,nt);let ee=p(nt)||a,A=r.convert(g.format,g.colorSpace),K=r.convert(g.type),ct=P(g.internalFormat,A,K,g.colorSpace,g.isVideoTexture);q(at,g,ee);let lt,Pt=g.mipmaps,Kt=a&&g.isVideoTexture!==!0&&ct!==Cc,ne=Lt.__version===void 0||Q===!0,Jt=O(g,nt,ee);if(g.isDepthTexture)ct=i.DEPTH_COMPONENT,a?g.type===mi?ct=i.DEPTH_COMPONENT32F:g.type===pi?ct=i.DEPTH_COMPONENT24:g.type===Di?ct=i.DEPTH24_STENCIL8:ct=i.DEPTH_COMPONENT16:g.type===mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Ui&&ct===i.DEPTH_COMPONENT&&g.type!==Co&&g.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=pi,K=r.convert(g.type)),g.format===ys&&ct===i.DEPTH_COMPONENT&&(ct=i.DEPTH_STENCIL,g.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Di,K=r.convert(g.type))),ne&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,ct,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,ct,nt.width,nt.height,0,A,K,null));else if(g.isDataTexture)if(Pt.length>0&&ee){Kt&&ne&&e.texStorage2D(i.TEXTURE_2D,Jt,ct,Pt[0].width,Pt[0].height);for(let ft=0,C=Pt.length;ft<C;ft++)lt=Pt[ft],Kt?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,lt.width,lt.height,A,K,lt.data):e.texImage2D(i.TEXTURE_2D,ft,ct,lt.width,lt.height,0,A,K,lt.data);g.generateMipmaps=!1}else Kt?(ne&&e.texStorage2D(i.TEXTURE_2D,Jt,ct,nt.width,nt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,A,K,nt.data)):e.texImage2D(i.TEXTURE_2D,0,ct,nt.width,nt.height,0,A,K,nt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Kt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Jt,ct,Pt[0].width,Pt[0].height,nt.depth);for(let ft=0,C=Pt.length;ft<C;ft++)lt=Pt[ft],g.format!==_n?A!==null?Kt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,lt.width,lt.height,nt.depth,A,lt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,ct,lt.width,lt.height,nt.depth,0,lt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,lt.width,lt.height,nt.depth,A,K,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,ct,lt.width,lt.height,nt.depth,0,A,K,lt.data)}else{Kt&&ne&&e.texStorage2D(i.TEXTURE_2D,Jt,ct,Pt[0].width,Pt[0].height);for(let ft=0,C=Pt.length;ft<C;ft++)lt=Pt[ft],g.format!==_n?A!==null?Kt?e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,lt.width,lt.height,A,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,ct,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,lt.width,lt.height,A,K,lt.data):e.texImage2D(i.TEXTURE_2D,ft,ct,lt.width,lt.height,0,A,K,lt.data)}else if(g.isDataArrayTexture)Kt?(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Jt,ct,nt.width,nt.height,nt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,A,K,nt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,nt.width,nt.height,nt.depth,0,A,K,nt.data);else if(g.isData3DTexture)Kt?(ne&&e.texStorage3D(i.TEXTURE_3D,Jt,ct,nt.width,nt.height,nt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,A,K,nt.data)):e.texImage3D(i.TEXTURE_3D,0,ct,nt.width,nt.height,nt.depth,0,A,K,nt.data);else if(g.isFramebufferTexture){if(ne)if(Kt)e.texStorage2D(i.TEXTURE_2D,Jt,ct,nt.width,nt.height);else{let ft=nt.width,C=nt.height;for(let ht=0;ht<Jt;ht++)e.texImage2D(i.TEXTURE_2D,ht,ct,ft,C,0,A,K,null),ft>>=1,C>>=1}}else if(Pt.length>0&&ee){Kt&&ne&&e.texStorage2D(i.TEXTURE_2D,Jt,ct,Pt[0].width,Pt[0].height);for(let ft=0,C=Pt.length;ft<C;ft++)lt=Pt[ft],Kt?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,A,K,lt):e.texImage2D(i.TEXTURE_2D,ft,ct,A,K,lt);g.generateMipmaps=!1}else Kt?(ne&&e.texStorage2D(i.TEXTURE_2D,Jt,ct,nt.width,nt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,A,K,nt)):e.texImage2D(i.TEXTURE_2D,0,ct,A,K,nt);w(g,ee)&&v(at),Lt.__version=rt.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function It(b,g,V){if(g.image.length!==6)return;let at=it(b,g),Q=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+V);let rt=n.get(Q);if(Q.version!==rt.__version||at===!0){e.activeTexture(i.TEXTURE0+V);let Lt=xe.getPrimaries(xe.workingColorSpace),gt=g.colorSpace===Sn?null:xe.getPrimaries(g.colorSpace),bt=g.colorSpace===Sn||Lt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Dt=g.isCompressedTexture||g.image[0].isCompressedTexture,Yt=g.image[0]&&g.image[0].isDataTexture,nt=[];for(let ft=0;ft<6;ft++)!Dt&&!Yt?nt[ft]=x(g.image[ft],!1,!0,s.maxCubemapSize):nt[ft]=Yt?g.image[ft].image:g.image[ft],nt[ft]=Wt(g,nt[ft]);let ee=nt[0],A=p(ee)||a,K=r.convert(g.format,g.colorSpace),ct=r.convert(g.type),lt=P(g.internalFormat,K,ct,g.colorSpace),Pt=a&&g.isVideoTexture!==!0,Kt=rt.__version===void 0||at===!0,ne=O(g,ee,A);q(i.TEXTURE_CUBE_MAP,g,A);let Jt;if(Dt){Pt&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ne,lt,ee.width,ee.height);for(let ft=0;ft<6;ft++){Jt=nt[ft].mipmaps;for(let C=0;C<Jt.length;C++){let ht=Jt[C];g.format!==_n?K!==null?Pt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,C,0,0,ht.width,ht.height,K,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,C,lt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,C,0,0,ht.width,ht.height,K,ct,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,C,lt,ht.width,ht.height,0,K,ct,ht.data)}}}else{Jt=g.mipmaps,Pt&&Kt&&(Jt.length>0&&ne++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ne,lt,nt[0].width,nt[0].height));for(let ft=0;ft<6;ft++)if(Yt){Pt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,nt[ft].width,nt[ft].height,K,ct,nt[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,lt,nt[ft].width,nt[ft].height,0,K,ct,nt[ft].data);for(let C=0;C<Jt.length;C++){let ut=Jt[C].image[ft].image;Pt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,C+1,0,0,ut.width,ut.height,K,ct,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,C+1,lt,ut.width,ut.height,0,K,ct,ut.data)}}else{Pt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,K,ct,nt[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,lt,K,ct,nt[ft]);for(let C=0;C<Jt.length;C++){let ht=Jt[C];Pt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,C+1,0,0,K,ct,ht.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,C+1,lt,K,ct,ht.image[ft])}}}w(g,A)&&v(i.TEXTURE_CUBE_MAP),rt.__version=Q.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function Rt(b,g,V,at,Q,rt){let Lt=r.convert(V.format,V.colorSpace),gt=r.convert(V.type),bt=P(V.internalFormat,Lt,gt,V.colorSpace);if(!n.get(g).__hasExternalTextures){let Yt=Math.max(1,g.width>>rt),nt=Math.max(1,g.height>>rt);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,rt,bt,Yt,nt,g.depth,0,Lt,gt,null):e.texImage2D(Q,rt,bt,Yt,nt,0,Lt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),vt(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,Q,n.get(V).__webglTexture,0,Ht(g)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,Q,n.get(V).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(b,g,V){if(i.bindRenderbuffer(i.RENDERBUFFER,b),g.depthBuffer&&!g.stencilBuffer){let at=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(V||vt(g)){let Q=g.depthTexture;Q&&Q.isDepthTexture&&(Q.type===mi?at=i.DEPTH_COMPONENT32F:Q.type===pi&&(at=i.DEPTH_COMPONENT24));let rt=Ht(g);vt(g)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,at,g.width,g.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,at,g.width,g.height)}else i.renderbufferStorage(i.RENDERBUFFER,at,g.width,g.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(g.depthBuffer&&g.stencilBuffer){let at=Ht(g);V&&vt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,i.DEPTH24_STENCIL8,g.width,g.height):vt(g)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,i.DEPTH24_STENCIL8,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{let at=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let Q=0;Q<at.length;Q++){let rt=at[Q],Lt=r.convert(rt.format,rt.colorSpace),gt=r.convert(rt.type),bt=P(rt.internalFormat,Lt,gt,rt.colorSpace),Dt=Ht(g);V&&vt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,bt,g.width,g.height):vt(g)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,bt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,bt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Gt(b,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z(g.depthTexture,0);let at=n.get(g.depthTexture).__webglTexture,Q=Ht(g);if(g.depthTexture.format===Ui)vt(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(g.depthTexture.format===ys)vt(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Ot(b){let g=n.get(b),V=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!g.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Gt(g.__webglFramebuffer,b)}else if(V){g.__webglDepthbuffer=[];for(let at=0;at<6;at++)e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[at]),g.__webglDepthbuffer[at]=i.createRenderbuffer(),kt(g.__webglDepthbuffer[at],b,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=i.createRenderbuffer(),kt(g.__webglDepthbuffer,b,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(b,g,V){let at=n.get(b);g!==void 0&&Rt(at.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ot(b)}function k(b){let g=b.texture,V=n.get(b),at=n.get(g);b.addEventListener("dispose",j),b.isWebGLMultipleRenderTargets!==!0&&(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=g.version,o.memory.textures++);let Q=b.isWebGLCubeRenderTarget===!0,rt=b.isWebGLMultipleRenderTargets===!0,Lt=p(b)||a;if(Q){V.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(a&&g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer[gt]=[];for(let bt=0;bt<g.mipmaps.length;bt++)V.__webglFramebuffer[gt][bt]=i.createFramebuffer()}else V.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(a&&g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer=[];for(let gt=0;gt<g.mipmaps.length;gt++)V.__webglFramebuffer[gt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(rt)if(s.drawBuffers){let gt=b.texture;for(let bt=0,Dt=gt.length;bt<Dt;bt++){let Yt=n.get(gt[bt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&vt(b)===!1){let gt=rt?g:[g];V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let bt=0;bt<gt.length;bt++){let Dt=gt[bt];V.__webglColorRenderbuffer[bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[bt]);let Yt=r.convert(Dt.format,Dt.colorSpace),nt=r.convert(Dt.type),ee=P(Dt.internalFormat,Yt,nt,Dt.colorSpace,b.isXRRenderTarget===!0),A=Ht(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,A,ee,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,V.__webglColorRenderbuffer[bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),kt(V.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),q(i.TEXTURE_CUBE_MAP,g,Lt);for(let gt=0;gt<6;gt++)if(a&&g.mipmaps&&g.mipmaps.length>0)for(let bt=0;bt<g.mipmaps.length;bt++)Rt(V.__webglFramebuffer[gt][bt],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,bt);else Rt(V.__webglFramebuffer[gt],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);w(g,Lt)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){let gt=b.texture;for(let bt=0,Dt=gt.length;bt<Dt;bt++){let Yt=gt[bt],nt=n.get(Yt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),q(i.TEXTURE_2D,Yt,Lt),Rt(V.__webglFramebuffer,b,Yt,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,0),w(Yt,Lt)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?gt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(gt,at.__webglTexture),q(gt,g,Lt),a&&g.mipmaps&&g.mipmaps.length>0)for(let bt=0;bt<g.mipmaps.length;bt++)Rt(V.__webglFramebuffer[bt],b,g,i.COLOR_ATTACHMENT0,gt,bt);else Rt(V.__webglFramebuffer,b,g,i.COLOR_ATTACHMENT0,gt,0);w(g,Lt)&&v(gt),e.unbindTexture()}b.depthBuffer&&Ot(b)}function ye(b){let g=p(b)||a,V=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let at=0,Q=V.length;at<Q;at++){let rt=V[at];if(w(rt,g)){let Lt=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,gt=n.get(rt).__webglTexture;e.bindTexture(Lt,gt),v(Lt),e.unbindTexture()}}}function Ct(b){if(a&&b.samples>0&&vt(b)===!1){let g=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],V=b.width,at=b.height,Q=i.COLOR_BUFFER_BIT,rt=[],Lt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(b),bt=b.isWebGLMultipleRenderTargets===!0;if(bt)for(let Dt=0;Dt<g.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Dt=0;Dt<g.length;Dt++){rt.push(i.COLOR_ATTACHMENT0+Dt),b.depthBuffer&&rt.push(Lt);let Yt=gt.__ignoreDepthValues!==void 0?gt.__ignoreDepthValues:!1;if(Yt===!1&&(b.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),bt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Dt]),Yt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Lt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Lt])),bt){let nt=n.get(g[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,V,at,0,0,V,at,Q,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let Dt=0;Dt<g.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Dt]);let Yt=n.get(g[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}}function Ht(b){return Math.min(s.maxSamples,b.samples)}function vt(b){let g=n.get(b);return a&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ue(b){let g=o.render.frame;h.get(b)!==g&&(h.set(b,g),b.update())}function Wt(b,g){let V=b.colorSpace,at=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Ja||V!==ni&&V!==Sn&&(xe.getTransfer(V)===Se?a===!1?t.has("EXT_sRGB")===!0&&at===_n?(b.format=Ja,b.minFilter=Ke,b.generateMipmaps=!1):g=Or.sRGBToLinear(g):(at!==_n||Q!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),g}this.allocateTextureUnit=D,this.resetTextureUnits=mt,this.setTexture2D=Z,this.setTexture2DArray=et,this.setTexture3D=J,this.setTextureCube=Y,this.rebindTextures=Ut,this.setupRenderTarget=k,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=vt}function gg(i,t,e){let n=e.isWebGL2;function s(r,o=Sn){let a,l=xe.getTransfer(o);if(r===xi)return i.UNSIGNED_BYTE;if(r===Ec)return i.UNSIGNED_SHORT_4_4_4_4;if(r===wc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===$h)return i.BYTE;if(r===Jh)return i.SHORT;if(r===Co)return i.UNSIGNED_SHORT;if(r===bc)return i.INT;if(r===pi)return i.UNSIGNED_INT;if(r===mi)return i.FLOAT;if(r===Gs)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Kh)return i.ALPHA;if(r===_n)return i.RGBA;if(r===jh)return i.LUMINANCE;if(r===Qh)return i.LUMINANCE_ALPHA;if(r===Ui)return i.DEPTH_COMPONENT;if(r===ys)return i.DEPTH_STENCIL;if(r===Ja)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===tu)return i.RED;if(r===Ac)return i.RED_INTEGER;if(r===eu)return i.RG;if(r===Tc)return i.RG_INTEGER;if(r===Rc)return i.RGBA_INTEGER;if(r===ma||r===ga||r===_a||r===xa)if(l===Se)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ma)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ma)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ga)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_a)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===il||r===sl||r===rl||r===al)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===il)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===al)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ol||r===ll)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ol)return l===Se?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ll)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===cl||r===hl||r===ul||r===dl||r===fl||r===pl||r===ml||r===gl||r===_l||r===xl||r===yl||r===vl||r===Ml||r===Sl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===cl)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hl)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ul)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===dl)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===fl)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pl)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ml)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gl)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_l)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xl)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yl)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vl)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ml)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sl)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ya||r===bl||r===El)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===ya)return l===Se?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===El)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nu||r===wl||r===Al||r===Tl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===ya)return a.COMPRESSED_RED_RGTC1_EXT;if(r===wl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Al)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Tl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Di?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var fo=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},fs=class extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}},_g={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_g)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new fs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},po=class extends Bn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,_=null,x=e.getContextAttributes(),p=null,u=null,w=[],v=[],P=new Zt,O=null,I=new rn;I.layers.enable(1),I.viewport=new Re;let T=new rn;T.layers.enable(2),T.viewport=new Re;let j=[I,T],S=new fo;S.layers.enable(1),S.layers.enable(2);let E=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let it=w[q];return it===void 0&&(it=new Hs,w[q]=it),it.getTargetRaySpace()},this.getControllerGrip=function(q){let it=w[q];return it===void 0&&(it=new Hs,w[q]=it),it.getGripSpace()},this.getHand=function(q){let it=w[q];return it===void 0&&(it=new Hs,w[q]=it),it.getHandSpace()};function tt(q){let it=v.indexOf(q.inputSource);if(it===-1)return;let _t=w[it];_t!==void 0&&(_t.update(q.inputSource,q.frame,c||o),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function mt(){s.removeEventListener("select",tt),s.removeEventListener("selectstart",tt),s.removeEventListener("selectend",tt),s.removeEventListener("squeeze",tt),s.removeEventListener("squeezestart",tt),s.removeEventListener("squeezeend",tt),s.removeEventListener("end",mt),s.removeEventListener("inputsourceschange",D);for(let q=0;q<w.length;q++){let it=v[q];it!==null&&(v[q]=null,w[q].disconnect(it))}E=null,W=null,t.setRenderTarget(p),m=null,f=null,d=null,s=null,u=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",tt),s.addEventListener("selectstart",tt),s.addEventListener("selectend",tt),s.addEventListener("squeeze",tt),s.addEventListener("squeezestart",tt),s.addEventListener("squeezeend",tt),s.addEventListener("end",mt),s.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let it={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new ii(m.framebufferWidth,m.framebufferHeight,{format:_n,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let it=null,_t=null,It=null;x.depth&&(It=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=x.stencil?ys:Ui,_t=x.stencil?Di:pi);let Rt={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Rt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),u=new ii(f.textureWidth,f.textureHeight,{format:_n,type:xi,depthTexture:new Yr(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let kt=t.properties.get(u);kt.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),xt.setContext(s),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(q){for(let it=0;it<q.removed.length;it++){let _t=q.removed[it],It=v.indexOf(_t);It>=0&&(v[It]=null,w[It].disconnect(_t))}for(let it=0;it<q.added.length;it++){let _t=q.added[it],It=v.indexOf(_t);if(It===-1){for(let kt=0;kt<w.length;kt++)if(kt>=v.length){v.push(_t),It=kt;break}else if(v[kt]===null){v[kt]=_t,It=kt;break}if(It===-1)break}let Rt=w[It];Rt&&Rt.connect(_t)}}let z=new N,Z=new N;function et(q,it,_t){z.setFromMatrixPosition(it.matrixWorld),Z.setFromMatrixPosition(_t.matrixWorld);let It=z.distanceTo(Z),Rt=it.projectionMatrix.elements,kt=_t.projectionMatrix.elements,Gt=Rt[14]/(Rt[10]-1),Ot=Rt[14]/(Rt[10]+1),Ut=(Rt[9]+1)/Rt[5],k=(Rt[9]-1)/Rt[5],ye=(Rt[8]-1)/Rt[0],Ct=(kt[8]+1)/kt[0],Ht=Gt*ye,vt=Gt*Ct,ue=It/(-ye+Ct),Wt=ue*-ye;it.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Wt),q.translateZ(ue),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let b=Gt+ue,g=Ot+ue,V=Ht-Wt,at=vt+(It-Wt),Q=Ut*Ot/g*b,rt=k*Ot/g*b;q.projectionMatrix.makePerspective(V,at,Q,rt,b,g),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function J(q,it){it===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(it.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;S.near=T.near=I.near=q.near,S.far=T.far=I.far=q.far,(E!==S.near||W!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,W=S.far);let it=q.parent,_t=S.cameras;J(S,it);for(let It=0;It<_t.length;It++)J(_t[It],it);_t.length===2?et(S,I,T):S.projectionMatrix.copy(I.projectionMatrix),Y(q,S,it)};function Y(q,it,_t){_t===null?q.matrix.copy(it.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(it.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(it.projectionMatrix),q.projectionMatrixInverse.copy(it.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ws*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)};let st=null;function ot(q,it){if(h=it.getViewerPose(c||o),_=it,h!==null){let _t=h.views;m!==null&&(t.setRenderTargetFramebuffer(u,m.framebuffer),t.setRenderTarget(u));let It=!1;_t.length!==S.cameras.length&&(S.cameras.length=0,It=!0);for(let Rt=0;Rt<_t.length;Rt++){let kt=_t[Rt],Gt=null;if(m!==null)Gt=m.getViewport(kt);else{let Ut=d.getViewSubImage(f,kt);Gt=Ut.viewport,Rt===0&&(t.setRenderTargetTextures(u,Ut.colorTexture,f.ignoreDepthValues?void 0:Ut.depthStencilTexture),t.setRenderTarget(u))}let Ot=j[Rt];Ot===void 0&&(Ot=new rn,Ot.layers.enable(Rt),Ot.viewport=new Re,j[Rt]=Ot),Ot.matrix.fromArray(kt.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(kt.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),Rt===0&&(S.matrix.copy(Ot.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),It===!0&&S.cameras.push(Ot)}}for(let _t=0;_t<w.length;_t++){let It=v[_t],Rt=w[_t];It!==null&&Rt!==void 0&&Rt.update(It,it,c||o)}st&&st(q,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),_=null}let xt=new Nc;xt.setAnimationLoop(ot),this.setAnimationLoop=function(q){st=q},this.dispose=function(){}}};function xg(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Uc(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,w,v,P){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,P)):u.isMeshMatcapMaterial?(r(p,u),_(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),x(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,w,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===un&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===un&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let w=t.get(u).envMap;if(w&&(p.envMap.value=w,p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,w,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*w,p.scale.value=v*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,w){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===un&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){let w=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function yg(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,v){let P=v.program;n.uniformBlockBinding(w,P)}function c(w,v){let P=s[w.id];P===void 0&&(_(w),P=h(w),s[w.id]=P,w.addEventListener("dispose",p));let O=v.program;n.updateUBOMapping(w,O);let I=t.render.frame;r[w.id]!==I&&(f(w),r[w.id]=I)}function h(w){let v=d();w.__bindingPointIndex=v;let P=i.createBuffer(),O=w.__size,I=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,O,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,P),P}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let v=s[w.id],P=w.uniforms,O=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let I=0,T=P.length;I<T;I++){let j=Array.isArray(P[I])?P[I]:[P[I]];for(let S=0,E=j.length;S<E;S++){let W=j[S];if(m(W,I,S,O)===!0){let tt=W.__offset,mt=Array.isArray(W.value)?W.value:[W.value],D=0;for(let z=0;z<mt.length;z++){let Z=mt[z],et=x(Z);typeof Z=="number"||typeof Z=="boolean"?(W.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,tt+D,W.__data)):Z.isMatrix3?(W.__data[0]=Z.elements[0],W.__data[1]=Z.elements[1],W.__data[2]=Z.elements[2],W.__data[3]=0,W.__data[4]=Z.elements[3],W.__data[5]=Z.elements[4],W.__data[6]=Z.elements[5],W.__data[7]=0,W.__data[8]=Z.elements[6],W.__data[9]=Z.elements[7],W.__data[10]=Z.elements[8],W.__data[11]=0):(Z.toArray(W.__data,D),D+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,tt,W.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,v,P,O){let I=w.value,T=v+"_"+P;if(O[T]===void 0)return typeof I=="number"||typeof I=="boolean"?O[T]=I:O[T]=I.clone(),!0;{let j=O[T];if(typeof I=="number"||typeof I=="boolean"){if(j!==I)return O[T]=I,!0}else if(j.equals(I)===!1)return j.copy(I),!0}return!1}function _(w){let v=w.uniforms,P=0,O=16;for(let T=0,j=v.length;T<j;T++){let S=Array.isArray(v[T])?v[T]:[v[T]];for(let E=0,W=S.length;E<W;E++){let tt=S[E],mt=Array.isArray(tt.value)?tt.value:[tt.value];for(let D=0,z=mt.length;D<z;D++){let Z=mt[D],et=x(Z),J=P%O;J!==0&&O-J<et.boundary&&(P+=O-J),tt.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=P,P+=et.storage}}}let I=P%O;return I>0&&(P+=O-I),w.__size=P,w.__cache={},this}function x(w){let v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function p(w){let v=w.target;v.removeEventListener("dispose",p);let P=o.indexOf(v.__bindingPointIndex);o.splice(P,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Ys=class{constructor(t={}){let{canvas:e=Ru(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),_=new Int32Array(4),x=null,p=null,u=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this._useLegacyLights=!1,this.toneMapping=_i,this.toneMappingExposure=1;let v=this,P=!1,O=0,I=0,T=null,j=-1,S=null,E=new Re,W=new Re,tt=null,mt=new me(0),D=0,z=e.width,Z=e.height,et=1,J=null,Y=null,st=new Re(0,0,z,Z),ot=new Re(0,0,z,Z),xt=!1,q=new Xr,it=!1,_t=!1,It=null,Rt=new Ie,kt=new Zt,Gt=new N,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ut(){return T===null?et:1}let k=n;function ye(M,F){for(let H=0;H<M.length;H++){let X=M[H],G=e.getContext(X,F);if(G!==null)return G}return null}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ro}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",ht,!1),k===null){let F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),k=ye(F,M),k===null)throw ye(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ct,Ht,vt,ue,Wt,b,g,V,at,Q,rt,Lt,gt,bt,Dt,Yt,nt,ee,A,K,ct,lt,Pt,Kt;function ne(){Ct=new Bp(k),Ht=new Ip(k,Ct,t),Ct.init(Ht),lt=new gg(k,Ct,Ht),vt=new pg(k,Ct,Ht),ue=new Hp(k),Wt=new ng,b=new mg(k,Ct,vt,Wt,Ht,lt,ue),g=new Up(v),V=new Fp(v),at=new Zu(k,Ht),Pt=new Pp(k,Ct,at,Ht),Q=new zp(k,at,ue,Pt),rt=new Xp(k,Q,at,ue),A=new Wp(k,Ht,b),Yt=new Dp(Wt),Lt=new eg(v,g,V,Ct,Ht,Pt,Yt),gt=new xg(v,Wt),bt=new sg,Dt=new hg(Ct,Ht),ee=new Cp(v,g,V,vt,rt,f,l),nt=new fg(v,rt,Ht),Kt=new yg(k,ue,Ht,vt),K=new Lp(k,Ct,ue,Ht),ct=new kp(k,Ct,ue,Ht),ue.programs=Lt.programs,v.capabilities=Ht,v.extensions=Ct,v.properties=Wt,v.renderLists=bt,v.shadowMap=nt,v.state=vt,v.info=ue}ne();let Jt=new po(v,k);this.xr=Jt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let M=Ct.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ct.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(M){M!==void 0&&(et=M,this.setSize(z,Z,!1))},this.getSize=function(M){return M.set(z,Z)},this.setSize=function(M,F,H=!0){if(Jt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=M,Z=F,e.width=Math.floor(M*et),e.height=Math.floor(F*et),H===!0&&(e.style.width=M+"px",e.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(z*et,Z*et).floor()},this.setDrawingBufferSize=function(M,F,H){z=M,Z=F,et=H,e.width=Math.floor(M*H),e.height=Math.floor(F*H),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(E)},this.getViewport=function(M){return M.copy(st)},this.setViewport=function(M,F,H,X){M.isVector4?st.set(M.x,M.y,M.z,M.w):st.set(M,F,H,X),vt.viewport(E.copy(st).multiplyScalar(et).floor())},this.getScissor=function(M){return M.copy(ot)},this.setScissor=function(M,F,H,X){M.isVector4?ot.set(M.x,M.y,M.z,M.w):ot.set(M,F,H,X),vt.scissor(W.copy(ot).multiplyScalar(et).floor())},this.getScissorTest=function(){return xt},this.setScissorTest=function(M){vt.setScissorTest(xt=M)},this.setOpaqueSort=function(M){J=M},this.setTransparentSort=function(M){Y=M},this.getClearColor=function(M){return M.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(M=!0,F=!0,H=!0){let X=0;if(M){let G=!1;if(T!==null){let Mt=T.texture.format;G=Mt===Rc||Mt===Tc||Mt===Ac}if(G){let Mt=T.texture.type,wt=Mt===xi||Mt===pi||Mt===Co||Mt===Di||Mt===Ec||Mt===wc,Nt=ee.getClearColor(),Vt=ee.getClearAlpha(),jt=Nt.r,zt=Nt.g,Xt=Nt.b;wt?(m[0]=jt,m[1]=zt,m[2]=Xt,m[3]=Vt,k.clearBufferuiv(k.COLOR,0,m)):(_[0]=jt,_[1]=zt,_[2]=Xt,_[3]=Vt,k.clearBufferiv(k.COLOR,0,_))}else X|=k.COLOR_BUFFER_BIT}F&&(X|=k.DEPTH_BUFFER_BIT),H&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),bt.dispose(),Dt.dispose(),Wt.dispose(),g.dispose(),V.dispose(),rt.dispose(),Pt.dispose(),Kt.dispose(),Lt.dispose(),Jt.dispose(),Jt.removeEventListener("sessionstart",ke),Jt.removeEventListener("sessionend",ge),It&&(It.dispose(),It=null),Et.stop()};function ft(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let M=ue.autoReset,F=nt.enabled,H=nt.autoUpdate,X=nt.needsUpdate,G=nt.type;ne(),ue.autoReset=M,nt.enabled=F,nt.autoUpdate=H,nt.needsUpdate=X,nt.type=G}function ht(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ut(M){let F=M.target;F.removeEventListener("dispose",ut),Ft(F)}function Ft(M){At(M),Wt.remove(M)}function At(M){let F=Wt.get(M).programs;F!==void 0&&(F.forEach(function(H){Lt.releaseProgram(H)}),M.isShaderMaterial&&Lt.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,H,X,G,Mt){F===null&&(F=Ot);let wt=G.isMesh&&G.matrixWorld.determinant()<0,Nt=tr(M,F,H,X,G);vt.setMaterial(X,wt);let Vt=H.index,jt=1;if(X.wireframe===!0){if(Vt=Q.getWireframeAttribute(H),Vt===void 0)return;jt=2}let zt=H.drawRange,Xt=H.attributes.position,Ee=zt.start*jt,He=(zt.start+zt.count)*jt;Mt!==null&&(Ee=Math.max(Ee,Mt.start*jt),He=Math.min(He,(Mt.start+Mt.count)*jt)),Vt!==null?(Ee=Math.max(Ee,0),He=Math.min(He,Vt.count)):Xt!=null&&(Ee=Math.max(Ee,0),He=Math.min(He,Xt.count));let Te=He-Ee;if(Te<0||Te===1/0)return;Pt.setup(G,X,Nt,H,Vt);let vn,ve=K;if(Vt!==null&&(vn=at.get(Vt),ve=ct,ve.setIndex(vn)),G.isMesh)X.wireframe===!0?(vt.setLineWidth(X.wireframeLinewidth*Ut()),ve.setMode(k.LINES)):ve.setMode(k.TRIANGLES);else if(G.isLine){let Qt=X.linewidth;Qt===void 0&&(Qt=1),vt.setLineWidth(Qt*Ut()),G.isLineSegments?ve.setMode(k.LINES):G.isLineLoop?ve.setMode(k.LINE_LOOP):ve.setMode(k.LINE_STRIP)}else G.isPoints?ve.setMode(k.POINTS):G.isSprite&&ve.setMode(k.TRIANGLES);if(G.isBatchedMesh)ve.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ve.renderInstances(Ee,Te,G.count);else if(H.isInstancedBufferGeometry){let Qt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ps=Math.min(H.instanceCount,Qt);ve.renderInstances(Ee,Te,Ps)}else ve.render(Ee,Te)};function ie(M,F,H){M.transparent===!0&&M.side===Qn&&M.forceSinglePass===!1?(M.side=un,M.needsUpdate=!0,Wi(M,F,H),M.side=yi,M.needsUpdate=!0,Wi(M,F,H),M.side=Qn):Wi(M,F,H)}this.compile=function(M,F,H=null){H===null&&(H=M),p=Dt.get(H),p.init(),w.push(p),H.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),M!==H&&M.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(v._useLegacyLights);let X=new Set;return M.traverse(function(G){let Mt=G.material;if(Mt)if(Array.isArray(Mt))for(let wt=0;wt<Mt.length;wt++){let Nt=Mt[wt];ie(Nt,H,G),X.add(Nt)}else ie(Mt,H,G),X.add(Mt)}),w.pop(),p=null,X},this.compileAsync=function(M,F,H=null){let X=this.compile(M,F,H);return new Promise(G=>{function Mt(){if(X.forEach(function(wt){Wt.get(wt).currentProgram.isReady()&&X.delete(wt)}),X.size===0){G(M);return}setTimeout(Mt,10)}Ct.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let ce=null;function Ae(M){ce&&ce(M)}function ke(){Et.stop()}function ge(){Et.start()}let Et=new Nc;Et.setAnimationLoop(Ae),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(M){ce=M,Jt.setAnimationLoop(M),M===null?Et.stop():Et.start()},Jt.addEventListener("sessionstart",ke),Jt.addEventListener("sessionend",ge),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Jt.enabled===!0&&Jt.isPresenting===!0&&(Jt.cameraAutoUpdate===!0&&Jt.updateCamera(F),F=Jt.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,F,T),p=Dt.get(M,w.length),p.init(),w.push(p),Rt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(Rt),_t=this.localClippingEnabled,it=Yt.init(this.clippingPlanes,_t),x=bt.get(M,u.length),x.init(),u.push(x),on(M,F,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(J,Y),this.info.render.frame++,it===!0&&Yt.beginShadows();let H=p.state.shadowsArray;if(nt.render(H,M,F),it===!0&&Yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(x,M),p.setupLights(v._useLegacyLights),F.isArrayCamera){let X=F.cameras;for(let G=0,Mt=X.length;G<Mt;G++){let wt=X[G];js(x,M,wt,wt.viewport)}}else js(x,M,F);T!==null&&(b.updateMultisampleRenderTarget(T),b.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(v,M,F),Pt.resetDefaultState(),j=-1,S=null,w.pop(),w.length>0?p=w[w.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function on(M,F,H,X){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){X&&Gt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Rt);let wt=rt.update(M),Nt=M.material;Nt.visible&&x.push(M,wt,Nt,H,Gt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){let wt=rt.update(M),Nt=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Gt.copy(M.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Gt.copy(wt.boundingSphere.center)),Gt.applyMatrix4(M.matrixWorld).applyMatrix4(Rt)),Array.isArray(Nt)){let Vt=wt.groups;for(let jt=0,zt=Vt.length;jt<zt;jt++){let Xt=Vt[jt],Ee=Nt[Xt.materialIndex];Ee&&Ee.visible&&x.push(M,wt,Ee,H,Gt.z,Xt)}}else Nt.visible&&x.push(M,wt,Nt,H,Gt.z,null)}}let Mt=M.children;for(let wt=0,Nt=Mt.length;wt<Nt;wt++)on(Mt[wt],F,H,X)}function js(M,F,H,X){let G=M.opaque,Mt=M.transmissive,wt=M.transparent;p.setupLightsView(H),it===!0&&Yt.setGlobalState(v.clippingPlanes,H),Mt.length>0&&Rs(G,Mt,F,H),X&&vt.viewport(E.copy(X)),G.length>0&&On(G,F,H),Mt.length>0&&On(Mt,F,H),wt.length>0&&On(wt,F,H),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Rs(M,F,H,X){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let Mt=Ht.isWebGL2;It===null&&(It=new ii(1,1,{generateMipmaps:!0,type:Ct.has("EXT_color_buffer_half_float")?Gs:xi,minFilter:Vs,samples:Mt?4:0})),v.getDrawingBufferSize(kt),Mt?It.setSize(kt.x,kt.y):It.setSize(Ur(kt.x),Ur(kt.y));let wt=v.getRenderTarget();v.setRenderTarget(It),v.getClearColor(mt),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();let Nt=v.toneMapping;v.toneMapping=_i,On(M,H,X),b.updateMultisampleRenderTarget(It),b.updateRenderTargetMipmap(It);let Vt=!1;for(let jt=0,zt=F.length;jt<zt;jt++){let Xt=F[jt],Ee=Xt.object,He=Xt.geometry,Te=Xt.material,vn=Xt.group;if(Te.side===Qn&&Ee.layers.test(X.layers)){let ve=Te.side;Te.side=un,Te.needsUpdate=!0,ai(Ee,H,X,He,Te,vn),Te.side=ve,Te.needsUpdate=!0,Vt=!0}}Vt===!0&&(b.updateMultisampleRenderTarget(It),b.updateRenderTargetMipmap(It)),v.setRenderTarget(wt),v.setClearColor(mt,D),v.toneMapping=Nt}function On(M,F,H){let X=F.isScene===!0?F.overrideMaterial:null;for(let G=0,Mt=M.length;G<Mt;G++){let wt=M[G],Nt=wt.object,Vt=wt.geometry,jt=X===null?wt.material:X,zt=wt.group;Nt.layers.test(H.layers)&&ai(Nt,F,H,Vt,jt,zt)}}function ai(M,F,H,X,G,Mt){M.onBeforeRender(v,F,H,X,G,Mt),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(v,F,H,X,M,Mt),G.transparent===!0&&G.side===Qn&&G.forceSinglePass===!1?(G.side=un,G.needsUpdate=!0,v.renderBufferDirect(H,F,X,G,M,Mt),G.side=yi,G.needsUpdate=!0,v.renderBufferDirect(H,F,X,G,M,Mt),G.side=Qn):v.renderBufferDirect(H,F,X,G,M,Mt),M.onAfterRender(v,F,H,X,G,Mt)}function Wi(M,F,H){F.isScene!==!0&&(F=Ot);let X=Wt.get(M),G=p.state.lights,Mt=p.state.shadowsArray,wt=G.state.version,Nt=Lt.getParameters(M,G.state,Mt,F,H),Vt=Lt.getProgramCacheKey(Nt),jt=X.programs;X.environment=M.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(M.isMeshStandardMaterial?V:g).get(M.envMap||X.environment),jt===void 0&&(M.addEventListener("dispose",ut),jt=new Map,X.programs=jt);let zt=jt.get(Vt);if(zt!==void 0){if(X.currentProgram===zt&&X.lightsStateVersion===wt)return Xi(M,Nt),zt}else Nt.uniforms=Lt.getUniforms(M),M.onBuild(H,Nt,v),M.onBeforeCompile(Nt,v),zt=Lt.acquireProgram(Nt,Vt),jt.set(Vt,zt),X.uniforms=Nt.uniforms;let Xt=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Xt.clippingPlanes=Yt.uniform),Xi(M,Nt),X.needsLights=Cs(M),X.lightsStateVersion=wt,X.needsLights&&(Xt.ambientLightColor.value=G.state.ambient,Xt.lightProbe.value=G.state.probe,Xt.directionalLights.value=G.state.directional,Xt.directionalLightShadows.value=G.state.directionalShadow,Xt.spotLights.value=G.state.spot,Xt.spotLightShadows.value=G.state.spotShadow,Xt.rectAreaLights.value=G.state.rectArea,Xt.ltc_1.value=G.state.rectAreaLTC1,Xt.ltc_2.value=G.state.rectAreaLTC2,Xt.pointLights.value=G.state.point,Xt.pointLightShadows.value=G.state.pointShadow,Xt.hemisphereLights.value=G.state.hemi,Xt.directionalShadowMap.value=G.state.directionalShadowMap,Xt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Xt.spotShadowMap.value=G.state.spotShadowMap,Xt.spotLightMatrix.value=G.state.spotLightMatrix,Xt.spotLightMap.value=G.state.spotLightMap,Xt.pointShadowMap.value=G.state.pointShadowMap,Xt.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=zt,X.uniformsList=null,zt}function Qs(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=gs.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Xi(M,F){let H=Wt.get(M);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function tr(M,F,H,X,G){F.isScene!==!0&&(F=Ot),b.resetTextureUnits();let Mt=F.fog,wt=X.isMeshStandardMaterial?F.environment:null,Nt=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ni,Vt=(X.isMeshStandardMaterial?V:g).get(X.envMap||wt),jt=X.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,zt=!!H.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Xt=!!H.morphAttributes.position,Ee=!!H.morphAttributes.normal,He=!!H.morphAttributes.color,Te=_i;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Te=v.toneMapping);let vn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ve=vn!==void 0?vn.length:0,Qt=Wt.get(X),Ps=p.state.lights;if(it===!0&&(_t===!0||M!==S)){let tn=M===S&&X.id===j;Yt.setState(X,M,tn)}let Me=!1;X.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Ps.state.version||Qt.outputColorSpace!==Nt||G.isBatchedMesh&&Qt.batching===!1||!G.isBatchedMesh&&Qt.batching===!0||G.isInstancedMesh&&Qt.instancing===!1||!G.isInstancedMesh&&Qt.instancing===!0||G.isSkinnedMesh&&Qt.skinning===!1||!G.isSkinnedMesh&&Qt.skinning===!0||G.isInstancedMesh&&Qt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Qt.instancingColor===!1&&G.instanceColor!==null||Qt.envMap!==Vt||X.fog===!0&&Qt.fog!==Mt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Yt.numPlanes||Qt.numIntersection!==Yt.numIntersection)||Qt.vertexAlphas!==jt||Qt.vertexTangents!==zt||Qt.morphTargets!==Xt||Qt.morphNormals!==Ee||Qt.morphColors!==He||Qt.toneMapping!==Te||Ht.isWebGL2===!0&&Qt.morphTargetsCount!==ve)&&(Me=!0):(Me=!0,Qt.__version=X.version);let Xn=Qt.currentProgram;Me===!0&&(Xn=Wi(X,F,G));let er=!1,Ei=!1,Ls=!1,Be=Xn.getUniforms(),fn=Qt.uniforms;if(vt.useProgram(Xn.program)&&(er=!0,Ei=!0,Ls=!0),X.id!==j&&(j=X.id,Ei=!0),er||S!==M){Be.setValue(k,"projectionMatrix",M.projectionMatrix),Be.setValue(k,"viewMatrix",M.matrixWorldInverse);let tn=Be.map.cameraPosition;tn!==void 0&&tn.setValue(k,Gt.setFromMatrixPosition(M.matrixWorld)),Ht.logarithmicDepthBuffer&&Be.setValue(k,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Be.setValue(k,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Ei=!0,Ls=!0)}if(G.isSkinnedMesh){Be.setOptional(k,G,"bindMatrix"),Be.setOptional(k,G,"bindMatrixInverse");let tn=G.skeleton;tn&&(Ht.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),Be.setValue(k,"boneTexture",tn.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Be.setOptional(k,G,"batchingTexture"),Be.setValue(k,"batchingTexture",G._matricesTexture,b));let wi=H.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0&&Ht.isWebGL2===!0)&&A.update(G,H,Xn),(Ei||Qt.receiveShadow!==G.receiveShadow)&&(Qt.receiveShadow=G.receiveShadow,Be.setValue(k,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(fn.envMap.value=Vt,fn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),Ei&&(Be.setValue(k,"toneMappingExposure",v.toneMappingExposure),Qt.needsLights&&Wn(fn,Ls),Mt&&X.fog===!0&&gt.refreshFogUniforms(fn,Mt),gt.refreshMaterialUniforms(fn,X,et,Z,It),gs.upload(k,Qs(Qt),fn,b)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(gs.upload(k,Qs(Qt),fn,b),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Be.setValue(k,"center",G.center),Be.setValue(k,"modelViewMatrix",G.modelViewMatrix),Be.setValue(k,"normalMatrix",G.normalMatrix),Be.setValue(k,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let tn=X.uniformsGroups;for(let qi=0,y=tn.length;qi<y;qi++)if(Ht.isWebGL2){let R=tn[qi];Kt.update(R,Xn),Kt.bind(R,Xn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xn}function Wn(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Cs(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,F,H){Wt.get(M.texture).__webglTexture=F,Wt.get(M.depthTexture).__webglTexture=H;let X=Wt.get(M);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=H===void 0,X.__autoAllocateDepthBuffer||Ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,F){let H=Wt.get(M);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,H=0){T=M,O=F,I=H;let X=!0,G=null,Mt=!1,wt=!1;if(M){let Vt=Wt.get(M);Vt.__useDefaultFramebuffer!==void 0?(vt.bindFramebuffer(k.FRAMEBUFFER,null),X=!1):Vt.__webglFramebuffer===void 0?b.setupRenderTarget(M):Vt.__hasExternalTextures&&b.rebindTextures(M,Wt.get(M.texture).__webglTexture,Wt.get(M.depthTexture).__webglTexture);let jt=M.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(wt=!0);let zt=Wt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(zt[F])?G=zt[F][H]:G=zt[F],Mt=!0):Ht.isWebGL2&&M.samples>0&&b.useMultisampledRTT(M)===!1?G=Wt.get(M).__webglMultisampledFramebuffer:Array.isArray(zt)?G=zt[H]:G=zt,E.copy(M.viewport),W.copy(M.scissor),tt=M.scissorTest}else E.copy(st).multiplyScalar(et).floor(),W.copy(ot).multiplyScalar(et).floor(),tt=xt;if(vt.bindFramebuffer(k.FRAMEBUFFER,G)&&Ht.drawBuffers&&X&&vt.drawBuffers(M,G),vt.viewport(E),vt.scissor(W),vt.setScissorTest(tt),Mt){let Vt=Wt.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,Vt.__webglTexture,H)}else if(wt){let Vt=Wt.get(M.texture),jt=F||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Vt.__webglTexture,H||0,jt)}j=-1},this.readRenderTargetPixels=function(M,F,H,X,G,Mt,wt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Wt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&wt!==void 0&&(Nt=Nt[wt]),Nt){vt.bindFramebuffer(k.FRAMEBUFFER,Nt);try{let Vt=M.texture,jt=Vt.format,zt=Vt.type;if(jt!==_n&&lt.convert(jt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Xt=zt===Gs&&(Ct.has("EXT_color_buffer_half_float")||Ht.isWebGL2&&Ct.has("EXT_color_buffer_float"));if(zt!==xi&&lt.convert(zt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===mi&&(Ht.isWebGL2||Ct.has("OES_texture_float")||Ct.has("WEBGL_color_buffer_float")))&&!Xt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-X&&H>=0&&H<=M.height-G&&k.readPixels(F,H,X,G,lt.convert(jt),lt.convert(zt),Mt)}finally{let Vt=T!==null?Wt.get(T).__webglFramebuffer:null;vt.bindFramebuffer(k.FRAMEBUFFER,Vt)}}},this.copyFramebufferToTexture=function(M,F,H=0){let X=Math.pow(2,-H),G=Math.floor(F.image.width*X),Mt=Math.floor(F.image.height*X);b.setTexture2D(F,0),k.copyTexSubImage2D(k.TEXTURE_2D,H,0,0,M.x,M.y,G,Mt),vt.unbindTexture()},this.copyTextureToTexture=function(M,F,H,X=0){let G=F.image.width,Mt=F.image.height,wt=lt.convert(H.format),Nt=lt.convert(H.type);b.setTexture2D(H,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment),F.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,M.x,M.y,G,Mt,wt,Nt,F.image.data):F.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,M.x,M.y,F.mipmaps[0].width,F.mipmaps[0].height,wt,F.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,X,M.x,M.y,wt,Nt,F.image),X===0&&H.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),vt.unbindTexture()},this.copyTextureToTexture3D=function(M,F,H,X,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Mt=M.max.x-M.min.x+1,wt=M.max.y-M.min.y+1,Nt=M.max.z-M.min.z+1,Vt=lt.convert(X.format),jt=lt.convert(X.type),zt;if(X.isData3DTexture)b.setTexture3D(X,0),zt=k.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)b.setTexture2DArray(X,0),zt=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);let Xt=k.getParameter(k.UNPACK_ROW_LENGTH),Ee=k.getParameter(k.UNPACK_IMAGE_HEIGHT),He=k.getParameter(k.UNPACK_SKIP_PIXELS),Te=k.getParameter(k.UNPACK_SKIP_ROWS),vn=k.getParameter(k.UNPACK_SKIP_IMAGES),ve=H.isCompressedTexture?H.mipmaps[G]:H.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ve.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ve.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,M.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,M.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,M.min.z),H.isDataTexture||H.isData3DTexture?k.texSubImage3D(zt,G,F.x,F.y,F.z,Mt,wt,Nt,Vt,jt,ve.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(zt,G,F.x,F.y,F.z,Mt,wt,Nt,Vt,ve.data)):k.texSubImage3D(zt,G,F.x,F.y,F.z,Mt,wt,Nt,Vt,jt,ve),k.pixelStorei(k.UNPACK_ROW_LENGTH,Xt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ee),k.pixelStorei(k.UNPACK_SKIP_PIXELS,He),k.pixelStorei(k.UNPACK_SKIP_ROWS,Te),k.pixelStorei(k.UNPACK_SKIP_IMAGES,vn),G===0&&X.generateMipmaps&&k.generateMipmap(zt),vt.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?b.setTextureCube(M,0):M.isData3DTexture?b.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?b.setTexture2DArray(M,0):b.setTexture2D(M,0),vt.unbindTexture()},this.resetState=function(){O=0,I=0,T=null,vt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Po?"display-p3":"srgb",e.unpackColorSpace=xe.workingColorSpace===ea?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ge?Ni:Pc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ni?Ge:ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},mo=class extends Ys{};mo.prototype.isWebGL1Renderer=!0;var Zr=class extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},go=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$a,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},nn=new N,zn=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var $r=class extends dn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ne,h=Ne,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jr=class extends Dn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new N,r=new N;if(t.index!==null){let o=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],f=d.start,m=d.count;for(let _=f,x=f+m;_<x;_+=3)for(let p=0;p<3;p++){let u=a.getX(_+p),w=a.getX(_+(p+1)%3);s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,w),_c(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,d=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,d),_c(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new xn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function _c(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function wr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function vg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var bs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_o=class extends bs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rl,endingEnd:Rl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cl:r=t,a=2*e-n;break;case Pl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Cl:o=t,l=2*n-e;break;case Pl:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,_=(n-e)/(s-e),x=_*_,p=x*_,u=-f*p+2*f*x-f*_,w=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*_+1,v=(-1-m)*p+(1.5+m)*x+.5*_,P=m*p-m*x;for(let O=0;O!==a;++O)r[O]=u*o[h+O]+w*o[c+O]+v*o[l+O]+P*o[d+O];return r}},xo=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},yo=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wr(e,this.TimeBufferType),this.values=wr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wr(t.times,Array),values:wr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _o(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Rr:e=this.InterpolantFactoryMethodDiscrete;break;case Cr:e=this.InterpolantFactoryMethodLinear;break;case va:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rr;case this.InterpolantFactoryMethodLinear:return Cr;case this.InterpolantFactoryMethodSmooth:return va}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&vg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===va,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,f=d-n,m=d+n;for(let _=0;_!==n;++_){let x=e[d+_];if(x!==e[f+_]||x!==e[m+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let m=0;m!==n;++m)e[f+m]=e[d+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Cr;var Oi=class extends Un{};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Rr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var vo=class extends Un{};vo.prototype.ValueTypeName="color";var Mo=class extends Un{};Mo.prototype.ValueTypeName="number";var So=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ln.slerpFlat(r,0,o,c-a,o,c,l);return r}},Zs=class extends Un{InterpolantFactoryMethodLinear(t){return new So(this.times,this.values,this.getValueSize(),t)}};Zs.prototype.ValueTypeName="quaternion";Zs.prototype.DefaultInterpolation=Cr;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends Un{};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Rr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends Un{};bo.prototype.ValueTypeName="vector";var Eo=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],_=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}},Mg=new Eo,wo=class{constructor(t){this.manager=t!==void 0?t:Mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};wo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Kr=class extends Dn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Do="\\[\\]\\.:\\/",Sg=new RegExp("["+Do+"]","g"),Uo="[^"+Do+"]",bg="[^"+Do.replace("\\.","")+"]",Eg=/((?:WC+[\/:])*)/.source.replace("WC",Uo),wg=/(WCOD+)?/.source.replace("WCOD",bg),Ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uo),Tg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uo),Rg=new RegExp("^"+Eg+wg+Ag+Tg+"$"),Cg=["material","materials","bones","map"],Ao=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sg,"")}static parseTrackName(t){let e=Rg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Cg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Ao;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zg=new Float32Array(1);var Bi=class extends go{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var jr=class{constructor(t,e,n=0,s=1/0){this.ray=new vs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return To(t,this,n,e),n.sort(xc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)To(t[s],this,n,e);return n.sort(xc),n}};function xc(i,t){return i.distance-t.distance}function To(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)To(s[r],t,e,!0)}}var kn=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(We(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var yc=new N,Ar=new N,Qr=class{constructor(t=new N,e=new N){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){yc.subVectors(t,this.start),Ar.subVectors(this.end,this.start);let n=Ar.dot(Ar),r=Ar.dot(yc)/n;return e&&(r=We(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);var Hc={type:"change"},No={type:"start"},Vc={type:"end"},aa=new vs,Gc=new Cn,Lg=Math.cos(70*ia.DEG2RAD),oa=class extends Bn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:ki.ROTATE,TWO:ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",rt),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",rt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Hc),n.update(),r=s.NONE},this.update=function(){let A=new N,K=new Ln().setFromUnitVectors(t.up,new N(0,1,0)),ct=K.clone().invert(),lt=new N,Pt=new Ln,Kt=new N,ne=2*Math.PI;return function(ft=null){let C=n.object.position;A.copy(C).sub(n.target),A.applyQuaternion(K),a.setFromVector3(A),n.autoRotate&&r===s.NONE&&W(S(ft)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ht=n.minAzimuthAngle,ut=n.maxAzimuthAngle;isFinite(ht)&&isFinite(ut)&&(ht<-Math.PI?ht+=ne:ht>Math.PI&&(ht-=ne),ut<-Math.PI?ut+=ne:ut>Math.PI&&(ut-=ne),ht<=ut?a.theta=Math.max(ht,Math.min(ut,a.theta)):a.theta=a.theta>(ht+ut)/2?Math.max(ht,a.theta):Math.min(ut,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&I||n.object.isOrthographicCamera?a.radius=Y(a.radius):a.radius=Y(a.radius*c),A.setFromSpherical(a),A.applyQuaternion(ct),C.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Ft=!1;if(n.zoomToCursor&&I){let At=null;if(n.object.isPerspectiveCamera){let ie=A.length();At=Y(ie*c);let ce=ie-At;n.object.position.addScaledVector(P,ce),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let ie=new N(O.x,O.y,0);ie.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ft=!0;let ce=new N(O.x,O.y,0);ce.unproject(n.object),n.object.position.sub(ce).add(ie),n.object.updateMatrixWorld(),At=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;At!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(At).add(n.object.position):(aa.origin.copy(n.object.position),aa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(aa.direction))<Lg?t.lookAt(n.target):(Gc.setFromNormalAndCoplanarPoint(n.object.up,n.target),aa.intersectPlane(Gc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ft=!0);return c=1,I=!1,Ft||lt.distanceToSquared(n.object.position)>o||8*(1-Pt.dot(n.object.quaternion))>o||Kt.distanceToSquared(n.target)>0?(n.dispatchEvent(Hc),lt.copy(n.object.position),Pt.copy(n.object.quaternion),Kt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",bt),n.domElement.removeEventListener("pointerdown",Wt),n.domElement.removeEventListener("pointercancel",g),n.domElement.removeEventListener("wheel",Q),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",g),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",rt),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new kn,l=new kn,c=1,h=new N,d=new Zt,f=new Zt,m=new Zt,_=new Zt,x=new Zt,p=new Zt,u=new Zt,w=new Zt,v=new Zt,P=new N,O=new Zt,I=!1,T=[],j={};function S(A){return A!==null?2*Math.PI/60*n.autoRotateSpeed*A:2*Math.PI/60/60*n.autoRotateSpeed}function E(A){let K=Math.abs(A)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*K)}function W(A){l.theta-=A}function tt(A){l.phi-=A}let mt=function(){let A=new N;return function(ct,lt){A.setFromMatrixColumn(lt,0),A.multiplyScalar(-ct),h.add(A)}}(),D=function(){let A=new N;return function(ct,lt){n.screenSpacePanning===!0?A.setFromMatrixColumn(lt,1):(A.setFromMatrixColumn(lt,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(ct),h.add(A)}}(),z=function(){let A=new N;return function(ct,lt){let Pt=n.domElement;if(n.object.isPerspectiveCamera){let Kt=n.object.position;A.copy(Kt).sub(n.target);let ne=A.length();ne*=Math.tan(n.object.fov/2*Math.PI/180),mt(2*ct*ne/Pt.clientHeight,n.object.matrix),D(2*lt*ne/Pt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(mt(ct*(n.object.right-n.object.left)/n.object.zoom/Pt.clientWidth,n.object.matrix),D(lt*(n.object.top-n.object.bottom)/n.object.zoom/Pt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Z(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function et(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(A,K){if(!n.zoomToCursor)return;I=!0;let ct=n.domElement.getBoundingClientRect(),lt=A-ct.left,Pt=K-ct.top,Kt=ct.width,ne=ct.height;O.x=lt/Kt*2-1,O.y=-(Pt/ne)*2+1,P.set(O.x,O.y,1).unproject(n.object).sub(n.object.position).normalize()}function Y(A){return Math.max(n.minDistance,Math.min(n.maxDistance,A))}function st(A){d.set(A.clientX,A.clientY)}function ot(A){J(A.clientX,A.clientX),u.set(A.clientX,A.clientY)}function xt(A){_.set(A.clientX,A.clientY)}function q(A){f.set(A.clientX,A.clientY),m.subVectors(f,d).multiplyScalar(n.rotateSpeed);let K=n.domElement;W(2*Math.PI*m.x/K.clientHeight),tt(2*Math.PI*m.y/K.clientHeight),d.copy(f),n.update()}function it(A){w.set(A.clientX,A.clientY),v.subVectors(w,u),v.y>0?Z(E(v.y)):v.y<0&&et(E(v.y)),u.copy(w),n.update()}function _t(A){x.set(A.clientX,A.clientY),p.subVectors(x,_).multiplyScalar(n.panSpeed),z(p.x,p.y),_.copy(x),n.update()}function It(A){J(A.clientX,A.clientY),A.deltaY<0?et(E(A.deltaY)):A.deltaY>0&&Z(E(A.deltaY)),n.update()}function Rt(A){let K=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?tt(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),K=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?tt(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),K=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),K=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),K=!0;break}K&&(A.preventDefault(),n.update())}function kt(A){if(T.length===1)d.set(A.pageX,A.pageY);else{let K=ee(A),ct=.5*(A.pageX+K.x),lt=.5*(A.pageY+K.y);d.set(ct,lt)}}function Gt(A){if(T.length===1)_.set(A.pageX,A.pageY);else{let K=ee(A),ct=.5*(A.pageX+K.x),lt=.5*(A.pageY+K.y);_.set(ct,lt)}}function Ot(A){let K=ee(A),ct=A.pageX-K.x,lt=A.pageY-K.y,Pt=Math.sqrt(ct*ct+lt*lt);u.set(0,Pt)}function Ut(A){n.enableZoom&&Ot(A),n.enablePan&&Gt(A)}function k(A){n.enableZoom&&Ot(A),n.enableRotate&&kt(A)}function ye(A){if(T.length==1)f.set(A.pageX,A.pageY);else{let ct=ee(A),lt=.5*(A.pageX+ct.x),Pt=.5*(A.pageY+ct.y);f.set(lt,Pt)}m.subVectors(f,d).multiplyScalar(n.rotateSpeed);let K=n.domElement;W(2*Math.PI*m.x/K.clientHeight),tt(2*Math.PI*m.y/K.clientHeight),d.copy(f)}function Ct(A){if(T.length===1)x.set(A.pageX,A.pageY);else{let K=ee(A),ct=.5*(A.pageX+K.x),lt=.5*(A.pageY+K.y);x.set(ct,lt)}p.subVectors(x,_).multiplyScalar(n.panSpeed),z(p.x,p.y),_.copy(x)}function Ht(A){let K=ee(A),ct=A.pageX-K.x,lt=A.pageY-K.y,Pt=Math.sqrt(ct*ct+lt*lt);w.set(0,Pt),v.set(0,Math.pow(w.y/u.y,n.zoomSpeed)),Z(v.y),u.copy(w);let Kt=(A.pageX+K.x)*.5,ne=(A.pageY+K.y)*.5;J(Kt,ne)}function vt(A){n.enableZoom&&Ht(A),n.enablePan&&Ct(A)}function ue(A){n.enableZoom&&Ht(A),n.enableRotate&&ye(A)}function Wt(A){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",g)),Dt(A),A.pointerType==="touch"?Lt(A):V(A))}function b(A){n.enabled!==!1&&(A.pointerType==="touch"?gt(A):at(A))}function g(A){Yt(A),T.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",g)),n.dispatchEvent(Vc),r=s.NONE}function V(A){let K;switch(A.button){case 0:K=n.mouseButtons.LEFT;break;case 1:K=n.mouseButtons.MIDDLE;break;case 2:K=n.mouseButtons.RIGHT;break;default:K=-1}switch(K){case zi.DOLLY:if(n.enableZoom===!1)return;ot(A),r=s.DOLLY;break;case zi.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;xt(A),r=s.PAN}else{if(n.enableRotate===!1)return;st(A),r=s.ROTATE}break;case zi.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;st(A),r=s.ROTATE}else{if(n.enablePan===!1)return;xt(A),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(No)}function at(A){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;q(A);break;case s.DOLLY:if(n.enableZoom===!1)return;it(A);break;case s.PAN:if(n.enablePan===!1)return;_t(A);break}}function Q(A){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(A.preventDefault(),n.dispatchEvent(No),It(A),n.dispatchEvent(Vc))}function rt(A){n.enabled===!1||n.enablePan===!1||Rt(A)}function Lt(A){switch(nt(A),T.length){case 1:switch(n.touches.ONE){case ki.ROTATE:if(n.enableRotate===!1)return;kt(A),r=s.TOUCH_ROTATE;break;case ki.PAN:if(n.enablePan===!1)return;Gt(A),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case ki.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ut(A),r=s.TOUCH_DOLLY_PAN;break;case ki.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;k(A),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(No)}function gt(A){switch(nt(A),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ye(A),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Ct(A),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;vt(A),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ue(A),n.update();break;default:r=s.NONE}}function bt(A){n.enabled!==!1&&A.preventDefault()}function Dt(A){T.push(A.pointerId)}function Yt(A){delete j[A.pointerId];for(let K=0;K<T.length;K++)if(T[K]==A.pointerId){T.splice(K,1);return}}function nt(A){let K=j[A.pointerId];K===void 0&&(K=new Zt,j[A.pointerId]=K),K.set(A.pageX,A.pageY)}function ee(A){let K=A.pointerId===T[0]?T[1]:T[0];return j[K]}n.domElement.addEventListener("contextmenu",bt),n.domElement.addEventListener("pointerdown",Wt),n.domElement.addEventListener("pointercancel",g),n.domElement.addEventListener("wheel",Q,{passive:!1}),this.update()}};var Wc=new bn,la=new N,ws=class extends Kr{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new xn(t,3)),this.setAttribute("uv",new xn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Bi(e,6,1);return this.setAttribute("instanceStart",new zn(n,3,0)),this.setAttribute("instanceEnd",new zn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Bi(e,6,1);return this.setAttribute("instanceColorStart",new zn(n,3,0)),this.setAttribute("instanceColorEnd",new zn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Jr(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Wc.setFromBufferAttribute(e),this.boundingBox.union(Wc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)la.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(la)),la.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(la));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};dt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Zt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};an.line={uniforms:sa.merge([dt.common,dt.fog,dt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var As=class extends yn{constructor(t){super({type:"LineMaterial",uniforms:sa.clone(an.line.uniforms),vertexShader:an.line.vertexShader,fragmentShader:an.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};var Xc=new N,qc=new N,Xe=new Re,qe=new Re,Hn=new Re,Oo=new N,Fo=new Ie,Ye=new Qr,Yc=new N,ca=new bn,ha=new si,Vn=new Re,Gn,Hi;function Zc(i,t,e){return Vn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Vn.multiplyScalar(1/Vn.w),Vn.x=Hi/e.width,Vn.y=Hi/e.height,Vn.applyMatrix4(i.projectionMatrixInverse),Vn.multiplyScalar(1/Vn.w),Math.abs(Math.max(Vn.x,Vn.y))}function Ig(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,l=o;a<l;a++){Ye.start.fromBufferAttribute(s,a),Ye.end.fromBufferAttribute(r,a),Ye.applyMatrix4(e);let c=new N,h=new N;Gn.distanceSqToSegment(Ye.start,Ye.end,h,c),h.distanceTo(c)<Hi*.5&&t.push({point:h,pointOnLine:c,distance:Gn.origin.distanceTo(h),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function Dg(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),d=-t.near;Gn.at(1,Hn),Hn.w=1,Hn.applyMatrix4(t.matrixWorldInverse),Hn.applyMatrix4(n),Hn.multiplyScalar(1/Hn.w),Hn.x*=r.x/2,Hn.y*=r.y/2,Hn.z=0,Oo.copy(Hn),Fo.multiplyMatrices(t.matrixWorldInverse,o);for(let f=0,m=h;f<m;f++){if(Xe.fromBufferAttribute(l,f),qe.fromBufferAttribute(c,f),Xe.w=1,qe.w=1,Xe.applyMatrix4(Fo),qe.applyMatrix4(Fo),Xe.z>d&&qe.z>d)continue;if(Xe.z>d){let v=Xe.z-qe.z,P=(Xe.z-d)/v;Xe.lerp(qe,P)}else if(qe.z>d){let v=qe.z-Xe.z,P=(qe.z-d)/v;qe.lerp(Xe,P)}Xe.applyMatrix4(n),qe.applyMatrix4(n),Xe.multiplyScalar(1/Xe.w),qe.multiplyScalar(1/qe.w),Xe.x*=r.x/2,Xe.y*=r.y/2,qe.x*=r.x/2,qe.y*=r.y/2,Ye.start.copy(Xe),Ye.start.z=0,Ye.end.copy(qe),Ye.end.z=0;let x=Ye.closestPointToPointParameter(Oo,!0);Ye.at(x,Yc);let p=ia.lerp(Xe.z,qe.z,x),u=p>=-1&&p<=1,w=Oo.distanceTo(Yc)<Hi*.5;if(u&&w){Ye.start.fromBufferAttribute(l,f),Ye.end.fromBufferAttribute(c,f),Ye.start.applyMatrix4(o),Ye.end.applyMatrix4(o);let v=new N,P=new N;Gn.distanceSqToSegment(Ye.start,Ye.end,P,v),e.push({point:P,pointOnLine:v,distance:Gn.origin.distanceTo(P),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}var ua=class extends hn{constructor(t=new ws,e=new As({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,l=e.count;o<l;o++,a+=2)Xc.fromBufferAttribute(e,o),qc.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Xc.distanceTo(qc);let r=new Bi(s,2,1);return t.setAttribute("instanceDistanceStart",new zn(r,1,0)),t.setAttribute("instanceDistanceEnd",new zn(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Gn=t.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;Hi=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),ha.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=Hi*.5;else{let d=Math.max(s.near,ha.distanceToPoint(Gn.origin));c=Zc(s,d,l.resolution)}if(ha.radius+=c,Gn.intersectsSphere(ha)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),ca.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=Hi*.5;else{let d=Math.max(s.near,ca.distanceToPoint(Gn.origin));h=Zc(s,d,l.resolution)}ca.expandByScalar(h),Gn.intersectsBox(ca)!==!1&&(n?Ig(this,e):Dg(this,s,e))}};var Nn=window.GEO,oe=Nn.nx,je=Nn.ny,En=oe*je,ri=Nn.lon0,Vo=Nn.lon1,Gi=Nn.lat0,Go=Nn.lat1,$s=(Vo-ri)/(oe-1),Js=(Go-Gi)/(je-1),$c=1e-5,Pe=Math.PI/180,Bt=i=>document.getElementById(i),vi=(()=>{let i=atob(Nn.dem),t=new Uint8Array(i.length);for(let e=0;e<i.length;e++)t[e]=i.charCodeAt(e);return Float32Array.from(new Int16Array(t.buffer))})(),Yo=63.71,Wo=25*Pe,Ug=47*Pe,sh=105*Pe,bi=(Math.sin(Wo)+Math.sin(Ug))/2,Zo=Math.cos(Wo)**2+2*bi*Math.sin(Wo),rh=Yo/bi*Math.sqrt(Zo);function ah(i,t){let e=Yo/bi*Math.sqrt(Zo-2*bi*Math.sin(t*Pe)),n=bi*(i*Pe-sh);return[e*Math.sin(n),rh-e*Math.cos(n)]}var[oh,lh]=ah(104.5,35);function Vi(i,t){let e=ah(i,t);return[e[0]-oh,-(e[1]-lh)]}function Jc(i,t){let e=i+oh,n=-t+lh,s=rh-n,r=Math.hypot(e,s),o=(Zo-(r*bi/Yo)**2)/(2*bi);return o<-1||o>1?null:[(sh+Math.atan2(e,s)/bi)/Pe,Math.asin(o)/Pe]}var Ng={\u53F0\u6E7E:"\u53F0\u6E7E\u7701",\u6CB3\u5317:"\u6CB3\u5317\u7701",\u5C71\u897F:"\u5C71\u897F\u7701",\u5185\u8499\u53E4:"\u5185\u8499\u53E4\u81EA\u6CBB\u533A",\u8FBD\u5B81:"\u8FBD\u5B81\u7701",\u5409\u6797:"\u5409\u6797\u7701",\u9ED1\u9F99\u6C5F:"\u9ED1\u9F99\u6C5F\u7701",\u6C5F\u82CF:"\u6C5F\u82CF\u7701",\u6D59\u6C5F:"\u6D59\u6C5F\u7701",\u5B89\u5FBD:"\u5B89\u5FBD\u7701",\u798F\u5EFA:"\u798F\u5EFA\u7701",\u6C5F\u897F:"\u6C5F\u897F\u7701",\u5C71\u4E1C:"\u5C71\u4E1C\u7701",\u6CB3\u5357:"\u6CB3\u5357\u7701",\u6E56\u5317:"\u6E56\u5317\u7701",\u6E56\u5357:"\u6E56\u5357\u7701",\u5E7F\u4E1C:"\u5E7F\u4E1C\u7701",\u5E7F\u897F:"\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",\u6D77\u5357:"\u6D77\u5357\u7701",\u56DB\u5DDD:"\u56DB\u5DDD\u7701",\u8D35\u5DDE:"\u8D35\u5DDE\u7701",\u4E91\u5357:"\u4E91\u5357\u7701",\u897F\u85CF:"\u897F\u85CF\u81EA\u6CBB\u533A",\u9655\u897F:"\u9655\u897F\u7701",\u7518\u8083:"\u7518\u8083\u7701",\u9752\u6D77:"\u9752\u6D77\u7701",\u5B81\u590F:"\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A",\u65B0\u7586:"\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",\u5317\u4EAC:"\u5317\u4EAC\u5E02",\u5929\u6D25:"\u5929\u6D25\u5E02",\u4E0A\u6D77:"\u4E0A\u6D77\u5E02",\u91CD\u5E86:"\u91CD\u5E86\u5E02",\u9999\u6E2F:"\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A",\u6FB3\u95E8:"\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A"};function Og(i){return new Promise((t,e)=>{let n=new Image;n.onload=()=>t(n),n.onerror=e,n.src=i})}function Si(i){i=i.trim().replace("#",""),i.length===3&&(i=i.split("").map(e=>e+e).join(""));let t=parseInt(i,16);return[t>>16&255,t>>8&255,t&255]}var Ks=i=>{let t=Si(i);return new N(t[0]/255,t[1]/255,t[2]/255)},we=i=>getComputedStyle(document.documentElement).getPropertyValue(i).trim(),Ts={layered:{name:"\u5206\u5C42\u8BBE\u8272",discrete:!0,stops:[[-400,"#5F9F62"],[0,"#6DAC68"],[200,"#A6C97D"],[500,"#DFDB9B"],[1e3,"#E3C27C"],[2e3,"#CE9C5F"],[3e3,"#B07A45"],[4e3,"#8E5A35"],[5e3,"#6A4535"]]},natural:{name:"\u8FDE\u7EED\u6655\u6E32",discrete:!1,stops:[[-400,"#4E8D58"],[0,"#5C9C5E"],[300,"#9CC17A"],[800,"#D7D495"],[1500,"#D8B679"],[2500,"#BE8E5D"],[3500,"#9F6F4F"],[4500,"#8A6A5C"],[5400,"#B8ADA8"],[6100,"#F3F1EE"]]},gray:{name:"\u7070\u5EA6",discrete:!1,stops:[[-400,"#5A5A5A"],[0,"#666666"],[6100,"#F2F2F2"]]}},Bo=-400,Kc=6400,da=1024,Xo="#B9DCEC",qo="#2A5D8C",jc="#8EC3E0";function zo(i,t=ae.scheme){let e=Ts[t].stops;if(Ts[t].discrete){let n=e[0][1];for(let s of e)i>=s[0]&&(n=s[1]);return Si(n)}if(i<=e[0][0])return Si(e[0][1]);for(let n=1;n<e.length;n++)if(i<=e[n][0]){let s=(i-e[n-1][0])/(e[n][0]-e[n-1][0]),r=Si(e[n-1][1]),o=Si(e[n][1]);return[r[0]+(o[0]-r[0])*s,r[1]+(o[1]-r[1])*s,r[2]+(o[2]-r[2])*s]}return Si(e[e.length-1][1])}function Fg(i){let t=Math.pow(Math.min(Math.max(i/6500,0),1),.5),e=Si(Xo),n=Si(qo);return[e[0]+(n[0]-e[0])*t,e[1]+(n[1]-e[1])*t,e[2]+(n[2]-e[2])*t]}var ko=i=>`rgb(${i[0]|0},${i[1]|0},${i[2]|0})`,ae={exag:22,scheme:"layered",contour:0,shade:.85,dim:!0,bathy:!1,sea:0,layers:{admin:!0,rivers:!0,regions:!0,mountains:!0,seas:!0,cities:!1,steps:!1,qinhuai:!1,hu:!1}},Qc=[[74.6,38.5],[76.2,38],[77.4,37.5],[78.5,37.2],[79.9,36.8],[81.5,36.6],[82.7,36.7],[84.3,37],[85.6,37.6],[86.5,37.9],[88.2,38.6],[90,39],[92,39.3],[94,39.7],[95.5,39.7],[97,39.6],[98.3,39.35],[99.5,38.9],[101,38.3],[102.4,37.5],[103.3,36.6],[103.6,35.5],[104,34.5],[104.5,33.3],[104.2,32.3],[103.6,31.3],[103,30.3],[102.6,29.3],[102.3,28.3],[101.9,27.3],[101.2,26.2],[100.3,25.3],[99.2,24.5],[98.6,24.1]],th=[[122.3,53.2],[121.9,51.8],[121.4,50.4],[120.8,49],[120.2,47.6],[119.4,46.3],[118.5,45],[117.6,43.8],[116.8,42.6],[116.1,41.5],[115.5,40.5],[115.1,39.7],[114.6,38.7],[114,37.7],[113.6,36.6],[113.3,35.6],[112.6,35],[111.8,34.2],[111.2,33.3],[110.6,32.2],[110.2,31.1],[110.3,30],[110.5,29],[110.7,28],[110.5,27],[110.2,26.2]],eh=[[104.6,34.2],[105.8,34.2],[107,34],[107.8,33.95],[109,33.9],[110.1,33.95],[111.2,33.7],[112.3,33.3],[113.2,32.6],[114.2,32.4],[115.3,32.45],[116.5,32.5],[117,32.65],[117.4,32.93],[118.2,33.1],[118.85,33.3],[119.5,33.6],[120.3,34]],nh=[[127.49,50.24],[98.49,25.02]],ih={\u9752\u85CF\u9AD8\u539F:["\u9AD8\u539F","\u4E16\u754C\u6D77\u62D4\u6700\u9AD8\u7684\u9AD8\u539F\uFF0C\u53F7\u79F0\u201C\u4E16\u754C\u5C4B\u810A\u201D\uFF0C\u5E73\u5747\u6D77\u62D4 4000 m \u4EE5\u4E0A\uFF0C\u6784\u6210\u6211\u56FD\u5730\u52BF\u7B2C\u4E00\u7EA7\u9636\u68AF\u3002\u96EA\u5C71\u8FDE\u7EF5\u3001\u51B0\u5DDD\u5E7F\u5E03\uFF0C\u662F\u957F\u6C5F\u3001\u9EC4\u6CB3\u7B49\u5927\u6C5F\u5927\u6CB3\u7684\u53D1\u6E90\u5730\u3002"],\u5185\u8499\u53E4\u9AD8\u539F:["\u9AD8\u539F","\u6211\u56FD\u7B2C\u4E8C\u5927\u9AD8\u539F\uFF0C\u6D77\u62D4 1000\u20131500 m\u3002\u5730\u9762\u5766\u8361\u3001\u4E00\u671B\u65E0\u9645\uFF0C\u591A\u8349\u539F\u4E0E\u6C99\u6F20\u3002"],\u9EC4\u571F\u9AD8\u539F:["\u9AD8\u539F","\u4E16\u754C\u4E0A\u9EC4\u571F\u5206\u5E03\u9762\u79EF\u6700\u5927\u7684\u9AD8\u539F\uFF0C\u6D77\u62D4 1000\u20132000 m\u3002\u5730\u8868\u5343\u6C9F\u4E07\u58D1\u3001\u652F\u79BB\u7834\u788E\uFF0C\u6C34\u571F\u6D41\u5931\u4E25\u91CD\u3002"],\u4E91\u8D35\u9AD8\u539F:["\u9AD8\u539F","\u6D77\u62D4 1000\u20132000 m\uFF0C\u5730\u5F62\u5D0E\u5C96\u4E0D\u5E73\uFF0C\u77F3\u7070\u5CA9\u5E7F\u5E03\uFF0C\u5580\u65AF\u7279\u5730\u8C8C\u5178\u578B\uFF0C\u591A\u5C71\u95F4\u5C0F\u76C6\u5730\uFF08\u201C\u575D\u5B50\u201D\uFF09\u3002"],\u5854\u91CC\u6728\u76C6\u5730:["\u76C6\u5730","\u6211\u56FD\u9762\u79EF\u6700\u5927\u7684\u76C6\u5730\uFF0C\u4F4D\u4E8E\u5929\u5C71\u4E0E\u6606\u4ED1\u5C71\u4E4B\u95F4\uFF0C\u4E2D\u90E8\u7684\u5854\u514B\u62C9\u739B\u5E72\u6C99\u6F20\u662F\u6211\u56FD\u9762\u79EF\u6700\u5927\u7684\u6C99\u6F20\u3002"],\u51C6\u5676\u5C14\u76C6\u5730:["\u76C6\u5730","\u6211\u56FD\u7B2C\u4E8C\u5927\u76C6\u5730\uFF0C\u4F4D\u4E8E\u5929\u5C71\u4E0E\u963F\u5C14\u6CF0\u5C71\u4E4B\u95F4\uFF0C\u4E2D\u90E8\u6709\u53E4\u5C14\u73ED\u901A\u53E4\u7279\u6C99\u6F20\u3002"],\u67F4\u8FBE\u6728\u76C6\u5730:["\u76C6\u5730","\u6211\u56FD\u6D77\u62D4\u6700\u9AD8\u7684\u5927\u76C6\u5730\uFF08\u7EA6 2600\u20133000 m\uFF09\uFF0C\u76D0\u6E56\u4F17\u591A\uFF0C\u77FF\u4EA7\u8D44\u6E90\u4E30\u5BCC\uFF0C\u6709\u201C\u805A\u5B9D\u76C6\u201D\u4E4B\u79F0\u3002"],\u56DB\u5DDD\u76C6\u5730:["\u76C6\u5730","\u56DB\u5468\u7FA4\u5C71\u73AF\u7ED5\uFF0C\u897F\u90E8\u4E3A\u6210\u90FD\u5E73\u539F\u3002\u7D2B\u8272\u571F\u5E7F\u5E03\uFF0C\u79F0\u201C\u7D2B\u8272\u76C6\u5730\u201D\uFF0C\u81EA\u53E4\u6709\u201C\u5929\u5E9C\u4E4B\u56FD\u201D\u4E4B\u79F0\u3002"],\u5410\u9C81\u756A\u76C6\u5730:["\u76C6\u5730","\u6211\u56FD\u9646\u5730\u6700\u4F4E\u5904\u6240\u5728\uFF0C\u827E\u4E01\u6E56\u6E56\u9762\u7EA6 \u2212154 m\u3002\u590F\u5B63\u9177\u70ED\uFF0C\u6709\u201C\u706B\u6D32\u201D\u4E4B\u79F0\u3002"],\u4E1C\u5317\u5E73\u539F:["\u5E73\u539F","\u6211\u56FD\u9762\u79EF\u6700\u5927\u7684\u5E73\u539F\uFF0C\u7531\u4E09\u6C5F\u5E73\u539F\u3001\u677E\u5AE9\u5E73\u539F\u3001\u8FBD\u6CB3\u5E73\u539F\u7EC4\u6210\u3002\u9ED1\u571F\u80A5\u6C83\uFF0C\u662F\u91CD\u8981\u7684\u5546\u54C1\u7CAE\u57FA\u5730\u3002"],\u534E\u5317\u5E73\u539F:["\u5E73\u539F","\u4E3B\u8981\u7531\u9EC4\u6CB3\u3001\u6D77\u6CB3\u3001\u6DEE\u6CB3\u6CE5\u6C99\u51B2\u79EF\u800C\u6210\uFF0C\u5730\u52BF\u5766\u8361\uFF0C\u5927\u90E8\u5206\u6D77\u62D4\u5728 50 m \u4EE5\u4E0B\u3002"],\u957F\u6C5F\u4E2D\u4E0B\u6E38\u5E73\u539F:["\u5E73\u539F","\u5730\u52BF\u4F4E\u5E73\uFF0C\u6CB3\u6E56\u4F17\u591A\u3001\u6C34\u7F51\u5BC6\u5E03\uFF0C\u7D20\u6709\u201C\u9C7C\u7C73\u4E4B\u4E61\u201D\u4E4B\u79F0\u3002"],\u4E1C\u5357\u4E18\u9675:["\u4E18\u9675","\u6211\u56FD\u9762\u79EF\u6700\u5927\u7684\u4E18\u9675\uFF0C\u7531\u6C5F\u5357\u4E18\u9675\u3001\u6D59\u95FD\u4E18\u9675\u3001\u4E24\u5E7F\u4E18\u9675\u7EC4\u6210\uFF0C\u4F4E\u5C71\u4E18\u9675\u95F4\u591A\u6CB3\u8C37\u76C6\u5730\u3002"],\u8FBD\u4E1C\u4E18\u9675:["\u4E18\u9675","\u4F4D\u4E8E\u8FBD\u4E1C\u534A\u5C9B\uFF0C\u6D77\u62D4\u591A\u5728 500 m \u4EE5\u4E0B\u3002"],\u5C71\u4E1C\u4E18\u9675:["\u4E18\u9675","\u4F4D\u4E8E\u5C71\u4E1C\u534A\u5C9B\u4E0E\u9C81\u4E2D\u5730\u533A\uFF0C\u6CF0\u5C71\u662F\u5176\u6700\u9AD8\u5CF0\u3002"],\u559C\u9A6C\u62C9\u96C5\u5C71\u8109:["\u5C71\u8109","\u4E16\u754C\u4E0A\u6D77\u62D4\u6700\u9AD8\u7684\u5C71\u8109\uFF0C\u4E1C\u897F\u7EF5\u5EF6\u7EA6 2400 km\uFF0C\u5E73\u5747\u6D77\u62D4 6000 m \u4EE5\u4E0A\uFF0C\u4E3B\u5CF0\u73E0\u7A46\u6717\u739B\u5CF0\u3002"],\u6606\u4ED1\u5C71\u8109:["\u5C71\u8109","\u897F\u8D77\u5E15\u7C73\u5C14\u9AD8\u539F\uFF0C\u4E1C\u5EF6\u81F3\u9752\u6D77\uFF0C\u662F\u5730\u52BF\u7B2C\u4E00\u3001\u4E8C\u7EA7\u9636\u68AF\u5206\u754C\u7684\u7EC4\u6210\u90E8\u5206\u3002"],\u5929\u5C71:["\u5C71\u8109","\u4E1C\u897F\u8D70\u5411\uFF0C\u6A2A\u4E98\u65B0\u7586\u4E2D\u90E8\uFF0C\u628A\u65B0\u7586\u5206\u4E3A\u5357\u7586\uFF08\u5854\u91CC\u6728\u76C6\u5730\uFF09\u548C\u5317\u7586\uFF08\u51C6\u5676\u5C14\u76C6\u5730\uFF09\u3002"],\u963F\u5C14\u6CF0\u5C71:["\u5C71\u8109","\u4F4D\u4E8E\u65B0\u7586\u5317\u90E8\uFF0C\u897F\u5317\u2014\u4E1C\u5357\u8D70\u5411\uFF0C\u662F\u51C6\u5676\u5C14\u76C6\u5730\u7684\u5317\u754C\u3002"],\u7941\u8FDE\u5C71:["\u5C71\u8109","\u4F4D\u4E8E\u9752\u85CF\u9AD8\u539F\u4E1C\u5317\u7F18\uFF0C\u897F\u5317\u2014\u4E1C\u5357\u8D70\u5411\uFF0C\u51B0\u96EA\u878D\u6C34\u6ECB\u517B\u4E86\u6CB3\u897F\u8D70\u5ECA\uFF0C\u662F\u7B2C\u4E00\u3001\u4E8C\u7EA7\u9636\u68AF\u5206\u754C\u7684\u7EC4\u6210\u90E8\u5206\u3002"],\u6A2A\u65AD\u5C71\u8109:["\u5C71\u8109","\u5357\u5317\u8D70\u5411\uFF0C\u5C71\u9AD8\u8C37\u6DF1\u3001\u5CAD\u8C37\u76F8\u95F4\uFF0C\u6012\u6C5F\u3001\u6F9C\u6CA7\u6C5F\u3001\u91D1\u6C99\u6C5F\u5728\u6B64\u201C\u4E09\u6C5F\u5E76\u6D41\u201D\uFF0C\u662F\u7B2C\u4E00\u3001\u4E8C\u7EA7\u9636\u68AF\u5206\u754C\u7684\u7EC4\u6210\u90E8\u5206\u3002"],\u79E6\u5CAD:["\u5C71\u8109","\u4E1C\u897F\u8D70\u5411\uFF0C\u662F\u6211\u56FD\u5357\u65B9\u4E0E\u5317\u65B9\u91CD\u8981\u7684\u5730\u7406\u5206\u754C\u7EBF\uFF0C\u4E5F\u662F\u957F\u6C5F\u4E0E\u9EC4\u6CB3\u6C34\u7CFB\u7684\u5206\u6C34\u5CAD\u3002"],\u5927\u5174\u5B89\u5CAD:["\u5C71\u8109","\u4E1C\u5317\u2014\u897F\u5357\u8D70\u5411\uFF0C\u662F\u7B2C\u4E8C\u3001\u4E09\u7EA7\u9636\u68AF\u7684\u5206\u754C\uFF0C\u4E5F\u662F\u5185\u8499\u53E4\u9AD8\u539F\u4E0E\u4E1C\u5317\u5E73\u539F\u7684\u5206\u754C\u3002"],\u592A\u884C\u5C71:["\u5C71\u8109","\u4E1C\u5317\u2014\u897F\u5357\u8D70\u5411\uFF0C\u662F\u7B2C\u4E8C\u3001\u4E09\u7EA7\u9636\u68AF\u7684\u5206\u754C\uFF0C\u4E5F\u662F\u9EC4\u571F\u9AD8\u539F\u4E0E\u534E\u5317\u5E73\u539F\u7684\u5206\u754C\u3002"],\u5DEB\u5C71:["\u5C71\u8109","\u957F\u6C5F\u5207\u7A7F\u5DEB\u5C71\u5F62\u6210\u5DEB\u5CE1\uFF0C\u662F\u7B2C\u4E8C\u3001\u4E09\u7EA7\u9636\u68AF\u5206\u754C\u7684\u7EC4\u6210\u90E8\u5206\uFF0C\u4E5F\u662F\u56DB\u5DDD\u76C6\u5730\u4E1C\u7F18\u7684\u5C4F\u969C\u3002"],\u96EA\u5CF0\u5C71:["\u5C71\u8109","\u4F4D\u4E8E\u6E56\u5357\u4E2D\u897F\u90E8\uFF0C\u4E1C\u5317\u2014\u897F\u5357\u8D70\u5411\uFF0C\u662F\u7B2C\u4E8C\u3001\u4E09\u7EA7\u9636\u68AF\u5206\u754C\u7684\u7EC4\u6210\u90E8\u5206\u3002"],\u6B66\u5937\u5C71:["\u5C71\u8109","\u4F4D\u4E8E\u798F\u5EFA\u4E0E\u6C5F\u897F\u4EA4\u754C\uFF0C\u4E1C\u5317\u2014\u897F\u5357\u8D70\u5411\u3002"],\u5357\u5CAD:["\u5C71\u8109","\u4E1C\u897F\u8D70\u5411\uFF0C\u662F\u957F\u6C5F\u6C34\u7CFB\u4E0E\u73E0\u6C5F\u6C34\u7CFB\u7684\u5206\u6C34\u5CAD\u3002"],\u9634\u5C71:["\u5C71\u8109","\u4E1C\u897F\u8D70\u5411\uFF0C\u4F4D\u4E8E\u5185\u8499\u53E4\u9AD8\u539F\u5357\u7F18\u3002"],\u8D3A\u5170\u5C71:["\u5C71\u8109","\u4F4D\u4E8E\u5B81\u590F\u4E0E\u5185\u8499\u53E4\u4EA4\u754C\uFF0C\u963B\u6321\u4E86\u817E\u683C\u91CC\u6C99\u6F20\u4E1C\u79FB\uFF0C\u662F\u91CD\u8981\u7684\u81EA\u7136\u5730\u7406\u754C\u7EBF\u3002"],\u957F\u767D\u5C71:["\u5C71\u8109","\u4F4D\u4E8E\u5409\u6797\u4E1C\u5357\u90E8\u4E2D\u671D\u8FB9\u5883\uFF0C\u4E3B\u5CF0\u767D\u5934\u5C71\u7684\u5929\u6C60\u662F\u706B\u5C71\u53E3\u6E56\u3002"],\u53F0\u6E7E\u5C71\u8109:["\u5C71\u8109","\u7EB5\u8D2F\u53F0\u6E7E\u5C9B\u4E1C\u90E8\uFF0C\u4E3B\u5CF0\u7389\u5C71\u6D77\u62D4 3952 m\uFF0C\u662F\u6211\u56FD\u4E1C\u90E8\u6700\u9AD8\u5CF0\u3002"],\u73E0\u7A46\u6717\u739B\u5CF0:["\u5C71\u5CF0","\u4E16\u754C\u6700\u9AD8\u5CF0\uFF0C2020 \u5E74\u6D4B\u5B9A\u9AD8\u7A0B 8848.86 m\uFF0C\u4F4D\u4E8E\u4E2D\u56FD\u4E0E\u5C3C\u6CCA\u5C14\u8FB9\u754C\u3002"],\u4E54\u6208\u91CC\u5CF0:["\u5C71\u5CF0","\u4E16\u754C\u7B2C\u4E8C\u9AD8\u5CF0\uFF0C\u6D77\u62D4 8611 m\uFF0C\u4F4D\u4E8E\u5580\u5587\u6606\u4ED1\u5C71\u8109\u3002"],\u827E\u4E01\u6E56:["\u6D3C\u5730","\u4F4D\u4E8E\u5410\u9C81\u756A\u76C6\u5730\uFF0C\u6E56\u9762\u7EA6 \u2212154 m\uFF0C\u662F\u6211\u56FD\u9646\u5730\u6700\u4F4E\u70B9\u3002"]},Ho={steps:["\u5730\u52BF","\u6211\u56FD\u5730\u52BF\u897F\u9AD8\u4E1C\u4F4E\uFF0C\u5448\u4E09\u7EA7\u9636\u68AF\u72B6\u5206\u5E03\u3002\u7B2C\u4E00\u7EA7\u9636\u68AF\u4E3A\u9752\u85CF\u9AD8\u539F\uFF0C\u5E73\u5747\u6D77\u62D4 4000 m \u4EE5\u4E0A\uFF1B\u7B2C\u4E8C\u7EA7\u9636\u68AF\u6D77\u62D4\u591A\u5728 1000\u20132000 m\uFF0C\u4EE5\u9AD8\u539F\u3001\u76C6\u5730\u4E3A\u4E3B\uFF1B\u7B2C\u4E09\u7EA7\u9636\u68AF\u6D77\u62D4\u591A\u5728 500 m \u4EE5\u4E0B\uFF0C\u4EE5\u5E73\u539F\u3001\u4E18\u9675\u4E3A\u4E3B\u3002\u4E00\u3001\u4E8C\u7EA7\u5206\u754C\uFF1A\u6606\u4ED1\u5C71\u2014\u7941\u8FDE\u5C71\u2014\u6A2A\u65AD\u5C71\uFF1B\u4E8C\u3001\u4E09\u7EA7\u5206\u754C\uFF1A\u5927\u5174\u5B89\u5CAD\u2014\u592A\u884C\u5C71\u2014\u5DEB\u5C71\u2014\u96EA\u5CF0\u5C71\u3002"],qinhuai:["\u5206\u754C\u7EBF","\u6211\u56FD\u5357\u65B9\u4E0E\u5317\u65B9\u7684\u5730\u7406\u5206\u754C\u7EBF\uFF0C\u5927\u81F4\u4E0E 1 \u6708 0 \u2103 \u7B49\u6E29\u7EBF\u3001800 mm \u5E74\u7B49\u964D\u6C34\u91CF\u7EBF\u4E00\u81F4\uFF0C\u4E5F\u662F\u4E9A\u70ED\u5E26\u4E0E\u6696\u6E29\u5E26\u3001\u6E7F\u6DA6\u533A\u4E0E\u534A\u6E7F\u6DA6\u533A\u7684\u5206\u754C\u3002"],hu:["\u4EBA\u53E3\u5730\u7406","1935 \u5E74\u5730\u7406\u5B66\u5BB6\u80E1\u7115\u5EB8\u63D0\u51FA\u7684\u9ED1\u6CB3\u2014\u817E\u51B2\u7EBF\u3002\u5F53\u65F6\u6B64\u7EBF\u4E1C\u5357\u7EA6 36% \u7684\u56FD\u571F\u5C45\u4F4F\u7740\u7EA6 96% \u7684\u4EBA\u53E3\uFF0C\u8FD9\u4E00\u683C\u5C40\u81F3\u4ECA\u57FA\u672C\u7A33\u5B9A\uFF0C\u4E0E\u5730\u5F62\u3001\u964D\u6C34\u7684\u4E1C\u897F\u5DEE\u5F02\u5BC6\u5207\u76F8\u5173\u3002"]},Mi=[];function Qe(i,t,e,n,s,r={}){Mi.push({type:i,name:t,lon:e,lat:n,pri:s,...r})}[["\u9752\u85CF\u9AD8\u539F",86.5,33.4],["\u5185\u8499\u53E4\u9AD8\u539F",111.5,43.3],["\u9EC4\u571F\u9AD8\u539F",108.2,37],["\u4E91\u8D35\u9AD8\u539F",104.6,25.9],["\u5854\u91CC\u6728\u76C6\u5730",83.2,39.6],["\u51C6\u5676\u5C14\u76C6\u5730",86.6,45.4],["\u67F4\u8FBE\u6728\u76C6\u5730",94.6,37.3],["\u56DB\u5DDD\u76C6\u5730",105.6,30.3],["\u4E1C\u5317\u5E73\u539F",124.6,45.2],["\u534E\u5317\u5E73\u539F",116.2,36.4],["\u957F\u6C5F\u4E2D\u4E0B\u6E38\u5E73\u539F",115.8,30.4],["\u4E1C\u5357\u4E18\u9675",115.6,26.4]].forEach(i=>Qe("region",i[0],i[1],i[2],90,{layer:"regions"}));[["\u5410\u9C81\u756A\u76C6\u5730",89.4,42.95],["\u8FBD\u4E1C\u4E18\u9675",122.8,40.45],["\u5C71\u4E1C\u4E18\u9675",118.9,36.1]].forEach(i=>Qe("region",i[0],i[1],i[2],70,{layer:"regions",small:!0}));[["\u559C\u9A6C\u62C9\u96C5\u5C71\u8109",84.8,28.7,82],["\u6606\u4ED1\u5C71\u8109",84.2,36.1,78],["\u5929\u5C71",84.8,42.7,78],["\u963F\u5C14\u6CF0\u5C71",88.6,47.6,74],["\u7941\u8FDE\u5C71",98.6,38.6,76],["\u5510\u53E4\u62C9\u5C71",91.8,32.9,70],["\u5188\u5E95\u65AF\u5C71",82.8,31.2,66],["\u5580\u5587\u6606\u4ED1\u5C71",77,35.6,64],["\u6A2A\u65AD\u5C71\u8109",99.4,29,76],["\u79E6\u5CAD",108,33.8,80],["\u5927\u5DF4\u5C71",108.6,32.2,62],["\u5927\u5174\u5B89\u5CAD",121.3,48.8,76],["\u5C0F\u5174\u5B89\u5CAD",128.6,48.4,66],["\u957F\u767D\u5C71",128,42.1,68],["\u592A\u884C\u5C71",113.6,37.1,76],["\u5DEB\u5C71",110.1,31.1,68],["\u96EA\u5CF0\u5C71",110.6,27.3,66],["\u6B66\u5937\u5C71",117.6,27.3,66],["\u5357\u5CAD",112.6,25.2,70],["\u9634\u5C71",110,41.3,66],["\u8D3A\u5170\u5C71",106,38.8,62],["\u53F0\u6E7E\u5C71\u8109",121.05,23.6,64]].forEach(i=>Qe("mtn",i[0],i[1],i[2],i[3],{layer:"mountains"}));Qe("peak","\u73E0\u7A46\u6717\u739B\u5CF0",86.925,27.988,99,{layer:"mountains",val:"8848.86"});Qe("peak","\u4E54\u6208\u91CC\u5CF0",76.513,35.881,72,{layer:"mountains",val:"8611"});Qe("peak","\u827E\u4E01\u6E56",89.3,42.63,60,{layer:"mountains",val:"\u2212154",low:!0});[["\u6E24\u6D77",119.8,38.9,86],["\u9EC4\u6D77",123.6,35.3,86],["\u4E1C\u6D77",125.3,29.6,86],["\u5357\u6D77",114.8,15.5,86],["\u592A\u5E73\u6D0B",132.5,24.5,80]].forEach(i=>Qe("sea",i[0],i[1],i[2],i[3],{layer:"seas"}));Qe("sea","\u53F0\u6E7E\u6D77\u5CE1",119.6,24.4,64,{layer:"seas",small:!0});[["\u957F\u6C5F",112.3,30.25],["\u9EC4\u6CB3",110.55,36.6],["\u73E0\u6C5F",112.6,23.2],["\u9ED1\u9F99\u6C5F",124.8,53.1],["\u96C5\u9C81\u85CF\u5E03\u6C5F",88.8,29.15],["\u6F9C\u6CA7\u6C5F",100.7,22.3],["\u6012\u6C5F",98.85,26],["\u91D1\u6C99\u6C5F",101.8,26.4],["\u5854\u91CC\u6728\u6CB3",84.8,41.05],["\u6DEE\u6CB3",116.6,32.4],["\u677E\u82B1\u6C5F",129.2,46.5],["\u8FBD\u6CB3",122.6,42.2]].forEach(i=>Qe("river",i[0],i[1],i[2],i[0]==="\u957F\u6C5F"||i[0]==="\u9EC4\u6CB3"?72:55,{layer:"rivers"}));[["\u9752\u6D77\u6E56",100.2,36.9],["\u9131\u9633\u6E56",116.3,29.05],["\u6D1E\u5EAD\u6E56",112.9,29.25],["\u592A\u6E56",120.2,31.2],["\u7EB3\u6728\u9519",90.6,30.72],["\u547C\u4F26\u6E56",117.4,48.95],["\u6D2A\u6CFD\u6E56",118.6,33.3]].forEach(i=>Qe("lake",i[0],i[1],i[2],45,{layer:"rivers"}));[["\u5317\u4EAC",116.4,39.9],["\u5929\u6D25",117.2,39.13],["\u77F3\u5BB6\u5E84",114.51,38.04],["\u592A\u539F",112.55,37.87],["\u547C\u548C\u6D69\u7279",111.75,40.84],["\u6C88\u9633",123.43,41.8],["\u957F\u6625",125.32,43.82],["\u54C8\u5C14\u6EE8",126.53,45.8],["\u4E0A\u6D77",121.47,31.23],["\u5357\u4EAC",118.8,32.06],["\u676D\u5DDE",120.16,30.27],["\u5408\u80A5",117.23,31.82],["\u798F\u5DDE",119.3,26.08],["\u5357\u660C",115.86,28.68],["\u6D4E\u5357",117.12,36.65],["\u90D1\u5DDE",113.63,34.75],["\u6B66\u6C49",114.31,30.59],["\u957F\u6C99",112.94,28.23],["\u5E7F\u5DDE",113.26,23.13],["\u5357\u5B81",108.37,22.82],["\u6D77\u53E3",110.35,20.02],["\u91CD\u5E86",106.55,29.56],["\u6210\u90FD",104.07,30.57],["\u8D35\u9633",106.63,26.65],["\u6606\u660E",102.83,24.88],["\u62C9\u8428",91.13,29.65],["\u897F\u5B89",108.94,34.34],["\u5170\u5DDE",103.83,36.06],["\u897F\u5B81",101.78,36.62],["\u94F6\u5DDD",106.23,38.49],["\u4E4C\u9C81\u6728\u9F50",87.62,43.83],["\u53F0\u5317",121.56,25.04],["\u9999\u6E2F",114.17,22.32],["\u6FB3\u95E8",113.54,22.19]].forEach(i=>Qe("city",i[0],i[1],i[2],i[0]==="\u5317\u4EAC"?88:50,{layer:"cities",cap:i[0]==="\u5317\u4EAC"}));Qe("tag","\u7B2C\u4E00\u7EA7\u9636\u68AF",91.5,35.4,97,{layer:"steps",color:"#D9531E"});Qe("tag","\u7B2C\u4E8C\u7EA7\u9636\u68AF",102.2,40.6,97,{layer:"steps",color:"#D9531E"});Qe("tag","\u7B2C\u4E09\u7EA7\u9636\u68AF",117.8,34.2,97,{layer:"steps",color:"#D9531E"});Qe("tag","\u79E6\u5CAD\u2014\u6DEE\u6CB3\u7EBF",112.3,32.75,96,{layer:"qinhuai",color:"#16875A"});Qe("tag","\u80E1\u7115\u5EB8\u7EBF",118.8,42.7,96,{layer:"hu",color:"#6A3FB5"});async function Bg(){let i=await Og(Nn.mask),t=document.createElement("canvas");t.width=i.width,t.height=i.height;let e=t.getContext("2d",{willReadFrequently:!0});e.drawImage(i,0,0);let n=e.getImageData(0,0,t.width,t.height).data,s=t.width,r=t.height,o=s/(Vo-ri);function a(y,R){let U=Math.floor((y-ri)*o),B=Math.floor((Go-R)*o);if(U<0||B<0||U>=s||B>=r)return null;let L=(B*s+U)*4;return[n[L],n[L+1],n[L+2]]}let l=new Uint8Array(En);for(let y=0;y<je;y++)for(let R=0;R<oe;R++){let U=a(ri+R*$s,Gi+y*Js)||[0,0,0];l[y*oe+R]=U[2]<128?1:0}let c=Bt("app"),h=new Ys({antialias:!0,alpha:!0,powerPreference:"high-performance"});h.setPixelRatio(Math.min(devicePixelRatio||1,2)),h.setClearColor(0,0),h.domElement.className="gl",h.domElement.setAttribute("aria-label","\u4E2D\u56FD\u4E09\u7EF4\u5730\u5F62\u56FE\uFF0C\u53EF\u62D6\u52A8\u65CB\u8F6C\u4E0E\u7F29\u653E"),c.insertBefore(h.domElement,c.firstChild);let d=h.domElement,f=new Zr,m=Math.max(1,c.clientWidth),_=Math.max(1,c.clientHeight),x=new rn(35,1,.05,2e3),p=new oa(x,d);p.enableDamping=!0,p.dampingFactor=.085,p.screenSpacePanning=!1,p.maxPolarAngle=1.48,p.minDistance=.8,p.maxDistance=230,p.zoomToCursor=!0,p.autoRotateSpeed=.55,p.rotateSpeed=.7;let u=new Float32Array(En),w=new Float32Array(En),v=new Float32Array(En*3),P=new Float32Array(En*3),O=new Float32Array(En*2),I=new Float32Array(En),T=new Float32Array(En),j=new Uint8Array(En),S=new Int32Array(En);for(let y=0;y<je;y++)for(let R=0;R<oe;R++){let U=y*oe+R,[B,L]=Vi(ri+R*$s,Gi+y*Js);u[U]=B,w[U]=L,v[U*3]=B,v[U*3+2]=L,O[U*2]=R/(oe-1),O[U*2+1]=y/(je-1)}let E=new Uint32Array((oe-1)*(je-1)*6),W=0;for(let y=0;y<je-1;y++)for(let R=0;R<oe-1;R++){let U=y*oe+R,B=U+1,L=U+oe,$=L+1;E[W++]=U,E[W++]=B,E[W++]=L,E[W++]=B,E[W++]=$,E[W++]=L}let tt=new Dn,mt=new De(v,3),D=new De(P,3),z=new De(I,1);mt.setUsage(na),D.setUsage(na),z.setUsage(na),tt.setAttribute("position",mt),tt.setAttribute("normal",D),tt.setAttribute("uv",new De(O,2)),tt.setAttribute("aH",new De(vi,1)),tt.setAttribute("aWet",z),tt.setIndex(new De(E,1));let Z=new dn(i);Z.minFilter=Ke,Z.magFilter=Ke,Z.generateMipmaps=!1,Z.needsUpdate=!0;let et=null;function J(){let y=new Uint8Array(da*4);for(let B=0;B<da;B++){let L=zo(Bo+(B+.5)/da*(Kc-Bo));y[B*4]=L[0],y[B*4+1]=L[1],y[B*4+2]=L[2],y[B*4+3]=255}let R=new $r(y,da,1,_n),U=Ts[ae.scheme].discrete;R.minFilter=R.magFilter=U?Ne:Ke,R.needsUpdate=!0,et&&et.dispose(),et=R,Y&&(Y.uniforms.uLut.value=R)}let Y=null;J();let st=315*Pe,ot=42*Pe;Y=new yn({uniforms:{uLut:{value:et},uMask:{value:Z},uLutMin:{value:Bo},uLutMax:{value:Kc},uSea:{value:0},uSeaMode:{value:0},uContour:{value:0},uDim:{value:1},uShade:{value:ae.shade},uLight:{value:new N(Math.sin(st)*Math.cos(ot),Math.sin(ot),-Math.cos(st)*Math.cos(ot)).normalize()},uDimTint:{value:Ks("#EEF1ED")},uDimMix:{value:.58},uShallow:{value:Ks(Xo)},uDeep:{value:Ks(qo)},uLake:{value:Ks(jc)}},vertexShader:`
      attribute float aH; attribute float aWet;
      varying float vH; varying float vWet; varying vec3 vN; varying vec2 vUv;
      void main(){ vH = aH; vWet = aWet; vN = normal; vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform sampler2D uLut; uniform sampler2D uMask;
      uniform float uLutMin, uLutMax, uSea, uSeaMode, uContour, uDim, uShade, uDimMix;
      uniform vec3 uLight, uDimTint, uShallow, uDeep, uLake;
      varying float vH; varying float vWet; varying vec3 vN; varying vec2 vUv;
      void main(){
        vec3 m = texture2D(uMask, vUv).rgb;
        float china = step(0.0019, m.r);
        float landM = smoothstep(0.35, 0.65, m.b);
        float wetS = smoothstep(0.3, 0.7, vWet);
        float water = uSeaMode < 0.5 ? 1.0 - landM : (uSeaMode < 1.5 ? max(wetS, 1.0 - landM) : wetS);
        float h = vH;
        float t = clamp((h - uLutMin) / (uLutMax - uLutMin), 0.0, 1.0);
        vec3 landCol = texture2D(uLut, vec2(t, 0.5)).rgb;
        landCol = mix(landCol, uLake, smoothstep(0.3, 0.7, m.g));
        float lum = dot(landCol, vec3(0.299, 0.587, 0.114));
        landCol = mix(landCol, mix(vec3(lum), uDimTint, uDimMix), uDim * (1.0 - china));
        float depth = clamp((uSea - h) / 6500.0, 0.0, 1.0);
        vec3 waterCol = mix(uShallow, uDeep, pow(depth, 0.5));
        vec3 col = mix(landCol, waterCol, water);
        vec3 n = normalize(vN);
        float diff = dot(n, uLight);
        float lit = clamp(0.40 + 0.80 * diff, 0.0, 1.3);
        col *= mix(1.0, lit, uShade * mix(1.0, 0.45, water));
        if (uContour > 0.0) {
          float f = h / uContour;
          float fw = max(fwidth(f), 1e-4);
          float dist = abs(fract(f + 0.5) - 0.5) / fw;
          float a = 1.0 - smoothstep(0.45, 1.3, dist);
          float major = 1.0 - step(0.5, abs(mod(floor(f + 0.5), 5.0)));
          a *= (1.0 - water) * step(1.0, h) * mix(0.5, 0.85, major);
          col = mix(col, col * 0.32, a);
        }
        gl_FragColor = vec4(col, 1.0);
      }`,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:2}),Y.extensions={derivatives:!0};let xt=new hn(tt,Y);xt.frustumCulled=!1,f.add(xt);function q(y,R){let U=(y-ri)/$s,B=(R-Gi)/Js;if(!(U>=0&&B>=0&&U<=oe-1&&B<=je-1))return NaN;let L=Math.min(Math.floor(U),oe-2),$=Math.min(Math.floor(B),je-2),pt=U-L,St=B-$,yt=$*oe+L,se=yt+1,qt=yt+oe,le=qt+1;return pt+St<=1?T[yt]+(T[se]-T[yt])*pt+(T[qt]-T[yt])*St:T[le]+(T[qt]-T[le])*(1-pt)+(T[se]-T[le])*(1-St)}function it(y,R){let U=(y-ri)/$s,B=(R-Gi)/Js;if(!(U>=0&&B>=0&&U<=oe-1&&B<=je-1))return NaN;let L=Math.min(Math.floor(U),oe-2),$=Math.min(Math.floor(B),je-2),pt=U-L,St=B-$,yt=$*oe+L;return(vi[yt]*(1-pt)+vi[yt+1]*pt)*(1-St)+(vi[yt+oe]*(1-pt)+vi[yt+oe+1]*pt)*St}function _t(y,R){let U=Math.round((y-ri)/$s),B=Math.round((R-Gi)/Js);return U<0||B<0||U>=oe||B>=je?!1:j[B*oe+U]===1}let It=()=>ae.sea*$c*ae.exag,Rt=()=>.008+42e-5*ae.exag;function kt(y){j.fill(0);let R=0,U=0,B=$=>{!j[$]&&vi[$]<y&&l[$]&&(j[$]=1,S[U++]=$)};for(let $=0;$<oe;$++)B($),B((je-1)*oe+$);for(let $=0;$<je;$++)B($*oe),B($*oe+oe-1);let L=$=>{!j[$]&&vi[$]<y&&(j[$]=1,S[U++]=$)};for(;R<U;){let $=S[R++],pt=$%oe;pt>0&&L($-1),pt<oe-1&&L($+1),$>=oe&&L($-oe),$<En-oe&&L($+oe)}}let Gt=0,Ot=1,Ut=!0;function k(){let y=$c*ae.exag,R=!ae.bathy,U=ae.sea,B=1/0,L=-1/0;for(let pt=0;pt<En;pt++){let yt=(R&&j[pt]?U:vi[pt])*y;T[pt]=yt,v[pt*3+1]=yt,I[pt]=j[pt],yt<B&&(B=yt),yt>L&&(L=yt)}for(let pt=0;pt<je;pt++)for(let St=0;St<oe;St++){let yt=pt*oe+St,se=St>0?yt-1:yt,qt=St<oe-1?yt+1:yt,le=pt>0?yt-oe:yt,fe=pt<je-1?yt+oe:yt,pn=u[qt]-u[se],de=T[qt]-T[se],pe=w[qt]-w[se],he=u[fe]-u[le],Ue=T[fe]-T[le],Ce=w[fe]-w[le],Ve=de*Ce-pe*Ue,wn=pe*he-pn*Ce,Yi=pn*Ue-de*he,ln=Math.hypot(Ve,wn,Yi)||1;wn<0&&(Ve=-Ve,wn=-wn,Yi=-Yi),P[yt*3]=Ve/ln,P[yt*3+1]=wn/ln,P[yt*3+2]=Yi/ln}Gt=B,Ot=L,mt.needsUpdate=!0,D.needsUpdate=!0,z.needsUpdate=!0;let $=Y.uniforms;$.uSea.value=U,$.uSeaMode.value=Math.abs(U)<.5?0:U>0?1:2,ye.forEach(pt=>pt.update()),at(),Ut=!0}let ye=[];function Ct(y){return y.map(R=>{let U=[],B=R[0],L=R[1];U.push([B/100,L/100]);for(let $=2;$<R.length;$+=2)B+=R[$],L+=R[$+1],U.push([B/100,L/100]);return U})}function Ht(y,R){let U=[y[0]];for(let B=1;B<y.length;B++){let[L,$]=y[B-1],[pt,St]=y[B],yt=Math.max(1,Math.ceil(Math.hypot(pt-L,St-$)/R));for(let se=1;se<=yt;se++)U.push([L+(pt-L)*se/yt,$+(St-$)*se/yt])}return U}class vt{constructor(R,U){let B=[];for(let $ of R){let pt=Ht($,U.step||.06);for(let St=1;St<pt.length;St++)B.push(pt[St-1][0],pt[St-1][1],pt[St][0],pt[St][1])}this.ll=new Float32Array(B);let L=B.length/4;this.pos=new Float32Array(L*6);for(let $=0;$<L;$++){let pt=Vi(B[$*4],B[$*4+1]),St=Vi(B[$*4+2],B[$*4+3]);this.pos[$*6]=pt[0],this.pos[$*6+2]=pt[1],this.pos[$*6+3]=St[0],this.pos[$*6+5]=St[1]}this.geom=new ws,this.geom.setPositions(this.pos),this.mat=new As({color:U.color,linewidth:U.width,transparent:!0,opacity:U.opacity??1,depthWrite:!1,dashed:!!U.dashed,dashSize:U.dash||.35,gapSize:U.gap||.22}),this.mat.resolution.set(m,_),this.obj=new ua(this.geom,this.mat),this.obj.frustumCulled=!1,this.obj.renderOrder=U.order||1,this.k=U.lift??1,this.dashed=!!U.dashed,this.fresh=!0,this.layer=U.layer,f.add(this.obj),ye.push(this),this.update()}update(){let R=Rt()*this.k,U=this.pos,B=this.ll,L=U.length/6;for(let $=0;$<L;$++){let pt=q(B[$*4],B[$*4+1]),St=q(B[$*4+2],B[$*4+3]);U[$*6+1]=(pt===pt?pt:0)+R,U[$*6+4]=(St===St?St:0)+R}this.geom.attributes.instanceStart.data.needsUpdate=!0,this.dashed&&this.fresh&&(this.obj.computeLineDistances(),this.fresh=!1)}dispose(){f.remove(this.obj),this.geom.dispose(),this.mat.dispose(),ye.splice(ye.indexOf(this),1)}}let ue=Nn.lines;new vt(Ct(ue.nbr),{color:"#5B6169",width:1.1,opacity:.7,layer:"admin",order:2}),new vt(Ct(ue.prov),{color:"#6B5579",width:1,opacity:.8,layer:"admin",order:2}),new vt(Ct(ue.china),{color:"#7B2143",width:2.3,layer:"admin",order:3}),new vt(Ct(ue.dash),{color:"#7B2143",width:2.3,layer:"admin",order:3,step:.03}),new vt(Ct(ue.r3),{color:"#4A90C8",width:.9,opacity:.75,layer:"rivers",order:1}),new vt(Ct(ue.r2),{color:"#2F7FBF",width:1.3,opacity:.9,layer:"rivers",order:1}),new vt(Ct(ue.r1),{color:"#1D6AAE",width:2,layer:"rivers",order:1}),new vt([Qc,th],{color:"#E0561F",width:3.2,layer:"steps",order:4,dashed:!0,dash:.42,gap:.2,lift:1.4}),new vt([eh],{color:"#16875A",width:3,layer:"qinhuai",order:4,dashed:!0,dash:.36,gap:.2,lift:1.4}),new vt([nh],{color:"#6A3FB5",width:2.8,layer:"hu",order:4,dashed:!0,dash:.5,gap:.26,lift:1.4,step:.05});function Wt(){ye.forEach(y=>{y.layer&&(y.obj.visible=!!ae.layers[y.layer])}),Mi.forEach(y=>{y.layer&&(y.on=!!ae.layers[y.layer])}),Ut=!0}let b=Bt("labels");for(let y of Mi){let R=document.createElement("div");if(R.className="lbl t-"+y.type+(y.small?" s":"")+(y.cap?" cap":"")+(y.low?" low":""),y.type==="peak"?R.innerHTML=`<i></i><span>${y.name}</span><em>${y.val}</em>`:y.type==="city"?R.innerHTML=`<i></i><span>${y.name}</span>`:R.textContent=y.name,y.type==="tag"&&(R.style.background=y.color),ih[y.name]){R.classList.add("click"),R.tabIndex=0,R.setAttribute("role","button");let U=()=>ke(y);R.addEventListener("click",U),R.addEventListener("keydown",B=>{(B.key==="Enter"||B.key===" ")&&(B.preventDefault(),U())})}y.type==="tag"&&Ho[y.layer]&&(R.classList.add("click"),R.addEventListener("click",()=>ge(y.layer))),b.appendChild(R),y.el=R,y.on=!0,y.shown=!1,y.xz=Vi(y.lon,y.lat),y.anchorLeft=y.type==="peak"||y.type==="city"}let g={};for(let y of["A","B","cur"]){let R=document.createElement("div");R.className="lbl t-pin"+(y==="cur"?" cur":""),R.textContent=y==="cur"?"":y,b.appendChild(R),g[y]={el:R,ll:null,w:0,h:0}}Mi.sort((y,R)=>R.pri-y.pri);function V(){for(let y of Mi)y.w=y.el.offsetWidth,y.h=y.el.offsetHeight;for(let y in g)g[y].w=g[y].el.offsetWidth,g[y].h=g[y].el.offsetHeight;Ut=!0}function at(){let y=It();for(let R of Mi){let U=q(R.lon,R.lat);U!==U&&(U=0),(R.type==="sea"||R.type==="lake"||R.type==="river")&&(U=Math.max(U,ae.bathy?y:U)),R.y=Math.max(U,y)+Rt()*2+.01}}let Q=new N;function rt(y,R,U){y.style.transform=`translate(${R.toFixed(1)}px,${U.toFixed(1)}px)`}function Lt(){let y=[];for(let R of Mi){let U=R.on;U&&(Q.set(R.xz[0],R.y,R.xz[1]).project(x),U=Q.z<1&&Q.z>-1);let B=0,L=0;if(U){let $=(Q.x*.5+.5)*m,pt=(-Q.y*.5+.5)*_;if(B=R.anchorLeft?$-5:$-R.w/2,L=pt-R.h/2,U=B>-R.w&&L>-R.h&&B<m&&L<_,U){let St=[B-3,L-2,B+R.w+3,L+R.h+2];for(let yt of y)if(St[0]<yt[2]&&St[2]>yt[0]&&St[1]<yt[3]&&St[3]>yt[1]){U=!1;break}U&&y.push(St)}}U?(rt(R.el,B,L),R.shown||(R.el.classList.add("show"),R.shown=!0)):R.shown&&(R.el.classList.remove("show"),R.shown=!1)}for(let R in g){let U=g[R],B=!!U.ll;if(B){let[L,$]=Vi(U.ll[0],U.ll[1]),pt=q(U.ll[0],U.ll[1]);pt!==pt&&(pt=0),Q.set(L,pt+Rt()*2,$).project(x),B=Q.z<1&&Q.z>-1,B&&rt(U.el,(Q.x*.5+.5)*m-U.w/2,(-Q.y*.5+.5)*_-U.h/2)}U.el.classList.toggle("show",B)}}let gt=Bt("panel"),bt=Bt("fab"),Dt=()=>c.clientWidth<=760;function Yt(){return!Dt()&&!gt.hidden?gt.offsetWidth+16:0}function nt(){m=Math.max(1,c.clientWidth),_=Math.max(1,c.clientHeight),h.setSize(m,_,!1),ye.forEach(R=>R.mat.resolution.set(m,_)),x.aspect=m/_;let y=Yt();y?x.setViewOffset(m,_,y/2,0,m,_):x.clearViewOffset(),x.updateProjectionMatrix(),Ut=!0,Bt("profile").hidden||H()}let ee=[{name:"\u5168\u56FD\u603B\u89C8",lon:104.8,lat:34.2,w:56,polar:46,az:0},{name:"\u6B63\u5C04\u4FEF\u89C6",lon:107,lat:30.5,w:62,h:58,polar:.2,az:0},{name:"\u9752\u85CF\u9AD8\u539F",lon:88,lat:32.2,w:27,polar:58,az:-10},{name:"\u5854\u91CC\u6728 \xB7 \u5929\u5C71",lon:84,lat:41.2,w:22,polar:56,az:6},{name:"\u56DB\u5DDD\u76C6\u5730",lon:105.6,lat:30.2,w:10,polar:52,az:16},{name:"\u9EC4\u571F\u9AD8\u539F",lon:108.5,lat:36.8,w:11,polar:52,az:-6},{name:"\u534E\u5317 \xB7 \u592A\u884C\u5C71",lon:115.2,lat:37.3,w:10,polar:58,az:78},{name:"\u6A2A\u65AD\u5C71\u533A",lon:99.5,lat:27.6,w:8,polar:50,az:-8},{name:"\u53F0\u6E7E\u5C9B",lon:121,lat:23.7,w:5,polar:54,az:62},{name:"\u5357\u6D77",lon:114,lat:12.5,w:26,polar:26,az:0}];function A(y){let R=Math.tan(x.fov*Pe/2),U=Math.max(1,m-Yt())/_;return Math.min(220,Math.max(y.w/2/(R*U),(y.h||y.w*.6)/2/R)*(y.polar>10?.92:1))}let K=null;function ct(y,R=1500){let[U,B]=Vi(y.lon,y.lat),L=q(y.lon,y.lat);L!==L&&(L=0);let $={t:new N(U,Math.max(L,It())*.6,B),r:y.d||A(y),phi:Math.max(.004,y.polar*Pe),th:(y.az??0)*Pe},pt=x.position.clone().sub(p.target),St=new kn().setFromVector3(pt),yt={t:p.target.clone(),r:St.radius,phi:St.phi,th:St.theta},se=$.th-yt.th;se=Math.atan2(Math.sin(se),Math.cos(se));let qt=matchMedia("(prefers-reduced-motion: reduce)").matches;K={from:yt,to:$,dTh:se,t0:performance.now(),dur:qt?1:R}}function lt(y){if(!K)return!1;let R=Math.min(1,(y-K.t0)/K.dur),U=R<.5?4*R*R*R:1-Math.pow(-2*R+2,3)/2,{from:B,to:L}=K;p.target.lerpVectors(B.t,L.t,U);let $=new kn(B.r*Math.pow(L.r/B.r,U),B.phi+(L.phi-B.phi)*U,B.th+K.dTh*U);return x.position.setFromSpherical($).add(p.target),x.lookAt(p.target),R>=1&&(K=null),!0}p.addEventListener("start",()=>{K=null});let Pt=new jr,Kt=new Zt;function ne(y,R,U){let B=y.x+R.x*U,L=y.z+R.z*U,$=Jc(B,L);return $?$[0]<ri||$[0]>Vo||$[1]<Gi||$[1]>Go?NaN:y.y+R.y*U-q($[0],$[1]):NaN}function Jt(y,R){let U=d.getBoundingClientRect();Kt.set((y-U.left)/U.width*2-1,-((R-U.top)/U.height)*2+1),Pt.setFromCamera(Kt,x);let B=Pt.ray.origin,L=Pt.ray.direction,$=Ot+.02,pt=Gt-.02,St,yt;if(Math.abs(L.y)<1e-9){if(B.y>$||B.y<pt)return null;St=0,yt=500}else{let le=($-B.y)/L.y,fe=(pt-B.y)/L.y;if(St=Math.max(0,Math.min(le,fe)),yt=Math.max(le,fe),yt<=0)return null}let se=.035/Math.max(Math.hypot(L.x,L.z),.001);se=Math.max(se,(yt-St)/4e3),se=Math.min(se,Math.max((yt-St)/6,1e-4));let qt=null;for(let le=St;;le+=se){let fe=Math.min(le,yt),pn=ne(B,L,fe);if(pn!==pn)qt=null;else if(pn<=0){let de=qt===null?fe:qt,pe=fe;for(let Ue=0;Ue<16&&qt!==null;Ue++){let Ce=(de+pe)/2;ne(B,L,Ce)>0?de=Ce:pe=Ce}let he=Jc(B.x+L.x*pe,B.z+L.z*pe);return he?{lon:he[0],lat:he[1]}:null}else qt=fe;if(fe>=yt)break}return null}let ft=Bt("rLon"),C=Bt("rLat"),ht=Bt("rEle"),ut=Bt("rReg");function Ft(y,R){let U=a(y,R);return U?U[0]>0?Ng[Nn.prov[U[0]-1]]||Nn.prov[U[0]-1]:U[1]>127?"\u6E56\u6CCA\uFF08\u4E2D\u56FD\u5883\u5916\uFF09":U[2]>127?"\u4E2D\u56FD\u5883\u5916":"\u6D77\u57DF":"\u2014"}function At(y){return y.toFixed(2)+"\xB0E"}function ie(y){return y>=0?y.toFixed(2)+"\xB0N":(-y).toFixed(2)+"\xB0S"}function ce(y){if(!y)return;let R=it(y.lon,y.lat);ft.textContent=At(y.lon),C.textContent=ie(y.lat);let U=_t(y.lon,y.lat)||Math.abs(ae.sea)<.5&&(a(y.lon,y.lat)||[0,0,255])[2]<128;ht.textContent=Math.round(R).toLocaleString("zh-CN")+" m"+(U&&R<ae.sea?"\uFF08\u6C34\u4E0B\uFF09":""),ut.textContent=Ft(y.lon,y.lat)}let Ae=Bt("card");function ke(y){let R=ih[y.name];Bt("cardKind").textContent=R[0],Bt("cardTitle").textContent=y.name,Bt("cardText").textContent=R[1],Bt("cardCoord").textContent=`${At(y.lon)}  ${ie(y.lat)}  \xB7  \u7F51\u683C\u9AD8\u7A0B\u7EA6 ${Math.round(it(y.lon,y.lat))} m`,Ae.hidden=!1;let U=y.type==="peak"?3.2:y.type==="mtn"?9:y.name==="\u9752\u85CF\u9AD8\u539F"?26:y.name==="\u5185\u8499\u53E4\u9AD8\u539F"?18:13,B=new kn().setFromVector3(x.position.clone().sub(p.target));ct({lon:y.lon,lat:y.lat,w:U,polar:Math.min(Math.max(B.phi/Pe,38),62),az:B.theta/Pe})}function ge(y){let R=Ho[y];if(!R)return;let U={steps:"\u5730\u52BF\u7684\u4E09\u7EA7\u9636\u68AF",qinhuai:"\u79E6\u5CAD\u2014\u6DEE\u6CB3\u7EBF",hu:"\u80E1\u7115\u5EB8\u7EBF"}[y];Bt("cardKind").textContent=R[0],Bt("cardTitle").textContent=U,Bt("cardText").textContent=R[1],Bt("cardCoord").textContent="\u5206\u754C\u7EBF\u4F4D\u7F6E\u4E3A\u6559\u5B66\u793A\u610F",Ae.hidden=!1}Bt("cardClose").addEventListener("click",()=>{Ae.hidden=!0});let Et={mode:!1,A:null,B:null,line:null,S:null,hover:-1},on=Bt("hint"),js=on.textContent,Rs=Bt("btnPick");function On(y,R){if(Et.line&&Et.line.dispose(),!y||!R){Et.line=null,Ut=!0;return}Et.line=new vt([[y,R]],{color:we("--vermilion"),width:3.4,order:6,lift:1.8,step:.04}),Ut=!0}function ai(y){Et.mode=y,Rs.classList.toggle("on",y),Rs.textContent=y?"\u53D6\u6D88\u70B9\u9009":"\u5728\u5730\u56FE\u4E0A\u70B9\u9009\u4E24\u70B9",on.classList.toggle("pick",y),on.textContent=y?Et.A?"\u5355\u51FB\u5730\u56FE\uFF0C\u9009\u62E9\u7EC8\u70B9 B":"\u5355\u51FB\u5730\u56FE\uFF0C\u9009\u62E9\u8D77\u70B9 A":js,d.style.cursor=y?"crosshair":""}Rs.addEventListener("click",()=>{if(Et.mode){ai(!1),Et.B||(Et.A=null,g.A.ll=null,On(null));return}Et.A=Et.B=null,Et.S=null,g.A.ll=g.B.ll=g.cur.ll=null,On(null),Bt("profile").hidden=!0,c.classList.remove("has-profile"),ai(!0),Dt()&&fn()});let Wi=(y,R)=>{let U=y[1]*Pe,B=R[1]*Pe,L=B-U,$=(R[0]-y[0])*Pe,pt=Math.sin(L/2)**2+Math.cos(U)*Math.cos(B)*Math.sin($/2)**2;return 12742*Math.asin(Math.min(1,Math.sqrt(pt)))};function Qs(y,R,U,B){let L=R[0]-y[0],$=R[1]-y[1],pt=B[0]-U[0],St=B[1]-U[1],yt=L*St-$*pt;if(Math.abs(yt)<1e-12)return null;let se=((U[0]-y[0])*St-(U[1]-y[1])*pt)/yt,qt=((U[0]-y[0])*$-(U[1]-y[1])*L)/yt;return se>=0&&se<=1&&qt>=0&&qt<=1?se:null}function Xi(){let y=Et.A,R=Et.B,U=720,B=[],L=0,$=y;for(let de=0;de<=U;de++){let pe=de/U,he=[y[0]+(R[0]-y[0])*pe,y[1]+(R[1]-y[1])*pe];L+=Wi($,he),$=he,B.push({lon:he[0],lat:he[1],d:L,h:it(he[0],he[1]),wet:_t(he[0],he[1])||Math.abs(ae.sea)<.5&&(a(he[0],he[1])||[0,0,255])[2]<128})}let pt=[],St=(de,pe,he)=>{for(let Ue=1;Ue<de.length;Ue++){let Ce=Qs(y,R,de[Ue-1],de[Ue]);Ce!==null&&pt.push({t:Ce,label:pe,color:he})}};St(Qc,"\u2160 | \u2161 \u7EA7\u9636\u68AF\u754C","#E0561F"),St(th,"\u2161 | \u2162 \u7EA7\u9636\u68AF\u754C","#E0561F"),ae.layers.qinhuai&&St(eh,"\u79E6\u5CAD\u2014\u6DEE\u6CB3\u7EBF","#16875A"),ae.layers.hu&&St(nh,"\u80E1\u7115\u5EB8\u7EBF","#6A3FB5");let yt=[],se=Math.cos((y[1]+R[1])/2*Pe),qt=(R[0]-y[0])*se,le=R[1]-y[1],fe=qt*qt+le*le||1,pn={region:1.7,mtn:.9,sea:2.4,peak:.35,lake:.3};for(let de of Mi){let pe=pn[de.type];if(!pe)continue;let he=(de.lon-y[0])*se,Ue=de.lat-y[1],Ce=(he*qt+Ue*le)/fe;if(Ce<.015||Ce>.985)continue;let Ve=he-qt*Ce,wn=Ue-le*Ce;Math.hypot(Ve,wn)<=pe&&yt.push({t:Ce,name:de.name,pri:de.pri,type:de.type})}yt.sort((de,pe)=>pe.pri-de.pri),Et.S=B,Et.marks=pt,Et.feats=yt,Et.hover=-1,Bt("profile").hidden=!1,c.classList.add("has-profile"),H()}function tr(y,R){let U=y/R,B=Math.pow(10,Math.floor(Math.log10(U))),L=U/B;return(L<1.5?1:L<3.5?2:L<7.5?5:10)*B}let Wn=Bt("profCanvas"),Cs=Bt("profWrap"),M=Bt("profTip"),F=null;function H(){let y=Et.S;if(!y)return;let R=Math.min(devicePixelRatio||1,2),U=Cs.clientWidth,B=Cs.clientHeight;if(!U||!B)return;Wn.width=Math.round(U*R),Wn.height=Math.round(B*R);let L=Wn.getContext("2d");L.setTransform(R,0,0,R,0,0),L.clearRect(0,0,U,B);let $=we("--ink"),pt=we("--ink-2"),St=we("--muted"),yt=we("--rule"),se=we("--panel-solid"),qt=54,le=16,fe=30,pn=24,de=U-qt-le,pe=B-fe-pn,he=y[y.length-1].d||1,Ue=1/0,Ce=-1/0;for(let Tt of y)Tt.h<Ue&&(Ue=Tt.h),Tt.h>Ce&&(Ce=Tt.h);let Ve=tr(Math.max(Ce,0)-Math.min(Ue,0),4),wn=Math.min(Ue,ae.sea),Yi=Math.max(Ce,200,ae.sea),ln=wn<-Ve*.3?Math.floor(wn/Ve)*Ve:Math.min(0,wn)-Ve*.08,oi=Math.ceil(Yi/Ve)*Ve,en=Tt=>qt+Tt/he*de,Ze=Tt=>fe+(oi-Tt)/(oi-ln)*pe;F={X:en,Yp:Ze,mL:qt,gw:de,total:he},L.font=`11px ${we("--f-mono")}`,L.textBaseline="middle",L.strokeStyle=yt,L.lineWidth=1,L.fillStyle=St,L.textAlign="right";for(let Tt=Math.ceil(ln/Ve)*Ve;Tt<=oi+1e-6;Tt+=Ve){let $t=Math.round(Ze(Tt))+.5;L.beginPath(),L.moveTo(qt,$t),L.lineTo(qt+de,$t),L.stroke(),L.fillText((Tt+0).toLocaleString("zh-CN"),qt-7,$t)}let ch=tr(he,Math.max(3,Math.floor(de/110)));L.textAlign="center",L.textBaseline="top";for(let Tt=0;Tt<=he+1e-6;Tt+=ch){let $t=en(Tt);L.fillText(Tt===0?"0":Tt.toLocaleString("zh-CN"),$t,fe+pe+6)}L.textAlign="right",L.fillText("km",qt-7,fe+pe+6),L.textBaseline="middle",L.save(),L.font=`600 10.5px ${we("--f-sans")}`,L.fillStyle=St,L.textAlign="left",L.fillText("\u6D77\u62D4 m",6,14),L.restore();let Is=new Path2D;Is.moveTo(en(0),Ze(ln));for(let Tt of y)Is.lineTo(en(Tt.d),Ze(Tt.h));Is.lineTo(en(he),Ze(ln)),Is.closePath(),L.save(),L.clip(Is);let $o=Ts[ae.scheme];if($o.discrete){let Tt=$o.stops;for(let $t=0;$t<Tt.length;$t++){let cn=$t===0?ln-1e4:Tt[$t][0],li=$t+1<Tt.length?Tt[$t+1][0]:oi+1e4,nr=Ze(Math.min(li,oi+1e4)),fh=Ze(cn);L.fillStyle=Tt[$t][1],L.fillRect(qt,nr,de,fh-nr)}}else{let Tt=L.createLinearGradient(0,Ze(ln),0,Ze(oi));for(let $t=0;$t<=24;$t++){let cn=ln+(oi-ln)*$t/24;Tt.addColorStop($t/24,ko(zo(cn)))}L.fillStyle=Tt,L.fillRect(qt,fe,de,pe)}L.restore();let Ds=Ze(ae.sea),qn=0;for(;qn<y.length;){if(!(y[qn].wet&&y[qn].h<ae.sea)){qn++;continue}let Tt=qn;for(;Tt+1<y.length&&y[Tt+1].wet&&y[Tt+1].h<ae.sea;)Tt++;let $t=new Path2D;$t.moveTo(en(y[qn].d),Ds);for(let li=qn;li<=Tt;li++)$t.lineTo(en(y[li].d),Ze(y[li].h));$t.lineTo(en(y[Tt].d),Ds),$t.closePath();let cn=L.createLinearGradient(0,Ds,0,Ze(ln));cn.addColorStop(0,Xo),cn.addColorStop(1,qo),L.fillStyle=cn,L.fill($t),L.strokeStyle="#2A6FA8",L.lineWidth=1.2,L.beginPath(),L.moveTo(en(y[qn].d),Ds),L.lineTo(en(y[Tt].d),Ds),L.stroke(),qn=Tt+1}L.beginPath(),y.forEach((Tt,$t)=>$t?L.lineTo(en(Tt.d),Ze(Tt.h)):L.moveTo(en(Tt.d),Ze(Tt.h))),L.strokeStyle=$,L.lineWidth=1.4,L.lineJoin="round",L.stroke(),L.font=`600 10.5px ${we("--f-sans")}`,L.textAlign="center";for(let Tt of Et.marks){let $t=en(Tt.t*he);L.save(),L.setLineDash([4,3]),L.strokeStyle=Tt.color,L.lineWidth=1.4,L.beginPath(),L.moveTo($t,fe),L.lineTo($t,fe+pe),L.stroke(),L.restore();let cn=L.measureText(Tt.label).width+10;L.fillStyle=Tt.color,L.fillRect($t-cn/2,fe+pe-20,cn,16),L.fillStyle="#fff",L.fillText(Tt.label,$t,fe+pe-12)}L.font=`700 12px ${we("--f-serif")}`,L.textBaseline="middle";let fa=[];for(let Tt of Et.feats){let $t=en(Tt.t*he),cn=L.measureText(Tt.name).width+8;if($t-cn/2<qt-20||$t+cn/2>U||fa.some(nr=>Math.abs(nr-$t)<(cn+60)/2))continue;fa.push($t);let li=Math.round(Tt.t*(y.length-1));if(L.strokeStyle=St,L.lineWidth=1,L.beginPath(),L.moveTo($t+.5,fe-7),L.lineTo($t+.5,Ze(y[li].h)-3),L.setLineDash([1,2]),L.stroke(),L.setLineDash([]),L.fillStyle=Tt.type==="sea"||Tt.type==="lake"?we("--l-water"):we("--l-land"),L.fillText(Tt.name,$t,fe-15),fa.length>=9)break}if(Et.hover>=0){let Tt=y[Et.hover],$t=en(Tt.d);L.strokeStyle=we("--vermilion"),L.lineWidth=1.2,L.beginPath(),L.moveTo($t+.5,fe),L.lineTo($t+.5,fe+pe),L.stroke(),L.fillStyle=we("--vermilion"),L.beginPath(),L.arc($t,Ze(Tt.h),4,0,7),L.fill(),L.strokeStyle=se,L.lineWidth=1.5,L.stroke()}let hh=he*1e3/de,uh=(oi-ln)/pe,dh=Math.round(hh/uh);Bt("profMeta").textContent=`A ${At(Et.A[0])} ${ie(Et.A[1])} \u2192 B ${At(Et.B[0])} ${ie(Et.B[1])} \xB7 \u5168\u957F ${Math.round(he).toLocaleString("zh-CN")} km \xB7 \u6700\u9AD8 ${Math.round(Ce).toLocaleString("zh-CN")} m \xB7 \u6700\u4F4E ${Math.round(Ue).toLocaleString("zh-CN")} m \xB7 \u56FE\u4E2D\u5782\u76F4\u5938\u5F20\u7EA6 ${dh.toLocaleString("zh-CN")} \u500D`}Wn.addEventListener("pointermove",y=>{if(!Et.S||!F)return;let R=Wn.getBoundingClientRect(),U=y.clientX-R.left,B=(U-F.mL)/F.gw*F.total;if(B<0||B>F.total){Wn.dispatchEvent(new Event("pointerleave"));return}let L=0,$=Et.S,pt=0,St=$.length-1;for(;St-pt>1;){let qt=pt+St>>1;$[qt].d<B?pt=qt:St=qt}L=B-$[pt].d<$[St].d-B?pt:St,Et.hover=L,H();let yt=$[L];M.hidden=!1,M.innerHTML=`${Math.round(yt.d).toLocaleString("zh-CN")} km \xB7 <b>${Math.round(yt.h).toLocaleString("zh-CN")} m</b><br>${At(yt.lon)} ${ie(yt.lat)}`;let se=M.offsetWidth;M.style.left=Math.min(Math.max(U+12,4),Cs.clientWidth-se-4)+"px",g.cur.ll=[yt.lon,yt.lat],Ut=!0}),Wn.addEventListener("pointerleave",()=>{Et.hover=-1,M.hidden=!0,g.cur.ll=null,H(),Ut=!0});function X(){Bt("profile").hidden=!0,c.classList.remove("has-profile"),Et.S=null,Et.A=Et.B=null,g.A.ll=g.B.ll=g.cur.ll=null,On(null),ai(!1)}Bt("profClose").addEventListener("click",X);let G=[{name:"32\xB0N \u6A2A\u7A7F\u4E09\u7EA7\u9636\u68AF",A:[79.6,32],B:[123,32]},{name:"40\xB0N \u4E1C\u897F",A:[75.5,40],B:[124.5,40]},{name:"88\xB0E \u5357\u5317",A:[88,27.4],B:[88,48.8]},{name:"105\xB0E \u5357\u5317",A:[105,22.8],B:[105,42.3]}];function Mt(y,R,U){if(Et.A=y,Et.B=R,g.A.ll=y,g.B.ll=R,On(y,R),ai(!1),Xi(),U){let B=[(y[0]+R[0])/2,(y[1]+R[1])/2],L=Math.hypot((R[0]-y[0])*Math.cos(B[1]*Pe),R[1]-y[1])*1.11,$=Math.abs(R[1]-y[1])>Math.abs(R[0]-y[0]);ct({lon:B[0],lat:B[1]-($?0:1.5),w:L*1.15,polar:56,az:$?70:0})}}let wt=null,Nt=null;d.addEventListener("pointerdown",y=>{wt={x:y.clientX,y:y.clientY}}),d.addEventListener("pointerup",y=>{wt&&Math.hypot(y.clientX-wt.x,y.clientY-wt.y)<6&&y.button===0&&Vt(y),wt=null}),d.addEventListener("pointermove",y=>{Nt=y});function Vt(y){let R=Jt(y.clientX,y.clientY);if(R){if(!Et.mode){ce(R);return}Et.A?Mt(Et.A,[R.lon,R.lat],!1):(Et.A=[R.lon,R.lat],g.A.ll=Et.A,ai(!0),Ut=!0)}}function jt(){if(!Nt)return;let y=Nt;if(Nt=null,wt&&y.buttons)return;let R=Jt(y.clientX,y.clientY);R&&(ce(R),Et.mode&&Et.A&&!Et.B&&On(Et.A,[R.lon,R.lat]))}let zt=Bt("legendCanvas");function Xt(){let y=Math.min(devicePixelRatio||1,2),R=124,U=214;zt.width=R*y,zt.height=U*y,zt.style.width=R+"px",zt.style.height=U+"px";let B=zt.getContext("2d");B.setTransform(y,0,0,y,0,0),B.clearRect(0,0,R,U);let L=[0,200,500,1e3,2e3,3e3,4e3,5e3],$=16,pt=17,St=4,yt=L.length,se=we("--ink-2");B.font=`11px ${we("--f-mono")}`,B.textBaseline="middle",B.fillStyle=se;for(let le=0;le<yt;le++){let fe=St+(yt-1-le)*pt,pn=L[le],de=L[le+1]??6200;for(let pe=0;pe<pt;pe++){let he=de-(de-pn)*(pe+.5)/pt;B.fillStyle=ko(zo(Ts[ae.scheme].discrete?pn:he)),B.fillRect(0,fe+pe,$,1)}}B.fillStyle=se;for(let le=0;le<yt;le++){let fe=St+(yt-le)*pt;B.fillText(L[le].toLocaleString("zh-CN"),$+7,fe)}let qt=St+yt*pt+16;B.font=`600 10.5px ${we("--f-sans")}`,B.fillStyle=we("--muted"),B.fillText("\u6C34\u57DF",0,qt);for(let le=0;le<64;le++)B.fillStyle=ko(Fg(le/63*6500)),B.fillRect(le,qt+10,1,12);B.font=`10.5px ${we("--f-mono")}`,B.fillStyle=se,B.fillText("\u6D45",68,qt+16),B.fillText("\u6DF1",100,qt+16),B.fillStyle=jc,B.fillRect(0,qt+30,16,10),B.fillStyle=se,B.font=`11px ${we("--f-sans")}`,B.fillText("\u6E56\u6CCA",23,qt+35)}let Ee=Bt("views");ee.forEach(y=>{let R=document.createElement("button");R.className="chip",R.textContent=y.name,R.addEventListener("click",()=>{ct(y),Dt()&&fn()}),Ee.appendChild(R)}),Bt("autoRotate").addEventListener("change",y=>{p.autoRotate=y.target.checked,Ut=!0});let He=!1,Te=()=>{He||(He=!0,requestAnimationFrame(()=>{He=!1,k()}))};Bt("exag").addEventListener("input",y=>{ae.exag=+y.target.value,Bt("exagOut").textContent=ae.exag+"\xD7",Bt("exagTag").textContent=ae.exag+"\xD7",Te()});function vn(y,R,U,B){y.innerHTML="",R.forEach(([L,$])=>{let pt=document.createElement("button");pt.textContent=$,pt.setAttribute("aria-pressed",String(L===U)),pt.addEventListener("click",()=>{[...y.children].forEach(St=>St.setAttribute("aria-pressed","false")),pt.setAttribute("aria-pressed","true"),B(L)}),y.appendChild(pt)})}vn(Bt("scheme"),Object.entries(Ts).map(([y,R])=>[y,R.name]),ae.scheme,y=>{ae.scheme=y,J(),Xt(),H(),Ut=!0}),vn(Bt("contour"),[[0,"\u5173"],[200,"200 m"],[500,"500 m"],[1e3,"1000 m"]],0,y=>{ae.contour=y,Y.uniforms.uContour.value=y,Ut=!0}),Bt("shade").addEventListener("input",y=>{ae.shade=y.target.value/100,Bt("shadeOut").textContent=y.target.value+"%",Y.uniforms.uShade.value=ae.shade,Ut=!0}),Bt("dim").addEventListener("change",y=>{ae.dim=y.target.checked,Y.uniforms.uDim.value=ae.dim?1:0,Ut=!0}),Bt("bathy").addEventListener("change",y=>{ae.bathy=y.target.checked,Te()});let ve=y=>{if(y<100)return-150*(100-y)/100;let R=6e3*Math.pow((y-100)/900,2.2);return R<100?Math.round(R/5)*5:R<1e3?Math.round(R/10)*10:Math.round(R/50)*50},Qt=y=>y<0?100+y/150*100:100+900*Math.pow(y/6e3,1/2.2),Ps=y=>(y>0?"+":y<0?"\u2212":"")+Math.abs(Math.round(y)).toLocaleString("zh-CN")+" m";function Me(y,R){ae.sea=y,Bt("seaOut").textContent=Ps(y),R||(Bt("sea").value=Math.round(Qt(y))),kt(y),Te(),Et.S&&Xi()}Bt("sea").addEventListener("input",y=>{let R=ve(+y.target.value);R>-150&&R<0&&(R=Math.round(R/5)*5),Me(R,!0)});let Xn=Bt("seaPresets");[[-120,"\u672B\u6B21\u51B0\u671F \u2212120 m"],[0,"\u73B0\u4ECA 0 m"],[100,"+100 m"],[1e3,"+1000 m"],[3e3,"+3000 m"]].forEach(([y,R])=>{let U=document.createElement("button");U.className="chip sm",U.textContent=R,U.addEventListener("click",()=>Me(y,!1)),Xn.appendChild(U)});let er=[["admin","\u56FD\u754C\u4E0E\u7701\u7EA7\u754C\u7EBF",{sw:"#7B2143"}],["rivers","\u6CB3\u6D41\u4E0E\u6E56\u6CCA",{sw:"#1D6AAE"}],["regions","\u5730\u5F62\u533A\u540D\u79F0",{txt:"\u539F",c:"var(--l-land)"}],["mountains","\u5C71\u8109\u4E0E\u5C71\u5CF0",{txt:"\u5C71",c:"var(--l-mtn)"}],["seas","\u6D77\u6D0B\u4E0E\u6D77\u5CE1",{txt:"\u6D77",c:"var(--l-water)"}],["cities","\u7701\u7EA7\u884C\u653F\u4E2D\u5FC3",{txt:"\u25CF",c:"var(--l-city)"}],["steps","\u4E09\u7EA7\u9636\u68AF\u5206\u754C\u7EBF",{sw:"#E0561F",dash:!0}],["qinhuai","\u79E6\u5CAD\u2014\u6DEE\u6CB3\u7EBF",{sw:"#16875A",dash:!0}],["hu","\u80E1\u7115\u5EB8\u7EBF",{sw:"#6A3FB5",dash:!0}]],Ei=Bt("layers");er.forEach(([y,R,U])=>{let B=document.createElement("label");B.className="layer";let L=U.sw?`<span class="sw${U.dash?" dash":""}" style="color:${U.sw}"></span>`:`<span class="sw txt" style="color:${U.c}">${U.txt}</span>`;B.innerHTML=`<input type="checkbox" id="lyr-${y}"${ae.layers[y]?" checked":""}><span>${R}</span>${L}`,B.querySelector("input").addEventListener("change",$=>{ae.layers[y]=$.target.checked,Wt(),$.target.checked&&Ho[y]&&ge(y),Et.S&&Xi()}),Ei.appendChild(B)});let Ls=Bt("profPresets");G.forEach(y=>{let R=document.createElement("button");R.className="chip sm",R.textContent=y.name,R.addEventListener("click",()=>{Mt(y.A,y.B,!0),Dt()&&fn()}),Ls.appendChild(R)});function Be(){gt.hidden=!1,bt.hidden=!0,c.classList.remove("panel-closed"),nt()}function fn(){gt.hidden=!0,bt.hidden=!1,c.classList.add("panel-closed"),nt()}Bt("btnCollapse").addEventListener("click",fn),bt.addEventListener("click",Be),Bt("btnFull").addEventListener("click",()=>{try{if(document.fullscreenElement)document.exitFullscreen();else{let y=c.requestFullscreen&&c.requestFullscreen();y&&y.catch&&y.catch(()=>{})}}catch{}});function wi(){Y.uniforms.uDimTint.value=Ks(we("--dim-tint")||"#EEF1ED"),Y.uniforms.uDimMix.value=parseFloat(we("--dim-amt"))||.58,Et.line&&Et.line.mat.color.set(we("--vermilion")),Xt(),H(),Ut=!0}matchMedia("(prefers-color-scheme: dark)").addEventListener("change",wi),new MutationObserver(wi).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),kt(0),k(),Wt(),wi(),Dt()&&fn(),new ResizeObserver(nt).observe(c),nt(),V(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{V(),Xt()}),K=null;{let y=ee[0],[R,U]=Vi(y.lon,y.lat);p.target.set(R,.1,U),x.position.setFromSpherical(new kn(A(y)*1.35,30*Pe,-8*Pe)).add(p.target),x.lookAt(p.target),ct(y,2200)}let tn=new Ie;function qi(y){let R=lt(y),U=p.update();jt(),x.updateMatrixWorld(),(R||U||Ut||!tn.equals(x.matrixWorld))&&(h.render(f,x),Lt(),tn.copy(x.matrixWorld),Ut=!1),requestAnimationFrame(qi)}requestAnimationFrame(qi),window.__terrainReady=!0,Bt("loading").remove()}Bg().catch(i=>{console.error(i);let t=document.getElementById("loading");t&&(t.innerHTML="<div>\u5730\u5F62\u751F\u6210\u5931\u8D25<small>"+(i&&i.message?i.message:i)+"</small></div>")});})();
