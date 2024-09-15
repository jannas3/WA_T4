document.getElementById('loremForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numParagraphs = document.getElementById('numParagraphs').value;
  
    fetch(`/generate?x=${numParagraphs}`)
      .then(response => response.text())
      .then(data => {
        document.getElementById('result').innerHTML = data; 
      });
  });
  