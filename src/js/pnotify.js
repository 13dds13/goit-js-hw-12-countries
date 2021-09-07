import { defaultModules, defaultStack, Stack } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
const { defaults } = require('@pnotify/core');

defaultModules.set(PNotifyMobile, {});

// const newStack = new Stack({
//     dir1: 'down',
//     dir2: 'left',
//     firstpos1: 50,
//     firstpos2: 225,
//     spacing1: 36,
//     spacing2: 36,
//     push: 'bottom',
//     context: document.body
// });

defaults.delay = '2500';
defaults.maxTextHeight = null;
// defaultStack = newStack;
// Stack = newStack;

