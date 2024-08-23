
// Botão do Whatsapp

function openWhatsApp() {
    const phoneNumber = '5531994466868'; 
    const message = 'Olá, vim através do seu Portifólio!';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}


//PDF floricultura
function irParaFloricultura(){
    window.open("Floricultura-Online.html")

}

//PDF sekib
function irParaSEKIB(){
    window.open("SEKIB.html")

}