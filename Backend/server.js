import express from "express";
const app = express();

app.use((req,res,next)=>{
    console.log(req.method, req.url);
    next();
});


// A bunch of 5 Jokes in an array
app.get("/api/jokes", (req,res) => {
    const jokes = [
        {
            id: 1,
            title: "Why did the tomato turn red?",
            joke: "Because it saw the salad dressing!"
        },
        {
            id: 2,
            title: "Why did the scarecrow win an award?",
            joke: "Because he was outstanding in his field!"
        },
        {
            id: 3,
            title: "Why did the bicycle fall over?",
            joke: "Because it was two-tired!"
        },
        {
            id: 4,
            title: "Why did the math book look sad?",
            joke: "Because it had too many problems!"
        }
    ]
    res.send(jokes)
})
app.get("/",(req,res) => {
    res.send("hello thhere !!")
})
const port = process.env.PORT || 5000;

app.listen(port , () => {
    console.log(`Server at http://localhost:${port}`)
})
