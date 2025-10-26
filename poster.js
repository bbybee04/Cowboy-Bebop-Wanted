// poster.js
// Handles poster generation and download

document.addEventListener('DOMContentLoaded', function() {
    // Selfie input and preview elements (declare once)
    const selfieInput = document.getElementById('selfie');
    const previewImage = document.getElementById('preview-image');
    // Selfie preview logic (enhanced, reuse existing elements)
    // reuse the previously declared `selfieInput` and `previewImage`
    selfieInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!file) {
            previewImage.style.display = 'none';
            return;
        }
        if (!file.type.startsWith('image/')) {
            alert('Please select a valid image file (PNG, JPG, etc).');
            previewImage.style.display = 'none';
            return;
        }
        const reader = new FileReader();
        reader.onload = function(ev) {
            previewImage.src = ev.target.result;
            previewImage.style.display = 'block';
        };
        reader.onerror = function() {
            alert('Error loading image file. Please try a different photo.');
            previewImage.style.display = 'none';
        };
        reader.readAsDataURL(file);
    });
    const form = document.getElementById('bountyForm');
    const posterDiv = document.querySelector('.poster');
    const downloadBtn = document.createElement('button');
    downloadBtn.textContent = 'Download Poster as PNG';
    downloadBtn.style.display = 'none';
    posterDiv.parentNode.insertBefore(downloadBtn, posterDiv.nextSibling);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Require selfie preview before generating poster
        if (!previewImage.src || previewImage.src === '#' || previewImage.style.display === 'none') {
            alert('Please upload a valid photo before generating your bounty poster.');
            return;
        }
        // Show poster
        posterDiv.style.display = 'block';
        downloadBtn.style.display = 'inline-block';
        // Generate and download poster
        generatePosterImage();
    });

    downloadBtn.addEventListener('click', function() {
        generatePosterImage();
    });

    function generatePosterImage() {
        // Canvas size should match your template image
        const canvas = document.createElement('canvas');
        canvas.width = 960; // adjust to your template size
        canvas.height = 720; // adjust to your template size
        const ctx = canvas.getContext('2d');

        // Load template image
        const template = new Image();
        template.src = 'wanted poster.png';
        template.onload = function() {
            ctx.drawImage(template, 0, 0, canvas.width, canvas.height);
            // Draw selfie from preview image
            const selfieImg = document.getElementById('preview-image');
            if (selfieImg.src && selfieImg.src !== '#' && selfieImg.src.startsWith('data:')) {
                const img = new Image();
                img.onload = function() {
                    ctx.save();
                    ctx.beginPath();
                    // .photo {top: 12.917%; left: 16.458%; width: 36.563%; height:54.306%;}
                    const px = percentX(16.458);
                    const py = percentY(12.917);
                    const pw = percentX(36.563);
                    const ph = percentY(54.306);
                    ctx.rect(px, py, pw, ph);
                    ctx.clip();
                    ctx.drawImage(img, px, py, pw, ph);
                    ctx.restore();
                    drawTextAndDownload();
                };
                    img.src = selfieImg.src;
            } else {
                alert('Selfie image not loaded. Please upload a valid photo and generate the poster first.');
            }
            function drawTextAndDownload() {
                // Example for #field-name {top: 9.028%; left: 61.354%; width: 24.792%;}
                // Draw user's input name at specified location
                ctx.save();
                // Use Noto Sans ExtraCondensed Black, move down
                ctx.font = 'bold 24px "Orbitron", Arial, sans-serif';
                ctx.textAlign = 'left';
                ctx.textBaseline = 'top';
                const name = document.getElementById('name').value;
                // Move down by 10px from previous position
                const nameX = 575;
                const nameY = 60;
                ctx.fillStyle = '#000';
                ctx.fillRect(nameX, nameY, 200, 32);
                ctx.fillStyle = '#fff';
                ctx.fillText(name, nameX + 10, nameY + 4, 180);
                ctx.restore();
                // Download
                const link = document.createElement('a');
                link.download = 'bebop-wanted-poster.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            }
        };

        // Helper to convert percent to pixels
        function percentX(p) { return Math.round(canvas.width * p / 100); }
        function percentY(p) { return Math.round(canvas.height * p / 100); }

        template.onerror = function() {
            alert('Template image failed to load. Please make sure "wanted poster.png" is in the project folder and the filename is correct.');
        };
    }
});
