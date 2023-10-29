// function sendMail() {
//    var params = {
//      name: document.querySelector("name").value,
//      email: document.querySelector("email").value,
//      message: document.querySelector("message").value,
//    };
 
   
 
//      emailjs.send(serviceID, templateID, params)
//      .then(res=>{
//          document.querySelector("name").value = "";
//          document.querySelector("email").value = "";
//          document.querySelector("message").value = "";
//          console.log(res);
//          alert("Your message sent successfully!!")
 
//      })
//      .catch(err=>console.log(err));
 
//  }
 function sendMail() {
  (function () {
    emailjs.init("wCsB8C7mQ-gG_mPPZ");
  })();

  var params = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      message: document.querySelector("#message").value,
  };

  const serviceID = "service_xmlt3ye";
  const templateID = "template_cfm9i7q"; // Replace with your EmailJS template ID

  emailjs.send(serviceID, templateID, params)
      .then(function (response) {
          console.log("Sent successfuly:", response);
          alert("Your message has been sent successfully!");

          // Clear the form inputs
          document.querySelector("name").value = "";
          document.querySelector("email").value = "";
          document.querySelector("message").value = "";
      })
      .catch(function (error) {
          console.log("Failed to send:", error);
          alert("An error occurred while sending the message. Please try again later.");
      });
}
