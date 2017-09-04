window.onload = function onLoad() {
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
            color: '#11c1f3',
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

    circle.animate(0.6);

    
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
};
