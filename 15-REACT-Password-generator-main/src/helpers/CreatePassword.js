function makePassword(length, uppercase, lowercase, numbers, symbols) {
  let result = '';
  let characters = '';
  if (uppercase) characters += 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
  if (lowercase) characters += 'abcdefghijklmnopqrstuvwxyz'.toLowerCase();
  if (numbers) characters += '0123456789';
  if (symbols) characters += '~!@#$%^&*()_-+={[}]|:;"<,>.?/';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  console.log(result);
  return result;
}

export default makePassword;
