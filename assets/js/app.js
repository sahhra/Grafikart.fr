import '../css/app.scss'

import './elements/RecapLiveElement'
import './elements/PlayButton.js'
import './elements/YoutubePlayer.js'
import './elements/Waves'
import './elements/Alert'
import './elements/Switch'
import './elements/Modal'
import './elements/Autogrow'
import './elements/Comments'
import './elements/TimeAgo'
import './elements/Tabs'
import './elements/Choices'
import './elements/editor'
import './elements/AjaxDelete'
import './elements/AutoScroll'
import './elements/AnimatedEditor'
import '@grafikart/spinning-dots-element'
import Turbolinks from 'turbolinks'

import './modules/scrollreveal'
import './modules/highlight'
import {showHistory} from './modules/history'

document.addEventListener('turbolinks:load', function () {
  const darkToggle = document.querySelector('#dark-toggle')
  if (darkToggle) {
    darkToggle.addEventListener('click', e => {
      e.stopPropagation()
      e.preventDefault()
      document.body.classList.toggle('dark')
    })
  }
})

global.Grafikart = {
  showHistory
}

Turbolinks.start()
