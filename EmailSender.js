function sendEmail(){
    Email.send({
        SecureToken: "154290d7-8a88-4f76-9f02-0afeece36a8d",
        From : "pierre7159@gmail.com",
        To : "vanhove.pierre@proton.me",
        Subject : "New Contact Form",
        Body : "Email : " + document.getElementById("Source").value +
                "<br>Object: "+ document.getElementById("object").value
                +"<br> Message : " + document.getElementById("message").value
    }).then(
        message => alert("Your message has been sent successfully," +
            " you should have received a Confirmation e-mail, if this is not the case, please check your spams"),
        Email.send({
            SecureToken: "154290d7-8a88-4f76-9f02-0afeece36a8d",
            From : "vanhove.pierre@proton.me",
            To: document.getElementById("Source").value,
            Subject : "Contact Form Confirmation",
            Body: "Your message to Pierre Vanhove has been successfully send" +
                "<br> Content of your message : " + document.getElementById("message").value

        }).then(
            message => ""
        )
    );
}
