let students=[

{

"name": "raj",

"marks": [50,20,30,52,90],

"medium": "english",

"parents_details": {

"parents_qualification": "educated",

"father_name": "ramu"

}

},

{

"name": "regho",

"marks": [70,35,50,60,90],

"medium": "english",

"parents_details": {

"parents_qualification": "non-educated",

"father_name": "ranjith"

}

},

{

"name": "ragu",

"marks": [50,50,35,50,100],

"medium": "tamil",

"parents_details": {

"parents_qualification": "non-educated",

"father_name": "rajeev"

}

},

{

"name": "kumar",

"marks": [50,30,30,52,100],

"medium": "english",

"parents_details": {

"parents_qualification": "educated",

"father_name": "rajesh"

}

},

{

"name": "sathesh",

"marks": [49,19,30,40,12],

"medium": "tamil",

"parents_details": {

"parents_qualification": "non-educated",

"father_name": "ramu"

}

},

{

"name": "sundar",

"marks": [70,70,40,40,80],

"medium": "tamil",

"parents_details": {

"parents_qualification": "non-educated",

"father_name": "remo"

}

}

]

const passesStudents = students.filter(students.marks.every(marks=>marks=>30));
console.log(passedStudents);