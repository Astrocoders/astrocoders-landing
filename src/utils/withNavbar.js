import { compose, withStateHandlers, lifecycle } from 'recompose'

export default compose(
  withStateHandlers(
    { isShowed: false },
    {
      showNavbar: () => ({ target: { documentElement } }) => ({
        isShowed: documentElement.scrollTop > documentElement.offsetHeight / 8,
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
