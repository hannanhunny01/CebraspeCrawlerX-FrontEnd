/* Terminal Component */
import React from 'react';
import './terminal.css';

const Terminal = ({ commands }) => {
    return (
        <div className="terminal-container">
            <div className="terminal-header">
                <div className="circle red"></div>
                <div className="circle yellow"></div>
                <div className="circle green"></div>
            </div>
            <div className="terminal-body">
                <table className="terminal-table">
                    <thead style={{ position: 'sticky', top: '0' }}>
                        <tr>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Time Checked</th>
                        </tr>
                    </thead>
                    <tbody>
                        {commands.map((command, index) => (
                            <tr
                                key={index}
                                className={`command-row ${command.status}`}
                            >
                                <td>{command.status}</td>
                                <td>{command.action}</td>
                                <td>{command.timeChecked}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Terminal;
