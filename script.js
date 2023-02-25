const container = document.getElementById('container')
const root = ReactDOM.createRoot(container)




class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    incCount = () => {
        if (this.state.count < this.props.maxVal) {          //max value
            const tempState = {...this.state}
            tempState.count = ++this.state.count
            this.setState(tempState)
        }
    }

    decCount = () => {
        if (this.state.count > this.props.minVal) {         //min value
            const tempState = {...this.state}
            tempState.count = --this.state.count
            this.setState(tempState)
        }
    }

    render() {
        return (
            <div className={'m-2 text-center'}>
                <h2>Counter</h2>
                <button className={'btn btn-danger'} onClick={this.decCount}>-</button>
                <span>Count: {this.state.count}</span>
                <button className={'btn btn-success'} onClick={this.incCount}>+</button>
            </div>
        );
    }
}
class AdvancedCounter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inValue: false,
            count: 0
        }
    }

    changeValue=(event)=>{
            const tempState = {...this.state}
            tempState.inValue = true
            tempState.count = +event.target.value
            this.setState(tempState);

    }

    incCount = (event) => {
        if (this.state.count < this.props.maxVal) {          //max value
            const tempState = {...this.state}
            tempState.count = ++this.state.count
            this.setState(tempState)
        }
    }

    decCount = () => {
        if (this.state.count > this.props.minVal) {         //min value
            const tempState = {...this.state}
            tempState.count = --this.state.count
            this.setState(tempState)
        }
    }

    render() {
        return (
            <div className={'m-2 text-center' }>
                <h2>Advanced counter</h2>
                <button className={'btn btn-danger'} onClick={this.decCount}>-</button>
                <input type="number" onInput={this.changeValue} defaultValue={0} value={this.state.count}/>
                <button className={'btn btn-success'} onClick={this.incCount}>+</button>
            </div>
        );
    }
}

root.render(<div className={'container d-flex flex-column align-items-center'}>
        <Counter minVal={0} maxVal={10}/>
        <AdvancedCounter minVal={0} maxVal={10}/>
</div>
)