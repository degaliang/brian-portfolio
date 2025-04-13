const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
console.log('[prefix.ts] prefix =', prefix);
export { prefix };