const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')
const underLine = (tab) =>  {
    line.style.left = tab.offsetLeft + 'px'
    line.style.width = tab.offsetWidth + 'px'
}

const tabActive = $('.tab-item.active')
const line = $('.tabs .line')

underLine(tabActive)

tabs.forEach((tab, index) => {
    const pane = panes[index]

    tab.onclick = function() {
        // Kiểm tra xem tab nào có class active -> xóa class
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')

        underLine(this)

        this.classList.add('active')
        pane.classList.add('active')
    }
})