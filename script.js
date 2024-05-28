document.getElementById('bmiForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);
  const results = document.getElementById('results');
  
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    results.textContent = 'Please enter valid height and weight values.';
    return;
  }
  
  const bmi = (weight / (height * height)).toFixed(2);
  let category;
  
  if (bmi < 18.6) {
    category = 'Underweight';
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    category = 'Normal';
  } else {
    category = 'Overweight';
  }
  
  results.textContent = `Your BMI is ${bmi} (${category})`;
});
