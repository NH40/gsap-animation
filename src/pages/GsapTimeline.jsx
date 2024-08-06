import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const GsapTimeline = () => {
	const timeline = gsap.timeline({
		repeat: -1,
		repeatDelay: 1,
		yoyo: true,
	})
	useGSAP(() => {
		timeline.to('#yellow-box', {
			x: 360,
			rotate: 360,
			borderRadius: '100%',
			duration: 2,
			ease: 'back.inOut',
		})

		timeline.to('#yellow-box', {
			x: 720,
			scale: 1,
			rotate: 360,
			borderRadius: '8px',
			duration: 2,
			ease: 'back.inOut',
		})
	}, [])

	return (
		<main>
			<h1>GsapTimeline</h1>

			<p className='mt-5 text-gray-500'>
				Метод <code>gsap.timeline()</code> используется для создания временной
				шкалы экземпляра, который можно использовать для управления несколькими
				анимациями.
			</p>

			<p className='mt-5 text-gray-500'>
				Метод <code>gsap.timeline()</code> аналогичен методу{' '}
				<code>gsap.to()</code>, <code>gsap.from()</code> и методы{' '}
				<code>gsap.from To()</code>, но разница в том, что метод{' '}
				<code>gsap.timeline()</code> используется для создания временной шкалы
				экземпляр, который можно использовать для управления несколькими
				анимациями, в то время как <code>gsap.to ()</code>,{' '}
				<code>gsap.from()</code> и методы <code>gsap.from To()</code>{' '}
				используются для анимации элементов из их текущего состояния в новое
				состояние, из нового состояния в их текущее состояние состояние, и из
				нового состояния в новое состояние, соответственно.
			</p>

			<p className='mt-5 text-gray-500'>
				Узнать больше про метод{' '}
				<a
					href='https://greensock.com/docs/v3/GSAP/gsap.timeline()'
					target='_blank'
					rel='noreferrer noopener nofollow'
				>
					gsap.timeline()
				</a>{' '}
				.
			</p>

			<div className='mt-20 space-y-10'>
				<button
					onClick={() => {
						if (timeline.paused()) {
							timeline.play()
						} else {
							timeline.pause()
						}
					}}
				>
					Play/Pause
				</button>

				<div id='yellow-box' className='w-20 h-20 bg-yellow-500 rounded-lg' />
			</div>
		</main>
	)
}

export default GsapTimeline
