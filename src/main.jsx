import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Debug helper: log app startup and catch render errors so they appear in the browser console
try {
	console.log('[dev] App: starting render', { time: new Date().toISOString() });
	const rootEl = document.getElementById('root');
	if (!rootEl) {
		console.error('[dev] App: root element not found (expected <div id="root"> in index.html)');
	} else {
		createRoot(rootEl).render(<App />);
		console.log('[dev] App: render complete');
	}
} catch (err) {
	console.error('[dev] App: render error', err);
	// show a friendly overlay so it's visible even if the console is closed
	try {
		const pre = document.createElement('pre');
		pre.style.position = 'fixed';
		pre.style.left = '8px';
		pre.style.bottom = '8px';
		pre.style.background = 'rgba(0,0,0,0.85)';
		pre.style.color = 'white';
		pre.style.padding = '12px';
		pre.style.zIndex = 999999;
		pre.textContent = `Render error: ${err && err.message ? err.message : String(err)}`;
		document.body.appendChild(pre);
	} catch (e) {
		// ignore
	}
}
