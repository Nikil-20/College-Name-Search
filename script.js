const lang = [
    "Alpha Academy",
    "Beta University",
    "Crestview College",
    "Delta Institute of Technology",
    "Epsilon Engineering School",
    "Fountainhead College",
    "Gamma Global University",
    "Harmony College",
    "Ivy League Institute",
    "Jubilee University",
    "Kappa College",
    "Lambda University",
    "Meridian College",
    "Nexus University",
    "Omega Institute",
    "Pinnacle College",
    "Quantum University",
    "Radiant Institute",
    "Summit University",
    "Trinity College",
    "Unity University",
    "Vertex College",
    "Wavelength University",
    "Xenon Institute",
    "Yale College",
    "Zenith University"
];

function search() {
    const user = document.querySelector("#usersearch").value;
    const maindata = user.toLowerCase();
    const searchdata = lang.filter((val) => {
        const newdata = val.toLowerCase();
        return newdata.includes(maindata);

    });
    document.querySelector("#main").innerHTML = "";
    searchdata.map((item) => {
        document.querySelector("#main").innerHTML += `
    <li class="p-2 bg-blue-100 rounded-lg text-blue-700 hover:bg-blue-200 transition-colors flex justify-between items-center">
        ${item} 
        <button onclick="changes(this)" class="text-gray-600 hover:text-green-600 transition-colors">
            <i class="fa-regular fa-square-check fa-2x"></i>
        </button>
    </li>`;
    });
}

function changes(button) {
    const list = button.parentElement;
    list.classList.remove("bg-blue-800", "hover:bg-blue-200");
    list.classList.add("bg-green-400", "text-black");
}
