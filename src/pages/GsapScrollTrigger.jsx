import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const GsapScrollTrigger = () => {
	const scrollRef = useRef()
	useGSAP(() => {
		const boxes = gsap.utils.toArray(scrollRef.current.children)
		boxes.forEach(box => {
			gsap.to(box, {
				x: 15,
				rotation: 360,
				borderRadius: '100%',
				scale: 1.5,
				scrollTrigger: {
					trigger: box,
					start: 'bottom, bottom',
					end: 'top 20%',
					scrub: true,
				},
				ease: 'power1.inOut',
			})
		})
	}, [])
	return (
		<main>
			<h1>GsapScrollTrigger</h1>

			<p className='mt-5 text-gray-500'>
				Gsap Scroll Trigger - это плагин, который позволяет создавать анимацию ,
				которая запускается в зависимости от положения прокрутки страницы.
			</p>

			<p className='mt-5 text-gray-500'>
				С помощью Scroll Trigger вы можете определить различные действия,
				которые будут запускаться в определенных точках прокрутки, такие как
				запуск или завершение анимации, прокрутка анимаций по мере прокрутки
				пользователем, закрепление элементов на экране и многое другое.{' '}
			</p>

			<p className='mt-5 text-gray-500'>
				Узнать больше о методе{' '}
				<a
					href='https://gsap.com/docs/v3/Plugins/ScrollTrigger/'
					target='_blank'
					rel='noreferrer noopener nofollow'
				>
					gsap scroll trigger
				</a>{' '}
				.
			</p>

			<div className='w-full h-[70vh] flex justify-center items-center flex-col'>
				<p className='text-center text-gray-500'>
					Scroll down to see the animation
				</p>

				<svg
					className='animate-bounce mt-5'
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='blue'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<path d='M12 19V5' />
					<path d='M5 12l7 7 7-7' />
				</svg>
			</div>

			<div className='mt-20 w-full h-screen' ref={scrollRef}>
				<div
					id='scroll-pink'
					className='scroll-box w-20 h-20 rounded-lg bg-pink-500'
				/>
				<div
					id='scroll-orange'
					className='scroll-box w-20 h-20 rounded-lg bg-orange-500'
				/>
			</div>
		</main>
	)
}

export default GsapScrollTrigger
