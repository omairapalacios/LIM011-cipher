global.window = global;
require('../src/cipher');

describe('cipher', () => {
  it('debería ser un object', () => {
    expect(typeof cipher).toBe('object');
  });
  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.encode).toBe('function');
    });
    // Uppercase support test
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      expect(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe ('HIJKLMNOPQRSTUVWXYZABCDEFG')
    });
    // Hacker edition
    // Lowercase support test
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
    expect(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('hijklmnopqrstuvwxyzabcdefg');
    });
    // character support test
    it('debería retornar " !@" para " !@"', () => {
    expect(cipher.encode(33, ' !@')).toBe(' !@');
    });
    // number support test
    it('debería retornar "1234567890" para "4567890123"', () => {
      expect(cipher.encode(33, '1234567890')).toBe('4567890123');
      });

    it('deberia retornar "offset invalido" para "0"', () =>{
        expect(cipher.encode(0,'abc')).toBe('offset invalido');
    });
  });
  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.decode).toBe('function');
    });
    // Uppercase support test
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      expect(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }); 
    // Hacker edition
    // Lowercase support test
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
    expect(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('abcdefghijklmnopqrstuvwxyz');
    });
    // character support test
    it('debería retornar " !@" para " !@"', () => {
    expect(cipher.decode(33, ' !@')).toBe(' !@');
    });
    // number support test
    it('debería retornar "4567890123" para "1234567890"', () => {
      expect(cipher.decode(33, '4567890123')).toBe('1234567890');
      });
    it('deberia retornar "offset invalido" para "0"', () =>{
        expect(cipher.decode(0,'abc')).toBe('offset invalido');
    });
  });
});
