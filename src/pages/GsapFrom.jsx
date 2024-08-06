import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const GsapFrom = () => {
	useGSAP(() => {
		gsap.from('#green-box', {
			x: 720,
			repeat: -1,
			yoyo: true,
			rotation: 360,
			duration: 2,
			ease: 'power1.inOut',
		})
	}, [])

	return (
		<main>
			<h1>GsapFrom</h1>

			<p className='mt-5 text-gray-500'>
				Метод <code>gsap.from()</code> используется для анимации элементов из
				состояния new в их текущее состояние.
			</p>

			<p className='mt-5 text-gray-500'>
				Метод <code>gsap.from()</code> аналогичен методу <code>gsap.to ()</code>{' '}
				метод, но разница в том, что метод <code>gsap.from()</code> переводит
				элементы из нового состояния в их текущее, в то время как{' '}
				<code>gsap.to ()</code> метод анимирует элементы переходят из своего
				текущего состояния в новое.
			</p>

			<p className='mt-5 text-gray-500'>
				Узнать больше о методе{' '}
				<a
					href='https://greensock.com/docs/v3/GSAP/gsap.from()'
					target='_blank'
					rel='noreferrer noopener nofollow'
				>
					gsap.from()
				</a>{' '}
				.
			</p>

			<div className='mt-20'>
				<div id='green-box' className='w-20 h-20 bg-green-500 rounded-lg' />
			</div>
		</main>
	)
}

export default GsapFrom
