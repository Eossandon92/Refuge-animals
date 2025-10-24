// Cargar perros existentes desde localStorage o usar los por defecto
let dogs = JSON.parse(localStorage.getItem('refugioDogs')) || [
    {
        name: "Max",
        age: "3 años",
        size: "Grande",
        breed: "Pastor Alemán",
        description: "Max es un perro muy cariñoso y protector. Le encanta jugar y es excelente con los niños.",
        image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Luna",
        age: "2 años",
        size: "Mediano",
        breed: "Mestizo",
        description: "Luna es una perra muy juguetona y energética. Perfecta para familias activas.",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Rocky",
        age: "5 años",
        size: "Grande",
        breed: "Labrador",
        description: "Rocky es un perro muy tranquilo y obediente. Ideal para personas mayores o familias relajadas.",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Bella",
        age: "1 año",
        size: "Pequeño",
        breed: "Chihuahua Mix",
        description: "Bella es una perrita muy dulce y cariñosa. Le gusta estar cerca de sus humanos.",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Charlie",
        age: "4 años",
        size: "Mediano",
        breed: "Beagle",
        description: "Charlie es muy inteligente y le encanta explorar. Perfecto para aventuras al aire libre.",
        image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Daisy",
        age: "6 años",
        size: "Grande",
        breed: "Golden Retriever",
        description: "Daisy es una perra muy gentil y paciente. Excelente con niños y otros animales.",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
];

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    displayCurrentDogs();
    generateCode();
    
    // Manejar envío del formulario
    document.getElementById('dogForm').addEventListener('submit', handleFormSubmit);
    
    // Manejar subida de imágenes
    document.getElementById('dogImageFile').addEventListener('change', handleImageUpload);
    
    // Preview de imagen cuando se escribe la ruta
    document.getElementById('dogImage').addEventListener('input', previewImage);
});

// Manejar envío del formulario
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('dogName').value.trim(),
        age: document.getElementById('dogAge').value.trim(),
        size: document.getElementById('dogSize').value,
        breed: document.getElementById('dogBreed').value.trim(),
        description: document.getElementById('dogDescription').value.trim(),
        image: document.getElementById('dogImage').value.trim()
    };
    
    // Validar que todos los campos estén llenos
    if (!formData.name || !formData.age || !formData.size || !formData.breed || !formData.description || !formData.image) {
        showMessage('Por favor, completa todos los campos.', 'error');
        return;
    }
    
    // Validar ruta de imagen (puede ser URL o ruta local)
    if (!isValidImagePath(formData.image)) {
        showMessage('Por favor, ingresa una ruta válida para la imagen.', 'error');
        return;
    }
    
    // Agregar el nuevo perro
    dogs.push(formData);
    
    // Guardar en localStorage
    localStorage.setItem('refugioDogs', JSON.stringify(dogs));
    
    // Actualizar la vista
    displayCurrentDogs();
    generateCode();
    
    // Limpiar formulario
    document.getElementById('dogForm').reset();
    
    // Mostrar mensaje de éxito
    showMessage(`¡${formData.name} ha sido agregado exitosamente!`, 'success');
}

// Mostrar perros actuales
function displayCurrentDogs() {
    const container = document.getElementById('currentDogs');
    
    if (dogs.length === 0) {
        container.innerHTML = '<p>No hay mascotas registradas aún.</p>';
        return;
    }
    
    container.innerHTML = dogs.map((dog, index) => `
        <div class="dog-item">
            <img src="${dog.image}" alt="${dog.name}" onerror="this.src='https://via.placeholder.com/80x80?text=Imagen+no+disponible'">
            <div class="dog-item-info">
                <h3>${dog.name}</h3>
                <div class="dog-item-details">
                    ${dog.age} • ${dog.size} • ${dog.breed}
                </div>
                <div class="dog-item-description">
                    ${dog.description}
                </div>
            </div>
            <button class="btn btn-danger" onclick="removeDog(${index})">
                <i class="fas fa-trash"></i> Eliminar
            </button>
        </div>
    `).join('');
}

// Eliminar perro
function removeDog(index) {
    const dogName = dogs[index].name;
    
    if (confirm(`¿Estás seguro de que quieres eliminar a ${dogName}?`)) {
        dogs.splice(index, 1);
        localStorage.setItem('refugioDogs', JSON.stringify(dogs));
        displayCurrentDogs();
        generateCode();
        showMessage(`${dogName} ha sido eliminado.`, 'success');
    }
}

