const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rockBands = {
    'the beatles':{
        "1":"John Lennon",
        "2":"Paul McCartney",
        "3":"George Harrison",
        "4":"Ringo Starr"
    },
    'nirvana':{
        "1":"Kurt Cobain",
        "2":"Krist Novoselic",
        "3":"Dave Grohl",
    },
    'uknown':{
        'message': "We don't have info on that band"
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:bandName', (request,response)=>{
    const bandsName = request.params.bandName.toLowerCase()
    if(rockBands[bandsName]){
        response.json(rockBands[bandsName])
    }else{
        response.json(rockBands['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})