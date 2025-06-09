const layar = document.querySelector(".bilangan");
const tombol = document.querySelectorAll("button");

let ekspresi = "";

tombol.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const nilai = btn.value;

        if (nilai === 'reset') {
            ekspresi = "";
            layar.value = ""; 
        } else if (nilai === 'del') {
            ekspresi = ekspresi.slice(0, -1);
            layar.value = ekspresi;
        } else if (nilai === '=') {
            try {
                let hasil = eval(ekspresi.replace(/x/g, '*'));
                layar.value = hasil;
                ekspresi = hasil.toString();
            } catch (err) {
                layar.value = "Error";
                ekspresi = "";
            }
        } else {
            ekspresi += nilai;
            layar.value = ekspresi;

        }
    });
});