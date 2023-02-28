import React, { Component } from "react";
import "./ExcusesStyle.css";

class Unbelievable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch("https://excuser-three.vercel.app/v1/excuse/unbelievable/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    isLoaded: true,
                    items: json,
                });
            });
    }

    render() {
        const { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading......</div>;
        } else {
            return (
                <div>
                    {items.map((item) => (
                        <p key={item.id} className="excuseQuote">
                            {item.excuse}
                        </p>
                    ))}
                </div>
            );
        }
    }
}

export default Unbelievable;
