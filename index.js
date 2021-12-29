let apiKey = '93cabb8e9bbb9fd3cd637493234e2f16f2729a9bcefecde6e67ade15';
let url = `https://api.ipdata.co?api-key=${apiKey}`

fetch(url)
.then(res => res.json())
.then(data => {
  document.getElementById('ip').innerText = data.ip
  document.getElementById('image').src = data.flag
  document.getElementById('country').innerText = data.country_name

  if(data.count > 1490){
    alert('Something went wrong')
  }

  console.log(data);
})
