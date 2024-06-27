document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    Swal.fire({
        title: 'Messagesasd ',
        text: "Name: " + name + "\nEmail: " + email + "\nSubject: " + subject + "\nMessage: " + message ,
        icon: 'success',
        confirmButtonText: 'OK'
    });
});