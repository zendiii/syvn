/**
 * script.js — Custom JavaScript for SYVN Resume Website
 * Version: 2.1.0
 *
 * Initializes ProgressBar.js line (straight bar) animations on page load.
 * Each progress bar animates from 0% to 100% with a color gradient
 * (black → green) to visually represent completion.
 *
 * Dependencies:
 *   - ProgressBar.js (loaded via js/main.js)
 *
 * Targets:
 *   #progress    — FSU education progress (bounce easing, 3s)
 *   #progress2   — TCC education progress (easeInOut, 3.5s)
 */

window.onload = function onLoad() {

    // --- Education: Florida State University ---
    var bar1 = new ProgressBar.Line('#progress', {
        color: '#ffffff',
        duration: 3000,
        easing: 'bounce',
        strokeWidth: 3,
        trailColor: '#333',
        trailWidth: 1,
        from: {
            color: '#000000'
        },
        to: {
            color: '#0CF910'
        },
        step: function (state, bar) {
            bar.path.setAttribute('stroke', state.color);
            var value = Math.round(bar.value() * 100);
            bar.setText(value === 0 ? '' : value + '%');
        }
    });
    bar1.animate(1.0);

    // --- Education: Tallahassee Community College ---
    var bar2 = new ProgressBar.Line('#progress2', {
        color: '#ffffff',
        duration: 3500,
        easing: 'easeInOut',
        strokeWidth: 3,
        trailColor: '#333',
        trailWidth: 1,
        from: {
            color: '#000000'
        },
        to: {
            color: '#0CF910'
        },
        step: function (state, bar) {
            bar.path.setAttribute('stroke', state.color);
            var value = Math.round(bar.value() * 100);
            bar.setText(value === 0 ? '' : value + '%');
        }
    });
    bar2.animate(1.0);

};
