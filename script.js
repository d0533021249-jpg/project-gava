function upDate(previewPic) {
    
    let preview = document.getElementById("previewPic");
    preview.src = previewPic.src;
    preview.alt = previewPic.alt;

    preview.style.backgroundColor = "#eee";
}

function unDo() {
    let preview = document.getElementById("previewPic");

    preview.src = "https://picsum.photos/id/10/400/300";
    preview.alt = "Preview Image";

    preview.style.backgroundColor = "#fff";
}