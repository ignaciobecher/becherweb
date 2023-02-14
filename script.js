const btnSend = document.getElementById("btn-submit-id");
const btnMenu = document.getElementById("btn-menu");
const btnClose = document.getElementById("btn-close");
const headerLink1 = document.getElementById("header-links-1");
const headerLink2 = document.getElementById("header-links-2");
const headerLink3 = document.getElementById("header-links-3");
const headerLink4 = document.getElementById("header-links-4");
const headerResponsive = document.getElementById(
  "header-container-responsive-id"
);
const headerImg = document.getElementById("header-responsive-img");

btnMenu.addEventListener("click", function () {
  btnMenu.style.display = "none";
  headerResponsive.style.display = "grid";
  headerResponsive.style.gridTemplateRows = "auto";
  headerResponsive.style.gridTemplateColumns = "1fr 1fr";
  headerResponsive.style.justifyContent = "right";
  // headerImg.style.gridColumn = "1";
  headerLink1.style.display = "grid";
  headerLink1.style.gridColumn = "2";
  headerLink2.style.display = "grid";
  headerLink2.style.gridColumn = "2";
  headerLink3.style.display = "grid";
  headerLink3.style.gridColumn = "2";
  headerLink4.style.display = "grid";
  headerLink4.style.gridColumn = "2";
});

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
