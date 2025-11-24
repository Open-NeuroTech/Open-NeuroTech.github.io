// Handles dynamic modal generation and display

function renderProductImage(product, addClasses = '') {
    if (product.imageType === 'img') {
        return `<img src="${product.image}" alt="${product.name}" class="rounded-lg w-full ${addClasses}">`;
    } else {
        return `<i data-feather="${product.image}" class="w-32 h-32 text-blue-500 ${addClasses}"></i>`;
    }
}

function openProductModal(productKey) {
    const product = productsData[productKey];
    if (!product) {
        console.error('Product not found:', productKey);
        return;
    }
    
    // Create modal HTML
    let modalHTML = `
        <div id="dynamicModal" class="modal">
            <div class="modal-content">
                <div class="flex justify-between items-start mb-6">
                    <h2 class="modal-title">${product.name}</h2>
                </div>
                <div class="product-card-image rounded-lg mb-6">
                    ${renderProductImage(product)}
                </div>
                <h3 class="modal-section-title">${product.features ? 'Product Details' : (productKey === 'consulting' ? 'Service Overview' : 'Product Details')}</h3>
                <p class="text-body">
                    ${product.fullDescription}
                </p>
    `;
    
    // Add features if they exist
    if (product.features) {
        modalHTML += `
                <h4 class="modal-subsection-title">${productKey === 'consulting' ? 'Consulting Areas:' : 'Key Features:'}</h4>
                <ul class="list-styled-spaced">
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
        `;
    }
    
    // Add subsections if they exist (for consulting)
    if (product.subsections) {
        product.subsections.forEach(subsection => {
            modalHTML += `
                <h4 class="modal-subsection-title">${subsection.title}</h4>
                <ul class="list-styled-spaced">
                    ${subsection.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
        });
    }
    
    // Add additional info
    if (product.additionalInfo) {
        if (Array.isArray(product.additionalInfo)) {
            product.additionalInfo.forEach(info => {
                modalHTML += `<p class="text-body">${info}</p>`;
            });
        } else {
            modalHTML += `<p class="text-body mb-6">${product.additionalInfo}</p>`;
        }
    }
    
    // Add warning if exists
    if (product.warning) {
        modalHTML += `<p class="text-body">${product.warning}</p>`;
    }
    
    // Add action buttons
    modalHTML += `
                <div class="flex gap-4">
                    <a href="/index.html#contact" class="flex-1 btn-full text-center">
                        Request Quote
                    </a>
                    <button onclick="closeDynamicModal()" class="flex-1 btn-outline">
                        Close
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing dynamic modal if present
    const existingModal = document.getElementById('dynamicModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Disable page scroll
    document.body.classList.add('modal-open');

    // Reinitialize feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

function closeDynamicModal() {
    const modal = document.getElementById('dynamicModal');
    if (modal) {
        modal.remove();
    }
    document.body.classList.remove('modal-open'); // re-enable background scroll
}

// Close modal when clicking outside of it
document.addEventListener('click', function(event) {
    const modal = document.getElementById('dynamicModal');
    if (modal && event.target === modal) {
        closeDynamicModal();
    }
});
