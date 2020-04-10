export default {
  methods: {
    handleScroll: (evt, el) => {
      const top = el.getBoundingClientRect().top
      if (window.scrollY > top + window.pageYOffset - 700) {
        el.classList.add('isView')
        return true
      }
      return false
    }
  }
}
