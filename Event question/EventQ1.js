/**
 * 2. JavaScript Code: • Write functions to handle the following events:
 *  click mouseover mouseout dblclick •
 *  Add event listeners to each button to trigger the appropriate actions. 
 * 3. Actions to Implement:
 *  click: Change the button color.
 *  mouseover: Display a message near the button.
 *  mouseout: Hide the displayed message.
 *  dblclick: Hide the button.
*/

let bt1=document.getElementById("button1");
let bt2=document.getElementById("button2");
let bt3=document.getElementById("button3");

bt1.addEventListener("click",()=>{
    document.getElementById("message1").style.backgroundColor="red";
    bt1.style.backgroundColor="red";
})

bt2.addEventListener("dblclick",()=>{
    bt2.style.display="none";
})
bt3.addEventListener("mouseover",()=>{
    document.getElementById("message3").style.display="inline"
})

bt3.addEventListener("mouseout",()=>{
    document.getElementById("message3").style.display="none";

})
