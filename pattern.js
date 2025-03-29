//5x5
function printSquare(n){
    for(i=0;i<n;i++){
        row = ''
        for(j=0;j<n;j++){
            row+=" +"
        }
        console.log(row)

    }
    printSquare(5);
}

//triangle
function printTriangle(n){
    for(i=0;i<n;i++){
        row = ''
        for(j=0;j<n;j++){
            row+=" +"
        }
        console.log(row)
    }
    printTriangle(5);
}

//pyramid
function printPyramid(n){
    for(i=0;i<=n;i++){
        row = ''
        for(j=0;j<n;j++){
            if(j<n-i){
                row += ''
            }else{
                row += ' *'
            }
            }
            console.log(row)
        }
    }
    printPyramid(5)
    
//diamond
    function printDiamond(n){
        for(i=1;i<=n;i++){
            row = ''
            for(j=0;j<n;j++){
                if(j<n-i){
                row += ' '
                }else{
                    row += ' *'
                }
            }
            console.log(row)
        }
        for(i=n-1;i>0;i--){
            row = ''
            for(j=0;j<n;j++){
                if(j<n-i){
                row += ' '
                }else{
                    row += ' *'
                }
            }
            console.log(row)
        }
    }
    
    printDiamond(5);

    //number pyramid
    function printNumberPyramid(n) {
        for (let i = 1; i <= n; i++) {
            console.log(String(i).repeat(i)); 
        }
    }
    
   
    printNumberPyramid(4);
    
//
    function printNumberPyramid(n) {
        for (let i = 1; i <= n; i++) {
            let spaces = " ".repeat(n - i); // Leading spaces
            let numbers = (String(i) + " ").repeat(i).trim(); // Numbers with space
            console.log(spaces + numbers);
        }
    }
    
   
    printNumberPyramid(4);

    
//Pascals Triangle
    function printPascalsTriangle(n) {
        let triangle = [];
        
        for (let i = 0; i < n; i++) {
            triangle[i] = [];
            for (let j = 0; j <= i; j++) {
                if (j === 0 || j === i) {
                    triangle[i][j] = 1;
                } else {
                    triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
                }
            }
        }
    
        for (let row of triangle) {
            console.log(row.join(" "));
        }
    }
    
    
    printPascalsTriangle(5);


//Hollow Square
    function printHollowSquare(n) {
        for (let i = 0; i < n; i++) {
            let row = "";
            for (let j = 0; j < n; j++) {
                if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                    row += "* ";
                } else {
                    row += "  ";
                }
            }
            console.log(row);
        }
    }
    
    
    printHollowSquare(5);


//Hourglass
    function printHourglass(n) {
        for (let i = 0; i < n; i++) {
            console.log(" ".repeat(i) + "* ".repeat(n - i));
        }
        for (let i = n - 2; i >= 0; i--) {
            console.log(" ".repeat(i) + "* ".repeat(n - i));
        }
    }
    
    
    printHourglass(4);

    
    
    
    
    
    
