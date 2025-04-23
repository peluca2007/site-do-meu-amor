var datanamoro = new Date(2023, 1, 18, 22, 0, 0, 0); // Data do namoro

function atualizarTempo() {
    var data = new Date(); // Obtém a data e hora atuais

    var dia = data.getDate(); // Dia do mês
    var mes = data.getMonth() + 1; // Mês (adiciona 1 porque começa em 0)
    var ano = data.getFullYear(); // Ano
    var hora = data.getHours(); // Hora
    var minutos = data.getMinutes(); // Minutos
    var segundos = data.getSeconds(); // Segundos

    var tempo = data - datanamoro; // Tempo desde o namoro
    var dias = Math.floor(tempo / (1000 * 60 * 60 * 24)); // Tempo em dias
    var horas = Math.floor((tempo / (1000 * 60 * 60)) % 24); // Horas restantes
    var minutos = Math.floor((tempo / (1000 * 60)) % 60); // Minutos restantes
    var segundos = Math.floor((tempo / 1000) % 60); // Segundos restantes

    var diahj = document.getElementById("diahj"); // Elemento HTML para exibir a data atual
    var tempojuntos = document.getElementById("tempojuntos"); // Elemento HTML para exibir o tempo juntos

    diahj.innerHTML = "O dia que eu pedi minha princesa em namoro foi 18/02/2023"; // Atualiza a data do pedido de namoro
    tempojuntos.innerHTML = "Estamos juntos há " + dias + " dias, " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos."; // Atualiza o tempo juntos
}

function calcularDatah() {
    var data = new Date(); // Obtém a data atual
    var tempo = data - datanamoro; // Tempo desde o namoro
    var dias = Math.floor(tempo / (1000 * 60 * 60 * 24)); // Tempo em dias
    var horas = Math.floor((tempo / (1000 * 60 * 60)) % 24); // Horas restantes

    var horastotal = dias * 24 + horas; // Total de horas
    var res = document.getElementById("res"); // Seleciona o elemento com ID 'res'
    res.innerHTML = "Estamos juntos há " + horastotal + " horas."; // Atualiza o conteúdo do elemento 'res'
}
function calcularDatam(){
        var data = new Date(); // Obtém a data atual
        var tempo = data - datanamoro; // Tempo desde o namoro
        var dias = Math.floor(tempo / (1000 * 60 * 60 * 24)); // Tempo em dias
        var horas = Math.floor((tempo / (1000 * 60 * 60)) % 24); // Horas restantes
        var minutos = Math.floor((tempo / (1000 * 60)) % 60); // Minutos restantes
        
        var minutostotal = dias * 24 * 60 + horas * 60 + minutos; // Total de minutos
        var res = document.getElementById("res"); // Seleciona o elemento com ID 'res'
        res.innerHTML = "Estamos juntos há " + minutostotal + " minutos."; // Atualiza o conteúdo do elemento 'res'
    }
function calcularDatas(){
    var data = new Date(); // Obtém a data atual
    var tempo = data - datanamoro; // Tempo desde o namoro
    var dias = Math.floor(tempo / (1000 * 60 * 60 * 24)); // Tempo em dias
    var horas = Math.floor((tempo / (1000 * 60 * 60)) % 24); // Horas restantes
    var minutos = Math.floor((tempo / (1000 * 60)) % 60); // Minutos restantes
    var segundos = Math.floor((tempo / 1000) % 60); // Segundos restantes
    var segundostotal= dias * 24 * 60 * 60 + horas * 60 * 60 + minutos * 60 + segundos; // Total de segundos
    var res = document.getElementById("res"); // Seleciona o elemento com ID 'res'
    res.innerHTML = "Estamos juntos há " + segundostotal + " segundos."; // Atualiza o conteúdo do elemento 'res'

}
function calcularDatams() {
    var data = new Date(); // Obtém a data atual
    var tempo = data - datanamoro; // Tempo desde o namoro
    var dias = Math.floor(tempo / (1000 * 60 * 60 * 24)); // Tempo em dias
    var horas = Math.floor((tempo / (1000 * 60 * 60)) % 24); // Horas restantes
    var minutos = Math.floor((tempo / (1000 * 60)) % 60); // Minutos restantes
    var segundos = Math.floor((tempo / 1000) % 60); // Segundos restantes
    var milissegundos = Math.floor(tempo % 1000); // Milissegundos restantes
    var milissegundostotal = dias * 24 * 60 * 60 * 1000 + horas * 60 * 60 * 1000 + minutos * 60 * 1000 + segundos * 1000 + milissegundos; // Total de milissegundos
    var res = document.getElementById("res"); // Seleciona o elemento com ID 'res'
    res.innerHTML = "Estamos juntos há " + milissegundostotal + " milissegundos."; // Atualiza o conteúdo do elemento 'res'

}
function teamo() {
    var res = document.getElementById("res"); // Seleciona o elemento com ID 'res'
    var img = document.createElement('img'); // Cria um elemento de imagem
    img.setAttribute('id', 'foto'); // Define o ID da imagem
    img.setAttribute('src', 'foto te amo.jpg'); // Define a fonte da imagem (ajuste o caminho se necessário)
    img.style.maxWidth = '100%'; // Ajusta o tamanho da imagem para não ultrapassar o contêiner
    img.style.borderRadius = '15px'; // Adiciona bordas arredondadas para um visual mais bonito
    res.style.textAlign = 'center'; // Alinha o texto ao centro
    res.innerHTML = ''; // Limpa o conteúdo anterior
    res.appendChild(img); // Adiciona a imagem ao elemento 'res'
}
// Atualiza o tempo a cada 1 segundo (1000 milissegundos)
setInterval(atualizarTempo, 1000);

// Chama a função imediatamente para exibir os valores iniciais
atualizarTempo();