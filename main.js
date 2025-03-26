// مدیریت ناوبری
document.querySelectorAll('.gold-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // بارگذاری صفحه بدون رفرش
        fetch(e.target.href)
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
                window.history.pushState({}, '', e.target.href);
            });
    });
});

// سیستم کلیک تبلیغات
document.querySelectorAll('.ad-item').forEach(ad => {
    ad.addEventListener('click', () => {
        const value = ad.dataset.value;
        alert(`+${value} تتر به حساب شما اضافه شد!`);
    });
});