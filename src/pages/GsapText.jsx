import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const GsapText = () => {
	useGSAP(() => {
		gsap.to('#text', {
			ease: 'power1.inOut',
			opacity: 1,
			y: 0,
		})

		gsap.fromTo(
			'.para',
			{
				opacity: 0,
				y: 20,
			},
			{
				opacity: 1,
				y: 0,
			}
		)
	}, [])

	return (
		<main>
			<h1 id='text' className='opacity-0 translate-y-10'>
				GsapText
			</h1>

			<p className='mt-5 text-gray-500 para'>
				Мы можем использовать тот же метод, что и <code>gsap.to()</code>,{' '}
				<code>gsap.from()</code>, <code>gsap.from To()</code> и{' '}
				<code>gsap.timeline()</code> для анимации текста.
			</p>

			<p className='mt-5 text-gray-500 para'>
				Используя эти методы, мы можем добиться различных текстовых анимаций и
				эффектов таких как постепенное появление, fade out, slide in, slide out
				и многих других.
			</p>

			<p className='mt-5 text-gray-500 para'>
				Для получения более совершенной текстовой анимации и эффектов вы можете
				воспользоваться плагином GAP Text или другими сторонними библиотеками,
				специализирующимися на текстовой анимации .
			</p>

			<p className='mt-5 text-gray-500 para'>
				Узнать больше о Плагине{' '}
				<a
					href='https://greensock.com/docs/v3/Plugins/TextPlugin'
					target='_blank'
					rel='noreferrer noopener nofollow'
				>
					TextPlugin
				</a>{' '}
				.
			</p>
		</main>
	)
}

export default GsapText
