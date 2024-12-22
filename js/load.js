window.addEventListener('load',func);

function func() {
    setTimeout(() => {
        const loading = document.getElementById('my-spinner');
        loading.classList.add('loaded');
    }, 1.5 * 1000);
}