
import "./App.css"
import { Route, Router, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Forget from './pages/Forget/Forget'
import Register from './pages/register/Register'
import Reset from './pages/ResetPwd/Reset'
import { ToastContainer } from 'react-toastify'
import { PageRoute } from './enum/routes.enum'
import Home from './pages/home/Home'
import Dashboard from './pages/dashboard/Dashboard'
import Sidebar from './pages/sidebar/Sidebar'
import ClientLayout from './pages/clientLayout/ClientLayout'
import AddForm from "./components/AddForm"
import EditForm from "./components/EditForm"

function App() {

	console.log('===app=============== ')
	return (
		<>
			<div className='h-[98vh] w-full bg-zinc-700 flex justify-center items-center'>

				<Routes>
					<Route path={PageRoute.SIDEBAR} element={<Sidebar />} />
					<Route path={PageRoute.LOGIN} element={<Login />} />
					<Route path={PageRoute.CREATEACCOUNT} element={<Register />} />
					<Route path={PageRoute.FORGETPWD} element={<Forget />} />
					<Route path={PageRoute.RESET} element={<Reset />} />
					<Route path={PageRoute.CLIENTLAYOUT} element={<ClientLayout />}>
						<Route index path={PageRoute.DASHBOARD} element={<Dashboard />} />
						<Route path={PageRoute.CLIENT} element={<Home />}/>
					</Route>
				</Routes>
			</div>

			<ToastContainer position='top-center' />
		</>
	)
}

export default App
