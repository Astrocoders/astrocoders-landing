import { compose, withStateHandlers, lifecycle } from 'recompose'

const el = document.scrollingElement || document.documentElement

export default compose(
  withStateHandlers(
    { isShowed: false },
    {
      showNavbar: () => ({ target: { documentElement } }) => ({
        isShowed: el.scrollTop > documentElement.offsetHeight / 8,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      window.addEventListener('scroll', this.props.showNavbar, true)
    },
    componentWillUnmount() {
      window.removeEventListener('scroll', this.props.showNavbar)
    },
  }),
)
