module.exports=(data) => {
    console.log(data)
    return `${data.forEach((element) => {   
        return `${element["token"].forEach((e1,index)=>{
            return`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <div>${element["name"]}</div>
                <div>${e1}</div>
                <div>${element["mobileNo"][index]}</div>
            </body>
            </html>`
        })}`
    })}`
};
