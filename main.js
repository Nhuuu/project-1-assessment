var count = 0;


document.getElementById('plus').addEventListener('click', function(){
	add();
})

document.getElementById('minus').addEventListener('click', function(){
	subtract();
})

function add(){
	var inputValue = document.getElementById('enterNumber').value;
	count++; 
	newCount = parseInt(inputValue) + count;
  counter();
}

function subtract(){
	var inputValue = document.getElementById('enterNumber').value;
	count--;
	newCount = parseInt(inputValue) + count;
  counter();
}

function counter(){
  document.getElementById('count').textContent = newCount;
  if(count < 0){
    document.getElementById('count').style.color = "red";
  }
  else {
    document.getElementById('count').style.color = "black";
  }
}