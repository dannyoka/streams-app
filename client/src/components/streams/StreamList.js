import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'
import { Link } from 'react-router-dom'

class StreamList extends Component {

    componentDidMount(){
        this.props.fetchStreams()
    }

    renderAdmin(stream){
        if (this.props.currentUserId === stream.userId){
            return (
            <div className="right floated content">
                <button className="ui button primary">
                    Edit
                </button>
                <button className="ui button negative">
                    Delete
                </button>
            </div>
            
            )
        }
    }
    renderList(){
        return this.props.streams.map(stream=>{ 
            return(
        <div className="item" key={stream.id}>
            <div>{this.renderAdmin(stream)}</div>
            <i className="large middle aligned icon camera" />
            <div className="content">
                {stream.title}
            </div>
            <div className="description">
                {stream.description}
            </div>

        </div>



        )
        })
    }

    renderCreate(){
        if (this.props.isSignedIn) {
            return(
            <div style={{ textAlign: 'right' }}>
                <Link to="/streams/new" className="ui button primary">
                    Create Stream
                </Link>
            </div>
            )
        }
    }


    render() {
        return (
            <div>
            <h2>Streams</h2>
            <div className="ui celled list">
                {this.renderList()}
            </div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        streams: Object.values(state.streams), 
        currentUserId: state.auth.userId, 
        isSignedIn: state.auth.isSignedIn
    }
}


export default connect(
    mapStateToProps,
    { fetchStreams }
)(StreamList)