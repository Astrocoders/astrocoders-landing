import { compose, withStateHandlers, lifecycle } from 'recompose'

const element = window.document.scrollingElement || window.document.documentElement

export default compose(
  withStateHandlers(
    { isShowed: false },
    {
      showNavbar: () => ({ target: { documentElement } }) => ({
        isShowed: element.scrollTop > documentElement.offsetHeight / 8,
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
