import React, { Component } from 'react'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils'

export class ListContainer extends Component {
    constructor(props) {
		super(props)
		this.state = {
            arrData : Object.values(this.props.data)
    
        }
	}
    

 

    changeOrder(e){
        this.setState({arrData : this.state.arrData.reverse()})
    }

    
    


    render() {
        console.log(this.props.data)
        return (
            <div>
            <button className="order" onClick={() => this.changeOrder()}>inverser l'ordre</button>

            <div className="list">
                {this.state.arrData ?  this.state.arrData.map(function(element){
                    return (
                        <div className="pubContainer">
                        <div className="info">
                            <div className="status">
                                 <div className={element.active}>.</div>
                                 <div >{element.active}</div>
                           </div>
                            <div> Début de diffusion le : {element.date_debut}</div>
                            <div className="ide"> ID : {element._id} </div>
                        </div>

                         <div className="id">
                         <img className="logo" src={element.logo_url}/>   
                         <div>
                            <div className="company">{element.name_company}</div>
                        
                        </div>
                        </div>
                        <img className="pubImg" src={element.images_url[0]}/>
                       
                        <a  className="link" href={element.target_url}>
                  
                        <p>{element.actionText}</p>

                          <button className="button">
                            See more
                            </button>
                        </a>
                        </div>
                    )
                }
                ) : "aa"}
            </div>
            </div>
        )
    }
}

export default ListContainer
