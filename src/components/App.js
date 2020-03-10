import React, { Component } from 'react'
import './App.css'
import AddPostMine from './AddPostMine'
import Header from './Header'
import MainPage from './MainPage'
import posts from './posts'

class App extends Component {
	// The states are related with
	// the GoogleAuth Component
	state = {
		isSignedIn: null,
		userId: null,
		posts: posts,
		title: '',
		category: '',
		content: '',
	}

	// This method is passed as props
	// down to the GoogleAuth Component
	updateSignInStatus = isSignedIn => {
		this.setState({ isSignedIn: isSignedIn })
	}

	// This method is passed as props
	// down to the GoogleAuth Component
	updateUserId = id => {
		this.setState({ userId: id })
	}

	addPost = newPosts => {
		this.setState({ posts: newPosts })
	}

	render() {
		return (
			<div className='ui container'>
				<div>
					<Header
						isSignedIn={this.state.isSignedIn}
						updateSignIn={this.updateSignInStatus}
						updateUserId={this.updateUserId}
					/>
					<MainPage posts={this.state.posts} />
					<AddPostMine posts={this.state.posts} addPost={this.addPost} />
				</div>
			</div>
		)
	}
}

export default App
