import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import {
	GsapFrom,
	GsapFromTo,
	GsapScrollTrigger,
	GsapStagger,
	GsapText,
	GsapTimeline,
	GsapTo,
} from './pages'
import Home from './pages/Home'

const App = () => {
	return (
		<div className='bg-black min-h-screen w-full'>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/gsapto' element={<GsapTo />} />
					<Route path='/gsapfrom' element={<GsapFrom />} />
					<Route path='/gsapfromto' element={<GsapFromTo />} />
					<Route path='/gsaptimeline' element={<GsapTimeline />} />
					<Route path='/gsapstagger' element={<GsapStagger />} />
					<Route path='/gsapscrolltrigger' element={<GsapScrollTrigger />} />
					<Route path='/gsaptext' element={<GsapText />} />
					<Route path='/home' element={<Home />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
