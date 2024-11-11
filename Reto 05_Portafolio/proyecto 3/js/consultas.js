document.getElementById('commentForm').addEventListener('submit', function(event) { 
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const comment = document.getElementById('comment').value.trim();
    const commentsList = document.getElementById('commentsList');

    // Validaciones

    // 1. Validación del nombre: solo letras y espacios
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
        alert("El nombre solo puede contener letras y espacios.");
        return;
    }

    // 2. Validación de longitud: nombre debe tener entre 2 y 30 caracteres
    if (name.length < 2 || name.length > 30) {
        alert("El nombre debe tener entre 2 y 30 caracteres.");
        return;
    }

    // 3. Validación del comentario: no vacío y longitud
    if (comment === "") {
        alert("Por favor, escribe un comentario.");
        return;
    }

    if (comment.length < 5 || comment.length > 200) {
        alert("El comentario debe tener entre 5 y 200 caracteres.");
        return;
    }

    // 4. Crear un nuevo elemento de comentario
    const li = document.createElement('li');
    li.textContent = `${name}: ${comment}`;
    commentsList.appendChild(li);

    // Limpiar el formulario
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
});
