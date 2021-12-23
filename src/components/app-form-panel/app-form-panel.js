import React, {Component} from "react";

export default class FormPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        }
        this.onValueCategory = this.onValueCategory.bind(this);
        this.onValueContent = this.onValueContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueCategory(e) {
        console.log(e.target.value);
        this.setState({
            title: e.target.value
        })
    }

    onValueContent(e) {
        console.log(e.target.value);
        this.setState({
            body: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.title, this.state.body);
        this.setState({
            title: '',
            body: '',
        });
    }

    render() {

        let classNames = 'form-panel-container';
        classNames += this.props.active;

        return (
        <div className={classNames}>
            <div onClick={this.props.onClose} id="panel-close" className="fa fa-times"></div>
                <h3>Форма записи</h3>
            <form action="" className="form-panel" onSubmit={this.onSubmit}>
                <input onChange={this.onValueCategory} value={this.state.title} type="text" name="input-category" placeholder="Введите категорию"/>
                <input onChange={this.onValueContent} value={this.state.body} type="text" name="input-text" placeholder="Введите заметку"/>
                <input type="submit" value="Добавить запись"/>
            </form>
        </div>
        )
    }
}