import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'

class ChinchiroGamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Player1: [6, 2, 3], 
            Player2: [4, 5, 6],
            Player1Score: 111,
            Player2Score: 223,
        };
        this.dice = this.dice.bind(this);
        this.calculateScore = this.calculateScore.bind(this);
    }

    // return array made with 3 random (1 to 6) numbers
    dice() {
        /*let threeDice1 = [Math.floor(Math.random() * 6),
            Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)];
        let threeDice2 = [Math.floor(Math.random() * 6),
            Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)];
        this.setState({Player1: threeDice1, Player2: threeDice2});*/ 
        this.setState({
            Player1: [Math.floor(Math.random() * 6),
            Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)],
            Player2: [Math.floor(Math.random() * 6),
            Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)]
        })
    }

    // return a score
    calculateScore(i) {
        let threeDice;
        if (i === 1) {
            threeDice = this.state.Player1.sort();
            this.setState({
                Player1: threeDice
            });
        } else if (i === 2) {
            threeDice = this.state.Player2.sort();
            this.setState({
                Player2: threeDice
            });
        } /* used "else if" in case of adding players ("switch" may be better) */
        let one = threeDice[0];
        let two = threeDice[1];
        let three = threeDice[2];
        let score;
        
        if (one === two && one !== three) {
            score = one;
        } else if (one === three && one !== two) {
            score = one;
        } else if (one === two === three) {
            score = (one * 100) + (one * 10) + one;
        } else if (one === 1 && two === 3 && three === 6) {
            score = 136;
        } else if (one === 1 && two === 2 && three === 3) {
            score = 123;
        } else if (one === 4 && two === 5 && three === 6) {
            score = 456;
        } else if (one !== two && one !== three) {
            score = 0
        }

        if (i === 1) {
            this.setState({Player1Score: score});
            return this.state.Player1Score;
        } else if (i === 2) {
            this.setState({Player2Score: score});
            return this.state.Player2Score;
        }
        
    }
    
    render() {
        return(
            <div>
                <h1>チンチロ</h1>

                <DiceRoll diceRoll={() => this.dice() /*calling setState()*/}/>
                
                <ShowResultsOfDice dice1={this.state.Player1}
                    dice2={this.state.Player2} />
                
                <GetMessage score1={() => this.calculateScore(1)}
                    score2={() => this.calculateScore(2)} />
            </div>
        );
    }
}

const DiceRoll = (props) => {
    return (
        <div>
            <button onClick={() => props.diceRoll}>
                サイコロをふる
            </button>
        </div>
    )
}

DiceRoll.propTypes = {
    diceRoll: PropTypes.func
}

// props will be dice1 and dice2
const ShowResultsOfDice = (props) => {
    return (
        <div>
            <h2>サイコロ結果</h2>
            <p>Player1: {props.dice1}</p>
            <p>Player2: {props.dice2}</p>
        </div>
    )
}

ShowResultsOfDice.propTypes = {
    dice1: PropTypes.array,
    dice2: PropTypes.array
}

// props will be score1 and score2
const GetMessage = (props) => {
    let message;
    let message2;
    switch (props.score1) {
        case 1:
            message = "1";
            break;
        case 2:
            message = "2";
            break;
        case 3:
            message = "3";
            break;
        case 4:
            message = "4";
            break;
        case 5:
            message = "5";
            break;
        case 6:
            message = "6";
            break;
        case 111:
            message = "１ゾロ";
            break;
        case 222:
            message = "２ゾロ";
            break;
        case 333:
            message = "３ゾロ";
            break;
        case 444:
            message = "４ゾロ";
            break;
        case 555:
            message = "５ゾロ";
            break;
        case 666:
            message = "６ゾロ";
            break;
        case 136:
            message = "イザム";
            break;
        case 123:
            message = "ヒフミ";
            break;
        case 456:
            message = "シゴロ";
            break;
        case 0:
            message = "メナシ"
            break;
    }
    switch (props.score2) {
        case 1:
            message2 = "1";
            break;
        case 2:
            message2 = "2";
            break;
        case 3:
            message2 = "3";
            break;
        case 4:
            message2 = "4";
            break;
        case 5:
            message2 = "5";
            break;
        case 6:
            message2 = "6";
            break;
        case 111:
            message2 = "１ゾロ";
            break;
        case 222:
            message2 = "２ゾロ";
            break;
        case 333:
            message2 = "３ゾロ";
            break;
        case 444:
            message2 = "４ゾロ";
            break;
        case 555:
            message2 = "５ゾロ";
            break;
        case 666:
            message2 = "６ゾロ";
            break;
        case 136:
            message2 = "イザム";
            break;
        case 123:
            message2 = "ヒフミ";
            break;
        case 456:
            message2 = "シゴロ";
            break;
        case 0:
            message2 = "メナシ"
            break;
    }
    return (
        <div>
            <h3>スコア</h3>
            <p>Player1: {message}</p>
            <p>Player2: {message2}</p>
        </div>
    )
}

GetMessage.propTypes = {
    score1: PropTypes.func.isRequired,
    score2: PropTypes.func.isRequired
}

ReactDOM.render(
    <ChinchiroGamePage />,
    document.getElementById('root')
  )