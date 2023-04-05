function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(response){
    return response.json();
}).then(function(value){
    console.log(value);
})
}
fetchData();