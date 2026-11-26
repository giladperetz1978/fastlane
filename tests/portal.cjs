const assert=require('node:assert/strict');
const roomUrl=require('../portal/join.js');
for(const [code,url] of [
  ['60L00-HHG00','http://192.168.1.24:49152'],
  ['0a000 02100','http://10.0.0.1:1024'],
  ['5C3VV-VTVVV','http://172.31.255.254:65535'],
  ['123456',null],['VVVVV-VVVVV',null],['00000-00000',null],
  [(0x7f000001*65536+8080).toString(32).padStart(10,'0'),null],
  [(0xc0a80118*65536+80).toString(32).padStart(10,'0'),null]
])assert.equal(roomUrl(code),url);
console.log('Portal address and invalid-input tests passed');
