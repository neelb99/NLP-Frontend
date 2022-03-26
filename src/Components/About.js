import React from 'react'
import CustomContainer from '../Container.js'
import {Grid,Paper,Typography,CardActionArea,Card,CardContent,Hidden,CardMedia} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';

const About = ()=>{
	const history = useHistory()
	const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://image.cnbcfm.com/api/v1/image/104343217-Fake_news._GettyImages-645357576.jpg?v=1561442287&w=678&h=381)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.8)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
}));

const mainFeaturedPost = {
  title: 'What is Fake News',
  description:
    "Fake News is created to deliberately misinform readers. These stories either influence people’s views, push a political agenda or cause confusion.",
  image: 'https://www.sciencenews.org/wp-content/uploads/2018/07/080418_fakenews_feat.jpg',
  imgText: 'main image description'
};

const featuredPosts = [
  {
    title: 'Chatbot',
    description:
      'We have created a chatbot to which users can send links to articles or text messages and get feedback about the authenticity.',
    image: 'https://www.messengerpeople.com/wp-content/uploads/2019/11/chatbot-the-best-2.png',
    imageText: 'Image Text',
    link: '/chatbot'
  },
  {
    title: 'Machine Learning',
    description:
      'Our model uses a machine learning which has been trained using over 20,000 pieces of text to decide if the news is fake.',
    image: 'data:image/jpeg;base64,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',
    imageText: 'Image Text',
    link: '/chatbot'
  },
  {
    title: 'Sentiment Analysis',
    description:
      'Our system also analyzes the sentinment in a piece of text and tells the user if the text is positive, neutral or negative.',
    image: 'https://d1sjtleuqoc1be.cloudfront.net/wp-content/uploads/2019/04/25112909/shutterstock_1073953772.jpg',
    imageText: 'Image Text',
    link: '/chatbot'
  },
  {
    title: 'Created By',
    description:
      'This project was created by Abhishek Sharma, Adarsh Gupta, Kunal Bhojane and Neel Bajaj as a project for NLP',
    image: 'https://www.visor.ai/wp-content/uploads/artigo-nlp-27.jpg',
    imageText: 'Image Text',
    link: '/chatbot'
  }
];

	const classes = useStyles();
	return(	
		<CustomContainer>
      <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${mainFeaturedPost.image})` }}>
      {<img style={{ display: 'none' }} src={mainFeaturedPost.image} alt={mainFeaturedPost.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          				<div className={classes.mainFeaturedPostContent}>
            				<Typography component="h1" variant="h3" color="inherit" gutterBottom>
              				{mainFeaturedPost.title}
            				</Typography>
            				<Typography variant="h5" color="inherit" paragraph>
              				{mainFeaturedPost.description}
            				</Typography>
          				</div>
        				</Grid>
      				</Grid>
					</Paper>
          <Grid container spacing={4}>
            {featuredPosts.map((post,key) => (
              <Grid item key={key} xs={12} md={6}>
					      <CardActionArea component="a" href="#" onClick={()=>history.push(post.link)}>
					        <Card className={classes.card}>
					          <div className={classes.cardDetails}>
					            <CardContent>
					              <Typography component="h2" variant="h5">
					                {post.title}
					              </Typography>
					              <Typography variant="subtitle1" color="textSecondary">
					                {post.date}
					              </Typography>
					              <Typography variant="subtitle1" paragraph style={{marginTop:"5px"}}>
					                {post.description}
					              </Typography>
					            </CardContent>
					          </div>
					          <Hidden xsDown>
					            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
					          </Hidden>
					        </Card>
					      </CardActionArea>
					    </Grid>
            ))}
          </Grid>
 
		</CustomContainer>
	);
}

export default About