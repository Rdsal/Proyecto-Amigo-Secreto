// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



let amigos = [];

  function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (!nombre) {
        alert('Por favor, ingresa un nombre.');
    
      return;
    }

    // Verifica si el nombre ya está en la lista (sin distinguir mayúsculas/minúsculas)
    let existe = amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase());

    if (existe) {
        alert('Este amigo ya está en la lista.');
    
    } else {
      amigos.push(nombre);
      actualizarListaVisual();
    }

    input.value = '';
  }
  function actualizarListaVisual() {
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = ''; // Limpia la lista antes de actualizar

    amigos.forEach(amigo => {
      let li = document.createElement('li');
      li.textContent = amigo;
      ul.appendChild(li);
    });
  }
  
function sortearAmigo() {
    let resultadoUl = document.getElementById('resultado');
  resultadoUl.innerHTML = '';

    if (amigos.length < 2) {
      alert(" Necesitas al menos 2 amigos para hacer el sorteo.");
      return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let elegido = amigos[indice];

    let li = document.createElement('li');
    li.textContent = `El amigo secreto sorteado es: ${elegido}`;
    resultadoUl.appendChild(li);
    
  }
