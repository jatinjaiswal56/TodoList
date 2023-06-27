const inputelement=document.getElementById("input-box");
const ullistelements=document.getElementById("list-container");
function abc(event){
    console.log("outside input")
    if(event.key==='Enter'){
    //call the event handler
    addhandler();
    }
}
function addhandler(event){

    console.log("button clicked");
        const res=inputelement.value;
        console.log(res);
        //if the inputelemt.value is non truth then it should show error notification alert
        if(!res){
            alert('Text cant be empty');
            return;
        }
        else{
            addTask()
            // after adding the task the value of input field should be empty
            inputelement.value=''
            saveData()
        }
 }
 //using this function to save the data in local storage
 function saveData(){
    localStorage.setItem("data",ullistelements.innerHTML)
 }
 function showSavedItems(){
    ullistelements.innerHTML=localStorage.getItem("data");
 }

 function addTask(){
    //creating a list tag
    const li=document.createElement('li');
    li.innerHTML=inputelement.value;
    ullistelements.append(li);
     //adding x button for deleting it
     let span=document.createElement("span");
     span.innerHTML='x';
     //appending it in list element
     li.appendChild(span);
 }




 //this will call the function clickhandler if we click on list elemt
 ullistelements.addEventListener("click",(event)=>clickhandler(event));
 function clickhandler(event){
    console.log(event.target.tagName)
    if(event.target.tagName==="LI"){
        //it will toggle the classlist i.e it will add or remove the classname 
        event.target.classList.toggle("checked")
        saveData()
    }
    else if(event.target.tagName==="SPAN"){
        console.log("x functioning")
        //it will remove the particular list from the unordered list
        event.target.parentElement.remove();
        saveData()

    }

 }
 inputelement.addEventListener('keyup',abc);
 showSavedItems();




