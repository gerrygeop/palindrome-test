function checkPalindrome() {
  const inputText = document.getElementById('inputText').value;
  convertText(inputText);
}

function convertText(text) {
  const textConvert = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const length = textConvert.length;
  const halfLength = Math.floor(length/2);

  const result = document.getElementById('resultText');

  for (let i = 0; i < halfLength; i++) {
    if (textConvert[i] !== textConvert[length-1-i]) {
      result.textContent = 'Not a Palindrome!';
      result.classList.add('false');
      return;
    }
    
    result.classList.remove('false');
    result.textContent = `It's a Palindrome!`
    
  }
}