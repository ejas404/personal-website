
$("#gform").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbyaUHoDrNElnV5anBWjH43pEMEkymU1qoZ_B2a7V-raoiy1eSZVMS3bh6_pqYIDhoWT/exec",
        data:$("#gform").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
