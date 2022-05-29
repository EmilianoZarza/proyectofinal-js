import Swal from 'sweetalert2'

// CommonJS
const Swal = require('sweetalert2')
Swal.fire({
    title: 'Custom animation with Animate.css',
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
    }
})
