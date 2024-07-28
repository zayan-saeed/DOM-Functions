//Write a function calculateFactorial (n) that takes a non-negative integer n and returns the factorial of n.(factorial of 5= 5*4*3*2*1=120)

function calcfact(n){
    if(n<0){
        console.log("its a negative number");

    }
    else if(n==0){
        console.log("its a zero");
    }
    else{
            let fact=1;
            for(let i=1;i<=n;i++){
                fact=fact*i;
            }
            console.log(fact);
            
    }
}


calcfact(6)



//Write a function isPrime(num) that takes a positive integer num and returns true if the number is prime, and false otherwise  


function Prime(num)
{

    if(num>=1)
        {   
            if(i==1){
                console.log("Is a Prime & composite number");
            }
            if(i==2){
                console.log("Is a Prime  number");
            }
            for(i=2;i<num;i++)
                {
                    if(num%i==0)
                        {
                        return false
                        
                        
                    }
                    else{
                        return true
                        
                        
                    }
                }
        }
    else{
        console.log("it is not a Positive integer");
    }
    
    
}

let i
console.log( Prime(7));

//Write a function sumEvenNumbers(start, end) that takes two integers start and end, and returns the sum of all even numbers in the inclusive range from start to end.

function sumEvenNumbers(start, end)
        {
            for(let i=sum;i<=end;i++){
                if(i%2==0){
                    sum=sum+i

                }
                
            }
            console.log(sum);

}


let sum=0
sumEvenNumbers(2, 10)

//Write a JavaScript program to remove items(clicking on a button) from a drop-down list.

function remove(){
    const selectcolor=document.getElementById('colorSelect')
    const selectedIndex=selectcolor.selectedIndex

    if(selectedIndex!==-1){
        selectcolor.remove(selectedIndex)
    }
}

//Write a JavaScript program to change the  color given text in p tag  

function changeColor() {
    const selectElement = document.getElementById('colorSelect2');
    const color = selectElement.value;
    const sampleText = document.getElementById('sampleText');
    sampleText.style.color = color;
}

//Write a JavaScript function to get the values of First and Last names of the following form.


let Fname=document.getElementById('Fname').getAttribute('value')
let Lname=document.getElementById('Lname').getAttribute('value')
console.log(Fname);
console.log(Lname);



//Write a JavaScript program to display a random image (clicking on a button) from the following list.

function Random_img(){
    document.getElementById('displayimage').innerHTML='<img src="http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg&quot" width= "240px", height ="160px"> <img src="http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg&quot" width= "320px", height ="195px"> <img src="http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg&quot" width= "500px", height ="343px">'

}
