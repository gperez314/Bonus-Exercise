// Javascript File

// Declare variables
var count = 0;
var img = document.getElementById("im");

// Image links as array
var imgArray = ['https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

// Display first image
s = imgArray[count];
img.src = s;

// Previous Image Function
function getPrevious() {
    count = count - 1;
    if (count < 0) count = 2;
    s = imgArray[count];
    img.src = s;
}

// Next Image Function
function getNext() {
    count = (count + 1) % 3;
    s = imgArray[count];
    img.src = s;
}

