import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IoIosCloseCircle as CloseIcon } from 'react-icons/io'

const GalleryItem = styled.div`
  position: relative;
`

const Button = styled.button`
  align-items: center;
  background: none;
  border: none;
  color: #fff;
  display: flex;
  font-size: 1.5em;
  font-weight: 300;
  justify-content: space-between;
  top: 50px;
  outline: none;
  position: absolute;
  right: 50px;
  width: 120px;
`

const LightboxModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  z-index: 2;
`
const LightboxContent = styled.div`
  margin: 15px;
  max-width: 80vw;
  width: 100%;
`

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`

const LeftRight = styled.div`
  button:first-child {
    margin-right: 10px;
  }
`

class Lightbox extends Component {
  state = {
    showLightbox: false,
    selectedImage: 0,
  }

  componentDidMount = () => {
    window.addEventListener('keyup', this.handleKeyUp, false)
  }

  componentWillUnmount = () => {
    window.removeEventListener('keyup', this.handleKeyUp, false)
  }

  handleClick = e => {
    e.preventDefault()
    this.setState({ showLightbox: !this.state.showLightbox })
    document.getElementsByTagName('body')[0].classList.add('fullscreen')
    document.getElementsByTagName('html')[0].classList.add('fullscreen')
  }

  closeModal = () => {
    this.setState({ showLightbox: false })
    document.getElementsByTagName('html')[0].classList.remove('fullscreen')
    document.getElementsByTagName('body')[0].classList.remove('fullscreen')
  }

  goBack = () => {
    this.setState({ selectedImage: this.state.selectedImage - 1 })
  }

  goForward = () => {
    this.setState({ selectedImage: this.state.selectedImage + 1 })
  }

  handleKeyUp = e => {
    e.preventDefault()
    const { keyCode } = e
    if (this.state.showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (this.state.selectedImage > 0) {
          this.setState({ selectedImage: this.state.selectedImage - 1 })
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (this.state.selectedImage < this.props.images.length - 1) {
          this.setState({ selectedImage: this.state.selectedImage + 1 })
        }
      }
      if (keyCode === 27) {
        // Escape key
        this.setState({ showLightbox: false })
        document.getElementsByTagName('html')[0].classList.remove('fullscreen')
        document.getElementsByTagName('body')[0].classList.remove('fullscreen')
      }
    }
  }

  render() {
    const { cover, images } = this.props
    const { showLightbox, selectedImage } = this.state
    return (
      <Fragment>
        <GalleryItem key={cover}>
          <a href={cover} alt="Astrocoders" onClick={e => this.handleClick(e)}>
            <img src={cover} />
          </a>
        </GalleryItem>

        <LightboxModal visible={showLightbox} onKeyUp={e => this.handleUp(e)}>
          <LightboxContent>
            <img src={images[selectedImage].src} />
            <Controls>
              <Button onClick={this.closeModal}>
                Close <CloseIcon />
              </Button>
              {images.length > 1 ? (
                <LeftRight>
                  <Button onClick={this.goBack} disabled={selectedImage === 0}>
                    Previous
                  </Button>
                  <Button onClick={this.goForward} disabled={selectedImage === images.length - 1}>
                    Next
                  </Button>
                </LeftRight>
              ) : null}
            </Controls>
          </LightboxContent>
        </LightboxModal>
      </Fragment>
    )
  }
}

Lightbox.propTypes = {
  cover: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
}

export default Lightbox
