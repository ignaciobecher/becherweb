function sendMail(e) {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_6w8ishg", "template_cte5f6m", params).then(
    function (response) {
      window.alert("SUCCESS!", response.status, response.text);
    },
    function (error) {
      window.alert("FAILED...", error);
    }
  );
  e.preventDefault();
}
