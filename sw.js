// self.addEventListener("install", e =>{
//      console.log("Hioijj")
//     e.waitUntil(
//         caches.open("static").then(cache =>{
//             console.log("Hi")
//             return cache.addAll(["./index.html", "./style.css", "./index.js", "./icons/apple-icon-180.png"])
//         })
//     );
// })

// self.addEventListener("fetch", e=>{
//     console.log(`Intercepting for: ${e.request.url}`)

//     e.respondWith(
//         caches.match(e.request).then(response=>{
//             return response || fetch(e.request);
//         })
//     )

// })