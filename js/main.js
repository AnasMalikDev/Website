const downloadBtn = document.getElementById('downloadButton');
const modal = document.getElementById('downloadModal');
const closeBtn = document.getElementById('closeDownload');
const overlay = modal?.querySelector('.download-overlay');

function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

downloadBtn?.addEventListener('click', openModal);
closeBtn?.addEventListener('click', closeModal);
overlay?.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
        closeModal();
    }
});