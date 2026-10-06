(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,79932,e=>{"use strict";let t=1/298.257223563,a=1361/0x11de784a,r=2*Math.PI/31556926.080000002,o=Math.PI/180,i=2*Math.PI,l=e=>e-i*Math.floor((e+Math.PI)/i),n=e=>e-i*Math.floor(e/i);function s(e,t){let a=(357.528+.9856003*e)*o,r=(280.46+.9856474*e+1.915*Math.sin(a)+.02*Math.sin(2*a))*o,i=(23.439-4e-7*e)*o,l=Math.cos(r),n=Math.sin(r);return t[0]=l,t[1]=Math.cos(i)*n,t[2]=Math.sin(i)*n,(1.00014-.01671*Math.cos(a)-14e-5*Math.cos(2*a))*0x22d4ba5a6c}function u(e,a,r){let o=Math.sqrt(e*e+a*a+r*r),i=r/o;return o-6378137*(1-t*i*i)}function c(e,t,a,r,o){let i=r[0]*o-e,l=r[1]*o-t,n=r[2]*o-a,s=Math.sqrt(i*i+l*l+n*n),u=Math.sqrt(e*e+t*t+a*a),c=Math.asin(6957e5/s),m=Math.asin(6378137/u),d=Math.acos(Math.max(-1,Math.min(1,(-e*i-t*l-a*n)/(u*s))));if(d>=c+m)return 1;if(d<=m-c)return 0;let h=(d*d+c*c-m*m)/(2*d),f=Math.sqrt(Math.max(0,c*c-h*h));return Math.max(0,Math.min(1,1-(c*c*Math.acos(Math.max(-1,Math.min(1,h/c)))+m*m*Math.acos(Math.max(-1,Math.min(1,(d-h)/m)))-d*f)/(Math.PI*c*c)))}function m(e,t,a,r,o,i){let l=t*i-a*o,n=a*r-e*i,s=e*o-t*r,u=-n,c=Math.hypot(u,l)||1,m=Math.sqrt(l*l+n*n+s*s);return Math.atan2(((0*n-s*l)/m*e+(s*u-0*l)/m*t+(l*l-n*u)/m*a)/c,(e*u+t*l)/c)}e.s(["DAY_S",0,86400,"FLATTENING",0,t,"MU",0,3986004418e5,"RE",0,6378137,"createForceModel",0,function(e,t){let r=new Float64Array(3);return{options:e,bodies:t,accel:(o,i,l)=>{let n=t.length,d=0;e.srp&&(d=s(e.epochDays+o/86400,r));for(let o=0;o<n;o++){let n=6*o,s=3*o;l[s]=0,l[s+1]=0,l[s+2]=0;let h=i[n],f=i[n+1],p=i[n+2];!function(e,t,a,r,o,i=0){let l=e*e+t*t+a*a,n=Math.sqrt(l),s=l*n,u=-3986004418e5*e/s,c=-3986004418e5*t/s,m=-3986004418e5*a/s;if(r>=2){let o=a*a/l,i=s*l,n=-2633270339029137e10/i;if(u+=n*e*(1-5*o),c+=n*t*(1-5*o),m+=n*a*(3-5*o),r>=3){let n=i*l,s=6548406098690052e14/n,d=3*a-7*a*a*a/l;if(u+=s*e*d,c+=s*t*d,m+=s*(6*a*a-7*a*a*a*a/l-.6*l),r>=4){let r=-20032169171169546e20/n,i=1-14*o+21*o*o;u+=r*e*i,c+=r*t*i,m+=-6677389723723182e20/n*a*(15-70*o+63*o*o)}}}o[i]+=u,o[i+1]+=c,o[i+2]+=m}(h,f,p,e.zonal,l,s);let v=t[o];if(e.density&&!v.dragFree&&v.ballistic>0){let t=i[n+3],a=i[n+4],r=i[n+5],o=t+7292115e-11*f,c=a-7292115e-11*h,d=Math.sqrt(o*o+c*c+r*r),_=-.5*e.density(u(h,f,p),m(h,f,p,t,a,r))*v.ballistic*d;l[s]+=_*o,l[s+1]+=_*c,l[s+2]+=_*r}if(e.srp&&v.srp>0){let e=c(h,f,p,r,d);if(e>0){let t=-(0x22d4ba5a6c/d*(0x22d4ba5a6c/d*a))*v.srp*e;l[s]+=t*r[0],l[s+1]+=t*r[1],l[s+2]+=t*r[2]}}}}}},"createIntegrator",0,function(e){let t=e.bodies.length,a=6*t,r=new Float64Array(3*t),o=new Float64Array(3*t),i=new Float64Array(3*t),l=new Float64Array(3*t),n=new Float64Array(a),s=new Float64Array(a),u=new Float64Array(a);return{step:(a,c,m)=>{let d=m/2;e.accel(a,c,r);for(let e=0;e<t;e++){let t=6*e,a=3*e;for(let e=0;e<3;e++)n[t+e]=c[t+e]+d*c[t+3+e],n[t+3+e]=c[t+3+e]+d*r[a+e]}e.accel(a+d,n,o);for(let e=0;e<t;e++){let t=6*e,a=3*e;for(let e=0;e<3;e++)s[t+e]=c[t+e]+d*n[t+3+e],s[t+3+e]=c[t+3+e]+d*o[a+e]}e.accel(a+d,s,i);for(let e=0;e<t;e++){let t=6*e,a=3*e;for(let e=0;e<3;e++)u[t+e]=c[t+e]+m*s[t+3+e],u[t+3+e]=c[t+3+e]+m*i[a+e]}e.accel(a+m,u,l);for(let e=0;e<t;e++){let t=6*e,a=3*e;for(let e=0;e<3;e++)c[t+e]+=m/6*(c[t+3+e]+2*n[t+3+e]+2*s[t+3+e]+u[t+3+e]),c[t+3+e]+=m/6*(r[a+e]+2*o[a+e]+2*i[a+e]+l[a+e])}},size:a}},"daysSinceJ2000",0,function(e,t,a,r=0){return(Date.UTC(e,t-1,a)-Date.UTC(2e3,0,1,12))/864e5+r/24},"densityModel",0,function(e,t){let a=e.altKm,r=e.argLatDeg,i=e.density[t];if(!i)throw RangeError(`unknown density level ${t}`);let l=i.map(e=>e.map(e=>Math.log(e))),s=a.length,u=r.length,c=a[1]-a[0],m=r[1]-r[0];return(e,t)=>{let i=(e/1e3-a[0])/c,d=Math.floor(i);d<0&&(d=0),d>s-2&&(d=s-2),i-=d;let h=(n(t)/o-r[0])/m,f=Math.floor(h);h-=f;let p=((f=(f%u+u)%u)+1)%u,v=l[d][f]+(l[d][p]-l[d][f])*h;return Math.exp(v+(l[d+1][f]+(l[d+1][p]-l[d+1][f])*h-v)*i)}},"dragMagnitude",0,function(e,t,a,r){let o=e[t],i=e[t+1],l=e[t+2],n=e[t+3]+7292115e-11*i,s=e[t+4]-7292115e-11*o,c=e[t+5];return .5*r(u(o,i,l),m(o,i,l,e[t+3],e[t+4],e[t+5]))*a*(n*n+s*s+c*c)},"elementsToState",0,function(e,t,a=0){let r=Math.hypot(e.ex,e.ey),o=r>0?Math.atan2(e.ey,e.ex):0,i=function(e,t){let a=t<.8?e:Math.PI;for(let r=0;r<30;r++){let r=(a-t*Math.sin(a)-e)/(1-t*Math.cos(a));if(a-=r,1e-15>Math.abs(r))break}return a}(l(e.lambda-o),r),n=Math.cos(i),s=Math.sin(i),u=Math.sqrt(1-r*r),c=e.a*(1-r*n),m=e.a*(n-r),d=e.a*u*s,h=Math.sqrt(3986004418e5*e.a)/c,f=-h*s,p=h*u*n,v=Math.cos(e.raan),_=Math.sin(e.raan),x=Math.cos(o),g=Math.sin(o),y=Math.cos(e.i),b=Math.sin(e.i),M=[v*x-_*g*y,_*x+v*g*y,g*b],A=[-v*g-_*x*y,-_*g+v*x*y,x*b];for(let e=0;e<3;e++)t[a+e]=M[e]*m+A[e]*d,t[a+3+e]=M[e]*f+A[e]*p},"frozenEccentricity",0,function(e,t){return 6378137/(2*e)*.002339362715502263*Math.sin(t)},"gmst",0,function(e){return n((280.46061837+360.98564736629*e)*o)},"lvlhFrame",0,function(e,t=0){let a=e[t],r=e[t+1],o=e[t+2],i=e[t+3],l=e[t+4],n=e[t+5],s=Math.sqrt(a*a+r*r+o*o),u=[a/s,r/s,o/s],c=r*n-o*l,m=o*i-a*n,d=a*l-r*i,h=Math.sqrt(c*c+m*m+d*d),f=[c/=h,m/=h,d/=h],p=[m*u[2]-d*u[1],d*u[0]-c*u[2],c*u[1]-m*u[0]];return{R:u,S:p,W:f}},"raanForLtan",0,function(e,t){return n(n((280.46+.9856474*e)*o)+(t-12)*15*o)},"relativeRSW",0,function(e,t,a,r,o=0){let i=e[6*t]-e[0],l=e[6*t+1]-e[1],n=e[6*t+2]-e[2];r[o]=i*a.R[0]+l*a.R[1]+n*a.R[2],r[o+1]=i*a.S[0]+l*a.S[1]+n*a.S[2],r[o+2]=i*a.W[0]+l*a.W[1]+n*a.W[2]},"ssoInclination",0,function(e,t=0){let a=e*(1-t*t);return Math.acos(-r/(1.5*Math.sqrt(3986004418e5/(e*e*e))*.00108262668*(6378137/a)*(6378137/a)))},"stateToElements",0,function(e,t=0){let a=e[t],r=e[t+1],o=e[t+2],i=e[t+3],l=e[t+4],s=e[t+5],u=Math.sqrt(a*a+r*r+o*o),c=r*s-o*l,m=o*i-a*s,d=a*l-r*i,h=Math.sqrt(c*c+m*m+d*d),f=1/(2/u-(i*i+l*l+s*s)/3986004418e5),p=Math.acos(d/h),v=Math.atan2(c,-m),_=Math.cos(v),x=Math.sin(v),g=Math.cos(p),y=Math.sin(p),b=-x*g,M=_*g,A=(l*d-s*m)/3986004418e5-a/u,w=(s*c-i*d)/3986004418e5-r/u,P=(i*m-l*c)/3986004418e5-o/u,E=A*_+w*x+0*P,R=A*b+w*M+P*y,S=Math.atan2(a*b+r*M+o*y,a*_+r*x+0*o),K=Math.hypot(E,R),C=Math.atan2(R,E),T=S-C,F=2*Math.atan2(Math.sqrt(1-K)*Math.sin(T/2),Math.sqrt(1+K)*Math.cos(T/2)),D=F-K*Math.sin(F);return{a:f,ex:E,ey:R,i:p,raan:n(v),lambda:n(D+C),u:n(S),e:K,w:C}},"sunPosition",0,s,"sunlitFraction",0,c,"wrapPi",0,l])},28523,21357,e=>{"use strict";var t=e.i(56420);let a=(0,t.default)("pause",[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]);e.s(["Pause",0,a],28523);let r=(0,t.default)("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]);e.s(["Play",0,r],21357)},95925,e=>{"use strict";let t=(0,e.i(56420).default)("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);e.s(["RotateCcw",0,t],95925)},7556,73351,e=>{"use strict";let t={earthRadiusKm:6378.137,earthMuKm3s2:398600.4418,lightKmS:299792.458,siderealDayS:86164.09054},a=Math.PI/180;function r(e,o=0){if(!Number.isFinite(e)||e<=0)throw RangeError("altitudeKm must be a positive finite number");let i=t.earthRadiusKm+e,l=2*Math.PI*Math.sqrt(Math.pow(i,3)/t.earthMuKm3s2),n=Math.sqrt(t.earthMuKm3s2/i),s=t.earthRadiusKm/i,u=Math.abs(o)*a,c=Math.asin(s),m=l*(u>=c-1e-12?0:Math.acos(Math.min(1,Math.sqrt(1-s*s)/Math.cos(u))))/Math.PI;return{orbitRadiusKm:i,periodS:l,speedKmS:n,eclipseS:m,sunlightS:l-m,sunlitFraction:1-m/l,betaCriticalDeg:c/a}}e.s(["PHYSICS",0,t,"orbitMetrics",0,r],73351);let o=Math.PI/180,i=2*Math.PI/31556926.080000002,l=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],n=e=>(e%360+360)%360;function s(e){let a=t.earthRadiusKm+e;return Math.sqrt(t.earthMuKm3s2/(a*a*a))}function u(e){return 2*Math.PI/s(e)/60}function c(e){var a;let r,l;return"sso"===e.kind?(a=e.altitudeKm,r=t.earthRadiusKm+a,l=t.earthRadiusKm/r,Math.acos(-i/(1.5*s(a)*.00108262668*l*l))/o):e.inclinationDeg??53}function m(e){return 9861.5+e}function d(e){let t=n(280.46+.9856474*e),a=n(357.528+.9856003*e)*o,r=(t+1.915*Math.sin(a)+.02*Math.sin(2*a))*o,i=(23.439-4e-7*e)*o;return{s:[Math.cos(r),Math.cos(i)*Math.sin(r),Math.sin(i)*Math.sin(r)],meanLongitudeDeg:t}}function h(e,a){var r,i;let l,u;if("sso"===e.kind)return n(d(a).meanLongitudeDeg+((e.ltanHours??18)-12)*15);let m=(r=e.altitudeKm,i=c(e),l=t.earthRadiusKm+r,u=t.earthRadiusKm/l,-1.5*s(r)*.00108262668*u*u*Math.cos(i*o)/o);return n((e.raan0Deg??0)+m*(a-9861.5)*86400)}function f(e,t){let a,r;return Math.asin(Math.max(-1,Math.min(1,l((a=h(e,t)*o,[Math.sin(a)*Math.sin(r=c(e)*o),-Math.cos(a)*Math.sin(r),Math.cos(r)]),d(t).s))))/o}function p(e,t){return r(e.altitudeKm,f(e,t)).eclipseS/60}e.s(["EPOCH_2027_D",0,9861.5,"ORBITS",0,[{id:"dawn-dusk-sso-650",label:"Dawn–dusk, 650 km",short:"Dawn–dusk",note:"Sun-synchronous, ascending node at 18:00. Our model orbit for SI Nodes.",altitudeKm:650,kind:"sso",ltanHours:18},{id:"incl53-550",label:"53° inclined, 550 km",short:"53° LEO",note:"Broadband-constellation style. The orbit plane drifts against the Sun.",altitudeKm:550,kind:"inclined",inclinationDeg:53,raan0Deg:0},{id:"sso-1030-550",label:"Mid-morning, 550 km",short:"10:30 SSO",note:"Sun-synchronous, ascending node at 10:30. Typical for Earth observation.",altitudeKm:550,kind:"sso",ltanHours:10.5},{id:"iss-420",label:"51.6° inclined, 420 km",short:"ISS orbit",note:"Space-station orbit. The orbit plane drifts against the Sun.",altitudeKm:420,kind:"inclined",inclinationDeg:51.6,raan0Deg:0}],"annualSummary",0,function(e){let t=function(e,t="sso"===e.kind?1:4){let a=[];for(let r=0;r<365;r++){let o=0,i=0;for(let a=0;a<t;a++){let l=m(r+(a+.5)/t);o+=p(e,l),i+=f(e,l)}a.push({day:r,eclipseMin:o/t,betaDeg:i/t})}return a}(e),a=u(e.altitudeKm);return{periodMin:a,sunlitFraction:1-t.reduce((e,t)=>e+t.eclipseMin,0)/t.length/a,maxEclipseMin:t.reduce((e,t)=>Math.max(e,t.eclipseMin),0),eclipseDays:t.filter(e=>e.eclipseMin>.05).length,profile:t}},"betaDeg",0,f,"daysSinceJ2000",0,m,"eclipseMinutes",0,p,"gmstAtUtcHourDeg",0,function(e,t){return n(280.46061837+.98564736629*e+((t/24+.5)%1+1)%1*360)},"gmstDeg",0,function(e){return n(280.46061837+360.98564736629*e)},"inShadow",0,function(e,t){let a=l(e,t);if(a>=0)return!1;let r=[e[0]-a*t[0],e[1]-a*t[1],e[2]-a*t[2]];return 1>l(r,r)},"inclinationDeg",0,c,"orbitRing",0,function(e,a,r=160){let i=(t.earthRadiusKm+e.altitudeKm)/t.earthRadiusKm,l=h(e,a)*o,n=c(e)*o,s=Math.cos(l),u=Math.sin(l),m=Math.cos(n),d=Math.sin(n),f=[];for(let e=0;e<=r;e++){let t=2*Math.PI*e/r,a=Math.cos(t),o=Math.sin(t);f.push([i*(s*a-u*o*m),i*(u*a+s*o*m),i*o*d])}return f},"periodMin",0,u,"raanDeg",0,h,"satellitePosition",0,function(e,a,r=0){let i=(t.earthRadiusKm+e.altitudeKm)/t.earthRadiusKm,l=r+s(e.altitudeKm)*(a-9861.5)*86400,n=h(e,a)*o,u=c(e)*o,m=Math.cos(l),d=Math.sin(l),f=Math.cos(n),p=Math.sin(n),v=Math.cos(u);return[i*(f*m-p*d*v),i*(p*m+f*d*v),i*d*Math.sin(u)]},"sunVector",0,d],7556)},64322,e=>{"use strict";var t=e.i(73351),a=e.i(7556);let r={convEff:.95,housekeepingFrac:.05,thermalCtrlFrac:.03,cellEff:{"III-V":.3,Si:.22},packing:.9,eolFactor:.88,dod:{dawnDusk:.4,other:.25},battPathEff:.92,radEmissivity:.9,radFinEff:.9,propellantFrac:.05},o={2026:{label:"2026 technology",arrayWPerKg:100,cell:"III-V",radTempK:320,radKgPerM2:3.5,loopKgPerKw:1.5,computeKgPerKw:6,peKgPerKw:1.5,shieldKgPerKw:1.5,busFrac:.2,battWhPerKg:160},2030:{label:"2030 technology",arrayWPerKg:150,cell:"Si",radTempK:330,radKgPerM2:2.5,loopKgPerKw:1,computeKgPerKw:4,peKgPerKw:1,shieldKgPerKw:1,busFrac:.15,battWhPerKg:200},2035:{label:"2035 technology",arrayWPerKg:250,cell:"Si",radTempK:340,radKgPerM2:2,loopKgPerKw:.8,computeKgPerKw:3,peKgPerKw:.8,shieldKgPerKw:1,busFrac:.12,battWhPerKg:250}};function i(e){return 1+.0334*Math.cos(2*Math.PI*(e-3)/365.25)}e.s(["INPUTS",0,r,"TECH",0,o,"orbitInputs",0,function(e){let t=(0,a.annualSummary)(e),r="sso"===e.kind&&(18===e.ltanHours||6===e.ltanHours),o=t.profile.reduce((e,t)=>Math.min(e,i(t.day+.5)),1/0),l=r?t.profile.reduce((e,t)=>Math.min(e,i(t.day+.5)*Math.abs(Math.sin(t.betaDeg*Math.PI/180))),1/0):.97*o,n=t.profile.filter(e=>e.eclipseMin>.05).length;return{id:e.id,altitudeKm:e.altitudeKm,periodMin:t.periodMin,maxEclipseMin:t.maxEclipseMin,annualSunlitFraction:t.sunlitFraction,arraySizingFactor:l,arrayMode:r?"body-fixed":"sun-tracking",dawnDusk:r,eclipsesPerYear:Math.round(1440*n/t.periodMin),inclinationDeg:(0,a.inclinationDeg)(e)}},"orbitTimeline",0,function(e,t,a=120){let o=[],i=t.periodMin,l=t.maxEclipseMin,n=e.eclipseLoadKw,s=e.batteryKwh,u=i/a;for(let t=0;t<=a;t++){let i=t*u,c=i>=l,m=(c?1:e.shadowShare)*e.itKw/r.convEff,d=s>=e.batteryKwh-1e-9,h=c?d?0:e.rechargeKw:-(m+e.housekeepingKw);if(o.push({min:i,sunlit:c,generationKw:c?e.arrayEolKw:0,computeKw:m,housekeepingKw:e.housekeepingKw,batteryKw:h,soc:e.batteryKwh>0?s/e.batteryKwh:1}),t===a)break;let f=Math.max(0,Math.min(u,l-i)),p=u-f;s-=n/r.battPathEff*(f/60),s=Math.min(e.batteryKwh,s+e.rechargeKw*r.battPathEff*(p/60))}return o},"sizeNode",0,function(e,a,i,l=!1,n,s=0){var u;let c,m,d,h,f=o[i],p=n??f.radTempK,v="number"==typeof l?Math.max(0,Math.min(1,l)):+!!l,_=e*(r.housekeepingFrac+r.thermalCtrlFrac),x=e/r.convEff+_,g=a.maxEclipseMin,y=a.periodMin-g,b=v>=1?x:_+v*e/r.convEff,M=b*g/60/r.battPathEff,A=a.dawnDusk?r.dod.dawnDusk:r.dod.other,w=g>0?M/A:0,P=g>0?M/r.battPathEff/(y/60):0,E=x+P,R=r.cellEff[f.cell],S=1361*R*r.packing*r.eolFactor*a.arraySizingFactor,K=1e3*E/S,C=1361*K*R*r.packing/1e3,T=(u=a.altitudeKm,c=(t.PHYSICS.earthRadiusKm/(t.PHYSICS.earthRadiusKm+u))**2,d=(m=r.radFinEff*r.radEmissivity*5670374419e-17*p**4)-20,{total:d+Math.max(0,h=m-237*r.radEmissivity*c-30),zenith:d,nadir:h,emitPerFace:m,viewFactor:c}),F=1e3*x/T.total*(1+s),D={array:1e3*C/f.arrayWPerKg,battery:1e3*w/f.battWhPerKg,radiator:F*f.radKgPerM2+f.loopKgPerKw*x,compute:f.computeKgPerKw*e,powerElectronics:f.peKgPerKw*x,shielding:f.shieldKgPerKw*e,bus:0,propellant:0},k=D.array+D.battery+D.radiator+D.compute+D.powerElectronics+D.shielding;D.bus=f.busFrac*k;let L=k+D.bus;D.propellant=L*r.propellantFrac;let q=L+D.propellant,I=v>=1?1:a.annualSunlitFraction+v*(1-a.annualSunlitFraction);return{itKw:e,techYear:i,rideThrough:v>=1,shadowShare:v,radiatorMargin:s,radiatorTempK:p,housekeepingKw:_,loadKw:x,eclipseLoadKw:b,batteryEnergyKwh:M,batteryKwh:w,dod:A,rechargeKw:P,arrayEolKw:E,arrayM2:K,arrayBolKw:C,cellEff:R,designFlux:S,radiatorNetWPerM2:T.total,radiator:T,heatKw:x,radiatorM2:F,mass:D,wetKg:q,kgPerKw:q/e,availability:I,kgPerAvailableKw:q/(e*I)}}])},30064,e=>{"use strict";var t=e.i(73351),a=e.i(7556),r=e.i(64322);let o=1e9*t.PHYSICS.earthMuKm3s2,i=1e3*t.PHYSICS.earthRadiusKm,l="cycle",n=[200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950],s={low:[1561e-13,2921e-14,7159e-15,2056e-15,6533e-16,2247e-16,8396e-17,3489e-17,1659e-17,9147e-18,5761e-18,4002e-18,2961e-18,2278e-18,1795e-18,1438e-18],cycle:[2556e-13,7087e-14,2505e-14,1015e-14,4488e-15,2111e-15,1041e-15,5332e-16,2824e-16,1542e-16,8691e-17,5058e-17,3048e-17,1907e-17,1243e-17,8439e-18],high:[3518e-13,1143e-13,4527e-14,1999e-14,9478e-15,4726e-15,2448e-15,1307e-15,7162e-16,4017e-16,2304e-16,1352e-16,8134e-17,5025e-17,3197e-17,2102e-17]};function u(e,t){let a=s[t],r=n.length-2,o=0;for(;o<r&&e>n[o+1];)o++;let i=n[o],l=n[o+1];return Math.exp(Math.log(a[o])+(Math.log(a[o+1])-Math.log(a[o]))*((e-i)/(l-i)))}function c(e,t){let a=e.arrayM2+e.radiatorM2;return 1.5*Math.pow(e.massKg/1e3,2/3)+("edge-on"===t?.03:.5)*a}function m(e,t=300){let a=i+1e3*e;return Math.sqrt(o/a)-Math.sqrt(o*(2/a-1/((a+(i+1e3*t))/2)))}function d(e,t,a,r,l=200,n=500){let s=a/r*2.2,c=0;for(let a=e;a>l;a-=.5){let e=a-.25,r=i+1e3*e;if((c+=500/(u(e,t)*Math.sqrt(o*r)*s))>0x1e187e0*n)return n}return c/0x1e187e0}function h(e,t,a,r,l=72){let n=0,s=0,c=Math.sqrt(1-t*t);for(let m=0;m<l;m++){let d=2*Math.PI*(m+.5)/l,h=e*(1-t*t)/(1+t*Math.cos(d)),f=Math.sqrt(o*(2/h-1/e)),p=h*h/(e*e*c),v=u((h-i)/1e3,a);n+=-e*e*v*f*f*f*r/o*p,s+=-(t+Math.cos(d))*v*f*r*p}return{da:n/l,de:s/l}}function f(e,t,a,r,o,l=200){let n=r/o*2.2,s=i+1e3*e,u=i+1e3*t,c=(s+u)/2,m=(s-u)/(s+u),d=0,p=[{years:0,perigeeKm:t,apogeeKm:e}];for(let e=0;e<2e4;e++){let e=h(c,m,a,n),t=5e-4*c/Math.abs(e.da);m>.001&&e.de<0&&(t=Math.min(t,.02*m/Math.abs(e.de)));let r=h(c+e.da*t/2,Math.max(0,m+e.de*t/2),a,n);c+=r.da*t,m=Math.max(0,m+r.de*t);let o={years:(d+=t)/0x1e187e0,perigeeKm:(c*(1-m)-i)/1e3,apogeeKm:(c*(1+m)-i)/1e3};if(p.push(o),o.perigeeKm<150||(c-i)/1e3<180||o.years>l)break}return{years:d/0x1e187e0,path:p}}e.s(["CROWDED_SHELLS",0,[{name:"Starlink",loKm:480,hiKm:570,note:"about 4,400 satellites moving from 550 to 480 km during 2026"},{name:"Kuiper",loKm:590,hiKm:630,note:"3,236 satellites authorised at 590, 610 and 630 km"}],"DRAG_CD",0,2.2,"FCC_DISPOSAL_YEARS",0,5,"ISP",0,{electric:1500,chemical:220},"LAUNCHERS",0,[{name:"Starship",tonnes:100},{name:"Falcon 9",tonnes:17.5}],"MIN_SPACING_WIDTHS",0,5,"MISSION_YEARS",0,5,"SOLAR",0,{low:{label:"Quiet Sun",detail:"solar minimum, F10.7 = 70"},cycle:{label:"11-year average",detail:"averaged over a solar cycle, F10.7 = 70–230"},high:{label:"Active Sun",detail:"solar maximum, F10.7 = 230"}},"buildLattice",0,function(e,t){let a=e/2,r=Math.floor(a/t+1e-9),o=new Map,i=[];for(let e=-r;e<=r;e++)for(let l=-r;l<=r;l++)(e*e+l*l)*t*t<=a*a*(1+1e-9)&&(o.set(`${e},${l}`,i.length),i.push({u:e*t,v:l*t,i:e,j:l}));let l=[];return i.forEach((e,t)=>{let a=o.get(`${e.i+1},${e.j}`),r=o.get(`${e.i},${e.j+1}`);void 0!==a&&l.push([t,a]),void 0!==r&&l.push([t,r])}),{radiusM:e,spacingM:t,nodes:i,links:l}},"deadNodeLimitKm",0,function(e){let t=c(e,"tumbling"),a=400,r=950;for(let o=0;o<40;o++){let o=(a+r)/2;d(o,l,t,e.massKg)>5?r=o:a=o}return a},"decayYears",0,d,"disposalDeltaV",0,m,"dragDeltaVPerYear",0,function(e,t,a,r){var l,n,s,c;let m;return 0x1e187e0*(l=e,n=t,s=a,c=r,m=Math.sqrt(o/(i+1e3*l)),.5*u(l,n)*m*m*2.2*(s/c))},"endOfLife",0,function(e,t){let a=c(t,"edge-on"),r=c(t,"tumbling");return{disposal:f(e,Math.min(300,e),l,a,t.massKg),leftAlone:f(e,e,l,a,t.massKg),dead:f(e,e,l,r,t.massKg),disposalDv:m(e)}},"nodeClass",0,function(e){let t=a.ORBITS.find(e=>"dawn-dusk-sso-650"===e.id),o=(0,r.sizeNode)(e,(0,r.orbitInputs)(t),"2030");return{itKw:e,massKg:o.wetKg,arrayM2:o.arrayM2,radiatorM2:o.radiatorM2,propellantKg:o.mass.propellant,sizeM:Math.sqrt(o.arrayM2+o.radiatorM2)}},"propellantKg",0,function(e,t,a){return e*(1-Math.exp(-t/(9.80665*a)))},"ramAreaM2",0,c])},95264,e=>{e.v({alert:"formation-simulator-module__P957qa__alert",amber:"formation-simulator-module__P957qa__amber",axis:"formation-simulator-module__P957qa__axis",axisStrong:"formation-simulator-module__P957qa__axisStrong",bandDead:"formation-simulator-module__P957qa__bandDead",bandLabel:"formation-simulator-module__P957qa__bandLabel",bandShell:"formation-simulator-module__P957qa__bandShell",bandWindow:"formation-simulator-module__P957qa__bandWindow",canvasWrap:"formation-simulator-module__P957qa__canvasWrap",chart:"formation-simulator-module__P957qa__chart",chartLegend:"formation-simulator-module__P957qa__chartLegend",charts:"formation-simulator-module__P957qa__charts",checks:"formation-simulator-module__P957qa__checks",checksHead:"formation-simulator-module__P957qa__checksHead",controls:"formation-simulator-module__P957qa__controls",controlsTop:"formation-simulator-module__P957qa__controlsTop",coral:"formation-simulator-module__P957qa__coral",cursor:"formation-simulator-module__P957qa__cursor",deadKey:"formation-simulator-module__P957qa__deadKey",dot:"formation-simulator-module__P957qa__dot",eolLabel:"formation-simulator-module__P957qa__eolLabel",eolWrap:"formation-simulator-module__P957qa__eolWrap",grid:"formation-simulator-module__P957qa__grid",group:"formation-simulator-module__P957qa__group",groupLabel:"formation-simulator-module__P957qa__groupLabel",hud:"formation-simulator-module__P957qa__hud",keyShell:"formation-simulator-module__P957qa__keyShell",keyWindow:"formation-simulator-module__P957qa__keyWindow",lead:"formation-simulator-module__P957qa__lead",legend:"formation-simulator-module__P957qa__legend",limit:"formation-simulator-module__P957qa__limit",limitLabel:"formation-simulator-module__P957qa__limitLabel",note:"formation-simulator-module__P957qa__note",ok:"formation-simulator-module__P957qa__ok",play:"formation-simulator-module__P957qa__play",ramp:"formation-simulator-module__P957qa__ramp",readouts:"formation-simulator-module__P957qa__readouts",reentry:"formation-simulator-module__P957qa__reentry",reentryMark:"formation-simulator-module__P957qa__reentryMark",seekable:"formation-simulator-module__P957qa__seekable",sim:"formation-simulator-module__P957qa__sim",slider:"formation-simulator-module__P957qa__slider",srOnly:"formation-simulator-module__P957qa__srOnly",stage:"formation-simulator-module__P957qa__stage",swatch:"formation-simulator-module__P957qa__swatch",teal:"formation-simulator-module__P957qa__teal",warn:"formation-simulator-module__P957qa__warn"})},11438,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(30064),o=e.i(95264);let i=["low","cycle","high"],l={low:"#8fa9b8",cycle:"#5fd3e8",high:"#ffbd4a"},n=(e,t=1)=>e.toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t});function s(e,t=4){let a=e/t,r=10**Math.floor(Math.log10(a)),o=a/r;return(o<=1?1:o<=2?2:o<=2.5?2.5:o<=5?5:10)*r}function u(e){if(e>=100)return"over 100 years";if(e>=10)return`${Math.round(e)} years`;if(e>=1)return`${n(e,1)} years`;let t=12*e;return t>=2?`${Math.round(t)} months`:`${Math.round(365*e)} days`}function c(e){let t=(0,a.useRef)(null),[r,o]=(0,a.useState)(e);return(0,a.useEffect)(()=>{let e=t.current;if(!e||"u"<typeof ResizeObserver)return;let a=new ResizeObserver(([e])=>o(Math.max(240,Math.round(e.contentRect.width))));return a.observe(e),()=>a.disconnect()},[]),[t,r]}e.s(["AltitudeChart",0,function({node:e,fixedDvYear:a,altKm:s,activity:u,deadLimitKm:m}){let[d,h]=c(520),f=Array.from({length:41},(e,t)=>450+10*t),p=(0,r.ramAreaM2)(e,"edge-on"),v=(t,o)=>(0,r.dragDeltaVPerYear)(t,o,p,e.massKg)+a,_=Math.max(...i.map(e=>v(450,e))),x=[10,20,50,100,200,500,1e3].find(e=>e>=_)??1e3,g=e=>44+(e-450)/400*(h-44-12),y=e=>40+(1-Math.log10(Math.max(e,1)/1)/Math.log10(x/1))*164,b=[1,2,5,10,20,50,100,200,500,1e3].filter(e=>e<=x),M=v(s,u),A=Math.max(...r.CROWDED_SHELLS.map(e=>e.hiKm))+10,w=Math.min(850,m);return(0,t.jsxs)("figure",{className:o.default.chart,ref:d,children:[(0,t.jsxs)("figcaption",{children:[(0,t.jsx)("strong",{children:"Choosing the altitude"}),(0,t.jsxs)("span",{children:["Window ",Math.round(A),"–",Math.round(w)," km · thrust per year, outermost ",e.itKw," kW node, log scale"]})]}),(0,t.jsxs)("svg",{viewBox:`0 0 ${h} 230`,width:h,height:230,role:"img","aria-label":`Constellation shells at ${r.CROWDED_SHELLS.map(e=>`${e.loKm} to ${e.hiKm} km`).join(" and ")}; above ${Math.round(m)} km a dead node stays up longer than five years. Thrust per year falls from ${n(v(450,u),1)} m/s at 450 km to ${n(v(850,u),1)} m/s at 850 km for the selected Sun.`,children:[r.CROWDED_SHELLS.map(e=>(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:g(Math.max(450,e.loKm)),y:40,width:g(e.hiKm)-g(Math.max(450,e.loKm)),height:164,className:o.default.bandShell}),(0,t.jsx)("text",{x:(g(Math.max(450,e.loKm))+g(e.hiKm))/2,y:32,textAnchor:"middle",className:o.default.bandLabel,children:e.name})]},e.name)),m<850&&(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:g(m),y:40,width:g(850)-g(m),height:164,className:o.default.bandDead}),(0,t.jsx)("text",{x:g(850)-g(m)>120?(g(m)+g(850))/2:g(850)-2,y:32,textAnchor:g(850)-g(m)>120?"middle":"end",className:o.default.bandLabel,children:"dead node > 5 yr"})]}),w>A&&(0,t.jsx)("rect",{x:g(A),y:200,width:g(w)-g(A),height:4,className:o.default.bandWindow}),b.map(e=>(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:44,x2:h-12,y1:y(e),y2:y(e),className:o.default.grid}),(0,t.jsx)("text",{x:38,y:y(e)+4,textAnchor:"end",className:o.default.axis,children:Math.round(e).toLocaleString("en-US")})]},e)),(0,t.jsx)("text",{x:38,y:18,textAnchor:"end",className:o.default.axis,children:"m/s"}),[500,600,700,800].map(e=>(0,t.jsxs)("text",{x:g(e),y:223,textAnchor:"middle",className:o.default.axis,children:[e," km"]},e)),i.map(e=>(0,t.jsx)("path",{d:f.map((t,a)=>`${a?"L":"M"}${g(t).toFixed(1)},${y(v(t,e)).toFixed(1)}`).join(""),fill:"none",stroke:l[e],strokeWidth:e===u?2.5:1.5,opacity:e===u?1:.55},e)),(0,t.jsx)("line",{x1:g(s),x2:g(s),y1:40,y2:204,className:o.default.cursor}),(0,t.jsx)("circle",{cx:g(s),cy:y(M),r:4.5,fill:l[u],stroke:"#040a14",strokeWidth:2})]}),(0,t.jsxs)("div",{className:o.default.chartLegend,children:[i.map(e=>(0,t.jsxs)("span",{children:[(0,t.jsx)("i",{style:{background:l[e]}}),r.SOLAR[e].label]},e)),(0,t.jsxs)("span",{children:[(0,t.jsx)("i",{className:o.default.keyShell}),"Constellation shells"]}),(0,t.jsxs)("span",{children:[(0,t.jsx)("i",{className:o.default.keyWindow}),"Our window"]})]})]})},"EndOfLifeView",0,function({eol:e,altKm:i,playing:l}){let[n,m]=c(900),d=m<640,h=d?460:500,f={l:d?46:58,r:18,t:60,b:d?176:128},p=1/365,v=Math.max(20,1.6*e.leftAlone.years),_=e=>f.l+(Math.log10(Math.max(e,p))-Math.log10(p))/(Math.log10(v)-Math.log10(p))*(m-f.l-f.r),x=100*Math.ceil((i+40)/100),g=e=>f.t+(1-(e-100)/(x-100))*(h-f.t-f.b),[y,b]=(0,a.useState)(.35);(0,a.useEffect)(()=>{if(!l)return;let e=0,t=performance.now(),a=r=>{let o=Math.max(0,Math.min(.25,(r-t)/1e3));t=r,b(e=>e+o/9>1.12?0:e+o/9),e=requestAnimationFrame(a)};return e=requestAnimationFrame(a),()=>cancelAnimationFrame(e)},[l]);let M=10**(Math.log10(p)+Math.min(1,y)*(Math.log10(v)-Math.log10(p))),A=(e,t)=>[{...e[0],years:p},...e.filter(e=>e.years>p)].map((e,a)=>`${a?"L":"M"}${_(e.years).toFixed(1)},${g(Math.max(100,e[t])).toFixed(1)}`).join(""),w=[{key:"disposal",label:`Disposal burn, ${Math.round(e.disposalDv)} m/s`,path:e.disposal.path,years:e.disposal.years,color:"#ffbd4a"},{key:"dead",label:"Dead node, tumbling",path:e.dead.path,years:e.dead.years,color:"#ff8c66"},{key:"left",label:"Healthy node left in place",path:e.leftAlone.path,years:e.leftAlone.years,color:"#5fd3e8"}],P=[{years:1/365,label:"1 day"},{years:30/365,label:"1 month"},{years:.5,label:"6 months"},{years:1,label:"1 year"},{years:10,label:"10 years"}].filter(e=>e.years<=v&&!(d&&"6 months"===e.label)),E=s(x-100,5),R=[];for(let e=Math.ceil(100/E)*E;e<=x;e+=E)R.push(e);return(0,t.jsxs)("div",{ref:n,className:o.default.eolWrap,children:[(0,t.jsxs)("svg",{viewBox:`0 0 ${m} ${h}`,width:m,height:h,role:"img","aria-label":w.map(e=>`${e.label}: re-enters after ${u(e.years)}`).join("; ")+`. The FCC limit is ${r.FCC_DISPOSAL_YEARS} years.`,children:[(0,t.jsx)("text",{x:f.l,y:24,className:o.default.eolLabel,children:d?"ALTITUDE AFTER THE MISSION · LOG TIME":"ALTITUDE AFTER THE MISSION · 11-YEAR SOLAR AVERAGE · TIME ON A LOG SCALE"}),R.map(e=>(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:f.l,x2:m-f.r,y1:g(e),y2:g(e),className:o.default.grid}),(0,t.jsx)("text",{x:f.l-8,y:g(e)+4,textAnchor:"end",className:o.default.axis,children:e})]},e)),(0,t.jsx)("text",{x:f.l-8,y:f.t-12,textAnchor:"end",className:o.default.axis,children:"km"}),P.map(e=>(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:_(e.years),x2:_(e.years),y1:f.t,y2:h-f.b,className:o.default.grid}),(0,t.jsx)("text",{x:_(e.years),y:h-f.b+18,textAnchor:"middle",className:o.default.axis,children:e.label})]},e.label)),(0,t.jsx)("line",{x1:_(r.FCC_DISPOSAL_YEARS),x2:_(r.FCC_DISPOSAL_YEARS),y1:f.t-6,y2:h-f.b,className:o.default.limit}),(0,t.jsx)("text",{x:_(r.FCC_DISPOSAL_YEARS)+(d?-6:6),y:f.t+4,textAnchor:d?"end":"start",className:o.default.limitLabel,children:d?`FCC: ${r.FCC_DISPOSAL_YEARS} yr`:`FCC limit: ${r.FCC_DISPOSAL_YEARS} years`}),(0,t.jsx)("line",{x1:f.l,x2:m-f.r,y1:g(200),y2:g(200),className:o.default.reentry}),(0,t.jsx)("text",{x:f.l+6,y:g(200)+16,className:o.default.axis,children:d?"re-entry":"re-entry below about 200 km"}),(0,t.jsx)("path",{d:`${A(e.disposal.path,"apogeeKm")}`,fill:"none",stroke:"#ffbd4a",strokeWidth:1.5,strokeDasharray:"5 4",opacity:.8}),w.map(e=>(0,t.jsx)("path",{d:A(e.path,"perigeeKm"),fill:"none",stroke:e.color,strokeWidth:2.2},e.key)),w.map(e=>{let a=((e,t)=>{if(t>=e[e.length-1].years)return null;let a=1;for(;a<e.length-1&&e[a].years<t;)a++;let r=e[a-1],o=e[a],i=(t-r.years)/Math.max(1e-12,o.years-r.years);return{perigeeKm:r.perigeeKm+(o.perigeeKm-r.perigeeKm)*i,apogeeKm:r.apogeeKm+(o.apogeeKm-r.apogeeKm)*i}})(e.path,M);return a?(0,t.jsx)("circle",{cx:_(M),cy:g(Math.max(100,a.perigeeKm)),r:5,fill:e.color,stroke:"#040a14",strokeWidth:2},e.key):(0,t.jsx)("text",{x:_(e.years),y:g(100)-8,textAnchor:"middle",className:o.default.reentryMark,fill:e.color,children:"×"},e.key)}),(0,t.jsx)("line",{x1:_(M),x2:_(M),y1:f.t,y2:h-f.b,className:o.default.cursor})]}),(0,t.jsxs)("div",{className:o.default.hud,"aria-hidden":"true",children:[(0,t.jsxs)("span",{children:["End of life · ",u(M)," after the mission"]}),w.map(e=>(0,t.jsxs)("span",{children:[(0,t.jsx)("i",{style:{background:e.color},className:o.default.swatch}),e.label,": re-enters after ",u(e.years)]},e.key))]})]})},"niceStep",0,s,"useWidth",0,c])},91586,e=>{e.v({bad:"scenario-bar-module__XyOUpa__bad",bar:"scenario-bar-module__XyOUpa__bar",chips:"scenario-bar-module__XyOUpa__chips",note:"scenario-bar-module__XyOUpa__note",ok:"scenario-bar-module__XyOUpa__ok",panel:"scenario-bar-module__XyOUpa__panel",panelBody:"scenario-bar-module__XyOUpa__panelBody",warn:"scenario-bar-module__XyOUpa__warn"})},2203,e=>{"use strict";var t=e.i(43476),a=e.i(91586);e.s(["EngineerPanel",0,function({children:e,summary:r="Every parameter, for engineers"}){return(0,t.jsxs)("details",{className:a.default.panel,children:[(0,t.jsx)("summary",{children:r}),(0,t.jsx)("div",{className:a.default.panelBody,children:e})]})},"ScenarioBar",0,function({options:e,value:r,onChange:o,label:i="Scenarios"}){let l=e.find(e=>e.id===r)??null;return(0,t.jsxs)("div",{className:a.default.bar,children:[(0,t.jsx)("div",{className:a.default.chips,role:"group","aria-label":i,children:e.map(e=>(0,t.jsxs)("button",{type:"button","aria-pressed":e.id===r,onClick:()=>o(e.id),children:[(0,t.jsx)("i",{className:"bad"===e.tone?a.default.bad:"warn"===e.tone?a.default.warn:a.default.ok,"aria-hidden":"true"}),e.label]},e.id))}),(0,t.jsx)("p",{className:a.default.note,"aria-live":"polite",children:l?l.note:"Your own settings: open the parameters below to see them all."})]})}])},80385,e=>{e.v({busy:"formation-lab-module__LzoGmq__busy",encounters:"formation-lab-module__LzoGmq__encounters",failGrid:"formation-lab-module__LzoGmq__failGrid",fallback:"formation-lab-module__LzoGmq__fallback",gl:"formation-lab-module__LzoGmq__gl",hud:"formation-lab-module__LzoGmq__hud",hudExtra:"formation-lab-module__LzoGmq__hudExtra",legend:"formation-lab-module__LzoGmq__legend",overlay:"formation-lab-module__LzoGmq__overlay",segment:"formation-lab-module__LzoGmq__segment",trailKey:"formation-lab-module__LzoGmq__trailKey",view:"formation-lab-module__LzoGmq__view",viewControls:"formation-lab-module__LzoGmq__viewControls"})},86193,57435,e=>{"use strict";let t=`#version 300 es
in vec2 aPos;
out vec2 vNdc;
void main() { vNdc = aPos; gl_Position = vec4(aPos, 0.0, 1.0); }`,a=`#version 300 es
precision highp float;
uniform vec3 uCam;
uniform vec3 uRight;
uniform vec3 uUp;
uniform vec3 uBack;
uniform vec2 uTan;
uniform vec3 uSun;
uniform mat3 uToEarth;
uniform mat3 uToInertial;
uniform sampler2D uDay;
uniform sampler2D uNight;
uniform float uTex;
uniform float uPixAngle;
uniform float uAmbient;
in vec2 vNdc;
out vec4 outColor;
const float PI = 3.14159265;

float hash(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

vec3 stars(vec3 d) {
  vec3 e = uToInertial * d;
  vec3 col = vec3(0.0);
  for (int layer = 0; layer < 2; layer++) {
    float scale = layer == 0 ? 120.0 : 260.0;
    vec3 g = e * scale;
    vec3 cell = floor(g);
    float h = hash(cell + float(layer) * 31.0);
    if (h > (layer == 0 ? 0.985 : 0.992)) {
      vec3 centre = normalize(cell + 0.5 + 0.35 * (vec3(hash(cell + 1.3), hash(cell + 2.7), hash(cell + 4.1)) - 0.5));
      float ang = acos(clamp(dot(normalize(e), centre), -1.0, 1.0));
      float size = 0.0016 + 0.001 * float(layer == 0);
      float b = smoothstep(size, 0.0, ang) * (0.35 + 0.65 * hash(cell + 9.1));
      vec3 tint = mix(vec3(0.75, 0.82, 1.0), vec3(1.0, 0.86, 0.7), hash(cell + 5.5));
      col += tint * b * (layer == 0 ? 0.9 : 0.45);
    }
  }
  return col;
}

void main() {
  vec3 d = normalize(uRight * vNdc.x * uTan.x + uUp * vNdc.y * uTan.y - uBack);
  float b = dot(uCam, d);
  float c2 = dot(uCam, uCam);
  float q = c2 - b * b;              // squared distance of the ray's closest approach to the centre
  float camDist = sqrt(c2);
  float ahead = step(0.0, -b);       // the closest approach lies in front of the camera
  float rClose = sqrt(max(q, 0.0));
  float edgeScale = max(sqrt(max(c2 - 1.0, 1e-6)) * uPixAngle, 1e-6);
  float cover = ahead * clamp((1.0 - rClose) / edgeScale + 0.5, 0.0, 1.0);
  if (c2 < 1.0) cover = 1.0;

  // Space: stars, the Sun and the atmosphere's glow beyond the limb.
  float sunDot = dot(d, uSun);
  vec3 space = stars(d) * (1.0 - smoothstep(0.995, 1.0, sunDot));
  space += vec3(1.0, 0.95, 0.85) * (pow(max(sunDot, 0.0), 6000.0) * 6.0 + pow(max(sunDot, 0.0), 300.0) * 0.35 + pow(max(sunDot, 0.0), 12.0) * 0.04);
  vec3 tangent = normalize(uCam + d * max(-b, 0.0));
  float tLit = smoothstep(-0.25, 0.3, dot(tangent, uSun));
  float glow = ahead * exp(-max(rClose - 1.0, 0.0) / 0.014) * (1.0 - cover);
  vec3 glowCol = mix(vec3(1.0, 0.5, 0.2), vec3(0.32, 0.6, 1.0), smoothstep(-0.05, 0.35, dot(tangent, uSun)));
  space += glowCol * glow * tLit * 0.9;

  vec3 surface = vec3(0.0);
  if (cover > 0.0) {
    float disc = b * b - (c2 - 1.0);
    float t = -b - sqrt(max(disc, 0.0));
    vec3 p = normalize(uCam + d * max(t, 0.0));
    if (rClose > 1.0) p = tangent;
    float mu = dot(p, uSun);
    vec3 e = uToEarth * p;
    vec2 uv = vec2(atan(e.y, e.x) / (2.0 * PI) + 0.5, 0.5 - asin(clamp(e.z, -1.0, 1.0)) / PI);
    // Texture derivatives that ignore the jump at the date line, so mipmapping leaves no seam.
    vec2 uvAlt = vec2(fract(uv.x + 0.5) - 0.5, uv.y);
    vec2 dx = dFdx(uv), dy = dFdy(uv);
    vec2 dxAlt = dFdx(uvAlt), dyAlt = dFdy(uvAlt);
    if (abs(dxAlt.x) < abs(dx.x)) dx.x = dxAlt.x;
    if (abs(dyAlt.x) < abs(dy.x)) dy.x = dyAlt.x;
    vec3 day = mix(vec3(0.07, 0.2, 0.36), textureGrad(uDay, uv, dx, dy).rgb, uTex);
    float lightsRaw = textureGrad(uNight, uv, dx, dy).r * uTex;
    vec3 albedo = day * day;
    vec3 sunColor = mix(vec3(1.0, 0.5, 0.24), vec3(1.0), smoothstep(0.0, 0.3, mu));
    float twilight = smoothstep(-0.1, 0.0, mu) * (1.0 - smoothstep(0.0, 0.12, mu));
    vec3 col = albedo * (max(mu, 0.0) * 1.55 * sunColor + twilight * 0.03 + uAmbient);
    float water = smoothstep(0.02, 0.3, day.b - max(day.r, day.g));
    vec3 h = normalize(uSun - d);
    col += vec3(1.0, 0.9, 0.75) * pow(max(dot(p, h), 0.0), 120.0) * water * smoothstep(0.0, 0.15, mu) * 0.3;
    float lights = pow(clamp((lightsRaw - 0.3) / 0.55, 0.0, 1.0), 1.5);
    col += vec3(1.0, 0.62, 0.28) * lights * (1.0 - smoothstep(-0.12, 0.02, mu)) * 0.5;
    // Atmosphere: haze toward the limb, blue by day, warm at the terminator.
    float view = clamp(dot(p, -d), 0.0, 1.0);
    float haze = pow(1.0 - view, 3.0);
    float lit = smoothstep(-0.2, 0.35, mu);
    vec3 sky = mix(vec3(0.85, 0.36, 0.1), vec3(0.16, 0.38, 0.95), smoothstep(-0.02, 0.3, mu));
    col = mix(col, sky * (0.03 + 0.97 * lit), haze * (0.25 + 0.6 * lit));
    surface = sqrt(max(col, 0.0));
  }
  outColor = vec4(mix(space, surface, cover), 1.0);
}`,r=`#version 300 es
in vec3 aPos;
in vec3 aNormal;
in vec2 aUv;
in float aPart;
in vec3 iPos;
in vec3 iAxX;
in vec3 iAxY;
in vec3 iAxZ;
in vec4 iTint;
uniform mat4 uView;
uniform mat4 uProj;
out vec3 vNormal;
out vec3 vWorld;
out vec2 vUv;
out float vPart;
out vec4 vTint;
void main() {
  mat3 R = mat3(iAxX, iAxY, iAxZ);
  vec3 w = iPos + R * aPos;
  vWorld = w;
  vNormal = R * aNormal;
  vUv = aUv;
  vPart = aPart;
  vTint = iTint;
  gl_Position = uProj * uView * vec4(w, 1.0);
}`,o=`#version 300 es
precision highp float;
uniform vec3 uSun;
uniform float uLit;
uniform vec3 uEarthDir;
uniform float uEarthshine;
uniform vec3 uCamPos;
uniform float uHeat[16];
uniform int uHeatN;
in vec3 vNormal;
in vec3 vWorld;
in vec2 vUv;
in float vPart;
in vec4 vTint;
out vec4 outColor;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

/** A thermal-camera scale: deep violet (cold) through red and orange to pale yellow (hot). */
vec3 thermal(float h) {
  h = clamp(h, 0.0, 1.0) * 4.0;
  vec3 c0 = vec3(0.12, 0.08, 0.36);
  vec3 c1 = vec3(0.58, 0.12, 0.5);
  vec3 c2 = vec3(0.93, 0.33, 0.2);
  vec3 c3 = vec3(1.0, 0.7, 0.22);
  vec3 c4 = vec3(1.0, 0.95, 0.78);
  if (h < 1.0) return mix(c0, c1, h);
  if (h < 2.0) return mix(c1, c2, h - 1.0);
  if (h < 3.0) return mix(c2, c3, h - 2.0);
  return mix(c3, c4, h - 3.0);
}

/** 1 inside a cell, falling to 0 on its edges, antialiased with the pixel footprint. */
float cells(vec2 uv, vec2 count) {
  vec2 g = uv * count;
  vec2 fw = max(fwidth(g), vec2(1e-4));
  vec2 f = fract(g);
  vec2 edge = smoothstep(vec2(0.0), fw * 1.2, f) * smoothstep(vec2(0.0), fw * 1.2, 1.0 - f);
  // Fade the pattern out when cells are smaller than a few pixels.
  float fade = 1.0 - smoothstep(0.25, 0.6, max(fw.x, fw.y));
  return mix(1.0, edge.x * edge.y, fade);
}

void main() {
  vec3 n = normalize(vNormal);
  if (!gl_FrontFacing) n = -n;
  vec3 v = normalize(uCamPos - vWorld);
  vec3 heat = vec3(-1.0);
  vec3 base;
  float shine;
  float spec;
  vec2 fwUv = fwidth(vUv);
  float frame = 1.0 - (smoothstep(0.012, 0.012 + fwUv.x * 1.5, vUv.x) * smoothstep(0.012, 0.012 + fwUv.x * 1.5, 1.0 - vUv.x) * smoothstep(0.012, 0.012 + fwUv.y * 1.5, vUv.y) * smoothstep(0.012, 0.012 + fwUv.y * 1.5, 1.0 - vUv.y));
  if (vPart < 0.5) {
    // Bus: gold multilayer insulation with darker seams.
    float seams = cells(vUv, vec2(3.0, 3.0));
    base = mix(vec3(0.28, 0.2, 0.08), vec3(0.66, 0.48, 0.17), seams);
    shine = 30.0;
    spec = 0.55;
  } else if (vPart < 1.5) {
    if (gl_FrontFacing) {
      // Solar cells: dark blue glass in strings, with a light frame.
      vec2 id = floor(vUv * vec2(18.0, 18.0));
      float tone = 0.85 + 0.3 * hash(id);
      float cell = cells(vUv, vec2(18.0, 18.0));
      float panel = cells(vUv, vec2(3.0, 3.0));
      base = mix(vec3(0.42, 0.45, 0.5), vec3(0.03, 0.06, 0.15) * tone, cell * panel);
      base = mix(base, vec3(0.6, 0.62, 0.66), frame);
      shine = 160.0;
      spec = 0.85;
    } else {
      base = mix(vec3(0.55, 0.56, 0.58), vec3(0.7, 0.7, 0.72), frame);
      shine = 8.0;
      spec = 0.05;
    }
  } else {
    // Radiator: white paint over panels, or its temperatures in false colour.
    float panel = cells(vUv, vec2(1.0, 6.0));
    base = mix(vec3(0.62, 0.64, 0.66), vec3(0.88, 0.9, 0.92), panel);
    shine = 12.0;
    spec = 0.12;
    if (uHeatN > 0) {
      float x = clamp(vUv.y, 0.0, 0.9999) * float(uHeatN - 1);
      int i = int(floor(x));
      heat = thermal(mix(uHeat[i], uHeat[min(i + 1, uHeatN - 1)], fract(x))) * (0.78 + 0.22 * panel);
    }
  }
  base = mix(base, vTint.rgb, vTint.a * 0.55);
  float diff = max(dot(n, uSun), 0.0) * uLit;
  vec3 h = normalize(uSun + v);
  float s = pow(max(dot(n, h), 0.0), shine) * spec * uLit * step(0.0, dot(n, uSun));
  float earth = max(dot(n, uEarthDir), 0.0) * uEarthshine;
  // A little light scattered from the sky side keeps shaded faces readable.
  vec3 col = base * (diff * 1.05 + earth * vec3(0.55, 0.7, 1.0) + 0.06) + vec3(s);
  col += vTint.rgb * vTint.a * 0.35;
  // Temperatures are shown as a thermal camera would: the same in sunlight and in shadow.
  if (heat.x >= 0.0) col = mix(col, heat * heat, 0.88);
  outColor = vec4(sqrt(col), 1.0);
}`,i=`#version 300 es
in vec2 aCorner;
in vec3 iA;
in vec3 iB;
in vec4 iColA;
in vec4 iColB;
uniform mat4 uView;
uniform mat4 uProj;
uniform vec2 uViewport;
uniform float uWidth;
uniform vec3 uEarth;
uniform float uEarthR;
uniform vec3 uCamPos;
out vec4 vColor;
out float vSide;

float hidden(vec3 p) {
  // 1 if the Earth blocks the line of sight from the camera to p.
  vec3 d = p - uCamPos;
  float len = length(d);
  d /= len;
  vec3 oc = uCamPos - uEarth;
  float b = dot(oc, d);
  float c = dot(oc, oc) - uEarthR * uEarthR;
  float disc = b * b - c;
  if (disc <= 0.0) return 0.0;
  float t = -b - sqrt(disc);
  return (t > 0.0 && t < len) ? 1.0 : 0.0;
}

void main() {
  vec4 a = uProj * uView * vec4(iA, 1.0);
  vec4 b = uProj * uView * vec4(iB, 1.0);
  // Keep both ends in front of the camera.
  float nearW = 1e-3;
  if (a.w < nearW) a = mix(a, b, (nearW - a.w) / (b.w - a.w + 1e-9));
  if (b.w < nearW) b = mix(b, a, (nearW - b.w) / (a.w - b.w + 1e-9));
  vec2 sa = a.xy / a.w * uViewport * 0.5;
  vec2 sb = b.xy / b.w * uViewport * 0.5;
  vec2 dir = sb - sa;
  float l = length(dir);
  dir = l > 1e-6 ? dir / l : vec2(1.0, 0.0);
  vec2 normal = vec2(-dir.y, dir.x);
  vec4 p = aCorner.x < 0.5 ? a : b;
  vec2 off = normal * aCorner.y * uWidth * 0.5 / (uViewport * 0.5) * p.w;
  gl_Position = vec4(p.xy + off, p.z, p.w);
  vec4 col = aCorner.x < 0.5 ? iColA : iColB;
  col.a *= 1.0 - hidden(aCorner.x < 0.5 ? iA : iB);
  vColor = col;
  vSide = aCorner.y;
}`,l=`#version 300 es
precision highp float;
in vec4 vColor;
in float vSide;
out vec4 outColor;
void main() {
  float edge = 1.0 - smoothstep(0.55, 1.0, abs(vSide));
  outColor = vec4(vColor.rgb, vColor.a * edge);
}`,n=`#version 300 es
in vec2 aCorner;
in vec3 iPos;
in float iRadius;
in vec4 iColor;
uniform mat4 uView;
uniform mat4 uProj;
uniform vec2 uViewport;
uniform vec3 uEarth;
uniform float uEarthR;
uniform vec3 uCamPos;
out vec4 vColor;
out vec2 vOff;
void main() {
  vec4 c = uProj * uView * vec4(iPos, 1.0);
  vec2 off = aCorner * iRadius / (uViewport * 0.5) * c.w;
  gl_Position = vec4(c.xy + off, c.z, c.w);
  vec3 d = iPos - uCamPos;
  float len = length(d);
  d /= len;
  vec3 oc = uCamPos - uEarth;
  float b = dot(oc, d);
  float cc = dot(oc, oc) - uEarthR * uEarthR;
  float disc = b * b - cc;
  float t = -b - sqrt(max(disc, 0.0));
  float hide = (disc > 0.0 && t > 0.0 && t < len) ? 1.0 : 0.0;
  vColor = vec4(iColor.rgb, iColor.a * (1.0 - hide));
  vOff = aCorner;
}`,s=`#version 300 es
precision highp float;
in vec4 vColor;
in vec2 vOff;
out vec4 outColor;
void main() {
  float r = length(vOff);
  float core = 1.0 - smoothstep(0.25, 0.4, r);
  float halo = exp(-r * r * 6.0) * 0.6;
  float a = max(core, halo) * smoothstep(1.0, 0.85, r);
  outColor = vec4(vColor.rgb * (0.6 + 0.4 * core), vColor.a * a);
}`;function u(e,t,a){let r=e.createShader(t);if(e.shaderSource(r,a),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r);throw e.deleteShader(r),Error(`shader: ${t}`)}return r}function c(e,t,a){let r=e.createProgram();if(e.attachShader(r,u(e,e.VERTEX_SHADER,t)),e.attachShader(r,u(e,e.FRAGMENT_SHADER,a)),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw Error(`link: ${e.getProgramInfoLog(r)}`);let o=new Map;return{p:r,u:t=>(o.has(t)||o.set(t,e.getUniformLocation(r,t)),o.get(t)??null),a:t=>e.getAttribLocation(r,t)}}e.s(["createClusterRenderer",0,function(e,u,m,d){let h,f,p,v,_=e.getContext("webgl2",{antialias:!0,alpha:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!0});if(!_)return null;try{h=c(_,t,a),f=c(_,r,o),p=c(_,i,l),v=c(_,n,s)}catch{return null}let x=_.createVertexArray();_.bindVertexArray(x);let g=_.createBuffer();_.bindBuffer(_.ARRAY_BUFFER,g),_.bufferData(_.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),_.STATIC_DRAW),_.enableVertexAttribArray(h.a("aPos")),_.vertexAttribPointer(h.a("aPos"),2,_.FLOAT,!1,0,0);let y=function(){let e=[],t=(t,a,r,o,i)=>{for(let[l,n]of[[0,0],[1,0],[1,1],[0,0],[1,1],[0,1]])e.push(t[0]+a[0]*l+r[0]*n,t[1]+a[1]*l+r[1]*n,t[2]+a[2]*l+r[2]*n,o[0],o[1],o[2],l,n,i)};for(let[e,a,r,o]of[[[.5,-.5,-.5],[0,1,0],[0,0,1],[1,0,0]],[[-.5,-.5,.5],[0,1,0],[0,0,-1],[-1,0,0]],[[-.5,.5,-.5],[1,0,0],[0,0,1],[0,1,0]],[[-.5,-.5,.5],[1,0,0],[0,0,-1],[0,-1,0]],[[-.5,-.5,.5],[1,0,0],[0,1,0],[0,0,1]],[[-.5,.5,-.5],[1,0,0],[0,-1,0],[0,0,-1]]])t(e,a,r,o,0);return t([-.5,-.5,0],[1,0,0],[0,1,0],[0,0,1],1),t([0,-.5,0],[0,1,0],[0,0,-1],[1,0,0],2),{data:new Float32Array(e),count:e.length/9}}(),b=_.createVertexArray();_.bindVertexArray(b);let M=_.createBuffer();_.bindBuffer(_.ARRAY_BUFFER,M),_.bufferData(_.ARRAY_BUFFER,y.data,_.STATIC_DRAW);let A=(e,t,a,r,o,i=0)=>{let l=e.a(t);l<0||(_.enableVertexAttribArray(l),_.vertexAttribPointer(l,a,_.FLOAT,!1,o,r),_.vertexAttribDivisor(l,i))};A(f,"aPos",3,0,36),A(f,"aNormal",3,12,36),A(f,"aUv",2,24,36),A(f,"aPart",1,32,36);let w=_.createBuffer();_.bindBuffer(_.ARRAY_BUFFER,w),A(f,"iPos",3,0,64,1),A(f,"iAxX",3,12,64,1),A(f,"iAxY",3,24,64,1),A(f,"iAxZ",3,36,64,1),A(f,"iTint",4,48,64,1);let P=_.createVertexArray();_.bindVertexArray(P);let E=_.createBuffer();_.bindBuffer(_.ARRAY_BUFFER,E),_.bufferData(_.ARRAY_BUFFER,new Float32Array([0,-1,1,-1,1,1,0,-1,1,1,0,1]),_.STATIC_DRAW),A(p,"aCorner",2,0,8);let R=_.createBuffer(),S=_.createBuffer();_.bindBuffer(_.ARRAY_BUFFER,R),A(p,"iA",3,0,24,1),A(p,"iB",3,12,24,1),_.bindBuffer(_.ARRAY_BUFFER,S),A(p,"iColA",4,0,32,1),A(p,"iColB",4,16,32,1);let K=_.createVertexArray();_.bindVertexArray(K);let C=_.createBuffer();_.bindBuffer(_.ARRAY_BUFFER,C),_.bufferData(_.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),_.STATIC_DRAW),A(v,"aCorner",2,0,8);let T=_.createBuffer();_.bindBuffer(_.ARRAY_BUFFER,T),A(v,"iPos",3,0,32,1),A(v,"iRadius",1,12,32,1),A(v,"iColor",4,16,32,1),_.bindVertexArray(null);let F=[_.createTexture(),_.createTexture()],D=0,k=!1;F.forEach(e=>{_.bindTexture(_.TEXTURE_2D,e),_.texImage2D(_.TEXTURE_2D,0,_.RGBA,1,1,0,_.RGBA,_.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]))}),[u,m].forEach((e,t)=>{let a=new Image;a.decoding="async",a.onload=()=>{k||(_.bindTexture(_.TEXTURE_2D,F[t]),_.texImage2D(_.TEXTURE_2D,0,_.RGB,_.RGB,_.UNSIGNED_BYTE,a),_.generateMipmap(_.TEXTURE_2D),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_S,_.REPEAT),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_T,_.CLAMP_TO_EDGE),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MIN_FILTER,_.LINEAR_MIPMAP_LINEAR),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MAG_FILTER,_.LINEAR),2===(D+=1)&&d?.())},a.src=e});let L=new Float32Array(16),q=new Float32Array(16),I=[1,1],N=e=>new Float32Array([e[0],e[3],e[6],e[1],e[4],e[7],e[2],e[5],e[8]]);return{canvas:e,render:t=>{let a;if(k)return;(e.width!==t.width||e.height!==t.height)&&(e.width=t.width,e.height=t.height),_.viewport(0,0,t.width,t.height);let r=t.width/t.height,o=Math.tan(t.fovY/2),i=o*r,[l,n,s,u]=[t.camRight,t.camUp,t.camBack,t.camPos],c=new Float32Array([l[0],n[0],s[0],0,l[1],n[1],s[1],0,l[2],n[2],s[2],0,-(l[0]*u[0]+l[1]*u[1]+l[2]*u[2]),-(n[0]*u[0]+n[1]*u[1]+n[2]*u[2]),-(s[0]*u[0]+s[1]*u[1]+s[2]*u[2]),1]),m=Math.hypot(u[0],u[1],u[2]),d=Math.max(.05,.02*m),g=50*m+5e4,y=new Float32Array([1/i,0,0,0,0,1/o,0,0,0,0,-(g+d)/(g-d),-1,0,0,-2*g*d/(g-d),0]);L=c,q=y,I=[t.width,t.height],_.disable(_.DEPTH_TEST),_.disable(_.BLEND),_.useProgram(h.p),_.bindVertexArray(x);let M=[(u[0]-t.earthCentre[0])/6378137,(u[1]-t.earthCentre[1])/6378137,(u[2]-t.earthCentre[2])/6378137];_.uniform3fv(h.u("uCam"),M),_.uniform3fv(h.u("uRight"),l),_.uniform3fv(h.u("uUp"),n),_.uniform3fv(h.u("uBack"),s),_.uniform2f(h.u("uTan"),i,o),_.uniform3fv(h.u("uSun"),t.sun),_.uniformMatrix3fv(h.u("uToEarth"),!1,N(t.toEarth)),_.uniformMatrix3fv(h.u("uToInertial"),!1,N(t.toInertial)),_.uniform1f(h.u("uTex"),+(2===D)),_.uniform1f(h.u("uPixAngle"),2*o/t.height),_.uniform1f(h.u("uAmbient"),t.ambient??.004),_.activeTexture(_.TEXTURE0),_.bindTexture(_.TEXTURE_2D,F[0]),_.uniform1i(h.u("uDay"),0),_.activeTexture(_.TEXTURE1),_.bindTexture(_.TEXTURE_2D,F[1]),_.uniform1i(h.u("uNight"),1),_.drawArrays(_.TRIANGLES,0,3),_.clear(_.DEPTH_BUFFER_BIT),_.enable(_.DEPTH_TEST),_.depthFunc(_.LEQUAL);let A=(a=Math.hypot(...t.earthCentre)||1,[t.earthCentre[0]/a,t.earthCentre[1]/a,t.earthCentre[2]/a]),E=.22*Math.max(0,.5-.5*(t.sun[0]*A[0]+t.sun[1]*A[1]+t.sun[2]*A[2]));if(!t.asPoints&&t.count>0){_.useProgram(f.p),_.bindVertexArray(b),_.uniformMatrix4fv(f.u("uView"),!1,c),_.uniformMatrix4fv(f.u("uProj"),!1,y),_.uniform3fv(f.u("uSun"),t.sun),_.uniform1f(f.u("uLit"),t.lit),_.uniform3fv(f.u("uEarthDir"),A),_.uniform1f(f.u("uEarthshine"),E),_.uniform3fv(f.u("uCamPos"),u);let e=t.radiatorHeat,a=e?Math.min(16,e.length):0;if(_.uniform1i(f.u("uHeatN"),a),e&&a>0){let t=new Float32Array(16);t.set(e.subarray(0,a)),_.uniform1fv(f.u("uHeat"),t)}let r=[{first:0,count:36,scale:()=>[t.shape.bus,t.shape.bus,t.shape.bus],offset:[0,0,0]},{first:36,count:6,scale:()=>[t.shape.arraySide,t.shape.arraySide,1],offset:[0,0,.5*t.shape.bus+.05]},{first:42,count:6,scale:()=>[1,t.shape.radiatorLength,t.shape.radiatorDepth],offset:[0,0,-(.5*t.shape.bus)]}],o=new Float32Array(16*t.count);for(let e of r){for(let a=0;a<t.count;a++){let r=e.scale(a),i=t.axes.subarray(9*a,9*a+9),l=16*a,n=t.nodes[3*a]+i[6]*e.offset[2]+i[0]*e.offset[0]+i[3]*e.offset[1],s=t.nodes[3*a+1]+i[7]*e.offset[2]+i[1]*e.offset[0]+i[4]*e.offset[1],u=t.nodes[3*a+2]+i[8]*e.offset[2]+i[2]*e.offset[0]+i[5]*e.offset[1];o[l]=n,o[l+1]=s,o[l+2]=u;for(let e=0;e<3;e++)o[l+3+e]=i[e]*r[0],o[l+6+e]=i[3+e]*r[1],o[l+9+e]=i[6+e]*r[2];o[l+12]=t.tints[4*a],o[l+13]=t.tints[4*a+1],o[l+14]=t.tints[4*a+2],o[l+15]=t.tints[4*a+3]}_.bindBuffer(_.ARRAY_BUFFER,w),_.bufferData(_.ARRAY_BUFFER,o,_.DYNAMIC_DRAW),_.drawArraysInstanced(_.TRIANGLES,e.first,e.count,t.count)}}for(let e of(_.enable(_.BLEND),_.blendFunc(_.SRC_ALPHA,_.ONE_MINUS_SRC_ALPHA),_.depthMask(!1),_.useProgram(p.p),_.bindVertexArray(P),_.uniformMatrix4fv(p.u("uView"),!1,c),_.uniformMatrix4fv(p.u("uProj"),!1,y),_.uniform2f(p.u("uViewport"),t.width,t.height),_.uniform3fv(p.u("uEarth"),t.earthCentre),_.uniform1f(p.u("uEarthR"),6378137),_.uniform3fv(p.u("uCamPos"),u),t.lines))e.count&&(_.uniform1f(p.u("uWidth"),e.widthPx),_.bindBuffer(_.ARRAY_BUFFER,R),_.bufferData(_.ARRAY_BUFFER,e.points.subarray(0,6*e.count),_.DYNAMIC_DRAW),_.bindBuffer(_.ARRAY_BUFFER,S),_.bufferData(_.ARRAY_BUFFER,e.colors.subarray(0,8*e.count),_.DYNAMIC_DRAW),_.drawArraysInstanced(_.TRIANGLES,0,6,e.count));t.markerCount>0&&(_.useProgram(v.p),_.bindVertexArray(K),_.uniformMatrix4fv(v.u("uView"),!1,c),_.uniformMatrix4fv(v.u("uProj"),!1,y),_.uniform2f(v.u("uViewport"),t.width,t.height),_.uniform3fv(v.u("uEarth"),t.earthCentre),_.uniform1f(v.u("uEarthR"),6378137),_.uniform3fv(v.u("uCamPos"),u),_.bindBuffer(_.ARRAY_BUFFER,T),_.bufferData(_.ARRAY_BUFFER,t.markers.subarray(0,8*t.markerCount),_.DYNAMIC_DRAW),_.blendFunc(_.SRC_ALPHA,_.ONE),_.drawArraysInstanced(_.TRIANGLES,0,6,t.markerCount)),_.depthMask(!0),_.disable(_.BLEND),_.bindVertexArray(null)},project:t=>{let a=L,r=q,o=a[0]*t[0]+a[4]*t[1]+a[8]*t[2]+a[12],i=a[1]*t[0]+a[5]*t[1]+a[9]*t[2]+a[13],l=a[2]*t[0]+a[6]*t[1]+a[10]*t[2]+a[14];if(l>-.001)return null;let n=r[0]*o,s=r[5]*i,u=-l,c=I[0]/Math.max(1,e.clientWidth||I[0]);return[(n/u*.5+.5)*I[0]/c,(-s/u*.5+.5)*I[1]/c]},dispose(){k=!0,_.getExtension("WEBGL_lose_context")?.loseContext()}}}],86193);let m=null;e.s(["canvasMono",0,function(){if(m)return m;if("u"<typeof document)return"monospace";let e=getComputedStyle(document.documentElement),t=e.getPropertyValue("--font-plex-mono").trim()||e.getPropertyValue("--font-mono").trim();return m=t?`${t}, monospace`:"monospace"}],57435)}]);