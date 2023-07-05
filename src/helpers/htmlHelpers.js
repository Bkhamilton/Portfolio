export function enhance(paragraph) {
    const text = paragraph.innerText;
    const letters = text.split('');
    const spans = letters.map(letter => {
      const span = document.createElement('span');
      span.innerText = letter;
      span.className = "letter";
      return span;
    });

    paragraph.innerHTML = '';
    spans.forEach(span => {
      paragraph.appendChild(span);
    });
}