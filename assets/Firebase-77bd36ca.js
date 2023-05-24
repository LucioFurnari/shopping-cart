/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},zu=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],u=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(u>>10)),t[s++]=String.fromCharCode(56320+(u&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},To={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,h=r>>2,l=(r&3)<<4|a>>4;let p=(a&15)<<2|c>>6,m=c&63;u||(m=64,o||(p=64)),s.push(n[h],n[l],n[p],n[m])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Eo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):zu(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const l=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||c==null||l==null)throw new Hu;const p=r<<2|a>>4;if(s.push(p),c!==64){const m=a<<4&240|c>>2;if(s.push(m),l!==64){const C=c<<6&192|l;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Hu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ku=function(e){const t=Eo(e);return To.encodeByteArray(t,!0)},En=function(e){return Ku(e).replace(/\./g,"")},Gu=function(e){try{return To.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=()=>Qu().__FIREBASE_DEFAULTS__,Xu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Yu=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Gu(e[1]);return t&&JSON.parse(t)},Io=()=>{try{return Wu()||Xu()||Yu()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ju=e=>{var t,n;return(n=(t=Io())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},_o=e=>{const t=Ju(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Zu=()=>{var e;return(e=Io())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[En(JSON.stringify(n)),En(JSON.stringify(o)),a].join(".")}function ec(){try{return typeof indexedDB=="object"}catch{return!1}}function nc(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="FirebaseError";class Kt extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=sc,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,So.prototype.create)}}class So{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?ic(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Kt(i,a,s)}}function ic(e,t){return e.replace(rc,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const rc=/\{\$([^}]+)}/g;function Ns(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(cr(r)&&cr(o)){if(!Ns(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function cr(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){return e&&e._delegate?e._delegate:e}class ae{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new tc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(uc(t))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=Mt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Mt){return this.instances.has(t)}getOptions(t=Mt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ac(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Mt){return this.component?this.component.multipleInstances?t:Mt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ac(e){return e===Mt?void 0:e}function uc(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new oc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(k||(k={}));const hc={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},lc=k.INFO,dc={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},fc=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=dc[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ao{constructor(t){this.name=t,this._logLevel=lc,this._logHandler=fc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in k))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?hc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...t),this._logHandler(this,k.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...t),this._logHandler(this,k.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,k.INFO,...t),this._logHandler(this,k.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,k.WARN,...t),this._logHandler(this,k.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...t),this._logHandler(this,k.ERROR,...t)}}const pc=(e,t)=>t.some(n=>e instanceof n);let hr,lr;function gc(){return hr||(hr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mc(){return lr||(lr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Do=new WeakMap,ks=new WeakMap,No=new WeakMap,cs=new WeakMap,hi=new WeakMap;function yc(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(At(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Do.set(n,e)}).catch(()=>{}),hi.set(t,e),t}function vc(e){if(ks.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});ks.set(e,t)}let bs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ks.get(e);if(t==="objectStoreNames")return e.objectStoreNames||No.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function wc(e){bs=e(bs)}function Ec(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(hs(this),t,...n);return No.set(s,t.sort?t.sort():[t]),At(s)}:mc().includes(e)?function(...t){return e.apply(hs(this),t),At(Do.get(this))}:function(...t){return At(e.apply(hs(this),t))}}function Tc(e){return typeof e=="function"?Ec(e):(e instanceof IDBTransaction&&vc(e),pc(e,gc())?new Proxy(e,bs):e)}function At(e){if(e instanceof IDBRequest)return yc(e);if(cs.has(e))return cs.get(e);const t=Tc(e);return t!==e&&(cs.set(e,t),hi.set(t,e)),t}const hs=e=>hi.get(e);function Ic(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=At(o);return s&&o.addEventListener("upgradeneeded",u=>{s(At(o.result),u.oldVersion,u.newVersion,At(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{r&&u.addEventListener("close",()=>r()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const _c=["get","getKey","getAll","getAllKeys","count"],Cc=["put","add","delete","clear"],ls=new Map;function dr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ls.get(t))return ls.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=Cc.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||_c.includes(n)))return;const r=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return ls.set(t,r),r}wc(e=>({...e,get:(t,n,s)=>dr(t,n)||e.get(t,n,s),has:(t,n)=>!!dr(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ac(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ac(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Rs="@firebase/app",fr="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new Ao("@firebase/app"),Dc="@firebase/app-compat",Nc="@firebase/analytics-compat",kc="@firebase/analytics",bc="@firebase/app-check-compat",Rc="@firebase/app-check",xc="@firebase/auth",Oc="@firebase/auth-compat",Mc="@firebase/database",Lc="@firebase/database-compat",Pc="@firebase/functions",Fc="@firebase/functions-compat",Vc="@firebase/installations",Uc="@firebase/installations-compat",$c="@firebase/messaging",Bc="@firebase/messaging-compat",jc="@firebase/performance",qc="@firebase/performance-compat",zc="@firebase/remote-config",Hc="@firebase/remote-config-compat",Kc="@firebase/storage",Gc="@firebase/storage-compat",Qc="@firebase/firestore",Wc="@firebase/firestore-compat",Xc="firebase",Yc="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="[DEFAULT]",Jc={[Rs]:"fire-core",[Dc]:"fire-core-compat",[kc]:"fire-analytics",[Nc]:"fire-analytics-compat",[Rc]:"fire-app-check",[bc]:"fire-app-check-compat",[xc]:"fire-auth",[Oc]:"fire-auth-compat",[Mc]:"fire-rtdb",[Lc]:"fire-rtdb-compat",[Pc]:"fire-fn",[Fc]:"fire-fn-compat",[Vc]:"fire-iid",[Uc]:"fire-iid-compat",[$c]:"fire-fcm",[Bc]:"fire-fcm-compat",[jc]:"fire-perf",[qc]:"fire-perf-compat",[zc]:"fire-rc",[Hc]:"fire-rc-compat",[Kc]:"fire-gcs",[Gc]:"fire-gcs-compat",[Qc]:"fire-fst",[Wc]:"fire-fst-compat","fire-js":"fire-js",[Xc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new Map,Os=new Map;function Zc(e,t){try{e.container.addComponent(t)}catch(n){Bt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Oe(e){const t=e.name;if(Os.has(t))return Bt.debug(`There were multiple attempts to register component ${t}.`),!1;Os.set(t,e);for(const n of Tn.values())Zc(n,e);return!0}function ko(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dt=new So("app","Firebase",th);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ae("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=Yc;function Ro(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:xs,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw Dt.create("bad-app-name",{appName:String(i)});if(n||(n=Zu()),!n)throw Dt.create("no-options");const r=Tn.get(i);if(r){if(Ns(n,r.options)&&Ns(s,r.config))return r;throw Dt.create("duplicate-app",{appName:i})}const o=new cc(i);for(const u of Os.values())o.addComponent(u);const a=new eh(n,s,o);return Tn.set(i,a),a}function xo(e=xs){const t=Tn.get(e);if(!t&&e===xs)return Ro();if(!t)throw Dt.create("no-app",{appName:e});return t}function Nt(e,t,n){var s;let i=(s=Jc[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Bt.warn(a.join(" "));return}Oe(new ae(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="firebase-heartbeat-database",sh=1,Me="firebase-heartbeat-store";let ds=null;function Oo(){return ds||(ds=Ic(nh,sh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Me)}}}).catch(e=>{throw Dt.create("idb-open",{originalErrorMessage:e.message})})),ds}async function ih(e){try{return(await Oo()).transaction(Me).objectStore(Me).get(Mo(e))}catch(t){if(t instanceof Kt)Bt.warn(t.message);else{const n=Dt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Bt.warn(n.message)}}}async function pr(e,t){try{const s=(await Oo()).transaction(Me,"readwrite");return await s.objectStore(Me).put(t,Mo(e)),s.done}catch(n){if(n instanceof Kt)Bt.warn(n.message);else{const s=Dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bt.warn(s.message)}}}function Mo(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=1024,oh=30*24*60*60*1e3;class ah{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ch(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=oh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=gr(),{heartbeatsToSend:n,unsentEntries:s}=uh(this._heartbeatsCache.heartbeats),i=En(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function gr(){return new Date().toISOString().substring(0,10)}function uh(e,t=rh){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),mr(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),mr(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ch{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ec()?nc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ih(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function mr(e){return En(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(e){Oe(new ae("platform-logger",t=>new Sc(t),"PRIVATE")),Oe(new ae("heartbeat",t=>new ah(t),"PRIVATE")),Nt(Rs,fr,e),Nt(Rs,fr,"esm2017"),Nt("fire-js","")}hh("");var lh="firebase",dh="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(lh,dh,"app");var fh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,li=li||{},E=fh||self;function In(){}function Fn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ze(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function ph(e){return Object.prototype.hasOwnProperty.call(e,fs)&&e[fs]||(e[fs]=++gh)}var fs="closure_uid_"+(1e9*Math.random()>>>0),gh=0;function mh(e,t,n){return e.call.apply(e.bind,arguments)}function yh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Z(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Z=mh:Z=yh,Z.apply(null,arguments)}function on(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function H(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function xt(){this.s=this.s,this.o=this.o}var vh=0;xt.prototype.s=!1;xt.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),vh!=0)&&ph(this)};xt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Lo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function di(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function yr(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Fn(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function tt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var wh=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{E.addEventListener("test",In,t),E.removeEventListener("test",In,t)}catch{}return e}();function _n(e){return/^[\s\xa0]*$/.test(e)}var vr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function ps(e,t){return e<t?-1:e>t?1:0}function Vn(){var e=E.navigator;return e&&(e=e.userAgent)?e:""}function pt(e){return Vn().indexOf(e)!=-1}function fi(e){return fi[" "](e),e}fi[" "]=In;function Po(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}var Eh=pt("Opera"),ue=pt("Trident")||pt("MSIE"),Fo=pt("Edge"),Ms=Fo||ue,Vo=pt("Gecko")&&!(Vn().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge"))&&!(pt("Trident")||pt("MSIE"))&&!pt("Edge"),Th=Vn().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge");function Uo(){var e=E.document;return e?e.documentMode:void 0}var Cn;t:{var gs="",ms=function(){var e=Vn();if(Vo)return/rv:([^\);]+)(\)|;)/.exec(e);if(Fo)return/Edge\/([\d\.]+)/.exec(e);if(ue)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Th)return/WebKit\/(\S+)/.exec(e);if(Eh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ms&&(gs=ms?ms[1]:""),ue){var ys=Uo();if(ys!=null&&ys>parseFloat(gs)){Cn=String(ys);break t}}Cn=gs}var Ih={};function _h(){return Po(Ih,9,function(){let e=0;const t=vr(String(Cn)).split("."),n=vr("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=ps(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||ps(i[2].length==0,r[2].length==0)||ps(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var Ls;if(E.document&&ue){var wr=Uo();Ls=wr||parseInt(Cn,10)||void 0}else Ls=void 0;var Ch=Ls;function Le(e,t){if(tt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Vo){t:{try{fi(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Sh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Le.$.h.call(this)}}H(Le,tt);var Sh={2:"touch",3:"pen",4:"mouse"};Le.prototype.h=function(){Le.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var He="closure_listenable_"+(1e6*Math.random()|0),Ah=0;function Dh(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.la=i,this.key=++Ah,this.fa=this.ia=!1}function Un(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function pi(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function $o(e){const t={};for(const n in e)t[n]=e[n];return t}const Er="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bo(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<Er.length;r++)n=Er[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function $n(e){this.src=e,this.g={},this.h=0}$n.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Fs(e,t,s,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Dh(t,this.src,r,!!s,i),t.ia=n,e.push(t)),t};function Ps(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=Lo(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Un(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Fs(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==s)return i}return-1}var gi="closure_lm_"+(1e6*Math.random()|0),vs={};function jo(e,t,n,s,i){if(s&&s.once)return zo(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)jo(e,t[r],n,s,i);return null}return n=vi(n),e&&e[He]?e.O(t,n,ze(s)?!!s.capture:!!s,i):qo(e,t,n,!1,s,i)}function qo(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=ze(i)?!!i.capture:!!i,a=yi(e);if(a||(e[gi]=a=new $n(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Nh(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)wh||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(Ko(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Nh(){function e(n){return t.call(e.src,e.listener,n)}const t=kh;return e}function zo(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)zo(e,t[r],n,s,i);return null}return n=vi(n),e&&e[He]?e.P(t,n,ze(s)?!!s.capture:!!s,i):qo(e,t,n,!0,s,i)}function Ho(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)Ho(e,t[r],n,s,i);else s=ze(s)?!!s.capture:!!s,n=vi(n),e&&e[He]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Fs(r,n,s,i),-1<n&&(Un(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=yi(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Fs(t,n,s,i)),(n=-1<e?t[e]:null)&&mi(n))}function mi(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[He])Ps(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Ko(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=yi(t))?(Ps(n,e),n.h==0&&(n.src=null,t[gi]=null)):Un(e)}}}function Ko(e){return e in vs?vs[e]:vs[e]="on"+e}function kh(e,t){if(e.fa)e=!0;else{t=new Le(t,this);var n=e.listener,s=e.la||e.src;e.ia&&mi(e),e=n.call(s,t)}return e}function yi(e){return e=e[gi],e instanceof $n?e:null}var ws="__closure_events_fn_"+(1e9*Math.random()>>>0);function vi(e){return typeof e=="function"?e:(e[ws]||(e[ws]=function(t){return e.handleEvent(t)}),e[ws])}function z(){xt.call(this),this.i=new $n(this),this.S=this,this.J=null}H(z,xt);z.prototype[He]=!0;z.prototype.removeEventListener=function(e,t,n,s){Ho(this,e,t,n,s)};function W(e,t){var n,s=e.J;if(s)for(n=[];s;s=s.J)n.push(s);if(e=e.S,s=t.type||t,typeof t=="string")t=new tt(t,e);else if(t instanceof tt)t.target=t.target||e;else{var i=t;t=new tt(s,e),Bo(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=an(o,s,!0,t)&&i}if(o=t.g=e,i=an(o,s,!0,t)&&i,i=an(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=an(o,s,!1,t)&&i}z.prototype.N=function(){if(z.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Un(n[s]);delete e.g[t],e.h--}}this.J=null};z.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};z.prototype.P=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function an(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&Ps(e.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var wi=E.JSON.stringify;function bh(){var e=Wo;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Rh{constructor(){this.h=this.g=null}add(t,n){const s=Go.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Go=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new xh,e=>e.reset());class xh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Oh(e){E.setTimeout(()=>{throw e},0)}function Qo(e,t){Vs||Mh(),Us||(Vs(),Us=!0),Wo.add(e,t)}var Vs;function Mh(){var e=E.Promise.resolve(void 0);Vs=function(){e.then(Lh)}}var Us=!1,Wo=new Rh;function Lh(){for(var e;e=bh();){try{e.h.call(e.g)}catch(n){Oh(n)}var t=Go;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Us=!1}function Bn(e,t){z.call(this),this.h=e||1,this.g=t||E,this.j=Z(this.qb,this),this.l=Date.now()}H(Bn,z);g=Bn.prototype;g.ga=!1;g.T=null;g.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),W(this,"tick"),this.ga&&(Ei(this),this.start()))}};g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ei(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}g.N=function(){Bn.$.N.call(this),Ei(this),delete this.g};function Ti(e,t,n){if(typeof e=="function")n&&(e=Z(e,n));else if(e&&typeof e.handleEvent=="function")e=Z(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:E.setTimeout(e,t||0)}function Xo(e){e.g=Ti(()=>{e.g=null,e.i&&(e.i=!1,Xo(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Ph extends xt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Xo(this)}N(){super.N(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pe(e){xt.call(this),this.h=e,this.g={}}H(Pe,xt);var Tr=[];function Yo(e,t,n,s){Array.isArray(n)||(n&&(Tr[0]=n.toString()),n=Tr);for(var i=0;i<n.length;i++){var r=jo(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Jo(e){pi(e.g,function(t,n){this.g.hasOwnProperty(n)&&mi(t)},e),e.g={}}Pe.prototype.N=function(){Pe.$.N.call(this),Jo(this)};Pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function jn(){this.g=!0}jn.prototype.Ea=function(){this.g=!1};function Fh(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Vh(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Zt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+$h(e,n)+(s?" "+s:"")})}function Uh(e,t){e.info(function(){return"TIMEOUT: "+t})}jn.prototype.info=function(){};function $h(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return wi(n)}catch{return t}}var Gt={},Ir=null;function qn(){return Ir=Ir||new z}Gt.Ta="serverreachability";function Zo(e){tt.call(this,Gt.Ta,e)}H(Zo,tt);function Fe(e){const t=qn();W(t,new Zo(t))}Gt.STAT_EVENT="statevent";function ta(e,t){tt.call(this,Gt.STAT_EVENT,e),this.stat=t}H(ta,tt);function it(e){const t=qn();W(t,new ta(t,e))}Gt.Ua="timingevent";function ea(e,t){tt.call(this,Gt.Ua,e),this.size=t}H(ea,tt);function Ke(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){e()},t)}var zn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},na={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ii(){}Ii.prototype.h=null;function _r(e){return e.h||(e.h=e.i())}function sa(){}var Ge={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function _i(){tt.call(this,"d")}H(_i,tt);function Ci(){tt.call(this,"c")}H(Ci,tt);var $s;function Hn(){}H(Hn,Ii);Hn.prototype.g=function(){return new XMLHttpRequest};Hn.prototype.i=function(){return{}};$s=new Hn;function Qe(e,t,n,s){this.l=e,this.j=t,this.m=n,this.W=s||1,this.U=new Pe(this),this.P=Bh,e=Ms?125:void 0,this.V=new Bn(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new ia}function ia(){this.i=null,this.g="",this.h=!1}var Bh=45e3,Bs={},Sn={};g=Qe.prototype;g.setTimeout=function(e){this.P=e};function js(e,t,n){e.L=1,e.v=Gn(Et(t)),e.s=n,e.S=!0,ra(e,null)}function ra(e,t){e.G=Date.now(),We(e),e.A=Et(e.v);var n=e.A,s=e.W;Array.isArray(s)||(s=[String(s)]),fa(n.i,"t",s),e.C=0,n=e.l.I,e.h=new ia,e.g=Ma(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Ph(Z(e.Pa,e,e.g),e.O)),Yo(e.U,e.g,"readystatechange",e.nb),t=e.I?$o(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Fe(),Fh(e.j,e.u,e.A,e.m,e.W,e.s)}g.nb=function(e){e=e.target;const t=this.M;t&&vt(e)==3?t.l():this.Pa(e)};g.Pa=function(e){try{if(e==this.g)t:{const h=vt(this.g);var t=this.g.Ia();const l=this.g.da();if(!(3>h)&&(h!=3||Ms||this.g&&(this.h.h||this.g.ja()||Dr(this.g)))){this.J||h!=4||t==7||(t==8||0>=l?Fe(3):Fe(2)),Kn(this);var n=this.g.da();this.aa=n;e:if(oa(this)){var s=Dr(this.g);e="";var i=s.length,r=vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lt(this),Ne(this);var o="";break e}this.h.i=new E.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Vh(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.ba&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_n(a)){var c=a;break e}}c=null}if(n=c)Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qs(this,n);else{this.i=!1,this.o=3,it(12),Lt(this),Ne(this);break t}}this.S?(aa(this,h,o),Ms&&this.i&&h==3&&(Yo(this.U,this.V,"tick",this.mb),this.V.start())):(Zt(this.j,this.m,o,null),qs(this,o)),h==4&&Lt(this),this.i&&!this.J&&(h==4?ba(this.l,this):(this.i=!1,We(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),Lt(this),Ne(this)}}}catch{}finally{}};function oa(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function aa(e,t,n){let s=!0,i;for(;!e.J&&e.C<n.length;)if(i=jh(e,n),i==Sn){t==4&&(e.o=4,it(14),s=!1),Zt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Bs){e.o=4,it(15),Zt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Zt(e.j,e.m,i,null),qs(e,i);oa(e)&&i!=Sn&&i!=Bs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,it(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ca&&(e.ca=!0,t=e.l,t.g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ri(t),t.L=!0,it(11))):(Zt(e.j,e.m,n,"[Invalid Chunked Response]"),Lt(e),Ne(e))}g.mb=function(){if(this.g){var e=vt(this.g),t=this.g.ja();this.C<t.length&&(Kn(this),aa(this,e,t),this.i&&e!=4&&We(this))}};function jh(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Sn:(n=Number(t.substring(n,s)),isNaN(n)?Bs:(s+=1,s+n>t.length?Sn:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.J=!0,Lt(this)};function We(e){e.Y=Date.now()+e.P,ua(e,e.P)}function ua(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ke(Z(e.lb,e),t)}function Kn(e){e.B&&(E.clearTimeout(e.B),e.B=null)}g.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Uh(this.j,this.A),this.L!=2&&(Fe(),it(17)),Lt(this),this.o=2,Ne(this)):ua(this,this.Y-e)};function Ne(e){e.l.H==0||e.J||ba(e.l,e)}function Lt(e){Kn(e);var t=e.M;t&&typeof t.ra=="function"&&t.ra(),e.M=null,Ei(e.V),Jo(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function qs(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||zs(n.h,e))){if(!e.K&&zs(n.h,e)&&n.H==3){try{var s=n.Ja.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Nn(n),Xn(n);else break t;bi(n),it(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=Ke(Z(n.ib,n),6e3));if(1>=ma(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Pt(n,11)}else if((e.K||n.g==e)&&Nn(n),!_n(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const h=c[3];h!=null&&(n.qa=h,n.j.info("VER="+n.qa));const l=c[4];l!=null&&(n.Ga=l,n.j.info("SVER="+n.Ga));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const C=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(C){var r=s.h;r.g||C.indexOf("spdy")==-1&&C.indexOf("quic")==-1&&C.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Si(r,r.h),r.h=null))}if(s.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.Da=_,O(s.G,s.F,_))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=e;if(s.wa=Oa(s,s.I?s.oa:null,s.Y),o.K){ya(s.h,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(Kn(a),We(a)),s.g=o}else Na(s);0<n.i.length&&Yn(n)}else c[0]!="stop"&&c[0]!="close"||Pt(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Pt(n,7):ki(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}Fe(4)}catch{}}function qh(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Fn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function zh(e){if(e.sa&&typeof e.sa=="function")return e.sa();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Fn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function ca(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Fn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=zh(e),s=qh(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var ha=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Vt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Vt){this.h=t!==void 0?t:e.h,An(this,e.j),this.s=e.s,this.g=e.g,Dn(this,e.m),this.l=e.l,t=e.i;var n=new Ve;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Cr(this,n),this.o=e.o}else e&&(n=String(e).match(ha))?(this.h=!!t,An(this,n[1]||"",!0),this.s=Ce(n[2]||""),this.g=Ce(n[3]||"",!0),Dn(this,n[4]),this.l=Ce(n[5]||"",!0),Cr(this,n[6]||"",!0),this.o=Ce(n[7]||"")):(this.h=!!t,this.i=new Ve(null,this.h))}Vt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Se(t,Sr,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Se(t,Sr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Se(n,n.charAt(0)=="/"?Qh:Gh,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Se(n,Xh)),e.join("")};function Et(e){return new Vt(e)}function An(e,t,n){e.j=n?Ce(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Dn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Cr(e,t,n){t instanceof Ve?(e.i=t,Yh(e.i,e.h)):(n||(t=Se(t,Wh)),e.i=new Ve(t,e.h))}function O(e,t,n){e.i.set(t,n)}function Gn(e){return O(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ce(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Se(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Kh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Kh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Sr=/[#\/\?@]/g,Gh=/[#\?:]/g,Qh=/[#\?]/g,Wh=/[#\?@]/g,Xh=/#/g;function Ve(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ot(e){e.g||(e.g=new Map,e.h=0,e.i&&Hh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=Ve.prototype;g.add=function(e,t){Ot(this),this.i=null,e=me(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function la(e,t){Ot(e),t=me(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function da(e,t){return Ot(e),t=me(e,t),e.g.has(t)}g.forEach=function(e,t){Ot(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};g.sa=function(){Ot(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};g.Z=function(e){Ot(this);let t=[];if(typeof e=="string")da(this,e)&&(t=t.concat(this.g.get(me(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};g.set=function(e,t){return Ot(this),this.i=null,e=me(this,e),da(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function fa(e,t,n){la(e,t),0<n.length&&(e.i=null,e.g.set(me(e,t),di(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function me(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Yh(e,t){t&&!e.j&&(Ot(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(la(this,s),fa(this,i,n))},e)),e.j=t}var Jh=class{constructor(e,t){this.h=e,this.g=t}};function pa(e){this.l=e||Zh,E.PerformanceNavigationTiming?(e=E.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(E.g&&E.g.Ka&&E.g.Ka()&&E.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Zh=10;function ga(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function ma(e){return e.h?1:e.g?e.g.size:0}function zs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Si(e,t){e.g?e.g.add(t):e.h=t}function ya(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}pa.prototype.cancel=function(){if(this.i=va(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function va(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return di(e.i)}function Ai(){}Ai.prototype.stringify=function(e){return E.JSON.stringify(e,void 0)};Ai.prototype.parse=function(e){return E.JSON.parse(e,void 0)};function tl(){this.g=new Ai}function el(e,t,n){const s=n||"";try{ca(e,function(i,r){let o=i;ze(i)&&(o=wi(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function nl(e,t){const n=new jn;if(E.Image){const s=new Image;s.onload=on(un,n,s,"TestLoadImage: loaded",!0,t),s.onerror=on(un,n,s,"TestLoadImage: error",!1,t),s.onabort=on(un,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=on(un,n,s,"TestLoadImage: timeout",!1,t),E.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function un(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Xe(e){this.l=e.fc||null,this.j=e.ob||!1}H(Xe,Ii);Xe.prototype.g=function(){return new Qn(this.l,this.j)};Xe.prototype.i=function(e){return function(){return e}}({});function Qn(e,t){z.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Di,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}H(Qn,z);var Di=0;g=Qn.prototype;g.open=function(e,t){if(this.readyState!=Di)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ue(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||E).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ye(this)),this.readyState=Di};g.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ue(this)),this.g&&(this.readyState=3,Ue(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof E.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wa(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function wa(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}g.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ye(this):Ue(this),this.readyState==3&&wa(this)}};g.Za=function(e){this.g&&(this.response=this.responseText=e,Ye(this))};g.Ya=function(e){this.g&&(this.response=e,Ye(this))};g.ka=function(){this.g&&Ye(this)};function Ye(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ue(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ue(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Qn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var sl=E.JSON.parse;function L(e){z.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ea,this.L=this.M=!1}H(L,z);var Ea="",il=/^https?$/i,rl=["POST","PUT"];g=L.prototype;g.Oa=function(e){this.M=e};g.ha=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():$s.g(),this.C=this.u?_r(this.u):_r($s),this.g.onreadystatechange=Z(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(r){Ar(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=E.FormData&&e instanceof E.FormData,!(0<=Lo(rl,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{_a(this),0<this.B&&((this.L=ol(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Z(this.ua,this)):this.A=Ti(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Ar(this,r)}};function ol(e){return ue&&_h()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}g.ua=function(){typeof li<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,W(this,"timeout"),this.abort(8))};function Ar(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ta(e),Wn(e)}function Ta(e){e.F||(e.F=!0,W(e,"complete"),W(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,W(this,"complete"),W(this,"abort"),Wn(this))};g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wn(this,!0)),L.$.N.call(this)};g.La=function(){this.s||(this.G||this.v||this.l?Ia(this):this.kb())};g.kb=function(){Ia(this)};function Ia(e){if(e.h&&typeof li<"u"&&(!e.C[1]||vt(e)!=4||e.da()!=2)){if(e.v&&vt(e)==4)Ti(e.La,0,e);else if(W(e,"readystatechange"),vt(e)==4){e.h=!1;try{const a=e.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.I).match(ha)[1]||null;if(!i&&E.self&&E.self.location){var r=E.self.location.protocol;i=r.substr(0,r.length-1)}s=!il.test(i?i.toLowerCase():"")}n=s}if(n)W(e,"complete"),W(e,"success");else{e.m=6;try{var o=2<vt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",Ta(e)}}finally{Wn(e)}}}}function Wn(e,t){if(e.g){_a(e);const n=e.g,s=e.C[0]?In:null;e.g=null,e.C=null,t||W(e,"ready");try{n.onreadystatechange=s}catch{}}}function _a(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(E.clearTimeout(e.A),e.A=null)}function vt(e){return e.g?e.g.readyState:0}g.da=function(){try{return 2<vt(this)?this.g.status:-1}catch{return-1}};g.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),sl(t)}};function Dr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Ea:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Ia=function(){return this.m};g.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ca(e){let t="";return pi(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Ni(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Ca(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):O(e,t,n))}function Ie(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Sa(e){this.Ga=0,this.i=[],this.j=new jn,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ie("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ie("baseRetryDelayMs",5e3,e),this.hb=Ie("retryDelaySeedMs",1e4,e),this.eb=Ie("forwardChannelMaxRetries",2,e),this.xa=Ie("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new pa(e&&e.concurrentRequestLimit),this.Ja=new tl,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}g=Sa.prototype;g.qa=8;g.H=1;function ki(e){if(Aa(e),e.H==3){var t=e.W++,n=Et(e.G);O(n,"SID",e.J),O(n,"RID",t),O(n,"TYPE","terminate"),Je(e,n),t=new Qe(e,e.j,t,void 0),t.L=2,t.v=Gn(Et(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(t.v.toString(),"")),!n&&E.Image&&(new Image().src=t.v,n=!0),n||(t.g=Ma(t.l,null),t.g.ha(t.v)),t.G=Date.now(),We(t)}xa(e)}function Xn(e){e.g&&(Ri(e),e.g.cancel(),e.g=null)}function Aa(e){Xn(e),e.u&&(E.clearTimeout(e.u),e.u=null),Nn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&E.clearTimeout(e.m),e.m=null)}function Yn(e){ga(e.h)||e.m||(e.m=!0,Qo(e.Na,e),e.C=0)}function al(e,t){return ma(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.F.concat(e.i),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Ke(Z(e.Na,e,t),Ra(e,e.C)),e.C++,!0)}g.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Qe(this,this.j,e,void 0);let r=this.s;if(this.U&&(r?(r=$o(r),Bo(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Da(this,i,t),n=Et(this.G),O(n,"RID",e),O(n,"CVER",22),this.F&&O(n,"X-HTTP-Session-Id",this.F),Je(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(Ca(r)))+"&"+t:this.o&&Ni(n,this.o,r)),Si(this.h,i),this.bb&&O(n,"TYPE","init"),this.P?(O(n,"$req",t),O(n,"SID","null"),i.ba=!0,js(i,n,null)):js(i,n,t),this.H=2}}else this.H==3&&(e?Nr(this,e):this.i.length==0||ga(this.h)||Nr(this))};function Nr(e,t){var n;t?n=t.m:n=e.W++;const s=Et(e.G);O(s,"SID",e.J),O(s,"RID",n),O(s,"AID",e.V),Je(e,s),e.o&&e.s&&Ni(s,e.o,e.s),n=new Qe(e,e.j,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=Da(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Si(e.h,n),js(n,s,t)}function Je(e,t){e.ma&&pi(e.ma,function(n,s){O(t,s,n)}),e.l&&ca({},function(n,s){O(t,s,n)})}function Da(e,t,n){n=Math.min(e.i.length,n);var s=e.l?Z(e.l.Va,e.l,e):null;t:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let c=i[u].h;const h=i[u].g;if(c-=r,0>c)r=Math.max(0,i[u].h-100),a=!1;else try{el(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.F=e,s}function Na(e){e.g||e.u||(e.ba=1,Qo(e.Ma,e),e.A=0)}function bi(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Ke(Z(e.Ma,e),Ra(e,e.A)),e.A++,!0)}g.Ma=function(){if(this.u=null,ka(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=Ke(Z(this.jb,this),e)}};g.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,it(10),Xn(this),ka(this))};function Ri(e){e.B!=null&&(E.clearTimeout(e.B),e.B=null)}function ka(e){e.g=new Qe(e,e.j,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Et(e.wa);O(t,"RID","rpc"),O(t,"SID",e.J),O(t,"CI",e.M?"0":"1"),O(t,"AID",e.V),O(t,"TYPE","xmlhttp"),Je(e,t),e.o&&e.s&&Ni(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=Gn(Et(t)),n.s=null,n.S=!0,ra(n,e)}g.ib=function(){this.v!=null&&(this.v=null,Xn(this),bi(this),it(19))};function Nn(e){e.v!=null&&(E.clearTimeout(e.v),e.v=null)}function ba(e,t){var n=null;if(e.g==t){Nn(e),Ri(e),e.g=null;var s=2}else if(zs(e.h,t))n=t.F,ya(e.h,t),s=1;else return;if(e.H!=0){if(e.ta=t.aa,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;s=qn(),W(s,new ea(s,n)),Yn(e)}else Na(e);else if(i=t.o,i==3||i==0&&0<e.ta||!(s==1&&al(e,t)||s==2&&bi(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Pt(e,5);break;case 4:Pt(e,10);break;case 3:Pt(e,6);break;default:Pt(e,2)}}}function Ra(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function Pt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=Z(e.pb,e);n||(n=new Vt("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||An(n,"https"),Gn(n)),nl(n.toString(),s)}else it(2);e.H=0,e.l&&e.l.za(t),xa(e),Aa(e)}g.pb=function(e){e?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function xa(e){if(e.H=0,e.pa=[],e.l){const t=va(e.h);(t.length!=0||e.i.length!=0)&&(yr(e.pa,t),yr(e.pa,e.i),e.h.i.length=0,di(e.i),e.i.length=0),e.l.ya()}}function Oa(e,t,n){var s=n instanceof Vt?Et(n):new Vt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),Dn(s,s.m);else{var i=E.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new Vt(null,void 0);s&&An(r,s),t&&(r.g=t),i&&Dn(r,i),n&&(r.l=n),s=r}return n=e.F,t=e.Da,n&&t&&O(s,n,t),O(s,"VER",e.qa),Je(e,s),s}function Ma(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new L(new Xe({ob:!0})):new L(e.va),t.Oa(e.I),t}function La(){}g=La.prototype;g.Ba=function(){};g.Aa=function(){};g.za=function(){};g.ya=function(){};g.Va=function(){};function kn(){if(ue&&!(10<=Number(Ch)))throw Error("Environmental error: no available transport.")}kn.prototype.g=function(e,t){return new ot(e,t)};function ot(e,t){z.call(this),this.g=new Sa(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!_n(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!_n(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ye(this)}H(ot,z);ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;it(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=Oa(e,null,e.Y),Yn(e)};ot.prototype.close=function(){ki(this.g)};ot.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=wi(e),e=n);t.i.push(new Jh(t.fb++,e)),t.H==3&&Yn(t)};ot.prototype.N=function(){this.g.l=null,delete this.j,ki(this.g),delete this.g,ot.$.N.call(this)};function Pa(e){_i.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}H(Pa,_i);function Fa(){Ci.call(this),this.status=1}H(Fa,Ci);function ye(e){this.g=e}H(ye,La);ye.prototype.Ba=function(){W(this.g,"a")};ye.prototype.Aa=function(e){W(this.g,new Pa(e))};ye.prototype.za=function(e){W(this.g,new Fa)};ye.prototype.ya=function(){W(this.g,"b")};function ul(){this.blockSize=-1}function ct(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}H(ct,ul);ct.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Es(e,t,n){n||(n=0);var s=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)s[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var r=e.g[3],o=t+(r^n&(i^r))+s[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[1]+3905402710&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[5]+1200080426&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[9]+2336552879&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[13]+4254626195&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^r&(n^i))+s[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[6]+3225465664&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[10]+38016083&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[14]+3275163606&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[2]+4243563512&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^r)+s[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[8]+2272392833&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[4]+1272893353&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[0]+3936430074&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[12]+3873151461&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~r))+s[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[7]+1126891415&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[3]+2399980690&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[15]+4264355552&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[11]+3174756917&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+r&4294967295}ct.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,s=this.m,i=this.h,r=0;r<t;){if(i==0)for(;r<=n;)Es(this,e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[i++]=e.charCodeAt(r++),i==this.blockSize){Es(this,s),i=0;break}}else for(;r<t;)if(s[i++]=e[r++],i==this.blockSize){Es(this,s),i=0;break}}this.h=i,this.i+=t};ct.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var s=0;32>s;s+=8)e[n++]=this.g[t]>>>s&255;return e};function R(e,t){this.h=t;for(var n=[],s=!0,i=e.length-1;0<=i;i--){var r=e[i]|0;s&&r==t||(n[i]=r,s=!1)}this.g=n}var cl={};function xi(e){return-128<=e&&128>e?Po(cl,e,function(t){return new R([t|0],0>t?-1:0)}):new R([e|0],0>e?-1:0)}function mt(e){if(isNaN(e)||!isFinite(e))return te;if(0>e)return Q(mt(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=Hs;return new R(t,0)}function Va(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Q(Va(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=mt(Math.pow(t,8)),s=te,i=0;i<e.length;i+=8){var r=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+r),t);8>r?(r=mt(Math.pow(t,r)),s=s.R(r).add(mt(o))):(s=s.R(n),s=s.add(mt(o)))}return s}var Hs=4294967296,te=xi(0),Ks=xi(1),kr=xi(16777216);g=R.prototype;g.ea=function(){if(at(this))return-Q(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var s=this.D(n);e+=(0<=s?s:Hs+s)*t,t*=Hs}return e};g.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(wt(this))return"0";if(at(this))return"-"+Q(this).toString(e);for(var t=mt(Math.pow(e,6)),n=this,s="";;){var i=Rn(n,t).g;n=bn(n,i.R(t));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,wt(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};g.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function wt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function at(e){return e.h==-1}g.X=function(e){return e=bn(this,e),at(e)?-1:wt(e)?0:1};function Q(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new R(n,~e.h).add(Ks)}g.abs=function(){return at(this)?Q(this):this};g.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,i=0;i<=t;i++){var r=s+(this.D(i)&65535)+(e.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new R(n,n[n.length-1]&-2147483648?-1:0)};function bn(e,t){return e.add(Q(t))}g.R=function(e){if(wt(this)||wt(e))return te;if(at(this))return at(e)?Q(this).R(Q(e)):Q(Q(this).R(e));if(at(e))return Q(this.R(Q(e)));if(0>this.X(kr)&&0>e.X(kr))return mt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<e.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*s+2*i]+=o*u,cn(n,2*s+2*i),n[2*s+2*i+1]+=r*u,cn(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,cn(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,cn(n,2*s+2*i+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new R(n,0)};function cn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function _e(e,t){this.g=e,this.h=t}function Rn(e,t){if(wt(t))throw Error("division by zero");if(wt(e))return new _e(te,te);if(at(e))return t=Rn(Q(e),t),new _e(Q(t.g),Q(t.h));if(at(t))return t=Rn(e,Q(t)),new _e(Q(t.g),t.h);if(30<e.g.length){if(at(e)||at(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ks,s=t;0>=s.X(e);)n=br(n),s=br(s);var i=Xt(n,1),r=Xt(s,1);for(s=Xt(s,2),n=Xt(n,2);!wt(s);){var o=r.add(s);0>=o.X(e)&&(i=i.add(n),r=o),s=Xt(s,1),n=Xt(n,1)}return t=bn(e,i.R(t)),new _e(i,t)}for(i=te;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=mt(n),o=r.R(t);at(o)||0<o.X(e);)n-=s,r=mt(n),o=r.R(t);wt(r)&&(r=Ks),i=i.add(r),e=bn(e,o)}return new _e(i,e)}g.gb=function(e){return Rn(this,e).h};g.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)&e.D(s);return new R(n,this.h&e.h)};g.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)|e.D(s);return new R(n,this.h|e.h)};g.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)^e.D(s);return new R(n,this.h^e.h)};function br(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.D(s)<<1|e.D(s-1)>>>31;return new R(n,e.h)}function Xt(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,i=[],r=0;r<s;r++)i[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new R(i,e.h)}kn.prototype.createWebChannel=kn.prototype.g;ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;zn.NO_ERROR=0;zn.TIMEOUT=8;zn.HTTP_ERROR=6;na.COMPLETE="complete";sa.EventType=Ge;Ge.OPEN="a";Ge.CLOSE="b";Ge.ERROR="c";Ge.MESSAGE="d";z.prototype.listen=z.prototype.O;L.prototype.listenOnce=L.prototype.P;L.prototype.getLastError=L.prototype.Sa;L.prototype.getLastErrorCode=L.prototype.Ia;L.prototype.getStatus=L.prototype.da;L.prototype.getResponseJson=L.prototype.Wa;L.prototype.getResponseText=L.prototype.ja;L.prototype.send=L.prototype.ha;L.prototype.setWithCredentials=L.prototype.Oa;ct.prototype.digest=ct.prototype.l;ct.prototype.reset=ct.prototype.reset;ct.prototype.update=ct.prototype.j;R.prototype.add=R.prototype.add;R.prototype.multiply=R.prototype.R;R.prototype.modulo=R.prototype.gb;R.prototype.compare=R.prototype.X;R.prototype.toNumber=R.prototype.ea;R.prototype.toString=R.prototype.toString;R.prototype.getBits=R.prototype.D;R.fromNumber=mt;R.fromString=Va;var hl=function(){return new kn},ll=function(){return qn()},Ts=zn,dl=na,fl=Gt,Rr={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},pl=Xe,hn=sa,gl=L,ml=ct,ee=R;const xr="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Y.UNAUTHENTICATED=new Y(null),Y.GOOGLE_CREDENTIALS=new Y("google-credentials-uid"),Y.FIRST_PARTY=new Y("first-party-uid"),Y.MOCK_USER=new Y("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ve="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new Ao("@firebase/firestore");function Or(){return jt.logLevel}function y(e,...t){if(jt.logLevel<=k.DEBUG){const n=t.map(Oi);jt.debug(`Firestore (${ve}): ${e}`,...n)}}function Tt(e,...t){if(jt.logLevel<=k.ERROR){const n=t.map(Oi);jt.error(`Firestore (${ve}): ${e}`,...n)}}function ce(e,...t){if(jt.logLevel<=k.WARN){const n=t.map(Oi);jt.warn(`Firestore (${ve}): ${e}`,...n)}}function Oi(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${ve}) INTERNAL ASSERTION FAILED: `+e;throw Tt(t),new Error(t)}function $(e,t){e||I()}function N(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends Kt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class yl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Y.UNAUTHENTICATED))}shutdown(){}}class vl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wl{constructor(t){this.t=t,this.currentUser=Y.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new Ut;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ut,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ut)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?($(typeof s.accessToken=="string"),new Ua(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return $(t===null||typeof t=="string"),new Y(t)}}class El{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=Y.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Tl{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new El(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Y.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Il{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _l{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=r=>{r.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?($(typeof n.token=="string"),this.T=n.token,new Il(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Cl(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function b(e,t){return e<t?-1:e>t?1:0}function he(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return q.fromMillis(Date.now())}static fromDate(t){return q.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new q(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?b(this.nanoseconds,t.nanoseconds):b(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.timestamp=t}static fromTimestamp(t){return new T(t)}static min(){return new T(new q(0,0))}static max(){return new T(new q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return $e.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof $e?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class M extends $e{construct(t,n,s){return new M(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new v(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new M(n)}static emptyPath(){return new M([])}}const Al=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends $e{construct(t,n,s){return new st(t,n,s)}static isValidIdentifier(t){return Al.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new v(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new v(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new v(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new v(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(M.fromString(t))}static fromName(t){return new w(M.fromString(t).popFirst(5))}static empty(){return new w(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&M.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return M.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new M(t.slice()))}}function Dl(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=T.fromTimestamp(s===1e9?new q(n+1,0):new q(n,s));return new kt(i,w.empty(),t)}function Nl(e){return new kt(e.readTime,e.key,-1)}class kt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new kt(T.min(),w.empty(),-1)}static max(){return new kt(T.max(),w.empty(),-1)}}function kl(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:b(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==bl)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,s)=>{n(t)})}static reject(t){return new d((n,s)=>{s(t)})}static waitFor(t){return new d((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(t){let n=d.resolve(!1);for(const s of t)n=n.next(i=>i?d.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new d((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let u=0;u<r;u++){const c=u;n(t[c]).next(h=>{o[c]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(t,n){return new d((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function Ze(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}Li.ct=-1;function Jn(e){return e==null}function xn(e){return e===0&&1/e==-1/0}function xl(e){return typeof e=="number"&&Number.isInteger(e)&&!xn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function tn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function $a(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t,n){this.comparator=t,this.root=n||G.EMPTY}insert(t,n){return new P(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,G.BLACK,null,null))}remove(t){return new P(this.comparator,this.root.remove(t,this.comparator).copy(null,null,G.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ln(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ln(this.root,t,this.comparator,!1)}getReverseIterator(){return new ln(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ln(this.root,t,this.comparator,!0)}}class ln{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class G{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s??G.RED,this.left=i??G.EMPTY,this.right=r??G.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new G(t??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return G.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return G.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}G.EMPTY=null,G.RED=!0,G.BLACK=!1;G.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,i){return this}insert(e,t,n){return new G(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.comparator=t,this.data=new P(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Lr(this.data.getIterator())}getIteratorFrom(t){return new Lr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof et)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new et(this.comparator);return n.data=t,n}}class Lr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.fields=t,t.sort(st.comparator)}static empty(){return new Ct([])}unionWith(t){let n=new et(st.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Ct(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return he(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ba("Invalid base64 string: "+i):i}}(t);return new nt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new nt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return b(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const Ol=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bt(e){if($(!!e),typeof e=="string"){let t=0;const n=Ol.exec(e);if($(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:V(e.seconds),nanos:V(e.nanos)}}function V(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function qt(e){return typeof e=="string"?nt.fromBase64String(e):nt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fi(e){const t=e.mapValue.fields.__previous_value__;return Pi(t)?Fi(t):t}function Be(e){const t=bt(e.mapValue.fields.__local_write_time__.timestampValue);return new q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t,n,s,i,r,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class je{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new je("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof je&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Pi(e)?4:Ll(e)?9007199254740991:10:I()}function yt(e,t){if(e===t)return!0;const n=zt(e);if(n!==zt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Be(e).isEqual(Be(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=bt(s.timestampValue),o=bt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return qt(s.bytesValue).isEqual(qt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return V(s.geoPointValue.latitude)===V(i.geoPointValue.latitude)&&V(s.geoPointValue.longitude)===V(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return V(s.integerValue)===V(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=V(s.doubleValue),o=V(i.doubleValue);return r===o?xn(r)===xn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return he(e.arrayValue.values||[],t.arrayValue.values||[],yt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Mr(r)!==Mr(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!yt(r[a],o[a])))return!1;return!0}(e,t);default:return I()}}function qe(e,t){return(e.values||[]).find(n=>yt(n,t))!==void 0}function le(e,t){if(e===t)return 0;const n=zt(e),s=zt(t);if(n!==s)return b(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return b(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=V(i.integerValue||i.doubleValue),a=V(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Pr(e.timestampValue,t.timestampValue);case 4:return Pr(Be(e),Be(t));case 5:return b(e.stringValue,t.stringValue);case 6:return function(i,r){const o=qt(i),a=qt(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=b(o[u],a[u]);if(c!==0)return c}return b(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=b(V(i.latitude),V(r.latitude));return o!==0?o:b(V(i.longitude),V(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=le(o[u],a[u]);if(c)return c}return b(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===dn.mapValue&&r===dn.mapValue)return 0;if(i===dn.mapValue)return 1;if(r===dn.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=r.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const l=b(a[h],c[h]);if(l!==0)return l;const p=le(o[a[h]],u[c[h]]);if(p!==0)return p}return b(a.length,c.length)}(e.mapValue,t.mapValue);default:throw I()}}function Pr(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return b(e,t);const n=bt(e),s=bt(t),i=b(n.seconds,s.seconds);return i!==0?i:b(n.nanos,s.nanos)}function de(e){return Gs(e)}function Gs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=bt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?qt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,w.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Gs(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Gs(s.fields[a])}`;return r+"}"}(e.mapValue):I();var t,n}function Fr(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Qs(e){return!!e&&"integerValue"in e}function Vi(e){return!!e&&"arrayValue"in e}function Vr(e){return!!e&&"nullValue"in e}function Ur(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Is(e){return!!e&&"mapValue"in e}function ke(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return tn(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=ke(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ke(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ll(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.value=t}static empty(){return new gt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Is(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ke(n)}setAll(t){let n=st.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=ke(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());Is(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return yt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];Is(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){tn(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new gt(ke(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,n,s,i,r,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new J(t,0,T.min(),T.min(),T.min(),gt.empty(),0)}static newFoundDocument(t,n,s,i){return new J(t,1,n,T.min(),s,i,0)}static newNoDocument(t,n){return new J(t,2,n,T.min(),T.min(),gt.empty(),0)}static newUnknownDocument(t,n){return new J(t,3,n,T.min(),T.min(),gt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(T.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=T.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof J&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new J(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t,n){this.position=t,this.inclusive=n}}function $r(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=le(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Br(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!yt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t,n="asc"){this.field=t,this.dir=n}}function Pl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{}class U extends ja{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new Vl(t,n,s):n==="array-contains"?new Bl(t,s):n==="in"?new jl(t,s):n==="not-in"?new ql(t,s):n==="array-contains-any"?new zl(t,s):new U(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new Ul(t,s):new $l(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(le(n,this.value)):n!==null&&zt(this.value)===zt(n)&&this.matchesComparison(le(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ht extends ja{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new ht(t,n)}matches(t){return qa(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function qa(e){return e.op==="and"}function za(e){return Fl(e)&&qa(e)}function Fl(e){for(const t of e.filters)if(t instanceof ht)return!1;return!0}function Ws(e){if(e instanceof U)return e.field.canonicalString()+e.op.toString()+de(e.value);if(za(e))return e.filters.map(t=>Ws(t)).join(",");{const t=e.filters.map(n=>Ws(n)).join(",");return`${e.op}(${t})`}}function Ha(e,t){return e instanceof U?function(n,s){return s instanceof U&&n.op===s.op&&n.field.isEqual(s.field)&&yt(n.value,s.value)}(e,t):e instanceof ht?function(n,s){return s instanceof ht&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Ha(r,s.filters[o]),!0):!1}(e,t):void I()}function Ka(e){return e instanceof U?function(t){return`${t.field.canonicalString()} ${t.op} ${de(t.value)}`}(e):e instanceof ht?function(t){return t.op.toString()+" {"+t.getFilters().map(Ka).join(" ,")+"}"}(e):"Filter"}class Vl extends U{constructor(t,n,s){super(t,n,s),this.key=w.fromName(s.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.matchesComparison(n)}}class Ul extends U{constructor(t,n){super(t,"in",n),this.keys=Ga("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class $l extends U{constructor(t,n){super(t,"not-in",n),this.keys=Ga("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Ga(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class Bl extends U{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Vi(n)&&qe(n.arrayValue,this.value)}}class jl extends U{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&qe(this.value.arrayValue,n)}}class ql extends U{constructor(t,n){super(t,"not-in",n)}matches(t){if(qe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!qe(this.value.arrayValue,n)}}class zl extends U{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Vi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>qe(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function jr(e,t=null,n=[],s=[],i=null,r=null,o=null){return new Hl(e,t,n,s,i,r,o)}function Ui(e){const t=N(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Ws(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Jn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>de(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>de(s)).join(",")),t.ft=n}return t.ft}function $i(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Pl(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ha(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Br(e.startAt,t.startAt)&&Br(e.endAt,t.endAt)}function Xs(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this._t=null,this.startAt,this.endAt}}function Kl(e,t,n,s,i,r,o,a){return new en(e,t,n,s,i,r,o,a)}function Qa(e){return new en(e)}function qr(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Wa(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Bi(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Xa(e){return e.collectionGroup!==null}function ne(e){const t=N(e);if(t.dt===null){t.dt=[];const n=Bi(t),s=Wa(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new be(n)),t.dt.push(new be(st.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new be(st.keyField(),r))}}}return t.dt}function It(e){const t=N(e);if(!t._t)if(t.limitType==="F")t._t=jr(t.path,t.collectionGroup,ne(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of ne(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new be(r.field,o))}const s=t.endAt?new On(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new On(t.startAt.position,t.startAt.inclusive):null;t._t=jr(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t._t}function Ys(e,t){t.getFirstInequalityField(),Bi(e);const n=e.filters.concat([t]);return new en(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Js(e,t,n){return new en(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Zn(e,t){return $i(It(e),It(t))&&e.limitType===t.limitType}function Ya(e){return`${Ui(It(e))}|lt:${e.limitType}`}function Zs(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Ka(s)).join(", ")}]`),Jn(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>de(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>de(s)).join(",")),`Target(${n})`}(It(e))}; limitType=${e.limitType})`}function ts(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):w.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of ne(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=$r(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ne(n),s)||n.endAt&&!function(i,r,o){const a=$r(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ne(n),s))}(e,t)}function Gl(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ja(e){return(t,n)=>{let s=!1;for(const i of ne(e)){const r=Ql(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Ql(e,t,n){const s=e.field.isKeyField()?w.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?le(a,u):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){tn(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return $a(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=new P(w.comparator);function Rt(){return Wl}const Za=new P(w.comparator);function Ae(...e){let t=Za;for(const n of e)t=t.insert(n.key,n);return t}function Xl(e){let t=Za;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Ft(){return Re()}function tu(){return Re()}function Re(){return new we(e=>e.toString(),(e,t)=>e.isEqual(t))}const Yl=new et(w.comparator);function D(...e){let t=Yl;for(const n of e)t=t.add(n);return t}const Jl=new et(b);function Zl(){return Jl}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xn(t)?"-0":t}}function nu(e){return{integerValue:""+e}}function td(e,t){return xl(t)?nu(t):eu(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this._=void 0}}function ed(e,t,n){return e instanceof ti?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Pi(i)&&(i=Fi(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof Mn?su(e,t):e instanceof Ln?iu(e,t):function(s,i){const r=sd(s,i),o=zr(r)+zr(s.wt);return Qs(r)&&Qs(s.wt)?nu(o):eu(s.serializer,o)}(e,t)}function nd(e,t,n){return e instanceof Mn?su(e,t):e instanceof Ln?iu(e,t):n}function sd(e,t){return e instanceof ei?Qs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class ti extends es{}class Mn extends es{constructor(t){super(),this.elements=t}}function su(e,t){const n=ru(t);for(const s of e.elements)n.some(i=>yt(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ln extends es{constructor(t){super(),this.elements=t}}function iu(e,t){let n=ru(t);for(const s of e.elements)n=n.filter(i=>!yt(i,s));return{arrayValue:{values:n}}}class ei extends es{constructor(t,n){super(),this.serializer=t,this.wt=n}}function zr(e){return V(e.integerValue||e.doubleValue)}function ru(e){return Vi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function id(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Mn&&s instanceof Mn||n instanceof Ln&&s instanceof Ln?he(n.elements,s.elements,yt):n instanceof ei&&s instanceof ei?yt(n.wt,s.wt):n instanceof ti&&s instanceof ti}(e.transform,t.transform)}class $t{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new $t}static exists(t){return new $t(void 0,t)}static updateTime(t){return new $t(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function yn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ji{}function ou(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new od(e.key,$t.none()):new qi(e.key,e.data,$t.none());{const n=e.data,s=gt.empty();let i=new et(st.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new ns(e.key,s,new Ct(i.toArray()),$t.none())}}function rd(e,t,n){e instanceof qi?function(s,i,r){const o=s.value.clone(),a=Kr(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof ns?function(s,i,r){if(!yn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Kr(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(au(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function xe(e,t,n,s){return e instanceof qi?function(i,r,o,a){if(!yn(i.precondition,r))return o;const u=i.value.clone(),c=Gr(i.fieldTransforms,a,r);return u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(e,t,n,s):e instanceof ns?function(i,r,o,a){if(!yn(i.precondition,r))return o;const u=Gr(i.fieldTransforms,a,r),c=r.data;return c.setAll(au(i)),c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(i,r,o){return yn(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function Hr(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&he(n,s,(i,r)=>id(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class qi extends ji{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ns extends ji{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function au(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Kr(e,t,n){const s=new Map;$(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,nd(o,a,n[i]))}return s}function Gr(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,ed(r,o,t))}return s}class od extends ji{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&rd(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=xe(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=xe(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=tu();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const u=ou(o,a);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(T.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),D())}isEqual(t){return this.batchId===t.batchId&&he(this.mutations,t.mutations,(n,s)=>Hr(n,s))&&he(this.baseMutations,t.baseMutations,(n,s)=>Hr(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,A;function uu(e){if(e===void 0)return Tt("GRPC error has no .code"),f.UNKNOWN;switch(e){case F.OK:return f.OK;case F.CANCELLED:return f.CANCELLED;case F.UNKNOWN:return f.UNKNOWN;case F.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case F.INTERNAL:return f.INTERNAL;case F.UNAVAILABLE:return f.UNAVAILABLE;case F.UNAUTHENTICATED:return f.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case F.NOT_FOUND:return f.NOT_FOUND;case F.ALREADY_EXISTS:return f.ALREADY_EXISTS;case F.PERMISSION_DENIED:return f.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case F.ABORTED:return f.ABORTED;case F.OUT_OF_RANGE:return f.OUT_OF_RANGE;case F.UNIMPLEMENTED:return f.UNIMPLEMENTED;case F.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(A=F||(F={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return fn}static getOrCreateInstance(){return fn===null&&(fn=new zi),fn}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let fn=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=new ee([4294967295,4294967295],0);function Qr(e){const t=hd().encode(e),n=new ml;return n.update(t),new Uint8Array(n.digest())}function Wr(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new ee([n,s],0),new ee([i,r],0)]}class Hi{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new De(`Invalid padding: ${n}`);if(s<0)throw new De(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new De(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new De(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*t.length-n,this.It=ee.fromNumber(this.yt)}Tt(t,n,s){let i=t.add(n.multiply(ee.fromNumber(s)));return i.compare(ld)===1&&(i=new ee([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}At(t){if(this.yt===0)return!1;const n=Qr(t),[s,i]=Wr(n);for(let r=0;r<this.hashCount;r++){const o=this.Tt(s,i,r);if(!this.Et(o))return!1}return!0}static create(t,n,s){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new Hi(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.yt===0)return;const n=Qr(t),[s,i]=Wr(n);for(let r=0;r<this.hashCount;r++){const o=this.Tt(s,i,r);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class De extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const i=new Map;return i.set(t,nn.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new ss(T.min(),i,new P(b),Rt(),D())}}class nn{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new nn(s,n,D(),D(),D())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,n,s,i){this.vt=t,this.removedTargetIds=n,this.key=s,this.Pt=i}}class cu{constructor(t,n){this.targetId=t,this.bt=n}}class hu{constructor(t,n,s=nt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Xr{constructor(){this.Vt=0,this.St=Jr(),this.Dt=nt.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(t){t.approximateByteSize()>0&&(this.xt=!0,this.Dt=t)}Ot(){let t=D(),n=D(),s=D();return this.St.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new nn(this.Dt,this.Ct,t,n,s)}$t(){this.xt=!1,this.St=Jr()}Ft(t,n){this.xt=!0,this.St=this.St.insert(t,n)}Bt(t){this.xt=!0,this.St=this.St.remove(t)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class dd{constructor(t){this.Kt=t,this.Gt=new Map,this.Qt=Rt(),this.jt=Yr(),this.zt=new P(b)}Wt(t){for(const n of t.vt)t.Pt&&t.Pt.isFoundDocument()?this.Ht(n,t.Pt):this.Jt(n,t.key,t.Pt);for(const n of t.removedTargetIds)this.Jt(n,t.key,t.Pt)}Yt(t){this.forEachTarget(t,n=>{const s=this.Xt(n);switch(t.state){case 0:this.Zt(n)&&s.Mt(t.resumeToken);break;case 1:s.qt(),s.Nt||s.$t(),s.Mt(t.resumeToken);break;case 2:s.qt(),s.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(s.Ut(),s.Mt(t.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),s.Mt(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Gt.forEach((s,i)=>{this.Zt(i)&&n(i)})}ee(t){var n;const s=t.targetId,i=t.bt.count,r=this.ne(s);if(r){const o=r.target;if(Xs(o))if(i===0){const a=new w(o.path);this.Jt(s,a,J.newNoDocument(a,T.min()))}else $(i===1);else{const a=this.se(s);if(a!==i){const u=this.ie(t,a);if(u!==0){this.te(s);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(s,c)}(n=zi.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,h,l){var p,m,C,_,S,B;const rt={localCacheCount:h,existenceFilterCount:l.count},x=l.unchangedNames;return x&&(rt.bloomFilter={applied:c===0,hashCount:(p=x==null?void 0:x.hashCount)!==null&&p!==void 0?p:0,bitmapLength:(_=(C=(m=x==null?void 0:x.bits)===null||m===void 0?void 0:m.bitmap)===null||C===void 0?void 0:C.length)!==null&&_!==void 0?_:0,padding:(B=(S=x==null?void 0:x.bits)===null||S===void 0?void 0:S.padding)!==null&&B!==void 0?B:0}),rt}(u,a,t.bt))}}}}ie(t,n){const{unchangedNames:s,count:i}=t.bt;if(!s||!s.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let u,c;try{u=qt(r).toUint8Array()}catch(h){if(h instanceof Ba)return ce("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw h}try{c=new Hi(u,o,a)}catch(h){return ce(h instanceof De?"BloomFilter error: ":"Applying bloom filter failed: ",h),1}return c.yt===0?1:i!==n-this.re(t.targetId,c)?2:0}re(t,n){const s=this.Kt.getRemoteKeysForTarget(t);let i=0;return s.forEach(r=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;n.At(a)||(this.Jt(t,r,null),i++)}),i}ue(t){const n=new Map;this.Gt.forEach((r,o)=>{const a=this.ne(o);if(a){if(r.current&&Xs(a.target)){const u=new w(a.target.path);this.Qt.get(u)!==null||this.ce(o,u)||this.Jt(o,u,J.newNoDocument(u,t))}r.kt&&(n.set(o,r.Ot()),r.$t())}});let s=D();this.jt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.ne(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.Qt.forEach((r,o)=>o.setReadTime(t));const i=new ss(t,n,this.zt,this.Qt,s);return this.Qt=Rt(),this.jt=Yr(),this.zt=new P(b),i}Ht(t,n){if(!this.Zt(t))return;const s=this.ce(t,n.key)?2:0;this.Xt(t).Ft(n.key,s),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(t))}Jt(t,n,s){if(!this.Zt(t))return;const i=this.Xt(t);this.ce(t,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(t)),s&&(this.Qt=this.Qt.insert(n,s))}removeTarget(t){this.Gt.delete(t)}se(t){const n=this.Xt(t).Ot();return this.Kt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Lt(t){this.Xt(t).Lt()}Xt(t){let n=this.Gt.get(t);return n||(n=new Xr,this.Gt.set(t,n)),n}ae(t){let n=this.jt.get(t);return n||(n=new et(b),this.jt=this.jt.insert(t,n)),n}Zt(t){const n=this.ne(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}ne(t){const n=this.Gt.get(t);return n&&n.Nt?null:this.Kt.he(t)}te(t){this.Gt.set(t,new Xr),this.Kt.getRemoteKeysForTarget(t).forEach(n=>{this.Jt(t,n,null)})}ce(t,n){return this.Kt.getRemoteKeysForTarget(t).has(n)}}function Yr(){return new P(w.comparator)}function Jr(){return new P(w.comparator)}const fd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),pd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),gd=(()=>({and:"AND",or:"OR"}))();class md{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ni(e,t){return e.useProto3Json||Jn(t)?t:{value:t}}function si(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function lu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function se(e){return $(!!e),T.fromTimestamp(function(t){const n=bt(t);return new q(n.seconds,n.nanos)}(e))}function du(e,t){return function(n){return new M(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function fu(e){const t=M.fromString(e);return $(yu(t)),t}function _s(e,t){const n=fu(t);if(n.get(1)!==e.databaseId.projectId)throw new v(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new v(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(pu(n))}function ii(e,t){return du(e.databaseId,t)}function yd(e){const t=fu(e);return t.length===4?M.emptyPath():pu(t)}function Zr(e){return new M(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function pu(e){return $(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function vd(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,c){return u.useProto3Json?($(c===void 0||typeof c=="string"),nt.fromBase64String(c||"")):($(c===void 0||c instanceof Uint8Array),nt.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?f.UNKNOWN:uu(u.code);return new v(c,u.message||"")}(o);n=new hu(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=_s(e,s.document.name),r=se(s.document.updateTime),o=s.document.createTime?se(s.document.createTime):T.min(),a=new gt({mapValue:{fields:s.document.fields}}),u=J.newFoundDocument(i,r,o,a),c=s.targetIds||[],h=s.removedTargetIds||[];n=new vn(c,h,u.key,u)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=_s(e,s.document),r=s.readTime?se(s.readTime):T.min(),o=J.newNoDocument(i,r),a=s.removedTargetIds||[];n=new vn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=_s(e,s.document),r=s.removedTargetIds||[];n=new vn([],r,i,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new cd(i,r),a=s.targetId;n=new cu(a,o)}}return n}function wd(e,t){return{documents:[ii(e,t.path)]}}function Ed(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=ii(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ii(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length!==0)return mu(ht.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Yt(h.field),direction:_d(h.dir)}}(c))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=ni(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Td(e){let t=yd(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){$(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];n.where&&(r=function(h){const l=gu(h);return l instanceof ht&&za(l)?l.getFilters():[l]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new be(Jt(l.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,Jn(l)?null:l}(n.limit));let u=null;n.startAt&&(u=function(h){const l=!!h.before,p=h.values||[];return new On(p,l)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const l=!h.before,p=h.values||[];return new On(p,l)}(n.endAt)),Kl(t,i,o,r,a,"F",u,c)}function Id(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return I()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function gu(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Jt(t.unaryFilter.field);return U.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Jt(t.unaryFilter.field);return U.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jt(t.unaryFilter.field);return U.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Jt(t.unaryFilter.field);return U.create(r,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(e):e.fieldFilter!==void 0?function(t){return U.create(Jt(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return ht.create(t.compositeFilter.filters.map(n=>gu(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return I()}}(t.compositeFilter.op))}(e):I()}function _d(e){return fd[e]}function Cd(e){return pd[e]}function Sd(e){return gd[e]}function Yt(e){return{fieldPath:e.canonicalString()}}function Jt(e){return st.fromServerFormat(e.fieldPath)}function mu(e){return e instanceof U?function(t){if(t.op==="=="){if(Ur(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NAN"}};if(Vr(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ur(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NOT_NAN"}};if(Vr(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yt(t.field),op:Cd(t.op),value:t.value}}}(e):e instanceof ht?function(t){const n=t.getFilters().map(s=>mu(s));return n.length===1?n[0]:{compositeFilter:{op:Sd(t.op),filters:n}}}(e):I()}function yu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,n,s,i,r=T.min(),o=T.min(),a=nt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new St(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t){this.le=t}}function Dd(e){const t=Td({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Js(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.sn=new kd}addToCollectionParentIndex(t,n){return this.sn.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getIndexType(t,n){return d.resolve(0)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,n){return d.resolve(kt.min())}getMinOffsetFromCollectionGroup(t,n){return d.resolve(kt.min())}updateCollectionGroup(t,n,s){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class kd{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new et(M.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new et(M.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static Nn(){return new fe(0)}static kn(){return new fe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.changes=new we(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,J.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?d.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(s!==null&&xe(s.mutation,i,Ct.empty(),q.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,D()).next(()=>s))}getLocalViewOfDocuments(t,n,s=D()){const i=Ft();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=Ae();return r.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Ft();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,D()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=Rt();const o=Re(),a=Re();return n.forEach((u,c)=>{const h=s.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof ns)?r=r.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),xe(h.mutation,c,h.mutation.getFieldMask(),q.now())):o.set(c.key,Ct.empty())}),this.recalculateAndSaveOverlays(t,r).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var l;return a.set(c,new Rd(h,(l=o.get(c))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Re();let i=new P((o,a)=>o-a),r=D();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=s.get(u)||Ct.empty();h=a.applyToLocalView(c,h),s.set(u,h);const l=(i.get(a.batchId)||D()).add(u);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,l=tu();h.forEach(p=>{if(!r.has(p)){const m=ou(n.get(p),s.get(p));m!==null&&l.set(p,m),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,l))}return d.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return w.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Xa(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):d.resolve(Ft());let a=-1,u=r;return o.next(c=>d.forEach(c,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),r.get(h)?d.resolve():this.remoteDocumentCache.getEntry(t,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(t,c,r)).next(()=>this.computeViews(t,u,c,D())).next(h=>({batchId:a,changes:Xl(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(s=>{let i=Ae();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=Ae();return this.indexManager.getCollectionParents(t,i).next(o=>d.forEach(o,a=>{const u=function(c,h){return new en(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,s).next(c=>{c.forEach((h,l)=>{r=r.insert(h,l)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,i))).next(r=>{i.forEach((a,u)=>{const c=u.getKey();r.get(c)===null&&(r=r.insert(c,J.newInvalidDocument(c)))});let o=Ae();return r.forEach((a,u)=>{const c=i.get(a);c!==void 0&&xe(c.mutation,u,Ct.empty(),q.now()),ts(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(t){this.serializer=t,this.us=new Map,this.cs=new Map}getBundleMetadata(t,n){return d.resolve(this.us.get(n))}saveBundleMetadata(t,n){var s;return this.us.set(n.id,{id:(s=n).id,version:s.version,createTime:se(s.createTime)}),d.resolve()}getNamedQuery(t,n){return d.resolve(this.cs.get(n))}saveNamedQuery(t,n){return this.cs.set(n.name,function(s){return{name:s.name,query:Dd(s.bundledQuery),readTime:se(s.readTime)}}(n)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.overlays=new P(w.comparator),this.hs=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ft();return d.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.de(t,n,r)}),d.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.hs.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.hs.delete(s)),d.resolve()}getOverlaysForCollection(t,n,s){const i=Ft(),r=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return d.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new P((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=r.get(c.largestBatchId);h===null&&(h=Ft(),r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Ft(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return d.resolve(a)}de(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(s.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ud(n,s));let r=this.hs.get(n);r===void 0&&(r=D(),this.hs.set(n,r)),this.hs.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.ls=new et(j.fs),this.ds=new et(j._s)}isEmpty(){return this.ls.isEmpty()}addReference(t,n){const s=new j(t,n);this.ls=this.ls.add(s),this.ds=this.ds.add(s)}ws(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.gs(new j(t,n))}ys(t,n){t.forEach(s=>this.removeReference(s,n))}ps(t){const n=new w(new M([])),s=new j(n,t),i=new j(n,t+1),r=[];return this.ds.forEachInRange([s,i],o=>{this.gs(o),r.push(o.key)}),r}Is(){this.ls.forEach(t=>this.gs(t))}gs(t){this.ls=this.ls.delete(t),this.ds=this.ds.delete(t)}Ts(t){const n=new w(new M([])),s=new j(n,t),i=new j(n,t+1);let r=D();return this.ds.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new j(t,0),s=this.ls.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class j{constructor(t,n){this.key=t,this.Es=n}static fs(t,n){return w.comparator(t.key,n.key)||b(t.Es,n.Es)}static _s(t,n){return b(t.Es,n.Es)||w.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new et(j.fs)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ad(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new j(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.Ps(s),r=i<0?0:i;return d.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new j(n,0),i=new j(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.vs(o.Es);r.push(a)}),d.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new et(b);return n.forEach(i=>{const r=new j(i,0),o=new j(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.Es)})}),d.resolve(this.bs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;w.isDocumentKey(r)||(r=r.child(""));const o=new j(new w(r),0);let a=new et(b);return this.Rs.forEachWhile(u=>{const c=u.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.Es)),!0)},o),d.resolve(this.bs(a))}bs(t){const n=[];return t.forEach(s=>{const i=this.vs(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){$(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return d.forEach(n.mutations,i=>{const r=new j(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Rs=s})}Dn(t){}containsKey(t,n){const s=new j(n,0),i=this.Rs.firstAfterOrEqual(s);return d.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}Vs(t,n){return this.Ps(t)}Ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}vs(t){const n=this.Ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t){this.Ss=t,this.docs=new P(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return d.resolve(s?s.document.mutableCopy():J.newInvalidDocument(n))}getEntries(t,n){let s=Rt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():J.newInvalidDocument(i))}),d.resolve(s)}getDocumentsMatchingQuery(t,n,s,i){let r=Rt();const o=n.path,a=new w(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||kl(Nl(h),s)<=0||(i.has(h.key)||ts(n,h))&&(r=r.insert(h.key,h.mutableCopy()))}return d.resolve(r)}getAllFromCollectionGroup(t,n,s,i){I()}Ds(t,n){return d.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Fd(this)}getSize(t){return d.resolve(this.size)}}class Fd extends bd{constructor(t){super(),this.rs=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(t,i)):this.rs.removeEntry(s)}),d.waitFor(n)}getFromCache(t,n){return this.rs.getEntry(t,n)}getAllFromCache(t,n){return this.rs.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t){this.persistence=t,this.Cs=new we(n=>Ui(n),$i),this.lastRemoteSnapshotVersion=T.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Ki,this.targetCount=0,this.ks=fe.Nn()}forEachTarget(t,n){return this.Cs.forEach((s,i)=>n(i)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.xs)}allocateTargetId(t){return this.highestTargetId=this.ks.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.xs&&(this.xs=n),d.resolve()}$n(t){this.Cs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ks=new fe(n),this.highestTargetId=n),t.sequenceNumber>this.xs&&(this.xs=t.sequenceNumber)}addTargetData(t,n){return this.$n(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.$n(n),d.resolve()}removeTargetData(t,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),d.waitFor(r).next(()=>i)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const s=this.Cs.get(n)||null;return d.resolve(s)}addMatchingKeys(t,n,s){return this.Ns.ws(n,s),d.resolve()}removeMatchingKeys(t,n,s){this.Ns.ys(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),d.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Ns.ps(n),d.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ns.Ts(n);return d.resolve(s)}containsKey(t,n){return d.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t,n){this.Ms={},this.overlays={},this.Os=new Li(0),this.$s=!1,this.$s=!0,this.referenceDelegate=t(this),this.Fs=new Vd(this),this.indexManager=new Nd,this.remoteDocumentCache=function(s){return new Pd(s)}(s=>this.referenceDelegate.Bs(s)),this.serializer=new Ad(n),this.Ls=new Od(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Md,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Ms[t.toKey()];return s||(s=new Ld(n,this.referenceDelegate),this.Ms[t.toKey()]=s),s}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const i=new $d(this.Os.next());return this.referenceDelegate.qs(),s(i).next(r=>this.referenceDelegate.Us(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ks(t,n){return d.or(Object.values(this.Ms).map(s=>()=>s.containsKey(t,n)))}}class $d extends Rl{constructor(t){super(),this.currentSequenceNumber=t}}class Gi{constructor(t){this.persistence=t,this.Gs=new Ki,this.Qs=null}static js(t){return new Gi(t)}get zs(){if(this.Qs)return this.Qs;throw I()}addReference(t,n,s){return this.Gs.addReference(s,n),this.zs.delete(s.toString()),d.resolve()}removeReference(t,n,s){return this.Gs.removeReference(s,n),this.zs.add(s.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.zs.add(n.toString()),d.resolve()}removeTarget(t,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.zs.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}qs(){this.Qs=new Set}Us(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.zs,s=>{const i=w.fromPath(s);return this.Ws(t,i).next(r=>{r||n.removeEntry(i,T.min())})}).next(()=>(this.Qs=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ws(t,n).next(s=>{s?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(t){return 0}Ws(t,n){return d.or([()=>d.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ks(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.$i=s,this.Fi=i}static Bi(t,n){let s=D(),i=D();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Qi(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.Li=!1}initialize(t,n){this.qi=t,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(t,n,s,i){return this.Ui(t,n).next(r=>r||this.Ki(t,n,i,s)).next(r=>r||this.Gi(t,n))}Ui(t,n){if(qr(n))return d.resolve(null);let s=It(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Js(n,null,"F"),s=It(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=D(...r);return this.qi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(u=>{const c=this.Qi(n,a);return this.ji(n,c,o,u.readTime)?this.Ui(t,Js(n,null,"F")):this.zi(t,c,n,u)}))})))}Ki(t,n,s,i){return qr(n)||i.isEqual(T.min())?this.Gi(t,n):this.qi.getDocuments(t,s).next(r=>{const o=this.Qi(n,r);return this.ji(n,o,s,i)?this.Gi(t,n):(Or()<=k.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zs(n)),this.zi(t,o,n,Dl(i,-1)))})}Qi(t,n){let s=new et(Ja(t));return n.forEach((i,r)=>{ts(t,r)&&(s=s.add(r))}),s}ji(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Gi(t,n){return Or()<=k.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Zs(n)),this.qi.getDocumentsMatchingQuery(t,n,kt.min())}zi(t,n,s,i){return this.qi.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t,n,s,i){this.persistence=t,this.Wi=n,this.serializer=i,this.Hi=new P(b),this.Ji=new we(r=>Ui(r),$i),this.Yi=new Map,this.Xi=t.getRemoteDocumentCache(),this.Fs=t.getTargetCache(),this.Ls=t.getBundleCache(),this.Zi(s)}Zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new xd(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Hi))}}function qd(e,t,n,s){return new jd(e,t,n,s)}async function vu(e,t){const n=N(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Zi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=D();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(s,u).next(c=>({tr:c,removedBatchIds:o,addedBatchIds:a}))})})}function wu(e){const t=N(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Fs.getLastRemoteSnapshotVersion(n))}function zd(e,t){const n=N(e),s=t.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];t.targetChanges.forEach((h,l)=>{const p=i.get(l);if(!p)return;a.push(n.Fs.removeMatchingKeys(r,h.removedDocuments,l).next(()=>n.Fs.addMatchingKeys(r,h.addedDocuments,l)));let m=p.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(l)!==null?m=m.withResumeToken(nt.EMPTY_BYTE_STRING,T.min()).withLastLimboFreeSnapshotVersion(T.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),i=i.insert(l,m),function(C,_,S){return C.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,m,h)&&a.push(n.Fs.updateTargetData(r,m))});let u=Rt(),c=D();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(Hd(r,o,t.documentUpdates).next(h=>{u=h.er,c=h.nr})),!s.isEqual(T.min())){const h=n.Fs.getLastRemoteSnapshotVersion(r).next(l=>n.Fs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return d.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,c)).next(()=>u)}).then(r=>(n.Hi=i,r))}function Hd(e,t,n){let s=D(),i=D();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=Rt();return n.forEach((a,u)=>{const c=r.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(T.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{er:o,nr:i}})}function Kd(e,t){const n=N(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Fs.getTargetData(s,t).next(r=>r?(i=r,d.resolve(i)):n.Fs.allocateTargetId(s).next(o=>(i=new St(t,o,"TargetPurposeListen",s.currentSequenceNumber),n.Fs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Hi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(s.targetId,s),n.Ji.set(t,s.targetId)),s})}async function ri(e,t,n){const s=N(e),i=s.Hi.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ze(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Hi=s.Hi.remove(t),s.Ji.delete(i.target)}function to(e,t,n){const s=N(e);let i=T.min(),r=D();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const h=N(a),l=h.Ji.get(c);return l!==void 0?d.resolve(h.Hi.get(l)):h.Fs.getTargetData(u,c)}(s,o,It(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Fs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.Wi.getDocumentsMatchingQuery(o,t,n?i:T.min(),n?r:D())).next(a=>(Gd(s,Gl(t),a),{documents:a,sr:r})))}function Gd(e,t,n){let s=e.Yi.get(t)||T.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Yi.set(t,s)}class eo{constructor(){this.activeTargetIds=Zl()}hr(t){this.activeTargetIds=this.activeTargetIds.add(t)}lr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ar(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Qd{constructor(){this.Wr=new eo,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Wr.hr(t),this.Hr[t]||"not-current"}updateQueryState(t,n,s){this.Hr[t]=n}removeLocalQueryTarget(t){this.Wr.lr(t)}isLocalQueryTarget(t){return this.Wr.activeTargetIds.has(t)}clearQueryState(t){delete this.Hr[t]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(t){return this.Wr.activeTargetIds.has(t)}start(){return this.Wr=new eo,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{Jr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(t){this.no.push(t)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.no)t(0)}eo(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.no)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn=null;function Cs(){return pn===null?pn=268435456+Math.round(2147483648*Math.random()):pn++,"0x"+pn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t){this.io=t.io,this.ro=t.ro}oo(t){this.uo=t}co(t){this.ao=t}onMessage(t){this.ho=t}close(){this.ro()}send(t){this.io(t)}lo(){this.uo()}fo(t){this.ao(t)}_o(t){this.ho(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X="WebChannelConnection";class Jd extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.wo=n+"://"+t.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(t,n,s,i,r){const o=Cs(),a=this.Io(t,n);y("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const u={};return this.To(u,i,r),this.Eo(t,a,u,s).then(c=>(y("RestConnection",`Received RPC '${t}' ${o}: `,c),c),c=>{throw ce("RestConnection",`RPC '${t}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}Ao(t,n,s,i,r,o){return this.po(t,n,s,i,r)}To(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+ve,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}Io(t,n){const s=Xd[t];return`${this.wo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Eo(t,n,s,i){const r=Cs();return new Promise((o,a)=>{const u=new gl;u.setWithCredentials(!0),u.listenOnce(dl.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ts.NO_ERROR:const h=u.getResponseJson();y(X,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(h)),o(h);break;case Ts.TIMEOUT:y(X,`RPC '${t}' ${r} timed out`),a(new v(f.DEADLINE_EXCEEDED,"Request time out"));break;case Ts.HTTP_ERROR:const l=u.getStatus();if(y(X,`RPC '${t}' ${r} failed with status:`,l,"response text:",u.getResponseText()),l>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const C=function(_){const S=_.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(S)>=0?S:f.UNKNOWN}(m.status);a(new v(C,m.message))}else a(new v(f.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new v(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{y(X,`RPC '${t}' ${r} completed.`)}});const c=JSON.stringify(i);y(X,`RPC '${t}' ${r} sending request:`,i),u.send(n,"POST",c,s,15)})}Ro(t,n,s){const i=Cs(),r=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=hl(),a=ll(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(u.xmlHttpFactory=new pl({})),this.To(u.initMessageHeaders,n,s),u.encodeInitMessageHeaders=!0;const c=r.join("");y(X,`Creating RPC '${t}' stream ${i}: ${c}`,u);const h=o.createWebChannel(c,u);let l=!1,p=!1;const m=new Yd({io:_=>{p?y(X,`Not sending because RPC '${t}' stream ${i} is closed:`,_):(l||(y(X,`Opening RPC '${t}' stream ${i} transport.`),h.open(),l=!0),y(X,`RPC '${t}' stream ${i} sending:`,_),h.send(_))},ro:()=>h.close()}),C=(_,S,B)=>{_.listen(S,rt=>{try{B(rt)}catch(x){setTimeout(()=>{throw x},0)}})};return C(h,hn.EventType.OPEN,()=>{p||y(X,`RPC '${t}' stream ${i} transport opened.`)}),C(h,hn.EventType.CLOSE,()=>{p||(p=!0,y(X,`RPC '${t}' stream ${i} transport closed`),m.fo())}),C(h,hn.EventType.ERROR,_=>{p||(p=!0,ce(X,`RPC '${t}' stream ${i} transport errored:`,_),m.fo(new v(f.UNAVAILABLE,"The operation could not be completed")))}),C(h,hn.EventType.MESSAGE,_=>{var S;if(!p){const B=_.data[0];$(!!B);const rt=B,x=rt.error||((S=rt[0])===null||S===void 0?void 0:S.error);if(x){y(X,`RPC '${t}' stream ${i} received error:`,x);const K=x.status;let ft=function(us){const Wt=F[us];if(Wt!==void 0)return uu(Wt)}(K),Qt=x.message;ft===void 0&&(ft=f.INTERNAL,Qt="Unknown error status: "+K+" with message "+x.message),p=!0,m.fo(new v(ft,Qt)),h.close()}else y(X,`RPC '${t}' stream ${i} received:`,B),m._o(B)}}),C(a,fl.STAT_EVENT,_=>{_.stat===Rr.PROXY?y(X,`RPC '${t}' stream ${i} detected buffering proxy`):_.stat===Rr.NOPROXY&&y(X,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.lo()},0),m}}function Ss(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(e){return new md(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t,n,s=1e3,i=1.5,r=6e4){this.si=t,this.timerId=n,this.vo=s,this.Po=i,this.bo=r,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(t){this.cancel();const n=Math.floor(this.Vo+this.No()),s=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-s);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),t())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t,n,s,i,r,o,a,u){this.si=t,this.Mo=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new Eu(t,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(t){this.Wo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(t,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,t!==4?this.Lo.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(Tt(n.toString()),Tt("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.co(n)}Jo(){}auth(){this.state=1;const t=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.$o===n&&this.Xo(s,i)},s=>{t(()=>{const i=new v(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Zo(i)})})}Xo(t,n){const s=this.Yo(this.$o);this.stream=this.tu(t,n),this.stream.oo(()=>{s(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{s(()=>this.Zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Yo(t){return n=>{this.si.enqueueAndForget(()=>this.$o===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tf extends Zd{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}tu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.Lo.reset();const n=vd(this.serializer,t),s=function(i){if(!("targetChange"in i))return T.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?T.min():r.readTime?se(r.readTime):T.min()}(t);return this.listener.eu(n,s)}nu(t){const n={};n.database=Zr(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;if(o=Xs(a)?{documents:wd(i,a)}:{query:Ed(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=lu(i,r.resumeToken);const u=ni(i,r.expectedCount);u!==null&&(o.expectedCount=u)}else if(r.snapshotVersion.compareTo(T.min())>0){o.readTime=si(i,r.snapshotVersion.toTimestamp());const u=ni(i,r.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,t);const s=Id(this.serializer,t);s&&(n.labels=s),this.zo(n)}su(t){const n={};n.database=Zr(this.serializer),n.removeTarget=t,this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}po(t,n,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.po(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(f.UNKNOWN,i.toString())})}Ao(t,n,s,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Ao(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new v(f.UNKNOWN,r.toString())})}terminate(){this.hu=!0}}class nf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(t){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.gu("Offline")))}set(t){this.Iu(),this.du=0,t==="Online"&&(this.wu=!1),this.gu(t)}gu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}yu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Tt(n),this.wu=!1):y("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=r,this.vu.Jr(o=>{s.enqueueAndForget(async()=>{rn(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=N(a);u.Au.add(4),await sn(u),u.Pu.set("Unknown"),u.Au.delete(4),await rs(u)}(this))})}),this.Pu=new nf(s,i)}}async function rs(e){if(rn(e))for(const t of e.Ru)await t(!0)}async function sn(e){for(const t of e.Ru)await t(!1)}function Tu(e,t){const n=N(e);n.Eu.has(t.targetId)||(n.Eu.set(t.targetId,t),Yi(n)?Xi(n):Ee(n).Uo()&&Wi(n,t))}function Iu(e,t){const n=N(e),s=Ee(n);n.Eu.delete(t),s.Uo()&&_u(n,t),n.Eu.size===0&&(s.Uo()?s.Qo():rn(n)&&n.Pu.set("Unknown"))}function Wi(e,t){if(e.bu.Lt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(T.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ee(e).nu(t)}function _u(e,t){e.bu.Lt(t),Ee(e).su(t)}function Xi(e){e.bu=new dd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),he:t=>e.Eu.get(t)||null,oe:()=>e.datastore.serializer.databaseId}),Ee(e).start(),e.Pu.mu()}function Yi(e){return rn(e)&&!Ee(e).qo()&&e.Eu.size>0}function rn(e){return N(e).Au.size===0}function Cu(e){e.bu=void 0}async function rf(e){e.Eu.forEach((t,n)=>{Wi(e,t)})}async function of(e,t){Cu(e),Yi(e)?(e.Pu.pu(t),Xi(e)):e.Pu.set("Unknown")}async function af(e,t,n){if(e.Pu.set("Online"),t instanceof hu&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Eu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Eu.delete(o),s.bu.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await so(e,s)}else if(t instanceof vn?e.bu.Wt(t):t instanceof cu?e.bu.ee(t):e.bu.Yt(t),!n.isEqual(T.min()))try{const s=await wu(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.bu.ue(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.Eu.get(u);c&&i.Eu.set(u,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,u)=>{const c=i.Eu.get(a);if(!c)return;i.Eu.set(a,c.withResumeToken(nt.EMPTY_BYTE_STRING,c.snapshotVersion)),_u(i,a);const h=new St(c.target,a,u,c.sequenceNumber);Wi(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await so(e,s)}}async function so(e,t,n){if(!Ze(t))throw t;e.Au.add(1),await sn(e),e.Pu.set("Offline"),n||(n=()=>wu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.Au.delete(1),await rs(e)})}async function io(e,t){const n=N(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=rn(n);n.Au.add(3),await sn(n),s&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Au.delete(3),await rs(n)}async function uf(e,t){const n=N(e);t?(n.Au.delete(2),await rs(n)):t||(n.Au.add(2),await sn(n),n.Pu.set("Unknown"))}function Ee(e){return e.Vu||(e.Vu=function(t,n,s){const i=N(t);return i.lu(),new tf(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{oo:rf.bind(null,e),co:of.bind(null,e),eu:af.bind(null,e)}),e.Ru.push(async t=>{t?(e.Vu.Go(),Yi(e)?Xi(e):e.Pu.set("Unknown")):(await e.Vu.stop(),Cu(e))})),e.Vu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new Ji(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Su(e,t){if(Tt("AsyncQueue",`${t}: ${e}`),Ze(e))return new v(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t){this.comparator=t?(n,s)=>t(n,s)||w.comparator(n.key,s.key):(n,s)=>w.comparator(n.key,s.key),this.keyedMap=Ae(),this.sortedSet=new P(this.comparator)}static emptySet(t){return new ie(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ie)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new ie;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.Du=new P(w.comparator)}track(t){const n=t.doc.key,s=this.Du.get(n);s?t.type!==0&&s.type===3?this.Du=this.Du.insert(n,t):t.type===3&&s.type!==1?this.Du=this.Du.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Du=this.Du.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Du=this.Du.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Du=this.Du.remove(n):t.type===1&&s.type===2?this.Du=this.Du.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Du=this.Du.insert(n,{type:2,doc:t.doc}):I():this.Du=this.Du.insert(n,t)}Cu(){const t=[];return this.Du.inorderTraversal((n,s)=>{t.push(s)}),t}}class pe{constructor(t,n,s,i,r,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new pe(t,n,ie.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Zn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.xu=void 0,this.listeners=[]}}class hf{constructor(){this.queries=new we(t=>Ya(t),Zn),this.onlineState="Unknown",this.Nu=new Set}}async function lf(e,t){const n=N(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new cf),i)try{r.xu=await n.onListen(s)}catch(o){const a=Su(o,`Initialization of query '${Zs(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.ku(n.onlineState),r.xu&&t.Mu(r.xu)&&Zi(n)}async function df(e,t){const n=N(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function ff(e,t){const n=N(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Mu(i)&&(s=!0);o.xu=i}}s&&Zi(n)}function pf(e,t,n){const s=N(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function Zi(e){e.Nu.forEach(t=>{t.next()})}class gf{constructor(t,n,s){this.query=t,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=s||{}}Mu(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new pe(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.$u?this.Bu(t)&&(this.Ou.next(t),n=!0):this.Lu(t,this.onlineState)&&(this.qu(t),n=!0),this.Fu=t,n}onError(t){this.Ou.error(t)}ku(t){this.onlineState=t;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,t)&&(this.qu(this.Fu),n=!0),n}Lu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Uu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Bu(t){if(t.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(t){t=pe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.$u=!0,this.Ou.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(t){this.key=t}}class Du{constructor(t){this.key=t}}class mf{constructor(t,n){this.query=t,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=D(),this.mutatedKeys=D(),this.Zu=Ja(t),this.tc=new ie(this.Zu)}get ec(){return this.Ju}nc(t,n){const s=n?n.sc:new ro,i=n?n.tc:this.tc;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,l)=>{const p=i.get(h),m=ts(this.query,l)?l:null,C=!!p&&this.mutatedKeys.has(p.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let S=!1;p&&m?p.data.isEqual(m.data)?C!==_&&(s.track({type:3,doc:m}),S=!0):this.ic(p,m)||(s.track({type:2,doc:m}),S=!0,(u&&this.Zu(m,u)>0||c&&this.Zu(m,c)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),S=!0):p&&!m&&(s.track({type:1,doc:p}),S=!0,(u||c)&&(a=!0)),S&&(m?(o=o.add(m),r=_?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{tc:o,sc:s,ji:a,mutatedKeys:r}}ic(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.tc;this.tc=t.tc,this.mutatedKeys=t.mutatedKeys;const r=t.sc.Cu();r.sort((c,h)=>function(l,p){const m=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return m(l)-m(p)}(c.type,h.type)||this.Zu(c.doc,h.doc)),this.rc(s);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,u=a!==this.Yu;return this.Yu=a,r.length!==0||u?{snapshot:new pe(this.query,t.tc,i,r,t.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new ro,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(t){return!this.Ju.has(t)&&!!this.tc.has(t)&&!this.tc.get(t).hasLocalMutations}rc(t){t&&(t.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=t.current)}oc(){if(!this.current)return[];const t=this.Xu;this.Xu=D(),this.tc.forEach(s=>{this.cc(s.key)&&(this.Xu=this.Xu.add(s.key))});const n=[];return t.forEach(s=>{this.Xu.has(s)||n.push(new Du(s))}),this.Xu.forEach(s=>{t.has(s)||n.push(new Au(s))}),n}ac(t){this.Ju=t.sr,this.Xu=D();const n=this.nc(t.documents);return this.applyChanges(n,!0)}hc(){return pe.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class yf{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class vf{constructor(t){this.key=t,this.lc=!1}}class wf{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new we(a=>Ya(a),Zn),this._c=new Map,this.wc=new Set,this.mc=new P(w.comparator),this.gc=new Map,this.yc=new Ki,this.Ic={},this.Tc=new Map,this.Ec=fe.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function Ef(e,t){const n=Df(e);let s,i;const r=n.dc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.hc();else{const o=await Kd(n.localStore,It(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Tf(n,t,s,a==="current",o.resumeToken),n.isPrimaryClient&&Tu(n.remoteStore,o)}return i}async function Tf(e,t,n,s,i){e.Rc=(l,p,m)=>async function(C,_,S,B){let rt=_.view.nc(S);rt.ji&&(rt=await to(C.localStore,_.query,!1).then(({documents:ft})=>_.view.nc(ft,rt)));const x=B&&B.targetChanges.get(_.targetId),K=_.view.applyChanges(rt,C.isPrimaryClient,x);return ao(C,_.targetId,K.uc),K.snapshot}(e,l,p,m);const r=await to(e.localStore,t,!0),o=new mf(t,r.sr),a=o.nc(r.documents),u=nn.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",i),c=o.applyChanges(a,e.isPrimaryClient,u);ao(e,n,c.uc);const h=new yf(t,n,o);return e.dc.set(t,h),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function If(e,t){const n=N(e),s=n.dc.get(t),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter(r=>!Zn(r,t))),void n.dc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ri(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Iu(n.remoteStore,s.targetId),oi(n,s.targetId)}).catch(Mi)):(oi(n,s.targetId),await ri(n.localStore,s.targetId,!0))}async function Nu(e,t){const n=N(e);try{const s=await zd(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.gc.get(r);o&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?$(o.lc):i.removedDocuments.size>0&&($(o.lc),o.lc=!1))}),await bu(n,s,t)}catch(s){await Mi(s)}}function oo(e,t,n){const s=N(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.dc.forEach((r,o)=>{const a=o.view.ku(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=N(r);a.onlineState=o;let u=!1;a.queries.forEach((c,h)=>{for(const l of h.listeners)l.ku(o)&&(u=!0)}),u&&Zi(a)}(s.eventManager,t),i.length&&s.fc.eu(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function _f(e,t,n){const s=N(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.gc.get(t),r=i&&i.key;if(r){let o=new P(w.comparator);o=o.insert(r,J.newNoDocument(r,T.min()));const a=D().add(r),u=new ss(T.min(),new Map,new P(b),o,a);await Nu(s,u),s.mc=s.mc.remove(r),s.gc.delete(t),tr(s)}else await ri(s.localStore,t,!1).then(()=>oi(s,t,n)).catch(Mi)}function oi(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e._c.get(t))e.dc.delete(s),n&&e.fc.vc(s,n);e._c.delete(t),e.isPrimaryClient&&e.yc.ps(t).forEach(s=>{e.yc.containsKey(s)||ku(e,s)})}function ku(e,t){e.wc.delete(t.path.canonicalString());const n=e.mc.get(t);n!==null&&(Iu(e.remoteStore,n),e.mc=e.mc.remove(t),e.gc.delete(n),tr(e))}function ao(e,t,n){for(const s of n)s instanceof Au?(e.yc.addReference(s.key,t),Cf(e,s)):s instanceof Du?(y("SyncEngine","Document no longer in limbo: "+s.key),e.yc.removeReference(s.key,t),e.yc.containsKey(s.key)||ku(e,s.key)):I()}function Cf(e,t){const n=t.key,s=n.path.canonicalString();e.mc.get(n)||e.wc.has(s)||(y("SyncEngine","New document in limbo: "+n),e.wc.add(s),tr(e))}function tr(e){for(;e.wc.size>0&&e.mc.size<e.maxConcurrentLimboResolutions;){const t=e.wc.values().next().value;e.wc.delete(t);const n=new w(M.fromString(t)),s=e.Ec.next();e.gc.set(s,new vf(n)),e.mc=e.mc.insert(n,s),Tu(e.remoteStore,new St(It(Qa(n.path)),s,"TargetPurposeLimboResolution",Li.ct))}}async function bu(e,t,n){const s=N(e),i=[],r=[],o=[];s.dc.isEmpty()||(s.dc.forEach((a,u)=>{o.push(s.Rc(u,t,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=Qi.Bi(u.targetId,c);r.push(h)}}))}),await Promise.all(o),s.fc.eu(i),await async function(a,u){const c=N(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>d.forEach(u,l=>d.forEach(l.$i,p=>c.persistence.referenceDelegate.addReference(h,l.targetId,p)).next(()=>d.forEach(l.Fi,p=>c.persistence.referenceDelegate.removeReference(h,l.targetId,p)))))}catch(h){if(!Ze(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const l=h.targetId;if(!h.fromCache){const p=c.Hi.get(l),m=p.snapshotVersion,C=p.withLastLimboFreeSnapshotVersion(m);c.Hi=c.Hi.insert(l,C)}}}(s.localStore,r))}async function Sf(e,t){const n=N(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await vu(n.localStore,t);n.currentUser=t,function(i,r){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new v(f.CANCELLED,r))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await bu(n,s.tr)}}function Af(e,t){const n=N(e),s=n.gc.get(t);if(s&&s.lc)return D().add(s.key);{let i=D();const r=n._c.get(t);if(!r)return i;for(const o of r){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function Df(e){const t=N(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Nu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Af.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=_f.bind(null,t),t.fc.eu=ff.bind(null,t.eventManager),t.fc.vc=pf.bind(null,t.eventManager),t}class uo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=is(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return qd(this.persistence,new Bd,t.initialUser,this.serializer)}createPersistence(t){return new Ud(Gi.js,this.serializer)}createSharedClientState(t){return new Qd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Nf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>oo(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sf.bind(null,this.syncEngine),await uf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new hf}createDatastore(t){const n=is(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Jd(i));var i;return function(r,o,a,u){return new ef(r,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>oo(this.syncEngine,a,0),o=no.D()?new no:new Wd,new sf(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,u,c){const h=new wf(s,i,r,o,a,u);return c&&(h.Ac=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=N(t);y("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await sn(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Vc(this.observer.next,t)}error(t){this.observer.error?this.Vc(this.observer.error,t):Tt("Uncaught Error in snapshot listener:",t.toString())}Sc(){this.muted=!0}Vc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Y.UNAUTHENTICATED,this.clientId=Sl.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Su(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function As(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await vu(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function co(e,t){e.asyncQueue.verifyOperationInProgress();const n=await xf(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>io(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>io(t.remoteStore,r)),e._onlineComponents=t}function Rf(e){return e.name==="FirebaseError"?e.code===f.FAILED_PRECONDITION||e.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function xf(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await As(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Rf(n))throw n;ce("Error using user provided cache. Falling back to memory cache: "+n),await As(e,new uo)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await As(e,new uo);return e._offlineComponents}async function Of(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await co(e,e._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await co(e,new Nf))),e._onlineComponents}async function Mf(e){const t=await Of(e),n=t.eventManager;return n.onListen=Ef.bind(null,t.syncEngine),n.onUnlisten=If.bind(null,t.syncEngine),n}function Lf(e,t,n={}){const s=new Ut;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const c=new kf({next:l=>{r.enqueueAndForget(()=>df(i,h)),l.fromCache&&a.source==="server"?u.reject(new v(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(l)},error:l=>u.reject(l)}),h=new gf(o,c,{includeMetadataChanges:!0,Uu:!0});return lf(i,h)}(await Mf(e),e.asyncQueue,t,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(e,t,n){if(!n)throw new v(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ff(e,t,n,s){if(t===!0&&s===!0)throw new v(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function lo(e){if(w.isDocumentKey(e))throw new v(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function os(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function ai(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new v(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=os(e);throw new v(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new v(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ff("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new v(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new v(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new yl;switch(n.type){case"firstParty":return new Tl(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new v(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ho.get(t);n&&(y("ComponentProvider","Removing Datastore"),ho.delete(t),n.terminate())}(this),Promise.resolve()}}function Vf(e,t,n,s={}){var i;const r=(e=ai(e,er))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&ce("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Y.MOCK_USER;else{o=Co(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new v(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Y(u)}e._authCredentials=new vl(new Ua(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new re(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _t(this.firestore,t,this._key)}}class Te{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Te(this.firestore,t,this._query)}}class re extends Te{constructor(t,n,s){super(t,n,Qa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _t(this.firestore,null,new w(t))}withConverter(t){return new re(this.firestore,t,this._path)}}function Qp(e,t,...n){if(e=oe(e),Pf("collection","path",t),e instanceof er){const s=M.fromString(t,...n);return lo(s),new re(e,null,s)}{if(!(e instanceof _t||e instanceof re))throw new v(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(M.fromString(t,...n));return lo(s),new re(e.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new Eu(this,"async_queue_retry"),this.Yc=()=>{const n=Ss();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const t=Ss();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xc(),this.Zc(t)}enterRestrictedMode(t){if(!this.Qc){this.Qc=!0,this.Hc=t||!1;const n=Ss();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(t){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new Ut;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Gc.push(t),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(t){if(!Ze(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(t){const n=this.Kc.then(()=>(this.Wc=!0,t().catch(s=>{this.zc=s,this.Wc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Tt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Wc=!1,s))));return this.Kc=n,n}enqueueAfterDelay(t,n,s){this.Xc(),this.Jc.indexOf(t)>-1&&(n=0);const i=Ji.createAndSchedule(this,t,n,s,r=>this.ea(r));return this.jc.push(i),i}Xc(){this.zc&&I()}verifyOperationInProgress(){}async na(){let t;do t=this.Kc,await t;while(t!==this.Kc)}sa(t){for(const n of this.jc)if(n.timerId===t)return!0;return!1}ia(t){return this.na().then(()=>{this.jc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.na()})}ra(t){this.Jc.push(t)}ea(t){const n=this.jc.indexOf(t);this.jc.splice(n,1)}}class Ru extends er{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new Uf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xu(this),this._firestoreClient.terminate()}}function $f(e,t){const n=typeof e=="object"?e:xo(),s=typeof e=="string"?e:t||"(default)",i=ko(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=_o("firestore");r&&Vf(i,...r)}return i}function Bf(e){return e._firestoreClient||xu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function xu(e){var t,n,s;const i=e._freezeSettings(),r=function(o,a,u,c){return new Ml(o,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new bf(e._authCredentials,e._appCheckCredentials,e._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ge(nt.fromBase64String(t))}catch(n){throw new v(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ge(nt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new v(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new v(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new v(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return b(this._lat,t._lat)||b(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=/^__.*__$/;function Lu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class sr{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.oa(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(t){return new sr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ca({path:s,ha:!1});return i.la(t),i}fa(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ca({path:s,ha:!1});return i.oa(),i}da(t){return this.ca({path:void 0,ha:!0})}_a(t){return ui(t,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let t=0;t<this.path.length;t++)this.la(this.path.get(t))}la(t){if(t.length===0)throw this._a("Document fields must not be empty");if(Lu(this.ua)&&jf.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class qf{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||is(t)}ga(t,n,s,i=!1){return new sr({ua:t,methodName:n,ma:s,path:st.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zf(e){const t=e._freezeSettings(),n=is(e._databaseId);return new qf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Hf(e,t,n,s=!1){return ir(n,e.ga(s?4:3,t))}function ir(e,t){if(Pu(e=oe(e)))return Gf("Unsupported field value:",t,e),Kf(e,t);if(e instanceof Mu)return function(n,s){if(!Lu(s.ua))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ha&&t.ua!==4)throw t._a("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=ir(o,s.da(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=oe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return td(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=q.fromDate(n);return{timestampValue:si(s.serializer,i)}}if(n instanceof q){const i=new q(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:si(s.serializer,i)}}if(n instanceof nr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ge)return{bytesValue:lu(s.serializer,n._byteString)};if(n instanceof _t){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:du(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${os(n)}`)}(e,t)}function Kf(e,t){const n={};return $a(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):tn(e,(s,i)=>{const r=ir(i,t.aa(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Pu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof q||e instanceof nr||e instanceof ge||e instanceof _t||e instanceof Mu)}function Gf(e,t,n){if(!Pu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=os(n);throw s==="an object"?t._a(e+" a custom object"):t._a(e+" "+s)}}const Qf=new RegExp("[~\\*/\\[\\]]");function Wf(e,t,n){if(t.search(Qf)>=0)throw ui(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ou(...t.split("."))._internalPath}catch{throw ui(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ui(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new v(f.INVALID_ARGUMENT,a+e+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Xf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(rr("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Xf extends Fu{data(){return super.data()}}function rr(e,t){return typeof t=="string"?Wf(e,t):t instanceof Ou?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new v(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class or{}class Jf extends or{}function Wp(e,t,...n){let s=[];t instanceof or&&s.push(t),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof ar).length,o=i.filter(a=>a instanceof as).length;if(r>1||r>0&&o>0)throw new v(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)e=i._apply(e);return e}class as extends Jf{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new as(t,n,s)}_apply(t){const n=this._parse(t);return Vu(t._query,n),new Te(t.firestore,t.converter,Ys(t._query,n))}_parse(t){const n=zf(t.firestore);return function(i,r,o,a,u,c,h){let l;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new v(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){go(h,c);const p=[];for(const m of h)p.push(po(a,i,m));l={arrayValue:{values:p}}}else l=po(a,i,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||go(h,c),l=Hf(o,r,h,c==="in"||c==="not-in");return U.create(u,c,l)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function Xp(e,t,n){const s=t,i=rr("where",e);return as._create(i,s,n)}class ar extends or{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new ar(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:ht.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)Vu(r,a),r=Ys(r,a)}(t._query,n),new Te(t.firestore,t.converter,Ys(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function po(e,t,n){if(typeof(n=oe(n))=="string"){if(n==="")throw new v(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xa(t)&&n.indexOf("/")!==-1)throw new v(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(M.fromString(n));if(!w.isDocumentKey(s))throw new v(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Fr(e,new w(s))}if(n instanceof _t)return Fr(e,n._key);throw new v(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${os(n)}.`)}function go(e,t){if(!Array.isArray(e)||e.length===0)throw new v(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Vu(e,t){if(t.isInequality()){const s=Bi(e),i=t.field;if(s!==null&&!s.isEqual(i))throw new v(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=Wa(e);r!==null&&Zf(e,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new v(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new v(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Zf(e,t,n){if(!n.isEqual(t))throw new v(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class tp{convertValue(t,n="none"){switch(zt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return V(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(qt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return tn(t,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new nr(V(t.latitude),V(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Fi(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Be(t));default:return null}}convertTimestamp(t){const n=bt(t);return new q(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=M.fromString(t);$(yu(s));const i=new je(s.get(1),s.get(3)),r=new w(s.popFirst(5));return i.isEqual(n)||Tt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ep extends Fu{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new wn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(rr("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class wn extends ep{data(t={}){return super.data(t)}}class np{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new gn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new wn(this._firestore,this._userDataWriter,s.key,s,new gn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new v(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new wn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new gn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new wn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new gn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,c=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:sp(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}class ip extends tp{constructor(t){super(),this.firestore=t}convertBytes(t){return new ge(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function Yp(e){e=ai(e,Te);const t=ai(e.firestore,Ru),n=Bf(t),s=new ip(t);return Yf(e._query),Lf(n,e._query).then(i=>new np(t,s,e,i))}(function(e,t=!0){(function(n){ve=n})(bo),Oe(new ae("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Ru(new wl(n.getProvider("auth-internal")),new _l(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new v(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new je(a.options.projectId,u)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Nt(xr,"3.11.0",e),Nt(xr,"3.11.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="firebasestorage.googleapis.com",$u="storageBucket",rp=2*60*1e3,op=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Kt{constructor(t,n,s=0){super(Ds(t),`Firebase Storage: ${n} (${Ds(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,dt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ds(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var lt;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(lt||(lt={}));function Ds(e){return"storage/"+e}function ap(){const e="An unknown error occurred, please check the error payload for server response.";return new dt(lt.UNKNOWN,e)}function up(){return new dt(lt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function cp(){return new dt(lt.CANCELED,"User canceled the upload/download.")}function hp(e){return new dt(lt.INVALID_URL,"Invalid URL '"+e+"'.")}function lp(e){return new dt(lt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function dp(){return new dt(lt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+$u+"' property when initializing the app?")}function ci(e){return new dt(lt.INVALID_ARGUMENT,e)}function Bu(){return new dt(lt.APP_DELETED,"The Firebase app was deleted.")}function fp(e){return new dt(lt.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=ut.makeFromUrl(t,n)}catch{return new ut(t,"")}if(s.path==="")return s;throw lp(t)}static makeFromUrl(t,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(K){K.path.charAt(K.path.length-1)==="/"&&(K.path_=K.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(K){K.path_=decodeURIComponent(K.path)}const h="v[A-Za-z0-9_]+",l=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${l}/${h}/b/${i}/o${p}`,"i"),C={bucket:1,path:3},_=n===Uu?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",B=new RegExp(`^https?://${_}/${i}/${S}`,"i"),x=[{regex:a,indices:u,postModify:r},{regex:m,indices:C,postModify:c},{regex:B,indices:{bucket:1,path:2},postModify:c}];for(let K=0;K<x.length;K++){const ft=x[K],Qt=ft.regex.exec(t);if(Qt){const us=Qt[ft.indices.bucket];let Wt=Qt[ft.indices.path];Wt||(Wt=""),s=new ut(us,Wt),ft.postModify(s);break}}if(s==null)throw hp(t);return s}}class pp{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(e,t,n){let s=1,i=null,r=null,o=!1,a=0;function u(){return a===2}let c=!1;function h(...S){c||(c=!0,t.apply(null,S))}function l(S){i=setTimeout(()=>{i=null,e(m,u())},S)}function p(){r&&clearTimeout(r)}function m(S,...B){if(c){p();return}if(S){p(),h.call(null,S,...B);return}if(u()||o){p(),h.call(null,S,...B);return}s<64&&(s*=2);let x;a===1?(a=2,x=0):x=(s+Math.random())*1e3,l(x)}let C=!1;function _(S){C||(C=!0,p(),!c&&(i!==null?(S||(a=2),clearTimeout(i),l(0)):S||(a=1)))}return l(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function mp(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(e){return e!==void 0}function mo(e,t,n,s){if(s<t)throw ci(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw ci(`Invalid value for '${e}'. Expected ${n} or less.`)}function vp(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const i=t(s)+"="+t(e[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pn;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Pn||(Pn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,r=t.indexOf(e)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(t,n,s,i,r,o,a,u,c,h,l,p=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=l,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,C)=>{this.resolve_=m,this.reject_=C,this.start_()})}start_(){const t=(s,i)=>{if(i){s(!1,new mn(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Pn.NO_ERROR,u=r.getStatus();if(!a||wp(u,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===Pn.ABORT;s(!1,new mn(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;s(!0,new mn(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());yp(u)?r(u):r()}catch(u){o(u)}else if(a!==null){const u=ap();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?Bu():cp();o(u)}else{const u=up();o(u)}};this.canceled_?n(!1,new mn(!1,null,!0)):this.backoffId_=gp(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&mp(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class mn{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function Tp(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Ip(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function _p(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Cp(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Sp(e,t,n,s,i,r,o=!0){const a=vp(e.urlParams),u=e.url+a,c=Object.assign({},e.headers);return _p(c,t),Tp(c,n),Ip(c,r),Cp(c,s),new Ep(u,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Dp(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function Np(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,n){this._service=t,n instanceof ut?this._location=n:this._location=ut.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Ht(t,n)}get root(){const t=new ut(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Np(this._location.path)}get storage(){return this._service}get parent(){const t=Ap(this._location.path);if(t===null)return null;const n=new ut(this._location.bucket,t);return new Ht(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw fp(t)}}function kp(e,t){const n=Dp(e._location.path,t),s=new ut(e._location.bucket,n);return new Ht(e.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(e){return/^[A-Za-z]+:\/\//.test(e)}function Rp(e,t){return new Ht(e,t)}function ju(e,t){if(e instanceof ur){const n=e;if(n._bucket==null)throw dp();const s=new Ht(n,n._bucket);return t!=null?ju(s,t):s}else return t!==void 0?kp(e,t):e}function xp(e,t){if(t&&bp(t)){if(e instanceof ur)return Rp(e,t);throw ci("To use ref(service, url), the first argument must be a Storage instance.")}else return ju(e,t)}function yo(e,t){const n=t==null?void 0:t[$u];return n==null?null:ut.makeFromBucketSpec(n,e)}function Op(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=s;i&&(e._overrideAuthToken=typeof i=="string"?i:Co(i,e.app.options.projectId))}class ur{constructor(t,n,s,i,r){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Uu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=rp,this._maxUploadRetryTime=op,this._requests=new Set,i!=null?this._bucket=ut.makeFromBucketSpec(i,this._host):this._bucket=yo(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ut.makeFromBucketSpec(this._url,t):this._bucket=yo(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){mo("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){mo("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ht(this,t)}_makeRequest(t,n,s,i,r=!0){if(this._deleted)return new pp(Bu());{const o=Sp(t,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,i).getPromise()}}const vo="@firebase/storage",wo="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="storage";function Mp(e,t){return e=oe(e),xp(e,t)}function Lp(e=xo(),t){e=oe(e);const s=ko(e,qu).getImmediate({identifier:t}),i=_o("storage");return i&&Pp(s,...i),s}function Pp(e,t,n,s={}){Op(e,t,n,s)}function Fp(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new ur(n,s,i,t,bo)}function Vp(){Oe(new ae(qu,Fp,"PUBLIC").setMultipleInstances(!0)),Nt(vo,wo,""),Nt(vo,wo,"esm2017")}Vp();const{VITE_API_KEY:Up,VITE_AUTH_DOMAIN:$p,VITE_PROJECT_ID:Bp,VITE_STORAGE_BUCKET:jp,VITE_MESSAGING_SENDER_ID:qp,VITE_APP_ID:zp}={VITE_API_KEY:"AIzaSyDpmWBJjZ34fbOl9nWQ1oGJVgj_OffoXdI",VITE_AUTH_DOMAIN:"shopping-cart-94341.firebaseapp.com",VITE_PROJECT_ID:"shopping-cart-94341",VITE_STORAGE_BUCKET:"shopping-cart-94341.appspot.com",VITE_MESSAGING_SENDER_ID:"302435008674",VITE_APP_ID:'1:302435008674:web:4a1a5dcf9c7561171d17fb"',BASE_URL:"/shopping-cart/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},Hp={apiKey:Up,authDomain:$p,projectId:Bp,storageBucket:jp,messagingSenderId:qp,appId:zp},Kp=Ro(Hp),Jp=$f(Kp),Gp=Lp();Mp(Gp,"images/chcolate-muffin.jpg");export{Xp as P,Wp as R,Qp as _,Jp as d,Yp as f};
