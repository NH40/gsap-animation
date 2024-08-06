import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const GsapStagger = () => {
	useGSAP(() => {
		gsap.to('.stagger-box', {
			y: 200,
			rotation: 360,
			borderRadius: '100%',
			repeat: -1,
			yoyo: true,
			duration: 2,
			// stagger: 0.5,
			stagger: {
				amount: 1.5,
				grid: [2, 1],
				axis: 'y',
			},
		})
	}, [])

	return (
		<main>
			<h1>GsapStagger</h1>

			<p className='mt-5 text-gray-500'>
				GSAP stagger - это функция, которая позволяет вам применять анимацию с
				поэтапной задержкой к группе элементов.
			</p>

			<p className='mt-5 text-gray-500'>
				С помощью функции шатаются в GSAP, вы можете указать промежуток времени
				шататься анимации между каждым элементом, а также настроить смягчение и
				длительность каждой отдельной анимации. Это позволяет создавать
				динамичные и визуально привлекательные эффекты, такие как постепенное
				затухание, повороты, перемещения и многое другое.
			</p>

			<p className='mt-5 text-gray-500'>
				Узнать больше о функции{' '}
				<a
					href='https://gsap.com/resources/getting-started/Staggers'
					target='_blank'
					rel='noreferrer noopener nofollow'
				>
					Gsap Stagger
				</a>{' '}
				.
			</p>

			<div className='mt-20'>
				<div className='flex gap-5'>
					<div className='w-20 h-20 bg-indigo-200 rounded-lg stagger-box' />
					<div className='w-20 h-20 bg-indigo-300 rounded-lg stagger-box' />
					<div className='w-20 h-20 bg-indigo-400 rounded-lg stagger-box' />
					<div className='w-20 h-20 bg-indigo-500 rounded-lg stagger-box' />
					<div className='w-20 h-20 bg-indigo-600 rounded-lg stagger-box' />
					<div className='w-20 h-20 bg-indigo-700 rounded-lg stagger-box' />
					<div className='w-20 h-20 bg-indigo-800 rounded-lg stagger-box' />
				</div>
			</div>
		</main>
	)
}

export default GsapStagger
