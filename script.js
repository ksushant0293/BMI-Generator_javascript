const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    // console.log(height);
    const weight = parseInt(document.querySelector("#weight").value);
    // console.log(weight);
    const result = document.querySelector("#result");

    if (height == '' || height < 0 || isNaN(height)) {
        result.innerHTML = 'Please enter a valid height';
    } else if(weight == '' || height < 0 || isNaN(weight)) {
        result.innerHTML = 'please enter a valid weight';
    }else{
        const bmi = (weight/ ((height*height)/ 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
        // console.log(bmi);
    }
})
