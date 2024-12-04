// Self-Executing Anonymous Function (Immediately Invoked Function Expression - IIFE)
// Prevents polluting the global namespace
(function () {
    'use strict';

    // DOM Ready Handler
    document.addEventListener('DOMContentLoaded', function () {
        console.log('DOM fully loaded and parsed');

        // Example: Selecting an element
        const button = document.getElementById('clickMe');
        if (button) {
            button.addEventListener('click', function () {
                alert('Button clicked!');
            });
        }
    });

    // Utility Functions
    const utils = {
        // Example: Function to log messages
        log: function (message) {
            console.log(message);
        },

        // Example: Function to query DOM elements
        query: function (selector) {
            return document.querySelector(selector);
        },

        // Example: Function to debounce an action
        debounce: function (func, delay) {
            let timeout;
            return function (...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(this, args), delay);
            };
        },
    };

    // Export utilities for external use (if needed)
    window.utils = utils;

    // Example Usage of Utility Functions
    utils.log('JavaScript Boilerplate Initialized');
})();
