const btnDarkMode = document.querySelector('.dark-mode-btn')

// 1. Check dark theme user setting on PC

if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches){
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}

// 2. check darkTheme in LocalStorage
if(localStorage.getItem('darkMode') === 'dark'){
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
} else{
    btnDarkMode.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
}



// 3. if system preferences change theme change too

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "light"

    if (newColorScheme === "dark") {
        btnDarkMode.classList.add('dark-mode-btn--active');
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'dark');
    }else{
        btnDarkMode.classList.remove('dark-mode-btn--active');
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'light');
    }
})

// 4. Manual DarkTheme
btnDarkMode.onclick = function(){
    btnDarkMode.classList.toggle('dark-mode-btn--active');
    const isDark = document.body.classList.toggle('dark')

    if (isDark){
        localStorage.setItem('darkMode', 'dark')
    } else{
        localStorage.setItem('darkMode', 'light')
    }
}