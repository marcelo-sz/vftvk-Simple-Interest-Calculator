// compute the numbers after clicking the button 
function compute()
{
    // get textbox values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // perform the calculations
    var amount = principal * years * rate /100;

    // transorm number of years in future year number
    var year = new Date().getFullYear() + parseInt(years);

    //checks if principal number is not ZERO or negative number or null and sets the result innerhtml
    if (principal > 0 && !isNaN(principal)) {
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,<br>at an interest rate of <mark>"+rate+"%</mark>.<br>You will receive an amount of <mark>"+amount+"</mark> ,<br>in the year of <mark>"+year+"</mark><br>";
    }
    else
    {
        window.alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}

// function for updating the RATE field 'rate_val' value
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        