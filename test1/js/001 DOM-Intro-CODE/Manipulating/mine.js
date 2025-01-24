const allImages = document.getElementsByTagName('img');
for (let img of allImages) {
    img.src = "https://superstarsbio.com/wp-content/uploads/2019/01/Sergio-Aguero-3.jpg";
    console.log(img.src);
    console.log(document.querySelector('#banner'));
    console.log(document.querySelector('.square'));
    console.log(document.querySelector('a[title="Java"]'));
}