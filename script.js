function showNewEventModal() {
    $('#newevent').modal('show')
}

// var h = document.createElement('h1')
// var myValue = document.createTextNode('Hello World!')

// h.appendChild(myValue)

// document.querySelector('h1').appendChild(h)
var ul = document.getElementById('list');
var li;

var addB = document.getElementById('add');
addB.addEventListener('click', addItem);

var removeB = document.getElementById('remove');
removeB.addEventListener('click', removeItem);

var removeA = document.getElementById('removeall');
removeA.addEventListener('click', removeAll);




function addItem() {
    li = document.createElement('li')
    let input = document.getElementById('input')

    if (input.value == '') {
        let warn = document.createElement('h4')
        warn.appendChild(document.createTextNode('Please Enter Something!'))
        let controls = document.querySelector('.controls')
        controls.appendChild(warn)
        controls.insertBefore(warn, controls.childNodes[4])
        setTimeout(() => {
            controls.removeChild(warn)
        }, 3000);
    } else {
        let nin = document.createElement('input')
        let lab = document.createElement('label')
        nin.type = 'checkbox'
        nin.id = 'check'
        lab.appendChild(document.createTextNode(input.value))
        li.appendChild(nin)
        li.appendChild(lab)
        ul.insertBefore(li, ul.childNodes[0])
        setTimeout(() => {
            li.className = 'visual'
        }, 2);
        input.value = ''
    }
}

function removeItem() {
    li = ul.children;
    for (let i = 0; i < li.length; i++) {
        while (li[i] && li[i].children[0].checked) {
            ul.removeChild(li[i]);
        }
    }
}

function removeAll() {
    li = ul.children;
    for (let i = 0; i < li.length;) {
        ul.removeChild(li[i])
    }
}