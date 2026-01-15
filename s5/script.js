function profile(username , cb){
    console.log("fetching profilr data")
    setTimeout(() => {
        cb({_id : 12122, username , age : 26 , email : "huihui@hui.com"})
    }, 2000)
}
function saarePost(id , cb){
    console.log("fetching all data")
    setTimeout(() => {
        cb({_id : id , posts : ["hey" , "hello" , "hii"]})
    } , 3000)
}
function savePost(id , cb){
    console.log("fetching saved post")
    setTimeout(() => {
        cb({_id : id , saved : [1,2,3,4]})
    } , 3000)
}
profile("harsh" , function(data){
    console.log(data)
    saarePost(data._id , function(post){
      console.log(post)
      savePost(data._id , function(saved){
        console.log(saved)
      })

    })
})