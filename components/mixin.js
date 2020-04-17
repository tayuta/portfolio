export default {
  methods: {
    handleScroll: (evt, el) => {
      const top = el.getBoundingClientRect().top
      const doch = document.documentElement.scrollHeight
      const winh = window.innerHeight
      if (window.scrollY > top + window.pageYOffset - 600) {
        el.classList.add('isView')
        return true
      } else if (window.scrollY >= doch - winh - 10) {
        el.classList.add('isView')
        return true
      }
      return false
    }
  }
}
