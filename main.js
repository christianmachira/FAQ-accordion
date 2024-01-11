const accordionBtns = document.querySelectorAll('.accordion-btn')

accordionBtns.forEach(btn => {  //creating a for each function for revealing the FAQ information when the button is clicked
    btn.addEventListener('click', function ()  {    //adding an event listener function to the plus button
        this.classList.toggle('active')
        const accordionDescription = this.nextElementSibling
        const plusIcon = this.querySelector('.icon-plus')
        const minusIcon = this.querySelector('.icon-minus')
        if (accordionDescription.style.maxHeight) {
            accordionDescription.style.maxHeight = null
            plusIcon.style.display = 'block'
            minusIcon.style.display = 'none'
        } else {
            accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 'px'
            plusIcon.style.display = 'none'
            minusIcon.style.display = 'block'
        }
    })
})