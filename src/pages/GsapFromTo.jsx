import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const GsapFromTo = () => {
	useGSAP(() => {
		gsap.fromTo(
			'#red-box',
			{
				borderRadius: '0%',
				x: 0,
				rotation: 0,
				duration: 2.3,
			},
			{
				x: 720,
				repeat: -1,
				yoyo: true,
				borderRadius: '100%',
				rotation: 360,
				duration: 2.3,
				ease: 'bounce.inOut',
			}
		)
	}, [])

	return (
		<main>
			<h1>GsapFromTo</h1>

			<p className='mt-5 text-gray-500'>
				Метод <code>gsap.from To()</code> используется для анимации элементов из
				состояния new в новое состояние.
			</p>

			<p className='mt-5 text-gray-500'>
				Метод <code>gap.from To()</code> аналогичен методу методы{' '}
				<code>gsap.from()</code> и <code>gsap.to()</code>, но разница в том, что
				метод <code>gsap.from()</code> анимирует элементы из нового состояния в
				новое состояние, в то время как метод <code>gsap.from()</code> переводит
				элементы из нового состояния в их текущее, а <code>gsap.to ()</code>{' '}
				метод анимирует элементы переходят из своего текущего состояния в новое.
			</p>

			<p className='mt-5 text-gray-500'>
				Узнайте больше о методе{' '}
				<a
					href='https://greensock.com/docs/v3/GSAP/gsap.fromTo()'
					target='_blank'
					rel='noreferrer noopener nofollow'
				>
					gsap.fromTo()
				</a>{' '}
				.
			</p>

			<div className='mt-20'>
				<div id='red-box' className='w-20 h-20 bg-red-500 rounded-lg' />
			</div>
		</main>
	)
}

export default GsapFromTo
