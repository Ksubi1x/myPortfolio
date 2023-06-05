let fullName = document.getElementById('from_name').value
let emailID = document.getElementById('email_id').value
let messageArea = document.getElementById('message').value



function sendEmail() {
    let params = {
        from_name : fullName,
        email_id: emailID,
        message: messageArea
    }
    emailjs.send("service_agxrjly","template_g49usdi", params, "1rCiaIZAkc4vrm-oy").then(function (res) {
        console.log(res)
    })
}