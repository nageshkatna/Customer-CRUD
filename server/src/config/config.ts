const config = {
    mongo: {
        options: {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        },
        url: "mongodb+srv://nageshkatna:liferaft123@cluster0.enmfc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    },
    server: {
        host: 'localhost',
        port: 5000
    }
}

export default config