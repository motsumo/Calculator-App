import React, {
    Component
} from "react";
import {
    keypadKeys
} from "../../utils/constants";
import Button from "../Button/Button";
import './Keypad.css';


export default class Keypad extends Component {
    render() {
        return ( <div className = "keypad" > {
                keypadKeys.map((block, index) => {
                    return ( <div key = {
                            index
                        }
                        className = "block" > {
                            block.map(key => ( < Button key = {
                                    key
                                }
                                onButtonClick = {
                                    this.handleClick
                                }
                                buttonKey = {
                                    key
                                }
                                />
                            ))
                        } </div>
                    );
                })
            } </div>);
        }
    }