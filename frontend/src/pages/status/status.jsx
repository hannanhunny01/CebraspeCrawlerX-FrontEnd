import React, { useState, useEffect } from 'react';
import Terminal from '../../components/terminal/terminal';
import Navbar from '../../components/Navbar/navbar';

function Status() {
     

        const commands = [
                {
                    status: 'Success',
                    action: 'ls -l',
                    timeChecked: '2023-10-05 10:30 AM',
                },
                {
                    status: 'Failed',
                    action: 'cd /home/user',
                    timeChecked: '2023-10-05 11:15 AM',
                },
                {
                    status: 'Success',
                    action: 'git commit -m "Initial commit"',
                    timeChecked: '2023-10-05 12:00 PM',
                },
                {
                    status: 'Failed',
                    action: 'npm install',
                    timeChecked: '2023-10-05 12:45 PM',
                },
                {
                        status: 'Failed',
                        action: 'cd /home/user',
                        timeChecked: '2023-10-05 11:15 AM',
                    },
                    {
                        status: 'Success',
                        action: 'git commit -m "Initial commit dasd sad s das d as d asd as d as dasd"',
                        timeChecked: '2023-10-05 12:00 PM',
                    },
                    {
                        status: 'Failed',
                        action: 'npm install',
                        timeChecked: '2023-10-05 12:45 PM',
                    },
                    {
                        status: 'Success',
                        action: 'ls -l',
                        timeChecked: '2023-10-05 10:30 AM',
                    },
                    {
                        status: 'Failed',
                        action: 'cd /home/user',
                        timeChecked: '2023-10-05 11:15 AM',
                    },
                    {
                        status: 'Success',
                        action: 'git commit -m "Initial commit"',
                        timeChecked: '2023-10-05 12:00 PM',
                    },
                    {
                        status: 'Failed',
                        action: 'npm install',
                        timeChecked: '2023-10-05 12:45 PM',
                    },
                    {
                            status: 'Failed',
                            action: 'cd /home/user',
                            timeChecked: '2023-10-05 11:15 AM',
                        },
                        {
                            status: 'Success',
                            action: 'git commit -m "Initial commit dasd sad s das d as d asd as d as dasd"',
                            timeChecked: '2023-10-05 12:00 PM',
                        },
                        {
                            status: 'Failed',
                            action: 'npm install',
                            timeChecked: '2023-10-05 12:45 PM',
                        },
            ];
        
        
            return (

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "50vh" }}>
                        <Navbar/>
                        <div style={{ width: "100%", maxWidth: "800px", maxHeight: "50vh" }}>
                        <h1 style={{textAlign:"center"}}>Terminal Emulator</h1>
                    <Terminal commands={commands} />
                    </div>
                </div>
            );
}

export default Status;
       
