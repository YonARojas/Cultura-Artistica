function cambiarContenido(region) {
    const contenido = document.getElementById('content');

    if (region === 'canete') {
        contenido.innerHTML = `
            <h2>Retos y Desafíos en Cañete</h2>
            <p><strong>Desafíos principales:</strong></p>
            <ul>
                <li>Escasez de recursos hídricos: La región enfrenta dificultades para acceder a agua de calidad debido a la disminución de fuentes hídricas naturales, lo que afecta la producción agrícola.</li>
                <li>Falta de acceso a tecnología agrícola: Muchos pequeños agricultores no cuentan con acceso a tecnologías avanzadas que podrían mejorar la productividad y sostenibilidad de sus cultivos.</li>
                <li>Desperdicio de alimentos: La falta de infraestructura para almacenamiento y distribución lleva a un elevado desperdicio de productos agrícolas en la región.</li>
            </ul>
            <p><strong>Acciones necesarias:</strong></p>
            <ul>
                <li>Implementación de sistemas de riego eficientes.</li>
                <li>Capacitación en tecnologías sostenibles para agricultores locales.</li>
                <li>Mejora en la infraestructura de almacenamiento.</li>
            </ul>
        `;
    } else if (region === 'peru') {
        contenido.innerHTML = `
            <h2>Retos y Desafíos en Perú</h2>
            <p><strong>Desafíos principales:</strong></p>
            <ul>
                <li>Brechas tecnológicas: Existe una gran disparidad tecnológica entre los pequeños agricultores y las grandes empresas agroindustriales, limitando la eficiencia y sostenibilidad de los cultivos.</li>
                <li>Pérdida de biodiversidad y suelos: El uso intensivo de agroquímicos y la deforestación provocan la pérdida de biodiversidad y degradación del suelo.</li>
                <li>Impacto del cambio climático: Perú es vulnerable a eventos climáticos extremos, como sequías e inundaciones, que afectan la producción de alimentos.</li>
            </ul>
            <p><strong>Acciones necesarias:</strong></p>
            <ul>
                <li>Promoción de políticas de agricultura ecológica y prácticas sostenibles.</li>
                <li>Programas de reforestación y conservación de suelos.</li>
                <li>Fomento de inversiones en tecnología agrícola.</li>
            </ul>
        `;
    } else if (region === 'internacional') {
        contenido.innerHTML = `
            <h2>Retos y Desafíos a Nivel Global</h2>
            <p><strong>Desafíos principales:</strong></p>
            <ul>
                <li>Cambio climático: El calentamiento global afecta los patrones de cultivo en todo el mundo, reduciendo la productividad y la seguridad alimentaria.</li>
                <li>Aumento poblacional: Se espera que la población mundial alcance los 9.700 millones en 2050, lo que incrementará la demanda de alimentos.</li>
                <li>Pérdida de biodiversidad: La disminución de la diversidad genética en cultivos y la reducción de especies afectan gravemente la resiliencia de los ecosistemas agrícolas.</li>
            </ul>
            <p><strong>Acciones necesarias:</strong></p>
            <ul>
                <li>Inversión en investigación y desarrollo de prácticas agrícolas adaptadas al cambio climático.</li>
                <li>Fomento de dietas sostenibles para reducir la presión sobre los sistemas de producción.</li>
                <li>Protección de la biodiversidad agrícola a nivel global.</li>
            </ul>
        `;
    }
}
