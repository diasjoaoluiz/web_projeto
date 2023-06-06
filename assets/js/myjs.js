const phrases = [
    "Estudante de ADS - FATEC",
    "Desenvolvedor WEB",
  ];
  
  let currentPhraseIndex = 0;
  let currentPhrase = phrases[currentPhraseIndex];
  let charIndex = 0;
  let tagText = document.getElementById("description-text");
  
  function typeWriter() {
    if (charIndex < currentPhrase.length) {
      tagText.textContent += currentPhrase.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 150); // velocidade de digitação 
    } else {
      setTimeout(changePhrase, 4000); // tempo para trocar de frase
    }
  }
  
  function changePhrase() {
    charIndex = 0;
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    currentPhrase = phrases[currentPhraseIndex];
    tagText.textContent = "";
    typeWriter();
  }
  
  typeWriter();


const imagem = document.getElementById("scrollImage");
imagem.addEventListener('click', function() {
  const divContente = document.getElementById('about');
  divContente.scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('scroll', function() {
  const arrowImage = document.getElementById('arrowImage');
  const scrollPosition = window.scrollY;

  // Define a quantidade de rolagem que ativa a exibição da imagem
  const scrollThreshold = 200;

  if (scrollPosition > scrollThreshold) {
    arrowImage.classList.remove('hidden');
  } else {
    arrowImage.classList.add('hidden');
  }
});


window.addEventListener('scroll', function() {
  const arrowImage = document.getElementById('arrowImage');
  const scrollPosition = window.scrollY;
  const scrollThreshold = 200;

  if (scrollPosition > scrollThreshold) {
    arrowImage.classList.remove('hidden');
  } else {
    arrowImage.classList.add('hidden');
  }
});

const arrowImage = document.getElementById('arrowImage');
arrowImage.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

