function sendOtp() {
  const email = document.getElementById("email");
  const verify = document.getElementById("verification");

  let gen_otp = Math.floor(Math.random() * 10000);
  let email_body = " <h1> verify your email address </h1> <br/> <p> please verify your account by entering the below code : <br/><br/>  "+ gen_otp+" <br/> Regards from Akshatraj singh </P>";



  Email.send({
    SecureToken: "ae75b0d6-2de1-4673-8683-325ae8e5ef48",
    To : email.value,
    From: "0506cs211007@gmail.com",
    Subject: "please verify your account  ",
    Body: email_body,
  }).then(
    
    message => {
    if (message === "OK") {
      alert(
        "OTP has been send to your email " +
          email.value);
      verify.style.display = "flex";
      const verify_btn = document.getElementById("verify_btn");
      const otp_value = document.getElementById("otp_value");

      verify_btn.addEventListener("click", () => {
        if (otp_value.value == gen_otp) {
          alert("Email address varified succsesfully....");
        } else {
          alert("Invalid otp");
        }
      })
    }
  });
}
