function calculateResults() {
  // Get the input value
  const x = parseFloat(document.getElementById('input-x').value);
  
  // Check if the input is a valid number
  if (isNaN(x)) {
      alert('Please enter a valid number');
      return;
  }
  
  // Calculate the results for different multipliers
  const results = {
      '0.2': (x * 0.15).toFixed(2),
      '0.5': (x * 0.25).toFixed(2),
      '0.6': (x * 0.1).toFixed(2),
  };
  
  // Display the results in the respective tiles
  document.getElementById('result0.2').textContent = `₹${results['0.2']}/promo`;
  document.getElementById('result0.5').textContent = `₹${results['0.5']}/promo`;
  document.getElementById('result0.6').textContent = `₹${results['0.6']}/promo`;
}
