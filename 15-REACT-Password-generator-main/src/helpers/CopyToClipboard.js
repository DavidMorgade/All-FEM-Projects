const copyToClipboard = (str) =>
  navigator.clipboard?.writeText?.(str) ??
  Promise.reject('The Clipboard API is not available');

export default copyToClipboard;
