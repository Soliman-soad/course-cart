const courseList = []

function courseCounter(element){
    const courseName = element.parentNode.parentNode.childNodes[1].innerText;
    const courseFee = element.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    const tableBodyAdd = document.getElementById('course-info');
    let course = {
        courseName : courseName,
        courseFee : courseFee
    }
    courseList.push(course);
    tableBodyAdd.innerHTML='';
    let totalFeeOfCourse =0;
    for(let i=0; i < courseList.length ; i++){
        const newCourse = document.createElement('tr');
        newCourse.innerHTML = `
        <th>${i}</th>
        <td>${courseList[i].courseName}</td>
        <td>${courseList[i].courseFee}</td>
        `;
        tableBodyAdd.appendChild(newCourse);
        totalFeeOfCourse += parseInt(courseList[i].courseFee);
    }
    const newCourse = document.createElement('tr');
        newCourse.innerHTML = `
        <td></td>
        <th>Total Fee</th>
        <td>${totalFeeOfCourse}</td>
        `;
        tableBodyAdd.appendChild(newCourse);
}