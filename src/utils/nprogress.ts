import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
	easing: 'ease',
	speed: 300,
	showSpinner: false,
	trickleSpeed: 200,
	minimum: 0.3,
	parent: 'body'
})

export const start = () => {
	NProgress.start()
}

export const close = () => {
	NProgress.done()
}

