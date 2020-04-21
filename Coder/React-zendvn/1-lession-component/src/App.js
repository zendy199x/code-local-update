import React, {Component} from 'react';
import './App.css';
import Course from './components/Course'

class App extends Component {
    render() {

    	const items = [
    		{
    			name: 'ReactJS',
    			time: '30h',
    			free: false,
    			desc: 'ReactJS is very simple'
    		},
    		{
    			name: 'Vue',
    			time: '35h',
    			free: true,
    			desc: 'Vue is very simple'
    		},
    		{
    			name: 'Angular',
    			time: '30h',
    			free: false,
    			desc: 'Angular is very simple'
    		}
    	];

    	const listCourse = items.map((item, index) => {
    		return <Course key= {index}
    				name= {items.name}
    				time= {items.time}
    				free= {items.free}
                    desc= {items.desc}
    				>
    				</Course>
    	})

        return (
           	<div className="row">
                { listCourse }
            </div>
        );
    }
}


export default App;
