import { defaultModules, defaultStack, Stack } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
const { defaults } = require('@pnotify/core');
import { error } from '@pnotify/core';


defaultModules.set(PNotifyMobile, {});

const newStack = new Stack({
    dir1: 'down',
    dir2: 'right',
    firstpos1: 110,
    firstpos2: 360,
    spacing1: 36,
    spacing2: 36,
    push: 'bottom',
    context: document.body
});

defaults.delay = '2500';
defaults.maxTextHeight = null;
defaults.type = 'error';
defaults.stack = newStack;
// defaultStack = newStack;
// Stack = newStack;

