//Получаем данные из json
function getData() {
return fetch('src/bd/bd.json')  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);   
      }
      return response.json();
    }  
  )  
  .catch(function(err) {  
    console.log('Fetch Error', err);  
  })
}

export {getData};


