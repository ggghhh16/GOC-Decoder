/**
 * Decrypts a string using the Caesar cipher method (shifting characters).
 * @param text The input text to decrypt.
 * @param shift The number of positions to shift back (the key).
 * @returns The decrypted string.
 */
export const caesarDecrypt = (text: string, shift: number): string => {
  // Normalize shift to 0-25
  const s = shift % 26;
  
  return text.replace(/[a-zA-Z]/g, (char) => {
    const base = char <= 'Z' ? 65 : 97;
    // For decryption, we subtract the shift (or add 26 - shift)
    // (char code - base - shift + 26) % 26 + base
    return String.fromCharCode(((char.charCodeAt(0) - base - s + 26) % 26) + base);
  });
};
