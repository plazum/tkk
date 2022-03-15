"use strict";
// 在此处添加角色信息
const image = [
    {
        filename: "kotori.jpg",
        name: {
            zh: "南小鸟",
            ja: "南ことり",
            en: "Minami Kotori"
        }
    },
    {
        filename: "you.jpg",
        name: {
            zh: "渡边曜",
            ja: "渡辺曜",
            en: "Watanabe You"
        }
    },
    {
        filename: "fu.png",
        name: {
            zh: "福",
            ja: "福",
            en: "Fu (福)"
        }
    },
];
document.getElementById("filter").innerHTML = image.map(
    (val, idx) => '<input id="' + idx + '" type="checkbox"' + (val.filename !== "fu.png" ? ' checked' : '')
        + ' onchange="generate_map(last_rows, last_cols)">'
        + '<label id="label_' + idx + '" for="' + idx + '"></label>'
).join(" ");
if (debug)
    document.getElementById("debug_link").outerHTML = document.getElementById("banner").outerHTML;

if (!["zh", "ja", "en"].includes(language))
    language = "en";
document.getElementById(language).checked = true;
set_language(language);

if (!dialog_supported) {
    document.head.insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="dialog.css">');
    document.getElementById("bainian").style.zIndex = "10001";
    document.write('<div class="backdrop" style="z-index: 10000;"></div>');
}

generate_map(14, 10);
