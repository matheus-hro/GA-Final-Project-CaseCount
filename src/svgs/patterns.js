import aztec from './aztec.svg'
import bubbles from './bubbles.svg'
import circSq from './circSq.svg'
import food from './food.svg'
import polkaDots from './polkaDots.svg'
import eyes from './eyes.svg'
import dominos from './dominos.svg'
import circuitBoard from './circuitBoard.svg'
import signal from './signal.svg'
import ticTacToe from './ticTacToe.svg'

const patternArray = [
    [
        "Bubbles",
        bubbles
    ],
    [
        "Circuit",
        circuitBoard
    ],
    [
        "Dominos",
        dominos
    ],
    [
        "Eyes",
        eyes
    ],
    [
        "Food",
        food
    ],
    [
        "Polka Dots",
        polkaDots
    ],
    [
        "Circles and Squares",
        circSq
    ],
    [
        "Aztec",
        aztec
    ],
    [
        "Signal",
        signal
    ],
    [
        "Tic-Tac-Toe",
        ticTacToe
    ],
]
export default new Map(patternArray)
