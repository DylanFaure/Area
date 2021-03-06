// Page that explains the widgets, apperears when the user click on the "?" in /dashboard.

import React from "react";
import "../styles/Help.css";

function Help() {
    return (
        <div className="Help">
            <div className="Help-container">
                <div className="Help-content">
                    <div className="Help-content-item">
                        <h2>
                            How to use the widgets?
                        </h2>
                        <br />
                        <ul>
                            <li>
                                To connect to the widget, click on the "Add API" button and connect your accounts.
                            </li>
                            <li>
                                To receive emails, go to the settings page and add your email in the input field.
                                Dont forget to add the ip adress of your server. (ex: http://localhost:8080)
                            </li>
                        </ul>
                        <br />
                        <br />
                        <h2>
                            How to process the action/reaction
                        </h2>
                        <br />
                        <ul>
                            <li>
                                First, choose the reaction type before chossing action type.
                            </li>
                            <li>
                                Then, choose the action type. Clicking on the submit button will send the action to the server.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Help;