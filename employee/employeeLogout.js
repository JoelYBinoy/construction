
var employeeUniqueIdSavedFromDbInLsIndex = localStorage.getItem('employeeUniqueIdSavedFromDbInLsIndex');

var dateNow = new Date();
var formattedDate = dateNow.toISOString().slice(0,10);

var options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
var formattedLogoutTime = dateNow.toLocaleTimeString('en-US', options);

function employeeLogout () {

    // const postData = {
    //     "query": "UPDATE attendance set status='Loggedout', logout_time='"+formattedLogoutTime+"' where emp_f_id='"+employeeUniqueIdSavedFromDbInLsIndex+"' AND date='"+formattedDate+"';"
    //     };
    // console.log("post data in attendance list update is===== is ", postData);

    // axios.post('https://gitfunswokhu.in/api/v1/users/getQuery', postData)
    //     .then((response) => {
    //         console.log('Logged out successfully :', response.data);
            alert('successfully logged out');
            // console.log('The new username for the applicant is :',username)


            localStorage.removeItem('integritatEmployeeLoginCheck')
            window.location.reload()

            window.location.href = '../index.html'
            
            // window.location.reload();
           
             
        // })


}