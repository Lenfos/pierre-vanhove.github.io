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
            Body: "<html lang='en'>" +
                "<body style='background: #92c9ce; height: 800px; padding: 5%;'>" +
                "<div style='background: #ddeff0; display: flex; flex-direction: column; justify-content: center; align-items: center;'>" +
                "<img src='https://lenfos.github.io/pierre-vanhove.github.io/Assets/img/Logo/Logo.png' alt='Pierre Vanhove Logo' style='width: 100%'>" +
                "<h1>Contact Form Confirmation</h1>" +
                "<h2>Your message to Pierre Vanhove has been successfully send</h2>" +
                "</div>" +
                "</body>" +
                "</html>",

            isHtml : true
        }).then(
            message => ""
        )
    );
}
