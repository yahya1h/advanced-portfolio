function contact (event) {
    event.preventDefault();
   /* emailjs
        .sendForm(
            'service_586o5bp',
            'template_99fu5i4',
            event.target,
            'UZTrOdcxQFPDPffCL'
        ).then (()=> {
            console.log('it works');
        }) */
        const loading = document.querySelector('.modal__overlay-load');
        const success = document.querySelector('.modal__overlay--success');
        setTimeout(() => {
            console.log('it worked');
        })
};