import React from 'react'
import { useEffect, useState, useRef } from 'react' 
import { useNavigate } from "react-router-dom";
import QuestionChat from './QuestionChat'

export default function Chat({ host, lobby, currentUser, currentHost}) {
    const [messages , setMessages] = useState([])
    const [lobbyHost, setLobbyHost] = useState({})
    const [aUser, setAUser] = useState({})
    const [input, setInput] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        let ws;
        const request = async () => {
            let req = await fetch(`http://localhost:3000/messages/${lobby.id}`)
            let res = await req.json()
            setMessages(res)
            console.log(res)
        }
        
        const connect = async () => {
            ws = new WebSocket("ws://localhost:3000/cable")
            ws.onopen = () => {
                console.log("WS is on!")
            ws.send(JSON.stringify({"command": "subscribe", "identifier": `{"channel": "ChatLobbyChannel", "lobby_id": ${lobby.id}}`}))
            }

            ws.onmessage = (event) => {
                const {data} = event;
                let payload = JSON.parse(data)
                if (payload.type === "ping" || payload.type ==="message")return;
                let x = JSON.parse(event.data)
                console.log("It still works :s", x)
                if (x.type === "confirm_subscription") return;
                const post = x?.message?.post
                if (post) {
                    setMessages(prevState => {
                        return [...prevState, post]
                    })
                }
            }
        }
        
        request();
        connect();
    }, []);

    useEffect(() => {
        fetch(`http://localhost:3000/hosts/${lobby.host_id}`)
            .then((res) => res.json())
            .then((data) => {
                setLobbyHost(data)
            })
    }, [])


    const handleSubmit = async (event) => {
        event.preventDefault();
        let req = await fetch(`http://localhost:3000/messages`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                "Accept": "application/json"
                },
            body: JSON.stringify({content: event.target.content.value, lobby_id: lobby.id, user_id: currentUser.id})
        })
        let res = await req.json()
        setInput('')
    };

    const leaveGame = () => {
        if (host) {
            fetch(`http://localhost:3000/lobbies/${currentHost.id}`, {
                method: "DELETE"
            })
                .then(navigate('/'))
        } else {
            fetch(`http://localhost:3000/users/${currentUser.id}`, {
                method: "DELETE"
            })
            .then(navigate('/'))
        }
    }


    const ScrollToBottom = () => {
        const messagesEndRef = useRef(null)

        const scrollToBottom = () => {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth"})
        }

        useEffect(() => {
            scrollToBottom();
        },[])
    
        useEffect(() => {
            scrollToBottom()
        })

        return <div ref={messagesEndRef} />
    }

    
  return (
    <div className='game-page'>
    {/* <QuestionChat lobbyHost={lobbyHost} lobby={lobby} currentUser={currentUser} /> */}
      <div className='chat'>
        <div className='title-container'>
            <h1 className='title'>Lobby Name: {lobby.lobbyname}</h1>
            <h3 className='sub-title'>Category: {lobby.category}</h3>
            <div className='x-btn'onClick={() => leaveGame()}>X</div>
        </div>
          <nav className="nav">
              <ul className="nav__list">
                  {host ? <li className="nav__item">Your Answer: {lobby.answer}</li> : <li className="nav__item">Ask the Host questions!</li> }
              </ul>
              <span className="nav__warning-level">{lobby.lobbyname}</span>
          </nav>
        <div className='message-list'>
            <div className='message-list__container'>
                {
                    messages.map((message) => {
                        return (
                            <div className='message-item' key={message.created_at}>
                                <p className='message-username'>{message.user_id < 1 ? "HOST" : `${message.user.name}`}</p>
                                <p className='message-content'>{message.content}</p>
                            </div>
                        )
                    })
                }
                <ScrollToBottom />
            </div>
        </div>
        <form onSubmit={handleSubmit} className="message-form">
            <input name="content" className='message-form__textarea' placeholder="Type here..." autoComplete='off' value={input} onChange={(e) => setInput(e.target.value)}></input>
                <div className='message-form__actions'>
                    <button type="submit" className='message-form__submit'></button>
                </div>
        </form>
    </div>
  </div>
  )
}
