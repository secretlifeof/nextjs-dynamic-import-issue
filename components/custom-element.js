// import { h } from 'preact'
import { html } from 'htm/preact'
import register from './preact-custom-element'
// import App from './containers/app'
// import { EventBus } from './utilities/bus'

const App = () => {
  // const { errors } = useForm()

  return html`
    <div style=${{ padding: '2vw 2vw' }}>
      <div>c u s t o m</div>
      <div>e l e m e n t</div>
    </div>
  `
}

if (typeof window !== 'undefined') {
  register(App, 'womans-day', [])
  // window.EventBus = new EventBus()
}
