let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');
/*btn[0].onclick = function() {
    alert('btn');
};

btn[0].onclick = function() {
    alert('btn too');
};

btn[0].addEventListener('mouseenter', function() {
    alert ('btn 1');
});

btn[0].addEventListener('click', function(event) {
    console.log(event);
    let target = event.target;
    target.style.display = 'none';
    console.log('event: ' + event.type + ' on element ' + event.target);
});

wrap.addEventListener('click', function() {
    console.log('event: ' + event.type + ' on element ' + event.target);
});*/

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('event: ' + event.type + ' on element ' + event.target);
});

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('Exit');
    });
});