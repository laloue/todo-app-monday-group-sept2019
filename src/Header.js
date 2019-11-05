import React from 'react'

export class Header extends React.Component {
    render() {
        return (
            <div className="HeaderApp">
                <h1> My To Do App</h1>
                <h2> this is not just any to-do app, this is the 'Get Things Done' App</h2>
                <p> To do lists are important to complete tasks and work efficiently :-)</p>
            </div>
        )
    }
}

export default Header;