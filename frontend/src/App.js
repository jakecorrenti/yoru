import React, { Component } from "react";
import { BrowserRouter as Switch, Router, Route, Link, BrowserRouter } from 'react-router-dom';
import Login from './login';

// import './login';
// import { render } from '@headlessui/react/dist/utils/render'
// This file is used to render the main component, which houses a react-router-dom switch feature
import reactlogo from './img/react-logo.png'
import fblogo from './img/firebase-logo.png'
import gologo from './img/golang-logo.png'
import twlogo from './img/tailwind-logo.png'

import './css/Home.css';
import './css/index.css';

import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const navigation = [
	{ name: 'Dashboard', href: '#', current: true },
	{ name: 'About Yoru', href: '#learn-more', current: false },
	{ name: 'Our Team', href: '#our-team', current: false },
]

// which switches between the 'home' and 'login' component

export default class MainPage extends Component {

	navbar = () => {
		return (
			<Disclosure as="nav" className="bg-gray-800">
				{({ open }) => (
					<>
						<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
							<div className="relative flex items-center justify-between h-16">
								<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
									{/* Mobile menu button*/}
									<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<MenuIcon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
								<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
									<div className="flex-shrink-0 flex items-center">
										<p className="text-pink-200">Yoru</p>
									</div>
									<div className="hidden sm:block sm:ml-6">
										<div className="flex space-x-4">
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className={classNames(
														item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
														'px-3 py-2 rounded-md text-sm font-medium'
													)}
													aria-current={item.current ? 'page' : undefined}
												>
													{item.name}
												</a>
											))}
										</div>
									</div>
								</div>
								<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
									<Link to="/login">
										<button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md py-1 px-4">Login</button>
										<button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md py-1 px-4">Sign Up</button>
									</Link>
								</div>
							</div>
						</div>
						<Disclosure.Panel className="sm:hidden">
							<div className="px-2 pt-2 pb-3 space-y-1">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className={classNames(
											item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
											'block px-3 py-2 rounded-md text-base font-medium'
										)}
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</a>
								))}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		)
	}

	homePage(){
		return (
			<div class="body">
				{this.navbar()}
				<section className="home-page min-h-screen">
					<div class="container">
						<div class="items">
							<h1>Yoru</h1>
							<p>A tool to help you find common breaks in you and your friends' schedules</p>
							<Link to="/login">
								<button id="home-buttons">Try now</button>
							</Link>
							<button id="home-buttons">Learn More</button>
						</div>
					</div>
				</section>
				<section className="filter drop-shadow-xl min-h-96 bg-purple-400 bg-opacity-25 border-t-2 border-b-2 border-black rounded-t-sm" id="learn-more">
					<div className="min-h-1/2 py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 bg-opacity-30">
						<div class="grid grid-cols-2 gap-4 h-1/2 p-8 text-center bg-gray-900 bg-opacity-50">
							<div>
								<h1 className="text-5xl text-pink-400">What is Yoru?</h1>
							</div>
							<div>
								<h1 className="text-5xl text-pink-400">What Technologies do we use?</h1>
							</div>
							<div>
								<p className="text-2xl my-5 text-pink-300 my-9">Yoru is a online web based scheduling tool with its main function being to visualize when your friends and peers have a free time slot</p>
							</div>
							<div className="flex justify-center">
								<div class="grid grid-rows-2 grid-flow-col gap-4 w-1/2 place-items-center">
									<span>
										<img src={reactlogo} className="h-12"></img>
										<p className="text-pink-300">React.js</p>
									</span>
									<span>
										<img src={twlogo} className="h-12"></img>
										<p className="text-pink-300" >Tailwind.js</p>
									</span>
									<span>
										<img src={fblogo} className="h-12"></img>
										<p className="text-pink-300" >Firebase</p>
									</span>
									<span>
										<img src={gologo} className="h-12"></img>
										<p className="text-pink-300" >Go lang</p>
									</span>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="min-h-screen flex" id="our-team">
					<h1 className="text-center">About us</h1>
				</section>
			</div>
		);
	}

	render(){
		return (
				<div className="App">
					<div className="content">
						<Switch>
							<Route exact path="/">
								{this.homePage()}
							</Route>
							<Route path="/login">
								<Login />
							</Route>
						</Switch>
					</div>
 				</div>
		);
	}
};

