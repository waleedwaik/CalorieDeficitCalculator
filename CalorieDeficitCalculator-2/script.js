//Walid AlDweik
//I added a comment for every function so that it is easier to tell what is for what
// create variable s for use;
let weight = document.getElementById('weight');
let height = document.getElementById('height');

let pick = document.getElementById('pick');
let addClass = document.querySelector('.addClass');
let highId = document.getElementById('highId');

let maintainance = document.getElementById('maintainance');
let weightLoss = document.getElementById('weightLoss');
let weightGain = document.getElementById('weightGain');

let BMI = document.getElementById('BMI');

let GO = document.getElementById('go');


// this is supposed to be for the BMI, but I had to comment the result;
let weightInKg;
// this is a function for the weight options
function changeFunc(inp){

let selectBox = document.getElementById('selectBox');
// grab the value of any of the options that it's changed too ...
let selectValue = selectBox.options[selectBox.selectedIndex].value;

	// if this value is one
	if(selectValue === '1'){
		// run this maths
		 weightInKg = (10 * Number(inp));
		 return weightInKg;
	}

	if(selectValue === '2'){
		// if it is two run this...
		return (22 * Number(inp));
	}
}

let heightInM2;

// this is a function for the height options
function changeFunc2(inp){
 // same steps as above
let selectBox2 = document.getElementById('selectBox2');
let selectValue2 = selectBox2.options[selectBox2.selectedIndex].value;
	if(selectValue2 === '1'){
		return (6.25 * Number(inp));
	}

	if(selectValue2 === '2'){
		 heightInM2 = (625 * Number(inp));
		return heightInM2;
	}
}


// here's a list of empty variables, I set this to 'true' on each of the button functions
 // Idea here is if a button is clicked, then it is set to true meaning focus is on that button
let click;
let modClick;
let highClick;

// listen for click event on the low button
// onclick button changes color using class
pick.addEventListener('click', function(e){
	// e.preventDefault();
	click = true;
	// once this button is clicked change the colours and remove the other button colors  
	pick.classList.add('colorOrange');
	addClass.classList.remove('colorOrange');
	highId.classList.remove('colorOrange');

})

// function for the moderate button
// onclick button changes color using class
 function mod(){
	modClick = true;
	addClass.classList.add('colorOrange');
	pick.classList.remove('colorOrange')
	highId.classList.remove('colorOrange');
}

// function for the high button
// onclick button changes color using class
function high(){
 	highClick = true;
 	highId.classList.add('colorOrange');
 	pick.classList.remove('colorOrange');
 	addClass.classList.remove('colorOrange');
}

GO.addEventListener('click', function(e){
	
		if(weight.value !== '' && height.value !== '' && click === true){
			// if the low button is clicked run this maths with the values provided
				let result = ((Number(changeFunc(weight.value)) + Number(changeFunc2(height.value)) - 95) - 200);

				// then display result in the result section
				maintainance.innerHTML = result;
				weightLoss.innerHTML = Number(result) * 0.8;
				weightGain.innerHTML = Number(result) * 1.25;
				BMI.innerHTML = Number(weightInKg) / Number(Math.pow(heightInM2, 2));
				// console.log(weightInKg);
				// console.log();
				click = false;
		} 
		if(modClick === true){

			// if moderate button is clicked run maths as above..
			let modResult = ((Number(changeFunc(weight.value)) + Number(changeFunc2(height.value)) - 95));
			maintainance.innerHTML = modResult;
			weightLoss.innerHTML = Number(modResult) * 0.8;
				weightGain.innerHTML = Number(modResult) * 1.25;
			modClick = false;
		}

		if(highClick === true){

			// if high button is clicked run maths and display result too
			let highResult = ((Number(changeFunc(weight.value)) + Number(changeFunc2(height.value)) - 95) + 200);
			maintainance.innerHTML = highResult;
			weightLoss.innerHTML = Number(highResult) * 0.8;
			weightGain.innerHTML = Number(highResult) * 1.25;
			highClick = false;
		}

		// else if(modClick === true){
		// 	alert('true')
		// 	 modClick;
		// }
		else{
			// display this if any field is empty
		// alert('some fields are empty');
		}
})

// Height();