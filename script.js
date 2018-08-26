const input = document.querySelector('input');

function display(num) {
	if (num.innerHTML === 'C') {
		input.value = '';
	} 
	else {
		let calcInput = input.value += num.innerHTML;
		input.innerHTML = calcInput;
	}
}

function equal() {
	let evaluatedInput = eval(input.value);
	input.value = evaluatedInput;
	return evaluatedInput;
}

function backspace() {
	let newInput = input.value.substring(0, input.value.length - 1);
	input.value = newInput;
	return newInput;
}

function clearEntry() {

}