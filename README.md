# project-scrollCanvas

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-3rtvh3)



# 获取coolsite图片

```
var url = `https://www.coolsite360.com/materialslib/materialslist.json?size=180&for=category&id=20548&portal_type=&_request_id_=47e5880b38d58c546515965a1f86d395`

fetch(url).then( v => v.json()).then(data => {
  const d = data.data.results;
  var sortedResults = d.slice().sort((a, b) => {
      if (Number(a.title.match(/\d+/)) < Number(b.title.match(/\d+/))) {
          return -1;
      } 
      if (Number(a.title.match(/\d+/)) > Number(b.title.match(/\d+/))) {
          return 1;
      }
      return 0;
  });
  console.log(JSON.stringify(sortedResults.map(v => v.origin)))
})





```