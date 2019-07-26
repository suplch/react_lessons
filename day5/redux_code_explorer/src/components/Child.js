import React from 'react';

class Child extends React.Component {

    render() {
        debugger;
        console.log(this.testData);
        return (
            <div>
                Child { this.props.name }, { this.props.age }, {this.testData.name}
            </div>
        )
    }
}

function connect(mapStateToProps, mapDispatchToProps) {
    
    
    return function (WrapedComponent) {

        return class HighComponent extends React.Component {

            render() {
                debugger;
                console.log(this.testData)
                let pp = {
                    nnn: 'test',
                    mmm: 'test222'
                };

                WrapedComponent.prototype.testData = this.testData;

                let instance = <WrapedComponent {...this.props} {...pp} />;


                return (
                    instance
                )
            }
        }
    }
}

export default connect()(Child);
