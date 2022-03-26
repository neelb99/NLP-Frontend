import React,{useState,useEffect,useRef} from 'react';
import { makeStyles, InputAdornment, TextField, Card, Avatar, Snackbar, IconButton } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import CloseIcon from '@material-ui/icons/Close'
import MicNoneIcon from '@material-ui/icons/MicNone';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import HomeContainer from '../HomeContainer.js'

const Home = ()=>{

	const useStyles = makeStyles({
	  behindText:{
	    position:'fixed',
	    bottom:0,
	    width:"100%",
	    height:"81px",
	    backgroundColor:"#f2f2f2",
	  },
	  textField:{
	    position:'fixed',
	    bottom:15,
	    width:"90%",
	    marginLeft:"5%",
	    left:0,
	    backgroundColor:"#fff",
	  },
	  botChatCont:{
	    left:0,
	    width:"80%",
	    marginTop:"20px",
	    display:'flex',
	  },
	  botReply:{
	    backgroundColor:"#3f51b5",
	    color:"#fff",
	    maxWidth:"60%",
	    padding:"10px",
	    marginLeft:"10px",
	    hyphens: 'auto',
	  },
	  botAvatar:{
	    color:"#fff",
	    backgroundColor:"#3f51b5",
	    marginLeft:"10px"
	  },
	  userChatCont:{
	    width:"100%",
	    display:'flex',
	    marginTop:"20px",
	  },
	  userReply:{
	    backgroundColor:"#fff",
	    color:"#262626",
	    maxWidth:"60%",
	    padding:"10px",
	    marginRight:"10px",
	    marginLeft:'auto',
	  },
	  userAvatar:{
	    color:"#262626",
	    backgroundColor:"#fff",
	    marginRight:"10px"
	  },
	  chatCont:{
	    top:80,
	    bottom:90,
	    width:"100%",
	    overflowY:"auto",
	    position:"fixed",
	  }
	})

	const WelcomeMessage=`Welcome to Fake news detection bot, send me your news and I will try to verify it!`
  const [chatHistory,setChatHistory] = useState([{type:'bot',message:WelcomeMessage}]);
  const [listening, setListening] = useState(false);
  let speechNotAvailable=null;
  if (!('webkitSpeechRecognition' in window)) {
    speechNotAvailable="Speech to text not available please use google chrome"
  }else{

    var SpeechRecognition = window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.interimResults = false;

    recognition.onresult = async function(event) {
        var last = event.results.length - 1;
        var command = event.results[last][0].transcript;
        setListening(false);
        setUserChat(command)
    };

    recognition.onspeechend = function() {
        recognition.stop();
    };

    recognition.onerror = function(event) {
      console.log('Error occurred in recognition: ' + event.error);
    }        

  }
  const classes = useStyles()
  const [userChat,setUserChat]=useState('');
  const [isSnackBarOpen,setSnackBar] = useState(false)
  const chatEndRef = React.createRef()

  const scrollToBottom = () => {
    var elem = document.getElementById('scrolldiv');
    elem.scrollTop = elem.scrollHeight;
  }

  useEffect(scrollToBottom,[chatHistory])

  const inputRef = useRef(null)

  // Function to get reply
  const getBotMsg=async e=>{
    inputRef.current.focus()
      const currentmsg = userChat
      setUserChat('')
      if(!currentmsg.length ){
        setSnackBar(true);
        return;
      }
      await setChatHistory([...chatHistory,{type:"user",message:currentmsg}])
      const response = await fetch("http://127.0.0.1:5000/predict",
      {
            body: JSON.stringify({msg:currentmsg}),
            method: "POST",
            headers:{
              "content-type":"application/json"
            }
      });
      console.log(response)
      const data = await response.json()
      console.log(data)
      setChatHistory([...chatHistory,{type:"user",message:currentmsg},{type:"bot",message:data}]);
      scrollToBottom();
      inputRef.current.focus()
  }

  const checkListening = ()=>{
    if(!speechNotAvailable){
    if(listening===false )
      return <MicNoneIcon style={{paddingRight:"10px"}} fontSize="large" onClick={()=>{setListening(true); recognition.start()}}/>
    else
      return <MicIcon style={{paddingRight:"10px"}} fontSize="large" onClick={()=>{setListening(false); recognition.stop()}} />
    }else{
      alert(speechNotAvailable)
    }
  }

  // function to render chats
  const renderChat=({type,message},index)=>{
    if(type==="bot"){
      return(
        <div key={index} className={classes.botChatCont}>
          <div className="Mssg"><Avatar className={classes.botAvatar}><AnnouncementIcon /></Avatar></div><Card className={[classes.botReply,"message"].join(' ')}>{message}</Card>
        </div>
      )
    }

    return (
      <div key={index} className={classes.userChatCont}>
        <Card className={classes.userReply}>{message}</Card><Avatar className={classes.userAvatar}><PersonOutlineIcon /></Avatar>
      </div>
    )
  }



  // event listner for enter key
  const onKeyPress = e=>{
    if(e.key==="Enter") {
      getBotMsg()
      e.preventDefault()
    }
  }

    const testRender = ()=>{
        return <> {chatHistory.map((item,index)=>renderChat(item,index))}
        </>
    }
  
    return (
      <HomeContainer>

      <div className={classes.chatCont} id="scrolldiv">
      {/* The main chat screen */}
        {testRender()}
        <div ref={chatEndRef} />
      </div>
      {/* Message box */}
        <div className={classes.behindText}>
            <TextField
            multiline
            rowsMax="2"
            placeholder="Message"
            variant="outlined"
            className={classes.textField}
            value={userChat}
            onKeyPress={onKeyPress}
            onChange={e=>setUserChat(e.target.value)}
            inputRef={inputRef}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {!speechNotAvailable?checkListening():null}
                  <SendIcon onClick={getBotMsg}/>
                </InputAdornment>
                
              ),
            }}
            />
            </div>
                   
        {/* Snackbar */}
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={isSnackBarOpen}
          autoHideDuration={6000}
          onClose={()=>setSnackBar(false)}
          message="Cannot send an empty message"
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={()=>{setSnackBar(false); }}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </HomeContainer>
    );
  
}

export default Home;