// CONTROL: minimal valid Wasm — empty function, should compile OK
const bytes = new Uint8Array([
  0x00,0x61,0x73,0x6d, // magic
  0x01,0x00,0x00,0x00, // version
  0x01,0x04,0x01,0x60,0x00,0x00, // type section: 1 type, func()→void
  0x03,0x02,0x01,0x00, // function section: 1 func, type 0
  0x0a,0x04,0x01,0x02,0x00,0x0b, // code section: 1 body, 0 locals, end
]);
try {
  new WebAssembly.Module(bytes);
  print("CONTROL_PASS: valid module compiled");
} catch(e) { print("CONTROL_FAIL: " + e); }
