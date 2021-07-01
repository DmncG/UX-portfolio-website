import React from 'react';
import {AnimatePresence} from 'framer-motion';
import './src/styles/global.css';

export const wrapPageElement = ({element}) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);