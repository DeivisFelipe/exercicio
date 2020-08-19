import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItems(props){
    const items = props.items;
    const listitems = items.map(item => {
        return <div className="List" key={item.key}>
            <p>
                <input type="text" id={item.key}
                value={item.text}
                onChange= {
                    (e) => {
                        props.setUpdate(e.target.value,item.key)
                    }
                }
                />
                <br></br>
                <input type="date" id={item.key}
                value={item.date}
                onChange= {
                    (e) => {
                        props.setUpdateDate(e.target.value,item.key)
                    }
                }
                />
                <span>
                    <FontAwesomeIcon className="faicons" icon="trash"
                    onClick={ () => {
                        props.deleteItem(item.key)
                    }}>
                    </FontAwesomeIcon>
                </span>
            </p>
            
        </div>
    })
    return(
        <div>
            <FlipMove duration={300} easing='ease-in-out'>
                {listitems}
            </FlipMove>   
        </div>
    )
}

export default ListItems;