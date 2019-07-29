import React from 'react';

class Child extends React.Component {

    render() {
        return (
            <div>
                Child
            </div>
        )
    }
}

function connect(mapStateToProps, mapDispatchToProps) {


    return function (WrapedComponent) {

        return class HighComponent extends React.Component {

            render() {

                WrapedComponent.prototype.testData = this.testData;

                let instance = <WrapedComponent  />;

                return (
                    instance
                )
            }
        }
    }
}

export default connect()(Child);
