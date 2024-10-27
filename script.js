//your JS code here. If required.

const square = document.querySelectorAll('.square');

square.forEach((sq) => {
    sq.addEventListener("mouseenter", () => {
        changedHoveredColor(sq);
    })

    sq.addEventListener("mouseleave", restcolor);
})

 function changedHoveredColor(hoveredSquare) {
    const square = document.querySelectorAll('.square');
    square.forEach((sq) => {
        if(hoveredSquare !== sq){
            sq.style.backgroundColor = '#6F4E37';
        }
    })
 }

 function restcolor(){
     const square = document.querySelectorAll('.square');
    square.forEach((sq) => {
        sq.style.backgroundColor = '#E6E6FA';
    })
 }
