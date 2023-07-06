<p>Dentro da pasta src/ crie uma pasta com nome de ".env" e dentro dela adicione o arquivo dev.env com o conteudo do example.env <p>

<h2>Execute o seguinte comando para buildar a imagem do kafka e subir o container</h2>
<p>docker-compose -f docker-compose.kafka.yml up -d</p>

<h2>Execute o seguinte comando para buildar a imagem do projeto e subir o container</h2>
<p>docker-compose -f docker-compose.yml up</p>
<!-- <h2>Execute o seguinte comando para definir o ip da máquina</h2>
<p>export HOST_IP=$(ifconfig | grep -E "([0-9]{1,3}\.){3}[0-9]{1,3}" | grep -v 127.0.0.1 | awk '{ print $2 }' | cut -f2 -d: | head -n1)<p> -->
<p><p>
<p><p>