// Generar código JavaScript
function generateCode() {
    const codeContainer = document.getElementById('generatedCode');
    
    const code = `// Datos de perros para mostrar
const dogs = ${JSON.stringify(dogs, null, 4)};`;
    
    codeContainer.textContent = code;
}

// Copiar código al portapapeles
function copyCode() {
    const code = document.getElementById('generatedCode').textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
        btn.style.background = '#28a745';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '#e74c3c';
        }, 2000);
    }).catch(() => {
        // Fallback para navegadores que no soportan clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        showMessage('Código copiado al portapapeles', 'success');
    });
}

// Mostrar mensajes
function showMessage(message, type) {
    // Remover mensajes existentes
    const existingMessages = document.querySelectorAll('.success-message, .error-message');
    existingMessages.forEach(msg => msg.remove());
    
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
    messageDiv.textContent = message;
    
    const form = document.getElementById('dogForm');
    form.parentNode.insertBefore(messageDiv, form);
    
    // Remover mensaje después de 5 segundos
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Validar ruta de imagen (URL o ruta local)
function isValidImagePath(string) {
    if (!string || string.trim() === '') {
        return false;
    }
    
    // Aceptar URLs completas
    try {
        new URL(string);
        return true;
    } catch (_) {
        // Si no es URL, validar como ruta local
        const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
        const hasValidExtension = validExtensions.some(ext => 
            string.toLowerCase().endsWith(ext)
        );
        
        // Debe tener extensión válida y no contener caracteres peligrosos
        return hasValidExtension && !/[<>:"|?*]/.test(string);
    }
}

// Función para exportar datos (opcional)
function exportData() {
    const dataStr = JSON.stringify(dogs, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'refugio-mascotas.json';
    link.click();
}

// Función para importar datos (opcional)
function importData(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const importedDogs = JSON.parse(e.target.result);
                dogs = importedDogs;
                localStorage.setItem('refugioDogs', JSON.stringify(dogs));
                displayCurrentDogs();
                generateCode();
                showMessage('Datos importados exitosamente', 'success');
            } catch (error) {
                showMessage('Error al importar los datos. Verifica que el archivo sea válido.', 'error');
            }
        };
        reader.readAsText(file);
    }
}

// Manejar subida de imágenes
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        // Validar que sea una imagen
        if (!file.type.startsWith('image/')) {
            showMessage('Por favor selecciona un archivo de imagen válido.', 'error');
            return;
        }
        
        // Generar nombre de archivo seguro
        const fileName = generateSafeFileName(file.name);
        const imagePath = `images/dogs/${fileName}`;
        
        // Actualizar el campo de texto
        document.getElementById('dogImage').value = imagePath;
        
        // Mostrar preview
        const reader = new FileReader();
        reader.onload = function(e) {
            showImagePreview(e.target.result);
        };
        reader.readAsDataURL(file);
        
        // Mostrar instrucciones detalladas para guardar la imagen
        showMessage(`✅ Imagen seleccionada: ${fileName}\n\n📁 AHORA DEBES HACER ESTO MANUALMENTE:\n\n1. 📂 Ve a la carpeta "images/dogs/" en tu proyecto\n2. 📋 Copia/guarda tu imagen original ahí\n3. ✏️ Renómbrala exactamente como: "${fileName}"\n4. 🔄 Regresa aquí y completa el formulario\n\n⚠️ Los navegadores no pueden guardar archivos automáticamente por seguridad`, 'success');
    }
}

// Generar nombre de archivo seguro
function generateSafeFileName(originalName) {
    // Obtener extensión
    const extension = originalName.split('.').pop().toLowerCase();
    
    // Generar nombre base seguro
    const baseName = originalName
        .split('.')[0]
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    
    return `${baseName}.${extension}`;
}

// Mostrar preview de imagen
function previewImage() {
    const imagePath = document.getElementById('dogImage').value;
    if (imagePath) {
        showImagePreview(imagePath);
    } else {
        document.getElementById('imagePreview').innerHTML = '';
    }
}

// Mostrar imagen en el preview
function showImagePreview(src) {
    const previewContainer = document.getElementById('imagePreview');
    previewContainer.innerHTML = `
        <img src="${src}" alt="Preview" onerror="this.style.display='none'; this.nextSibling.style.display='block';">
        <p style="display: none; color: #e74c3c; font-size: 0.9rem;">
            <i class="fas fa-exclamation-triangle"></i> 
            Imagen no encontrada. Asegúrate de que el archivo esté en la ruta correcta.
        </p>
    `;
}