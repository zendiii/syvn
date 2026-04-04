/**
 * script.js — Custom JavaScript for SYVN Resume Website
 * Version: 2.1.0
 *
 * Initializes ProgressBar.js semi-circle animations on page load.
 * Each progress bar animates from 0% to 100% with a color gradient
 * (black → green) to visually represent completion.
 *
 * Dependencies:
 *   - ProgressBar.js (loaded via CDN or js/main.js)
 *
 * Targets:
 *   #progress    — FSU education progress (bounce easing, 10s)
 *   #progress2   — TCC education progress (easeInOut, 11s)
 *   #skprogress  — Skill progress bar 1 (easeInOut, 11s)
 *   #skprogress2 — Skill progress bar 2 (easeInOut, 11s)
 *
 * Known Issues:
 *   - "progress sk3" targets '#skprogress2' (duplicate selector, should be '#skprogress3')
 *   - All progress bar configs reuse the variable name 'circle' (works but not ideal)
 */

window.onload = function onLoad() {

    // --- Education: Florida State University ---
    //progress fsu
    var circle = new ProgressBar.SemiCircle('#progress', {
        color: '#ffffff',
        duration: 10000,
        easing: 'bounce',
        strokeWidth: 4,
        from: {
            color: '#000000',
            a: 0
        },
        to: {
            color: '#0CF910',
            a: 1
        },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + '% ');
            }
        
        }
    });
    circle.animate(1.0);

    // --- Education: Tallahassee Community College ---
    //progress tcc
    var circle = new ProgressBar.SemiCircle('#progress2', {
        color: '#ffffff',
        duration: 11000,
        easing: 'easeInOut',
        strokeWidth: 4,
        from: {
            color: '#000000',
            a: 0
        },
        to: {
            color: '#0CF910',
            a: 5
        },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + '%');
            }

        }
    });
    circle.animate(1.0);

    // --- Skills: Progress Bar 1 ---
    //progress sk1
    var circle = new ProgressBar.SemiCircle('#skprogress', {
        color: '#ffffff',
        duration: 11000,
        easing: 'easeInOut',
        strokeWidth: 4,
        from: {
            color: '#000000',
            a: 0
        },
        to: {
            color: '#0CF910',
            a: 5
        },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + '%');
            }

        }
    });
    circle.animate(1.0);

    // --- Skills: Progress Bar 2 ---
    //progress sk2
    var circle = new ProgressBar.SemiCircle('#skprogress2', {
        color: '#ffffff',
        duration: 11000,
        easing: 'easeInOut',
        strokeWidth: 4,
        from: {
            color: '#000000',
            a: 0
        },
        to: {
            color: '#0CF910',
            a: 5
        },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + '%');
            }

        }
    });
    circle.animate(1.0);

    // --- Skills: Progress Bar 3 (BUG: targets '#skprogress2' instead of '#skprogress3') ---
    //progress sk3
    var circle = new ProgressBar.SemiCircle('#skprogress2', {
        color: '#ffffff',
        duration: 11000,
        easing: 'easeInOut',
        strokeWidth: 4,
        from: {
            color: '#000000',
            a: 0
        },
        to: {
            color: '#0CF910',
            a: 5
        },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + '%');
            }

        }
    });
    circle.animate(1.0);

    
    
    
};
