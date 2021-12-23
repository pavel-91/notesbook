import React, {Component} from "react";


export default class PostListItem extends Component {
    render() {
        const {category, content, onDelete} = this.props;
        return (
            <>
            <div className="box">
                <h4 className="category">{category}</h4>
                <p className="content">{content}</p>
                <i className="fas fa-trash-alt"
                onClick={onDelete}></i>
            </div>
            </>
        )
    }
}