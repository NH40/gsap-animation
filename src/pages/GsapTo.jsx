import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const GsapTo = () => {
	useGSAP(() => {
		gsap.to('#blue-box', {
			x: 720,
			repeat: -1,
			yoyo: true,
			rotation: 360,
			duration: 2,
			ease: 'bounce.inOut',
		})
	}, [])

	return (
		<main>
			<h1>GsapTo</h1>

			<p className='mt-5 text-gray-500'>
				<code>gsap.to () метод</code> используется для анимации элементов из их
			</p>
			<p className='mt-5 text-gray-500'>
				<code>gsap.to () </code> метод аналогичен методу метод{' '}
				<code> gsap.from()</code>, но разница в том, что <code>gsap.to ()</code>{' '}
				метод переводит элементы из их текущего состояния в новое, в то время
				как метод <code>gsap.from()</code> анимирует элементы переходят из
				нового состояния в их текущее.
			</p>

			<p className='mt-5 text-gray-500'>
				Узнайте больше о методе{' '}
				<a
					href='https://greensock.com/docs/v3/GSAP/gsap.to()'
					target='_blank'
					rel='noreferrer noopener nofollow'
				>
					gsap.to()
				</a>{' '}
				.
			</p>

			<div className='mt-36 '>
				<div id='blue-box' className='w-20 h-20 bg-blue-500 rounded-lg' />
			</div>
		</main>
	)
}

export default GsapTo
