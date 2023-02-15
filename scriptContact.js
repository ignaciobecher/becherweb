const btnSend = document.getElementById("btn-submit-id");

btnSend.addEventListener("click", function sendMail(e) {
  e.preventDefault();
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_6w8ishg", "template_cte5f6m", params).then(
    function (response) {
      window.alert(
        "Consulta enviada. A la brevedad nos pondremos en contacto con vos!",
        response.status,
        response.text
      );
    },
    function (error) {
      window.alert("Error al enviar formulario", error);
    }
  );
  e.preventDefault();
});
