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
                        onClick={function (e) {
                            e.preventDefault();
                            this.props.onChangePage();
                        }.bind(this)}>{data.title}</a>
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