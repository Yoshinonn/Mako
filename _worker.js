const a0_0x1410e7=a0_0x256c;(function(_0x4d0d06,_0x233245){const _0x4f2b32=a0_0x256c,_0x5c03e1=_0x4d0d06();while(!![]){try{const _0xcec39=-parseInt(_0x4f2b32(0x11d))/0x1+parseInt(_0x4f2b32(0x142))/0x2+-parseInt(_0x4f2b32(0xdb))/0x3+-parseInt(_0x4f2b32(0x143))/0x4*(parseInt(_0x4f2b32(0x141))/0x5)+parseInt(_0x4f2b32(0x176))/0x6*(parseInt(_0x4f2b32(0x12c))/0x7)+-parseInt(_0x4f2b32(0xe0))/0x8*(parseInt(_0x4f2b32(0x103))/0x9)+-parseInt(_0x4f2b32(0x11b))/0xa*(-parseInt(_0x4f2b32(0x114))/0xb);if(_0xcec39===_0x233245)break;else _0x5c03e1['push'](_0x5c03e1['shift']());}catch(_0x4a71f5){_0x5c03e1['push'](_0x5c03e1['shift']());}}}(a0_0x5eab,0x8c5b4));import{connect}from'cloudflare:sockets';let userID=a0_0x1410e7(0x126);const proxyIPs=[a0_0x1410e7(0x102),a0_0x1410e7(0xf4),a0_0x1410e7(0xd6)];let proxyIP=proxyIPs[Math['floor'](Math[a0_0x1410e7(0x169)]()*proxyIPs[a0_0x1410e7(0xbc)])],socks5Address='',socks5Relay=![];function a0_0x256c(_0x1fa327,_0x196ba2){const _0x5eab3d=a0_0x5eab();return a0_0x256c=function(_0x256c43,_0x98ea81){_0x256c43=_0x256c43-0xb0;let _0x175658=_0x5eab3d[_0x256c43];return _0x175658;},a0_0x256c(_0x1fa327,_0x196ba2);}if(!isValidUUID(userID))throw new Error('uuid\x20is\x20not\x20valid');let parsedSocks5Address={},enableSocks=![];export default{async 'fetch'(_0x4484d1,_0x1cdb41,_0x4d5047){const _0x1d8a8f=a0_0x1410e7;try{const {UUID:_0x294e5b,PROXYIP:_0x19efeb,SOCKS5:_0x37ce27,SOCKS5_RELAY:_0x8fcbd0}=_0x1cdb41;userID=_0x294e5b||userID,proxyIP=_0x19efeb||proxyIP,socks5Address=_0x37ce27||socks5Address,socks5Relay=_0x8fcbd0||socks5Relay;if(socks5Address)try{parsedSocks5Address=socks5AddressParser(socks5Address),enableSocks=!![];}catch(_0xfd965e){console['log'](_0xfd965e[_0x1d8a8f(0x106)]()),enableSocks=![];}const _0x4cdf35=userID[_0x1d8a8f(0x150)](',')?userID[_0x1d8a8f(0xea)](',')[0x0]:userID,_0x36214e=new URL(_0x4484d1['url']),_0x2a9337=_0x4484d1[_0x1d8a8f(0x160)]['get'](_0x1d8a8f(0x17a));if(_0x4484d1[_0x1d8a8f(0x160)][_0x1d8a8f(0xf9)](_0x1d8a8f(0x134))!==_0x1d8a8f(0x154))switch(_0x36214e[_0x1d8a8f(0xb0)]){case _0x1d8a8f(0xc1):return new Response(JSON[_0x1d8a8f(0x168)](_0x4484d1['cf'],null,0x4),{'status':0xc8,'headers':{'Content-Type':_0x1d8a8f(0x180)}});case'/'+_0x4cdf35:return new Response(getConfig(userID,_0x2a9337),{'status':0xc8,'headers':{'Content-Type':'text/html;\x20charset=utf-8'}});case'/sub/'+_0x4cdf35:return new Response(btoa(GenSub(userID,_0x2a9337)),{'status':0xc8,'headers':{'Content-Type':_0x1d8a8f(0x15e)}});case _0x1d8a8f(0x11c)+_0x4cdf35:return fetch(_0x1d8a8f(0xdd)+_0x2a9337+_0x1d8a8f(0xe7)+userID+'&path=/',{'headers':_0x4484d1[_0x1d8a8f(0x160)]});default:return handleDefaultPath(_0x36214e,_0x4484d1);}else return await ProtocolOverWSHandler(_0x4484d1);}catch(_0x468d57){return new Response(_0x468d57['toString']());}}};async function handleDefaultPath(_0x52acd9,_0x1be671){const _0x4712e1=a0_0x1410e7,_0x3e998d=hostnames[Math[_0x4712e1(0x13f)](Math[_0x4712e1(0x169)]()*hostnames['length'])],_0x4d8cf6=new Headers(_0x1be671[_0x4712e1(0x160)]);_0x4d8cf6[_0x4712e1(0x16e)](_0x4712e1(0xb9),_0x4712e1(0x128)),_0x4d8cf6[_0x4712e1(0x16e)](_0x4712e1(0xed),_0x4712e1(0x128)),_0x4d8cf6['set'](_0x4712e1(0xc9),'1.2.3.4'),_0x4d8cf6[_0x4712e1(0x16e)]('referer',_0x4712e1(0x156));const _0x363453=_0x4712e1(0xfb)+_0x3e998d+_0x52acd9['pathname']+_0x52acd9[_0x4712e1(0x17d)],_0x4f7311=new Request(_0x363453,{'method':_0x1be671[_0x4712e1(0xc6)],'headers':_0x4d8cf6,'body':_0x1be671[_0x4712e1(0xbe)],'redirect':'manual'}),_0x3329e4=await fetch(_0x4f7311,{'redirect':'manual'});if([0x12d,0x12e][_0x4712e1(0x150)](_0x3329e4[_0x4712e1(0x13a)]))return new Response(_0x4712e1(0x17c)+_0x3e998d+_0x4712e1(0x179),{'status':0x193,'statusText':'Forbidden'});return _0x3329e4;}async function ProtocolOverWSHandler(_0x4e00dd){const _0x374368=a0_0x1410e7,_0x1e9ffe=new WebSocketPair(),[_0x4e4dd3,_0x21a3d3]=Object[_0x374368(0x165)](_0x1e9ffe);_0x21a3d3[_0x374368(0xd4)]();let _0x3fdab4='',_0x5e7740='';const _0x259bc8=(_0x23d915,_0x104fe1)=>{const _0x1f5fe2=_0x374368;console[_0x1f5fe2(0x17f)]('['+_0x3fdab4+':'+_0x5e7740+']\x20'+_0x23d915,_0x104fe1||'');},_0x21aa90=_0x4e00dd['headers'][_0x374368(0xf9)]('sec-websocket-protocol')||'',_0x4e78cf=makeReadableWebSocketStream(_0x21a3d3,_0x21aa90,_0x259bc8);let _0x1e11df={'value':null},_0x5ab7a4=![];return _0x4e78cf[_0x374368(0x15c)](new WritableStream({async 'write'(_0x10f7f8,_0x2b0e4a){const _0x4e6093=_0x374368;if(_0x5ab7a4)return await handleDNSQuery(_0x10f7f8,_0x21a3d3,null,_0x259bc8);if(_0x1e11df[_0x4e6093(0x111)]){const _0xdcd119=_0x1e11df['value'][_0x4e6093(0x164)][_0x4e6093(0x130)]();await _0xdcd119[_0x4e6093(0x181)](_0x10f7f8),_0xdcd119[_0x4e6093(0x182)]();return;}const {hasError:_0xea4356,message:_0x4c2c36,addressType:_0x525a31,portRemote:portRemote=0x1bb,addressRemote:addressRemote='',rawDataIndex:_0x3e2532,ProtocolVersion:ProtocolVersion=new Uint8Array([0x0,0x0]),isUDP:_0x46427e}=processProtocolHeader(_0x10f7f8,userID);_0x3fdab4=addressRemote,_0x5e7740=portRemote+'--'+Math[_0x4e6093(0x169)]()+'\x20'+(_0x46427e?'udp\x20':_0x4e6093(0x158))+'\x20';if(_0xea4356){throw new Error(_0x4c2c36);return;}if(_0x46427e){if(portRemote===0x35)_0x5ab7a4=!![];else{throw new Error(_0x4e6093(0x12f));return;}}const _0x867a97=new Uint8Array([ProtocolVersion[0x0],0x0]),_0x59c92b=_0x10f7f8[_0x4e6093(0x159)](_0x3e2532);if(_0x5ab7a4)return handleDNSQuery(_0x59c92b,_0x21a3d3,_0x867a97,_0x259bc8);handleTCPOutBound(_0x1e11df,_0x525a31,addressRemote,portRemote,_0x59c92b,_0x21a3d3,_0x867a97,_0x259bc8);},'close'(){_0x259bc8('readableWebSocketStream\x20is\x20close');},'abort'(_0x4f8986){const _0xd102f9=_0x374368;_0x259bc8(_0xd102f9(0x123),JSON[_0xd102f9(0x168)](_0x4f8986));}}))['catch'](_0x560d49=>{_0x259bc8('readableWebSocketStream\x20pipeTo\x20error',_0x560d49);}),new Response(null,{'status':0x65,'webSocket':_0x4e4dd3});}async function handleTCPOutBound(_0xfa4317,_0x4574bb,_0x36ed30,_0x2671bb,_0x53b5c2,_0xcb5c75,_0x358b73,_0x1b41c9){async function _0x1171aa(_0x7d4b37,_0x165bbc,_0x2975ae=![]){const _0x808318=a0_0x256c;let _0x450d13;socks5Relay?_0x450d13=await socks5Connect(_0x4574bb,_0x7d4b37,_0x165bbc,_0x1b41c9):_0x450d13=_0x2975ae?await socks5Connect(_0x4574bb,_0x7d4b37,_0x165bbc,_0x1b41c9):connect({'hostname':_0x7d4b37,'port':_0x165bbc});_0xfa4317['value']=_0x450d13,_0x1b41c9('connected\x20to\x20'+_0x7d4b37+':'+_0x165bbc);const _0x11c613=_0x450d13[_0x808318(0x164)][_0x808318(0x130)]();return await _0x11c613[_0x808318(0x181)](_0x53b5c2),_0x11c613[_0x808318(0x182)](),_0x450d13;}async function _0x6568da(){const _0x367223=a0_0x256c;enableSocks?_0x4946c4=await _0x1171aa(_0x36ed30,_0x2671bb,!![]):_0x4946c4=await _0x1171aa(proxyIP||_0x36ed30,_0x2671bb),_0x4946c4[_0x367223(0xe6)][_0x367223(0xc7)](_0x37cd3a=>{const _0x47d1b8=_0x367223;console['log'](_0x47d1b8(0x12b),_0x37cd3a);})[_0x367223(0x119)](()=>{safeCloseWebSocket(_0xcb5c75);}),remoteSocketToWS(_0x4946c4,_0xcb5c75,_0x358b73,null,_0x1b41c9);}let _0x4946c4=await _0x1171aa(_0x36ed30,_0x2671bb);remoteSocketToWS(_0x4946c4,_0xcb5c75,_0x358b73,_0x6568da,_0x1b41c9);}function makeReadableWebSocketStream(_0x2d9ef0,_0x48bee1,_0x3b241f){let _0x500670=![];const _0x1ef5e5=new ReadableStream({'start'(_0x4d8631){const _0x57903a=a0_0x256c;_0x2d9ef0[_0x57903a(0xd7)](_0x57903a(0x17e),_0x5bdc0f=>{const _0xd6932d=_0x57903a,_0x54d1c9=_0x5bdc0f['data'];_0x4d8631[_0xd6932d(0x174)](_0x54d1c9);}),_0x2d9ef0[_0x57903a(0xd7)](_0x57903a(0xb8),()=>{const _0x20b503=_0x57903a;safeCloseWebSocket(_0x2d9ef0),_0x4d8631[_0x20b503(0xb8)]();}),_0x2d9ef0[_0x57903a(0xd7)](_0x57903a(0x155),_0x25f18a=>{const _0x3a864d=_0x57903a;_0x3b241f('webSocketServer\x20has\x20error'),_0x4d8631[_0x3a864d(0x155)](_0x25f18a);});const {earlyData:_0x2866e4,error:_0x5b8031}=base64ToArrayBuffer(_0x48bee1);if(_0x5b8031)_0x4d8631[_0x57903a(0x155)](_0x5b8031);else _0x2866e4&&_0x4d8631[_0x57903a(0x174)](_0x2866e4);},'pull'(_0x50ecba){},'cancel'(_0x4abc37){_0x3b241f('ReadableStream\x20was\x20canceled,\x20due\x20to\x20'+_0x4abc37),_0x500670=!![],safeCloseWebSocket(_0x2d9ef0);}});return _0x1ef5e5;}function processProtocolHeader(_0x5ed873,_0x5b673a){const _0x374211=a0_0x1410e7;if(_0x5ed873['byteLength']<0x18)return{'hasError':!![],'message':_0x374211(0x109)};const _0x593ab9=new DataView(_0x5ed873),_0x54eea2=_0x593ab9[_0x374211(0x122)](0x0),_0x1b2530=stringify(new Uint8Array(_0x5ed873['slice'](0x1,0x11))),_0x1243d1=_0x5b673a[_0x374211(0x150)](',')?_0x5b673a[_0x374211(0xea)](','):[_0x5b673a],_0x33d1ff=_0x1243d1[_0x374211(0x172)](_0x1af5a8=>_0x1b2530===_0x1af5a8[_0x374211(0x152)]())||_0x1243d1[_0x374211(0xbc)]===0x1&&_0x1b2530===_0x1243d1[0x0][_0x374211(0x152)]();console[_0x374211(0x17f)](_0x374211(0x17b)+_0x1b2530);if(!_0x33d1ff)return{'hasError':!![],'message':_0x374211(0x138)};const _0x3b363c=_0x593ab9[_0x374211(0x122)](0x11),_0x17c1cd=_0x593ab9['getUint8'](0x12+_0x3b363c);if(_0x17c1cd!==0x1&&_0x17c1cd!==0x2)return{'hasError':!![],'message':_0x374211(0xf3)+_0x17c1cd+_0x374211(0xc2)};const _0x10735a=0x12+_0x3b363c+0x1,_0x1c67f6=_0x593ab9['getUint16'](_0x10735a),_0x2602ee=_0x593ab9[_0x374211(0x122)](_0x10735a+0x2);let _0x29c388,_0x3f1b34,_0x815add;switch(_0x2602ee){case 0x1:_0x3f1b34=0x4,_0x815add=_0x10735a+0x3,_0x29c388=new Uint8Array(_0x5ed873[_0x374211(0x159)](_0x815add,_0x815add+_0x3f1b34))[_0x374211(0xf2)]('.');break;case 0x2:_0x3f1b34=_0x593ab9[_0x374211(0x122)](_0x10735a+0x3),_0x815add=_0x10735a+0x4,_0x29c388=new TextDecoder()['decode'](_0x5ed873[_0x374211(0x159)](_0x815add,_0x815add+_0x3f1b34));break;case 0x3:_0x3f1b34=0x10,_0x815add=_0x10735a+0x3,_0x29c388=Array[_0x374211(0x175)]({'length':0x8},(_0x10bd9d,_0x3704df)=>_0x593ab9[_0x374211(0x14e)](_0x815add+_0x3704df*0x2)[_0x374211(0x106)](0x10))['join'](':');break;default:return{'hasError':!![],'message':_0x374211(0xeb)+_0x2602ee};}if(!_0x29c388)return{'hasError':!![],'message':_0x374211(0xe8)+_0x2602ee};return{'hasError':![],'addressRemote':_0x29c388,'addressType':_0x2602ee,'portRemote':_0x1c67f6,'rawDataIndex':_0x815add+_0x3f1b34,'protocolVersion':new Uint8Array([_0x54eea2]),'isUDP':_0x17c1cd===0x2};}async function remoteSocketToWS(_0x597107,_0x2c1f9f,_0x130d3d,_0x5a5af2,_0x33f6fa){const _0x1c6929=a0_0x1410e7;let _0x3adec3=![];try{await _0x597107[_0x1c6929(0x139)][_0x1c6929(0x15c)](new WritableStream({async 'write'(_0x510570){const _0x38fe0b=_0x1c6929;if(_0x2c1f9f[_0x38fe0b(0x146)]!==WS_READY_STATE_OPEN)throw new Error(_0x38fe0b(0x10e));_0x3adec3=!![],_0x130d3d?(_0x2c1f9f[_0x38fe0b(0x124)](await new Blob([_0x130d3d,_0x510570])[_0x38fe0b(0x163)]()),_0x130d3d=null):_0x2c1f9f[_0x38fe0b(0x124)](_0x510570);},'close'(){const _0x3ec9e0=_0x1c6929;_0x33f6fa(_0x3ec9e0(0x11e)+_0x3adec3);},'abort'(_0x4f2d92){const _0x3b962e=_0x1c6929;console[_0x3b962e(0x155)]('Remote\x20connection\x20readable\x20aborted:',_0x4f2d92);}}));}catch(_0x7c94c4){console[_0x1c6929(0x155)]('remoteSocketToWS\x20error:',_0x7c94c4[_0x1c6929(0x140)]||_0x7c94c4),safeCloseWebSocket(_0x2c1f9f);}!_0x3adec3&&_0x5a5af2&&(_0x33f6fa(_0x1c6929(0x12d)),await _0x5a5af2());}function base64ToArrayBuffer(_0x1565be){const _0x412556=a0_0x1410e7;if(!_0x1565be)return{'earlyData':null,'error':null};try{_0x1565be=_0x1565be['replace'](/-/g,'+')[_0x412556(0x16c)](/_/g,'/');const _0x214b68=atob(_0x1565be),_0x25ea61=new ArrayBuffer(_0x214b68['length']),_0x2c5789=new Uint8Array(_0x25ea61);for(let _0x3c2f8e=0x0;_0x3c2f8e<_0x214b68['length'];_0x3c2f8e++){_0x2c5789[_0x3c2f8e]=_0x214b68['charCodeAt'](_0x3c2f8e);}return{'earlyData':_0x25ea61,'error':null};}catch(_0x2a90ff){return{'earlyData':null,'error':_0x2a90ff};}}function isValidUUID(_0x2e43f0){const _0xa7e716=a0_0x1410e7,_0x41d2a8=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;return _0x41d2a8[_0xa7e716(0xd5)](_0x2e43f0);}const WS_READY_STATE_OPEN=0x1,WS_READY_STATE_CLOSING=0x2;function safeCloseWebSocket(_0x3793c6){const _0x1e2897=a0_0x1410e7;try{(_0x3793c6['readyState']===WS_READY_STATE_OPEN||_0x3793c6[_0x1e2897(0x146)]===WS_READY_STATE_CLOSING)&&_0x3793c6[_0x1e2897(0xb8)]();}catch(_0x5c550d){console[_0x1e2897(0x155)](_0x1e2897(0xb3),_0x5c550d);}}const byteToHex=Array[a0_0x1410e7(0x175)]({'length':0x100},(_0x5e22fc,_0x12ce2c)=>(_0x12ce2c+0x100)['toString'](0x10)['slice'](0x1));function unsafeStringify(_0x15d5fd,_0x2e7563=0x0){const _0x4aaaab=a0_0x1410e7;return[byteToHex[_0x15d5fd[_0x2e7563]],byteToHex[_0x15d5fd[_0x2e7563+0x1]],byteToHex[_0x15d5fd[_0x2e7563+0x2]],byteToHex[_0x15d5fd[_0x2e7563+0x3]],'-',byteToHex[_0x15d5fd[_0x2e7563+0x4]],byteToHex[_0x15d5fd[_0x2e7563+0x5]],'-',byteToHex[_0x15d5fd[_0x2e7563+0x6]],byteToHex[_0x15d5fd[_0x2e7563+0x7]],'-',byteToHex[_0x15d5fd[_0x2e7563+0x8]],byteToHex[_0x15d5fd[_0x2e7563+0x9]],'-',byteToHex[_0x15d5fd[_0x2e7563+0xa]],byteToHex[_0x15d5fd[_0x2e7563+0xb]],byteToHex[_0x15d5fd[_0x2e7563+0xc]],byteToHex[_0x15d5fd[_0x2e7563+0xd]],byteToHex[_0x15d5fd[_0x2e7563+0xe]],byteToHex[_0x15d5fd[_0x2e7563+0xf]]][_0x4aaaab(0xf2)]('')[_0x4aaaab(0xe5)]();}function a0_0x5eab(){const _0x6d2656=['www.guancha.cn','set','getReader','www.zhihu.com','\x22)\x27><i\x20class=\x22fas\x20fa-copy\x22></i>\x20Copy</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3>Best\x20IP\x20Configuration</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22code-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre><code>','some','?encryption=none&security=tls&sni=','enqueue','from','12HrqbWz','www.csdn.net','www.meituan.com','\x20are\x20not\x20allowed.','Host','userID:\x20','Redirects\x20to\x20','search','message','log','application/json;charset=utf-8','write','releaseLock','pathname','www.sina.com.cn','socks\x20server\x20needs\x20auth','safeCloseWebSocket\x20error:','www.51cto.com',':443?encryption=none&security=tls&sni=','pages.dev','RUR0dW5uZWw=','close','cf-connecting-ip','www.dianyou.cn','www.telegraph.co.uk','length','?encryption=none&security=none&fp=random&type=ws&host=','body','dns\x20server(','\x22\x20class=\x22btn\x22\x20target=\x22_blank\x22><i\x20class=\x22fas\x20fa-link\x22></i>\x20VLESS\x20Subscription</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22clash://install-config?url=','/cf','\x20is\x20not\x20supported,\x20command\x2001-tcp,02-udp,03-mux','www.ximalaya.com','dns\x20udp\x20has\x20error','https://url.v1.mk/sub?target=clash&url=','method','catch','www.liepin.com','x-real-ip','doh\x20success\x20and\x20dns\x20message\x20length\x20is\x20','www.ynet.com','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22container\x20config-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2>UUID:\x20','www.qqgongyi.com','fail\x20to\x20auth\x20socks\x20server','www.kuaidi100.com','&fp=random&type=ws&host=','POST','fail\x20to\x20open\x20socks\x20connection','sent\x20socks\x20greeting','accept','test','workers.cloudflare.cyou','addEventListener','www.58.com','www.xinhuanet.com','\x22)\x27><i\x20class=\x22fas\x20fa-copy\x22></i>\x20Copy</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20','312057XLeZif','www.bilibili.com','https://sub.xf.free.hr/auto?host=','-HTTP-','www.suning.com','386808XKprbc','\x0a\x20\x20<body>\x0a\x20\x20\x20\x20','\x0a\x20\x20<head>\x0a\x20\x20\x20\x20<title>EDtunnel:\x20Configuration</title>\x0a\x20\x20\x20\x20<meta\x20name=\x27viewport\x27\x20content=\x27width=device-width,\x20initial-scale=1\x27>\x0a\x20\x20\x20\x20<meta\x20property=\x27og:site_name\x27\x20content=\x27EDtunnel:\x20Protocol\x20Configuration\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20property=\x27og:type\x27\x20content=\x27website\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20property=\x27og:title\x27\x20content=\x27EDtunnel\x20-\x20Protocol\x20Configuration\x20and\x20Subscribe\x20Output\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20property=\x27og:description\x27\x20content=\x27Use\x20Cloudflare\x20Pages\x20and\x20Worker\x20serverless\x20to\x20implement\x20protocol\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20property=\x27og:url\x27\x20content=\x27https://','www.youku.com','byteLength','toLowerCase','closed','&uuid=','addressValue\x20is\x20empty,\x20addressType\x20is\x20','www.jd.com','split','invalid\x20addressType:\x20','www.so.com','x-forwarded-for','www.cnzz.com','www.ifeng.com','www.autohome.com.cn','www.hao123.com','join','command\x20','cdn-all.xn--b6gac.eu.org','invild\x20\x20addressType\x20is\x20','socks\x20server\x20version\x20error:\x20','www.cntv.cn',')\x20tcp\x20is\x20abort','get','www.quyaoya.com','https://','\x0a\x20\x20</body>\x0a\x20\x20<script>\x0a\x20\x20\x20\x20function\x20copyToClipboard(text)\x20{\x0a\x20\x20\x20\x20\x20\x20navigator.clipboard.writeText(text)\x0a\x20\x20\x20\x20\x20\x20\x20\x20.then(()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20alert(\x22Copied\x20to\x20clipboard\x22);\x0a\x20\x20\x20\x20\x20\x20\x20\x20})\x0a\x20\x20\x20\x20\x20\x20\x20\x20.catch((err)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.error(\x22Failed\x20to\x20copy\x20to\x20clipboard:\x22,\x20err);\x0a\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20}\x0a\x20\x20</script>\x0a\x20\x20</html>','www.pptv.com','/sub/','Stringified\x20UUID\x20is\x20invalid','www.mgtv.com','\x0a\x20\x20\x20\x20<div\x20class=\x22container\x22>\x0a\x20\x20\x20\x20\x20\x20<h1>EDtunnel:\x20Protocol\x20Configuration</h1>\x0a\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://ipfs.io/ipfs/bafybeigd6i5aavwpr6wvnwuyayklq3omonggta4x2q7kpmgafj357nkcky\x22\x20alt=\x22EDtunnel\x20Logo\x22\x20class=\x22logo\x22>\x0a\x20\x20\x20\x20\x20\x20<p>Welcome!\x20This\x20function\x20generates\x20configuration\x20for\x20the\x20vless\x20protocol.\x20If\x20you\x20found\x20this\x20useful,\x20please\x20check\x20our\x20GitHub\x20project:</p>\x0a\x20\x20\x20\x20\x20\x20<p><a\x20href=\x22https://github.com/6Kmfi6HP/EDtunnel\x22\x20target=\x22_blank\x22\x20style=\x22color:\x20#00ff00;\x22>EDtunnel\x20-\x20https://github.com/6Kmfi6HP/EDtunnel</a></p>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22clear:\x20both;\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22btn-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22//','cdn.xn--b6gac.eu.org','45EpBwuh','\x22\x20class=\x22btn\x22\x20target=\x22_blank\x22><i\x20class=\x22fas\x20fa-star\x22></i>\x20Best\x20IP\x20Subscription</a>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22subscription-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3>Options\x20Explained:</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>VLESS\x20Subscription:</strong>\x20Direct\x20link\x20for\x20VLESS\x20protocol\x20configuration.\x20Suitable\x20for\x20clients\x20supporting\x20VLESS.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>Clash\x20Subscription:</strong>\x20Opens\x20the\x20Clash\x20client\x20with\x20pre-configured\x20settings.\x20Best\x20for\x20Clash\x20users\x20on\x20mobile\x20devices.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>Clash\x20Link:</strong>\x20A\x20web\x20link\x20to\x20convert\x20the\x20VLESS\x20config\x20to\x20Clash\x20format.\x20Useful\x20for\x20manual\x20import\x20or\x20troubleshooting.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>Best\x20IP\x20Subscription:</strong>\x20Provides\x20a\x20curated\x20list\x20of\x20optimal\x20server\x20IPs\x20for\x20many\x20<b>different\x20countries</b>.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Choose\x20the\x20option\x20that\x20best\x20fits\x20your\x20client\x20and\x20needs.\x20For\x20most\x20users,\x20the\x20VLESS\x20or\x20Clash\x20Subscription\x20will\x20be\x20the\x20easiest\x20to\x20use.</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20','www.toutiao.io','toString','handleDNSQuery\x20have\x20exception,\x20error:\x20','www.eyny.com','invalid\x20data','www.sohu.com','weibo.com','www.jianshu.com','map','WebSocket\x20is\x20not\x20open','reverse','www.cnblogs.com','value','sent\x20socks\x20request','encode','110EBsTHR','?format=clash','Invalid\x20SOCKS\x20address\x20format','www.secoo.com','www.youth.cn','finally','www.panda.tv','1148570wNumRE','/bestip/','575946qYonLT','Remote\x20connection\x20readable\x20closed.\x20Had\x20incoming\x20data:\x20','www.douyin.com','www.pconline.com.cn','connected\x20to\x20','getUint8','readableWebSocketStream\x20is\x20abort','send','www.tiktok.com','d342d11e-d424-4583-b36e-524ab1f0afa4','read','1.2.3.4','\x20expected:\x205','www.dianping.com','retry\x20tcpSocket\x20closed\x20error','1350104vuvJYS','No\x20incoming\x20data,\x20retrying','&path=%2F%3Fed%3D2048#','UDP\x20proxy\x20only\x20enable\x20for\x20DNS\x20which\x20is\x20port\x2053','getWriter','www.hupu.com','www.douban.com','dmxlc3M=','Upgrade','www.aipai.com','www.360.cn','www.zhaopin.com','invalid\x20user','readable','status','www.cnki.net','://','www.imgo.tv','www.xueqiu.com','floor','stack','5rtVdiN','224670ZMABic','600116OvTwXQ','www.tudou.com',')\x20tcp\x20is\x20close','readyState','www.xunlei.com','8.8.4.4','www.netease.com','www.zhangzishi.cc','\x22\x20class=\x22btn\x22\x20target=\x22_blank\x22><i\x20class=\x22fas\x20fa-bolt\x22></i>\x20Clash\x20Link</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22','www.wechat.com','</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3>Default\x20IP\x20Configuration</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22code-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre><code>','getUint16','www.mafengwo.cn','includes','flatMap','trim','www.taobao.com','websocket','error','https://www.google.com/search?q=edtunnel','www.zol.com.cn','tcp\x20','slice','no\x20acceptable\x20methods','www.aliyun.com','pipeTo','pop','text/plain;charset=utf-8','-HTTPS-','headers','www.qidian.com','www.zhibo8.cc','arrayBuffer','writable','values','www.youzu.com','&path=','stringify','random','\x22\x20class=\x22btn\x22\x20target=\x22_blank\x22><i\x20class=\x22fas\x20fa-bolt\x22></i>\x20Clash\x20Subscription</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22','QA==','replace'];a0_0x5eab=function(){return _0x6d2656;};return a0_0x5eab();}function stringify(_0x25f242,_0x3b7114=0x0){const _0x59f27d=a0_0x1410e7,_0x391a03=unsafeStringify(_0x25f242,_0x3b7114);if(!isValidUUID(_0x391a03))throw new TypeError(_0x59f27d(0xff));return _0x391a03;}async function handleUDPOutBound(_0x2c0ac6,_0x5dd982,_0x345294){const _0x555434=a0_0x1410e7;let _0xaad62b=![];const _0x38c709=new TransformStream({'start'(_0xd62314){},'transform'(_0x12e6ee,_0x17823b){const _0x408f20=a0_0x256c;for(let _0x11ae2b=0x0;_0x11ae2b<_0x12e6ee[_0x408f20(0xe4)];){const _0x45dd99=_0x12e6ee[_0x408f20(0x159)](_0x11ae2b,_0x11ae2b+0x2),_0x5cc50f=new DataView(_0x45dd99)[_0x408f20(0x14e)](0x0),_0x1120d0=new Uint8Array(_0x12e6ee[_0x408f20(0x159)](_0x11ae2b+0x2,_0x11ae2b+0x2+_0x5cc50f));_0x11ae2b=_0x11ae2b+0x2+_0x5cc50f,_0x17823b[_0x408f20(0x174)](_0x1120d0);}},'flush'(_0x1747c2){}});_0x38c709[_0x555434(0x139)]['pipeTo'](new WritableStream({async 'write'(_0x3a913a){const _0x5d29e6=_0x555434,_0xce4dfc=await fetch(dohURL,{'method':_0x5d29e6(0xd1),'headers':{'content-type':'application/dns-message'},'body':_0x3a913a}),_0x16fb8c=await _0xce4dfc[_0x5d29e6(0x163)](),_0x366a47=_0x16fb8c[_0x5d29e6(0xe4)],_0x2bca17=new Uint8Array([_0x366a47>>0x8&0xff,_0x366a47&0xff]);_0x2c0ac6['readyState']===WS_READY_STATE_OPEN&&(_0x345294(_0x5d29e6(0xca)+_0x366a47),_0xaad62b?_0x2c0ac6[_0x5d29e6(0x124)](await new Blob([_0x2bca17,_0x16fb8c])['arrayBuffer']()):(_0x2c0ac6[_0x5d29e6(0x124)](await new Blob([_0x5dd982,_0x2bca17,_0x16fb8c])[_0x5d29e6(0x163)]()),_0xaad62b=!![]));}}))['catch'](_0x1c279f=>{const _0x557d0d=_0x555434;_0x345294(_0x557d0d(0xc4)+_0x1c279f);});const _0x4b9562=_0x38c709['writable'][_0x555434(0x130)]();return{'write'(_0x318d07){const _0x32ca9f=_0x555434;_0x4b9562[_0x32ca9f(0x181)](_0x318d07);}};}async function handleDNSQuery(_0x1a9d81,_0x3aa9ea,_0x53e8a8,_0x1a215c){const _0x37f8f5=a0_0x1410e7;try{const _0x11a17e=_0x37f8f5(0x148),_0x2626c6=0x35;let _0x3411bc=_0x53e8a8;const _0x3cd0fc=connect({'hostname':_0x11a17e,'port':_0x2626c6});_0x1a215c(_0x37f8f5(0x121)+_0x11a17e+':'+_0x2626c6);const _0x146238=_0x3cd0fc[_0x37f8f5(0x164)][_0x37f8f5(0x130)]();await _0x146238[_0x37f8f5(0x181)](_0x1a9d81),_0x146238[_0x37f8f5(0x182)](),await _0x3cd0fc['readable'][_0x37f8f5(0x15c)](new WritableStream({async 'write'(_0x16ca97){const _0x4e45ee=_0x37f8f5;_0x3aa9ea[_0x4e45ee(0x146)]===WS_READY_STATE_OPEN&&(_0x3411bc?(_0x3aa9ea[_0x4e45ee(0x124)](await new Blob([_0x3411bc,_0x16ca97])[_0x4e45ee(0x163)]()),_0x3411bc=null):_0x3aa9ea[_0x4e45ee(0x124)](_0x16ca97));},'close'(){const _0x1348a2=_0x37f8f5;_0x1a215c(_0x1348a2(0xbf)+_0x11a17e+_0x1348a2(0x145));},'abort'(_0x543a90){const _0x11d4d4=_0x37f8f5;console['error'](_0x11d4d4(0xbf)+_0x11a17e+_0x11d4d4(0xf8),_0x543a90);}}));}catch(_0x47e72b){console[_0x37f8f5(0x155)](_0x37f8f5(0x107)+_0x47e72b[_0x37f8f5(0x17e)]);}}async function socks5Connect(_0x569fd0,_0x2a9a41,_0x47b2c0,_0x33e68c){const _0x300287=a0_0x1410e7,{username:_0x3aba99,password:_0x1acbba,hostname:_0x3c0b07,port:_0x3e2f77}=parsedSocks5Address,_0x19eba2=connect({'hostname':_0x3c0b07,'port':_0x3e2f77}),_0x1d1d2c=new Uint8Array([0x5,0x2,0x0,0x2]),_0x4847e2=_0x19eba2[_0x300287(0x164)][_0x300287(0x130)]();await _0x4847e2[_0x300287(0x181)](_0x1d1d2c),_0x33e68c(_0x300287(0xd3));const _0x393919=_0x19eba2[_0x300287(0x139)][_0x300287(0x16f)](),_0x5b8de8=new TextEncoder();let _0xbd4005=(await _0x393919[_0x300287(0x127)]())[_0x300287(0x111)];if(_0xbd4005[0x0]!==0x5){_0x33e68c(_0x300287(0xf6)+_0xbd4005[0x0]+_0x300287(0x129));return;}if(_0xbd4005[0x1]===0xff){_0x33e68c(_0x300287(0x15a));return;}if(_0xbd4005[0x1]===0x2){_0x33e68c(_0x300287(0xb2));if(!_0x3aba99||!_0x1acbba){_0x33e68c('please\x20provide\x20username/password');return;}const _0x4030cf=new Uint8Array([0x1,_0x3aba99[_0x300287(0xbc)],..._0x5b8de8[_0x300287(0x113)](_0x3aba99),_0x1acbba['length'],..._0x5b8de8[_0x300287(0x113)](_0x1acbba)]);await _0x4847e2[_0x300287(0x181)](_0x4030cf),_0xbd4005=(await _0x393919[_0x300287(0x127)]())[_0x300287(0x111)];if(_0xbd4005[0x0]!==0x1||_0xbd4005[0x1]!==0x0){_0x33e68c(_0x300287(0xce));return;}}let _0x55b1b0;switch(_0x569fd0){case 0x1:_0x55b1b0=new Uint8Array([0x1,..._0x2a9a41[_0x300287(0xea)]('.')[_0x300287(0x10d)](Number)]);break;case 0x2:_0x55b1b0=new Uint8Array([0x3,_0x2a9a41[_0x300287(0xbc)],..._0x5b8de8[_0x300287(0x113)](_0x2a9a41)]);break;case 0x3:_0x55b1b0=new Uint8Array([0x4,..._0x2a9a41[_0x300287(0xea)](':')[_0x300287(0x151)](_0x4a04e0=>[parseInt(_0x4a04e0[_0x300287(0x159)](0x0,0x2),0x10),parseInt(_0x4a04e0[_0x300287(0x159)](0x2),0x10)])]);break;default:_0x33e68c(_0x300287(0xf5)+_0x569fd0);return;}const _0x539a9c=new Uint8Array([0x5,0x1,0x0,..._0x55b1b0,_0x47b2c0>>0x8,_0x47b2c0&0xff]);await _0x4847e2['write'](_0x539a9c),_0x33e68c(_0x300287(0x112)),_0xbd4005=(await _0x393919[_0x300287(0x127)]())[_0x300287(0x111)];if(_0xbd4005[0x1]===0x0)_0x33e68c('socks\x20connection\x20opened');else{_0x33e68c(_0x300287(0xd2));return;}return _0x4847e2[_0x300287(0x182)](),_0x393919['releaseLock'](),_0x19eba2;}function socks5AddressParser(_0x5f462b){const _0x7926c9=a0_0x1410e7;let [_0x147344,_0x1ffece]=_0x5f462b[_0x7926c9(0xea)]('@')[_0x7926c9(0x10f)](),_0x275ebd,_0x1aa1d7,_0x35faf2,_0x749466;if(_0x1ffece){const _0x46d7c8=_0x1ffece[_0x7926c9(0xea)](':');if(_0x46d7c8[_0x7926c9(0xbc)]!==0x2)throw new Error('Invalid\x20SOCKS\x20address\x20format');[_0x275ebd,_0x1aa1d7]=_0x46d7c8;}const _0x209f2a=_0x147344[_0x7926c9(0xea)](':');_0x749466=Number(_0x209f2a[_0x7926c9(0x15d)]());if(isNaN(_0x749466))throw new Error(_0x7926c9(0x116));_0x35faf2=_0x209f2a['join'](':');const _0xce5910=/^\[.*\]$/;if(_0x35faf2[_0x7926c9(0x150)](':')&&!_0xce5910[_0x7926c9(0xd5)](_0x35faf2))throw new Error(_0x7926c9(0x116));return{'username':_0x275ebd,'password':_0x1aa1d7,'hostname':_0x35faf2,'port':_0x749466};}const at=a0_0x1410e7(0x16b),pt=a0_0x1410e7(0x133),ed=a0_0x1410e7(0xb7);function getConfig(_0x1c3eb0,_0x212d49){const _0x388fc5=a0_0x1410e7,_0x3d2d48=_0x388fc5(0xb5)+_0x212d49+'&fp=randomized&type=ws&host='+_0x212d49+_0x388fc5(0x12e)+_0x212d49,_0x27f99f=_0x1c3eb0[_0x388fc5(0xea)](','),_0x38f433=_0x388fc5(0xfb)+_0x212d49+_0x388fc5(0xfe)+_0x27f99f[0x0]+_0x388fc5(0x115),_0x30f8ea=_0x388fc5(0xfb)+_0x212d49+'/bestip/'+_0x27f99f[0x0],_0x2575d4=_0x388fc5(0xc5)+encodeURIComponent(_0x38f433)+'&insert=false&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true',_0x49b2e6=_0x388fc5(0xe2)+_0x212d49+'/\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20property=\x27og:image\x27\x20content=\x27https://ipfs.io/ipfs/bafybeigd6i5aavwpr6wvnwuyayklq3omonggta4x2q7kpmgafj357nkcky\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20name=\x27twitter:card\x27\x20content=\x27summary_large_image\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20name=\x27twitter:title\x27\x20content=\x27EDtunnel\x20-\x20Protocol\x20Configuration\x20and\x20Subscribe\x20Output\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20name=\x27twitter:description\x27\x20content=\x27Use\x20Cloudflare\x20Pages\x20and\x20Worker\x20serverless\x20to\x20implement\x20protocol\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20name=\x27twitter:url\x27\x20content=\x27https://'+_0x212d49+'/\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20name=\x27twitter:image\x27\x20content=\x27https://ipfs.io/ipfs/bafybeigd6i5aavwpr6wvnwuyayklq3omonggta4x2q7kpmgafj357nkcky\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20property=\x27og:image:width\x27\x20content=\x271500\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20property=\x27og:image:height\x27\x20content=\x271500\x27\x20/>\x0a\x0a\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Roboto\x27,\x20\x27Segoe\x20UI\x27,\x20Tahoma,\x20Geneva,\x20Verdana,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#000000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ffffff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201.6;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x201200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#111111;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x206px\x20rgba(255,\x20255,\x20255,\x200.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2020px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20h1,\x20h2\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ffffff;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.config-item\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#222222;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#333333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2015px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.config-item\x20h3\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ffffff;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#ffffff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#000000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20background-color\x200.3s,\x20color\x200.3s;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.btn:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#cccccc;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.btn-group\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2010px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.btn-group\x20.btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x2010px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20pre\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#333333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#444444;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20pre-wrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20word-wrap:\x20break-word;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#00ff00;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.logo\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float:\x20left;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2020px;\x0a\x09\x09max-width:\x2030%;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x20auto\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x2090%;\x20/*\x20Adjust\x20the\x20max-width\x20to\x20fit\x20within\x20the\x20container\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.btn-group\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.btn-group\x20.btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.code-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2015px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.code-container\x20pre\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding-right:\x20100px;\x20/*\x20Make\x20space\x20for\x20the\x20button\x20*/\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.copy-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20right:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x205px\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x200.8em;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.subscription-info\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#222222;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2015px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.subscription-info\x20h3\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ffffff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x200;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.subscription-info\x20ul\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding-left:\x2020px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.subscription-info\x20li\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20<link\x20rel=\x22stylesheet\x22\x20href=\x22https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css\x22>\x0a\x20\x20</head>\x0a\x20\x20',_0x1da6ba=_0x388fc5(0x101)+_0x212d49+_0x388fc5(0xfe)+_0x27f99f[0x0]+_0x388fc5(0xc0)+encodeURIComponent(_0x388fc5(0xfb)+_0x212d49+_0x388fc5(0xfe)+_0x27f99f[0x0]+_0x388fc5(0x115))+_0x388fc5(0x16a)+_0x2575d4+_0x388fc5(0x14b)+_0x30f8ea+_0x388fc5(0x104),_0x5f0367=_0x27f99f[_0x388fc5(0x10d)](_0x5ecb7c=>{const _0x3827e2=_0x388fc5,_0x4637f8=atob(pt)+_0x3827e2(0x13c)+_0x5ecb7c+atob(at)+_0x212d49+_0x3d2d48,_0x493a91=atob(pt)+_0x3827e2(0x13c)+_0x5ecb7c+atob(at)+proxyIP+_0x3d2d48;return _0x3827e2(0xcc)+_0x5ecb7c+_0x3827e2(0x14d)+_0x4637f8+'</code></pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20copy-btn\x22\x20onclick=\x27copyToClipboard(\x22'+_0x4637f8+_0x3827e2(0x171)+_0x493a91+'</code></pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20copy-btn\x22\x20onclick=\x27copyToClipboard(\x22'+_0x493a91+_0x3827e2(0xda);})[_0x388fc5(0xf2)]('');return'\x0a\x20\x20<html>\x0a\x20\x20'+_0x49b2e6+_0x388fc5(0xe1)+_0x1da6ba+'\x0a\x20\x20\x20\x20'+_0x5f0367+_0x388fc5(0xfc);}const HttpPort=new Set([0x50,0x1f90,0x22b0,0x804,0x826,0x82f,0x822]),HttpsPort=new Set([0x1bb,0x20fb,0x805,0x830,0x827,0x823]);function GenSub(_0x252c6a,_0x4cdf88){const _0x13046a=a0_0x1410e7,_0x808f5a=_0x252c6a[_0x13046a(0x150)](',')?_0x252c6a[_0x13046a(0xea)](','):[_0x252c6a],_0x6420f0=()=>'/'+Math[_0x13046a(0x169)]()['toString'](0x24)['substring'](0x2,0xf)+'?ed=2048',_0x4fbeda=_0x13046a(0xbd)+_0x4cdf88+_0x13046a(0x167)+encodeURIComponent(_0x6420f0())+'#',_0x5bbf2f=_0x13046a(0x173)+_0x4cdf88+_0x13046a(0xd0)+_0x4cdf88+_0x13046a(0x12e),_0x292245=_0x808f5a[_0x13046a(0x151)](_0x3e2b89=>{const _0x5b606b=_0x13046a,_0x2abc35=Array[_0x5b606b(0x175)](HttpPort)[_0x5b606b(0x151)](_0x2b636e=>{const _0x31eee0=_0x5b606b;if(!_0x4cdf88['includes'](_0x31eee0(0xb6))){const _0x23450f=_0x4cdf88+_0x31eee0(0xde)+_0x2b636e,_0x15d717=atob(pt)+_0x31eee0(0x13c)+_0x3e2b89+atob(at)+_0x4cdf88+':'+_0x2b636e+_0x4fbeda+_0x23450f;return proxyIPs[_0x31eee0(0x151)](_0x58a51b=>{const _0x2492b6=_0x31eee0,_0x3ac591=atob(pt)+_0x2492b6(0x13c)+_0x3e2b89+atob(at)+_0x58a51b+':'+_0x2b636e+_0x4fbeda+_0x23450f+'-'+_0x58a51b+'-'+atob(ed);return[_0x15d717,_0x3ac591];});}return[];}),_0x320bfa=Array[_0x5b606b(0x175)](HttpsPort)[_0x5b606b(0x151)](_0x502898=>{const _0x7bb7cc=_0x5b606b,_0xf64c2=_0x4cdf88+_0x7bb7cc(0x15f)+_0x502898,_0x67dddc=atob(pt)+'://'+_0x3e2b89+atob(at)+_0x4cdf88+':'+_0x502898+_0x5bbf2f+_0xf64c2;return proxyIPs[_0x7bb7cc(0x151)](_0x30ac60=>{const _0x80d6ea=_0x7bb7cc,_0x4a7b67=atob(pt)+_0x80d6ea(0x13c)+_0x3e2b89+atob(at)+_0x30ac60+':'+_0x502898+_0x5bbf2f+_0xf64c2+'-'+_0x30ac60+'-'+atob(ed);return[_0x67dddc,_0x4a7b67];});});return[..._0x2abc35,..._0x320bfa];});return _0x292245[_0x13046a(0xf2)]('\x0a');}const hostnames=[a0_0x1410e7(0x10b),'www.baidu.com','www.qq.com',a0_0x1410e7(0x153),a0_0x1410e7(0xe9),a0_0x1410e7(0xb1),a0_0x1410e7(0x10a),'www.tmall.com','www.163.com',a0_0x1410e7(0x170),a0_0x1410e7(0xe3),a0_0x1410e7(0xd9),a0_0x1410e7(0x132),a0_0x1410e7(0x178),'www.toutiao.com',a0_0x1410e7(0xef),a0_0x1410e7(0xf0),a0_0x1410e7(0x136),a0_0x1410e7(0x11f),a0_0x1410e7(0xcf),a0_0x1410e7(0x14c),a0_0x1410e7(0x177),a0_0x1410e7(0x13d),a0_0x1410e7(0x15b),a0_0x1410e7(0x108),a0_0x1410e7(0x100),a0_0x1410e7(0x147),a0_0x1410e7(0xf1),a0_0x1410e7(0xdc),a0_0x1410e7(0x118),a0_0x1410e7(0x131),a0_0x1410e7(0x166),a0_0x1410e7(0x11a),a0_0x1410e7(0x144),a0_0x1410e7(0x157),a0_0x1410e7(0x105),a0_0x1410e7(0x125),a0_0x1410e7(0x149),a0_0x1410e7(0x13b),a0_0x1410e7(0x162),a0_0x1410e7(0x14a),a0_0x1410e7(0x13e),a0_0x1410e7(0xcd),a0_0x1410e7(0xc3),a0_0x1410e7(0x12a),a0_0x1410e7(0xdf),a0_0x1410e7(0x137),a0_0x1410e7(0x10c),a0_0x1410e7(0x14f),a0_0x1410e7(0xb4),a0_0x1410e7(0x161),'www.ctrip.com',a0_0x1410e7(0x120),a0_0x1410e7(0xee),a0_0x1410e7(0xbb),a0_0x1410e7(0xcb),'www.ted.com','www.renren.com',a0_0x1410e7(0xfd),a0_0x1410e7(0xc8),'www.881903.com',a0_0x1410e7(0x135),'www.ttpaihang.com',a0_0x1410e7(0xfa),'www.91.com',a0_0x1410e7(0xba),'www.tmtpost.com',a0_0x1410e7(0x132),a0_0x1410e7(0x16d),a0_0x1410e7(0xec),a0_0x1410e7(0xd8),a0_0x1410e7(0x110),a0_0x1410e7(0xf7),a0_0x1410e7(0x117)];