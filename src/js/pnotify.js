import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
const { defaults } = require('@pnotify/core');

defaultModules.set(PNotifyMobile, {});

defaults.delay = '2500';
defaults.maxTextHeight = null;
