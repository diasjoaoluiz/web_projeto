const phrases = [
    "Estudante de ADS - FATEC",
    "Desenvolvedor WEB",
  ];
  
  let currentPhraseIndex = 0;
  let currentPhrase = phrases[currentPhraseIndex];
  let charIndex = 0;
  
  function typeWriter() {
    if (charIndex < currentPhrase.length) {
      document.getElementById("description-text").textContent += currentPhrase.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 150); // velocidade de digitação (ajuste conforme necessário)
    } else {
      setTimeout(changePhrase, 4000); // tempo para trocar de frase (5 segundos)
    }
  }
  
  function changePhrase() {
    charIndex = 0;
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    currentPhrase = phrases[currentPhraseIndex];
    document.getElementById("description-text").textContent = "";
    typeWriter();
  }
  
  typeWriter();
  