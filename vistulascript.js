document.getElementById('myButton1').addEventListener('click',function(){
    document.getElementById('output').textContent = 'Button clicked!';
                                                      })
document.getElementById('submitButton').addEventListener('click',function(){
  const textInputValue = 
        document.getElementById('textInput').value;
  document.getElementById('output1').textContent = textInputValue;
});