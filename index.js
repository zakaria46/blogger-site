import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

let postCount = 0;
let formObj = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    if (postCount > 0) {
        res.render('index.ejs', { formObj: formObj });
    } else if (postCount === 0) {
        res.render('index.ejs');
    }

});

app.get('/submit_form', (req, res) => {
    postCount += 1;
    res.render('submit_blog.ejs', { postCount: postCount });
});

app.post('/submit', (req, res) => {

    // passing the data from the form as a created object into the array to EJS file 
    let title = req.body[`title${postCount}`];
    let paragraph = req.body[`paragraph${postCount}`];
    // let numOfPosts = postCount;
    // console.log(numOfPosts);

    formObj.push(
        {
            titleName: title,
            paragraphContent: paragraph,
            // postsNum: numOfPosts 
        }
    );

    formObj.reverse();
    // formObj.forEach((element, index) => {
    //     console.log(element);
    //     // console.log(index); 
    // });

    res.render('index.ejs', { formObj: formObj });
});


// route handler for directing the user from the form responsible for the update
app.get('/index.ejs', (req, res) => {
    res.send(`<h1>Your Post was updated successfully <a href="/">Click Here To Return To Home Page!</a>
    </h2>`);
})

app.post('/update', (req, res) => {
    let updatedTitle = req.body['updatedTitle'];
    let updatedParagraph = req.body['updatedParagraph'];
    let index = parseInt(req.body['index']);

    formObj.splice(index, 1);
    // console.log(formObj);

    formObj.push(
        {
            titleName: updatedTitle,
            paragraphContent: updatedParagraph
        }
    );

    formObj.reverse();

    /* Reload page feature to be implemented to display all posts */
    res.redirect('/index.ejs');
})

app.post('/delete', (req, res) => {
    let index = parseInt(req.body['index']);

    formObj.splice(index, 1);  
    res.send('Your Post was deleted');
})

app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
});