// Renders product cards from productsData into #products-grid-placeholder

(function () {
    function renderImage(product) {
        if (product.imageType === 'img' && product.image) {
            return `<img src="${product.image}" alt="${escapeHtml(product.name)}" class="rounded-lg w-full h-full object-cover">`;
        }
        // fallback to feather icon name stored in product.image
        const icon = product.image || 'box';
        return `<i data-feather="${icon}" class="w-32 h-32 text-blue-500"></i>`;
    }

    function escapeHtml(str = '') {
        return String(str).replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
    }

    function createCardHtml(key, product) {
        const priceText = product.priceText || (product.price ? `$${product.price}` : 'TBD');
        const comingSoonBadge = product.comingSoon ? `<span class="absolute top-3 right-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded">Coming Soon</span>` : '';
        return `
            <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-up">
                <div class="h-64 bg-gray-200 flex items-center justify-center relative product-card-image">
                    ${renderImage(product)}
                    ${comingSoonBadge}
                </div>
                <div class="p-6 flex flex-col" style="min-height:220px">
                    <h3 class="product-card-title text-2xl font-bold text-gray-900 mb-3">${escapeHtml(product.name)}</h3>
                    <p class="product-card-description text-gray-600 mb-4">${escapeHtml(product.shortDescription || product.description || '')}</p>

                    <div class="actions mt-auto">
                        <div class="flex items-center justify-between mb-3">
                            <span class="product-card-price text-blue-600 font-semibold text-lg">${escapeHtml(priceText)}</span>
                        </div>
                        <button onclick="openProductModal('${key}')" class="btn-full w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-700 text-white font-semibold rounded-full">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // groups products by category (non-active)
    function groupByCategory(data) {
        const map = {};
        Object.entries(data).forEach(([key, p]) => {
            const cat = (p.category || '').trim();
            if (!map[cat]) map[cat] = [];
            map[cat].push({ key, product: p });
        });
        return map;
    }

    function renderProducts() {
        if (typeof productsData === 'undefined') {
            console.error('productsData not found; make sure product-data.js is loaded before product-cards.js');
            return;
        }
        const placeholder = document.getElementById('products-grid-placeholder');
        if (!placeholder) return;

        const categories = groupByCategory(productsData);
        const htmlParts = [];

        Object.keys(categories).forEach((cat) => {
            const items = categories[cat];
            htmlParts.push(`<div id="${cat.toLowerCase().replace(/\s+/g,'-')}" class="space-y-6">`);
            htmlParts.push(`<h2 class="section-title text-white">${escapeHtml(cat)}</h2>`);
            htmlParts.push(`<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">`);
            items.forEach(({ key, product }) => {
                htmlParts.push(createCardHtml(key, product));
            });
            htmlParts.push(`</div></div>`);
        });

        placeholder.innerHTML = htmlParts.join('');
        // render feather icons and AOS
        if (window.feather && typeof feather.replace === 'function') feather.replace();
        if (window.AOS && typeof AOS.refresh === 'function') AOS.refresh();
    }

    // render on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderProducts);
    } else {
        renderProducts();
    }
})();