function goToTodoList() {
    var userName = document.getElementById('username').value;
    document.getElementById('userNamePlaceholder').textContent = userName;
    document.getElementById('todoList').style.display = 'block';
}
// როცა სტარტის ღილაკს დაჭერს, ინახავს იუზერნეიმს, გადაჰყავს შემდეგ ფეიჯზე



function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
    if (taskText !== '') {
        var taskList = document.getElementById('taskList');
        var li = document.createElement('li');
        li.textContent = taskText;
        li.addEventListener('click', function() {
            this.classList.toggle('completed');
            if (this.classList.contains('completed')) {
                showMotivatedQuote();
            }
        });
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
//როდესაც მეორე ფეიჯზე ედდ ტასკს დაეჭირება; თუ ცარიელი არაა ტასკი ინახავს ახალს; როდესაც ტასკს დავასრულებთ იძახებს ქოუთებს



// როდესაც ენთერ ღილაკს დავაწვებით დამატებს ტასკს
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});


// უკან გადასვლა
function goBack() {
    window.location.href = 'index.html'; // ველქამ ფეიჯზე გადასასვლელი
}


function clearAllTasks() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // ასუფთავებს მთლიანად დავალებებს
}



function showMotivatedQuote() {
    var quotes = [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "It does not matter how slowly you go as long as you do not stop. – Confucius",
        "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt"
    ];
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('motivatedQuote').textContent = quote;
}
// როდესაც რომელიმე დავალებას დავასრულებთ მაშინ გამოიძახებს რანდომულად.



function goToTodoList() {
    var userName = document.getElementById('username').value;
    localStorage.setItem('userName', userName); // Store username in localStorage
    window.location.href = 'todo.html'; // Redirect to the to-do list page
}




