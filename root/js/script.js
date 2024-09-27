// typing animation

var typed = new Typed(".typing",{
    strings : ["","Backend Web Developer","Data Analyst","Pythonist"],
    typeSpeed : 100,
    BackSpeed : 60,
    loop : true
});


// Aside 

const nav = document.querySelector('.nav'),
navlist = nav.querySelectorAll('li'),
allSection = document.querySelectorAll('.section'),
totalSection = allSection.length,
totalNavList = navlist.length

for (let i = 0; i < totalNavList;i++){
    const a = navlist[i].querySelector('a');
    a.addEventListener('click',function(){
        removeBackSection();
        for (let j = 0; j < totalNavList;j++){
            if (navlist[j].querySelector('a').classList.contains('active')){
                addBackSection(j);
            }
            navlist[j].querySelector('a').classList.remove('active');
        }
        this.classList.add('active');
        showSection(this);
        if (window.innerWidth < 1200){
            asideSectionTogglerBtn()
        }
    });

    
}

function removeBackSection(){
    for (let i = 0; i < totalSection;i++){
        allSection[i].classList.remove('back-section');
    }
}

function addBackSection(idx){
    allSection[idx].classList.add("back-section");
}
function showSection(element){
    for (let j = 0; j < totalSection; j++){
        allSection[j].classList.remove('active');
    }
    const href = element.getAttribute('href').split('#');
    target = href[1];
    document.querySelector('#'+target).classList.add('active');

}

function updateNav(element){
    const target = element.getAttribute('href').split('#')[1];
    for (let j = 0; j < totalNavList; j++){
        const anchor= navlist[j].querySelector("a")
        anchor.classList.remove("active");
        if (target === anchor.getAttribute('href').split('#')[1]){
            anchor.classList.add('active');
        }
    }
    
}
document.querySelector(".hire-me").addEventListener('click', function(){
    const data_section = this.getAttribute('data-section-index');
    showSection(this);
    updateNav(this)
    removeBackSection();
    addBackSection(data_section);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click",() => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');

    for (let i = 0; i < totalSection; i++){
        allSection[i].classList.toggle('open');
    }
}
