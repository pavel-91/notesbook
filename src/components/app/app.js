import React, {Component} from "react";

import AppHeader from "../app-header/app-header";
import FormPanel from "../app-form-panel/app-form-panel";
import PostList from "../app-post-list/app-post-list";

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: '',
            data : [
                {category: 'Дом', content: 'сходить в магазин до 18:00', id: 1},
                {category: 'Встреча', content: 'пригласить друзей на ужин', id: 2},
                {category: 'Спорт', content: 'покататься на лыжах', id: 3},
                {category: 'Дом', content: 'сделать уборку', id: 4},
            ]
        };
        this.DeleteItem = this.DeleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.OpenForm = this.OpenForm.bind(this);
        this.CloseForm = this.CloseForm.bind(this);

        this.maxId = 5;
    }

    DeleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];
            return {
                data: newArr
            }
        })
    }

    addItem(title, body) {
        const newItem = {
            category: title,
            content: body,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        }) 
    }

    OpenForm() {
        this.setState({active: ' active'})
        document.body.style.paddingRight = "350px";
    }

    CloseForm() {
        this.setState({active: ''})
        document.body.style.paddingRight = 0;
    }

    render() {
        return (
            <>
            <AppHeader onForm={this.OpenForm}/>
            <FormPanel onAdd={this.addItem} active={this.state.active} onClose={this.CloseForm}/>
            <PostList posts={this.state.data} onDelete={this.DeleteItem}/>
            </>
        )
    }
}