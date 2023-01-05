import React from 'react'
import { useEffect, useState } from 'react'

export default function QuestionChat({ lobbyHost, lobby, currentUser }) {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        let ws;
        const request = async () => {
            let req = await fetch(`http://localhost:3000/questions/${lobby.id}`)
            let res = await req.json()
            setQuestions(res)
            console.log(res)
        }

        const connect = async () => {
            ws = new WebSocket("ws://localhost:3000/cable")
            ws.onopen = () => {
                console.log("WS is on!")
                ws.send(JSON.stringify({ "command": "subscribe", "identifier": `{"channel": "QuestionFeedChannel", "lobby_id": ${lobby.id}}` }))
            }

            ws.onmessage = (event) => {
                const { data } = event;
                let payload = JSON.parse(data)
                if (payload.type === "ping" || payload.type === "message") return;
                let x = JSON.parse(event.data)
                console.log("It still works :s", x)
                if (x.type === "confirm_subscription") return;
                const post = x?.message?.post
                if (post) {
                    setQuestions(prevState => {
                        return [...prevState, post]
                    })
                }
            }
        }

        request();
        connect();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let req = await fetch(`http://localhost:3000/questions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify({ content: event.target.content.value, lobby_id: lobby.id, user_id: currentUser.id, host_id: lobbyHost.id })
        })
        let res = await req.json()
        console.log(res)
        // content = '';
    };

    return (
        <div className='chat'>
            <div className='title-chatbox'>
                <h3>Ask your Questions to: {lobbyHost.name}</h3>
            </div>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">File</li>
                    <li className="nav__item">Edit</li>
                    <li className="nav__item">Insert</li>
                </ul>
                <span className="nav__warning-level">{lobby.lobbyname}</span>
            </nav>
            <div className='message-list'>
                <div className='message-list__container'>
                    {
                        questions.map((q) => {
                            return (
                                <div className='message-item' key={q.created_at}>
                                    <p className='message-username'>{q.user_id < 1 ? "HOST" : `PLAYER ${q.user_id}`}</p>
                                    <p className='message-content'>{q.content}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <form onSubmit={handleSubmit} className="message-form">
                <input name="content" className='message-form__textarea' placeholder="Type here..."></input>
                <div className='message-form__actions'>
                    <button type="submit" className='message-form__submit'></button>
                </div>
            </form>
        </div>
    )
}
