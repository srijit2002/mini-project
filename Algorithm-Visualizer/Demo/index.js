const boxes=document.querySelectorAll(".box");
console.log(boxes.length);
let count=0;
const linearSearch=(n)=>{
   
   for(let i=0;i<boxes.length;i++){
        if(i==n){
            boxes[i].classList.add("found")
            break;
        }
        setTimeout(() => {
            boxes[i].classList.add("completed")
        }, count*200);
        count++;
    };
   
}

const runAnimation=(start,end,mid,count)=>{
    setTimeout(() => {
        boxes[start].classList.add("terminal");
        boxes[end].classList.add("terminal");
        boxes[mid].classList.add("completed");
    }, count*1000);
    

}
const binarySearch=(n)=>{
    let count=0;
    let start=0;
    let end=boxes.length-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        runAnimation(start,end,mid,count);
        count++;
        if(mid==n){
            boxes[mid].classList.add("found")
            break;
        }
        else if(mid>n)end=mid-1;
        else start=mid+1;
    }
}
document.getElementById("linearButton").addEventListener("click",()=>{
    const inputValue=document.getElementById("output").value;
    linearSearch(inputValue);
})
document.getElementById("binaryButton").addEventListener("click",()=>{
    const inputValue=document.getElementById("output").value;
    binarySearch(inputValue);
})