import React, { Component } from 'react';

class TOC extends Component {
    static defaultProps = {
        data: []
    }
    render() {
        console.log("TOC render")
        const { data } = this.props;
        const lists = data.map(
            data => (
                <li key={data.id}>
                    <a href={"/contents/" + data.id}
                        onClick={function (id, num, e) {
                            // debugger;
                            e.preventDefault();
                            // this.props.onChangePage(e.target.dataset.id);
                            this.props.onChangePage(id);
                            console.log("num:" + num);
                        }.bind(this, data.id, 10)}
                    >{data.title}</a>
                </li>)
        );
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;