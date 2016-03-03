/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import {render} from 'react-dom';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export const DevTools = createDevTools(
    <LogMonitor theme='tomorrow' />
);

export const showDevTools = (store) => {
    const popup = window.open(null, 'Redux DevTools', 'menubar=no,location=no,resizable=yes,scrollbars=no,status=no');
    popup.location.reload();
    setTimeout(() => {
        popup.document.write('<div id="react-devtools-root"></div>');
        render(
            <DevTools store={store}/>,
            popup.document.getElementById('react-devtools-root')
        );
    },10);
};