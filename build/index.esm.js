import e from"jszip";import t from"tweetnacl";import n from"tweetnacl-util";import r from"web3";import o from"@metamask/detect-provider";import i from"firebase/app";import"firebase/functions";import s from"libp2p";import a from"libp2p-websockets";import c from"libp2p-webrtc-direct";import{NOISE as u}from"libp2p-noise";import p from"libp2p-mplex";import l from"libp2p-kad-dht";import"peer-id";import"multiaddr";import d from"libp2p-bootstrap";import y from"it-pipe";import m from"it-length-prefixed";import f from"multihashing";import h from"cids";import v from"it-pushable";var b={name:"AES-CBC",length:256};i.initializeApp({apiKey:"AIzaSyDa3JnwzrjfY5DcPz4GtywdUUUY3zqWo0w",authDomain:"mintlit.firebaseapp.com",projectId:"mintlit",storageBucket:"mintlit.appspot.com",messagingSenderId:"1044454922569",appId:"1:1044454922569:web:a3cf1d5637f18413f66298",measurementId:"G-NC19HWVQPT"});var g=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"userAddress",type:"address"},{indexed:!1,internalType:"address payable",name:"relayerAddress",type:"address"},{indexed:!1,internalType:"bytes",name:"functionSignature",type:"bytes"}],name:"MetaTransactionExecuted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[],name:"ERC712_VERSION",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"bytes",name:"functionSignature",type:"bytes"},{internalType:"bytes32",name:"sigR",type:"bytes32"},{internalType:"bytes32",name:"sigS",type:"bytes32"},{internalType:"uint8",name:"sigV",type:"uint8"}],name:"executeMetaTransaction",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"payable",type:"function",payable:!0},{inputs:[],name:"getChainId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function",constant:!0},{inputs:[],name:"getDomainSeperator",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getNonce",outputs:[{internalType:"uint256",name:"nonce",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"tokenIds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"mint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"isOperator",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"bool",name:"enabled",type:"bool"}],name:"setOpenseaProxyEnabled",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newAdmin",type:"address"}],name:"changeAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"uri",type:"string"}],name:"setURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAdmin",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0}];function P(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}var w=function(){try{var e={};return Promise.resolve(T()).then(function(t){var n=t.error,r=t.publicKey;function o(){return Promise.resolve(x()).then(function(t){var n=t.account;e.address=n,console.log("public key: "+e.publicKey);var r=JSON.stringify(e);return localStorage.setItem("lit-keypair",r),Promise.resolve(function(e){try{var t=i.functions().httpsCallable("getPublicKey");return Promise.resolve(t(e)).then(function(e){return console.log(e),e.data})}catch(e){return Promise.reject(e)}}({address:n})).then(function(t){var n=t.pubkey,r=t.errorCode,o=function(){if("not_found"===r||n!==e.publicKey){var t="I am saving my public key so that others can send me LITs.  It is "+n;return Promise.resolve(S({body:t})).then(function(n){return Promise.resolve(function(e){try{var t=i.functions().httpsCallable("savePublicKey");return Promise.resolve(t(e)).then(function(e){return console.log(e),e.data})}catch(e){return Promise.reject(e)}}({sig:n.signature,msg:t,pubkey:e.publicKey})).then(function(){})})}}();if(o&&o.then)return o.then(function(){})})})}var s=function(){if(n)return Promise.resolve(k()).then(function(t){e={publicKey:t.publicKey,secretKey:t.secretKey,derivedVia:"web3.eth.personal.sign",signedMessage:K}});e={publicKey:r,derivedVia:"eth_getEncryptionPublicKey"}}();return s&&s.then?s.then(o):o()})}catch(e){return Promise.reject(e)}},T=function(){try{return Promise.resolve(P(function(){return Promise.resolve(x()).then(function(e){return Promise.resolve(ethereum.request({method:"eth_getEncryptionPublicKey",params:[e.account]})).then(function(e){return{publicKey:e}})})},function(e){return console.log(e),4001===e.code?(console.log("We can't encrypt anything without the key."),e("You must accept the metamask request to derive your public encryption key")):console.error(e),{error:e}}))}catch(e){return Promise.reject(e)}},k=function(){try{return Promise.resolve(S({body:K})).then(function(e){var r=e.signature;console.log("Signed message: "+r);var o=Buffer.from(r.substring(2),"hex");return Promise.resolve(crypto.subtle.digest("SHA-256",o)).then(function(e){var r=new Uint8Array(e),o=t.box.keyPair.fromSecretKey(r),i=o.secretKey;return{publicKey:n.encodeBase64(o.publicKey),secretKey:n.encodeBase64(i)}})})}catch(e){return Promise.reject(e)}},S=function(e){var t=e.body;try{return Promise.resolve(x()).then(function(e){var n=e.web3,r=e.account;return console.log("signing with ",r),Promise.resolve(n.eth.personal.sign(t,r)).then(function(e){var o=n.eth.accounts.recover(t,e);if(console.log("Signature: ",e),console.log("recovered address: ",o),o!==r){var i="ruh roh, the user signed with a different address ("+o+") then they're using with web3 ("+r+").  this will lead to confusion.";throw console.error(i),alert("something seems to be wrong with your wallets message signing.  maybe restart your browser or your wallet.  your recovered sig address does not match your web3 account address"),new Error(i)}return{signature:e,address:o}})})}catch(e){return Promise.reject(e)}},x=function(){try{if(void 0===window.ethereum)throw new Error({errorCode:"no_wallet",message:"No web3 wallet was found"});return Promise.resolve(o()).then(function(e){return Promise.resolve(e.request({method:"eth_requestAccounts"})).then(function(t){var n=t[0];return{web3:new r(e),account:n}})})}catch(e){return Promise.reject(e)}},B=function(){try{var e=function(){return t=JSON.parse(t),Promise.resolve(x()).then(function(e){var n=e.account,r=function(){if(n!==t.address)return Promise.resolve(w()).then(function(){t=localStorage.getItem("lit-keypair"),t=JSON.parse(t)})}();return r&&r.then?r.then(function(){return t}):t})},t=localStorage.getItem("lit-keypair"),n=function(){if(!t)return Promise.resolve(w()).then(function(){t=localStorage.getItem("lit-keypair")})}();return Promise.resolve(n&&n.then?n.then(e):e())}catch(e){return Promise.reject(e)}},K="I am creating an account to mint a LIT",A={polygon:{contractAddress:"0xb9A323711528D0c5a70df790929f4739f1cDd7fD",chainId:137},ethereum:{contractAddress:"0x55485885e82E25446DEC314Ccb810Bda06B9e01B",chainId:1}};function j(e,t,n){if(!e.s){if(n instanceof I){if(!n.s)return void(n.o=j.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(j.bind(null,e,t),j.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}var I=function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{j(r,1,i(this.v))}catch(e){j(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?j(r,1,t?t(o):o):n?j(r,1,n(o)):j(r,2,o)}catch(e){j(r,2,e)}},r},e}(),E=function(e){try{return Promise.resolve(e.generateAsync({type:"blob"})).then(function(e){return Promise.resolve(e.arrayBuffer()).then(function(r){return console.log("blob",e),Promise.resolve(function(){try{return Promise.resolve(crypto.subtle.generateKey(b,!0,["encrypt","decrypt"]))}catch(e){return Promise.reject(e)}}()).then(function(e){return Promise.resolve(function(e,t){try{var n=window.crypto.getRandomValues(new Uint8Array(16));return Promise.resolve(crypto.subtle.encrypt({name:"AES-CBC",iv:n},e,t)).then(function(e){return new Blob([n,new Uint8Array(e)],{type:"application/octet-stream"})})}catch(e){return Promise.reject(e)}}(e,r)).then(function(r){return Promise.resolve(crypto.subtle.exportKey("jwk",e)).then(function(e){return console.log("exportedSymmKey",e),Promise.resolve(B()).then(function(o){var i=function(e,r,o){var i,s=t.box.keyPair();try{i=n.decodeBase64(e)}catch(e){throw new Error("Bad public key")}var a=n.decodeUTF8(r),c=t.randomBytes(t.box.nonceLength),u=t.box(a,c,i,s.secretKey);return{version:"x25519-xsalsa20-poly1305",nonce:n.encodeBase64(c),ephemPublicKey:n.encodeBase64(s.publicKey),ciphertext:n.encodeBase64(u)}}(o.publicKey,JSON.stringify(e));return{encryptedSymmetricKey:JSON.stringify(i),encryptedZip:r}})})})})})})}catch(e){return Promise.reject(e)}},C=function(r,o){try{return Promise.resolve(B()).then(function(i){console.log("Got keypair out of localstorage: "+i);var s=i.secretKey;return Promise.resolve(function(e){try{return Promise.resolve(x()).then(function(t){var n=t.account;try{return ethereum.request({method:"eth_decrypt",params:[e,n]})}catch(e){return console.log(e),!1}})}catch(e){return Promise.reject(e)}}(o)).then(function(i){return i||(console.log("probably not metamask"),i=function(e,r){switch(e.version){case"x25519-xsalsa20-poly1305":var o,i=n.decodeBase64(r),s=n.decodeBase64(e.nonce),a=n.decodeBase64(e.ciphertext),c=n.decodeBase64(e.ephemPublicKey),u=t.box.open(a,s,c,i);try{o=n.encodeUTF8(u)}catch(e){throw new Error("Decryption failed.")}if(o)return o;throw new Error("Decryption failed.");default:throw new Error("Encryption type/version not supported.")}}(o,s)),console.log("decrypted",i),Promise.resolve(function(e){try{return Promise.resolve(crypto.subtle.importKey("jwk",JSON.parse(e),b,!0,["encrypt","decrypt"]))}catch(e){return Promise.reject(e)}}(i)).then(function(t){return Promise.resolve(function(e,t){try{return Promise.resolve(e.slice(0,16).arrayBuffer()).then(function(n){return Promise.resolve(e.slice(16).arrayBuffer()).then(function(e){return Promise.resolve(crypto.subtle.decrypt({name:"AES-CBC",iv:n},t,e))})})}catch(e){return Promise.reject(e)}}(r,t)).then(function(t){var n=new e;return Promise.resolve(n.loadAsync(t)).then(function(e){return e.files})})})})})}catch(e){return Promise.reject(e)}},M={},D={zipAndEncryptString:function(t){try{var n=new e;return n.file("string.txt",t),E(n)}catch(e){return Promise.reject(e)}},zipAndEncryptFiles:function(t){try{for(var n=new e,r=0;r<t.length;r++)n.folder("encryptedAssets").file(t[r].name,t[r]);return E(n)}catch(e){return Promise.reject(e)}},encryptZip:E,decryptZip:C,checkAndDeriveKeypair:B,connectWeb3:x,createHtmlLIT:function(e){var t,n,r,o,i,s=e.title,a=e.htmlBody,c=e.css,u=e.encryptedSymmetricKey,p=e.encryptedZipDataUrl,l=e.npmPackages,d=void 0===l?[]:l;try{d.push("lit-js-sdk");var y="",m=(t=d,n=function(e){return Promise.resolve(function(e){try{return M[e]?Promise.resolve(M[e]):Promise.resolve(fetch("https://unpkg.com/"+e)).then(function(t){if(!t.ok)throw console.log("error with response: ",t),Error(t.statusText);return Promise.resolve(t.blob()).then(function(t){return Promise.resolve((n=t,new Promise(function(e,t){var r=new FileReader;r.onloadend=function(){e(r.result)},r.readAsDataURL(n)}))).then(function(t){return M[e]=t,t});var n})})}catch(e){return Promise.reject(e)}}(d[e])).then(function(e){y+='<script src="'+e+'"><\/script>\n'})},i=-1,function e(s){try{for(;++i<t.length;)if((s=n(i))&&s.then){if(!((a=s)instanceof I&&1&a.s))return void s.then(e,o||(o=j.bind(null,r=new I,2)));s=s.v}r?j(r,1,s):r=s}catch(e){j(r||(r=new I),2,e)}var a}(),r);return Promise.resolve(m&&m.then?m.then(function(){return"\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+s+'</title>\n    <style id="jss-server-side">'+c+"</style>\n    "+y+"\n    <script>\n      var encryptedSymmetricKey = "+u+'\n      var encryptedZipDataUrl = "'+p+'"\n      var locked = true\n    <\/script>\n  </head>\n  <body>\n    <div id="root">'+a+"</div>\n    <script>\n      const unlockButton = document.getElementById('unlockButton')\n      unlockButton.onclick = function() {\n        LitJsSdk.default.toggleLock()\n      }\n    <\/script>\n  </body>\n</html>\n  "}):"\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+s+'</title>\n    <style id="jss-server-side">'+c+"</style>\n    "+y+"\n    <script>\n      var encryptedSymmetricKey = "+u+'\n      var encryptedZipDataUrl = "'+p+'"\n      var locked = true\n    <\/script>\n  </head>\n  <body>\n    <div id="root">'+a+"</div>\n    <script>\n      const unlockButton = document.getElementById('unlockButton')\n      unlockButton.onclick = function() {\n        LitJsSdk.default.toggleLock()\n      }\n    <\/script>\n  </body>\n</html>\n  ")}catch(e){return Promise.reject(e)}},mintLIT:function(e){var t=e.chain,n=e.quantity;try{return console.log("minting "+n+" tokens on "+t),Promise.resolve(B()).then(function(){return Promise.resolve(x()).then(function(e){var r=e.web3,o=e.account;return Promise.resolve(r.eth.getChainId()).then(function(e){if(e!==A[t].chainId)return{errorCode:"wrong_chain"};var i=A[t].contractAddress,s=new r.eth.Contract(g,i);return console.log("sending to chain..."),P(function(){return Promise.resolve(s.methods.mint(n).send({from:o})).then(function(e){return console.log("txReceipt: ",e),{txHash:e.transactionHash,tokenId:e.events.TransferSingle.returnValues.id,tokenAddress:i,mintingAddress:o}})},function(e){return console.log(e),4001===e.code?(console.log("User rejected request"),{errorCode:"user_rejected_request"}):(console.error(e),{errorCode:"unknown_error"})})})})})}catch(e){return Promise.reject(e)}},toggleLock:function(){try{var e=document.getElementById("mediaGridHolder"),t=document.getElementById("lockedHeader"),n=function(){if(window.locked)return window.publicContent=e.innerHTML,Promise.resolve(fetch(window.encryptedZipDataUrl)).then(function(n){return Promise.resolve(n.blob()).then(function(n){return Promise.resolve(C(n,JSON.stringify(window.encryptedSymmetricKey))).then(function(n){return Promise.resolve(n["string.txt"].async("text")).then(function(n){e.innerHTML=n,t.innerText="UNLOCKED",window.locked=!1})})})});e.innerHTML=window.publicContent,t.innerText="LOCKED",window.locked=!0}();return Promise.resolve(n&&n.then?n.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},LIT_CHAINS:A,LitNodeClient:function(){function e(e){this.libp2p=null,this.connectedNodes={}}var t=e.prototype;return t.saveEncryptionKey=function(e){try{return Object.keys(this.connectedNodes),Promise.resolve()}catch(e){return Promise.reject(e)}},t.storeData=function(e){var t=e.peerId,n=e.val;try{var r=f(Buffer.from("1"),"sha2-256"),o=new h(r),i=JSON.stringify({cmd:"set",key:o.toString(),val:n});return this.connectedNodes[t].send(i),Promise.resolve()}catch(e){return Promise.reject(e)}},t.dataReceived=function(e){var t=e.msg;console.log("dataReceived from "+e.peerId.toB58String()+": "+t)},t.connect=function(){try{var e,t=this;return Promise.resolve(s.create({modules:{transport:[a,c],connEncryption:[u],streamMuxer:[p],dht:l,peerDiscovery:[d]},config:{dht:{enabled:!0},peerDiscovery:(e={},e[d.tag]={enabled:!0,list:["/ip4/127.0.0.1/tcp/9090/http/p2p-webrtc-direct/p2p/12D3KooWK1KtaAV5rWjbAmZcd62VYSmEz1k81jzr87JAcSS7rKdQ"]},e)}})).then(function(e){return t.libp2p=e,t.libp2p.on("peer:discovery",function(e){console.debug("Found peer "+e.toB58String())}),t.libp2p.connectionManager.on("peer:connect",function(e){try{return console.debug("Connected to "+e.remotePeer.toB58String()),Promise.resolve(e.newStream(["/lit/1.0.0"])).then(function(n){var r=n.stream,o=v();y(o,m.encode(),r.sink),t.connectedNodes[e.remotePeer.toB58String()]={send:o.push}})}catch(e){return Promise.reject(e)}}),t.libp2p.connectionManager.on("peer:disconnect",function(e){console.debug("Disconnected from "+e.remotePeer.toB58String())}),Promise.resolve(t.libp2p.start()).then(function(){console.debug("libp2p id is "+t.libp2p.peerId.toB58String()),t.libp2p.multiaddrs.forEach(function(e){return console.debug(e.toString()+"/p2p/"+t.libp2p.peerId.toB58String())}),window.libp2p=t.libp2p})})}catch(e){return Promise.reject(e)}},e}()};export default D;
//# sourceMappingURL=index.esm.js.map
