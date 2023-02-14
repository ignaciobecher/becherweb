const btnSend = document.getElementById("btn-submit-id");
const btnMenu = document.getElementById("btn-menu");
const btnClose = document.getElementById("btn-close");
const headerLinks = document.querySelectorAll("#header-links");
const headerResponsive = document.getElementById(
  "header-container-responsive-id"
);

btnMenu.addEventListener("click", function () {
  btnMenu.style.display = "none";
  headerResponsive.style.display = "grid";
  headerResponsive.style.gridTemplateRows = "auto";
  headerResponsive.style.gridTemplateColumns = "1fr 1fr";
  headerResponsive.style.justifyContent = "right";
  headerLinks.style.display = "grid";
  headerLinks.style.gridColumn = "2";
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
      window.alert("SUCCESS!", response.status, response.text);
    },
    function (error) {
      window.alert("FAILED...", error);
    }
  );
  e.preventDefault();
});
