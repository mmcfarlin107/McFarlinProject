function message() {
        var userInput = document.getElementById("positive").value;
        var userCase = userInput.toUpperCase();    
        var msg = userCase + '!!!';
        document.write(msg);  
    }          