fetch('http://localhost:8080/api/v1/listings')
  .then(response => response.json())
  .then(data => {
   console.log('data', '>>>>>>>>>data')
    const card1 = document.getElementById('cardTitle1');
    card1.textContent = data[0].name; 
    const description1 = document.getElementById('cardDescription1');
    description1.textContent = data[0].description; 

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
