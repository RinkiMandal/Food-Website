let images_dt = [
    {
        title : "THE CHICKEN BURGER",
        price : "$12.90",
        MRP : "$24",
        calorie : 7845,
        fat : 98,
        protien : 112
    },

    {
        title : "THE PINK BURGER",
        price : "$18.90",
        MRP : "$38",
        calorie : 4512,
        fat : 65,
        protien : 78
    },

    {
        title : "THE BLACK BURGER",
        price : "$10.90",
        MRP : "$18",
        calorie : 6545,
        fat : 115,
        protien : 56
    },
    {
        title : "THE RED BURGER",
        price : "$11.90",
        MRP : "$20",
        calorie : 9845,
        fat : 68,
        protien : 86
    },

    {
        title : "THE GREEN BURGER",
        price : "$13.90",
        MRP : "$26",
        calorie : 1256,
        fat : 45,
        protien : 123
    },

    {
        title : "THE TORNADO BURGER",
        price : "$18.90",
        MRP : "$38",
        calorie : 5678,
        fat : 92,
        protien : 99
    },

    {
        title : "THE COMBO BURGER",
        price : "$9.90",
        MRP : "$17",
        calorie : 3245,
        fat : 49,
        protien : 78
    },
]


let index = 0;

let len = Array.from(document.getElementsByClassName("main_imgs")).length * 310;

let images_off = () => {
    Array.from(document.getElementsByClassName("main_imgs")).forEach((el) => {
        el.style.width = "35%";
        el.style.filter = "blur(1.5px)"

    })
}


let icon_off = () => {
    Array.from(document.getElementsByClassName("pagi_img")).forEach((el) => {
        el.style.transfrom = "unset";
        el.style.opacity = ".3";

    })
}


document.getElementsByClassName("bi-chevron-right")[0].addEventListener("click", () => {
    index += 310;


    if (index > (len)-310 ){
        index = (len)-310;
    }


    document.getElementsByClassName("images")[0].scrollLeft = index;
    images_off();
    console.log(index)
    document.getElementsByClassName("main_imgs")[index/310].style.width = "60%";
    document.getElementsByClassName("main_imgs")[index/310].style.filter = "blur(0px)";

    document.getElementsByClassName("title")[0].innerText = images_dt[(index/310)].title;
    document.getElementsByClassName("price")[0].innerHTML = `${images_dt[(index/310)].price}<sup><del>${images_dt[(index/310)].MRP}</del></sup>`;

    document.getElementById("calorie").innerText = images_dt[(index/310)].calorie;
    document.getElementById("fat").innerText = images_dt[(index/310)].fat;
    document.getElementById("protien").innerText = images_dt[(index/310)].protien;

    icon_off();

    document.getElementsByClassName("pagi_img")[(index/310)].style.transfrom = "scale(1.1)";
    document.getElementsByClassName("pagi_img")[(index/310)].style.opacity = "1";
})



document.getElementsByClassName("bi-chevron-left")[0].addEventListener("click", () => {
    index -= 310;

    if (index < 0){
        index = 0;
    }

    document.getElementsByClassName("images")[0].scrollLeft = index;
    images_off();
    console.log(index)
    document.getElementsByClassName("main_imgs")[index/310].style.width = "60%";
    document.getElementsByClassName("main_imgs")[index/310].style.filter = "blur(0px)";

    document.getElementsByClassName("title")[0].innerText = images_dt[(index/310)].title;
    document.getElementsByClassName("price")[0].innerHTML = `${images_dt[(index/310)].price}<sup><del>${images_dt[(index/310)].MRP}</del></sup>`;

    document.getElementById("calorie").innerText = images_dt[(index/310)].calorie;
    document.getElementById("fat").innerText = images_dt[(index/310)].fat;
    document.getElementById("protien").innerText = images_dt[(index/310)].protien;

    icon_off();

    document.getElementsByClassName("pagi_img")[(index/310)].style.transfrom = "scale(1.1)";
    document.getElementsByClassName("pagi_img")[(index/310)].style.opacity = "1";
})


Array.from(document.getElementsByClassName("pagi_img")).forEach((el , i) => {
    el.addEventListener("click", () => {


        index = 310 * i;


document.getElementsByClassName("images")[0].scrollLeft = index;
    images_off();
    console.log(index)
    document.getElementsByClassName("main_imgs")[index/310].style.width = "60%";
    document.getElementsByClassName("main_imgs")[index/310].style.filter = "blur(0px)";

    document.getElementsByClassName("title")[0].innerText = images_dt[(index/310)].title;
    document.getElementsByClassName("price")[0].innerHTML = `${images_dt[(index/310)].price}<sup><del>${images_dt[(index/310)].MRP}</del></sup>`;

    document.getElementById("calorie").innerText = images_dt[(index/310)].calorie;
    document.getElementById("fat").innerText = images_dt[(index/310)].fat;
    document.getElementById("protien").innerText = images_dt[(index/310)].protien;

    icon_off();

    document.getElementsByClassName("pagi_img")[(index/310)].style.transfrom = "scale(1.1)";
    document.getElementsByClassName("pagi_img")[(index/310)].style.opacity = "1";

    });
})
