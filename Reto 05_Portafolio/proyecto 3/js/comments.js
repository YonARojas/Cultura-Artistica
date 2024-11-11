document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const comment = document.getElementById("comment").value.trim();
    let errorMessage = "";

    if (name === "") {
        errorMessage += "Por favor, ingresa tu nombre.\n";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        errorMessage += "El nombre solo debe contener letras y espacios.\n";
    } else if (name.length < 2) {
        errorMessage += "El nombre debe tener al menos 2 caracteres.\n";
    }

    if (comment === "") {
        errorMessage += "Por favor, ingresa un comentario.\n";
    } else if (comment.length < 5) {
        errorMessage += "El comentario debe tener al menos 5 caracteres.\n";
    } else if (comment.length > 300) {
        errorMessage += "El comentario no puede exceder los 300 caracteres.\n";
    }

    if (errorMessage) {
        alert(errorMessage);
        return;
    }

    const li = document.createElement("li");
    li.className = "comment-item";
    
    const profilePic = "../img/perfil.png";
    li.innerHTML = `
        <div class="comment-profile">
            <img src="${profilePic}" alt="Imagen de perfil de ${name}" class="profile-pic">
            <div class="comment-details">
                <strong>${name}</strong>
                <p>${comment}</p>
            </div>
        </div>
    `;

    document.getElementById("commentsList").appendChild(li);
    
    document.getElementById("commentForm").reset();
});
