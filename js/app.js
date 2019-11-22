const survey = ()=> {
    event.preventDefault();

    var q1 = Number(document.querySelector('input[name=personality]:checked').value);
    
    var q2 = Number(document.querySelector('input[name=color]:checked').value);
    console.log(q2);

    var total = q1 + q2;
}